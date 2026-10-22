/* Languages for the Antz Onboarding Guide.
   English is the source and the default. Other languages live in lang/<code>.js (window.ANTZ_I18N) and are
   loaded here, before app.js runs, so the page renders straight in the chosen language.
   The choice comes from ?lang=xx (for shared links), then the visitor's saved choice; changing it reloads the page. */
(function () {
  'use strict';

  const LANGS = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' },
    { code: 'de', name: 'Deutsch' },
    { code: 'pt', name: 'Português' },
    { code: 'cs', name: 'Čeština' },
    { code: 'pl', name: 'Polski' },
    { code: 'lt', name: 'Lietuvių' },
    { code: 'lv', name: 'Latviešu' },
    { code: 'et', name: 'Eesti' },
    { code: 'ru', name: 'Русский' },
    { code: 'ar', name: 'العربية', dir: 'rtl', font: 'Noto+Sans+Arabic:wght@400;500;600;700;800' },
    { code: 'hi', name: 'हिन्दी', font: 'Noto+Sans+Devanagari:wght@400;500;600;700;800' },
    { code: 'zh', name: '中文（简体）', font: 'Noto+Sans+SC:wght@400;500;700;800' },
    { code: 'ja', name: '日本語', font: 'Noto+Sans+JP:wght@400;500;700;800' },
    { code: 'id', name: 'Bahasa Indonesia' },
    { code: 'sw', name: 'Kiswahili' }
  ];

  /* The English interface text: the source every translation is made from. {x} marks a value filled in at run time. */
  const UI_EN = {
    'brand.title': 'Antz Onboarding Guide',
    'brand.label': 'Onboarding Guide',
    'brand.home': 'Antz Systems, home',
    'meta.description': 'A short, visual guide to the Antz platform for animal care teams.',
    'nav.primary': 'Primary',
    'nav.menu': 'Menu',
    'nav.modules': 'Modules',
    'nav.why': 'Why Antz',
    'nav.start': 'Getting started',
    'nav.faq': 'FAQ',
    'nav.cta': 'Ready to Onboard?',
    'nav.search': 'Search the guide',
    'nav.searchTip': 'Search (Ctrl/Cmd + K)',
    'footer.ctaTitle': 'See Antz in Action',
    'footer.ctaSub': "We'll show you the platform running in a real zoo context - walking you through Antz Platform and EthoStudio, and how zoos around the world are putting behavioural data to work in daily animal care.",
    'footer.demo': 'Book a Demo',
    'footer.rights': '© Copyright 2026 Antz Systems. All Rights Reserved.',
    'footer.terms': 'Terms of Use',
    'footer.privacy': 'Privacy Policy',

    'lang.label': 'Language',
    'lang.note': 'This page was translated by machine and is awaiting review by a native speaker.',
    'lang.english': 'View in English',
    'lang.dismiss': 'Dismiss',
    'lang.inApp': 'In the app: {x}',

    'hero.title': 'One platform for every animal in your care',
    'hero.sub': 'Records, daily operations and teamwork across all your sites. Find any task in Antz, with the real screens.',
    'hero.areas': '{n} areas of work',
    'hero.devices': 'Mobile and web',
    'search.label': 'Search modules and features',
    'search.cue': 'Search {x}',
    'search.clear': 'Clear search',
    'search.short': 'Type at least two letters to search every module and feature.',
    'search.top': 'Top results',
    'search.none': 'No matches for “{q}”. Try “animal”, “egg” or “report”.',

    'start.label': 'Start here',
    'kit.objective.eyebrow': 'Start here',
    'kit.objective.more': 'Read the objective',
    'kit.objective.kicker': 'Why we run this training',
    'kit.objective.photo': 'A keeper feeding a small animal in its enclosure',
    'kit.platform.eyebrow': 'The platform',
    'kit.platform.more': 'Learn about Antz',
    'kit.platform.why': 'Why use this app',
    'kit.platform.photo': 'A hand holding a phone showing the Antz Systems app',
    'kit.start.eyebrow': 'Onboarding flow',
    'kit.start.more': 'Start the guide',
    'kit.start.features': 'Features',
    'guide.more': 'Know more',
    'guide.moreNote': 'Every screen, step by step',
    'guide.jump': 'In this guide',
    'guide.screens': '{n} screens',
    'guide.screen1': '1 screen',
    'guide.view': 'View screens',
    'guide.preview': 'Point at a surface to preview it · click to open',
    'guide.qaHint': 'Pick a shortcut to see its screen',
    'guide.summary': 'Summary',
    'guide.module': 'Module',
    'guide.back': 'Back to {x}',
    'guide.level': 'Level {n}',
    'guide.tourHint': 'Point at a part to see it on the screen, or pick it to open the screen',
    'guide.tourHintTap': 'Tap a part to open its screen',
    'day.title': 'What your first day on Antz looks like',
    'day.lede': 'Four steps take your team from first login to everyday use.',
    'day.1': 'Sign in to your workspace',
    'day.2': 'Find your way around',
    'day.3': 'Set up your master data',
    'day.4': 'Give everyone the right access',
    'day.4.desc': 'Create roles that match your organisation and switch permissions on module by module, so each person sees what their work needs.',

    'modules.eyebrow': 'What’s inside',
    'modules.title': 'Explore the modules',
    'modules.lede': 'Tap any card to open its guide, with every feature and its screens.',
    'modules.filter': 'Filter modules by area',
    'modules.all': 'All',
    'modules.count': '{n} modules',
    'modules.features': '{n} features',

    'outcomes.eyebrow': 'By the end of this training',
    'outcomes.title': 'Summary & outcomes',
    'outcomes.lede': 'Four outcomes mark the close of onboarding. Each maps directly back to the objectives this training sets out.',
    'outcomes.1': 'Apply your skills',
    'outcomes.1.desc': 'Confidently manage zoo operations, animal care, and platform usage with enhanced knowledge and practical fluency.',
    'outcomes.2': 'Adopt the system',
    'outcomes.2.desc': 'Navigate the app and its modules with ease, performing key actions independently, with no shadow user needed.',
    'outcomes.3': 'Follow standards',
    'outcomes.3.desc': 'Maintain consistent records and processes using modules like Requests, Mortality, Egg and Diet, in line with site protocol.',
    'outcomes.4': 'Embrace improvement',
    'outcomes.4.desc': 'Identify gaps, raise clarifications, and apply feedback to continuously improve how the system serves your work.',

    'spot.tag': 'Featured workflow',
    'spot.link': 'See {x} in detail',

    'cta.title': 'Stuck on a task?',
    'cta.text': 'Every module has its features and real screens in this guide. Pick up where you left off, or ask us and we will help.',
    'cta.back': 'Back to the modules',
    'cta.or': 'Questions? Write to {email}',

    'faq.eyebrow': 'FAQ',
    'faq.title': 'Questions teams ask first',
    'faq.q1': 'What is Antz?',
    'faq.q2': 'Does it work on phones and computers?',
    'faq.a2': 'Yes. The mobile app covers work on the ground, such as notes, treatments, transfers and egg records. The web app covers desk work, such as the hospital system, nursery set-up, reports and pharmacy stock. Updates appear in real time on phone, tablet and desktop.',
    'faq.q3': 'Can we control who sees what?',
    'faq.a3': 'Yes. Access is role-based. You create the roles your organisation uses, for example Zoologist, and turn permissions on module by module.',
    'faq.q4': 'We run more than one site. Does that work?',
    'faq.a4': 'Antz keeps data from every site and department in one place. Housing is organised by site, section and enclosure, and moves between sites go through approval and a security check-out.',
    'faq.q5': 'How do we get started?',
    'faq.a5': 'Start with the Getting Started guide, then open the modules your role uses. If something is unclear, write to hello@antz.systems.',

    'pager.prev': 'Previous',
    'pager.next': 'Next',
    'pager.modules': 'Explore the modules',
    'pager.pages': 'Previous and next page',
    'pager.moduleNav': 'Previous and next module',

    'mod.tabs': 'Module areas and modules',
    'mod.features': 'Features',
    'mod.hintClick': 'Click a feature to open its screen',
    'mod.hintTap': 'Tap a feature to open its screen',
    'mod.soon': 'Screens for this module are coming soon',
    'mod.zoom': 'Tap the screen to zoom',

    'win.prev': 'Previous feature',
    'win.next': 'Next feature',
    'win.close': 'Close',
    'win.count': 'Feature {i} of {n}',
    'win.soon': 'Screen coming soon',
    'gal.label': '{x} screens',
    'gal.close': 'Close gallery',
    'gal.screen': 'Screen {i}',
    'gal.hint': 'Pinch or double-tap to zoom · Swipe to browse',
    'lens.open': 'Zoom into this screen',
    'screen.scroll': 'Scroll',
    'lens.hint': 'Drag to scroll · Pinch or double-tap to zoom',
    'lens.hintMouse': 'Drag or scroll to move around · Double-click, pinch or use + and − to zoom',
    'lens.in': 'Zoom in',
    'lens.out': 'Zoom out'
  };

  /* Choose the language: ?lang= wins (and is remembered), then the saved choice, else English */
  let saved = null;
  try { saved = localStorage.getItem('antz-lang'); } catch (e) { /* storage blocked: stay on the default */ }
  const fromUrl = new URLSearchParams(location.search).get('lang');
  const known = (c) => LANGS.some((l) => l.code === c);
  let code = known(fromUrl) ? fromUrl : known(saved) ? saved : 'en';
  if (fromUrl && known(fromUrl)) { try { localStorage.setItem('antz-lang', fromUrl); } catch (e) { /* ignore */ } }
  const lang = LANGS.find((l) => l.code === code);

  const html = document.documentElement;
  html.lang = code;
  html.dir = lang.dir || 'ltr';
  if (lang.font) {
    document.write(`<link href="https://fonts.googleapis.com/css2?family=${lang.font}&display=swap" rel="stylesheet">`);
  }
  window.ANTZ_LANGS = LANGS;
  window.ANTZ_LANG = code;
  window.ANTZ_UI_EN = UI_EN;
  window.ANTZ_I18N = null;
  if (code !== 'en') {
    const v = (document.currentScript && document.currentScript.src.match(/\?v=\d+/)) || [''];
    document.write(`<script src="lang/${code}.js${v[0]}"><\/script>`);
  }
})();
