'use client';

import { useEffect, useRef, useState } from 'react';

const copyKeys = ['challenge', 'research', 'direction', 'production', 'edit', 'author', 'role', 'company', 'logo'] as const;

const baseStory = {
  name: 'Aadicura Hospital',
  serif: 'Still Here',
  cat: 'Healthcare',
  year: '2026',
  lede: 'A 40-year-old hospital group with no voice online, in a city where patients choose by search.',
  challengeTitle: 'Excellent clinical outcomes. An invisible reputation.',
  challenge: 'Their content read like a compliance document. The best surgeons in the city were unknown ten minutes from the building, and every new patient arrived through a search result written by somebody else.',
  challengeTags: ['Brief — Feb 2025', '4 weeks embedded', 'No script'],
  researchTitle: 'A week of watching before a single frame.',
  research: 'Night shifts, handovers, waiting rooms. We logged the moments people actually remembered — and found the story wasn\'t the hospital, it was the handover at 3am.',
  researchQuote: '“Don\'t light it. Let the corridor do the work.”',
  researchNote: 'Director’s note — day 02',
  directionTitle: 'One camera, always moving with someone.',
  direction: 'No tripods, no interviews to camera, no music until the final pass. The grade stays cold in the corridors and warms only in the rooms where people recover.',
  directionTags: ['Shot list — 34 setups', 'Grade — Log C, cold to warm', 'Sound — location only'],
  productionCaption: 'Twelve shoot days across two hospitals, filmed around real rounds — the crew moved when the team moved.',
  productionTags: ['Crew of 6', '2 hospitals', '86 hours of rushes', 'Zero staged scenes'],
  editTitle: 'Drag it. Same hospital, both years.',
  edit: '86 hours of rushes became a 4:12 anchor film, twelve doctor-led verticals and a thumbnail system their own team now runs.',
  editTags: ['Cut 07 — approved', 'Runtime 04:12'],
  quoteText: '“They spent a week watching how we worked before filming anything.”',
  author: 'Dr. Meera Kulkarni',
  role: 'Director of Communications',
  company: 'Aadicura Hospital',
  logo: 'ASTER',
  metrics: [
    { to: 312, dec: 0, pre: '+', suf: '%', label: 'Enquiries from social' },
    { to: 8.4, dec: 1, pre: '', suf: 'M', label: 'Views in two quarters' },
    { to: 4, dec: 0, pre: '', suf: '', label: 'Specialists booked out' }
  ]
};

const stories = [
  baseStory,
  {
    name: 'Ledgerloop', serif: 'The Explainer', cat: 'Startups', year: '2026',
    lede: 'A Series A fintech whose founder knew the category better than anyone, and had never said it out loud.',
    challengeTitle: 'Brilliant product. Unquotable founder.',
    challenge: 'Every investor call started from zero because nothing they had published explained the idea in under a minute.',
    challengeTags: ['Deck sizzle', '8 Explainers', 'Series A'],
    researchTitle: 'Eight questions asked on every investor call.',
    research: 'We sat through four sales calls and three investor meetings and wrote down the eight questions that came up every single time.',
    researchQuote: '“Answer the question before they finish asking it.”',
    researchNote: 'Strategy note — week 01',
    directionTitle: 'One interview setup, four locations, zero jargon.',
    direction: 'Whiteboard when the words run out, cut to product when the proof lands. Fast cuts, zero fluff.',
    directionTags: ['Whiteboard setup', 'Product cuts', 'Zero jargon'],
    productionCaption: 'Two shoot days, one founder, eight explainers — filmed in the order the questions actually get asked.',
    productionTags: ['2 shoot days', '1 founder', '8 explainers', '4 locations'],
    editTitle: 'Eight explainers and a 90-second deck sizzle.',
    edit: 'Eight explainers, a 90-second sizzle for the pitch deck, and a vertical cutdown for every single question.',
    editTags: ['8 Verticals', '90s Sizzle'],
    quoteText: '“Our investors noticed the clarity before our customers did.”',
    author: 'Samir Patel', role: 'Co-founder', company: 'Ledgerloop', logo: 'LEDGERLOOP',
    metrics: [
      { to: 184, dec: 0, pre: '+', suf: '%', label: 'Inbound demo requests' },
      { to: 2.1, dec: 1, pre: '', suf: 'M', label: 'Views in two quarters' },
      { to: 9, dec: 0, pre: '', suf: '', label: 'Podcast invitations' }
    ]
  },
  {
    name: 'Kindra', serif: 'Nine Weeks', cat: 'Consumer brands', year: '2025',
    lede: 'A skincare launch with no ad budget, one shoot day and a founder who refused to fake anything.',
    challengeTitle: 'A crowded shelf. Zero paid budget.',
    challenge: 'A crowded shelf, no paid budget and a launch date that could not move. Everything had to come from a single day of filming.',
    challengeTags: ['1 shoot day', '34 assets', 'No ad spend'],
    researchTitle: 'Testing eleven hooks before filming a frame.',
    research: 'We tested the first three seconds of eleven hooks against their own audience before committing a single frame to the edit.',
    researchQuote: '“Macro texture over model faces.”',
    researchNote: 'Creative note — launch week',
    directionTitle: 'Macro texture, real hands, daylight only.',
    direction: 'The product is never introduced — it is always already in use. Natural lighting, real skin texture.',
    directionTags: ['Macro lenses', 'Daylight only', 'Real skin'],
    productionCaption: 'One shoot day, 34 finished assets, three formats — planned as an edit before it was planned as a shoot.',
    productionTags: ['1 shoot day', '34 finished assets', '3 formats', 'Natural daylight'],
    editTitle: '34 assets sequenced into a nine-week calendar.',
    edit: 'Thirty-four assets from one day, sequenced into a nine-week launch calendar that sold out the first run.',
    editTags: ['34 assets', '9-week calendar'],
    quoteText: '“The most organised shoot I’ve been on. Sold out in nine weeks.”',
    author: 'Nadia Rao', role: 'Founder', company: 'Kindra', logo: 'KINDRA',
    metrics: [
      { to: 9, dec: 0, pre: '', suf: ' wks', label: 'Sold out in' },
      { to: 34, dec: 0, pre: '', suf: '', label: 'Assets, one shoot day' },
      { to: 4.6, dec: 1, pre: '', suf: 'M', label: 'Organic views' }
    ]
  },
  {
    name: 'Dr. Anaya Verma', serif: 'In Her Own Words', cat: 'Personal branding', year: '2026',
    lede: 'A specialist with a two-year waiting list and no public voice, in a field where trust is everything.',
    challengeTitle: 'Two-year waiting list. Zero public voice.',
    challenge: 'Patients arrived quoting other people. Her expertise existed entirely inside a consulting room and nowhere a search could find it.',
    challengeTags: ['Monthly cadence', '72 verticals', 'Consulting room'],
    researchTitle: 'Ten questions answered ten times a week.',
    research: 'We recorded the questions she answers ten times a week and built the entire content calendar out of them.',
    researchQuote: '“Talk the way you talk to a patient.”',
    researchNote: 'Producer note — session 01',
    directionTitle: 'Clinic light, no studio, no autocue.',
    direction: 'She talks the way she talks to a patient — the camera just stays out of the way. Authentic, clear, reassuring.',
    directionTags: ['Clinic light', 'No autocue', 'Natural audio'],
    productionCaption: 'One day a month, six verticals a session, filmed between clinics for a full year.',
    productionTags: ['1 day / month', '6 verticals / session', '12 months', 'Between clinics'],
    editTitle: '72 verticals across a year answering patient questions.',
    edit: 'Seventy-two verticals across a year, each one answering exactly one patient question with clarity.',
    editTags: ['72 verticals', 'Doubled waiting list'],
    quoteText: '“Six months in, patients quote our videos back in consultations.”',
    author: 'Dr. Anaya Verma', role: 'Consultant', company: 'Private practice', logo: 'A. VERMA',
    metrics: [
      { to: 27, dec: 0, pre: '', suf: 'k', label: 'New followers' },
      { to: 6.2, dec: 1, pre: '', suf: 'M', label: 'Views in a year' },
      { to: 3, dec: 0, pre: '', suf: ' wks', label: 'Waiting list, doubled' }
    ]
  }
];

