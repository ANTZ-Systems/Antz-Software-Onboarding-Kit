/* Antz Onboarding: renders the prospect-facing site from content.js (window.ANTZ_CONTENT).
   Content stays in data; this file only decides what to show and when. */
(function () {
  'use strict';

  const DATA = window.ANTZ_CONTENT;
  const app = document.getElementById('app');

  /* ---------- Language (see i18n.js) ---------- */
  const LANG = window.ANTZ_LANG || 'en';
  const PACK = window.ANTZ_I18N || {};
  const UI = window.ANTZ_UI_EN || {};
  /* Interface text in the current language, falling back to English; {name} is filled from vars */
  const t = (key, vars = {}) => String((PACK.ui && PACK.ui[key]) || UI[key] || key).replace(/\{(\w+)\}/g, (_, n) => (vars[n] ?? ''));
  const RTL = document.documentElement.dir === 'rtl';

  /* ---------- Presentation config (not content) ---------- */
  const AREA_LOOK = {
    records:    { photo: 'assets/photos/img-tasks.jpg',      glyph: 'chat' },
    animal:     { photo: 'assets/photos/img-movement.jpg',   glyph: 'pets' },
    medical:    { photo: 'assets/photos/img-hospital.jpg',   glyph: 'medical' },
    mortality:  { photo: 'assets/photos/img-chick.jpg',      glyph: 'egg' },
    operations: { photo: 'assets/photos/img-operations.jpg', glyph: 'report' }
  };
  /* Home banner photos, shown in turn (the tiger first); x/y is the part of each photo to keep in view,
     c its key colour (the animal's own, not the background), which washes over the change to it */
  const BANNERS = [
    ['tiger-home', '70%', '30%', '#C8702A'],
    ['macaw', '45%', '35%', '#C8201E'],
    ['wolf', '50%', '35%', '#7A7A74'],
    ['chameleon', '60%', '40%', '#4E9A2E'],
    ['lion', '65%', '58%', '#C77A34'],
    ['lorikeet', '52%', '35%', '#2A4FB8'],
    ['rhino', '60%', '40%', '#A8957A'],
    ['golden-pheasant', '60%', '35%', '#E3A21A'],
    ['koala', '50%', '30%', '#8C8F94'],
    ['mambas', '50%', '50%', '#5BC22A'],
    ['fox', '30%', '72%', '#D0743A'],
    ['bald-eagle', '55%', '40%', '#D9A02A'],
    ['zebra-stripes', '50%', '45%', '#6E6E6E'],
    ['red-panda', '45%', '45%', '#B8482A'],
    ['forest-lizard', '55%', '40%', '#C7A04A'],
    ['bear', '55%', '40%', '#8E5A30'],
    ['flamingo', '65%', '40%', '#E07A94'],
    ['jaguar', '45%', '40%', '#B8863A'],
    ['starling', '30%', '32%', '#1E7BB0'],
    ['alpaca', '55%', '58%', '#CDB89A'],
    ['python', '55%', '50%', '#5AA82A'],
    ['tiger-face', '50%', '40%', '#C4692A'],
    ['pigeon', '55%', '30%', '#3B4FC4'],
    ['okapi', '55%', '40%', '#7A3A22'],
    ['otter', '45%', '68%', '#7A6452'],
    ['giraffe', '45%', '68%', '#C8843A'],
    ['iguana', '55%', '45%', '#5E6B4A'],
    ['fawn', '55%', '40%', '#C87A40'],
    ['heron', '60%', '22%', '#8A4A3A'],
    ['baboon', '50%', '32%', '#C07468'],
    ['chameleon-2', '40%', '45%', '#3E9A34'],
    ['impala', '45%', '35%', '#C89A5A'],
    ['art-tiger', '50%', '45%', '#2E5A2A'],
    ['mouflon', '40%', '40%', '#7A4A2E'],
    ['langur-baby', '50%', '35%', '#C9B89A'],
    ['elks', '50%', '45%', '#7A4A30'],
    ['duck', '45%', '22%', '#6E9A3A'],
    ['tusks', '55%', '30%', '#8A7667'],
    ['grey-wolf', '50%', '35%', '#8A7458'],
    ['stag', '45%', '45%', '#8A6A48'],
    ['koala-sleeping', '55%', '35%', '#8E9496'],
    ['llama', '55%', '30%', '#7A5A44'],
    ['zebras', '50%', '62%', '#6E7F9A'],
    ['tiger-portrait', '35%', '40%', '#B86A2A'],
    ['deer', '45%', '35%', '#9A7048']
  ].map(([f, x, y, c]) => ({ name: f, x, y, c }));
  /* Module guide banner photos (References/Modules Details Page Banner Imagess), their own set: the guide pages
     never show the home photos. Same fields as BANNERS; files are assets/photos/guide-<name>(-sm).webp */
  const GUIDE_BANNERS = [
    ['horse-eye', '55%', '40%', '#5A3A28'],
    ['macaque', '50%', '40%', '#C89A5A'],
    ['gorilla', '50%', '35%', '#6A3A3A'],
    ['macaque-family', '35%', '45%', '#A88A5A'],
    ['brown-bear', '50%', '50%', '#7A5A3A'],
    ['stag-face', '50%', '50%', '#8A6A4A'],
    ['gibbon', '50%', '45%', '#8A8A86'],
    ['hornbill', '55%', '35%', '#D8402A'],
    ['penguin', '45%', '45%', '#D87A8A'],
    ['monkey-gaze', '55%', '45%', '#8A9A4A'],
    ['robin', '50%', '55%', '#D8702A'],
    ['cheetah', '55%', '55%', '#C8903A'],
    ['koala-face', '30%', '45%', '#9A9A9A'],
    ['lioness-profile', '60%', '45%', '#C8A060'],
    ['owl-eyes', '50%', '50%', '#E0501A'],
    ['pelican', '50%', '45%', '#D8B8A8'],
    ['wolf-gaze', '50%', '50%', '#8A8A86'],
    ['wolf-profile', '60%', '50%', '#8A8A8A'],
    ['panda', '40%', '45%', '#3A3A3A'],
    ['tiger-close', '50%', '45%', '#D8782A'],
    ['turtle', '45%', '45%', '#8A6A3A'],
    ['monkey-forest', '50%', '45%', '#2E4A4A'],
    ['pygmy-owl', '50%', '50%', '#3A5A7A'],
    ['seal-water', '45%', '50%', '#2A8A9A'],
    ['snow-leopards', '35%', '40%', '#B89A6A'],
    ['slider-turtle', '50%', '40%', '#9A8A4A'],
    ['thick-knee', '55%', '40%', '#8A6A4A'],
    ['jaguar-profile', '60%', '40%', '#C88A3A'],
    ['great-grey-owl', '30%', '45%', '#8A8A8A'],
    ['polar-bear', '55%', '50%', '#C8C8C0'],
    ['ostrich', '50%', '40%', '#9A7A5A'],
    ['swan', '70%', '45%', '#E8B820'],
    ['eagle-owl', '45%', '45%', '#E0801A'],
    ['macaw-close', '45%', '45%', '#E8701A'],
    ['mongoose', '50%', '40%', '#B8783A'],
    ['seal-close', '40%', '30%', '#8A9A9A'],
    ['iguana-branch', '50%', '40%', '#C88A3A'],
    ['horse-close', '40%', '40%', '#6A3A2A'],
    ['mandrill', '45%', '45%', '#C8783A'],
    ['kangaroo', '45%', '45%', '#8A7A6A'],
    ['elephant-eye', '45%', '50%', '#8A8A80'],
    ['toucanet', '60%', '45%', '#3A9A2A'],
    ['fish-shoal', '50%', '50%', '#3A8AB8'],
    ['flamingo-curl', '45%', '50%', '#E8501A'],
    ['horse-eye-2', '30%', '50%', '#4A3A30'],
    ['ferret', '50%', '45%', '#6A6A6A'],
    ['lizard-rock', '30%', '40%', '#8A7A4A'],
    ['geladas', '50%', '40%', '#B8783A'],
    ['lion-mane', '55%', '45%', '#A87A3A'],
    ['elephant-skin', '50%', '50%', '#A8603A'],
    ['crested-gecko', '25%', '35%', '#C8903A'],
    ['seriema', '60%', '50%', '#E0402A'],
    ['lioness', '40%', '45%', '#C8A070'],
    ['white-lion', '50%', '45%', '#B8B0A0'],
    ['lion-dusk', '60%', '45%', '#A8703A'],
    ['feathers', '50%', '50%', '#20A8C0'],
    ['rhea', '45%', '40%', '#8A9AAA'],
    ['cheetah-face', '50%', '50%', '#C8903A'],
    ['ground-squirrel', '40%', '40%', '#A8885A']
  ].map(([f, x, y, c]) => ({ name: f, x, y, c, file: 'guide' }));
  /* Shuffled once per visit, so the rotation order differs from visit to visit */
  /* The photo the last guide page opened on, so the next one opens on a different animal */
  let lastGuideBanner = null;
  const GUIDE_ORDER = (() => {
    const list = GUIDE_BANNERS.slice();
    for (let i = list.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [list[i], list[j]] = [list[j], list[i]]; }
    return list;
  })();
  /* Banner photos are WebP: 1920px wide for larger screens, 1400px for phones (where the photo is a band across the top) */
  const bannerSrc = (b) => `assets/photos/${b.file || 'banner'}-${b.name}${matchMedia('(max-width: 760px)').matches ? '-sm' : ''}.webp`;
  const BANNER_EVERY = 9000;
  /* The feature window's animal wash uses the same photos: which way each animal looks (r/l, or f for straight at the
     camera) and where its face sits across and down the photo (0 to 1; given for the face close-ups).
     Animals looking left are mirrored so every one looks into the panel. */
  const FACING = {
    'tiger-home': ['l', 0.55], 'macaw': ['r', 0.65, 0.4], 'wolf': ['f', 0.5, 0.45], 'chameleon': ['f', 0.55, 0.45],
    'lion': ['r', 0.62, 0.33], 'lorikeet': ['r', 0.6, 0.4], 'rhino': ['l', 0.35, 0.42], 'golden-pheasant': ['r', 0.6, 0.45],
    'koala': ['f', 0.6, 0.3], 'mambas': ['l', 0.45], 'fox': ['l', 0.35, 0.62], 'bald-eagle': ['l', 0.45, 0.45],
    'zebra-stripes': ['l', 0.3], 'red-panda': ['l', 0.45, 0.45], 'forest-lizard': ['l', 0.4], 'bear': ['f', 0.55, 0.45],
    'flamingo': ['r', 0.72, 0.4], 'jaguar': ['f', 0.45, 0.5], 'starling': ['l', 0.3], 'alpaca': ['r', 0.62, 0.45],
    'python': ['f', 0.55], 'tiger-face': ['f', 0.5, 0.5], 'pigeon': ['r', 0.6, 0.4], 'okapi': ['l', 0.3],
    'otter': ['l', 0.35, 0.65], 'giraffe': ['l', 0.4, 0.6], 'iguana': ['r', 0.6],
    'fawn': ['f', 0.5, 0.45], 'heron': ['r', 0.65], 'baboon': ['f', 0.5, 0.5], 'chameleon-2': ['l', 0.35, 0.5],
    'impala': ['f', 0.4], 'art-tiger': ['f', 0.5], 'mouflon': ['r', 0.55, 0.45], 'langur-baby': ['f', 0.45, 0.45],
    'elks': ['f', 0.5], 'duck': ['f', 0.47, 0.22], 'tusks': ['f', 0.5], 'grey-wolf': ['f', 0.5, 0.3],
    'stag': ['r', 0.55], 'koala-sleeping': ['r', 0.6], 'llama': ['f', 0.5, 0.35], 'zebras': ['f', 0.5],
    'tiger-portrait': ['l', 0.3, 0.5], 'deer': ['r', 0.6, 0.45]
  };
  /* The photos that are close-ups of a face: only these go into the feature window */
  const FACES = new Set(['lion', 'golden-pheasant', 'bald-eagle', 'tiger-face', 'fox', 'macaw', 'chameleon', 'jaguar', 'otter', 'fawn', 'alpaca', 'mouflon', 'giraffe', 'bear', 'baboon', 'red-panda', 'wolf', 'llama', 'lorikeet', 'pigeon', 'chameleon-2', 'deer', 'langur-baby', 'rhino', 'flamingo']);
  /* The guide photos that are face close-ups, for the screen windows on guide pages (as FACING: way it looks, face x, y) */
  const GUIDE_FACING = {
    'horse-eye': ['l', 0.55, 0.4], 'macaque': ['f', 0.5, 0.4], 'gorilla': ['f', 0.5, 0.4], 'brown-bear': ['f', 0.5, 0.55],
    'stag-face': ['f', 0.5, 0.55], 'gibbon': ['f', 0.5, 0.5], 'hornbill': ['r', 0.45, 0.2], 'penguin': ['r', 0.5, 0.45],
    'monkey-gaze': ['l', 0.5, 0.45], 'cheetah': ['f', 0.55, 0.55], 'koala-face': ['f', 0.3, 0.45], 'lioness-profile': ['r', 0.6, 0.5],
    'owl-eyes': ['f', 0.5, 0.5], 'pelican': ['r', 0.5, 0.45], 'wolf-gaze': ['f', 0.5, 0.5], 'wolf-profile': ['l', 0.4, 0.55],
    'panda': ['f', 0.4, 0.45], 'tiger-close': ['f', 0.5, 0.4], 'turtle': ['l', 0.4, 0.4], 'slider-turtle': ['r', 0.55, 0.35],
    'thick-knee': ['l', 0.55, 0.4], 'jaguar-profile': ['r', 0.6, 0.4], 'great-grey-owl': ['f', 0.35, 0.5], 'polar-bear': ['r', 0.6, 0.55],
    'ostrich': ['l', 0.45, 0.35], 'swan': ['l', 0.65, 0.45], 'eagle-owl': ['l', 0.4, 0.45], 'macaw-close': ['l', 0.4, 0.5],
    'mongoose': ['f', 0.5, 0.4], 'seal-close': ['l', 0.35, 0.35], 'iguana-branch': ['r', 0.5, 0.35], 'horse-close': ['l', 0.3, 0.35],
    'mandrill': ['f', 0.5, 0.45], 'kangaroo': ['f', 0.45, 0.45], 'elephant-eye': ['f', 0.45, 0.5], 'flamingo-curl': ['l', 0.3, 0.45],
    'horse-eye-2': ['l', 0.3, 0.5], 'ferret': ['f', 0.5, 0.5], 'lion-mane': ['r', 0.55, 0.4], 'elephant-skin': ['f', 0.5, 0.5],
    'crested-gecko': ['f', 0.25, 0.3], 'seriema': ['l', 0.6, 0.55], 'lioness': ['l', 0.3, 0.5], 'white-lion': ['f', 0.5, 0.45],
    'lion-dusk': ['f', 0.6, 0.45], 'rhea': ['r', 0.45, 0.45], 'cheetah-face': ['f', 0.5, 0.5], 'ground-squirrel': ['l', 0.4, 0.4]
  };
  /* A different animal for each feature of a module: the face close-ups in an order of their own for that module (seeded by its id) */
  const animalsFor = (m) => {
    let h = 2166136261;
    for (const ch of m.id) h = Math.imul(h ^ ch.charCodeAt(0), 16777619);
    const rnd = () => ((h = Math.imul(h ^ (h >>> 15), 2246822507) ^ Math.imul(h ^ (h >>> 13), 3266489909)) >>> 0) / 4294967296;
    /* Guide pages (their screen sets have ids starting guide-) use the guide photos' faces, like their banners */
    const list = m.id.startsWith('guide-') ? GUIDE_BANNERS.filter((b) => GUIDE_FACING[b.name]) : BANNERS.filter((b) => FACES.has(b.name));
    for (let i = list.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [list[i], list[j]] = [list[j], list[i]]; }
    return list;
  };
  /* Put an animal into the feature window's wash: a band along the bottom (from just under the text, at most 340px tall),
     the photo scaled to 1.38 times the band's height (and never narrower than the panel, so it has no hard edge),
     placed so the face sits a quarter of the way in from the left and just below the band's middle, looking into the panel.
     Positions are worked out from the photo's own size once it has loaded, and again whenever the panel changes size
     (the window settles its height after it opens, and a tablet or web screen makes it shorter than a phone does). */
  const setAnimal = (el, b, textBottom) => {
    const [look, fx, fy = .45] = (b.file === 'guide' ? GUIDE_FACING[b.name] : FACING[b.name]) || ['f', .5];
    const flip = look === 'l';
    const src = bannerSrc(b);
    const img = new Image();
    const place = () => {
      if (!el.isConnected || !img.naturalWidth) return;
      const P = el.clientWidth, h = el.clientHeight;
      const top = Math.max(textBottom() + 24, h - 340), H = h - top;
      const ratio = img.naturalWidth / img.naturalHeight;
      const bh = Math.max(H * 1.38, P / ratio), bw = bh * ratio;
      /* In a mirrored band the photo's left edge ends up on the right, so the face is placed from the other side */
      const want = flip ? P * .75 : P * .25;
      const x = Math.min(0, Math.max(P - bw, want - fx * bw));
      /* The face a little below the middle of the band */
      const y = Math.min(0, Math.max(H - bh, H * .55 - fy * bh));
      el.style.setProperty('--wash-top', `${Math.round(top)}px`);
      el.style.setProperty('--area-photo-size', `${Math.round(bw)}px ${Math.round(bh)}px`);
      el.style.setProperty('--area-photo-pos', `${Math.round(x)}px ${Math.round(y)}px`);
    };
    el.washPlace = place;
    if (!el.washObserver && 'ResizeObserver' in window) {
      el.washObserver = new ResizeObserver(() => el.washPlace && el.washPlace());
      el.washObserver.observe(el);
    }
    img.onload = () => {
      if (!el.isConnected || el.washPlace !== place) return;
      place();
      el.style.setProperty('--area-photo', `url('${src}')`);
      el.style.setProperty('--area-flip', flip ? '-1' : '1');
      el.style.setProperty('--area-fade', flip ? 'to left' : 'to right');
      el.classList.remove('animal-in'); void el.offsetWidth; el.classList.add('animal-in');
    };
    img.src = src;
  };
  /* Banner rotation runs on one clock for the whole visit (kept in sessionStorage, so reloads carry on too):
     every 9 s is the next photo's turn, whether or not the home page is showing. Coming back to the home page
     shows the photo whose turn it is and carries on from there, rather than starting again from the tiger. */
  let bannerStart = 0;
  const bannerSlot = () => {
    if (!bannerStart) {
      try { bannerStart = Number(sessionStorage.getItem('antz-banner-start')) || 0; } catch (e) { /* storage blocked */ }
      if (!bannerStart) {
        bannerStart = Date.now();
        try { sessionStorage.setItem('antz-banner-start', String(bannerStart)); } catch (e) { /* keep it in memory only */ }
      }
    }
    return Math.floor((Date.now() - bannerStart) / BANNER_EVERY);
  };
  /* list and offset: the module guides rotate through their own photos (GUIDE_BANNERS), from a random start */
  const bannerNow = (list = BANNERS, offset = 0) => list[(bannerSlot() + offset) % list.length];
  const PHOTOS = {
    hero: 'assets/photos/tiger.jpg',
    spotlight: 'assets/photos/img-lemur.jpg',
    cta: 'assets/photos/img-enclosure.jpg',
    objective: 'assets/photos/img-conservation.jpg',
    /* The kit's slide-4 'welcome screen' is byte-identical to the Getting Started home screen, so the platform section uses this photo */
    platform: 'assets/photos/img-cta-new.jpg'
  };
  /* Featured workflow: one module, picked at random on each page load (kept while the visitor moves around, so
     returning home does not swap it). Only these: every Medical & Treatment module, Animal Transfer, Notes, Housing
     and Animal Management. `shot` is the feature whose screen is clearest as the picture (no pop-up dimming it). */
  const FEATURED = [
    { id: 'medical-records', shot: 1 }, { id: 'symptoms-clinical-assessment-prescription', shot: 0 },
    { id: 'administer-medicine', shot: 3 }, { id: 'vaccination', shot: 2 }, { id: 'deworming', shot: 3 },
    { id: 'supplements', shot: 3 }, { id: 'hospital-information-management-system-app', shot: 1 },
    { id: 'hospital-information-management-system-web', shot: 0 }, { id: 'focus-hub', shot: 1 },
    { id: 'animal-transfer', shot: 1 }, { id: 'notes-module', shot: 4 }, { id: 'housing', shot: 0 },
    { id: 'animal-management', shot: 2 }
  ];
  const FEATURE_PICK = FEATURED[Math.floor(Math.random() * FEATURED.length)];
  /* Screens that already carry a device frame in the image itself */

  /* Copy corrections for a client audience (see antz-learn/FINDINGS.md §1) */
  const OVERRIDES = {
    housing: { intro: 'The Housing module organises animal habitats across your sites, sections and enclosures, so every animal has a known place and every change is tracked. Access at each level is permission-based.' },
    /* Card lines for intros the usual trimming can't shorten well */
    'chat-module': { summary: 'One-on-one and group messaging, media sharing and real-time notifications, kept securely inside the platform' },
    'focus-hub': { summary: 'Your favourite animals and enclosures and bookmarked records, in one place for quick access' }
  };

  /* ---------- Helpers ---------- */
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  /* House rule: no em-dashes in rendered copy */
  /* [fab] in a lede is the app's green quick-action button, shown as the button itself (assets/icons/fab.svg) */
  const withFab = (s) => esc(s).replace(/\[fab\]/g, `<img class="inline-fab" src="assets/icons/fab.svg" alt="+" width="64" height="70">`);
  const tidy = (s) => String(s ?? '').replace(/\s*—\s*/g, ', ').replace(/\s+-\s+/g, ', ');
  const tidyTitle = (s) => String(s ?? '').replace(/\s*—\s*|\s+-\s+/g, ' · ').replace(/\s*\((App|Web)\)/, ' · $1');
  /* icons.js declares a top-level const, so it is a global binding, not a window property */
  const ICON_SET = typeof ICONS !== 'undefined' ? ICONS : {};
  /* True for mouse and trackpad pointers (used for hover-only effects) */
  const canHover = () => matchMedia('(hover: hover) and (pointer: fine)').matches;
  const icon = (name) => ICON_SET[name] || ICON_SET.note || '';
  /* Banner titles: one span per letter, so a ripple can run through the title when it appears (as on the
     LSET Foundation site). Words stay whole so a line never breaks inside one. Scripts whose letters join up
     (Arabic, Devanagari) or have no spaces between words are left as plain text: splitting them would break
     the shaping, and the holographic fill still applies. The spans are hidden; the h1 carries the real text. */
  const WAVE_OK = /^[\p{Script=Latin}\p{Script=Greek}\p{Script=Cyrillic}\p{N}\p{P}\p{Zs}\p{S}]*$/u;
  const waveTitle = (text) => {
    if (!WAVE_OK.test(text)) return esc(text);
    let i = 0;
    return `<span class="wave" aria-hidden="true">${text.split(' ').map((w) =>
      `<span class="wave-word">${[...w].map((ch) => `<span class="wave-ch" style="--i:${i++}">${esc(ch)}</span>`).join('')}</span>`).join(' ')}</span>`;
  };
  const heroTitle = (text) => `<h1 class="holo" aria-label="${esc(text)}">${waveTitle(text)}</h1>`;
  const SEARCH_SVG = '<svg viewBox="0 -960 960 960" fill="currentColor"><path d="M380.77-335.39q-102.46 0-173.54-71.07-71.07-71.08-71.07-173.54t71.07-173.54q71.08-71.07 173.54-71.07t173.54 71.07q71.07 71.08 71.07 173.54 0 42.85-14.38 81.85-14.39 39-38.39 67.84l230.16 230.16q8.31 8.3 8.5 20.88.19 12.58-8.5 21.27t-21.08 8.69q-12.38 0-21.07-8.69L530.46-388.16q-30 24.77-69 38.77-39 14-80.69 14Zm0-59.99q77.31 0 130.96-53.66 53.66-53.65 53.66-130.96t-53.66-130.96q-53.65-53.66-130.96-53.66t-130.96 53.66Q196.15-657.31 196.15-580t53.66 130.96q53.65 53.66 130.96 53.66Z"/></svg>';
  const CLOSE_SVG = '<svg width="20" height="20" viewBox="0 -960 960 960" fill="currentColor"><path d="M480-437.85 277.08-234.92q-8.31 8.3-20.89 8.5-12.57.19-21.27-8.5-8.69-8.7-8.69-21.08 0-12.38 8.69-21.08L437.85-480 234.92-682.92q-8.3-8.31-8.5-20.89-.19-12.57 8.5-21.27 8.7-8.69 21.08-8.69 12.38 0 21.08 8.69L480-522.15l202.92-202.93q8.31-8.3 20.89-8.5 12.57-.19 21.27 8.5 8.69 8.7 8.69 21.08 0 12.38-8.69 21.08L522.15-480l202.93 202.92q8.3 8.31 8.5 20.89.19 12.57-8.5 21.27-8.7 8.69-21.08 8.69-12.38 0-21.08-8.69L480-437.85Z"/></svg>';
  const ARROW = '<svg width="14" height="14" viewBox="0 -960 960 960" fill="currentColor"><path d="M645.77-647.85 272.46-274.92q-8.31 8.3-20.88 8.11-12.58-.19-20.89-8.5-8.3-8.31-8.3-20.69t8.3-20.69L603.62-690H275.77q-12.75 0-21.38-8.63-8.62-8.63-8.62-21.38 0-12.76 8.62-21.37 8.63-8.62 21.38-8.62h393.84q15.37 0 25.76 10.39 10.4 10.4 10.4 25.76V-320q0 12.75-8.63 21.37-8.63 8.63-21.38 8.63-12.76 0-21.38-8.63-8.61-8.62-8.61-21.37v-327.85Z"/></svg>';
  /* The search cue ("Search {x}") with the rotating word where {x} sits in this language */
  const cueHTML = () => {
    const [before, after = ''] = t('search.cue', { x: '{x}' }).split('{x}');
    return `<span class="ph" aria-hidden="true">${esc(before)}<span class="ph-rot"></span>${esc(after)}</span>`;
  };

  /* ---------- Content model ---------- */
  /* Each module in the current language: translated title, intro, summary, feature text and screen
     descriptions laid over the English. enTitle keeps the name used in the app itself. */
  const modules = DATA.modules.map((m) => {
    const o = OVERRIDES[m.id] || {};
    const tr = (PACK.modules || {})[m.id] || {};
    const features = m.features.map((f, i) => {
      const tf = (tr.features || [])[i] || {};
      return { ...f, enTitle: f.title, title: tf.title || f.title, desc: tf.desc || f.desc, alt: tf.alt || f.alt };
    });
    const shots = (m.shots || []).map((sh) => ({ ...sh, alt: (tr.shots || {})[sh.src] || sh.alt }));
    return { ...m, ...o, features, shots, raw: o.intro || m.intro, enTitle: tidyTitle(m.title), sum: tr.summary || o.summary,
      title: tidyTitle(tr.title || m.title), intro: tidy(tr.intro || o.intro || m.intro) };
  });
  const byId = Object.fromEntries(modules.map((m) => [m.id, m]));
  /* Prospects only see finished modules; foundations feed the home page instead */
  const visible = modules.filter((m) => m.status === 'complete' && m.track !== 'foundations');
  const areas = DATA.tracks
    .filter((t) => AREA_LOOK[t.id])
    .map((a) => {
      const tr = (PACK.tracks || {})[a.id] || {};
      return { ...a, label: tr.label || a.label, desc: tidy(tr.desc || a.desc), modules: visible.filter((m) => m.track === a.id), ...AREA_LOOK[a.id] };
    })
    .filter((a) => a.modules.length);
  const areaById = Object.fromEntries(areas.map((a) => [a.id, a]));

  /* Web modules (ids ending -web, and their guides' card sets) show web console screens, whatever the frame */
  const isWebModule = (m) => !!(m && (m.web || /-web$/.test(m.id || '')));
  const shotFor = (m, src) => {
    const shot = m.shots.find((s) => s.src === src) || { src, device: 'phone', alt: '' };
    return isWebModule(m) ? { ...shot, zoom: true } : shot;
  };
  /* Lens: on phones, a magnifier on each screen opens it on its own to pinch, pan and read the detail */
  const LENS_SVG = '<svg width="22" height="22" viewBox="0 -960 960 960" fill="currentColor"><path d="M350.77-550h-47.69q-12.75 0-21.38-8.63-8.62-8.63-8.62-21.38 0-12.76 8.62-21.37 8.63-8.62 21.38-8.62h47.69v-47.69q0-12.75 8.63-21.38 8.63-8.62 21.38-8.62 12.76 0 21.37 8.62 8.62 8.63 8.62 21.38V-610h47.69q12.75 0 21.38 8.63 8.62 8.63 8.62 21.38 0 12.76-8.62 21.37-8.63 8.62-21.38 8.62h-47.69v47.69q0 12.75-8.63 21.38-8.63 8.62-21.38 8.62-12.76 0-21.37-8.62-8.62-8.63-8.62-21.38V-550Zm30 214.61q-102.55 0-173.58-71.01-71.03-71.01-71.03-173.54 0-102.52 71.01-173.6 71.01-71.07 173.54-71.07 102.52 0 173.6 71.03 71.07 71.03 71.07 173.58 0 42.85-14.38 81.85-14.39 39-38.39 67.84l230.16 230.16q8.31 8.3 8.5 20.88.19 12.58-8.5 21.27t-21.08 8.69q-12.38 0-21.07-8.69L530.46-388.16q-30 24.77-69 38.77-39 14-80.69 14Zm0-59.99q77.31 0 130.96-53.66 53.66-53.65 53.66-130.96t-53.66-130.96q-53.65-53.66-130.96-53.66t-130.96 53.66Q196.15-657.31 196.15-580t53.66 130.96q53.65 53.66 130.96 53.66Z"/></svg>';
  const ZOOM_IN_SVG = '<svg width="22" height="22" viewBox="0 -960 960 960" fill="currentColor"><path d="M450-450H230v-60h220v-220h60v220h220v60H510v220h-60v-220Z"/></svg>';
  const ZOOM_OUT_SVG = '<svg width="22" height="22" viewBox="0 -960 960 960" fill="currentColor"><path d="M230-450v-60h500v60H230Z"/></svg>';
  const lensHTML = () => `<button class="lens" type="button" aria-label="${esc(t('lens.open'))}">${LENS_SVG}</button>`;
  /* A feature marked lock (content.json) shows its screen under a dark veil with a lock: the screen stands
     for something kept private, such as Chat's "Secure & auditable" */
  const LOCK_SVG = '<svg viewBox="0 -960 960 960" fill="currentColor"><path d="M252.31-100q-29.92 0-51.12-21.19Q180-142.39 180-172.31v-375.38q0-29.92 21.19-51.12Q222.39-620 252.31-620H300v-80q0-74.92 52.54-127.46Q405.08-880 480-880q74.92 0 127.46 52.54Q660-774.92 660-700v80h47.69q29.92 0 51.12 21.19Q780-577.61 780-547.69v375.38q0 29.92-21.19 51.12Q737.61-100 707.69-100H252.31Zm0-60h455.38q5.39 0 8.85-3.46t3.46-8.85v-375.38q0-5.39-3.46-8.85t-8.85-3.46H252.31q-5.39 0-8.85 3.46t-3.46 8.85v375.38q0 5.39 3.46 8.85t8.85 3.46Zm277.27-150.42Q550-330.85 550-360t-20.42-49.58Q509.15-430 480-430t-49.58 20.42Q410-389.15 410-360t20.42 49.58Q450.85-290 480-290t49.58-20.42ZM360-620h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z"/></svg>';
  const lockHTML = () => `<span class="screen-lock" aria-hidden="true">${LOCK_SVG}</span>`;
  /* lens: false for screens that sit inside a link or button (a button can't hold another) */
  const deviceHTML = (shot, { lens = true } = {}) => {
    if (!shot) return '';
    const img = `<img src="${esc(shot.src)}" alt="${esc(shot.alt)}" loading="lazy">`;
    const l = lens ? lensHTML() : '', k = shot.lock ? lockHTML() : '';
    /* Web screens (and every screen of a web module) keep the magnifier at every size, for their small detail */
    const z = shot.zoom || shot.device === 'web' ? ' zoomable' : '';
    if (shot.device === 'web') return `<div class="device device-web${z}"><div class="screen"><div class="bar"><i></i><i></i><i></i></div>${img}${k}</div>${l}</div>`;
    if (shot.device === 'tablet') return `<div class="device device-tablet${z}"><div class="screen">${img}${k}</div>${l}</div>`;
    /* A scrolling screen (shot.scroll): the app's top bar stays put while the rest scrolls beneath it, as in the app.
       data-full is the whole screen in one image, for the lens */
    if (shot.scroll) {
      const sc = shot.scroll;
      return `<div class="device device-phone${z}" data-full="${esc(sc.full)}"><div class="screen screen-scroll"><img class="screen-head" src="${esc(sc.head)}" alt=""><div class="screen-body" tabindex="0" data-at="${sc.at}"${sc.auto ? ' data-auto' : ''} aria-label="${esc(shot.alt)}"><img src="${esc(sc.body)}" alt="${esc(shot.alt)}"></div>${sc.auto ? '' : `<span class="screen-cue" aria-hidden="true">${esc(t('screen.scroll'))}</span>`}${k}</div>${l}</div>`;
    }
    /* Every phone screen gets the same green frame, drawn in CSS (the frames once baked into some captures are cropped off) */
    return `<div class="device device-phone${z}"><div class="screen">${img}${k}</div>${l}</div>`;
  };

  /* ---------- Home ---------- */
  /* ---------- Kit pages: the three "start here" sections, each on its own page ---------- */
  /* Content from content.json (Edition 01, pages 3 to 5) */
  const kitScreen = (m, opts) => (m.shots[0] ? deviceHTML({ ...m.shots[0], device: m.shots[0].device || 'phone' }, opts) : '');
  const KIT_PAGES = [
    { id: 'objective', module: 'objective-of-this-kit', eyebrow: t('kit.objective.eyebrow'), more: t('kit.objective.more'), photo: 'objective', pos: '50% 35%' },
    { id: 'getting-started', module: 'getting-started', eyebrow: t('kit.start.eyebrow'), more: t('kit.start.more') },
    { id: 'platform', module: 'what-is-antz-systems', eyebrow: t('kit.platform.eyebrow'), more: t('kit.platform.more'), photo: 'platform', pos: '72% 50%' }
  ];
  const KIT_SECTIONS = {
    objective: () => {
      const objective = byId['objective-of-this-kit'];
      return `
      <section class="section kit-section" id="objective">
        <div class="container kit-split kit-photo-left">
          <figure class="kit-media kit-photo reveal">
            <img src="${PHOTOS.objective}" alt="${esc(t('kit.objective.photo'))}" loading="lazy">
          </figure>
          <div class="kit-copy reveal">
            <span class="eyebrow">${esc(t('kit.objective.kicker'))}</span>
            <h2 class="section-title">${esc(objective.title)}</h2>
            <p class="section-lede">${esc(objective.intro)}</p>
            <div class="kit-cards two">
              ${objective.features.map((f) => `
                <article class="kit-card">
                  <span class="ic">${icon(f.icon)}</span>
                  <h3>${esc(f.title)}</h3>
                  <p>${esc(tidy(f.desc))}</p>
                </article>`).join('')}
            </div>
          </div>
        </div>
      </section>
`;
    },
    platform: () => {
      const about = byId['what-is-antz-systems'];
      return `
      <section class="section section-soft kit-section" id="why">
        <div class="container kit-split">
          <div class="kit-copy reveal">
            <span class="eyebrow">${esc(t('kit.platform.eyebrow'))}</span>
            <h2 class="section-title">${esc(about.title)}</h2>
            <p class="section-lede">${esc(about.intro)}</p>
            <h3 class="kit-label">${esc(t('kit.platform.why'))}</h3>
            <div class="kit-cards two compact">
              ${about.features.map((f) => `
                <article class="kit-card">
                  <span class="ic">${icon(f.icon)}</span>
                  <h3>${esc(f.title)}</h3>
                  <p>${esc(tidy(f.desc))}</p>
                </article>`).join('')}
            </div>
          </div>
          <figure class="kit-media kit-photo reveal">
            <img src="${PHOTOS.platform}" alt="${esc(t('kit.platform.photo'))}" loading="lazy" style="object-position: 72% 50%">
          </figure>
        </div>
      </section>
`;
    },
    'getting-started': () => {
      const start = byId['getting-started'];
      const firstDay = [
        [t('day.1'), start.features[0].desc, 'signin'],
        [t('day.2'), start.features[1].desc, 'compass'],
        [t('day.3'), start.features[3].desc, 'database'],
        [t('day.4'), t('day.4.desc'), 'access']
      ];
      return `
      <section class="section section-soft kit-section" id="first-day">
        <div class="container kit-split">
          <div class="kit-media kit-device reveal">${kitScreen(start)}</div>
          <div class="kit-copy reveal">
            <span class="eyebrow">${esc(t('kit.start.eyebrow'))}</span>
            <h2 class="section-title">${esc(start.title)}</h2>
            <p class="section-lede">${esc(start.intro)}</p>
            <h3 class="kit-label">${esc(t('kit.start.features'))}</h3>
            <ul class="kit-list">
              ${start.features.map((f) => `
                <li><span class="ic">${icon(f.icon)}</span><span><b>${esc(f.title)}</b>${esc(tidy(f.desc))}</span></li>`).join('')}
              ${GUIDES['getting-started'] ? `
                <li class="kit-more"><a href="#/guide/getting-started"><span class="ic">${icon('compass')}</span><span><b>${esc(t('guide.more'))}</b>${esc(t('guide.moreNote'))}</span><span class="go" aria-hidden="true">${ARROW}</span></a></li>` : ''}
            </ul>
          </div>
        </div>
        <div class="container first-day">
          <div class="section-head reveal">
            <h3 class="section-title first-day-title">${esc(t('day.title'))}</h3>
            <p class="section-lede">${esc(t('day.lede'))}</p>
          </div>
          <ol class="timeline">
            ${firstDay.map(([t, d, ic], i) => `
              <li class="reveal"><span class="dot">${icon(ic)}</span><div><h3><span class="step-n">${i + 1}.</span> ${esc(t)}</h3><p>${esc(tidy(d))}</p></div></li>`).join('')}
          </ol>
        </div>
      </section>
`;
    }
  };

  /* The kit page shown last, so moving between kit pages can play the chip fill sweep like the home chips */
  let lastKit = null;
  function renderKit(id) {
    const k = KIT_PAGES.find((x) => x.id === id);
    if (!k) { location.hash = '#/'; return; }
    const i = KIT_PAGES.indexOf(k);
    const next = KIT_PAGES[i + 1] || null, prev = KIT_PAGES[i - 1] || null;
    const title = (x) => byId[x.module].title;
    const kitPhoto = (x) => x.photo ? { url: PHOTOS[x.photo], pos: x.pos } : { url: (byId[x.module].shots[0] || {}).src || PHOTOS.hero, pos: '50% 12%' };
    const link = (x, dir) => x
      ? pagerHTML(dir, { href: `#/kit/${x.id}`, label: dir === 'prev' ? t('pager.prev') : t('pager.next'), title: title(x), ...kitPhoto(x) })
      : (dir === 'next'
        ? pagerHTML('next', { href: '#/', attrs: ' data-scroll="index"', label: t('pager.next'), title: t('pager.modules'), url: PHOTOS.hero, pos: '60% 30%' })
        : '<span></span>');
    /* Coming from another kit page: start with that page's chip filled, then hand the fill over,
       so it drains from the old chip and sweeps into the new one */
    const from = KIT_PAGES.find((x) => x.id === lastKit);
    const sweep = !!from && from !== k && !reducedMotion();
    lastKit = k.id;
    app.innerHTML = `
      <div class="kitpage${/section-soft/.test(KIT_SECTIONS[k.id]()) ? ' soft' : ''}">
        <nav class="container kit-tabs" aria-label="${esc(t('start.label'))}">
          ${KIT_PAGES.map((x, j) => `<a class="msubtab mfilter kit-tab" href="#/kit/${x.id}"${x === (sweep ? from : k) ? ' aria-current="page"' : ''}><span class="n">0${j + 1}</span>${esc(title(x))}<svg class="drawn-border" aria-hidden="true"></svg></a>`).join('')}
        </nav>
        ${KIT_SECTIONS[k.id]()}
        <div class="container"><nav class="mpager" aria-label="${esc(t('pager.pages'))}">${link(prev, 'prev')}${link(next, 'next')}</nav></div>
      </div>`;
    sizeBorders();
    if (sweep) {
      const tabs = [...app.querySelectorAll('.kit-tab')];
      requestAnimationFrame(() => requestAnimationFrame(() => tabs.forEach((t, j) => {
        if (KIT_PAGES[j] === k) t.setAttribute('aria-current', 'page'); else t.removeAttribute('aria-current');
      })));
    }
    document.title = `${title(k)} · ${t('brand.title')}`;
  }

  /* ---------- Guide pages: a kit's full walkthrough (guide.js), linked from its summary page ---------- */
  /* A banner like the home page's, then the kit's parts as cards; each card opens its screens in the gallery */
  const GUIDES = window.ANTZ_GUIDES || {};
  /* Guide banner icons: Material Symbols Rounded, light weight, from a subset font holding only these glyphs
     (assets/fonts/material-symbols-rounded-guide.woff2). A new guide needs its glyph added here and to the font:
     re-download the subset from Google Fonts with the glyph added to icon_names. Missing ones fall back to explore. */
  /* Icons composed from the set's shapes, for modules the font has no glyph for (same art as assets/icons) */
  /* Mortality's fish bone (same art as assets/icons/fish_bone_icon.svg), also on the egg web guide's banner */
  const FISH_BONE = '<g fill="none" stroke="currentColor" stroke-width="40" stroke-linecap="round" stroke-linejoin="round"><path d="M100-480q70-170 220-170v340q-150 0-220-170Z"/><path d="M320-480h420"/><path d="M420-480q12-110 70-210M420-480q12 110 70 210"/><path d="M530-480q12-95 60-180M530-480q12 95 60 180"/><path d="M640-480q10-75 45-140M640-480q10 75 45 140"/><path d="M740-480l120-130v260l-120-130Z"/></g><circle cx="225" cy="-520" r="30"/>';
  const GUIDE_DRAWN = {
    mortality: FISH_BONE,
    'egg-management-web': FISH_BONE,
    /* The module's own icon (assets/icons/pharmacy_icon.svg) */
    'pharmacy-web': '<path d="M237.85-160q-33.54 0-52.81-26.85-19.27-26.84-8.58-58.15l65.08-195-65.08-195q-10.69-31.31 8.58-58.15Q204.31-720 237.85-720h405.53L689-846.85q3.15-8.46 11.65-12.34 8.5-3.89 16.97-.73 8.46 3.15 12.34 11.65 3.89 8.5.73 16.96L690.92-720h31.23q33.54 0 52.81 26.85 19.27 26.84 8.58 58.15l-65.08 195 65.08 195q10.69 31.31-8.58 58.15Q755.69-160 722.15-160h-484.3ZM460-307.69h40V-420h112.31v-40H500v-112.31h-40V-460H347.69v40H460v112.31ZM237.85-200h484.3q13.08 0 20-10 6.93-10 3.08-22.31L676-440l69.23-207.69q3.85-12.31-3.08-22.31-6.92-10-20-10h-484.3q-13.08 0-20 10-6.93 10-3.08 22.31L284-440l-69.23 207.69Q210.92-220 217.85-210q6.92 10 20 10ZM480-440Z"/>',
    'medical-records': '<path d="M264.62-120q-27.62 0-46.12-18.5Q200-157 200-184.62v-590.76q0-27.62 18.5-46.12Q237-840 264.62-840h288.53q12.93 0 25.12 5.23 12.19 5.23 20.88 13.92l141.7 141.7q8.69 8.69 13.92 20.88t5.23 25.12v448.53q0 27.62-18.5 46.12Q723-120 695.38-120H264.62ZM560-672.31V-800H264.62q-9.24 0-16.93 7.69-7.69 7.69-7.69 16.93v590.76q0 9.24 7.69 16.93 7.69 7.69 16.93 7.69h430.76q9.24 0 16.93-7.69 7.69-7.69 7.69-16.93V-640H592.31q-13.93 0-23.12-9.19-9.19-9.19-9.19-23.12ZM240-800v160-160 640-640Z"/><path d="M330-630.0h140a20.0 20.0 0 0 1 0 40h-140a20.0 20.0 0 0 1 0-40ZM330-520.0h300a20.0 20.0 0 0 1 0 40h-300a20.0 20.0 0 0 1 0-40Z"/><path transform="translate(480 -265) scale(.36) translate(-480 480)" d="M180.04-495q-33.58 0-56.81-23.19Q100-541.37 100-574.96q0-33.58 23.19-56.81Q146.37-655 179.96-655q33.58 0 56.81 23.19Q260-608.63 260-575.04q0 33.58-23.19 56.81Q213.63-495 180.04-495Zm123.19-183.19Q280-701.37 280-734.96q0-33.58 23.19-56.81Q326.37-815 359.96-815q33.58 0 56.81 23.19Q440-768.63 440-735.04q0 33.58-23.19 56.81Q393.63-655 360.04-655q-33.58 0-56.81-23.19Zm240 0Q520-701.37 520-734.96q0-33.58 23.19-56.81Q566.37-815 599.96-815q33.58 0 56.81 23.19Q680-768.63 680-735.04q0 33.58-23.19 56.81Q633.63-655 600.04-655q-33.58 0-56.81-23.19ZM780.04-495q-33.58 0-56.81-23.19Q700-541.37 700-574.96q0-33.58 23.19-56.81Q746.37-655 779.96-655q33.58 0 56.81 23.19Q860-608.63 860-575.04q0 33.58-23.19 56.81Q813.63-495 780.04-495ZM266-95q-37.31 0-61.65-28.55Q180-152.1 180-191q0-48.92 34.35-83.69 34.34-34.77 67.03-70.46 29-31.77 50.39-67.89 21.38-36.11 49.61-68.11 19.7-22.16 44.57-38Q450.83-535 480-535q30.02 0 55.63 15.23 25.6 15.23 44.52 38.15 28 32 49.12 68.24 21.11 36.23 49.35 68.23 32.69 35.69 67.03 70.46Q780-239.92 780-191q0 38.9-24.35 67.45Q731.31-95 694-95q-54 0-107-9t-107-9q-54 0-107 9t-107 9Z"/>'
  };
  const GUIDE_GLYPH = {
    'getting-started': 'explore', 'notes-module': 'sticky_note_2', 'user-management': 'account_circle', collection: 'pets',
    housing: 'house_siding', 'animal-management': 'cruelty_free', 'animal-transfer': 'local_shipping',
    'medical-records': 'description', 'symptoms-clinical-assessment-prescription': 'stethoscope', vaccination: 'vaccines',
    deworming: 'pest_control', supplements: 'nutrition', 'hospital-information-management-system-app': 'home_health',
    mortality: 'heart_minus', necropsy: 'content_paste_search', 'egg-management-web': 'egg',
    'helpdesk-module': 'support_agent', security: 'verified_user', 'reports-web': 'summarize'
  };
  /* A guide is linked only from inside its kit page (never from the home page) */
  function renderGuide(id) {
    const g = GUIDES[id];
    if (!g) { location.hash = '#/'; return; }
    const srcOf = (s) => `assets/guide/${id}/${s.src}.webp`;
    const webGuide = /-web$/.test(id);
    /* Card and tour screens sit inside buttons, so their magnifier sits beside the button, over the screen's corner */
    const outerLens = (title) => (webGuide ? `<button class="lens lens-out" type="button" data-title="${esc(title)}" aria-label="${esc(t('lens.open'))}">${LENS_SVG}</button>` : '');
    const count = (n) => (n === 1 ? t('guide.screen1') : t('guide.screens', { n }));
    /* Every set of screens on the page, shaped like a module (one feature per screen), so it opens in the
       same feature window (desktop) and feature sheet (phones) as the module pages, in the guide's colours */
    areaById.guide = { id: 'guide', label: g.title, glyph: 'note', modules: [] };
    /* A module's guide takes its area's colours, and its windows and sheets are labelled with the area */
    const track = g.area && areaById[g.area] ? g.area : 'guide';
    const backModule = byId[g.back] && visible.includes(byId[g.back]) ? byId[g.back] : null;
    const sets = [];
    const addSet = (key, title, ic, shots, winFlow, winNotes) => sets.push({
      id: `guide-${id}-${key}`, module: id, track, title, web: /-web$/.test(id), winFlow, winNotes,
      /* keep: the text is shown exactly as written (it keeps a dash the house style would otherwise turn into a comma) */
      features: shots.map((s) => ({ title: s.title, desc: s.desc, icon: s.icon || ic, shot: srcOf(s), keep: !!s.keep })),
      /* A screen is a phone unless it says otherwise (device: 'tablet' or 'web' for web modules) */
      shots: shots.map((s) => ({ src: srcOf(s), alt: s.title, device: s.device || 'phone',
        scroll: s.scroll && { head: srcOf({ src: s.scroll.head }), body: srcOf({ src: s.scroll.body }), full: srcOf({ src: s.scroll.full }), at: s.scroll.at, auto: !!s.scroll.auto } }))
    }) - 1;

    /* At a glance: the module pages' feature cards, each opening its screen */
    const glanceHTML = (gl) => {
      const set = addSet('glance', gl.title, 'home', gl.shots);
      return `
        <div class="gfeats reveal">
          <h3 class="gfeats-title">${esc(gl.title)}</h3>
          <p class="gfeats-lede">${esc(gl.desc)}</p>
          <ol class="mfeats">${gl.shots.map((s, i) => `
            <li class="mfeat-row">
              <button class="mfeat" type="button" data-set="${set}" data-i="${i}">
                <span class="n" aria-hidden="true">${icon(s.icon)}</span>
                <span class="t"><b>${esc(s.title)}</b><small>${esc(s.desc)}</small></span>
                <span class="mfeat-open" aria-hidden="true">${EXPAND_SVG}</span>
              </button>
              <svg class="drawn-border" aria-hidden="true"></svg>
            </li>`).join('')}
          </ol>
        </div>`;
    };
    /* notes: a part's points (part.notes) shown in the window of each of its cards */
    const cardHTML = (c, n, notes) => {
      const set = addSet(c.id, c.title, c.icon, c.shots, c.flow, notes);
      return `
        <div class="gcard-wrap${webGuide ? ' has-lens' : ''}">
        <button class="mcard-face gcard" type="button" data-set="${set}" data-i="0">
          <span class="gcard-thumb"${c.peek ? ` style="--peek:${c.peek}"` : ''}>${deviceHTML({ src: srcOf(c.shots[c.thumb || 0]), alt: '', device: c.shots[c.thumb || 0].device || 'phone' }, { lens: false })}</span>
          <span class="gcard-body">
            <span class="gcard-top"><span class="gcard-ic" aria-hidden="true">${icon(c.icon)}</span><span class="gcard-n">${String(n).padStart(2, '0')}</span></span>
            <b>${esc(c.title)}</b>
            <span class="gcard-desc">${esc(c.desc)}</span>
            <span class="gcard-foot">${esc(count(c.shots.length))} ${ARROW}</span>
          </span>
          <svg class="drawn-border" aria-hidden="true"></svg>
        </button>
        ${outerLens(c.title)}
        </div>`;
    };
    /* A phone beside a grid of tiles, each opening its screen. A part can hold several tours (part.tours); qa.flip
       puts the screen on the right and qa.kicker adds an eyebrow above the title. With an overview, the phone shows it and the
       tiles follow it in the set; without one, the phone shows the first tile's screen, and pointing at a tile
       (numbered when qa.numbered) brings its screen up on the phone. */
    const actionsHTML = (qa, key) => {
      const head = qa.overview || qa;
      const first = qa.overview ? 1 : 0;
      const items = qa.overview ? [qa.overview, ...qa.shots] : qa.shots;
      const set = addSet(key, head.title, qa.overview ? 'add' : 'note', items);
      return `
        <div class="gqa reveal${qa.overview ? '' : ' gqa-tour'}${qa.flip ? ' gqa-flip' : ''}">
          <div class="gqa-stage-wrap">
          <button class="gqa-stage" type="button" data-set="${set}" data-i="0" aria-label="${esc(t('guide.view'))}: ${esc(head.title)}">
            ${deviceHTML({ src: srcOf(items[0]), alt: '', device: items[0].device || 'phone' }, { lens: false })}
          </button>
          ${outerLens(head.title)}
          </div>
          <div class="gqa-side">
            ${qa.kicker ? `<span class="gqa-kicker">${esc(qa.kicker)}</span>` : ''}
            <h3>${esc(head.title)}</h3>
            <p>${esc(head.desc)} ${esc(t(qa.overview ? 'guide.qaHint' : canHover() ? 'guide.tourHint' : 'guide.tourHintTap'))}.</p>
            <ul class="gqa-grid${qa.numbered ? ' numbered' : ''}">${qa.shots.map((s, i) => `
              <li><button type="button" data-set="${set}" data-i="${i + first}" data-src="${esc(srcOf(s))}">${qa.numbered ? `<span class="n">${i + 1}</span>` : ''}<span><b>${esc(s.title)}</b><small>${esc(s.desc)}</small></span></button></li>`).join('')}
            </ul>
          </div>
        </div>`;
    };
    /* Steps in order, joined by a line: each step's icon in its circle, its number beside the title */
    const flowHTML = (steps) => `
      <ol class="gflow reveal">${steps.map((s, i) => `
        <li><span class="ic" aria-hidden="true">${icon(s.icon || 'note')}</span><h3><span class="n">${String(i + 1).padStart(2, '0')}</span>${esc(s.title)}</h3><p>${esc(s.desc)}</p></li>`).join('')}
      </ol>`;
    /* Hierarchy: each level a card that jumps to its part of the page, stacked on a spine, beside a diagram of the
       containment path that ends in what an enclosure holds. Pointing at a card lights its node in the diagram. */
    const hierarchyHTML = (h) => `
      <div class="ghier reveal">
        <ol class="ghier-levels">${h.levels.map((l, i) => `
          <li><button class="ghier-level" type="button" data-jump="g-${esc(l.jump)}" data-k="${i}">
            <span class="ic" aria-hidden="true">${icon(l.icon)}</span>
            <span class="t"><small>${esc(t('guide.level', { n: i + 1 }))}</small><b>${esc(l.title)}</b><span>${esc(l.desc)}</span></span>
            <span class="go" aria-hidden="true">${ARROW}</span>
            <svg class="drawn-border" aria-hidden="true"></svg>
          </button></li>`).join('')}
        </ol>
        <div class="ghier-map" aria-hidden="true">
          <div class="ghier-path">${h.levels.map((l, i) => `
            <button class="ghier-node" type="button" tabindex="-1" data-jump="g-${esc(l.jump)}" data-k="${i}"><span class="ic">${icon(l.icon)}</span><b>${esc(l.title)}</b></button>`).join('<span class="ghier-link"></span>')}
          </div>
          <div class="ghier-holds">
            <small>${esc(h.holds.title)}</small>
            <ul>${h.holds.items.map((x) => `<li><span class="ic">${icon(x.icon)}</span><span><b>${esc(x.title)}</b><em>${esc(x.desc)}</em></span></li>`).join('')}</ul>
          </div>
        </div>
      </div>`;
    /* Capabilities by type: a table on wide screens, one card per capability on phones */
    const compareHTML = (c) => `
      <div class="gcmp reveal">
        <table>
          <thead><tr><th scope="col" class="gcmp-corner">${esc(c.corner)}</th>${c.types.map((x) => `
            <th scope="col" class="tone-${x.tone}"><b>${esc(x.title)}</b><span>${esc(x.sub)}</span></th>`).join('')}</tr></thead>
          <tbody>${c.rows.map((r) => `
            <tr><th scope="row"><span class="cap"><span class="ic" aria-hidden="true">${icon(r.icon)}</span><span><b>${esc(r.title)}</b><small>${esc(r.desc)}</small></span></span></th>${r.cells.map((x, j) => `
              <td data-type="${esc(c.types[j].title)}"><span class="stat ${x.ok ? 'yes' : 'no'}">${esc(x.text)}</span>${x.note ? `<small>${esc(x.note)}</small>` : ''}</td>`).join('')}</tr>`).join('')}
          </tbody>
        </table>
      </div>`;
    let n = 0;
    const partsHTML = g.parts.map((p, pi) => `
      <section class="section guide-part${pi % 2 ? ' section-soft' : ''}" id="g-${p.id}">
        <div class="container">
          <div class="guide-head reveal">
            <span class="eyebrow">${esc(p.label)}</span>
            <h2 class="section-title">${esc(p.title)}</h2>
            <p class="section-lede">${withFab(p.lede)}</p>
          </div>
          ${p.glance ? glanceHTML(p.glance) : ''}
          ${p.cards ? `<div class="ggrid reveal" data-n="${p.cards.length}"${p.chain ? ' data-chain' : ''}>${p.cards.map((c) => cardHTML(c, ++n, p.notes)).join('')}</div>` : ''}
          ${p.actions ? actionsHTML(p.actions, p.id) : ''}
          ${p.tours ? p.tours.map((qa, i) => actionsHTML(qa, `${p.id}-${i}`)).join('') : ''}
          ${p.flow ? flowHTML(p.flow) : ''}
          ${p.compare ? compareHTML(p.compare) : ''}
          ${p.hierarchy ? hierarchyHTML(p.hierarchy) : ''}
        </div>
      </section>`).join('');
    const back = g.back && KIT_PAGES.find((x) => x.id === g.back);
    /* Module guides step through each other in module order (skipping modules without a guide), carrying on
       into the next area at the end of one. At the very ends: back to this module's page, or on to the modules. */
    const withGuides = allModules.filter((x) => GUIDES[x.id]);
    const guideStep = (dir) => {
      const k = withGuides.indexOf(backModule), x = withGuides[k + (dir === 'prev' ? -1 : 1)];
      if (x) return pagerHTML(dir, { href: `#/guide/${x.id}`, title: x.title, ...photoOf(x),
        label: `${t(dir === 'prev' ? 'pager.prev' : 'pager.next')}${x.track !== backModule.track ? ` · ${esc(areaById[x.track].label)}` : ''}` });
      return dir === 'prev'
        ? pagerHTML('prev', { href: `#/m/${backModule.id}`, label: t('guide.module'), title: backModule.title, ...photoOf(backModule) })
        : pagerHTML('next', { href: '#/', attrs: ' data-scroll="index"', label: t('pager.next'), title: t('pager.modules'), url: PHOTOS.hero, pos: '60% 30%' });
    };
    /* The banner shows the module's icon above its area label, with the home leaf's rise and sway */
    /* Each guide page opens on a random photo of the guide set, and carries on through it from there */
    let bannerOffset;
    do bannerOffset = Math.floor(Math.random() * GUIDE_ORDER.length);
    while (GUIDE_ORDER.length > 1 && bannerNow(GUIDE_ORDER, bannerOffset) === lastGuideBanner);
    lastGuideBanner = bannerNow(GUIDE_ORDER, bannerOffset);
    /* A module whose icon is drawn (no font glyph) shows that drawing instead */
    const glyphFor = backModule ? backModule.id : id;
    const heroIcon = GUIDE_DRAWN[glyphFor]
      ? `<span class="hero-leaf hero-icon drawn" aria-hidden="true"><svg viewBox="60 -900 840 840" fill="currentColor">${GUIDE_DRAWN[glyphFor]}</svg></span>`
      : `<span class="hero-leaf hero-icon" aria-hidden="true">${GUIDE_GLYPH[glyphFor] || 'explore'}</span>`;

    app.innerHTML = `
      <div class="guidepage tint-${AREA_TINT[track]}">
        <section class="hero guide-hero" data-banners="guide" data-offset="${bannerOffset}">
          <div class="hero-media"><div class="hero-slides">${((b) => `<div class="hero-bg" style="background-image:url('${bannerSrc(b)}');--x:${b.x};--y:${b.y}"></div>`)(bannerNow(GUIDE_ORDER, bannerOffset))}</div></div>
          <div class="container hero-inner">
            ${backModule ? `<a class="guide-back" href="#/m/${backModule.id}">${CHEV_L}<span>${esc(t('guide.back', { x: backModule.title }))}</span></a>` : ''}
            ${heroIcon}
            <span class="guide-kicker">${esc(backModule ? `${areaById[backModule.track].label} · ${numberOf[backModule.id]}` : g.kicker)}</span>
            ${heroTitle(g.title)}
            <p class="hero-sub">${esc(g.sub)}</p>
            <nav class="hero-chips guide-jump" aria-label="${esc(t('guide.jump'))}">
              ${g.parts.map((p, i) => `<button class="chip" type="button" data-jump="g-${p.id}" style="--i:${i}"><span class="n">0${i + 1}</span>${esc(p.title)}<svg class="drawn-border" aria-hidden="true"></svg></button>`).join('')}
            </nav>
          </div>
        </section>
        ${partsHTML}
        <section class="section guide-close" id="g-close">
          <div class="container">
            <div class="guide-head reveal">
              <span class="eyebrow">${esc(g.close.label)}</span>
              <h2 class="section-title">${esc(g.close.title)}</h2>
              <p class="section-lede">${esc(g.close.lede)}</p>
            </div>
            ${g.close.items ? flowHTML(g.close.items) : ''}
            <nav class="mpager" aria-label="${esc(t('pager.pages'))}">
              ${back ? pagerHTML('prev', { href: `#/kit/${back.id}`, label: t('guide.summary'), title: byId[back.module].title, url: (byId[back.module].shots[0] || {}).src || PHOTOS.hero, pos: '50% 12%' })
                : backModule ? guideStep('prev') : '<span></span>'}
              ${backModule ? guideStep('next') : pagerHTML('next', { href: '#/', attrs: ' data-scroll="index"', label: t('pager.next'), title: t('pager.modules'), url: PHOTOS.hero, pos: '60% 30%' })}
            </nav>
          </div>
        </section>
      </div>`;

    const page = app.querySelector('.guidepage');
    /* Hierarchy: pointing at (or focusing) a level lights its node in the diagram, and the nodes up to it */
    page.querySelectorAll('.ghier').forEach((hi) => {
      const nodes = [...hi.querySelectorAll('.ghier-node')];
      const light = (k) => { hi.classList.toggle('lit', k != null); nodes.forEach((n) => { n.classList.toggle('on', +n.dataset.k === k); n.classList.toggle('path', k != null && +n.dataset.k < k); }); };
      hi.querySelectorAll('.ghier-level, .ghier-node').forEach((b) => {
        b.addEventListener('pointerenter', () => light(+b.dataset.k)); b.addEventListener('focus', () => light(+b.dataset.k));
        b.addEventListener('pointerleave', () => light(null)); b.addEventListener('blur', () => light(null));
      });
    });
    /* Record tour: pointing at (or focusing) a numbered tile brings its screen up on the phone beside it */
    page.querySelectorAll('.gqa-tour').forEach((tour) => {
      const img = tour.querySelector('.gqa-stage img');
      const tiles = [...tour.querySelectorAll('.gqa-grid button')];
      const show = (b) => { tiles.forEach((x) => x.classList.toggle('on', x === b)); if (img.getAttribute('src') !== b.dataset.src) img.src = b.dataset.src; };
      tiles.forEach((b) => { b.addEventListener('pointerenter', () => { if (canHover()) show(b); }); b.addEventListener('focus', () => show(b)); });
      if (tiles[0]) tiles[0].classList.add('on');
    });
    page.addEventListener('click', (e) => {
      const jump = e.target.closest('[data-jump]');
      if (jump) { scrollToId(jump.dataset.jump); return; }
      const b = e.target.closest('[data-set]');
      if (!b) return;
      const r = b.getBoundingClientRect();
      /* The window holds only this card's screens and stops at its first and last. In a grid marked chain
         (part.chain), it runs on through every card of that grid instead. Closing returns focus to the card last shown */
      const grid = b.closest('.ggrid[data-chain]');
      const ids = grid ? [...grid.querySelectorAll('.gcard[data-set]')].map((x) => +x.dataset.set) : null;
      (narrow() ? openFeatureSheet : openFeatureWindow)(sets[+b.dataset.set], +b.dataset.i || 0, {
        origin: { x: r.left + r.width / 2, y: r.top + r.height / 2 },
        chain: ids ? { sets: ids.map((k) => sets[k]), at: ids.indexOf(+b.dataset.set) } : undefined,
        close: (i, k) => ((ids && page.querySelector(`.gcard[data-set="${ids[k]}"]`)) || b).focus({ preventScroll: true }), returnFocusTo: b
      });
    });
    sizeBorders();
    bindParallax();
    document.title = `${g.title} · ${t('brand.title')}`;
  }

  /* The support address opens the visitor's own mail app wherever it appears */
  const EMAIL = 'info@antzsystems.com';

  function renderHome(returning) {
    const about = byId['what-is-antz-systems'];
    const spot = byId[FEATURE_PICK.id];
    /* One of the workflow's screens, shown in full as a still, decorative picture beside the list */
    const spotSrc = (spot.features[FEATURE_PICK.shot] && spot.features[FEATURE_PICK.shot].shot) || (spot.features.find((f) => f.shot) || {}).shot || (spot.shots[0] && spot.shots[0].src);
    const spotShot = spotSrc ? shotFor(spot, spotSrc) : null;
    const faqs = [
      [t('faq.q1'), about.intro],
      [t('faq.q2'), t('faq.a2')],
      [t('faq.q3'), t('faq.a3')],
      [t('faq.q4'), t('faq.a4')],
      [t('faq.q5'), t('faq.a5')]
    ];

    app.innerHTML = `
      <section class="hero">
        <div class="hero-media"><div class="hero-slides">${((b) => `<div class="hero-bg" style="background-image:url('${bannerSrc(b)}');--x:${b.x};--y:${b.y}"></div>`)(bannerNow())}</div></div>
        <div class="container hero-inner">
          ${LEAVES_SVG}
          ${heroTitle(t('hero.title'))}
          <p class="hero-sub">${esc(t('hero.sub'))}</p>
          <div class="hero-search" role="search">
            <label class="search-field">
              ${SEARCH_SVG}
              <span class="sr-only">${esc(t('search.label'))}</span>
              <input id="q" type="search" autocomplete="off" placeholder="" aria-controls="q-results" aria-expanded="false">
              ${cueHTML()}
              <button class="search-clear" type="button" aria-label="${esc(t('search.clear'))}">${CLOSE_SVG}</button>
            </label>
            <div class="search-results" id="q-results" role="listbox"></div>
          </div>
          <div class="hero-chips">
            ${areas.map((a, i) => `<button class="chip" type="button" data-area="${a.id}" style="--i:${i}">${icon(a.glyph)}${esc(a.label)}<svg class="drawn-border" aria-hidden="true"></svg></button>`).join('')}
          </div>
          <p class="hero-meta"><span>${icon('areas')}${esc(t('hero.areas', { n: areas.length }))}</span><span class="hero-meta-sep" aria-hidden="true">·</span><span>${icon('devices')}${esc(t('hero.devices'))}</span></p>
        </div>
      </section>

      <section class="bento-section" aria-label="${esc(t('start.label'))}">
        <div class="container bento">
          ${KIT_PAGES.map((k) => {
            const m = byId[k.module];
            return `
            <a class="bento-card bento-${k.id} reveal" href="#/kit/${k.id}">
              <span class="bento-copy">
                <span class="eyebrow">${esc(k.eyebrow)}</span>
                <span class="bento-title">${esc(m.title)}</span>
                <span class="bento-text">${esc(m.intro)}</span>
                <span class="bento-more">${esc(k.more)} ${ARROW}</span>
              </span>
              ${k.id === 'getting-started'
                ? `<span class="bento-phone" aria-hidden="true">${kitScreen(m, { lens: false })}</span>`
                : `<span class="bento-media" style="background-image:url('${PHOTOS[k.photo]}')${k.pos ? `;background-position:${k.pos}` : ''}" aria-hidden="true"></span>`}
              <svg class="drawn-border" aria-hidden="true"></svg>
            </a>`;
          }).join('')}
        </div>
      </section>

      <section class="section modules-section" id="index">
        <div class="container">
          <div class="modules-head reveal">
            <div>
              <span class="eyebrow">${esc(t('modules.eyebrow'))}</span>
              <h2 class="section-title">${esc(t('modules.title'))}</h2>
            </div>
            <p class="section-lede">${esc(t('modules.lede'))}</p>
          </div>
          ${modulesHTML()}
        </div>
      </section>

      <section class="section" id="outcomes">
        <div class="container">
          <div class="section-head reveal">
            <span class="eyebrow">${esc(t('outcomes.eyebrow'))}</span>
            <h2 class="section-title">${esc(t('outcomes.title'))}</h2>
            <p class="section-lede">${esc(t('outcomes.lede'))}</p>
          </div>
          <div class="outcome-grid">
            ${['pets', 'devices', 'shield', 'progress'].map((ic, i) => [i + 1, ic]).map(([n, ic]) => `
              <div class="outcome-card reveal">
                <span class="outcome-ic" aria-hidden="true">${icon(ic)}</span>
                <span class="outcome-no">${String(n).padStart(2, '0')}</span>
                <div>
                  <h3>${esc(t(`outcomes.${n}`))}</h3>
                  <p>${esc(t(`outcomes.${n}.desc`))}</p>
                </div>
              </div>`).join('')}
          </div>
        </div>
      </section>

      <section class="section" id="spotlight">
        <div class="container spotlight">
          <div class="reveal">
            <span class="tag-new">${esc(t('spot.tag'))}</span>
            <h2>${esc(spot.title)}</h2>
            <p class="lede">${esc(spot.intro)}</p>
            <div class="spot-feats tint-${AREA_TINT[spot.track]}">${featureListHTML(spot, true)}</div>
            <a class="link-arrow" href="#/m/${spot.id}">${esc(t('spot.link', { x: spot.title }))} ${ARROW}</a>
          </div>
          <div class="stage tint-${AREA_TINT[spot.track]}" aria-hidden="true">
            <div class="stage-device">${spotShot ? deviceHTML(spotShot) : ''}</div>
          </div>
        </div>
      </section>


      <section class="cta">
        <div class="cta-bg" style="background-image:url('${PHOTOS.cta}')"></div>
        <div class="container">
          <div class="cta-inner reveal">
            <h2 data-depth="1">${esc(t('cta.title'))}</h2>
            <p data-depth="0.7">${esc(t('cta.text'))}</p>
            <div class="actions" data-depth="0.45">
              <button class="btn btn-primary" type="button" data-scroll="index">${esc(t('cta.back'))}</button>
            </div>
            <p class="or" data-depth="0.3">${esc(t('cta.or', { email: '\u0000' })).replace('\u0000', `<a href="mailto:${EMAIL}">${EMAIL}</a>`)}</p>
          </div>
        </div>
      </section>

      <section class="section" id="faq">
        <div class="container">
          <div class="section-head center reveal">
            <span class="eyebrow">${esc(t('faq.eyebrow'))}</span>
            <h2 class="section-title">${esc(t('faq.title'))}</h2>
          </div>
          <div class="faq">
            ${faqs.map(([q, a]) => `<details class="reveal"><summary>${esc(q)}</summary><p class="answer">${esc(a).replace(EMAIL, `<a href="mailto:${EMAIL}">${EMAIL}</a>`)}</p></details>`).join('')}
          </div>
        </div>
      </section>`;

    bindParallax();
    bindSpotFeatures(app.querySelector('.spot-feats'), spot);
    bindModules(!!returning);
    bindSearch();
    app.querySelectorAll('.chip[data-area]').forEach((c) =>
      c.addEventListener('click', () => { filterArea(c.dataset.area); scrollToId('index'); }));
  }

  /* ---------- Module cards: grouped by area, open in place ---------- */
  const AREA_TINT = { records: 'records', animal: 'animal', medical: 'medical', mortality: 'mortality', operations: 'operations', guide: 'guide' };
  /* Outline gradients: the area's line colour, melting into a deeper tone of its complementary hue (matches the panel backgrounds) */
  /* The cards' drawn-border gradients, one per area (line-<area>), are defined once in index.html */
  /* One short line per card, derived from the intro until real taglines exist */
  const summary = (m) => {
    if (m.sum) return m.sum;
    let t = m.raw
      .replace(/^On the (app|web console),\s*/i, '')
      .replace(/^The web companion to [^—]+—\s*/, '')
      .replace(/^The web companion\s+/, '')
      .replace(/^The\s+.*?\b(module|feature)\s+(is\s+(designed to|a|the)\s+)?/i, '');
    t = tidy(t.split(/\s—\s|\.\s/)[0]).replace(/[.,]\s*$/, '');
    return t.charAt(0).toUpperCase() + t.slice(1);
  };
  const numberOf = Object.fromEntries(areas.flatMap((a) => a.modules).map((m, i) => [m.id, String(i + 1).padStart(2, '0')]));
  /* Brand icons from References/icons */
  const BRAND_ICONS = ['announcement', 'collections', 'communication', 'compliance', 'diet', 'egg', 'housing', 'lab_research', 'medical', 'necropsy', 'pharmacy', 'users'];
  const MODULE_ICON = {
    'notes-module': 'notes', 'chat-module': 'communication', 'focus-hub': 'focus_hub', 'user-management': 'users', collection: 'collections', housing: 'housing',
    'medical-records': 'medical_records', 'hospital-information-management-system-app': 'medical', 'hospital-information-management-system-web': 'hospital',
    necropsy: 'necropsy', 'egg-management-app': 'egg', 'egg-management-web': 'egg', announcement: 'announcement',
    lab: 'lab_research', diet: 'diet', 'pharmacy-app': 'pharmacy', 'pharmacy-web': 'pharmacy', compliance: 'compliance',
    /* Added to match: Material Symbols Outlined, weight 600, same 50px framing as the set above */
    'animal-management': 'cruelty_free', 'tags-hub': 'sell', 'animal-transfer': 'local_shipping', approvals: 'approval',
    'missing-escaped-animal': 'crisis_alert', 'symptoms-clinical-assessment-prescription': 'stethoscope',
    'administer-medicine': 'medication_liquid', vaccination: 'vaccines', deworming: 'pest_control', supplements: 'nutrition',
    mortality: 'fish_bone', 'fetal-death': 'heart_broken', 'helpdesk-module': 'support_agent', security: 'verified_user',
    'reports-app': 'analytics', 'reports-web': 'summarize'
  };
  const hash = (str) => [...str].reduce((h, c) => (h * 31 + c.charCodeAt(0)) >>> 0, 7);
  /* Every module has an icon now; the fallback only covers modules added later */
  const iconOf = (m) => MODULE_ICON[m.id] || BRAND_ICONS[hash(m.id) % BRAND_ICONS.length];
  /* A module whose own icon stands in for its area's beside the area label (on its page and in its windows) */
  const AREA_GLYPH_FOR = { mortality: 'fishbone', necropsy: 'fishbone', 'egg-management-web': 'fishbone' };
  const areaGlyphOf = (m, area) => AREA_GLYPH_FOR[m.module || m.id] || area.glyph;
  /* Two photos, cropped and mirrored six ways so neighbouring cards differ */
  const PHOTO_VARIANTS = [
    { src: 'collections_bg', pos: '30% 40%', flip: 1 },
    { src: 'housing_bg', pos: '46% 26%', flip: 1 },
    { src: 'collections_bg', pos: '62% 72%', flip: -1 },
    { src: 'housing_bg', pos: '80% 62%', flip: -1 },
    { src: 'collections_bg', pos: '18% 24%', flip: -1 },
    { src: 'housing_bg', pos: '12% 45%', flip: 1 }
  ];
  /* Module photos from References/icon_backgrounds/card images (web copies in assets/cards).
     chat-module and focus-hub use banner animals as stand-ins until their own photos arrive.
     Modules without their own photo fall back to a PHOTO_VARIANTS crop. */
  const CARD_PHOTOS = new Set(['notes-module', 'chat-module', 'focus-hub', 'user-management', 'housing', 'animal-management', 'animal-transfer', 'approvals', 'missing-escaped-animal',
    'medical-records', 'symptoms-clinical-assessment-prescription', 'administer-medicine', 'vaccination', 'deworming', 'supplements',
    'hospital-information-management-system-app', 'hospital-information-management-system-web', 'mortality', 'necropsy', 'fetal-death',
    'egg-management-app', 'egg-management-web', 'announcement', 'helpdesk-module', 'security', 'reports-app', 'reports-web', 'lab', 'diet',
    'pharmacy-app', 'pharmacy-web', 'compliance']);
  const CARD_PHOTO_POS = { announcement: '50% 22%', 'user-management': '50% 40%', 'fetal-death': '50% 45%' };
  const photoIndex = Object.fromEntries(areas.flatMap((a) => a.modules).map((m, i) => [m.id, i]));
  const photoOf = (m) => CARD_PHOTOS.has(m.id)
    ? { url: `assets/cards/${m.id}.jpg`, pos: CARD_PHOTO_POS[m.id] || '50% 50%', flip: 1 }
    : (({ src, pos, flip }) => ({ url: `assets/icon-bg/${src}.jpg`, pos, flip }))(PHOTO_VARIANTS[photoIndex[m.id] % PHOTO_VARIANTS.length]);
  /* Previous / next link: a round thumbnail of that page with the arrow on it, then its label and title */
  const pagerArrow = (dir) => (dir === "prev" ? CHEV_L : CHEV_R);
  const pagerHTML = (dir, { href, label, title, url, pos = '50% 50%', attrs = '' }) => `
    <a class="mpager-link ${dir}" href="${href}"${attrs}>
      <span class="mpager-thumb" style="background-image:url('${url}');background-position:${pos}"><span class="mpager-arrow" aria-hidden="true">${pagerArrow(dir)}</span></span>
      <span class="mpager-text"><small>${label}</small><b>${esc(title)}</b></span>
    </a>`;
  const thumbHTML = (m) => {
    const v = photoOf(m);
    return `<span class="mcard-thumb">
      <span class="mcard-bg" style="background-image:url('${v.url}');background-position:${v.pos};--flip:${v.flip}"></span>
      <img class="mcard-icon" src="assets/icons/${iconOf(m)}_icon.svg" alt="">
      <span class="mcard-num">${numberOf[m.id]}</span>
    </span>`;
  };
  /* Hover border: one path that starts at the bottom-left corner and closes there */
  const borderPath = (w, h, r, i = 2) => {
    const R = Math.max(r - i, 0), L = i, T = i, Rt = w - i, B = h - i;
    return `M${L},${B - R} V${T + R} A${R},${R} 0 0 1 ${L + R},${T} H${Rt - R} A${R},${R} 0 0 1 ${Rt},${T + R} V${B - R} A${R},${R} 0 0 1 ${Rt - R},${B} H${L + R} A${R},${R} 0 0 1 ${L},${B - R} Z`;
  };

  /* Module card: a link to the module's own page */
  const mcardHTML = (m) => `
    <article class="mcard" data-id="${m.id}">
      <a class="mcard-face" href="#/m/${m.id}">
        ${thumbHTML(m)}
        <span class="mcard-body">
          <span class="mcard-title">${esc(m.title)}</span>
          <span class="mcard-sum">${esc(summary(m))}</span>
          <span class="mcard-foot"><span>${esc(t('modules.features', { n: m.features.length }))}</span><span class="mcard-plus" aria-hidden="true"><svg width="16" height="16" viewBox="0 -960 960 960" fill="currentColor"><path d="M665.08-450H210q-12.77 0-21.38-8.62Q180-467.23 180-480t8.62-21.38Q197.23-510 210-510h455.08L458.31-716.77q-8.92-8.92-8.81-20.88.12-11.96 9.42-21.27 9.31-8.69 21.08-9 11.77-.31 21.08 9l253.61 253.61q5.62 5.62 7.92 11.85 2.31 6.23 2.31 13.46t-2.31 13.46q-2.3 6.23-7.92 11.85L501.08-201.08q-8.31 8.31-20.58 8.5-12.27.19-21.58-8.5-9.3-9.31-9.3-21.38 0-12.08 9.3-21.39L665.08-450Z"/></svg></span></span>
        </span>
        <svg class="drawn-border" aria-hidden="true"></svg>
      </a>
    </article>`;

  function modulesHTML() {
    const total = areas.reduce((t, a) => t + a.modules.length, 0);
    return `
      <div class="mfilters" role="toolbar" aria-label="${esc(t('modules.filter'))}">
        <button class="mfilter" type="button" data-area="all" aria-pressed="true">${esc(t('modules.all'))} <span>${total}</span><svg class="drawn-border" aria-hidden="true"></svg></button>
        ${areas.map((a) => `<button class="mfilter" type="button" data-area="${a.id}" aria-pressed="false">${icon(a.glyph)}${esc(a.label)} <span>${a.modules.length}</span><svg class="drawn-border" aria-hidden="true"></svg></button>`).join('')}
      </div>
      <div class="mgroups">
        ${areas.map((a) => `
          <section class="mgroup tint-${AREA_TINT[a.id]}" data-area="${a.id}" aria-labelledby="mg-${a.id}">
            <header class="mgroup-head">
              <span class="ic">${icon(a.glyph)}</span>
              <h3 id="mg-${a.id}">${esc(a.label)}</h3>
              <span class="count">${esc(t('modules.count', { n: a.modules.length }))}</span>
            </header>
            <div class="mgrid">${a.modules.map(mcardHTML).join('')}</div>
          </section>`).join('')}
      </div>`;
  }

  let pageTeardown = null;
  const narrow = () => matchMedia('(max-width: 760px)').matches;

  function filterArea(id) {
    app.querySelectorAll('.mfilter').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.area === id)));
    app.querySelectorAll('.mgroup').forEach((g) => { g.hidden = id !== 'all' && g.dataset.area !== id; });
    /* Replay the entrance for groups on screen; groups off screen (e.g. filtered from the banner) reveal when scrolled to */
    if (DEAL_ENABLED && !reducedMotion()) app.querySelectorAll('.mgroup:not([hidden])').forEach((g) => {
      const r = g.getBoundingClientRect();
      if (r.top < innerHeight && r.bottom > 0) { if (dealObserver) dealObserver.unobserve(g); dealGroup(g); }
      else if (dealObserver && g.querySelector('.mcard.pending')) dealObserver.observe(g);
    });
  }

  /* Module page: pick a feature to see its screen. On desktop the device stays beside the title;
     on phones it moves under the selected feature. The choice is kept in the URL so the link can be shared. */
  function bindFeatures(root, m, start = 0, openNow = false) {
    const inner = root.querySelector('.mpanel-inner');
    const stage = root.querySelector('.mpanel-stage');
    const feats = [...root.querySelectorAll('.mfeat:not(.mfeat-link)')];
    const current = () => feats.findIndex((b) => b.getAttribute('aria-pressed') === 'true');
    const mark = (i) => feats.forEach((b, j) => { b.setAttribute('aria-pressed', String(i === j)); b.parentElement.classList.toggle('on', i === j); });
    /* Desktop and laptop: a feature's screen opens in a window with arrows either side */
    /* The window grows out from the feature's open icon (or the row itself) */
    const originOf = (i) => {
      const el = feats[i].querySelector('.mfeat-open') || feats[i];
      const r = el.getBoundingClientRect();
      return r.width ? { x: r.left + r.width / 2, y: r.top + r.height / 2 } : null;
    };
    /* Desktop: the centred window with side arrows. Phones: the full-screen sheet. */
    const openWindow = (i) => (narrow() ? openFeatureSheet : openFeatureWindow)(m, i, {
      origin: originOf(i),
      step: (j) => { mark(j); history.replaceState(null, '', `#/m/${m.id}/${j}`); },
      close: (j) => { history.replaceState(null, '', `#/m/${m.id}`); feats[j].focus({ preventScroll: true }); }
    });
    const select = (i, fromUser) => {
      mark(i);
      if (fromUser) history.replaceState(null, '', `#/m/${m.id}/${i}`);
      if (!stage) return;
      if (fromUser) { openWindow(i); return; }
      const f = m.features[i];
      const src = f.shot || (m.shots[i] && m.shots[i].src) || (m.shots[0] && m.shots[0].src);
      const holder = stage.querySelector('.mpanel-device');
      const shot = src ? { ...shotFor(m, src), lock: !!f.lock } : null;
      const cur = holder.firstElementChild;
      const kind = shot ? deviceHTML(shot).match(/class="device ([\w-]+)/)[1] : '';
      if (cur && shot && cur.classList.contains(kind)) {
        /* Same device: swap the screen and replay the rise, so every feature selection feels the same */
        const img = cur.querySelector('img');
        img.src = shot.src; img.alt = shot.alt || '';
        cur.querySelector('.screen-lock')?.remove();
        if (shot.lock) (cur.querySelector('.screen') || cur).insertAdjacentHTML('beforeend', lockHTML());
        cur.classList.remove('rise'); void cur.offsetWidth; cur.classList.add('rise');
      } else {
        /* First view (or a different device): the device rises from below and settles */
        holder.innerHTML = shot ? deviceHTML(shot) : '';
        if (holder.firstElementChild) holder.firstElementChild.classList.add('rise');
      }
      stage.querySelector('.cap').textContent = tidyTitle(f.title);
      /* On phones the screen goes under the tapped feature, where the eye already is */
      if (narrow()) {
        const row = feats[i].parentElement;
        if (stage.parentElement !== row) {
          keepInPlace(row, () => row.append(stage));
          const dev = holder.firstElementChild;
          if (dev) { dev.classList.remove('rise'); void dev.offsetWidth; dev.classList.add('rise'); }
        }
      } else if (stage.parentElement !== inner) inner.append(stage);
    };
    feats.forEach((b, i) => {
      b.addEventListener('click', () => select(i, true));
      b.addEventListener('keydown', (e) => {
        if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;
        e.preventDefault();
        const n = (i + (e.key === 'ArrowDown' ? 1 : -1) + feats.length) % feats.length;
        /* Arrow keys move through the list; on desktop Enter opens the window */
        feats[n].focus(); mark(n);
      });
    });
    if (stage) bindGalleryTrigger(stage, m, current);
    select(Math.min(start, feats.length - 1));
    /* A link to a feature (#/m/<id>/<n>) opens its window straight away on desktop */
    if (openNow && stage) openWindow(Math.min(start, feats.length - 1));

    /* Re-place the device when the layout changes */
    let t;
    const onResize = () => { clearTimeout(t); t = setTimeout(() => select(current()), 120); };
    window.addEventListener('resize', onResize);
    pageTeardown = () => { window.removeEventListener('resize', onResize); pageTeardown = null; };
  }

  /* Drawn border with feathered ends, shared by module cards and filter chips.
     FEATHER_LAYERS copies of the path are stacked; layer j starts j steps later and ends j steps
     earlier, with opacity 1/(N-j), so opacity ramps linearly from 0 to 1 over the feather length
     at both the starting end and the travelling end. The feather closes to zero as the loop completes. */
  const FEATHER_LAYERS = 16;
  const DRAW_MS = 1250, UNDRAW_MS = 650;
  const easeInOut = (t) => (t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
  const reducedMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
  const borderState = new WeakMap();

  function paintBorder(el, p) {
    const st = borderState.get(el);
    if (!st || !st.len) return;
    /* Fully drawn: use a solid closed stroke so the start and end join without a dash seam */
    if (p >= 0.999) { st.paths.forEach((path) => { path.setAttribute('stroke-dasharray', 'none'); path.setAttribute('stroke-dashoffset', '0'); }); return; }
    const f = Math.min(st.feather / st.len, p / 2) * Math.min(1, (1 - p) / 0.08);
    st.paths.forEach((path, j) => {
      const inset = (f * j) / FEATHER_LAYERS;
      path.setAttribute('stroke-dasharray', `${Math.max(p - 2 * inset, 0)} 2`);
      path.setAttribute('stroke-dashoffset', `${-inset}`);
    });
  }
  function animateBorder(el) {
    const st = borderState.get(el);
    if (!st) return;
    const target = st.isOn() ? 1 : 0;
    if (st.target === target && (st.raf || st.p === target)) return;
    st.target = target;
    cancelAnimationFrame(st.raf);
    if (reducedMotion()) { st.p = target; paintBorder(el, st.p); st.raf = 0; return; }
    const from = st.p, dur = (target ? st.drawMs : st.undrawMs) * Math.abs(target - from);
    const t0 = performance.now();
    const step = (now) => {
      const t = dur ? Math.min((now - t0) / dur, 1) : 1;
      st.p = from + (target - from) * easeInOut(t);
      paintBorder(el, st.p);
      st.raf = t < 1 ? requestAnimationFrame(step) : 0;
    };
    st.raf = requestAnimationFrame(step);
  }

  /* opts.over: draw on top of the element's own border (chips) instead of inside it (cards) */
  function fitBorder(el, opts) {
    const cs = getComputedStyle(el);
    const bw = parseFloat(cs.borderTopWidth) || 0;
    /* Unrounded sizes: offsetHeight rounds a 76.3px tab down to 76, leaving a sliver of fill below the line */
    const bx = opts.over ? 0 : bw + (parseFloat(cs.borderRightWidth) || 0);
    const by = opts.over ? 0 : bw + (parseFloat(cs.borderBottomWidth) || 0);
    const w = parseFloat(cs.width) - bx;
    const h = parseFloat(cs.height) - by;
    if (!w || !h) return;
    const outerR = parseFloat(cs.borderTopLeftRadius) || 0;
    const r = Math.min(opts.over ? outerR : outerR - bw, h / 2, w / 2);
    const svg = el.querySelector('.drawn-border');
    svg.setAttribute('width', w); svg.setAttribute('height', h);
    svg.style.left = svg.style.top = opts.over ? `${-bw}px` : '0px';
    /* stroke may depend on screen size; bleed widens it past the clipped edge so no background shows at rounded corners */
    const stroke = typeof opts.stroke === 'function' ? opts.stroke() : opts.stroke;
    const sw = stroke + (opts.bleed || 0), inset = stroke / 2 - (opts.bleed || 0) / 2;
    const d = opts.path ? opts.path(w, h, r, inset) : borderPath(w, h, r, inset);
    let st = borderState.get(el);
    if (!st) {
      svg.innerHTML = Array.from({ length: FEATHER_LAYERS }, (_, j) =>
        `<path pathLength="1" stroke-width="${sw}" stroke-dasharray="0 2" stroke-opacity="${(1 / (FEATHER_LAYERS - j)).toFixed(4)}"/>`).join('');
      st = { p: 0, target: 0, raf: 0, paths: [...svg.children], feather: opts.feather, drawMs: opts.drawMs || DRAW_MS, undrawMs: opts.undrawMs || UNDRAW_MS, isOn: opts.isOn };
      borderState.set(el, st);
      if (!opts.noHover) ['pointerenter', 'pointerleave', 'focus', 'blur', 'focusin', 'focusout'].forEach((ev) => el.addEventListener(ev, () => animateBorder(el)));
    }
    st.paths.forEach((path) => { path.setAttribute('d', d); path.setAttribute('stroke-width', sw); });
    st.len = st.paths[0].getTotalLength();
    paintBorder(el, st.p);
  }

  /* 1.4px on every screen size */
  const CARD_BORDER = { stroke: () => 1.4, bleed: 1, feather: 64, isOn: null };
  const CHIP_BORDER = { stroke: 1, feather: 28, over: true, drawMs: 900, undrawMs: 500 };
  let borderObserver = null;
  function sizeBorders() {
    if (borderObserver) borderObserver.disconnect();
    const targets = [
      /* Start-here cards under the hero: the module cards' border, in the brand gradient (they have no area) */
      /* Housing's level cards draw a finer 1px border */
      ...[...app.querySelectorAll('.ghier-level')].map((el) => [el, { ...CARD_BORDER, stroke: 1, bleed: 0,
        isOn: () => (el.matches(':hover') && canHover()) || el.matches(':focus-visible') }]),
      ...[...app.querySelectorAll('.mcard-face, .bento-card')].map((el) => [el, { ...CARD_BORDER,
        isOn: () => (el.matches(':hover') && canHover()) || el.matches(':focus-visible') }]),
      /* Feature rows on module pages draw the same border as the home cards, in the area colour */
      ...[...app.querySelectorAll('.mfeat-row')].map((el) => [el, { ...CARD_BORDER, stroke: 1, bleed: 0, over: true,
        /* Hover, or keyboard focus on its button (a mouse click leaves focus behind, which must not keep it drawn) */
        isOn: () => (el.matches(':hover') && canHover()) || !!el.querySelector(':focus-visible') }]),
      /* Area tabs on module pages: the home chips' drawn border, in each area's colour (not on the selected tab) */
      ...[...app.querySelectorAll('.mtab')].map((el) => [el, { ...CHIP_BORDER, feather: 40,
        isOn: () => !el.hasAttribute('aria-current') && ((el.matches(':hover') && canHover()) || el.matches(':focus-visible')) }]),
      ...[...app.querySelectorAll('.mfilter, .hero-chips .chip')].map((el) => [el, { ...CHIP_BORDER,
        isOn: () => el.matches(':hover') || el.matches(':focus-visible') }])
    ];
    const optsOf = new Map(targets);
    targets.forEach(([el, o]) => fitBorder(el, o));
    if ('ResizeObserver' in window) {
      borderObserver = new ResizeObserver((entries) => entries.forEach((e) => fitBorder(e.target, optsOf.get(e.target))));
      targets.forEach(([el]) => borderObserver.observe(el));
    }
  }
  
  /* Card entrance, played once per area as it first scrolls into view.
     Cards in a group below the fold wait (hidden) until the group scrolls into view. */
  /* Soft rise: each card fades up 12px, staggered left to right */
  const DEAL_ENABLED = true;
  const DEAL_STEP_MS = 40, DEAL_MAX_STEPS = 10;
  let dealObserver = null;
  function dealGroup(group) {
    [...group.querySelectorAll('.mcard')].forEach((card, i) => {
      card.style.setProperty('--deal-delay', `${Math.min(i, DEAL_MAX_STEPS) * DEAL_STEP_MS}ms`);
      card.classList.remove('deal', 'pending'); void card.offsetWidth;
      card.classList.add('deal');
      card.addEventListener('animationend', function done(e) {
        if (e.target !== card) return;
        card.removeEventListener('animationend', done);
        card.classList.remove('deal');
      });
    });
  }
  function setupDealing(skip) {
    if (dealObserver) dealObserver.disconnect();
    if (!DEAL_ENABLED || skip || reducedMotion() || !('IntersectionObserver' in window)) return;
    dealObserver = new IntersectionObserver((entries) => entries.forEach((en) => {
      if (!en.isIntersecting) return;
      dealObserver.unobserve(en.target);
      dealGroup(en.target);
    }), { rootMargin: '0px 0px -12% 0px', threshold: 0.12 });
    app.querySelectorAll('.mgroup').forEach((g) => {
      g.querySelectorAll('.mcard').forEach((c) => c.classList.add('pending'));
      dealObserver.observe(g);
    });
  }

  /* Publish the sticky filter bar's height so pinned content can sit below it */
  let filtersObserver = null;
  function trackFilterBar() {
    const bar = app.querySelector('.mfilters');
    if (!bar) return;
    const set = () => document.documentElement.style.setProperty('--mfilters-h', `${Math.ceil(bar.getBoundingClientRect().height)}px`);
    set();
    if (filtersObserver) filtersObserver.disconnect();
    if ('ResizeObserver' in window) { filtersObserver = new ResizeObserver(set); filtersObserver.observe(bar); }
  }

  function bindModules(returning) {
    trackFilterBar();
    sizeBorders();
    setupDealing(returning);
    app.querySelectorAll('.mfilter').forEach((b) => b.addEventListener('click', () => filterArea(b.dataset.area)));
  }

  /* ---------- Click-driven feature steps with a device preview ---------- */
  function stepsHTML(m, key) {
    return `<ol class="steps" role="tablist" aria-label="${esc(m.title)} features">
      ${m.features.map((f, i) => `
        <li class="step" role="tab" tabindex="${i === 0 ? 0 : -1}" data-key="${key}" data-i="${i}" aria-selected="${i === 0}">
          <span class="n">${i + 1}</span>
          <div><h3>${esc(f.title)}</h3><p>${esc(tidy(f.desc))}</p></div>
        </li>`).join('')}
    </ol>`;
  }
  /* Keep an element's position on screen steady while content above it changes */
  const keepInPlace = (el, change) => {
    const before = el.getBoundingClientRect().top;
    change();
    const diff = el.getBoundingClientRect().top - before;
    if (Math.abs(diff) > 1) window.scrollBy(0, diff);
  };

  function bindSteps(m, key, stage, start = 0, caption) {
    const steps = [...app.querySelectorAll(`.step[data-key="${key}"]`)];
    /* On phones the device (with its frame and caption) moves under the selected step */
    const wrap = stage && (stage.closest('.mod-stage') || stage.closest('.stage'));
    const home = wrap && { parent: wrap.parentElement, next: wrap.nextSibling };
    const place = (i) => {
      if (!wrap) return;
      if (narrow()) { if (wrap.parentElement !== steps[i]) steps[i].append(wrap); }
      else if (wrap.parentElement !== home.parent) home.parent.insertBefore(wrap, home.next);
    };
    let current = -1;
    const show = (i, fromUser) => {
      steps.forEach((s, j) => { s.setAttribute('aria-selected', String(i === j)); s.tabIndex = i === j ? 0 : -1; });
      const f = m.features[i];
      const src = f.shot || (m.shots[i] && m.shots[i].src) || (m.shots[0] && m.shots[0].src);
      if (stage) stage.innerHTML = src ? deviceHTML(shotFor(m, src)) : '';
      if (caption) caption.textContent = f.title;
      if (fromUser && narrow()) keepInPlace(steps[i], () => place(i)); else place(i);
      current = i;
    };
    if (wrap) {
      let t;
      window.addEventListener('resize', () => { clearTimeout(t); t = setTimeout(() => { if (wrap.isConnected && current >= 0) place(current); }, 150); });
    }
    steps.forEach((s, i) => {
      /* Taps on the device inside the step open the gallery instead of re-selecting */
      s.addEventListener('click', (e) => { if (wrap && wrap.contains(e.target)) return; if (i !== current) show(i, true); });
      s.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); show(i, true); }
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
          e.preventDefault();
          const n = (i + (e.key === 'ArrowDown' ? 1 : -1) + steps.length) % steps.length;
          steps[n].focus(); show(n, true);
        }
      });
    });
    if (stage) bindGalleryTrigger(stage, m, () => steps.findIndex((x) => x.getAttribute('aria-selected') === 'true'));
    show(Math.min(start, steps.length - 1));
  }

  /* ---------- Module page ---------- */
  /* Module page tabs: one tab per area, each with a photo from one of its modules,
     and under it one tab per module in the current area */
  const allModules = areas.flatMap((a) => a.modules);
  const areaPhoto = Object.fromEntries(areas.map((a) => {
    const rep = a.modules.find((x) => CARD_PHOTOS.has(x.id)) || a.modules[0];
    return [a.id, { url: `assets/cards/${rep.id}.jpg`, pos: CARD_PHOTO_POS[rep.id] || '50% 50%', icon: iconOf(rep) }];
  }));
  /* Module chips look and behave like the home page's filter chips (.mfilter): rise and drawn border on hover,
     gradient fill sweeping in when selected. mark = false renders none selected, so the fill can sweep in after. */
  const PIN_CHEVRON = '<svg class="chev" width="16" height="16" viewBox="0 -960 960 960" fill="currentColor"><path d="M466.54-375.85q-6.23-2.3-11.85-7.92L274.92-563.54q-8.3-8.31-8.5-20.88-.19-12.58 8.5-21.27 8.7-8.69 21.08-8.69 12.38 0 21.08 8.69L480-442.77l162.92-162.92q8.31-8.31 20.89-8.5 12.57-.19 21.27 8.5 8.69 8.69 8.69 21.07 0 12.39-8.69 21.08L505.31-383.77q-5.62 5.62-11.85 7.92-6.23 2.31-13.46 2.31t-13.46-2.31Z"/></svg>';
  const subTabsHTML = (cur, mark = true) => areaById[cur.track].modules.map((x) => `
    <a class="msubtab mfilter" href="#/m/${x.id}"${mark && x === cur ? ' aria-current="page"' : ''}><span class="ic" style="--ic:url('assets/icons/${iconOf(x)}_icon.svg')" aria-hidden="true"></span>${esc(x.title)}<svg class="drawn-border" aria-hidden="true"></svg></a>`).join('');
  const markSubTab = (sub, cur) => sub.querySelectorAll('.msubtab').forEach((x) => {
    if (x.getAttribute('href') === `#/m/${cur.id}`) x.setAttribute('aria-current', 'page'); else x.removeAttribute('aria-current');
  });
  const moduleTabsHTML = (cur) => `
    <nav class="mtabs" aria-label="${esc(t('mod.tabs'))}">
      <div class="mtabs-areas">${areas.map((a) => {
        const ph = areaPhoto[a.id];
        const here = a.id === cur.track;
        return `
        <a class="mtab tint-${AREA_TINT[a.id]}" href="#/m/${here ? cur.id : a.modules[0].id}"${here ? ' aria-current="true"' : ''}>
          <span class="mtab-thumb" style="background-image:url('${ph.url}');background-position:${ph.pos}"><img src="assets/icons/${ph.icon}_icon.svg" alt=""></span>
          <span class="mtab-text"><b>${esc(a.label)}</b><small>${esc(t('modules.count', { n: a.modules.length }))}</small></span>
          <svg class="drawn-border" aria-hidden="true"></svg>
        </a>`;
      }).join('')}
        <span class="mtab-ind" aria-hidden="true"><i class="mtab-line"></i><i class="mtab-bar"></i></span>
      </div>
      <div class="msubtabs" data-area="${cur.track}">${subTabsHTML(cur)}</div>
      <div class="mpin" inert>
        <div class="container mpin-row">
          <div class="mpin-area">
            <button class="mpin-areabtn" type="button" aria-haspopup="true" aria-expanded="false"><span class="dot"></span><b></b>${PIN_CHEVRON}</button>
            <div class="mpin-menu" hidden>${areas.map((a) => `
              <a class="tint-${AREA_TINT[a.id]}" href="#/m/${a.modules[0].id}" data-area="${a.id}"><span class="dot"></span>${esc(a.label)}<small>${a.modules.length}</small></a>`).join('')}
            </div>
          </div>
          <div class="msubtabs mpin-chips"></div>
        </div>
      </div>
    </nav>`;

  /* Tab rows that scroll sideways fade the edge where more tabs are hidden, and a mouse wheel scrolls them */
  const bindTabRow = (row) => {
    const edges = () => {
      /* In right-to-left pages scrolling starts at the right edge and scrollLeft runs negative */
      const max = row.scrollWidth - row.clientWidth, pos = RTL ? max + row.scrollLeft : row.scrollLeft;
      row.classList.toggle('more-l', pos > 2);
      row.classList.toggle('more-r', pos < max - 2);
    };
    row.addEventListener('scroll', edges, { passive: true });
    row.addEventListener('wheel', (e) => {
      if (row.scrollWidth <= row.clientWidth || Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
      e.preventDefault();
      row.scrollLeft += e.deltaY;
    }, { passive: false });
    row._edges = edges;
  };
  /* Bring a row's current tab to the middle (sideways only, so the page itself never moves) */
  const centreTab = (row, smooth) => {
    const cur = row.querySelector('[aria-current]');
    if (!cur || row.scrollWidth <= row.clientWidth) { row._edges(); return; }
    const off = cur.getBoundingClientRect().left - row.getBoundingClientRect().left + row.scrollLeft;
    row.scrollTo({ left: off - (row.clientWidth - cur.offsetWidth) / 2, behavior: smooth && !reducedMotion() ? 'smooth' : 'auto' });
    row._edges();
  };
  /* The selected-tab outline is one element that glides and resizes between tabs, taking on each area's colour */
  /* The selected-tab outline: when a different tab becomes active (or on first view) it moves there and
     traces itself in, from the bottom curves up both sides to meet across the top. Resizes just follow. */
  const placeIndicator = (nav) => {
    const ind = nav.querySelector('.mtab-ind'), tab = nav.querySelector('.mtab[aria-current]');
    if (!ind || !tab) return;
    const fresh = ind._tab !== tab, from = ind._tab;
    ind._tab = tab;
    /* Moving from another tab: the outline glides across, then its top bar forms. First view: it traces itself in. */
    const glide = fresh && from && from.isConnected && !reducedMotion();
    if (glide) {
      ind.classList.remove('still', 'draw', 'glide'); void ind.offsetWidth;
      const ts = getComputedStyle(tab);
      ind.style.setProperty('--edge', ts.getPropertyValue('--edge'));
      ind.style.setProperty('--edge2', ts.getPropertyValue('--edge2'));
      ind.style.width = `${tab.offsetWidth}px`;
      ind.style.height = `${tab.offsetHeight}px`;
      ind.style.transform = `translate(${tab.offsetLeft}px, ${tab.offsetTop}px)`;
      ind.classList.add('glide');
      ind._gliding = performance.now() + 700;
      return;
    }
    /* A resize while it is still travelling only retargets it; snapping would cut the glide short */
    const moving = !fresh && performance.now() < (ind._gliding || 0);
    if (!moving) ind.classList.add('still');
    const ts = getComputedStyle(tab);
    ind.style.setProperty('--edge', ts.getPropertyValue('--edge'));
    ind.style.setProperty('--edge2', ts.getPropertyValue('--edge2'));
    ind.style.width = `${tab.offsetWidth}px`;
    ind.style.height = `${tab.offsetHeight}px`;
    ind.style.transform = `translate(${tab.offsetLeft}px, ${tab.offsetTop}px)`;
    if (moving) return;
    void ind.offsetWidth;
    ind.classList.remove('still');
    if (fresh && !reducedMotion()) { ind.classList.remove('draw', 'glide'); void ind.offsetWidth; ind.classList.add('draw'); }
  };
  /* Point the (kept) tab bar at the current module; animate says whether things glide or snap */
  function syncTabs(nav, cur, animate) {
    nav.querySelectorAll('.mtab').forEach((t, i) => {
      const a = areas[i], here = a.id === cur.track;
      t.setAttribute('href', `#/m/${here ? cur.id : a.modules[0].id}`);
      if (here) t.setAttribute('aria-current', 'true'); else t.removeAttribute('aria-current');
    });
    const sweep = animate && !reducedMotion();
    const full = nav.querySelector(':scope > .msubtabs');
    const pin = nav.querySelector('.mpin'), pinChips = pin.querySelector('.mpin-chips');
    [full, pinChips].forEach((sub) => {
      if (sub.dataset.area !== cur.track) {
        sub.dataset.area = cur.track;
        sub.innerHTML = subTabsHTML(cur, !sweep);
        sub.scrollLeft = 0;
        /* New area: its chips fade up, then the current one fills */
        if (sweep) {
          sub.classList.remove('swap'); void sub.offsetWidth; sub.classList.add('swap');
          setTimeout(() => { if (sub.isConnected) markSubTab(sub, cur); }, 220);
        }
      } else markSubTab(sub, cur);
    });
    pin.querySelector('.mpin-areabtn b').textContent = areaById[cur.track].label;
    pin.querySelectorAll('.mpin-menu a').forEach((a) => {
      const here = a.dataset.area === cur.track;
      a.setAttribute('href', `#/m/${here ? cur.id : areaById[a.dataset.area].modules[0].id}`);
      if (here) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current');
    });
    sizeBorders();
    /* A tab that just became selected drops its hover border; the one left behind can draw again */
    nav.querySelectorAll('.mtab').forEach(animateBorder);
    const rows = [nav.querySelector('.mtabs-areas'), full];
    if (!nav._bound) {
      nav._bound = true;
      [...rows, pinChips].forEach(bindTabRow);
      /* Web fonts or a new width can change tab sizes: follow without animating */
      if ('ResizeObserver' in window) new ResizeObserver(() => { placeIndicator(nav); rows.forEach((r) => r._edges()); }).observe(nav);
      bindPin(nav, full, pin, pinChips);
    }
    placeIndicator(nav);
    rows.forEach((r) => centreTab(r, animate));
    if (pin.classList.contains('on')) centreTab(pinChips, animate);
  }

  /* Pinned bar: once the module chips scroll up under the header, a slim copy (area pill + module chips)
     slides in below it; the area pill opens a small menu for switching area */
  function bindPin(nav, full, pin, pinChips) {
    const btn = pin.querySelector('.mpin-areabtn'), menu = pin.querySelector('.mpin-menu');
    const setMenu = (open) => { menu.hidden = !open; btn.setAttribute('aria-expanded', String(open)); };
    btn.addEventListener('click', () => setMenu(menu.hidden));
    menu.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
    pin.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !menu.hidden) { setMenu(false); btn.focus(); } });
    pin.addEventListener('focusout', (e) => { if (!pin.querySelector('.mpin-area').contains(e.relatedTarget)) setMenu(false); });
    pin._closeMenu = () => setMenu(false);
    if (!('IntersectionObserver' in window)) return;
    const top = () => document.querySelector('.site-header').offsetHeight;
    let io;
    const watch = () => {
      if (io) io.disconnect();
      io = new IntersectionObserver(([en]) => {
        const show = !en.isIntersecting && en.boundingClientRect.top < top();
        if (show === pin.classList.contains('on')) return;
        pin.classList.toggle('on', show);
        pin.inert = !show;
        if (show) centreTab(pinChips, false); else setMenu(false);
      }, { rootMargin: `-${top()}px 0px 0px 0px` });
      io.observe(full);
    };
    watch();
    window.addEventListener('resize', () => { if (nav.isConnected) watch(); });
  }
  /* A click anywhere else closes an open area menu */
  document.addEventListener('click', (e) => {
    const pin = document.querySelector('.mpin');
    if (pin && pin._closeMenu && !e.target.closest('.mpin-area')) pin._closeMenu();
  });

  /* A module's features as a list: icon, title, description and an "open" mark. Used on module pages
     and for the featured workflow on the home page. */
  /* A module's own process, when content.json gives one (flow: { label, steps, branch? }): the guides' stepper, with each
     step's icon in its circle and its number beside the title. A branch ends it with the options the last step leads to
     (Housing: an enclosure holds a single animal, a batch or a group), joined to it by a bracket. */
  const moduleFlowHTML = (fl) => `
    <div class="mflow">
      <h2 class="mflow-label">${esc(fl.label)}</h2>
      <ol class="gflow">${fl.steps.map((s, i) => `
        <li><span class="ic" aria-hidden="true">${icon(s.icon)}</span><h3><span class="n">${String(i + 1).padStart(2, '0')}</span>${esc(s.title)}</h3><p>${esc(s.desc)}</p></li>`).join('')}
        ${fl.branch ? `
        <li class="mflow-branch"><h3><span class="n">${String(fl.steps.length + 1).padStart(2, '0')}</span>${esc(fl.branch.title)}</h3>
          <ul>${fl.branch.items.map((x) => `<li><span class="ic" aria-hidden="true">${icon(x.icon)}</span>${esc(x.title)}</li>`).join('')}</ul>
        </li>` : ''}
      </ol>
    </div>`;
  /* more: on module pages with a full guide, a last card that leads into it (a link, not a feature) */
  const featureListHTML = (m, hasShots, more) => `
    <ol class="mfeats" aria-label="${esc(t('mod.features'))}">
      ${m.features.map((f, i) => `
        <li class="mfeat-row">
          <button class="mfeat" type="button" data-i="${i}" aria-pressed="false">
            <span class="n" aria-hidden="true">${icon(f.icon)}</span>
            <span class="t"><b>${esc(tidyTitle(f.title))}</b><small>${esc(tidy(f.desc))}</small></span>
            ${hasShots ? `<span class="mfeat-open" aria-hidden="true">${EXPAND_SVG}</span>` : ''}
          </button>
          <svg class="drawn-border" aria-hidden="true"></svg>
        </li>`).join('')}
      ${more ? `
        <li class="mfeat-row mfeat-more">
          <a class="mfeat mfeat-link" href="#/guide/${m.id}">
            <span class="n" aria-hidden="true">${icon('compass')}</span>
            <span class="t"><b>${esc(t('guide.more'))}</b><small>${esc(t('guide.moreNote'))}</small></span>
            <span class="mfeat-open" aria-hidden="true">${ARROW}</span>
          </a>
          <svg class="drawn-border" aria-hidden="true"></svg>
        </li>` : ''}
    </ol>`;

  /* Home page featured workflow: its feature rows open the same window (desktop) or sheet (phones)
     as a module page, without changing the address */
  function bindSpotFeatures(root, m) {
    const feats = [...root.querySelectorAll('.mfeat:not(.mfeat-link)')];
    const mark = (i) => feats.forEach((b, j) => { b.setAttribute('aria-pressed', String(i === j)); b.parentElement.classList.toggle('on', i === j); });
    const originOf = (i) => { const r = (feats[i].querySelector('.mfeat-open') || feats[i]).getBoundingClientRect(); return { x: r.left + r.width / 2, y: r.top + r.height / 2 }; };
    const open = (i) => (narrow() ? openFeatureSheet : openFeatureWindow)(m, i, {
      origin: originOf(i),
      step: (j) => mark(j),
      close: (j) => feats[j].focus({ preventScroll: true })
    });
    feats.forEach((b, i) => {
      b.addEventListener('click', () => { mark(i); open(i); });
      b.addEventListener('keydown', (e) => {
        if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;
        e.preventDefault();
        const n = (i + (e.key === 'ArrowDown' ? 1 : -1) + feats.length) % feats.length;
        feats[n].focus(); mark(n);
      });
    });
    mark(0);
  }

  function renderModule(id, featureIndex, openFeature = false) {
    const m = byId[id];
    if (!m || !visible.includes(m)) { location.hash = '#/'; return; }
    const area = areaById[m.track];
    const tint = AREA_TINT[m.track];
    /* Previous / next run through every module in order, crossing into the next area at the end of one */
    const k = allModules.indexOf(m);
    const prev = allModules[k - 1], next = allModules[k + 1];
    const pagerLink = (x, dir) => x ? pagerHTML(dir, {
      href: `#/m/${x.id}`, title: x.title, ...photoOf(x),
      label: `${dir === 'prev' ? t('pager.prev') : t('pager.next')}${x.track !== m.track ? ` · ${esc(areaById[x.track].label)}` : ''}`
    }) : '<span></span>';
    const hasShots = m.features.some((f) => f.shot) || m.shots.length > 0;

    const html = `
      <section class="mpage tint-${tint}">
        <div class="container">
          ${moduleTabsHTML(m)}
          <span class="mpanel-area">${icon(areaGlyphOf(m, area))}${esc(area.label)} · ${numberOf[m.id]}</span>
          <div class="mpanel-inner${hasShots ? '' : ' no-stage'}">
            <div class="mpanel-info">
              <h1 class="mpanel-title"><span class="mpanel-icon"><img src="assets/icons/${iconOf(m)}_icon.svg" alt=""></span>${esc(m.title)}</h1>
              ${LANG !== 'en' && m.enTitle !== m.title ? `<p class="mpanel-inapp">${esc(t('lang.inApp', { x: m.enTitle }))}</p>` : ''}
              <p class="mpanel-intro">${esc(m.intro)}</p>
              ${m.flow ? moduleFlowHTML(m.flow) : ''}
              ${featureListHTML(m, hasShots, !!GUIDES[m.id])}
              <p class="mpanel-hint">${esc(hasShots ? (canHover() ? t('mod.hintClick') : t('mod.hintTap')) : t('mod.soon'))}</p>
            </div>
            ${hasShots ? `<div class="mpanel-stage"><div class="mpanel-device"></div><p class="cap"></p><p class="zoom-hint">${esc(t('mod.zoom'))}</p></div>` : ''}
          </div>
          <nav class="mpager" aria-label="${esc(t('pager.moduleNav'))}">${pagerLink(prev, 'prev')}${pagerLink(next, 'next')}</nav>
        </div>
      </section>`;

    /* Coming from another module page: keep the live page and its tab bar, so the selected tab glides
       to its new place and the area colours blend; only the content under the tabs is replaced */
    const page = app.querySelector('.mpage');
    const kept = page && page.querySelector('.mtabs');
    if (kept) {
      const tpl = document.createElement('template');
      tpl.innerHTML = html;
      const next = tpl.content.querySelector('.mpage');
      const box = page.querySelector(':scope > .container');
      const newArea = page.className.replace(/\s*area-swap/, '') !== next.className;
      page.className = next.className;
      /* New area: the background gradient swings round to the new colours (restarted on every change) */
      if (newArea && !reducedMotion()) { void page.offsetWidth; page.classList.add('area-swap'); }
      [...box.children].forEach((c) => { if (c !== kept) c.remove(); });
      [...next.querySelector(':scope > .container').children].forEach((c) => {
        if (c.classList.contains('mtabs')) return;
        if (!reducedMotion()) c.classList.add('swap-in');
        box.append(c);
      });
      syncTabs(kept, m, true);
    } else {
      app.innerHTML = html;
      syncTabs(app.querySelector('.mtabs'), m, false);
    }
    bindFeatures(app.querySelector('.mpage'), m, featureIndex || 0, openFeature);
    document.title = `${m.title} · ${t('brand.title')}`;
  }

  /* ---------- Search ---------- */
  const index = visible.flatMap((m) => [
    { m, i: 0, title: m.title, text: m.intro, en: `${m.enTitle} ${m.raw}`, kind: 'Module' },
    ...m.features.map((f, i) => ({ m, i, title: f.title, text: f.desc, en: f.enTitle, kind: m.title }))
  ]);
  /* One search box: an input, its results list and a clear button. `outside` is the element a click must
     fall outside of to close the list (the hero), or null when the list always shows (the header panel). */
  function searchBox(q, box, clear, outside) {
    let active = -1;
    const hl = (s, term) => esc(s).replace(new RegExp(`(${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'ig'), '<mark>$1</mark>');
    const close = () => { if (outside) box.classList.remove('show'); q.setAttribute('aria-expanded', 'false'); active = -1; };
    const run = () => {
      const term = q.value.trim().toLowerCase();
      clear.classList.toggle('show', !!term);
      if (term.length < 2) {
        if (!outside) box.innerHTML = `<div class="empty">${esc(t('search.short'))}</div>`;
        return close();
      }
      const hits = index
        .map((r) => {
          /* The English names from the app also match, so a term seen on screen always finds its feature */
          const tl = r.title.toLowerCase(), x = r.text.toLowerCase(), en = (r.en || '').toLowerCase();
          const score = tl.startsWith(term) ? 3 : tl.includes(term) ? 2 : x.includes(term) || en.includes(term) ? 1 : 0;
          return { ...r, score: score + (r.kind === 'Module' && score ? .5 : 0) };
        })
        .filter((r) => r.score)
        .sort((a, b) => b.score - a.score)
        .slice(0, 8);
      box.innerHTML = (hits.length ? `<div class="sr-head">${esc(t('search.top'))}</div>` : '') + (hits.length
        ? hits.map((r) => `<a role="option" href="#/m/${r.m.id}/${r.i}"><div class="r-title">${hl(r.title, term)}</div><div class="r-meta">${esc(r.kind === 'Module' ? areaById[r.m.track].label : r.kind)}</div></a>`).join('')
        : `<div class="empty">${esc(t('search.none', { q: q.value }))}</div>`);
      box.classList.add('show'); q.setAttribute('aria-expanded', 'true'); active = -1;
    };
    q.addEventListener('input', run);
    q.addEventListener('focus', run);
    q.addEventListener('keydown', (e) => {
      const items = [...box.querySelectorAll('a')];
      if (e.key === 'Escape' && outside) return close();
      if (!items.length) return;
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        active = (active + (e.key === 'ArrowDown' ? 1 : -1) + items.length) % items.length;
        items.forEach((a, i) => a.classList.toggle('active', i === active));
      }
      if (e.key === 'Enter') { e.preventDefault(); (items[active] || items[0]).click(); }
    });
    clear.addEventListener('click', () => { q.value = ''; run(); q.focus(); });
    if (outside) document.addEventListener('click', (e) => { if (!e.target.closest(outside)) close(); });
    return run;
  }
  function bindSearch() {
    const q = document.getElementById('q');
    searchBox(q, document.getElementById('q-results'), app.querySelector('.search-clear'), '.hero-search');
    rotatePlaceholder(q);
  }

  /* Header search: the search icon in the menu bar opens a search panel on any page (also "/" or Ctrl/Cmd + K) */
  const qs = document.createElement('div');
  qs.className = 'qs';
  qs.hidden = true;
  qs.innerHTML = `
    <div class="qs-backdrop" data-close></div>
    <div class="qs-panel" role="dialog" aria-modal="true" aria-label="${esc(t('nav.search'))}">
      <div class="search-field">
        ${SEARCH_SVG}
        <label class="sr-only" for="qs-input">${esc(t('search.label'))}</label>
        <input id="qs-input" type="search" autocomplete="off" placeholder="" aria-controls="qs-results" aria-expanded="false">
        ${cueHTML()}
        <button class="search-clear" type="button" aria-label="${esc(t('search.clear'))}">${CLOSE_SVG}</button>
        <button class="qs-close" type="button" data-close>Esc</button>
      </div>
      <div class="search-results show" id="qs-results" role="listbox"></div>
    </div>`;
  document.body.append(qs);
  const qsInput = qs.querySelector('#qs-input');
  const qsRun = searchBox(qsInput, qs.querySelector('#qs-results'), qs.querySelector('.search-clear'), null);
  rotatePlaceholder(qsInput, { keepOnFocus: true });
  const searchBtn = document.querySelector('.nav-search');
  let qsReturn = null;
  const openSearch = () => {
    if (!qs.hidden) return;
    closeNav();
    qsReturn = document.activeElement;
    qs.hidden = false;
    document.body.classList.add('qs-open');
    requestAnimationFrame(() => qs.classList.add('in'));
    qsInput.value = ''; qsRun(); qsInput.dispatchEvent(new Event('input'));
    qsInput.focus();
  };
  const closeSearch = (restore = true) => {
    if (qs.hidden) return;
    qs.classList.remove('in');
    qs.hidden = true;
    document.body.classList.remove('qs-open');
    if (restore && qsReturn && qsReturn.focus) qsReturn.focus({ preventScroll: true });
  };
  searchBtn.addEventListener('click', openSearch);
  qs.addEventListener('click', (e) => {
    if (e.target.closest('[data-close]')) closeSearch();
    else if (e.target.closest('#qs-results a')) closeSearch(false);
  });
  document.addEventListener('keydown', (e) => {
    const typing = e.target.closest && e.target.closest('input, textarea, [contenteditable]');
    if (e.key === 'Escape' && !qs.hidden) { e.preventDefault(); closeSearch(); }
    else if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || (e.key === '/' && !typing)) {
      if (document.querySelector('.fwin, .gallery')) return;
      e.preventDefault(); openSearch();
    }
  });

  /* The banner leaf: once its rise-and-sway has played, it stays put as a plain element (its end state) */
  document.addEventListener('animationend', (e) => { if (e.animationName === 'leafRiseShake') e.target.classList.add('settled'); });
  /* Hero parallax: the photo drifts slower than the page, content rides over it */
  let parallaxOff = null;
  function bindParallax() {
    if (parallaxOff) parallaxOff();
    const hero = app.querySelector('.hero');
    const bg = hero && hero.querySelector('.hero-slides');
    const inner = hero && hero.querySelector('.hero-inner');
    if (!bg) return;
    /* Module guide banners rotate through their own photos, from the start the page was given */
    const own = hero.dataset.banners === 'guide';
    const stopBanners = own ? rotateBanners(bg, GUIDE_ORDER, +hero.dataset.offset || 0) : rotateBanners(bg);
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) { parallaxOff = () => { stopBanners(); parallaxOff = null; }; return; }
    let ticking = false;
    const cta = app.querySelector('.cta');
    const layers = cta ? [...cta.querySelectorAll('[data-depth]')] : [];
    const update = () => {
      ticking = false;
      const h = hero.offsetHeight;
      const y = Math.min(Math.max(window.scrollY, 0), h);
      bg.style.transform = `translate3d(0, ${(y * 0.45).toFixed(1)}px, 0)`;
      inner.style.opacity = String(Math.max(0, 1 - y / (h * 1.3)).toFixed(3));
      inner.style.transform = `translate3d(0, ${(y * 0.12).toFixed(1)}px, 0)`;
      /* "Stuck on a task?": each line drifts at its own depth as the band crosses the screen */
      if (cta) {
        const r = cta.getBoundingClientRect(), vh = window.innerHeight;
        if (r.bottom > 0 && r.top < vh) {
          const p = (r.top + r.height / 2 - vh / 2) / vh;
          layers.forEach((el) => { el.style.transform = `translate3d(0, ${(p * el.dataset.depth * 60).toFixed(1)}px, 0)`; });
        }
      }
    };
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    parallaxOff = () => { stopBanners(); window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); parallaxOff = null; };
    update();
  }
  /* At each turn (next photo loaded first): the current photo blurs while a wash of the next photo's key colour
     rises over it; the next photo then appears through the wash, still soft, and sharpens as the wash clears.
     Returns a stop function. */
  function rotateBanners(box, list = BANNERS, offset = 0) {
    const at = () => (bannerSlot() + offset) % list.length;
    let shown = at(), timer = 0;
    const schedule = () => {
      const wait = BANNER_EVERY - ((Date.now() - bannerStart) % BANNER_EVERY);
      timer = setTimeout(turn, wait + 30);
    };
    const turn = () => {
      if (!box.isConnected) return;
      schedule();
      const i = at();
      if (document.hidden || i === shown) return;
      const b = list[i];
      const img = new Image();
      img.onload = () => {
        if (!box.isConnected) return;
        shown = i;
        box.querySelectorAll('.hero-wash').forEach((w) => w.remove());
        const old = box.querySelectorAll('.hero-bg');
        const el = document.createElement('div');
        el.className = 'hero-bg morph';
        el.style.cssText = `background-image:url('${bannerSrc(b)}');--x:${b.x};--y:${b.y}`;
        const wash = document.createElement('div');
        wash.className = 'hero-wash';
        wash.style.setProperty('--wash', b.c);
        box.append(el, wash);
        old.forEach((o) => { o.classList.remove('enter', 'morph'); o.classList.add('blur-out'); });
        el.addEventListener('animationend', () => { old.forEach((o) => o.remove()); wash.remove(); el.classList.remove('morph'); }, { once: true });
      };
      img.src = bannerSrc(b);
    };
    /* Back on the home page with a photo not yet loaded: it fades in once it arrives, rather than popping in */
    const first = box.querySelector('.hero-bg'), probe = new Image();
    probe.src = bannerSrc(list[shown]);
    if (first && !probe.complete) {
      first.style.opacity = '0';
      probe.onload = () => { first.style.opacity = ''; first.classList.add('enter'); first.addEventListener('animationend', () => first.classList.remove('enter'), { once: true }); };
    }
    schedule();
    return () => clearTimeout(timer);
  }

  /* Rotating placeholder: every visible module, each followed by one of its tasks */
  /* keepOnFocus: the cue keeps rotating while the (empty) box has focus, as in the header search panel */
  function rotatePlaceholder(q, { keepOnFocus = false } = {}) {
    const field = q.closest('.search-field');
    clearInterval(field._phTimer);
    const rot = field.querySelector('.ph-rot');
    const GENERIC = /filter|search|edit|delet|listing|overview|status|view/i;
    const names = visible.flatMap((m) => {
      const task = m.features.find((f) => !GENERIC.test(f.title) && /\s/.test(f.title.trim()) && f.title.toLowerCase() !== m.title.toLowerCase());
      return task ? [m.title, tidyTitle(task.title)] : [m.title];
    });
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    let i = 0;
    rot.textContent = names[0];
    const sync = () => field.classList.toggle('ph-hidden', !!q.value || (!keepOnFocus && document.activeElement === q));
    ['input', 'focus', 'blur'].forEach((ev) => q.addEventListener(ev, sync));
    sync();
    field._phTimer = setInterval(() => {
      if (!document.body.contains(rot)) return clearInterval(field._phTimer);
      if (field.classList.contains('ph-hidden')) return;
      i = (i + 1) % names.length;
      if (reduced) { rot.textContent = names[i]; return; }
      rot.classList.add('out');
      setTimeout(() => {
        rot.textContent = names[i];
        rot.classList.remove('out');
        rot.classList.add('enter');
        void rot.offsetWidth;
        rot.classList.remove('enter');
      }, 260);
    }, 2400);
  }

  /* ---------- Screenshot gallery (phones only) ----------
     Tap a device screen to open every screen of that module full-screen:
     swipe between screens, pinch or double-tap to zoom, drag to pan, swipe down or ✕ to close. */
  const ZOOM_MAX = 4, ZOOM_TAP = 2.5;
  /* ---------- Feature window (desktop and laptop) ----------
     One feature at a time: its screen beside its title and description, with arrows either side
     stepping through the module's features. Left/right keys step, Esc or a click outside closes. */
  const EXPAND_SVG = '<svg width="16" height="16" viewBox="0 -960 960 960" fill="currentColor"><path d="M176.16-140q-15.37 0-25.76-10.4-10.4-10.39-10.4-25.76V-410q0-12.75 8.63-21.38 8.63-8.62 21.38-8.62 12.76 0 21.37 8.62Q200-422.75 200-410v168.23L718.23-760H550q-12.75 0-21.38-8.63-8.62-8.63-8.62-21.38 0-12.76 8.62-21.37Q537.25-820 550-820h233.84q15.37 0 25.76 10.4 10.4 10.39 10.4 25.76V-550q0 12.75-8.63 21.38-8.63 8.62-21.38 8.62-12.76 0-21.37-8.62Q760-537.25 760-550v-168.23L241.77-200H410q12.75 0 21.38 8.63 8.62 8.63 8.62 21.38 0 12.76-8.62 21.37Q422.75-140 410-140H176.16Z"/></svg>';
  const CHEV_L = '<svg width="24" height="24" viewBox="0 -960 960 960" fill="currentColor"><path d="m418.15-480 162.93 162.92q8.3 8.31 8.5 20.89.19 12.57-8.5 21.27-8.7 8.69-21.08 8.69-12.38 0-21.08-8.69L359.15-454.69q-5.61-5.62-7.92-11.85-2.31-6.23-2.31-13.46t2.31-13.46q2.31-6.23 7.92-11.85l179.77-179.77q8.31-8.3 20.89-8.5 12.57-.19 21.27 8.5 8.69 8.7 8.69 21.08 0 12.38-8.69 21.08L418.15-480Z"/></svg>';
  const CHEV_R = '<svg width="24" height="24" viewBox="0 -960 960 960" fill="currentColor"><path d="M517.85-480 354.92-642.92q-8.3-8.31-8.5-20.89-.19-12.57 8.5-21.27 8.7-8.69 21.08-8.69 12.38 0 21.08 8.69l179.77 179.77q5.61 5.62 7.92 11.85 2.31 6.23 2.31 13.46t-2.31 13.46q-2.31 6.23-7.92 11.85L397.08-274.92q-8.31 8.3-20.89 8.5-12.57.19-21.27-8.5-8.69-8.7-8.69-21.08 0-12.38 8.69-21.08L517.85-480Z"/></svg>';
  /* The LSET Foundation banner's leaf flourish (its components/icons/Leaves), under the banner text */
  const LEAVES_SVG = '<svg class="hero-leaf" width="114" height="60" viewBox="0 0 114 60" fill="none" aria-hidden="true" focusable="false"><path d="M2.87042 41.151C9.84427 42.2953 16.9777 42.0151 23.8403 40.3272C21.2324 39.0356 18.7205 37.5585 16.3241 35.9073C15.5719 35.3815 14.8724 32.6546 15.63 33.1841C19.0249 35.6013 22.6176 37.7278 26.3701 39.5409C28.3959 38.9382 31.2637 38.1164 33.3629 37.3151C34.8384 36.7518 36.2972 36.1518 37.7394 35.5152C39.7426 30.0413 46.0782 13.7805 48.733 19.3843C50.8472 23.8472 45.0164 30.2708 40.8713 34.0752C43.7887 32.6746 46.6426 31.1434 49.4414 29.5135L49.4269 29.5086L49.4898 29.4851C49.7488 29.3342 50.0073 29.1826 50.2654 29.0302C52.1283 23.9011 58.6661 6.86762 61.374 12.5837C63.3668 16.7903 58.3008 22.7393 54.2411 26.5946C57.0266 24.8318 59.7607 22.9874 62.4515 21.0943C63.0903 20.6449 63.727 20.1926 64.3617 19.7374C64.5324 15.8793 65.3768 3.48095 69.1102 6.60833C72.155 9.15894 68.69 15.0031 66.2686 18.359C68.4118 16.7977 70.5362 15.2106 72.6525 13.6127C73.6032 12.895 74.4153 12.0103 75.0492 11.0019C78.3819 5.69948 85.7422 -4.73149 88.0801 2.43099C90.306 9.25017 81.5286 12.1511 76.569 13.227C75.5994 13.4393 74.6877 13.86 73.8969 14.4599C71.5872 16.2052 69.2672 17.9387 66.9259 19.642C71.0431 18.2774 77.8777 16.6402 80.1336 19.8468C82.9239 23.813 69.2448 21.7951 64.9412 21.075C61.6655 23.4188 58.3402 25.691 54.9373 27.8442C60.1099 26.5855 67.2794 25.7311 68.836 30.0874C70.8894 35.8341 56.4643 31.7461 51.2545 30.1055C51.0959 30.1998 50.9386 30.2964 50.7795 30.3902C47.8626 32.1102 44.8733 33.7266 41.8171 35.2033C47.014 33.8879 54.5605 32.8524 56.1623 37.3356C58.3436 43.4403 41.9297 38.4469 37.721 37.0786C34.896 38.2982 31.1569 39.5991 28.228 40.5311C34.6511 43.3832 41.4349 45.3413 48.3899 46.3506C49.954 46.5701 51.5212 46.7493 53.0915 46.8884C57.4892 43.0626 70.8905 31.884 70.5086 38.073C70.2044 43.0021 61.9963 45.8107 56.5293 47.14C59.7603 47.3227 62.9989 47.3602 66.2368 47.2848L66.2265 47.2734L66.2929 47.2832C66.5925 47.2762 66.8922 47.2683 67.1918 47.2595C71.3001 43.668 85.2515 31.9104 84.862 38.2235C84.5754 42.8694 77.2661 45.6318 71.8493 47.0469C75.1398 46.8487 78.4246 46.5541 81.6951 46.196C82.4715 46.111 83.2475 46.0225 84.0231 45.9304C86.036 42.6347 92.7633 32.186 94.522 36.7276C95.9563 40.4315 90.0996 43.8754 86.3586 45.6445C88.9893 45.3124 91.6168 44.9548 94.2409 44.5716C95.42 44.4024 96.5584 44.02 97.6005 43.4431C103.08 40.4097 114.562 34.8308 113.15 42.2317C111.806 49.2778 102.719 47.5788 97.8565 46.1255C96.905 45.8432 95.9035 45.7711 94.9214 45.9145C92.0559 46.3272 89.187 46.7175 86.3145 47.0854C90.5788 47.8789 97.3542 49.7463 97.7807 53.6437C98.3084 58.4642 87.3052 50.0907 83.8845 47.3816C79.8841 47.8519 75.8751 48.2355 71.8553 48.4774C76.9926 49.8735 83.6832 52.588 82.9423 57.1543C81.9648 63.178 71.308 52.6316 67.5385 48.6788C67.354 48.6848 67.1697 48.6934 66.9851 48.6987C63.6002 48.796 60.2019 48.7677 56.8126 48.5847C61.9985 49.9428 69.1066 52.6808 68.344 57.3801C67.3056 63.779 55.3447 51.4793 52.3201 48.2484C46.0281 47.6768 39.8193 46.4069 33.8081 44.4623C31.0847 43.5563 28.4158 42.4941 25.8146 41.2809C23.7922 41.8341 21.7493 42.3166 19.6824 42.7041C13.2712 44.0086 6.70964 44.4139 0.186651 43.9084C-0.725917 43.8113 1.95691 41.0095 2.87042 41.151Z" fill="currentColor"/></svg>';
  /* A scrolling screen opens scrolled to its feature (data-at, in image pixels); the cue fades once the reader scrolls */
  function bindScrollScreen(root) {
    root.querySelectorAll('.screen-body').forEach((body) => {
      const img = body.querySelector('img');
      const screen = body.parentElement, cue = screen.querySelector('.screen-cue');
      let placed = false;
      const atEnd = () => body.scrollTop + body.clientHeight >= body.scrollHeight - 4;
      const place = () => {
        body.scrollTop = (+body.dataset.at || 0) * (img.clientWidth / (img.naturalWidth || 1));
        screen.classList.toggle('at-end', atEnd());
        requestAnimationFrame(() => { placed = true; });
      };
      if (img.complete && img.naturalWidth) place(); else img.addEventListener('load', place, { once: true });
      body.addEventListener('scroll', () => {
        screen.classList.toggle('at-end', atEnd());
        if (placed && cue) cue.classList.add('gone');
      }, { passive: true });
      /* data-auto: the screen scrolls itself slowly down and back up, as on the deck's page; scrolling it by hand
         pauses that for a few seconds. It stops once the screen leaves the page */
      if ('auto' in body.dataset && !reducedMotion()) {
        let pos = 0, dir = 1, last = performance.now(), hold = 0;
        const pause = () => { hold = performance.now() + 2600; };
        ['wheel', 'pointerdown', 'touchstart', 'keydown'].forEach((ev) => body.addEventListener(ev, pause, { passive: true }));
        const tick = (now) => {
          if (!body.isConnected) return;
          const dt = Math.min(0.05, (now - last) / 1000); last = now;
          const max = body.scrollHeight - body.clientHeight;
          if (now < hold) pos = body.scrollTop;
          else if (max > 0) {
            pos += dir * 34 * dt;
            if (pos >= max) { pos = max; dir = -1; } else if (pos <= 0) { pos = 0; dir = 1; }
            body.scrollTop = pos;
          }
          requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    });
  }
  let closeFeatureWindow = null;
  /* chain: { sets, at } on guide pages, where each card is its own set: stepping past a set's last (or first)
     screen carries on into the next (or previous) card's screens, in the same window */
  function openFeatureWindow(m, start, { step, close, origin, chain } = {}) {
    if (closeFeatureWindow) closeFeatureWindow(true);
    const area = areaById[m.track];
    let n = m.features.length;
    const shotOf = (i) => {
      const f = m.features[i];
      const src = f.shot || (m.shots[i] && m.shots[i].src) || (m.shots[0] && m.shots[0].src);
      return src ? shotFor(m, src) : null;
    };
    const w = document.createElement('div');
    w.className = `fwin tint-${AREA_TINT[m.track]}`;
    w.dataset.module = m.module || m.id;
    w.innerHTML = `
      <div class="fwin-backdrop" data-close></div>
      <button class="fwin-arrow prev" type="button" aria-label="${esc(t('win.prev'))}">${CHEV_L}</button>
      <div class="fwin-card" role="dialog" aria-modal="true" aria-labelledby="fwin-title">
        <button class="fwin-close" type="button" data-close aria-label="${esc(t('win.close'))}">${CLOSE_SVG}</button>
        <div class="fwin-stage"><div class="fwin-device"></div></div>
        <div class="fwin-info">
          <span class="mpanel-area">${icon(areaGlyphOf(m, area))}${esc(area.label)} · <span class="fwin-set">${esc(m.title)}</span></span>
          <div class="fwin-text">
            <div class="fwin-head"><span class="fwin-ic" aria-hidden="true"></span><p class="fwin-count" aria-live="polite"></p></div>
            <h2 class="fwin-title" id="fwin-title"></h2><p class="fwin-desc"></p>
          </div>
          <div class="fwin-notes"></div>
          <div class="fwin-flow"></div>
          <div class="fwin-dots"></div>
        </div>
      </div>
      <button class="fwin-arrow next" type="button" aria-label="${esc(t('win.next'))}">${CHEV_R}</button>`;
    document.body.append(w);
    document.body.classList.add('fwin-open');
    const dev = w.querySelector('.fwin-device'), text = w.querySelector('.fwin-text');
    const prev = w.querySelector('.fwin-arrow.prev'), next = w.querySelector('.fwin-arrow.next');
    const dotBox = w.querySelector('.fwin-dots');
    let dots = [], animals = [];
    /* (Re)build what belongs to the current set: its title, dots and animal wash */
    /* A chained window counts and dots every screen of every card in the chain, so a run of one-screen cards reads "3 of 5" */
    const before = (k) => (chain ? chain.sets.slice(0, k).reduce((a, x) => a + x.features.length, 0) : 0);
    const total = chain ? before(chain.sets.length) : 0;
    const useSet = () => {
      n = m.features.length;
      w.querySelector('.fwin-set').textContent = m.title;
      if (!chain || !dots.length) {
        dotBox.innerHTML = (chain ? chain.sets : [m]).map((x, k) => x.features.map((f, i) =>
          `<button type="button" data-k="${k}" data-i="${i}" aria-label="${esc(tidyTitle(f.title))}"></button>`).join('')).join('');
        dots = [...dotBox.children];
      }
      /* A guide card's own process (winFlow), the same for each of its screens, as the module pages' stepper.
         Only cards whose process is not already on the page behind (a module's own flow is shown there) */
      w.querySelector('.fwin-flow').innerHTML = m.winFlow ? moduleFlowHTML(m.winFlow) : '';
      /* A part's points (winNotes), such as what every row of the directory offers: a label, then one line each */
      const nt = m.winNotes;
      w.querySelector('.fwin-notes').innerHTML = nt ? `
        <p class="fwin-notes-label">${esc(nt.label)}</p>
        <ul>${nt.items.map((x) => `<li><span class="ic" aria-hidden="true">${x.icon === 'search' ? SEARCH_SVG : icon(x.icon)}</span><span><b>${esc(x.lead)}</b> ${esc(x.text)}</span></li>`).join('')}</ul>` : '';
      animals = animalsFor(m);
    };
    useSet();
    /* Move to another card of the chain (a dot on another card) */
    const toSet = (k, i = 0) => {
      if (!chain || k === chain.at) return;
      const dir = k > chain.at ? 1 : -1;
      chain.at = k; m = chain.sets[k]; useSet(); idx = -1;
      go(i, dir);
    };
    const hasSet = (d) => !!(chain && chain.sets[chain.at + d]);
    let idx = -1;
    const go = (i, dir = 0) => {
      /* Past either end: on into the neighbouring card's screens (guide pages), otherwise stop */
      if ((i < 0 || i >= n) && hasSet(i < 0 ? -1 : 1)) {
        chain.at += i < 0 ? -1 : 1;
        m = chain.sets[chain.at];
        useSet();
        idx = -1;
        i = i < 0 ? n - 1 : 0;
      }
      if (i < 0 || i >= n || i === idx) return;
      idx = i;
      const f = m.features[i], shot = shotOf(i);
      w.querySelector('.fwin-count').textContent = chain ? t('win.count', { i: before(chain.at) + i + 1, n: total }) : t('win.count', { i: i + 1, n });
      w.querySelector('.fwin-ic').innerHTML = icon(f.icon);
      w.querySelector('.fwin-title').textContent = tidyTitle(f.title);
      w.querySelector('.fwin-desc').textContent = f.keep ? f.desc : tidy(f.desc);
      /* The wash starts a little below the text, however long this feature's description is */
      setAnimal(w.querySelector('.fwin-info'), animals[i % animals.length], () => text.offsetTop + text.offsetHeight);
      dev.innerHTML = shot ? deviceHTML({ ...shot, lock: !!f.lock }) : `<p class="fwin-empty">${esc(t('win.soon'))}</p>`;
      bindScrollScreen(dev);
      /* The screen slides in from the side being moved to; the text fades up */
      [dev, text].forEach((el) => { el.classList.remove('in-l', 'in-r', 'in-up'); void el.offsetWidth; });
      dev.classList.add(dir > 0 ? 'in-r' : dir < 0 ? 'in-l' : 'in-up');
      text.classList.add('in-up');
      const had = document.activeElement;
      prev.disabled = i === 0 && !hasSet(-1); next.disabled = i === n - 1 && !hasSet(1);
      /* An arrow that just became disabled drops focus; hand it to the other arrow */
      if (had && had.disabled) (had === next ? prev : next).focus({ preventScroll: true });
      dots.forEach((d) => d.setAttribute('aria-current', String(+d.dataset.i === i && +d.dataset.k === (chain ? chain.at : 0))));
      [i - 1, i + 1].forEach((j) => { const s2 = j >= 0 && j < n && shotOf(j); if (s2) new Image().src = s2.src; });
      if (step) step(i);
    };
    const onKey = (e) => {
      /* A lens view open over the window takes the keys */
      if (document.querySelector('.gallery:not(.out)')) return;
      if (e.key === 'Escape') { e.preventDefault(); shut(); }
      /* In right-to-left reading, the next feature is to the left */
      else if (e.key === (RTL ? 'ArrowLeft' : 'ArrowRight')) { e.preventDefault(); go(idx + 1, 1); }
      else if (e.key === (RTL ? 'ArrowRight' : 'ArrowLeft')) { e.preventDefault(); go(idx - 1, -1); }
      else if (e.key === 'Tab') {
        /* Keep focus inside the window */
        const f = [...w.querySelectorAll('button:not([disabled])')];
        const a = f[0], z = f[f.length - 1];
        if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); }
        else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); }
      }
    };
    const shut = (instant) => {
      document.removeEventListener('keydown', onKey);
      document.body.classList.remove('fwin-open');
      closeFeatureWindow = null;
      sizeWatch.disconnect();
      if (instant || reducedMotion()) w.remove();
      else { w.classList.remove('in'); w.classList.add('out'); setTimeout(() => w.remove(), 460); }
      if (!instant && close) close(idx, chain ? chain.at : 0);
    };
    closeFeatureWindow = shut;
    document.addEventListener('keydown', onKey);
    prev.addEventListener('click', () => go(idx - 1, -1));
    next.addEventListener('click', () => go(idx + 1, 1));
    dotBox.addEventListener('click', (e) => {
      const d = e.target.closest('button');
      if (!d) return;
      const k = +d.dataset.k, i = +d.dataset.i;
      if (chain && k !== chain.at) toSet(k, i);
      else go(i, i > idx ? 1 : -1);
    });
    w.addEventListener('click', (e) => { if (e.target.closest('[data-close]')) shut(); });
    go(start);
    /* Radial opening: a circle grows from the clicked feature until it covers the whole card */
    const card = w.querySelector('.fwin-card');
    const cr0 = card.getBoundingClientRect();
    const o = origin || { x: cr0.left + cr0.width / 2, y: cr0.top + cr0.height / 2 };
    /* Place the circle without animating to it, so it really starts at the feature. Measured again whenever the
       card changes size (a web screen widens it, a tall one loads in), so the circle always covers it */
    const fitCircle = () => {
      const cr = card.getBoundingClientRect();
      const ox = o.x - cr.left, oy = o.y - cr.top;
      const r = Math.ceil(Math.max(Math.hypot(ox, oy), Math.hypot(cr.width - ox, oy), Math.hypot(ox, cr.height - oy), Math.hypot(cr.width - ox, cr.height - oy))) + 2;
      card.style.transition = 'none';
      card.style.setProperty('--ox', `${Math.round(ox)}px`);
      card.style.setProperty('--oy', `${Math.round(oy)}px`);
      card.style.setProperty('--r', `${r}px`);
      void card.offsetWidth;
      card.style.transition = '';
    };
    fitCircle();
    const sizeWatch = new ResizeObserver(() => { if (w.classList.contains('in')) fitCircle(); });
    sizeWatch.observe(card);
    requestAnimationFrame(() => w.classList.add('in'));
    w.querySelector('.fwin-close').focus({ preventScroll: true });
  }

  function gallerySlides(m) {
    const seen = new Map();
    const slides = [];
    m.features.forEach((f, i) => {
      const src = f.shot || (m.shots[i] && m.shots[i].src) || (m.shots[0] && m.shots[0].src);
      if (!src) return;
      if (!seen.has(src)) { seen.set(src, slides.length); slides.push({ src, title: tidyTitle(f.title), desc: tidy(f.desc), alt: shotFor(m, src).alt || f.title }); }
    });
    const featureToSlide = m.features.map((f, i) => seen.get(f.shot || (m.shots[i] && m.shots[i].src) || (m.shots[0] && m.shots[0].src)) ?? 0);
    return { slides, featureToSlide };
  }
  function bindGalleryTrigger(stage, m, currentFeature) {
    stage.addEventListener('click', (e) => {
      if (!narrow() || !e.target.closest('.device')) return;
      const { slides, featureToSlide } = gallerySlides(m);
      if (slides.length) openGallery(m, slides, featureToSlide[Math.max(0, currentFeature())] || 0, e.target.closest('.device'));
    });
  }

  /* Full-screen screen viewer. With opts.sheet it is the phone version of the feature window: one slide per
     feature with its icon and text, arrows as well as swipes, the area colours, and a radial opening. */
  function openGallery(m, slides, start, returnFocusTo, opts = {}) {
    const sheet = !!opts.sheet;
    const g = document.createElement('div');
    const lens = !!opts.lens;
    g.className = sheet ? `gallery sheet tint-${AREA_TINT[m.track]}` : `gallery${lens ? ' lens-view' : ''}`;
    g.setAttribute('role', 'dialog'); g.setAttribute('aria-modal', 'true'); g.setAttribute('aria-label', t('gal.label', { x: m.title }));
    g.innerHTML = `
      <div class="g-top">
        <span class="g-count" aria-live="polite"></span>
        <span class="g-title">${sheet ? `${esc(areaById[m.track].label)} · ` : ''}${esc(m.title)}</span>
        <button class="g-close" type="button" aria-label="${esc(t('gal.close'))}">${CLOSE_SVG}</button>
      </div>
      <div class="g-stage"><div class="g-track"><span class="g-frame"><img class="g-img" alt="" draggable="false"></span></div>${sheet ? lensHTML() : ''}</div>
      <div class="g-info"><div class="g-head"><span class="g-ic" aria-hidden="true"></span></div><b class="g-ft"></b><p class="g-fd"></p></div>
      ${sheet && m.winFlow ? `<div class="g-flow">${moduleFlowHTML(m.winFlow)}</div>` : ''}
      <div class="g-nav">
        <button class="g-arrow g-prev" type="button" aria-label="${esc(t('win.prev'))}">${CHEV_L}</button>
        <div class="g-dots">${slides.map((sl, i) => `<button type="button" aria-label="${esc(sl.title || t('gal.screen', { i: i + 1 }))}" data-i="${i}"></button>`).join('')}</div>
        <button class="g-arrow g-next" type="button" aria-label="${esc(t('win.next'))}">${CHEV_R}</button>
      </div>
      ${lens ? `<div class="g-zoom">
        <button type="button" data-zoom="-1" aria-label="${esc(t('lens.out'))}">${ZOOM_OUT_SVG}</button>
        <span class="g-zoom-pct" aria-live="polite">100%</span>
        <button type="button" data-zoom="1" aria-label="${esc(t('lens.in'))}">${ZOOM_IN_SVG}</button>
      </div>` : ''}
      <p class="g-hint">${esc(t(lens ? (canHover() ? 'lens.hintMouse' : 'lens.hint') : 'gal.hint'))}</p>`;
    document.body.append(g);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const stageEl = g.querySelector('.g-stage'), track = g.querySelector('.g-track'), img = g.querySelector('.g-img');
    const dots = [...g.querySelectorAll('.g-dots button')];
    let idx = start, scale = 1, tx = 0, ty = 0, baseW = 0, baseH = 0, cx = 0, cy = 0;
    /* What zooms: in the sheet the whole phone, bezel and all; in the plain gallery the bare screen */
    const zt = sheet ? img.parentNode : img;
    const pct = g.querySelector('.g-zoom-pct');
    const apply = (anim) => {
      zt.style.transition = anim ? 'transform .28s cubic-bezier(.22,.8,.24,1)' : 'none';
      zt.style.transform = `translate(${tx}px, ${ty}px) scale(${scale})`;
      if (pct) pct.textContent = `${Math.round(scale * 100)}%`;
    };
    /* Size and resting centre (from the stage centre) of the zoomed element; the sheet sits it near the top */
    const measure = () => {
      const b = zt.getBoundingClientRect(), r = stageEl.getBoundingClientRect();
      baseW = b.width / scale; baseH = b.height / scale;
      cx = b.left + b.width / 2 - tx - (r.left + r.width / 2); cy = b.top + b.height / 2 - ty - (r.top + r.height / 2);
    };
    /* Pan only as far as keeps the stage covered, and always allow the resting place */
    const clampPan = () => {
      const r = stageEl.getBoundingClientRect();
      const mx = Math.max(0, (baseW * scale - r.width) / 2), my = Math.max(0, (baseH * scale - r.height) / 2);
      tx = Math.max(Math.min(0, -mx - cx), Math.min(Math.max(0, mx - cx), tx));
      ty = Math.max(Math.min(0, -my - cy), Math.min(Math.max(0, my - cy), ty));
    };
    /* The lens view keeps its scroll position when zoom resets; elsewhere the screen recentres */
    const resetZoom = (anim) => { scale = 1; tx = 0; if (lens && baseH) clampPan(); else ty = 0; apply(anim); g.classList.remove('zoomed'); };
    /* Drags pan once zoomed in, and in the lens view also whenever the screen is taller than the stage
       (it opens at full width, so a tall screen scrolls up and down without a pinch) */
    const canPan = () => scale > 1.01 || (lens && baseH * scale > stageEl.clientHeight + 1);
    const go = (i, dir = 0) => {
      /* The feature sheet stops at the first and last feature; the plain gallery wraps round */
      if (sheet && (i < 0 || i >= slides.length)) {
        track.style.transition = 'transform .28s cubic-bezier(.22,.8,.24,1), opacity .2s ease';
        track.style.transform = 'none'; track.style.opacity = '1';
        return;
      }
      idx = (i + slides.length) % slides.length;
      const sl = slides[idx];
      resetZoom(false);
      track.style.transition = 'none';
      track.style.transform = dir ? `translateX(${dir * (RTL ? -40 : 40)}px)` : 'none';
      track.style.opacity = dir ? '0' : '1';
      img.src = sl.src; img.alt = sl.alt;
      /* Every screen sits in the area-coloured bezel (sheet only); web screens get the flatter browser corners */
      img.parentNode.classList.toggle('web', sl.device === 'web');
      /* A locked feature's screen sits under the dark veil with its lock */
      img.parentNode.querySelector('.screen-lock')?.remove();
      if (sl.lock) img.parentNode.insertAdjacentHTML('beforeend', lockHTML());
      g.querySelector('.g-count').textContent = `${idx + 1} / ${slides.length}`;
      g.querySelector('.g-ft').textContent = sl.title;
      g.querySelector('.g-fd').textContent = sl.desc;
      if (sheet && sl.group != null) {
        /* A sheet across a guide page's cards: the top line names this screen's card, and only its dots show */
        g.querySelector('.g-title').textContent = `${areaById[m.track].label} · ${sl.groupTitle}`;
        dots.forEach((d) => { d.hidden = slides[+d.dataset.i].group !== sl.group; });
      }
      if (sheet) {
        g.querySelector('.g-ic').innerHTML = icon(sl.icon);
        g.querySelector('.g-prev').disabled = idx === 0;
        g.querySelector('.g-next').disabled = idx === slides.length - 1;
        const info = g.querySelector('.g-info');
        info.classList.remove('in-up'); void info.offsetWidth; info.classList.add('in-up');
        fitSheet();
        if (opts.step) opts.step(idx);
      }
      dots.forEach((d, j) => d.setAttribute('aria-current', String(j === idx)));
      requestAnimationFrame(() => {
        track.style.transition = 'transform .32s cubic-bezier(.22,.8,.24,1), opacity .25s ease';
        track.style.transform = 'none'; track.style.opacity = '1';
      });
      [idx + 1, idx - 1].forEach((j) => { const n = slides[(j + slides.length) % slides.length]; if (n) new Image().src = n.src; });
    };
    img.addEventListener('load', () => {
      measure();
      /* The lens view opens at the top of the screen */
      if (lens && scale === 1) { ty = 1e6; clampPan(); apply(false); }
    });
    /* Sheet: fit the screen inside the space its area actually has, with room above and below */
    const fitSheet = () => {
      if (!sheet) return;
      requestAnimationFrame(() => { img.style.maxHeight = `${Math.max(160, stageEl.clientHeight - 12 - 16 - 14)}px`; });
    };
    if (sheet) window.addEventListener('resize', fitSheet);

    /* Gestures */
    const pts = new Map();
    let pinch = null, drag = null, lastTap = 0;
    const toStage = (x, y) => { const r = stageEl.getBoundingClientRect(); return { x: x - r.left - r.width / 2, y: y - r.top - r.height / 2 }; };
    stageEl.addEventListener('pointerdown', (e) => {
      stageEl.setPointerCapture(e.pointerId);
      pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (pts.size === 2) {
        const [a, b] = [...pts.values()];
        const mid = toStage((a.x + b.x) / 2, (a.y + b.y) / 2);
        measure();
        pinch = { d: Math.hypot(a.x - b.x, a.y - b.y), s: scale, u: { x: (mid.x - cx - tx) / scale, y: (mid.y - cy - ty) / scale } };
        drag = null;
      } else if (pts.size === 1) {
        drag = { x: e.clientX, y: e.clientY, tx, ty, t: Date.now(), moved: false };
      }
    });
    stageEl.addEventListener('pointermove', (e) => {
      if (!pts.has(e.pointerId)) return;
      pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (pinch && pts.size >= 2) {
        const [a, b] = [...pts.values()];
        const mid = toStage((a.x + b.x) / 2, (a.y + b.y) / 2);
        scale = Math.max(1, Math.min(ZOOM_MAX, pinch.s * Math.hypot(a.x - b.x, a.y - b.y) / pinch.d));
        tx = mid.x - cx - pinch.u.x * scale; ty = mid.y - cy - pinch.u.y * scale;
        clampPan(); apply(false); g.classList.toggle('zoomed', scale > 1.01);
      } else if (drag) {
        const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
        if (Math.abs(dx) + Math.abs(dy) > 6) drag.moved = true;
        if (canPan()) { tx = drag.tx + dx; ty = drag.ty + dy; clampPan(); apply(false); }
        else if (Math.abs(dy) > Math.abs(dx) && dy > 0) { track.style.transition = 'none'; track.style.transform = `translateY(${dy}px)`; track.style.opacity = String(Math.max(.3, 1 - dy / 400)); }
        else { track.style.transition = 'none'; track.style.transform = `translateX(${dx}px)`; }
      }
    });
    const end = (e) => {
      if (!pts.has(e.pointerId)) return;
      pts.delete(e.pointerId);
      if (pinch) {
        if (pts.size < 2) { pinch = null; if (scale < 1.05) resetZoom(true); const p = [...pts.values()][0]; if (p) drag = { x: p.x, y: p.y, tx, ty, t: Date.now(), moved: true }; }
        return;
      }
      if (!drag) return;
      const dx = e.clientX - drag.x, dy = e.clientY - drag.y, quick = Date.now() - drag.t < 280;
      const d = drag; drag = null;
      if (!d.moved && quick) {
        /* Tap: a second tap within 300ms toggles zoom at that point */
        const now = Date.now();
        if (now - lastTap < 300) {
          lastTap = 0;
          if (scale > 1.01) resetZoom(true);
          else { measure(); const p = toStage(e.clientX, e.clientY); scale = ZOOM_TAP; tx = -(p.x - cx) * (scale - 1); ty = -(p.y - cy) * (scale - 1); clampPan(); apply(true); g.classList.add('zoomed'); }
        } else lastTap = now;
        return;
      }
      if (canPan()) return;
      track.style.transition = 'transform .28s cubic-bezier(.22,.8,.24,1), opacity .2s ease';
      if (dy > 110 && Math.abs(dy) > Math.abs(dx)) return close();
      const fwd = RTL ? -dx : dx;
      if (fwd < -60 && slides.length > 1) return go(idx + 1, 1);
      if (fwd > 60 && slides.length > 1) return go(idx - 1, -1);
      track.style.transform = 'none'; track.style.opacity = '1';
    };
    /* Zoom to a scale, keeping the stage point (x, y) where it is */
    const zoomAt = (to, x, y, anim) => {
      measure();
      const s0 = scale, s1 = Math.max(1, Math.min(ZOOM_MAX, to));
      const ux = (x - cx - tx) / s0, uy = (y - cy - ty) / s0;
      scale = s1; tx = x - cx - ux * s1; ty = y - cy - uy * s1;
      clampPan(); apply(anim); g.classList.toggle('zoomed', scale > 1.01);
    };
    if (lens) {
      /* Mouse and trackpad: the wheel pans, a pinch (or ctrl + wheel) zooms at the pointer */
      stageEl.addEventListener('wheel', (e) => {
        e.preventDefault();
        if (e.ctrlKey) { const p = toStage(e.clientX, e.clientY); zoomAt(scale * Math.exp(-e.deltaY / 100), p.x, p.y, false); return; }
        if (!canPan()) return;
        tx -= e.deltaX; ty -= e.deltaY; clampPan(); apply(false);
      }, { passive: false });
      g.querySelectorAll('[data-zoom]').forEach((b) => b.addEventListener('click', () => {
        const up = +b.dataset.zoom > 0;
        zoomAt(up ? scale * 1.5 : scale / 1.5, 0, 0, true);
      }));
    }
    stageEl.addEventListener('pointerup', end);
    stageEl.addEventListener('pointercancel', end);

    const onKey = (e) => {
      const open = document.querySelectorAll('.gallery:not(.out)');
      if (open[open.length - 1] !== g) return;
      if (e.key === 'Escape') close();
      if (lens && (e.key === '+' || e.key === '=')) zoomAt(scale * 1.5, 0, 0, true);
      if (lens && e.key === '-') zoomAt(scale / 1.5, 0, 0, true);
      if (lens && e.key === '0') resetZoom(true);
      if (lens) return;
      if (e.key === (RTL ? 'ArrowLeft' : 'ArrowRight')) go(idx + 1, 1);
      if (e.key === (RTL ? 'ArrowRight' : 'ArrowLeft')) go(idx - 1, -1);
    };
    document.addEventListener('keydown', onKey);
    dots.forEach((d) => d.addEventListener('click', () => go(+d.dataset.i, +d.dataset.i > idx ? 1 : -1)));
    g.querySelector('.g-prev').addEventListener('click', () => go(idx - 1, -1));
    g.querySelector('.g-next').addEventListener('click', () => go(idx + 1, 1));
    function close() {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
      g.classList.remove('in');
      g.classList.add('out');
      setTimeout(() => g.remove(), sheet ? 420 : 220);
      if (opts.close) opts.close(idx);
      if (returnFocusTo && returnFocusTo.focus) returnFocusTo.focus({ preventScroll: true });
    }
    g.querySelector('.g-close').addEventListener('click', close);
    /* The sheet's lens opens the screen on show in the lens view, over the sheet */
    const sheetLens = g.querySelector('.g-stage > .lens');
    if (sheetLens) {
      sheetLens.addEventListener('pointerdown', (e) => e.stopPropagation());
      sheetLens.addEventListener('click', () => { const sl = slides[idx]; if (sl.src) openLens(sl.full || sl.src, sl.alt, sl.title || m.title, sheetLens); });
    }
    go(start);
    if (sheet) {
      /* Radial opening from the tapped feature, as on desktop */
      const o = opts.origin || { x: innerWidth / 2, y: innerHeight / 2 };
      const r = Math.ceil(Math.max(Math.hypot(o.x, o.y), Math.hypot(innerWidth - o.x, o.y), Math.hypot(o.x, innerHeight - o.y), Math.hypot(innerWidth - o.x, innerHeight - o.y)));
      g.style.transition = 'none';
      g.style.setProperty('--ox', `${Math.round(o.x)}px`); g.style.setProperty('--oy', `${Math.round(o.y)}px`); g.style.setProperty('--r', `${r}px`);
      void g.offsetWidth;
      g.style.transition = '';
    }
    requestAnimationFrame(() => g.classList.add('in'));
    g.querySelector('.g-close').focus({ preventScroll: true });
  }
  /* Lens view: one screen on its own, dark and full-screen, to pinch, pan and double-tap into */
  function openLens(src, alt, title, returnFocusTo) {
    openGallery({ title }, [{ src, alt, title: '', desc: '' }], 0, returnFocusTo, { lens: true });
  }
  /* Lens buttons on in-page screens. Capture phase, so the tap opens only the lens view and not also the
     gallery or feature behind the screen. */
  document.addEventListener('click', (e) => {
    const b = e.target.closest('.device > .lens, .lens-out');
    if (!b) return;
    e.stopPropagation(); e.preventDefault();
    /* An outside lens opens the screen its card or stage shows now (a tour swaps it as tiles are pointed at) */
    const img = b.parentElement.querySelector('.screen-body img') || b.parentElement.querySelector('img');
    const full = b.parentElement.dataset.full;
    const head = b.closest('.fwin-card, section, .mpanel, .mfeat-row');
    const title = b.dataset.title || (b.closest('.mfeat-row') || {}).querySelector?.('.t b')?.textContent
      || head?.querySelector('.fwin-title, h1, h2, .section-title, .mpanel-title')?.textContent || '';
    if (full) openLens(full, img ? img.alt : '', title.trim(), b);
    else if (img) openLens(img.currentSrc || img.src, img.alt, title.trim(), b);
  }, true);

  /* Phones: a feature's screen and details open in the full-screen sheet */
  /* chain ({ sets, at }, guide pages): the sheet holds every card's screens in page order, so swiping or the
     arrows run on from one card into the next; the top line and the dots follow the card on show */
  function openFeatureSheet(m, start, { origin, step, close, returnFocusTo, chain } = {}) {
    const slidesOf = (x, group) => x.features.map((f, i) => {
      const src = f.shot || (x.shots[i] && x.shots[i].src) || (x.shots[0] && x.shots[0].src);
      const shot = src ? shotFor(x, src) : null;
      return { src: src || '', full: shot && shot.scroll && shot.scroll.full, alt: (shot && shot.alt) || f.title, title: tidyTitle(f.title), desc: f.keep ? f.desc : tidy(f.desc), icon: f.icon, device: shot && shot.device,
        lock: !!f.lock, group, groupTitle: x.title, local: i };
    });
    if (!chain) { openGallery(m, slidesOf(m), start, returnFocusTo, { sheet: true, origin, step, close }); return; }
    const slides = chain.sets.flatMap((x, k) => slidesOf(x, k));
    const first = slides.findIndex((s) => s.group === chain.at);
    openGallery(m, slides, first + start, returnFocusTo, { sheet: true, origin, step,
      close: close && ((i) => close(slides[i].local, slides[i].group)) });
  }

  /* ---------- Routing, scrolling, reveal ---------- */
  function scrollToId(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  }
  let pendingScroll = null;
  let onHome = false, homeY = 0, goTop = false;
  function route() {
    const [, name, id, f] = location.hash.split('/');
    closeNav();
    if (closeFeatureWindow) closeFeatureWindow(true);
    if (pageTeardown) pageTeardown();
    if ((name === 'm' || name === 'kit' || name === 'guide') && id) {
      if (onHome) homeY = window.scrollY;
      onHome = false;
      if (parallaxOff) parallaxOff();
      if (name === 'kit') renderKit(id);
      else if (name === 'guide') { lastKit = null; renderGuide(id); }
      else { lastKit = null; renderModule(id, Number(f) || 0, f !== undefined && f !== ''); }
      window.scrollTo(0, 0);
    } else {
      document.title = t('brand.title');
      const cameBack = !onHome && !goTop && !pendingScroll && homeY;
      lastKit = null;
      renderHome(cameBack);
      onHome = true;
      if (pendingScroll) { const sid = pendingScroll; requestAnimationFrame(() => scrollToId(sid)); pendingScroll = null; }
      else if (cameBack) { document.querySelectorAll('.reveal').forEach((e) => e.classList.add('in')); window.scrollTo(0, homeY); }
      else window.scrollTo(0, 0);
      goTop = false;
    }
    syncHeader();
    syncTopFab();
    observeReveal();
  }

  /* Every page: a floating button back to the top, in the app's FAB gradient, once the banner is scrolled past */
  const topFab = document.createElement('button');
  topFab.className = 'top-fab';
  topFab.type = 'button';
  topFab.setAttribute('aria-label', t('top.back'));
  topFab.title = t('top.back');
  topFab.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19V5M5.5 11.5 12 5l6.5 6.5"/></svg>';
  document.body.append(topFab);
  function syncTopFab() { topFab.classList.toggle('show', window.scrollY > window.innerHeight * 0.8); }
  window.addEventListener('scroll', syncTopFab, { passive: true });
  topFab.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    topFab.blur();
  });
  function observeReveal() {
    const els = app.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) { els.forEach((e) => e.classList.add('in')); return; }
    const io = new IntersectionObserver((entries) => entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
    }), { rootMargin: '0px 0px -8% 0px' });
    els.forEach((e) => io.observe(e));
  }

  /* The logo and "Home" crumb mean "start over": top of page, nothing open */
  document.addEventListener('click', (e) => { if (e.target.closest('a[href="#/"]:not([data-scroll])')) goTop = true; });

  /* Links marked data-scroll go to a home-page section, from any page */
  document.addEventListener('click', (e) => {
    const a = e.target.closest('[data-scroll]');
    if (!a) return;
    e.preventDefault();
    const id = a.dataset.scroll;
    if (document.getElementById(id)) { closeNav(); scrollToId(id); }
    else { pendingScroll = id; location.hash = '#/'; }
  });

  /* ---------- Language: page shell text, the switcher and the review note ---------- */
  document.querySelectorAll('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n); });
  /* The iris button repaints its label from data-text, so it follows the translated label */
  document.querySelectorAll('.btn-cta[data-text]').forEach((el) => { el.dataset.text = el.textContent.trim(); });
  document.querySelectorAll('[data-i18n-aria]').forEach((el) => el.setAttribute('aria-label', t(el.dataset.i18nAria)));
  document.querySelectorAll('[data-i18n-title]').forEach((el) => el.setAttribute('title', t(el.dataset.i18nTitle)));
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', t('meta.description'));
  const LANGS = window.ANTZ_LANGS || [{ code: 'en', name: 'English' }];
  /* Switching saves the choice and reloads at the same place; the page is then built in the new language */
  const setLang = (code) => {
    try { localStorage.setItem('antz-lang', code); } catch (e) { /* blocked: the URL still carries it */ }
    const url = new URL(location.href);
    url.searchParams.delete('lang');
    if (code !== 'en') url.searchParams.set('lang', code);
    /* Set the address, then reload: a change only after # would not reload the page by itself */
    history.replaceState(null, '', url.toString());
    location.reload();
  };
  const langBox = document.querySelector('.nav-lang');
  if (langBox) {
    const btn = langBox.querySelector('.nav-lang-btn'), menu = langBox.querySelector('.nav-lang-menu');
    langBox.querySelector('.nav-lang-code').textContent = LANG.toUpperCase();
    menu.innerHTML = LANGS.map((l) => `<button type="button" role="menuitemradio" aria-checked="${l.code === LANG}" data-lang="${l.code}"><span lang="${l.code}" dir="${l.dir || 'ltr'}">${esc(l.name)}</span><small>${l.code.toUpperCase()}</small></button>`).join('')
      + (LANG !== 'en' ? `<p class="nav-lang-note">${esc(t('lang.note'))}</p>` : '');
    /* Opening: unhide, centre the circle on the globe button, then let the class grow it (see .nav-lang-menu).
       Closing: shrink it back, then hide once the circle has gone. */
    let hideTimer = 0;
    const setMenu = (open) => {
      clearTimeout(hideTimer);
      btn.setAttribute('aria-expanded', String(open));
      if (open) {
        menu.hidden = false;
        const b = btn.getBoundingClientRect(), m = menu.getBoundingClientRect();
        const ox = b.left + b.width / 2 - m.left, oy = b.top + b.height / 2 - m.top;
        const far = Math.max(...[[0, 0], [m.width, 0], [0, m.height], [m.width, m.height]].map(([x, y]) => Math.hypot(x - ox, y - oy)));
        menu.style.transition = 'none';   /* move the closed circle onto the button without animating it there */
        menu.style.setProperty('--ox', `${ox.toFixed(1)}px`);
        menu.style.setProperty('--oy', `${oy.toFixed(1)}px`);
        menu.style.setProperty('--or', `${Math.ceil(far + 48)}px`);
        void menu.offsetWidth;
        menu.style.transition = '';
        langBox.classList.add('open');
      } else {
        langBox.classList.remove('open');
        hideTimer = setTimeout(() => { menu.hidden = true; }, matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 300);
      }
    };
    btn.addEventListener('click', (e) => { e.stopPropagation(); setMenu(!langBox.classList.contains('open')); if (langBox.classList.contains('open')) (menu.querySelector('[aria-checked="true"]') || menu.firstElementChild).focus(); });
    menu.addEventListener('click', (e) => { const b = e.target.closest('[data-lang]'); if (b) { setMenu(false); if (b.dataset.lang !== LANG) setLang(b.dataset.lang); } });
    menu.addEventListener('keydown', (e) => {
      const items = [...menu.querySelectorAll('[data-lang]')], i = items.indexOf(document.activeElement);
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { e.preventDefault(); items[(i + (e.key === 'ArrowDown' ? 1 : -1) + items.length) % items.length].focus(); }
      if (e.key === 'Escape') { setMenu(false); btn.focus(); }
    });
    document.addEventListener('click', (e) => { if (langBox.classList.contains('open') && !e.target.closest('.nav-lang')) setMenu(false); });
  }
  /* Machine translations say so until a native speaker has reviewed them (dismissed per language) */
  const reviewed = !!(PACK.meta && PACK.meta.reviewed);
  let noteGone = false;
  try { noteGone = localStorage.getItem(`antz-lang-note-${LANG}`) === '1'; } catch (e) { /* ignore */ }
  if (LANG !== 'en' && !reviewed && !noteGone) {
    const note = document.createElement('div');
    note.className = 'lang-toast';
    note.setAttribute('role', 'status');
    note.innerHTML = `<p>${esc(t('lang.note'))}</p><button type="button" class="lang-toast-en" lang="en">${esc(UI['lang.english'])}</button><button type="button" class="lang-toast-x" aria-label="${esc(t('lang.dismiss'))}">${CLOSE_SVG}</button>`;
    document.body.append(note);
    note.querySelector('.lang-toast-en').addEventListener('click', () => setLang('en'));
    /* It steps aside once the reader starts scrolling, so it never covers what they are reading */
    const onScrollNote = () => { if (window.scrollY > 240) { note.classList.add('away'); window.removeEventListener('scroll', onScrollNote); setTimeout(() => note.remove(), 400); } };
    window.addEventListener('scroll', onScrollNote, { passive: true });
    note.querySelector('.lang-toast-x').addEventListener('click', () => {
      try { localStorage.setItem(`antz-lang-note-${LANG}`, '1'); } catch (e) { /* ignore */ }
      note.remove();
    });
  }

  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('primary-nav');
  function closeNav() { nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); syncHeader(); }
  toggle.addEventListener('click', () => {
    const open = !nav.classList.contains('open');
    nav.classList.toggle('open', open); toggle.setAttribute('aria-expanded', String(open));
    syncHeader();
  });

  /* Transparent header: clear at the top, glass once scrolled, white while over the hero photo.
     An open mobile menu always uses the light glass so its dropdown reads as one piece. */
  const header = document.querySelector('.site-header');
  function syncHeader() {
    const hero = app.querySelector('.hero');
    const menuOpen = nav.classList.contains('open');
    const y = window.scrollY;
    const overHero = !!hero && y < hero.offsetHeight - header.offsetHeight;
    header.classList.toggle('scrolled', menuOpen || y > 4);
    header.classList.toggle('menu-open', menuOpen);
    header.classList.toggle('on-dark', overHero && !menuOpen);
  }
  let headerTick = false;
  const onHeaderScroll = () => { if (!headerTick) { headerTick = true; requestAnimationFrame(() => { headerTick = false; syncHeader(); }); } };
  window.addEventListener('scroll', onHeaderScroll, { passive: true });
  window.addEventListener('resize', onHeaderScroll);

  window.addEventListener('hashchange', route);
  route();
})();
