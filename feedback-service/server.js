/* Feedback mailer for the Antz Onboarding Guide.
   Receives the guide's feedback form as JSON on POST /api/feedback and emails it through Brevo.
   Runs as its own Railway service, reached only through the site's Caddy over the private network.
   No dependencies: Node 18+ (built-in fetch). */
'use strict';
const http = require('node:http');

const env = (k, d) => (process.env[k] || d || '').trim();
const PORT = Number(env('PORT', '8080'));
const BREVO_API_KEY = env('BREVO_API_KEY');
const TO = env('FEEDBACK_TO', 'info@antzsystems.com');
const FROM = env('FEEDBACK_FROM');                                   // a sender verified in Brevo, on your own domain
const FROM_NAME = env('FEEDBACK_FROM_NAME', 'Antz Onboarding Guide');
const ORIGINS = env('ALLOWED_ORIGINS').split(',').map((s) => s.trim()).filter(Boolean);
const RATE_MAX = Number(env('RATE_LIMIT_MAX', '5'));                 // sends per IP per window
const RATE_WINDOW_MS = Number(env('RATE_LIMIT_WINDOW_MIN', '60')) * 60_000;
const MAX_BODY = 16 * 1024;

if (!BREVO_API_KEY || !FROM) {
  console.error('BREVO_API_KEY and FEEDBACK_FROM must be set');
  process.exit(1);
}

const TYPES = new Set(['suggestion', 'bug', 'content']);
const EMAIL_RE = /^[^\s@]{1,64}@[^\s@]{1,255}\.[^\s@]{2,}$/;

/* ---------- rate limit: fixed window per client IP, in memory ---------- */
const hits = new Map();
function limited(ip) {
  const now = Date.now();
  const h = hits.get(ip);
  if (!h || now - h.start > RATE_WINDOW_MS) { hits.set(ip, { start: now, n: 1 }); return false; }
  h.n += 1;
  return h.n > RATE_MAX;
}
setInterval(() => {
  const now = Date.now();
  for (const [ip, h] of hits) if (now - h.start > RATE_WINDOW_MS) hits.delete(ip);
}, 10 * 60_000).unref();

/* ---------- validation ---------- */
/* Plain text, trimmed, capped; control characters (CR/LF included) removed from single-line fields */
const line = (v, max) => (typeof v === 'string' ? v.replace(/[\u0000-\u001f\u007f]/g, ' ').trim().slice(0, max) : '');
const text = (v, max) => (typeof v === 'string' ? v.replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, '').trim().slice(0, max) : '');

function validate(b) {
  if (!b || typeof b !== 'object' || Array.isArray(b)) return null;
  const message = text(b.message, 5000);
  if (!message) return null;
  const rating = Number.isInteger(b.rating) && b.rating >= 1 && b.rating <= 5 ? b.rating : null;
  const type = TYPES.has(b.type) ? b.type : 'suggestion';
  const modules = Array.isArray(b.modules) ? b.modules.slice(0, 50).map((m) => line(m, 120)).filter(Boolean) : [];
  const notes = b.notes && typeof b.notes === 'object' && !Array.isArray(b.notes)
    ? Object.entries(b.notes).slice(0, 50).map(([k, v]) => [line(k, 120), text(v, 2000)]).filter(([k, v]) => k && v)
    : [];
  const name = line(b.name, 100);
  const emailRaw = line(b.email, 254);
  const email = EMAIL_RE.test(emailRaw) ? emailRaw : '';
  const language = line(b.language, 10);
  const page = line(b.page, 500);
  return { rating, type, modules, notes, message, name, email, emailRaw, language, page };
}

