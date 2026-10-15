/* =====================================================================
   CONFIG : les seules valeurs à modifier pour mettre le site à jour.
   Un champ vide ('') est masqué sur le site.
   ===================================================================== */
const CONFIG = {
  firstName: 'Hugo',
  lastName: 'Perret',
  race703: 'Vichy',
  racesCount: '2',
  kmPerYear: '1000',
  ironmanDate: '2028-07-01T07:00:00',
  email: 'hperretcollaboration@hotmail.com',
  mediaKitUrl: '',            // ex : 'media-kit-hugo-perret.pdf' (fichier à placer à côté de index.html)
  socials: [
    { name: 'Instagram', count: '', url: '' },
    { name: 'YouTube',   count: '', url: '' },
    { name: 'TikTok',    count: '', url: '' },
    { name: 'Strava',    count: '', url: '' },
  ],
};

/* =====================================================================
   TEXTES FR / EN
   ===================================================================== */
const I18N = {
  fr: {
    cta: 'Collaborons', kicker: 'Swiss triathlete · Ecublens, Suisse', heroA: 'Du bureau', heroB: "à l'Ironman.",
    heroSub: "40 heures par semaine derrière un bureau. 11 heures à l'entraînement. Et une ligne d'arrivée en ligne de mire : mon premier Ironman, en 2028. Votre marque peut être de l'aventure dès le premier jour.",
    heroCta2: 'La feuille de route', countdown: 'avant mon premier Ironman', perWeekShort: "d'entraînement / semaine", portraitTag: 'COMPTABLE · TRIATHLÈTE',
    storyLabel: 'Mon histoire', storyTitle: 'Pas un pro. Votre client.',
    story1: "Je m'appelle Hugo. Comptable à 100 % au CHUV, l'hôpital universitaire de Lausanne. Mes séances, je les cale à 6 h du matin, à la pause de midi et le soir après le bureau : environ 11 heures par semaine en saison.",
    story2: "En parallèle, je prépare l'examen de comptable spécialisé, en octobre 2027. Je mets la compétition en pause un an, je garde la base, puis je reviens avec un plan précis jusqu'à mon premier Ironman.",
    story3: "Ce quotidien, c'est celui de la majorité de vos clients. Je suis la preuve qu'on peut viser grand avec un agenda plein, et je le montre, séance après séance.",
    statsLabel: 'Chiffres clés', statsTitle: 'Les bases sont posées.', statsNote: "Résultats amateurs, en catégorie d'âge. Le meilleur reste à venir.",
    routeLabel: 'Feuille de route', routeTitle: '2026 → 2028 : un objectif, un calendrier.',
    comLabel: 'Communauté', comTitle: 'Arrivez au premier chapitre.',
    comBody: "Je lance ma création de contenu maintenant. Pour une marque, c'est le meilleur moment : vous faites partie de l'histoire depuis le début, votre visibilité grandit avec l'audience, et vous n'arrivez pas en dernier sur un athlète déjà sollicité de partout.",
    offLabel: 'Pour les marques', offTitle: 'Ce que je vous apporte.',
    whyLabel: 'Pourquoi moi', whyTitle: 'Pourquoi miser sur moi.',
    partLabel: 'Mes partenaires', partTitle: 'Votre marque ici ?', partCta: 'Soyez le premier →',
    galLabel: 'Galerie', galTitle: 'En mouvement.',
    conLabel: 'Contact', conSub: 'Vous avez un produit à faire tester, une gamme à mettre en avant, une saison à construire ? Parlons-en. Je réponds personnellement à chaque message.',
    conDirect: 'Email direct', conKit: 'Télécharger mon media kit (PDF)',
    fName: 'Nom', fBrand: 'Marque', fSend: 'Envoyer', sentTitle: 'Merci !',
    sentBody: "Votre messagerie devrait s'ouvrir avec le message prêt à partir. Si rien ne s'ouvre, écrivez-moi directement à cette adresse :",
    mailSubject: 'Collaboration', mailFrom: 'De', mailBrand: 'Marque',
    perWeek: "d'entraînement / semaine", perWeekSub: "en saison, en plus d'un emploi à 100 %", races: 'courses terminées', racesSub: 'dont un 70.3',
    km: 'km par an', kmSub: 'natation, vélo et course', followers: 'abonnés', goal: 'OBJECTIF',
    marquee: ['Nage 3,8 km', 'Vélo 180 km', 'Course 42,2 km', 'Objectif 11–12 h', 'Ironman 2028', 'Swiss triathlete'],
    route: [
      ['Oct. 2026 – oct. 2027', 'Formation & base', "Examen en ligne de mire, 3 séances par semaine pour garder le moteur chaud. Je lance le contenu en coulisses : la préparation, les doutes, la double vie. Le moment idéal pour embarquer."],
      ['Fin 2027', 'Retour au jeu', "Examen bouclé, l'entraînement structuré reprend. Volume en hausse, calendrier de courses verrouillé. Chaque semaine documentée, chaque produit testé en conditions réelles."],
      ['Saison 2028', 'Premier Ironman', "D'abord un 70.3 pour casser la barre des 5 heures. Ensuite, le grand saut : 3,8 km de nage, 180 km de vélo, 42,2 km de course. Premier Ironman à Tours ou à Thoune, été 2028. Objectif : franchir la ligne entre 11 et 12 heures."],
      ['Ensuite', 'Cap sur le pro', "Viser le statut de triathlète professionnel. Et un rêve que j'assume : devenir champion du monde. Les marques présentes dès le départ seront celles de toute l'histoire."],
    ],
    offers: [
      ['Ambassadeur 2028', "Votre marque au cœur d'une histoire de deux ans, de la reprise jusqu'à la ligne d'arrivée de l'Ironman. Une présence continue, pas un post isolé."],
      ['Création de contenu', "Reels, vidéos YouTube, coulisses : du contenu tourné à l'entraînement et en course, que vous pouvez aussi réutiliser sur vos propres canaux."],
      ['Visibilité en course', "Votre logo sur ma tenue, mon vélo et mon matériel, à chaque départ, sur chaque photo d'arrivée et dans chaque contenu qui en découle."],
      ['Tests produits', "11 heures par semaine, par tous les temps, du lac aux cols alpins. Des retours précis et honnêtes, venant de votre client type, pas d'un pro hors norme."],
    ],
    why: [
      ['Crédible', "Je vis exactement ce que vivent vos clients : un emploi à plein temps, peu de temps libre, de grandes ambitions. Quand je recommande un produit, ils me croient."],
      ['Une histoire à suivre', "Pas une simple vitrine : un récit sur deux ans, avec des enjeux, des obstacles et un point culminant, l'Ironman 2028. Le genre d'histoire qu'on suit jusqu'au bout."],
      ['Le marché suisse', "Un public au pouvoir d'achat parmi les plus élevés d'Europe, passionné d'endurance, entre lac Léman et Alpes. Et une porte d'entrée vers la France voisine."],
    ],
  },
  en: {
    cta: "Let's work together", kicker: 'Swiss triathlete · Ecublens, Switzerland', heroA: 'From desk', heroB: 'to Ironman.',
    heroSub: '40 hours a week at a desk. 11 hours of training. And one finish line in sight: my first Ironman, in 2028. Your brand can be part of the journey from day one.',
    heroCta2: 'The roadmap', countdown: 'to my first Ironman', perWeekShort: 'training / week', portraitTag: 'ACCOUNTANT · TRIATHLETE',
    storyLabel: 'My story', storyTitle: 'Not a pro. Your customer.',
    story1: "I'm Hugo. Full-time accountant at CHUV, Lausanne's university hospital. I fit my training in at 6 am, over lunch and after work: around 11 hours a week in season.",
    story2: "On top of that, I'm preparing for the Swiss certified accountant exam in October 2027. I'm pausing racing for a year, holding my base, then coming back with a precise plan all the way to my first Ironman.",
    story3: "That daily life is the reality of most of your customers. I'm proof you can aim high with a full calendar, and I show it, one session at a time.",
    statsLabel: 'Key numbers', statsTitle: 'The foundations are set.', statsNote: 'Amateur, age-group results. The best is yet to come.',
    routeLabel: 'Roadmap', routeTitle: '2026 → 2028: one goal, one timeline.',
    comLabel: 'Community', comTitle: 'Join at chapter one.',
    comBody: "I'm launching my content now. For a brand, that's the best moment: you're part of the story from the start, your visibility grows with the audience, and you're not the last name on an athlete everyone already wants.",
    offLabel: 'For brands', offTitle: 'What I bring you.',
    whyLabel: 'Why me', whyTitle: 'Why bet on me.',
    partLabel: 'My partners', partTitle: 'Your brand here?', partCta: 'Be the first →',
    galLabel: 'Gallery', galTitle: 'In motion.',
    conLabel: 'Contact', conSub: "A product to test, a range to showcase, a season to build? Let's talk. I personally answer every message.",
    conDirect: 'Direct email', conKit: 'Download my media kit (PDF)',
    fName: 'Name', fBrand: 'Brand', fSend: 'Send', sentTitle: 'Thank you!',
    sentBody: "Your email app should open with the message ready to go. If nothing opens, write to me directly at:",
    mailSubject: 'Collaboration', mailFrom: 'From', mailBrand: 'Brand',
    perWeek: 'training / week', perWeekSub: 'in season, on top of a full-time job', races: 'races finished', racesSub: 'including a 70.3',
    km: 'km per year', kmSub: 'swim, bike and run', followers: 'followers', goal: 'GOAL',
    marquee: ['Swim 3.8 km', 'Bike 180 km', 'Run 42.2 km', 'Target 11–12 h', 'Ironman 2028', 'Swiss triathlete'],
    route: [
      ['Oct 2026 – Oct 2027', 'Study & base', 'Exam in sight, 3 sessions a week to keep the engine warm. I launch behind-the-scenes content: the prep, the doubts, the double life. The ideal moment to come on board.'],
      ['Late 2027', 'Back in the game', 'Exam done, structured training resumes. Volume up, race calendar locked. Every week documented, every product tested in real conditions.'],
      ['2028 season', 'First Ironman', 'First, a 70.3 to break the 5-hour barrier. Then the big leap: 3.8 km swim, 180 km bike, 42.2 km run. My first Ironman in Tours or Thun, summer 2028. The goal: cross the line in 11 to 12 hours.'],
      ['Then', 'Going pro', "Aim for professional triathlete status. And a dream I'm not shy about: becoming world champion. The brands there from the start will be the brands of the whole story."],
    ],
    offers: [
      ['2028 ambassador', 'Your brand at the heart of a two-year story, from comeback to the Ironman finish line. Ongoing presence, not a one-off post.'],
      ['Content creation', 'Reels, YouTube videos, behind the scenes: content shot in training and racing that you can also reuse on your own channels.'],
      ['Race-day visibility', 'Your logo on my kit, bike and gear, at every start line, in every finish photo and every piece of content that follows.'],
      ['Product testing', '11 hours a week, in all weather, from the lake to Alpine passes. Precise, honest feedback from your typical customer, not an outlier pro.'],
    ],
    why: [
      ['Credible', 'I live exactly what your customers live: a full-time job, little free time, big ambitions. When I recommend a product, they believe me.'],
      ['A story to follow', 'Not just a showcase: a two-year story with stakes, obstacles and a climax, Ironman 2028. The kind of story people follow to the end.'],
      ['The Swiss market', "An audience with one of Europe's highest spending powers, passionate about endurance, between Lake Geneva and the Alps. And a gateway to neighbouring France."],
    ],
  },
};