export default function CaseStudiesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const heroBandRef = useRef<HTMLDivElement>(null);
  const heroOverRef = useRef<HTMLDivElement>(null);
  const heroNameRef = useRef<HTMLSpanElement>(null);
  const heroCatRef = useRef<HTMLSpanElement>(null);
  const heroYearRef = useRef<HTMLSpanElement>(null);
  const titlesRef = useRef<HTMLDivElement>(null);
  const t1Ref = useRef<HTMLSpanElement>(null);
  const t2Ref = useRef<HTMLSpanElement>(null);
  const tdescRef = useRef<HTMLParagraphElement>(null);
  const railRef = useRef<HTMLSpanElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const archiveHeadRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const scrimRef = useRef<HTMLDivElement>(null);
  const compareRef = useRef<HTMLDivElement>(null);
  const afterLayerRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);

  const [activeStory, setActiveStory] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const q = (s: string) => section.querySelector<HTMLElement>(s);
    const qa = (s: string) => Array.from(section.querySelectorAll<HTMLElement>(s));
    const stage = stageRef.current;
    const intro = introRef.current;
    const eyebrow = eyebrowRef.current;
    const lines = qa('[data-cs-line]');
    const nav = navRef.current;
    const pills = qa('[data-cs-pill]');
    const hero = heroRef.current;
    const heroBand = heroBandRef.current;
    const heroOver = heroOverRef.current;
    const heroName = heroNameRef.current;
    const heroCat = heroCatRef.current;
    const heroYear = heroYearRef.current;
    const titles = titlesRef.current;
    const t1 = t1Ref.current;
    const t2 = t2Ref.current;
    const tdesc = tdescRef.current;
    const panels = qa('[data-cs-panel]');
    const bits = panels.map(pn => Array.from(pn.querySelectorAll<HTMLElement>('[data-cs-bit]')));
    const rail = railRef.current;
    const dots = qa('[data-cs-dot]');
    const nodeLabels = qa('[data-cs-nodelabel]');
    const metrics = qa('[data-cs-metric]');
    const mnums = qa('[data-cs-mnum]');
    const mlabels = qa('[data-cs-mlabel]');
    const mbars = qa('[data-cs-mbar]');
    const quote = quoteRef.current;
    const qlines = qa('[data-cs-qline]');
    const qbits = qa('[data-cs-qbit]');
    const archiveHead = archiveHeadRef.current;
    const cards = qa('[data-cs-card]');
    const cardMedia = cards.map(c => c.querySelector<HTMLElement>('[data-cs-cardmedia]')!);
    const cardInner = cards.map(c => c.querySelector<HTMLElement>('[data-cs-cardinner]')!);
    const cardGrain = cards.map(c => c.querySelector<HTMLElement>('[data-cs-cardgrain]')!);
    const cardName = cards.map(c => c.querySelector<HTMLElement>('[data-cs-cardname]')!);
    const cardCat = cards.map(c => c.querySelector<HTMLElement>('[data-cs-cardcat]')!);
    const cardArrow = cards.map(c => c.querySelector<HTMLElement>('[data-cs-cardarrow]')!);
    const next = nextRef.current;
    const scrim = scrimRef.current;
    const compare = compareRef.current;
    const afterLayer = afterLayerRef.current;
    const handle = handleRef.current;

    if (!stage || !hero || panels.length < 6 || !intro || !eyebrow || !nav || !heroBand || !heroOver || !titles || !t1 || !t2 || !tdesc || !rail || !quote || !archiveHead || !next || !scrim) return;

    const seg = (x: number, a: number, b: number) => { const t = (x - a) / (b - a); return t < 0 ? 0 : t > 1 ? 1 : t; };
    const io = (t: number) => (t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
    const out3 = (t: number) => 1 - Math.pow(1 - t, 3);
    const out4 = (t: number) => 1 - Math.pow(1 - t, 4);
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const px = (n: number) => n.toFixed(2) + 'px';

    let hoverOn = false, hovered = -1;

    // Draggable before / after comparison
    if (compare && afterLayer && handle) {
      const setSplit = (clientX: number) => {
        const r = compare.getBoundingClientRect();
        const split = Math.min(96, Math.max(4, ((clientX - r.left) / r.width) * 100));
        afterLayer.style.clipPath = 'inset(0 0 0 ' + split.toFixed(2) + '%)';
        handle.style.left = split.toFixed(2) + '%';
      };
      let dragging = false;
      compare.addEventListener('pointerdown', (e) => { dragging = true; compare.setPointerCapture(e.pointerId); setSplit(e.clientX); });
      compare.addEventListener('pointermove', (e) => { if (dragging) setSplit(e.clientX); });
      compare.addEventListener('pointerup', (e) => { dragging = false; try { compare.releasePointerCapture(e.pointerId); } catch (err) {} });
      compare.addEventListener('pointercancel', () => { dragging = false; });
    }

    const paintHover = () => {
      cards.forEach((c, i) => {
        const on = hoverOn && hovered === i;
        const other = hoverOn && hovered > -1 && hovered !== i;
        if (cardInner[i]) {
          cardInner[i].style.transform = on ? 'scale(1.07)' : 'scale(1)';
          cardInner[i].style.filter = other ? 'brightness(.6)' : 'none';
        }
        if (cardGrain[i]) cardGrain[i].style.opacity = on ? '.8' : '0';
        if (cardName[i]) cardName[i].style.transform = on ? 'scale(1.06)' : 'scale(1)';
        if (cardCat[i]) cardCat[i].style.opacity = on ? '1' : '.6';
        if (cardArrow[i]) cardArrow[i].style.transform = on ? 'translate3d(7px,0,0)' : 'translate3d(0,0,0)';
        if (cardMedia[i]) cardMedia[i].style.boxShadow = on ? '0 40px 90px rgba(0,0,0,.6)' : 'none';
      });
    };

    cards.forEach((c, i) => {
      c.addEventListener('mouseenter', () => { if (!hoverOn) return; hovered = i; paintHover(); });
      c.addEventListener('mouseleave', () => { if (hovered !== i) return; hovered = -1; paintHover(); });
    });

    let mode = '';

    const still = () => {
      section.style.height = 'auto';
      stage.style.position = 'relative';
      stage.style.height = 'auto';
      stage.style.overflow = 'visible';
      stage.style.display = 'flex';
      stage.style.flexDirection = 'column';
      stage.style.gap = 'clamp(40px,7vh,80px)';
      stage.style.padding = 'clamp(80px,12vh,140px) clamp(24px,6vw,60px) clamp(60px,9vh,110px)';
      [intro, nav, hero, titles, quote].forEach(el => {
        el.style.position = 'relative';
        el.style.inset = 'auto';
        el.style.left = 'auto'; el.style.right = 'auto'; el.style.top = 'auto'; el.style.bottom = 'auto';
        el.style.width = 'auto';
        el.style.transform = 'none';
        el.style.opacity = '1';
        el.style.filter = 'none';
        el.style.pointerEvents = 'auto';
      });
      eyebrow.style.opacity = '1';
      lines.forEach(l => { l.style.transform = 'none'; });
      hero.style.height = 'auto';
      hero.style.visibility = 'visible';
      hero.style.aspectRatio = '21 / 9';
      heroBand.style.height = '100%';
      heroBand.style.top = '0';
      heroOver.style.opacity = '1';
      t1.style.transform = 'none';
      t2.style.transform = 'none';
      tdesc.style.opacity = '1';
      const chs = q('[data-cs-chapters]')!;
      chs.style.position = 'relative';
      chs.style.inset = 'auto';
      chs.style.display = 'flex';
      chs.style.flexDirection = 'column';
      chs.style.gap = 'clamp(40px,7vh,80px)';
      panels.forEach((pn, i) => {
        pn.style.position = 'relative';
        pn.style.inset = 'auto';
        pn.style.padding = '0';
        pn.style.opacity = '1';
        pn.style.clipPath = 'none';
        pn.style.transform = 'none';
        pn.style.filter = 'none';
        pn.style.visibility = 'visible';
        pn.style.pointerEvents = 'auto';
        bits[i].forEach(bt => { bt.style.opacity = '1'; bt.style.transform = 'none'; });
      });
      rail.style.width = '100%';
      dots.forEach(d => { d.style.background = 'var(--accent)'; d.style.transform = 'scale(1)'; });
      nodeLabels.forEach(l => { l.style.color = '#93A0B4'; });
      const curMetrics = stories[activeStory].metrics;
      metrics.forEach((m, i) => {
        m.style.opacity = '1';
        m.style.transform = 'none';
        if (curMetrics[i]) {
          mnums[i].textContent = curMetrics[i].pre + curMetrics[i].to.toFixed(curMetrics[i].dec) + curMetrics[i].suf;
        }
        mbars[i].style.width = '100%';
      });
      quote.style.background = 'transparent';
      quote.style.textAlign = 'left';
      quote.style.alignItems = 'flex-start';
      quote.style.padding = '0';
      qlines.forEach(l => { l.style.transform = 'none'; });
      qbits.forEach(bt => { bt.style.opacity = '1'; bt.style.transform = 'none'; });
      const arch = q('[data-cs-archive]')!;
      arch.style.position = 'relative';
      arch.style.inset = 'auto';
      arch.style.display = 'grid';
      arch.style.gridTemplateColumns = 'repeat(auto-fit, minmax(260px, 1fr))';
      arch.style.gap = 'clamp(22px,3vw,40px)';
      arch.style.pointerEvents = 'auto';
      archiveHead.style.position = 'relative';
      archiveHead.style.inset = 'auto';
      archiveHead.style.opacity = '1';
      archiveHead.style.gridColumn = '1 / -1';
      cards.forEach((c, i) => {
        c.style.position = 'relative';
        c.style.left = 'auto'; c.style.top = 'auto'; c.style.width = 'auto';
        c.style.opacity = '1';
        c.style.transform = 'none';
        cardMedia[i].style.height = 'auto';
        cardMedia[i].style.aspectRatio = '3 / 2';
      });
      next.style.display = 'none';
      hoverOn = true;
    };

    const live = () => {
      section.style.height = '1750vh';
      stage.style.position = 'sticky';
      stage.style.height = '100vh';
      stage.style.overflow = 'hidden';
      stage.style.display = 'block';
      stage.style.padding = '0';
      intro.style.position = 'absolute';
      intro.style.left = 'clamp(24px,6vw,60px)';
      intro.style.top = '50%';
      intro.style.width = 'min(92%, 1000px)';
      nav.style.position = 'absolute';
      nav.style.left = 'clamp(24px,6vw,60px)';
      nav.style.right = 'clamp(24px,6vw,60px)';
      nav.style.top = 'clamp(76px,11vh,116px)';
      hero.style.position = 'absolute';
      hero.style.aspectRatio = 'auto';
      titles.style.position = 'absolute';
      titles.style.left = 'clamp(24px,6vw,60px)';
      titles.style.right = 'clamp(24px,6vw,60px)';
      titles.style.top = '50%';
      const chs = q('[data-cs-chapters]')!;
      chs.style.position = 'absolute';
      chs.style.inset = '0';
      chs.style.display = 'block';
      panels.forEach(pn => {
        pn.style.position = 'absolute';
        pn.style.inset = '0';
        pn.style.padding = 'clamp(80px,11vh,120px) clamp(24px,6vw,60px) clamp(40px,6vh,72px)';
      });
      quote.style.position = 'absolute';
      quote.style.inset = '0';
      quote.style.textAlign = 'center';
      quote.style.alignItems = 'center';
      quote.style.padding = 'clamp(70px,10vh,110px) clamp(24px,8vw,120px)';
      const arch = q('[data-cs-archive]')!;
      arch.style.position = 'absolute';
      arch.style.inset = '0';
      arch.style.display = 'block';
      archiveHead.style.position = 'absolute';
      archiveHead.style.left = 'clamp(24px,6vw,60px)';
      archiveHead.style.right = 'clamp(24px,6vw,60px)';
      archiveHead.style.top = 'clamp(78px,11vh,118px)';
      cards.forEach((c, i) => { c.style.position = 'absolute'; cardMedia[i].style.aspectRatio = 'auto'; });
      next.style.display = 'flex';
    };

    const apply = () => {
      if (window.innerWidth < 900) {
        if (mode !== 'still') { mode = 'still'; still(); paintHover(); }
        return;
      }
      if (mode !== 'live') { mode = 'live'; live(); }

      const rect = section.getBoundingClientRect();
      const p2 = Math.min(1, Math.max(0, -rect.top / ((rect.height - window.innerHeight) || 1)));
      const sr = stage.getBoundingClientRect();
      const W = sr.width, H = sr.height;

      // Intro
      eyebrow.style.opacity = out3(seg(p2, .004, .03)).toFixed(3);
      lines.forEach((l, i) => {
        const t = out4(seg(p2, .02 + i * .042, .09 + i * .042));
        l.style.transform = 'translate3d(0,' + (110 - 110 * t).toFixed(2) + '%,0)';
      });
      const introUp = io(seg(p2, .15, .25));
      intro.style.transform = 'translate3d(0, calc(-50% + ' + px(lerp(0, -H * .26, introUp)) + '), 0) scale(' + lerp(1, .62, introUp).toFixed(4) + ')';
      intro.style.opacity = String(1 - io(seg(p2, .20, .27)));

      const navIn = out3(seg(p2, .11, .16)) * (1 - io(seg(p2, .848, .882)));
      nav.style.opacity = navIn.toFixed(3);
      nav.style.pointerEvents = navIn > .8 ? 'auto' : 'none';
      nav.style.transform = 'translate3d(0,' + px(lerp(-14, 0, out3(seg(p2, .11, .16)))) + ',0)';

      // Hero film strip
      const open = io(seg(p2, .13, .215));
      const widen = io(seg(p2, .205, .285));
      const recede = io(seg(p2, .42, .49));
      const toCard = io(seg(p2, .872, .908));

      const hw = lerp(W * .46, Math.min(W * .94, H * .74 * 21 / 9), widen);
      const filmH = hw * 9 / 21;
      const navBottom = nav.getBoundingClientRect().bottom - sr.top;
      let hx = (W - hw) / 2, hy = (H - filmH) / 2, hW = hw, hH = Math.max(2, filmH * open);

      const gapA = W * .03, cardW = (W * .88 - gapA * 2) / 3, cardX = W * .06, cardY = H * .30, mediaH = cardW * .62;
      const rScale = lerp(1, .78, recede);
      hW = lerp(hW * rScale, cardW, toCard);
      hH = lerp(hH * rScale, mediaH, toCard);
      hx = lerp((W - hW) / 2, cardX, toCard);
      const centred = (H - hH) / 2 - H * .02 * recede;
      const floorY = navIn > .05 ? Math.max(0, navBottom + 14) : 0;
      hy = lerp(Math.max(centred, Math.min(floorY, Math.max(0, H - hH - 16))), cardY, toCard);

      hero.style.left = px(hx);
      hero.style.top = px(hy);
      hero.style.width = px(hW);
      hero.style.height = px(hH);
      const bandH = open < .999 ? filmH : hH;
      heroBand.style.height = px(bandH);
      heroBand.style.top = px((hH - bandH) / 2);
      hero.style.filter = 'blur(' + (recede * 5 * (1 - toCard)).toFixed(2) + 'px) brightness(' + lerp(1, .5, recede * (1 - toCard)).toFixed(3) + ')';
      
      const heroHold = 1 - io(seg(p2, .432, .486));
      const heroBack = io(seg(p2, .874, .894));
      const heroOp = Math.max(lerp(1, .34, recede * (1 - toCard)) * heroHold, heroBack) * (1 - out3(seg(p2, .902, .924)));
      hero.style.opacity = heroOp.toFixed(3);
      hero.style.visibility = heroOp < .004 ? 'hidden' : 'visible';
      heroOver.style.opacity = (out3(seg(p2, .245, .30)) * (1 - io(seg(p2, .33, .40)))).toFixed(3);

      // Film title credits
      const tIn = out3(seg(p2, .29, .345));
      const t2In = out3(seg(p2, .345, .40));
      const dIn = out3(seg(p2, .40, .45));
      const tOut = 1 - io(seg(p2, .45, .50));
      titles.style.opacity = (Math.max(tIn, 0) * tOut).toFixed(3);
      titles.style.transform = 'translate3d(0, calc(-50% + ' + px(lerp(0, -H * .08, io(seg(p2, .43, .50)))) + '), 0)';
      t1.style.transform = 'translate3d(0,' + (110 - 110 * tIn).toFixed(2) + '%,0)';
      t2.style.transform = 'translate3d(0,' + (110 - 110 * t2In).toFixed(2) + '%,0)';
      tdesc.style.opacity = dIn.toFixed(3);
      tdesc.style.transform = 'translate3d(0,' + px(lerp(20, 0, dIn)) + ',0)';

      // 6 Chapters
      const cs = .47, cw = .058;
      panels.forEach((pn, i) => {
        const s = cs + i * cw, e = s + cw + .012;
        const L = seg(p2, s, e);
        const inT = io(seg(L, 0, .26));
        const outT = io(seg(L, .78, .96));
        if (L <= 0 || L >= 1 || outT >= 1) {
          pn.style.opacity = '0';
          pn.style.visibility = 'hidden';
          pn.style.pointerEvents = 'none';
          return;
        }
        pn.style.visibility = 'visible';
        pn.style.clipPath = 'inset(' + ((1 - inT) * 100).toFixed(2) + '% 0 0 0)';
        pn.style.transform = 'translate3d(0,' + px(lerp(H * .10, 0, inT) + lerp(0, -H * .06, outT)) + ',0) scale(' + lerp(1, .94, outT).toFixed(4) + ')';
        pn.style.filter = 'blur(' + (outT * 9).toFixed(2) + 'px)';
        pn.style.opacity = (Math.min(1, inT * 3) * (1 - outT)).toFixed(3);
        const isActive = L > .12 && L < .84;
        pn.style.pointerEvents = isActive ? 'auto' : 'none';
        bits[i].forEach((bt, k) => {
          const t = out3(seg(L, .12 + k * .038, .32 + k * .038));
          bt.style.opacity = t.toFixed(3);
          bt.style.transform = 'translate3d(0,' + px(lerp(30, 0, t)) + ',0)';
        });

        if (i === 5) {
          const rt = out3(seg(L, .16, .46));
          rail.style.width = (rt * 100).toFixed(1) + '%';
          dots.forEach((d, k) => {
            const on = rt >= (k + .6) / dots.length;
            d.style.background = on ? 'var(--accent)' : 'rgba(242,244,248,.22)';
            d.style.transform = on ? 'scale(1)' : 'scale(.7)';
            if (nodeLabels[k]) nodeLabels[k].style.color = on ? '#D8DEEA' : '#55627A';
          });
          const defs = stories[activeStory].metrics;
          defs.forEach((m, k) => {
            if (mnums[k] && mbars[k]) {
              const t = out3(seg(L, .22 + k * .035, .50 + k * .035));
              mnums[k].textContent = m.pre + (m.to * t).toFixed(m.dec) + (t > .995 ? m.suf : '');
              mbars[k].style.width = (t * 100).toFixed(1) + '%';
            }
          });
        }
      });

      // Quote interlude
      const qIn = out3(seg(p2, .828, .850));
      const qOut = 1 - io(seg(p2, .862, .880));
      const qop = qIn * qOut;
      quote.style.opacity = qop.toFixed(3);
      quote.style.background = 'rgba(3,4,8,' + (.9 * qop).toFixed(3) + ')';
      qlines.forEach((l, i) => {
        const t = out4(seg(p2, .830 + i * .008, .852 + i * .008));
        l.style.transform = 'translate3d(0,' + (110 - 110 * t).toFixed(2) + '%,0)';
      });
      qbits.forEach((bt, i) => {
        const t = out3(seg(p2, .850 + i * .005, .864 + i * .005));
        bt.style.opacity = (t * qOut).toFixed(3);
        bt.style.transform = 'translate3d(0,' + px(lerp(18, 0, t)) + ',0)';
      });

      // Archive cards
      const nxPre = out3(seg(p2, .988, 1));
      const csReal = document.querySelector<HTMLElement>('#branding [data-chapter-title-inner]');
      let handPre = 1;
      if (csReal) {
        const rp = csReal.getBoundingClientRect();
        handPre = 1 - Math.min(1, Math.max(0, (window.innerHeight * .92 - rp.top) / (window.innerHeight * .5)));
      }
      const csNv = nxPre * handPre;
      const ah = out3(seg(p2, .884, .908));
      archiveHead.style.opacity = (ah * (1 - .9 * csNv)).toFixed(3);
      archiveHead.style.pointerEvents = ah > .8 ? 'auto' : 'none';
      const par = Math.min(1, Math.max(0, (p2 - .948) / .04));
      cards.forEach((c, i) => {
        const t = out3(seg(p2, .898 + i * .008, .930 + i * .008));
        const x = cardX + (cardW + gapA) * i + (1 - t) * W * .5;
        const drift = (i % 2 ? -1 : 1) * par * 14;
        c.style.left = px(x);
        c.style.top = px(cardY + drift);
        c.style.width = px(cardW);
        if (cardMedia[i]) cardMedia[i].style.height = px(mediaH);
        c.style.opacity = (t * (1 - .9 * csNv)).toFixed(3);
      });
      const arch = q('[data-cs-archive]')!;
      arch.style.pointerEvents = p2 > .944 ? 'auto' : 'none';
      const wantHover = p2 > .944;
      if (wantHover !== hoverOn) { hoverOn = wantHover; if (!hoverOn) hovered = -1; }
      if (hovered === -1) paintHover();

      // Next chapter & scrim
      next.style.opacity = csNv.toFixed(3);
      next.style.transform = 'translate3d(0,' + px(lerp(44, 0, csNv)) + ',0)';
      next.style.pointerEvents = 'none';
      next.style.zIndex = '8';
      scrim.style.opacity = (csNv * .96).toFixed(3);
    };

    let queued = false;
    const onScroll = () => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(() => { queued = false; apply(); });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', apply);
    const interval = setInterval(apply, 700);
    apply();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', apply);
      clearInterval(interval);
    };
  }, [activeStory]);

  const selectStory = (index: number) => {
    setActiveStory(index);
  };

  const story = stories[activeStory];

  return (
    <section
      id="case-studies"
      ref={sectionRef}
      data-cs-section="1"
      data-scene="1"
      style={{
        position: 'relative',
        zIndex: 6,
        marginTop: '-14vh',
        height: '1750vh',
        background: '#04060A',
      }}
    >
      <div
        ref={stageRef}
        data-cs-stage="1"
        style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden' }}
      >
        {/* Scrim dark fade overlay */}
        <div
          ref={scrimRef}
          data-cs-scrim="1"
          style={{ position: 'absolute', inset: 0, background: '#05070B', opacity: 0, pointerEvents: 'none', zIndex: 7 }}
        />

        {/* Introduction typography */}
        <div
          ref={introRef}
          data-cs-intro="1"
          style={{
            position: 'absolute',
            left: 'clamp(24px,6vw,60px)',
            top: '50%',
            transform: 'translate3d(0,-50%,0)',
            width: 'min(92%, 1000px)',
            display: 'flex',
            flexDirection: 'column',
            gap: 'clamp(20px,3.4vh,44px)',
            transformOrigin: 'left center',
            pointerEvents: 'none',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 26 }}>
            <span
              ref={eyebrowRef}
              data-cs-eyebrow="1"
              style={{ fontSize: 11, letterSpacing: '.3em', textTransform: 'uppercase', color: 'var(--accent)', opacity: 0 }}
            >
              05 — Case Studies
            </span>

            <h2
              style={{
                margin: 0,
                fontSize: 'clamp(38px,6vw,104px)',
                fontWeight: 700,
                letterSpacing: '-.045em',
                lineHeight: .95,
                color: '#F2F4F8',
              }}
            >
              <span style={{ display: 'block', overflow: 'hidden', paddingBottom: '.04em' }}>
                <span data-cs-line="1" style={{ display: 'block', transform: 'translate3d(0,110%,0)' }}>
                  Proof,
                </span>
              </span>
              <span style={{ display: 'block', overflow: 'hidden', paddingBottom: '.04em' }}>
                <span data-cs-line="1" style={{ display: 'block', transform: 'translate3d(0,110%,0)' }}>
                  told as
                </span>
              </span>
              <span style={{ display: 'block', overflow: 'hidden', paddingBottom: '.06em' }}>
                <span data-cs-line="1" style={{ display: 'block', transform: 'translate3d(0,110%,0)', fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: 'italic', fontWeight: 400 }}>
                  a story.
                </span>
              </span>
            </h2>
          </div>
        </div>

        {/* Nav tabs for stories */}
        <div
          ref={navRef}
          data-cs-nav="1"
          style={{
            position: 'absolute',
            zIndex: 4,
            left: 'clamp(24px,6vw,60px)',
            right: 'clamp(24px,6vw,60px)',
            top: 'clamp(76px,11vh,116px)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: 10,
            opacity: 0,
          }}
        >
          {stories.map((s, i) => (
            <button
              key={i}
              data-cs-pill={i}
              onClick={() => selectStory(i)}
              style={{
                padding: '10px 18px',
                borderRadius: 999,
                border: i === activeStory ? '1px solid rgba(62,109,255,.55)' : '1px solid rgba(242,244,248,.16)',
                background: i === activeStory ? 'rgba(62,109,255,.16)' : 'transparent',
                color: i === activeStory ? '#F2F4F8' : '#A7B2C4',
                fontSize: 10,
                letterSpacing: '.18em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'background 500ms, border-color 500ms, color 500ms',
              }}
            >
              {s.cat}
            </button>
          ))}
        </div>

        {/* Hero film strip */}
        <div
          ref={heroRef}
          data-cs-hero="1"
          style={{
            position: 'absolute',
            zIndex: 1,
            left: 0,
            top: 0,
            width: 200,
            height: 2,
            overflow: 'hidden',
            background: '#0A0F1A',
            pointerEvents: 'none',
            willChange: 'transform, filter',
          }}
        >
          <div ref={heroBandRef} data-cs-heroband="1" style={{ position: 'absolute', left: 0, right: 0, top: 0, height: '100%', overflow: 'hidden' }}>
            {stories.map((s, i) => (
              <div
                key={i}
                data-cs-herolayer={i}
                style={{
                  position: 'absolute',
                  inset: 0,
                  opacity: i === activeStory ? 1 : 0,
                  transition: 'opacity 900ms cubic-bezier(.2,.7,.2,1)',
                }}
              >
                <img
                  src={
                    i === 0 ? "https://res.cloudinary.com/ts350ak2/image/upload/v1785488252/ChatGPT_Image_Jul_31_2026_02_27_07_PM_tvldb0.png" :
                    i === 1 ? "https://res.cloudinary.com/ts350ak2/image/upload/v1785494169/WhatsApp_Image_2026-07-31_at_2.34.46_PM_f1ofwi.jpg" :
                    i === 2 ? "https://res.cloudinary.com/ts350ak2/image/upload/v1785487016/4_ab0ehj.jpg" :
                    "https://res.cloudinary.com/ts350ak2/image/upload/v1785487254/9_1_drw2xh.jpg"
                  }
                  alt={s.name}
                  style={{ position: 'absolute', inset: 0, display: 'block', width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            ))}
            <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'linear-gradient(180deg, rgba(4,6,10,.5) 0%, transparent 34%, rgba(4,6,10,.82) 100%)' }} />
          </div>

          <div
            ref={heroOverRef}
            data-cs-heroover="1"
            style={{
              position: 'absolute',
              inset: 'auto 0 0 0',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              gap: 18,
              padding: 'clamp(20px,3vw,40px) clamp(20px,3vw,44px)',
              opacity: 0,
              pointerEvents: 'none',
            }}
          >
            <span ref={heroNameRef} data-cs-heroname="1" style={{ fontSize: 'clamp(20px,2.6vw,42px)', fontWeight: 700, letterSpacing: '-.03em', textTransform: 'uppercase' }}>
              {story.name}
            </span>
            <div style={{ display: 'flex', gap: 'clamp(14px,2vw,28px)' }}>
              <span ref={heroCatRef} data-cs-herocat="1" style={{ fontSize: 10, letterSpacing: '.24em', textTransform: 'uppercase', color: '#C3CBD9' }}>{story.cat}</span>
              <span ref={heroYearRef} data-cs-heroyear="1" style={{ fontSize: 10, letterSpacing: '.24em', textTransform: 'uppercase', color: '#C3CBD9' }}>{story.year}</span>
            </div>
          </div>
        </div>

        {/* Film credit titles sequence */}
        <div
          ref={titlesRef}
          data-cs-titles="1"
          style={{
            position: 'absolute',
            left: 'clamp(24px,6vw,60px)',
            right: 'clamp(24px,6vw,60px)',
            top: '50%',
            transform: 'translate3d(0,-50%,0)',
            display: 'flex',
            flexDirection: 'column',
            gap: 18,
            opacity: 0,
            pointerEvents: 'none',
          }}
        >
          <span style={{ display: 'block', overflow: 'hidden' }}>
            <span ref={t1Ref} data-cs-t1="1" style={{ display: 'block', fontSize: 'clamp(34px,5.6vw,96px)', fontWeight: 700, letterSpacing: '-.045em', lineHeight: 1, transform: 'translate3d(0,110%,0)' }}>
              {story.name}
            </span>
          </span>
          <span style={{ display: 'block', overflow: 'hidden' }}>
            <span ref={t2Ref} data-cs-t2="1" style={{ display: 'block', fontSize: 'clamp(30px,5vw,84px)', lineHeight: 1.05, color: '#E4E9F2', transform: 'translate3d(0,110%,0)', fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: 'italic', fontWeight: 400 }}>
              {story.serif}
            </span>
          </span>
          <p ref={tdescRef} data-cs-tdesc="1" style={{ margin: 0, maxWidth: '46ch', fontSize: 'clamp(14px,1.15vw,18px)', lineHeight: 1.7, color: '#A7B2C4', opacity: 0 }}>
            {story.lede}
          </p>
        </div>

        {/* Story Chapters */}
        <div data-cs-chapters="1" style={{ position: 'absolute', inset: 0 }}>
          {/* Chapter 0 - The Challenge */}
          <div data-cs-panel="0" style={{ position: 'absolute', inset: 0, padding: 'clamp(80px,11vh,120px) clamp(24px,6vw,60px) clamp(40px,6vh,72px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 'clamp(18px,2.6vh,32px)', opacity: 0, clipPath: 'inset(100% 0 0 0)', pointerEvents: 'none' }}>
            <div data-cs-bit="1" style={{ opacity: 0, display: 'flex', alignItems: 'center', gap: 14 }}>
              <span style={{ fontSize: 10, letterSpacing: '.26em', textTransform: 'uppercase', color: 'var(--accent)' }}>Chapter 01 — The challenge</span>
              <span style={{ flex: 1, height: 1, background: 'rgba(242,244,248,.12)' }} />
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'clamp(26px,4vw,64px)' }}>
              <div data-cs-bit="1" style={{ opacity: 0, flex: '0 0 clamp(180px,19vw,270px)', position: 'relative', aspectRatio: '4 / 5', overflow: 'hidden', background: '#0C1526' }}>
                <img src="https://res.cloudinary.com/ts350ak2/image/upload/v1785487014/5_rnslzq.png" alt="" style={{ position: 'absolute', inset: 0, display: 'block', width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ flex: '1 1 420px', display: 'flex', flexDirection: 'column', gap: 22 }}>
                <blockquote data-cs-bit="1" style={{ opacity: 0, margin: 0, fontSize: 'clamp(24px,3.2vw,54px)', lineHeight: 1.18, letterSpacing: '-.02em', color: '#F2F4F8', fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: 'italic', fontWeight: 400 }}>
                  {story.challengeTitle}
                </blockquote>
                <p data-cs-bit="1" style={{ opacity: 0, margin: 0, maxWidth: '56ch', fontSize: 'clamp(14px,1.05vw,16px)', lineHeight: 1.75, color: '#96A2B6' }}>
                  {story.challenge}
                </p>
                <div data-cs-bit="1" style={{ opacity: 0, display: 'flex', flexWrap: 'wrap', gap: 'clamp(16px,2vw,34px)' }}>
                  {story.challengeTags.map(tag => (
                    <span key={tag} style={{ fontSize: 10, letterSpacing: '.22em', textTransform: 'uppercase', color: '#6C7A92' }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Chapter 1 - Research */}
          <div data-cs-panel="1" style={{ position: 'absolute', inset: 0, padding: 'clamp(80px,11vh,120px) clamp(24px,6vw,60px) clamp(40px,6vh,72px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 'clamp(18px,2.6vh,32px)', opacity: 0, clipPath: 'inset(100% 0 0 0)', pointerEvents: 'none' }}>
            <div data-cs-bit="1" style={{ opacity: 0, display: 'flex', alignItems: 'center', gap: 14 }}>
              <span style={{ fontSize: 10, letterSpacing: '.26em', textTransform: 'uppercase', color: 'var(--accent)' }}>Chapter 02 — Research</span>
              <span style={{ flex: 1, height: 1, background: 'rgba(242,244,248,.12)' }} />
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(26px,4vw,60px)' }}>
              <div style={{ flex: '1 1 380px', display: 'flex', flexDirection: 'column', gap: 18 }}>
                <h3 data-cs-bit="1" style={{ opacity: 0, margin: 0, maxWidth: '26ch', fontSize: 'clamp(22px,2.6vw,42px)', fontWeight: 700, letterSpacing: '-.03em', lineHeight: 1.08 }}>
                  {story.researchTitle}
                </h3>
                <p data-cs-bit="1" style={{ opacity: 0, margin: 0, maxWidth: '52ch', fontSize: 'clamp(14px,1.05vw,16px)', lineHeight: 1.75, color: '#96A2B6' }}>
                  {story.research}
                </p>
                <div data-cs-bit="1" style={{ opacity: 0, display: 'flex', flexDirection: 'column', gap: 10, paddingLeft: 18, borderLeft: '1px solid rgba(62,109,255,.4)' }}>
                  <span style={{ fontSize: 'clamp(15px,1.5vw,22px)', lineHeight: 1.45, color: '#D8DEEA', fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: 'italic', fontWeight: 400 }}>{story.researchQuote}</span>
                  <span style={{ fontSize: 10, letterSpacing: '.22em', textTransform: 'uppercase', color: '#6C7A92' }}>{story.researchNote}</span>
                </div>
              </div>
              <div style={{ flex: '1 1 380px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                <span style={{ fontSize: 10, letterSpacing: '.22em', textTransform: 'uppercase', color: '#6C7A92' }}>Storyboards — sequence 04</span>
                <div style={{ display: 'flex', gap: 10 }}>
                  <div data-cs-bit="1" style={{ opacity: 0, display: 'flex', flexDirection: 'column', gap: 8, flex: '1 1 0', minWidth: 0 }}>
                    <div style={{ position: 'relative', aspectRatio: '16 / 9', overflow: 'hidden', border: '1px solid rgba(242,244,248,.12)', background: '#0C1526' }}>
                      <img src="https://res.cloudinary.com/ts350ak2/image/upload/v1785494167/WhatsApp_Image_2026-07-31_at_2.34.48_PM_x4bfca.jpg" alt="" style={{ position: 'absolute', inset: 0, display: 'block', width: '100%', height: '100%', objectFit: 'cover' }} />
                      <span style={{ position: 'absolute', top: 7, left: 8, fontSize: 8, letterSpacing: '.18em', textTransform: 'uppercase', color: 'rgba(242,244,248,.7)' }}>01</span>
                    </div>
                    <span style={{ fontSize: 9, letterSpacing: '.16em', textTransform: 'uppercase', color: '#55627A' }}>Corridor, wide</span>
                  </div>
                  <div data-cs-bit="1" style={{ opacity: 0, display: 'flex', flexDirection: 'column', gap: 8, flex: '1 1 0', minWidth: 0 }}>
                    <div style={{ position: 'relative', aspectRatio: '16 / 9', overflow: 'hidden', border: '1px solid rgba(242,244,248,.12)', background: '#0C1526' }}>
                      <img src="https://res.cloudinary.com/ts350ak2/image/upload/v1785494167/WhatsApp_Image_2026-07-31_at_2.34.47_PM_plfmhl.jpg" alt="" style={{ position: 'absolute', inset: 0, display: 'block', width: '100%', height: '100%', objectFit: 'cover' }} />
                      <span style={{ position: 'absolute', top: 7, left: 8, fontSize: 8, letterSpacing: '.18em', textTransform: 'uppercase', color: 'rgba(242,244,248,.7)' }}>02</span>
                    </div>
                    <span style={{ fontSize: 9, letterSpacing: '.16em', textTransform: 'uppercase', color: '#55627A' }}>Handover, close</span>
                  </div>
                  <div data-cs-bit="1" style={{ opacity: 0, display: 'flex', flexDirection: 'column', gap: 8, flex: '1 1 0', minWidth: 0 }}>
                    <div style={{ position: 'relative', aspectRatio: '16 / 9', overflow: 'hidden', border: '1px solid rgba(242,244,248,.12)', background: '#0C1526' }}>
                      <img src="https://res.cloudinary.com/ts350ak2/image/upload/v1785494167/WhatsApp_Image_2026-07-31_at_2.34.49_PM_du5z6r.jpg" alt="" style={{ position: 'absolute', inset: 0, display: 'block', width: '100%', height: '100%', objectFit: 'cover' }} />
                      <span style={{ position: 'absolute', top: 7, left: 8, fontSize: 8, letterSpacing: '.18em', textTransform: 'uppercase', color: 'rgba(242,244,248,.7)' }}>03</span>
                    </div>
                    <span style={{ fontSize: 9, letterSpacing: '.16em', textTransform: 'uppercase', color: '#55627A' }}>Exit, tracking</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Chapter 2 - Creative Direction */}
          <div data-cs-panel="2" style={{ position: 'absolute', inset: 0, padding: 'clamp(80px,11vh,120px) clamp(24px,6vw,60px) clamp(40px,6vh,72px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 'clamp(18px,2.6vh,32px)', opacity: 0, clipPath: 'inset(100% 0 0 0)', pointerEvents: 'none' }}>
            <div data-cs-bit="1" style={{ opacity: 0, display: 'flex', alignItems: 'center', gap: 14 }}>
              <span style={{ fontSize: 10, letterSpacing: '.26em', textTransform: 'uppercase', color: 'var(--accent)' }}>Chapter 03 — Creative direction</span>
              <span style={{ flex: 1, height: 1, background: 'rgba(242,244,248,.12)' }} />
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'clamp(26px,4vw,60px)' }}>
              <div data-cs-bit="1" style={{ opacity: 0, flex: '1 1 420px', position: 'relative', aspectRatio: '16 / 9', overflow: 'hidden', border: '1px solid rgba(242,244,248,.14)', background: '#0A0F1A' }}>
                <img src="https://res.cloudinary.com/ts350ak2/image/upload/v1785488252/ChatGPT_Image_Jul_31_2026_02_27_07_PM_tvldb0.png" alt="" style={{ position: 'absolute', inset: 0, display: 'block', width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(90deg, rgba(62,109,255,.2) 0 1px, transparent 1px 33.3%), repeating-linear-gradient(0deg, rgba(62,109,255,.2) 0 1px, transparent 1px 33.3%)', pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', left: '12%', top: '62%', right: '16%', height: 1, background: 'linear-gradient(90deg, rgba(242,244,248,.2), var(--accent))', pointerEvents: 'none' }} />
                <span style={{ position: 'absolute', right: '14%', top: 'calc(62% - 5px)', width: 0, height: 0, borderLeft: '9px solid var(--accent)', borderTop: '5px solid transparent', borderBottom: '5px solid transparent', pointerEvents: 'none' }} />
                <span style={{ position: 'absolute', left: '12%', top: 'calc(62% + 10px)', fontSize: 9, letterSpacing: '.18em', textTransform: 'uppercase', color: 'rgba(242,244,248,.75)' }}>Dolly left → right · 40mm</span>
              </div>
              <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: 18 }}>
                <h3 data-cs-bit="1" style={{ opacity: 0, margin: 0, maxWidth: '22ch', fontSize: 'clamp(20px,2.2vw,36px)', fontWeight: 700, letterSpacing: '-.028em', lineHeight: 1.1 }}>
                  {story.directionTitle}
                </h3>
                <p data-cs-bit="1" style={{ opacity: 0, margin: 0, maxWidth: '46ch', fontSize: 'clamp(13px,1vw,15px)', lineHeight: 1.7, color: '#96A2B6' }}>
                  {story.direction}
                </p>
                <div data-cs-bit="1" style={{ opacity: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {story.directionTags.map(tag => (
                    <span key={tag} style={{ fontSize: 10, letterSpacing: '.22em', textTransform: 'uppercase', color: '#6C7A92' }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Chapter 3 - Production */}
          <div data-cs-panel="3" style={{ position: 'absolute', inset: 0, padding: 'clamp(80px,11vh,120px) clamp(24px,6vw,60px) clamp(40px,6vh,72px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 'clamp(18px,2.6vh,32px)', opacity: 0, clipPath: 'inset(100% 0 0 0)', pointerEvents: 'none' }}>
            <div data-cs-bit="1" style={{ opacity: 0, display: 'flex', alignItems: 'center', gap: 14 }}>
              <span style={{ fontSize: 10, letterSpacing: '.26em', textTransform: 'uppercase', color: 'var(--accent)' }}>Chapter 04 — Production</span>
              <span style={{ flex: 1, height: 1, background: 'rgba(242,244,248,.12)' }} />
            </div>
            <div data-cs-bit="1" style={{ opacity: 0, position: 'relative', height: 'min(50vh, 430px)', overflow: 'hidden', background: '#0A0F1A' }}>
              <img src="https://res.cloudinary.com/ts350ak2/image/upload/v1785487254/9_1_drw2xh.jpg" alt="" style={{ position: 'absolute', inset: 0, display: 'block', width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'linear-gradient(180deg, rgba(4,6,10,.42), transparent 40%, rgba(4,6,10,.74))' }} />
              <div style={{ position: 'absolute', top: 16, left: 18, display: 'flex', gap: 14, pointerEvents: 'none' }}>
                <span style={{ fontSize: 10, letterSpacing: '.22em', textTransform: 'uppercase', color: '#6C7A92' }}>Day 03 / 12</span>
                <span style={{ fontSize: 10, letterSpacing: '.22em', textTransform: 'uppercase', color: '#6C7A92' }}>Sony FX6 · 40mm</span>
              </div>
              <span style={{ position: 'absolute', top: 16, right: 18, display: 'flex', alignItems: 'center', gap: 7, fontSize: 10, letterSpacing: '.22em', textTransform: 'uppercase', color: '#F2F4F8', pointerEvents: 'none' }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)' }} />REC
              </span>
              <p style={{ position: 'absolute', bottom: 18, left: 18, right: 18, margin: 0, maxWidth: '60ch', fontSize: 'clamp(13px,1vw,16px)', lineHeight: 1.65, color: '#C3CBD9' }}>
                {story.productionCaption}
              </p>
            </div>
            <div data-cs-bit="1" style={{ opacity: 0, display: 'flex', flexWrap: 'wrap', gap: 'clamp(22px,3.4vw,50px)' }}>
              {story.productionTags.map(tag => (
                <span key={tag} style={{ fontSize: 10, letterSpacing: '.22em', textTransform: 'uppercase', color: '#6C7A92' }}>{tag}</span>
              ))}
            </div>
          </div>

          {/* Chapter 4 - The Edit (Before/After Slider) */}
          <div data-cs-panel="4" style={{ position: 'absolute', inset: 0, padding: 'clamp(80px,11vh,120px) clamp(24px,6vw,60px) clamp(40px,6vh,72px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 'clamp(18px,2.6vh,32px)', opacity: 0, clipPath: 'inset(100% 0 0 0)', pointerEvents: 'none' }}>
            <div data-cs-bit="1" style={{ opacity: 0, display: 'flex', alignItems: 'center', gap: 14 }}>
              <span style={{ fontSize: 10, letterSpacing: '.26em', textTransform: 'uppercase', color: 'var(--accent)' }}>Chapter 05 — The edit</span>
              <span style={{ flex: 1, height: 1, background: 'rgba(242,244,248,.12)' }} />
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'clamp(24px,3.4vw,52px)' }}>
              <div data-cs-bit="1" style={{ opacity: 0, flex: '1 1 460px' }}>
                <div ref={compareRef} data-cs-compare="1" style={{ position: 'relative', aspectRatio: '16 / 9', overflow: 'hidden', background: '#0C1526', cursor: 'ew-resize', touchAction: 'none' }}>
                  <div style={{ position: 'absolute', inset: 0, filter: 'saturate(.35) brightness(.82)' }}>
                    <img src="https://res.cloudinary.com/ts350ak2/image/upload/v1785488439/Aadicura_hospital__sbh9bl.png" alt="" style={{ position: 'absolute', inset: 0, display: 'block', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                  </div>
                  <div ref={afterLayerRef} data-cs-after="1" style={{ position: 'absolute', inset: 0, clipPath: 'inset(0 0 0 50%)' }}>
                    <img src="https://res.cloudinary.com/ts350ak2/image/upload/v1785488437/Aadicura_hospital_vsrrd6.png" alt="" style={{ position: 'absolute', inset: 0, display: 'block', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                  </div>
                  <div ref={handleRef} data-cs-handle="1" style={{ position: 'absolute', top: 0, bottom: 0, left: '50%', width: 1, background: 'rgba(242,244,248,.8)', pointerEvents: 'none' }}>
                    <span style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', display: 'grid', placeItems: 'center', width: 38, height: 38, borderRadius: '50%', border: '1px solid rgba(242,244,248,.6)', background: 'rgba(4,6,10,.55)', backdropFilter: 'blur(6px)', fontSize: 11, color: '#F2F4F8' }}>↔</span>
                  </div>
                  <span style={{ position: 'absolute', bottom: 12, left: 14, fontSize: 9, letterSpacing: '.2em', textTransform: 'uppercase', color: 'rgba(242,244,248,.7)', pointerEvents: 'none' }}>Before — 2024</span>
                  <span style={{ position: 'absolute', bottom: 12, right: 14, fontSize: 9, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--accent)', pointerEvents: 'none' }}>After — 2026</span>
                </div>
              </div>
              <div style={{ flex: '1 1 280px', display: 'flex', flexDirection: 'column', gap: 16 }}>
                <h3 data-cs-bit="1" style={{ opacity: 0, margin: 0, maxWidth: '22ch', fontSize: 'clamp(20px,2.2vw,36px)', fontWeight: 700, letterSpacing: '-.028em', lineHeight: 1.1 }}>
                  {story.editTitle}
                </h3>
                <p data-cs-bit="1" style={{ opacity: 0, margin: 0, maxWidth: '44ch', fontSize: 'clamp(13px,1vw,15px)', lineHeight: 1.7, color: '#96A2B6' }}>
                  {story.edit}
                </p>
                <div data-cs-bit="1" style={{ opacity: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {story.editTags.map(tag => (
                    <span key={tag} style={{ fontSize: 10, letterSpacing: '.22em', textTransform: 'uppercase', color: '#6C7A92' }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Chapter 5 - Results */}
          <div data-cs-panel="5" style={{ position: 'absolute', inset: 0, padding: 'clamp(80px,11vh,120px) clamp(24px,6vw,60px) clamp(40px,6vh,72px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 'clamp(18px,2.6vh,32px)', opacity: 0, clipPath: 'inset(100% 0 0 0)', pointerEvents: 'none' }}>
            <div data-cs-bit="1" style={{ opacity: 0, display: 'flex', alignItems: 'center', gap: 14 }}>
              <span style={{ fontSize: 10, letterSpacing: '.26em', textTransform: 'uppercase', color: 'var(--accent)' }}>Chapter 06 — Results</span>
              <span style={{ flex: 1, height: 1, background: 'rgba(242,244,248,.12)' }} />
            </div>
            
            <div data-cs-bit="1" style={{ opacity: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ position: 'relative', height: 1, background: 'rgba(242,244,248,.12)' }}>
                <span ref={railRef} data-cs-rail="1" style={{ position: 'absolute', left: 0, top: 0, height: 1, width: '0%', background: 'var(--accent)' }} />
              </div>
              <div style={{ display: 'flex', gap: 'clamp(8px,1.2vw,20px)' }}>
                {['Research', 'Script', 'Storyboard', 'Shoot', 'Edit', 'Publish', 'Results'].map((node, k) => (
                  <div key={node} data-cs-node={k} style={{ display: 'flex', flexDirection: 'column', gap: 10, flex: '1 1 0', minWidth: 0 }}>
                    <span style={{ position: 'relative', display: 'block', height: 7 }}>
                      <span data-cs-dot={k} style={{ position: 'absolute', left: 0, top: 0, width: 7, height: 7, borderRadius: '50%', background: 'rgba(242,244,248,.22)', transform: 'scale(.7)' }} />
                    </span>
                    <span data-cs-nodelabel={k} style={{ fontSize: 9, letterSpacing: '.2em', textTransform: 'uppercase', color: '#55627A', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{node}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Metrics */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(22px,3.4vw,60px)', paddingTop: 'clamp(8px,2vh,22px)' }}>
              {story.metrics.map((m, i) => (
                <div key={i} data-cs-metric={i} style={{ opacity: 0, display: 'flex', flexDirection: 'column', gap: 10, flex: '1 1 0', minWidth: 0 }}>
                  <span data-cs-mnum={i} style={{ fontSize: 'clamp(30px,4vw,68px)', fontWeight: 700, letterSpacing: '-.045em', lineHeight: 1, color: '#F2F4F8' }}>0</span>
                  <span data-cs-mlabel={i} style={{ fontSize: 10, letterSpacing: '.2em', textTransform: 'uppercase', color: '#6C7A92' }}>{m.label}</span>
                  <span style={{ height: 2, background: 'rgba(242,244,248,.12)' }}>
                    <span data-cs-mbar={i} style={{ display: 'block', height: 2, width: '0%', background: 'var(--accent)' }} />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quote Interlude */}
        <div
          ref={quoteRef}
          data-cs-quote="1"
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'clamp(20px,3vh,40px)',
            padding: 'clamp(70px,10vh,110px) clamp(24px,8vw,120px)',
            textAlign: 'center',
            opacity: 0,
            pointerEvents: 'none',
          }}
        >
          <blockquote style={{ margin: 0, maxWidth: '26ch', fontSize: 'clamp(24px,4vw,68px)', lineHeight: 1.15, letterSpacing: '-.02em', color: '#F2F4F8', fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: 'italic', fontWeight: 400 }}>
            <span style={{ display: 'block', overflow: 'hidden' }}><span data-cs-qline="1" style={{ display: 'block', transform: 'translate3d(0,110%,0)' }}>{story.quoteText.split(' ').slice(0, 5).join(' ')}</span></span>
            <span style={{ display: 'block', overflow: 'hidden' }}><span data-cs-qline="1" style={{ display: 'block', transform: 'translate3d(0,110%,0)' }}>{story.quoteText.split(' ').slice(5, 9).join(' ')}</span></span>
            <span style={{ display: 'block', overflow: 'hidden' }}><span data-cs-qline="1" style={{ display: 'block', transform: 'translate3d(0,110%,0)' }}>{story.quoteText.split(' ').slice(9).join(' ')}</span></span>
          </blockquote>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 11 }}>
            <div data-cs-qbit="1" style={{ opacity: 0 }}>
              <div style={{ width: 62, height: 62, borderRadius: '50%', background: '#0C1526', border: '1px solid rgba(242,244,248,.18)', display: 'grid', placeItems: 'center', fontSize: 10, color: '#6C7A92', letterSpacing: '.1em' }}>PHOTO</div>
            </div>
            <span data-cs-qbit="1" style={{ opacity: 0, fontSize: 'clamp(14px,1.1vw,17px)', fontWeight: 600 }}>{story.author}</span>
            <span data-cs-qbit="1" style={{ opacity: 0, fontSize: 12, color: '#7A879C' }}>{story.role}</span>
            <span data-cs-qbit="1" style={{ opacity: 0, fontSize: 10, letterSpacing: '.26em', textTransform: 'uppercase', color: '#A7B2C4' }}>{story.company}</span>
            <span data-cs-qbit="1" style={{ opacity: 0, padding: '8px 16px', border: '1px solid rgba(242,244,248,.18)', borderRadius: 3, fontSize: 11, fontWeight: 700, letterSpacing: '.12em', color: '#D8DEEA' }}>{story.logo}</span>
          </div>
        </div>

        {/* Archive Cards Stage */}
        <div data-cs-archive="1" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <div ref={archiveHeadRef} data-cs-archivehead="1" style={{ position: 'absolute', left: 'clamp(24px,6vw,60px)', right: 'clamp(24px,6vw,60px)', top: 'clamp(78px,11vh,118px)', display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 18, opacity: 0 }}>
            <span style={{ fontSize: 10, letterSpacing: '.26em', textTransform: 'uppercase', color: 'var(--accent)' }}>The archive</span>
            <a href="#portfolio" className="btn-outline">Read the case study <span>→</span></a>
          </div>

          {[
            { name: 'Aadicura Hospital', cat: 'Healthcare', desc: '+312% enquiries from social in two quarters.', img: 'https://res.cloudinary.com/ts350ak2/image/upload/v1785488252/ChatGPT_Image_Jul_31_2026_02_27_07_PM_tvldb0.png' },
            { name: 'Kindra', cat: 'Consumer brands', desc: 'One shoot day, 34 assets, sold out in nine weeks.', img: 'https://res.cloudinary.com/ts350ak2/image/upload/v1785486928/5_hw5ng6.png' },
            { name: 'Ledgerloop', cat: 'Startups', desc: '8 explainers, Series A pitch deck sizzle film.', img: 'https://res.cloudinary.com/ts350ak2/image/upload/v1785486926/4_c5ql8a.png' },
          ].map((card, i) => (
            <a key={i} href="#portfolio" data-cs-card={i} style={{ position: 'absolute', left: 0, top: 0, display: 'block', width: 260, opacity: 0, color: 'inherit', textDecoration: 'none' }}>
              <div data-cs-cardmedia={i} style={{ position: 'relative', overflow: 'hidden', background: '#0C1526', height: 160 }}>
                <div data-cs-cardinner={i} style={{ position: 'absolute', inset: 0, transformOrigin: 'center center', transition: 'transform 900ms cubic-bezier(.2,.7,.2,1), filter 700ms' }}>
                  <img src={card.img} alt={card.name} style={{ position: 'absolute', inset: 0, display: 'block', width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div data-cs-cardgrain={i} style={{ position: 'absolute', inset: '-40%', opacity: 0, mixBlendMode: 'overlay', pointerEvents: 'none', transition: 'opacity 600ms', backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,.09) 0 1px, transparent 1px 2px), repeating-linear-gradient(90deg, rgba(255,255,255,.07) 0 1px, transparent 1px 3px)', animation: 'marca-grain 1.1s steps(3) infinite' }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12, paddingTop: 14 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                  <span data-cs-cardcat={i} style={{ fontSize: 9, letterSpacing: '.24em', textTransform: 'uppercase', color: '#6C7A92', opacity: .6, transition: 'opacity 500ms' }}>{card.cat}</span>
                  <h3 data-cs-cardname={i} style={{ margin: 0, fontSize: 'clamp(17px,1.6vw,25px)', fontWeight: 600, letterSpacing: '-.025em', color: '#F2F4F8' }}>{card.name}</h3>
                  <p style={{ margin: 0, maxWidth: '32ch', fontSize: 13, lineHeight: 1.6, color: '#8E9BB0' }}>{card.desc}</p>
                </div>
                <span data-cs-cardarrow={i} style={{ flex: '0 0 auto', fontSize: 14, color: 'var(--accent)', transition: 'transform 600ms cubic-bezier(.2,.7,.2,1)' }}>→</span>
              </div>
            </a>
          ))}
        </div>

        {/* Next chapter teaser */}
        <div
          ref={nextRef}
          data-cs-next="1"
          style={{
            position: 'absolute',
            left: 'clamp(24px,6vw,60px)',
            right: 'clamp(24px,6vw,60px)',
            bottom: 'clamp(36px,5vh,64px)',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: 20,
            opacity: 0,
            pointerEvents: 'none',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <span style={{ fontSize: 10, letterSpacing: '.26em', textTransform: 'uppercase', color: 'var(--accent)' }}>Up next</span>
            <span style={{ fontSize: 'clamp(22px,2.6vw,38px)', fontWeight: 700, letterSpacing: '-.03em', color: '#F2F4F8' }}>06 — Identity</span>
          </div>
          <span style={{ fontSize: 11, letterSpacing: '.2em', textTransform: 'uppercase', color: '#7A879C' }}>Scroll to keep watching ↓</span>
        </div>
      </div>
    </section>
  );
}