/* ---------- email ---------- */
function compose(f, ip) {
  const stars = f.rating ? `${'★'.repeat(f.rating)}${'☆'.repeat(5 - f.rating)} (${f.rating}/5)` : 'not given';
  const out = [
    `Type: ${f.type}`,
    `Rating: ${stars}`,
    `Modules: ${f.modules.length ? f.modules.join(', ') : 'the guide in general'}`,
    '',
    'Message:',
    f.message,
  ];
  if (f.notes.length) {
    out.push('', 'Notes per module:');
    for (const [k, v] of f.notes) out.push(`- ${k}: ${v}`);
  }
  out.push(
    '',
    '---',
    `Name: ${f.name || '-'}`,
    `Email: ${f.email || (f.emailRaw ? `${f.emailRaw} (not a valid address)` : '-')}`,
    `Language: ${f.language || '-'}`,
    `Page: ${f.page || '-'}`,
    `Received: ${new Date().toISOString()} from ${ip}`,
  );
  const subject = `Guide feedback: ${f.type}${f.rating ? ` (${f.rating}/5)` : ''}${f.modules.length ? ` · ${f.modules.slice(0, 3).join(', ')}` : ''}`.slice(0, 180);
  return { subject, textContent: out.join('\n') };
}

async function send(f, ip) {
  const { subject, textContent } = compose(f, ip);
  const body = {
    sender: { name: FROM_NAME, email: FROM },
    to: [{ email: TO }],
    subject,
    textContent,
  };
  /* The visitor's address is only ever a Reply-To, never the sender */
  if (f.email) body.replyTo = f.name ? { email: f.email, name: f.name } : { email: f.email };
  const r = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: { 'api-key': BREVO_API_KEY, 'content-type': 'application/json', accept: 'application/json' },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(10_000),
  });
  if (!r.ok) throw new Error(`Brevo ${r.status}: ${(await r.text()).slice(0, 300)}`);
}

/* ---------- http ---------- */
function reply(res, code, obj) {
  res.writeHead(code, { 'content-type': 'application/json', 'cache-control': 'no-store', 'x-content-type-options': 'nosniff' });
  res.end(JSON.stringify(obj));
}

/* Caddy sets X-Client-IP from its own trusted-proxy parsing; fall back to the socket */
const clientIp = (req) => line(req.headers['x-client-ip'], 64) || req.socket.remoteAddress || 'unknown';

const server = http.createServer((req, res) => {
  const url = req.url.split('?')[0];
  if (url === '/health') return reply(res, 200, { ok: true });
  if (url !== '/api/feedback') return reply(res, 404, { error: 'not_found' });
  if (req.method !== 'POST') { res.setHeader('allow', 'POST'); return reply(res, 405, { error: 'method_not_allowed' }); }
  if (!(req.headers['content-type'] || '').toLowerCase().startsWith('application/json')) return reply(res, 415, { error: 'unsupported_media_type' });
  /* Browsers always send Origin on a POST; this filters casual cross-site use, not scripts */
  if (ORIGINS.length && !ORIGINS.includes(req.headers.origin)) return reply(res, 403, { error: 'forbidden' });

  const ip = clientIp(req);
  if (limited(ip)) { res.setHeader('retry-after', String(Math.ceil(RATE_WINDOW_MS / 1000))); return reply(res, 429, { error: 'too_many_requests' }); }

  let size = 0;
  const chunks = [];
  req.on('data', (c) => {
    size += c.length;
    if (size > MAX_BODY) { reply(res, 413, { error: 'too_large' }); req.destroy(); return; }
    chunks.push(c);
  });
  req.on('end', async () => {
    if (res.headersSent) return;
    let body;
    try { body = JSON.parse(Buffer.concat(chunks).toString('utf8')); } catch { return reply(res, 400, { error: 'bad_request' }); }
    /* Honeypot: a field people never see; a bot that fills it gets a success it doesn't earn */
    if (body && typeof body.website === 'string' && body.website.trim()) return reply(res, 200, { ok: true });
    const f = validate(body);
    if (!f) return reply(res, 400, { error: 'bad_request' });
    try {
      await send(f, ip);
      reply(res, 200, { ok: true });
    } catch (e) {
      console.error(JSON.stringify({ level: 'error', msg: 'send failed', err: String(e.message || e), ip }));
      reply(res, 502, { error: 'send_failed' });
    }
  });
  req.on('error', () => { if (!res.headersSent) reply(res, 400, { error: 'bad_request' }); });
});

server.requestTimeout = 15_000;
server.headersTimeout = 10_000;
/* '::' listens on IPv6 and IPv4, which Railway's private network needs */
server.listen(PORT, '::', () => console.log(`feedback service on :${PORT}`));