/* =====================================================================
   LOGIQUE
   ===================================================================== */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const el = (tag, cls, text) => { const n = document.createElement(tag); if (cls) n.className = cls; if (text != null) n.textContent = text; return n; };
const num = v => { const n = parseFloat(String(v ?? '').replace(/[^\d.]/g, '')); return isNaN(n) ? null : n; };
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const state = { lang: 'fr', k: 0, step: 2 };
const fullName = [CONFIG.firstName, CONFIG.lastName].filter(Boolean).join(' ');

function initialLang() {
  try { const saved = localStorage.getItem('lang'); if (saved === 'fr' || saved === 'en') return saved; } catch (e) {}
  return (navigator.language || 'fr').toLowerCase().startsWith('fr') ? 'fr' : 'en';
}

/* ---------- Rendu des textes ---------- */
function renderTexts() {
  const T = I18N[state.lang];
  document.documentElement.lang = state.lang;
  $$('[data-i18n]').forEach(n => { const v = T[n.dataset.i18n]; if (v != null) n.textContent = v; });
  $$('[data-lang]').forEach(b => b.classList.toggle('is-on', b.dataset.lang === state.lang));

  const track = $('[data-marquee]');
  track.replaceChildren(...[...T.marquee, ...T.marquee].map(w => el('span', null, w)));

  renderStats();
  renderRoute();
  renderList('offers', T.offers, ([title, body], i) => {
    const row = el('div', 'offer');
    const body2 = el('div', 'offer__body');
    body2.append(el('h3', 'display offer__title', title), el('p', 'offer__text', body));
    row.append(el('span', 'offer__n', `0${i + 1}`), body2);
    return row;
  });
  renderList('why', T.why, ([title, body], i) => {
    const item = el('div', 'why__item');
    item.append(el('span', 'why__n', `0${i + 1}`), el('h3', 'display', title), el('p', null, body));
    return item;
  });
  renderSocials();
}

