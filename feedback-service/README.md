# Feedback service

Emails the guide's feedback form (`#/feedback`) through Brevo. The website posts JSON to `/api/feedback`; the site's Caddy forwards that path to this service over Railway's private network. The service has no public domain, and the Brevo key never reaches the browser.

## Railway setup

1. In the same Railway project, **New → GitHub Repo**, pick this repo, then in the service's **Settings**:
   - **Root Directory:** `feedback-service`
   - **Service name:** `feedback` (this gives it the private address `feedback.railway.internal`)
   - **Networking:** don't generate a public domain
2. **Variables** on the `feedback` service:

   | Variable | Value |
   |---|---|
   | `BREVO_API_KEY` | Brevo → SMTP & API → API Keys |
   | `FEEDBACK_FROM` | A sender verified in Brevo (Senders, Domains & Dedicated IPs), e.g. `noreply@antzsystems.com` |
   | `FEEDBACK_TO` | Inbox that receives feedback (default `info@antzsystems.com`) |
   | `ALLOWED_ORIGINS` | The site's origin(s), comma-separated, e.g. `https://guide.antzsystems.com` |
   | `PORT` | `8080` |
   | `RATE_LIMIT_MAX` / `RATE_LIMIT_WINDOW_MIN` | Optional; default 5 per 60 minutes per IP |

3. On the **website** service, add `FEEDBACK_UPSTREAM` = `feedback.railway.internal:8080` (this is also Caddy's default), then redeploy it.

Authenticate your sending domain in Brevo (SPF + DKIM) so the mail isn't flagged as spam.

## What it checks

- POST only, JSON only, body ≤ 16 KB, `Origin` in `ALLOWED_ORIGINS`
- Rate limit per client IP (the IP comes from Caddy's `X-Client-IP`)
- Honeypot field `website`: if it's filled in, the service replies OK and sends nothing
- Every field is type-checked and length-capped; control characters are removed from single-line fields; the mail is plain text
- The recipient and sender are fixed on the server; the visitor's email is only a `Reply-To`
- Brevo errors are logged; the browser only gets `send_failed`

## Run locally

```
BREVO_API_KEY=... FEEDBACK_FROM=noreply@antzsystems.com node server.js
curl -X POST localhost:8080/api/feedback -H 'content-type: application/json' -d '{"message":"test","type":"bug","rating":4}'
```
