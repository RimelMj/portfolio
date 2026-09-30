// Mobile hamburger nav.
(function () {
  const toggle = document.getElementById('menuToggle');
  const nav = document.getElementById('mobileNav');
  if (!toggle || !nav) return;

  const close = () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  };

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', close));
})();

// Language switcher (EN / FR).
(function () {
  const translations = {
    en: {
      'nav.about': 'profile',
      'nav.stack': 'stack',
      'nav.work': 'work',
      'nav.education': 'education',
      'hero.kicker': 'software engineer · sousse, tunisia',
      'hero.lede': "I build responsive, high‑performance web applications with React, Laravel and Filament — from long‑running e‑commerce platforms to internal tools that replace manual work with something people actually enjoy using.",
      'hero.fact1': '4 years, Satoripop',
      'hero.email': 'Email',
      'about.lede': "Software engineer with 4 years of experience building responsive, high‑performance web applications with React, Laravel, and Filament. Skilled in integrating REST and GraphQL APIs, optimizing UI/UX, and collaborating with cross‑functional teams to ship user‑focused digital solutions. Committed to clean code, continuous learning, and delivering polished, scalable products.",
      'about.dtLocation': 'Location',
      'about.ddLocation': 'Hammam Sousse, Tunisia',
      'about.dtLanguages': 'Languages spoken',
      'about.ddLanguages': 'Arabic (native), French, English',
      'about.dtEducation': 'Education',
      'about.ddEducation': 'Engineering Degree, Software Engineering — Esprit',
      'about.dtCurrently': 'Currently',
      'about.ddCurrently': 'Software Engineer at Satoripop',
      'stack.groupLangFrameworks': 'languages & frameworks',
      'stack.groupStyling': 'styling & markup',
      'stack.groupApis': 'APIs & data',
      'stack.groupTools': 'tools',
      'stack.groupSpoken': 'spoken languages',
      'stack.chipArabic': 'Arabic — native',
      'stack.chipFrench': 'French',
      'stack.chipEnglish': 'English',
      'work.roleTitle': '— Software Engineer',
      'work.roleMeta': 'Sousse, Tunisia · Feb 2022 – Present',
      'work.roleSummary': "Delivered frontend and full‑stack solutions across multiple client engagements, from long‑term maintenance to new build projects.",
      'work.oectTag': 'in development',
      'work.oectMeta': 'Corporate platform rebuild',
      'work.oectB1': "Rebuilding the website for the OECT — Tunisia's national professional body for chartered accountants — from the ground up in Laravel Filament.",
      'work.oectB2': 'Replacing a legacy platform with a maintainable architecture and a responsive, accessible interface, ahead of an upcoming launch.',
      'work.carrefourTag': '~3‑year engagement',
      'work.carrefourMeta': 'E‑commerce platform — Venia (PWA Studio)',
      'work.carrefourB1': 'Delivered continuous feature development and production maintenance for the Venia (PWA Studio) storefront in React, consuming GraphQL APIs through Apollo Client.',
      'work.carrefourB2': 'Optimized frontend performance and UX through query batching, lazy loading, and component refactoring.',
      'work.carrefourB3': 'Collaborated closely with backend and design teams to ship new storefront features and resolve live production issues, keeping the platform stable and current.',
      'work.attuneaMeta': 'Internal company management platform',
      'work.attuneaB1': 'Developed core modules — meeting scheduling, project and task management, document organization, routines, and calendar integration — using Laravel Filament.',
      'work.attuneaB2': "Streamlined day‑to‑day operations for internal teams by automating manual, repetitive workflows across the platform.",
      'work.gcerMeta': 'Corporate websites',
      'work.gcerB1': 'Built responsive, accessible interfaces in Laravel and Filament with seamless frontend–backend integration.',
      'work.gcerB2': "Delivered polished corporate websites with a focus on cross‑device consistency and maintainable, reusable components.",
      'edu.meta': 'Engineering Degree, Software Engineering · 2018 – 2021',
      'edu.coursework': 'Relevant coursework: Web Development, Data Science, Machine Learning.',
      'footer.heading': "Let's build something that ships.",
      'footer.note': 'Hammam Sousse, Tunisia',
    },
    fr: {
      'nav.about': 'profil',
      'nav.stack': 'stack',
      'nav.work': 'expérience',
      'nav.education': 'formation',
      'hero.kicker': 'ingénieur logiciel · sousse, tunisie',
      'hero.lede': "Je conçois des applications web réactives et performantes avec React, Laravel et Filament — des plateformes e‑commerce durables aux outils internes qui remplacent le travail manuel par quelque chose d'agréable à utiliser.",
      'hero.fact1': '4 ans, Satoripop',
      'hero.email': 'E-mail',
      'about.lede': "Ingénieur logiciel avec 4 ans d'expérience dans la conception d'applications web réactives et performantes avec React, Laravel et Filament. À l'aise avec l'intégration d'API REST et GraphQL, l'optimisation UI/UX, et la collaboration avec des équipes pluridisciplinaires pour livrer des solutions numériques centrées sur l'utilisateur. Attaché à un code propre, à l'apprentissage continu et à des produits soignés et évolutifs.",
      'about.dtLocation': 'Localisation',
      'about.ddLocation': 'Hammam Sousse, Tunisie',
      'about.dtLanguages': 'Langues parlées',
      'about.ddLanguages': 'Arabe (natif), français, anglais',
      'about.dtEducation': 'Formation',
      'about.ddEducation': "Diplôme d'ingénieur, génie logiciel — Esprit",
      'about.dtCurrently': 'Actuellement',
      'about.ddCurrently': 'Ingénieur logiciel chez Satoripop',
      'stack.groupLangFrameworks': 'langages & frameworks',
      'stack.groupStyling': 'style & balisage',
      'stack.groupApis': 'APIs & données',
      'stack.groupTools': 'outils',
      'stack.groupSpoken': 'langues parlées',
      'stack.chipArabic': 'Arabe — natif',
      'stack.chipFrench': 'Français',
      'stack.chipEnglish': 'Anglais',
      'work.roleTitle': '— Ingénieur logiciel',
      'work.roleMeta': 'Sousse, Tunisie · Fév 2022 – présent',
      'work.roleSummary': "Développement front-end et full-stack sur plusieurs missions clients, entre maintenance de long terme et nouveaux projets.",
      'work.oectTag': 'en développement',
      'work.oectMeta': "Refonte d'une plateforme d'entreprise",
      'work.oectB1': "Refonte complète du site de l'OECT — l'ordre professionnel national des experts-comptables de Tunisie — en Laravel Filament.",
      'work.oectB2': 'Remplacement d\'une plateforme existante par une architecture maintenable et une interface responsive et accessible, avant un lancement prochain.',
      'work.carrefourTag': '~3 ans de mission',
      'work.carrefourMeta': 'Plateforme e-commerce — Venia (PWA Studio)',
      'work.carrefourB1': "Développement continu de fonctionnalités et maintenance en production pour la vitrine Venia (PWA Studio) en React, consommant des API GraphQL via Apollo Client.",
      'work.carrefourB2': "Optimisation des performances et de l'UX front-end via le regroupement de requêtes, le chargement différé et la refactorisation de composants.",
      'work.carrefourB3': "Collaboration étroite avec les équipes back-end et design pour livrer de nouvelles fonctionnalités et résoudre les incidents de production, en maintenant la plateforme stable.",
      'work.attuneaMeta': "Plateforme interne de gestion d'entreprise",
      'work.attuneaB1': 'Développement des modules principaux — planification de réunions, gestion de projets et tâches, organisation documentaire, routines et intégration de calendrier — avec Laravel Filament.',
      'work.attuneaB2': "Simplification des opérations quotidiennes des équipes internes en automatisant des tâches manuelles et répétitives sur la plateforme.",
      'work.gcerMeta': "Sites web d'entreprise",
      'work.gcerB1': "Interfaces responsives et accessibles construites en Laravel et Filament, avec une intégration front-end/back-end fluide.",
      'work.gcerB2': "Livraison de sites d'entreprise soignés, avec une attention particulière à la cohérence multi-appareils et à des composants réutilisables.",
      'edu.meta': "Diplôme d'ingénieur, génie logiciel · 2018 – 2021",
      'edu.coursework': 'Cours pertinents : développement web, science des données, apprentissage automatique.',
      'footer.heading': 'Construisons quelque chose qui sera livré.',
      'footer.note': 'Hammam Sousse, Tunisie',
    },
  };

  const switchBtn = document.getElementById('langSwitch');
  if (!switchBtn) return;

  function applyLang(lang) {
    const dict = translations[lang] || translations.en;
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] != null) el.textContent = dict[key];
    });
    document.documentElement.lang = lang;
    switchBtn.querySelectorAll('[data-lang-opt]').forEach((el) => {
      el.classList.toggle('is-active', el.getAttribute('data-lang-opt') === lang);
    });
    try {
      localStorage.setItem('lang', lang);
    } catch (e) {
      /* ignore (private mode / blocked storage) */
    }
  }

  let saved = null;
  try {
    saved = localStorage.getItem('lang');
  } catch (e) {
    /* ignore (private mode / blocked storage) */
  }
  const browserPrefersFrench = (navigator.language || '').toLowerCase().startsWith('fr');
  const initial = saved || (browserPrefersFrench ? 'fr' : 'en');

  applyLang(initial === 'fr' ? 'fr' : 'en');

  switchBtn.addEventListener('click', () => {
    const next = document.documentElement.lang === 'fr' ? 'en' : 'fr';
    applyLang(next);
  });
})();