function renderList(key, items, make) {
  $(`[data-list="${key}"]`).replaceChildren(...items.map(make));
}

/* ---------- Chiffres (compteurs animés) ---------- */
function renderStats() {
  const T = I18N[state.lang], k = state.k;
  const races = num(CONFIG.racesCount), km = num(CONFIG.kmPerYear);
  const m = Math.round(337 * k);
  const stats = [
    { value: `${Math.floor(m / 60)}h${String(m % 60).padStart(2, '0')}`, label: 'Ironman 70.3', sub: CONFIG.race703 },
    { value: `${Math.round(11 * k)} h`, label: T.perWeek, sub: T.perWeekSub },
    races != null && { value: String(Math.round(races * k)), label: T.races, sub: T.racesSub },
    km != null && { value: Math.round(km * k).toLocaleString(state.lang === 'fr' ? 'fr-CH' : 'en-GB'), label: T.km, sub: T.kmSub },
  ].filter(Boolean);
  renderList('stats', stats, s => {
    const box = el('div', 'stat');
    box.append(el('span', 'stat__value', s.value), el('span', 'stat__label', s.label));
    if (s.sub) box.append(el('span', 'stat__sub', s.sub));
    return box;
  });
}

function animateStats() {
  if (reducedMotion) { state.k = 1; renderStats(); return; }
  const t0 = performance.now(), dur = 1800;
  const tick = now => {
    const p = Math.min(1, (now - t0) / dur);
    state.k = 1 - Math.pow(1 - p, 3);
    renderStats();
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

/* ---------- Feuille de route ---------- */
function renderRoute() {
  const T = I18N[state.lang], R = T.route;
  renderList('route', R, ([date, title], i) => {
    const b = el('button', 'step');
    b.type = 'button';
    b.classList.toggle('is-on', i === state.step);
    b.classList.toggle('is-past', i <= state.step);
    b.classList.toggle('step--peak', i === 2);
    b.setAttribute('aria-pressed', i === state.step);
    const meta = el('span', 'step__meta');
    meta.append(el('span', null, date));
    if (i === 2) meta.append(el('span', 'step__badge', T.goal));
    b.append(el('span', 'step__dot'), meta, el('span', 'step__title', title));
    b.addEventListener('click', () => { state.step = i; renderRoute(); });
    return b;
  });
  const [date, title, body] = R[state.step];
  $('[data-sel-title]').textContent = title;
  $('[data-sel-date]').textContent = date;
  $('[data-sel-body]').textContent = body;
  $('[data-route-fill]').style.width = `${(state.step / (R.length - 1)) * 100}%`;
}

/* ---------- Réseaux sociaux (masqués tant qu'ils sont vides) ---------- */
function renderSocials() {
  const T = I18N[state.lang];
  const withCount = CONFIG.socials.filter(s => s.count);
  const withUrl = CONFIG.socials.filter(s => s.url);
  renderList('socials', withCount, s => {
    const a = el('a', 'social');
    a.href = s.url || '#contact';
    if (s.url) { a.target = '_blank'; a.rel = 'noopener'; }
    const head = el('span', 'social__head');
    head.append(el('span', null, s.name), el('span', null, '↗'));
    a.append(head, el('span', 'social__count', s.count), el('span', 'social__unit', T.followers));
    return a;
  });
  $('[data-list="socials"]').hidden = withCount.length === 0;
  renderList('socialPills', withUrl, s => {
    const a = el('a', null, s.name);
    a.href = s.url; a.target = '_blank'; a.rel = 'noopener';
    return a;
  });
}

/* ---------- Infos fixes ---------- */
function renderStatic() {
  $$('[data-fullname]').forEach(n => { n.textContent = fullName; });
  $$('[data-race]').forEach(n => { n.textContent = CONFIG.race703; });
  $('[data-year]').textContent = new Date().getFullYear();

  const target = new Date(CONFIG.ironmanDate);
  $('[data-days]').textContent = Math.max(0, Math.ceil((target - new Date()) / 864e5));

  const mail = $('[data-email]');
  mail.textContent = CONFIG.email;
  mail.href = `mailto:${CONFIG.email}`;
  $('[data-sent-email]').textContent = CONFIG.email;

  const kit = $('[data-mediakit]');
  if (CONFIG.mediaKitUrl) { kit.href = CONFIG.mediaKitUrl; kit.hidden = false; kit.setAttribute('download', ''); }
}

/* ---------- Formulaire : ouvre la messagerie avec le message prérempli ---------- */
function initForm() {
  const form = $('[data-form]');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const T = I18N[state.lang], d = new FormData(form);
    const brand = d.get('brand') || '';
    const subject = `${T.mailSubject}${brand ? ' · ' + brand : ''}`;
    const body = `${d.get('message') || ''}\n\n${T.mailFrom} : ${d.get('name')} <${d.get('email')}>${brand ? `\n${T.mailBrand} : ${brand}` : ''}`;
    window.location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    form.hidden = true;
    $('[data-sent]').hidden = false;
  });
}