// Single orchestrated reveal: the hero code panel types in on load, once.
(function () {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const codeEl = document.querySelector('.code-body code');
  if (!codeEl || prefersReduced) return;

  const full = codeEl.innerHTML;
  const cursorMatch = full.match(/<span class="cursor">[^<]*<\/span>/);
  const cursorHtml = cursorMatch ? cursorMatch[0] : '';
  const withoutCursor = cursorHtml ? full.replace(cursorHtml, '') : full;

  // Split into tag-safe chunks so we never cut inside an HTML tag.
  const chunks = withoutCursor.match(/<[^>]+>|[^<]/g) || [];
  codeEl.innerHTML = '';
  let i = 0;

  function step() {
    if (i >= chunks.length) {
      codeEl.insertAdjacentHTML('beforeend', cursorHtml);
      return;
    }
    codeEl.insertAdjacentHTML('beforeend', chunks[i]);
    i += 1;
    requestAnimationFrame(() => setTimeout(step, 6));
  }

  requestAnimationFrame(() => setTimeout(step, 250));
})();

// Reveal sections as they enter the viewport.
(function () {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const targets = document.querySelectorAll('.reveal');
  if (!targets.length) return;

  if (prefersReduced || !('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('in-view'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
  );

  targets.forEach((el) => observer.observe(el));
})();