/* ---------- Galerie : masque les photos absentes ---------- */
function initGallery() {
  const section = $('[data-gallery]');
  const items = $$('.gallery__item', section);
  let pending = items.length, loaded = 0;
  const done = () => { if (--pending === 0 && loaded === 0) section.hidden = true; };
  items.forEach(fig => {
    const img = $('img', fig);
    const ok = () => { loaded++; done(); };
    const ko = () => { fig.remove(); done(); };
    if (img.complete) { img.naturalWidth ? ok() : ko(); return; }
    img.addEventListener('load', ok, { once: true });
    img.addEventListener('error', ko, { once: true });
  });
}

/* ---------- Animations au scroll ---------- */
function initScroll() {
  const hero = $('[data-parallax]');
  if (!reducedMotion) {
    window.addEventListener('scroll', () => {
      if (window.scrollY < 1400) hero.style.transform = `translate3d(0,${window.scrollY * 0.12}px,0)`;
    }, { passive: true });
  }

  if (!('IntersectionObserver' in window)) { state.k = 1; renderStats(); return; }

  const statObs = new IntersectionObserver(es => {
    if (es.some(e => e.isIntersecting)) { statObs.disconnect(); animateStats(); }
  }, { threshold: .3 });
  statObs.observe($('[data-stats]'));

  if (reducedMotion) return;
  const revObs = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('reveal-in'); revObs.unobserve(e.target); }
  }), { threshold: .12 });
  const vh = window.innerHeight;
  $$('[data-reveal]').forEach(n => {
    if (n.getBoundingClientRect().top < vh) return;
    n.classList.add('reveal-init');
    revObs.observe(n);
  });
}

/* ---------- Démarrage ---------- */
state.lang = initialLang();
renderStatic();
renderTexts();
initForm();
initGallery();
initScroll();
$$('[data-lang]').forEach(b => b.addEventListener('click', () => {
  state.lang = b.dataset.lang;
  try { localStorage.setItem('lang', state.lang); } catch (e) {}
  renderTexts();
}));
