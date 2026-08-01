'use client';

import { useEffect, useRef } from 'react';

export default function DesignSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const wordRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const ledeRef = useRef<HTMLParagraphElement>(null);
  const boardRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const statsWrapRef = useRef<HTMLDivElement>(null);
  const moreRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const guidesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const q = (s: string) => section.querySelector<HTMLElement>(s);
    const qa = (s: string) => Array.from(section.querySelectorAll<HTMLElement>(s));
    const stage = stageRef.current;
    const word = wordRef.current;
    const intro = introRef.current;
    const eyebrow = eyebrowRef.current;
    const lines = qa('[data-dz-line]');
    const lede = ledeRef.current;
    const board = boardRef.current;
    const story = storyRef.current;
    const statsWrap = statsWrapRef.current;
    const more = moreRef.current;
    const next = nextRef.current;
    const guides = guidesRef.current;
    const items = qa('[data-dz-item]');
    const cards = items.map(it => it.querySelector<HTMLElement>('[data-dz-card]')!);
    const bands = items.map(it => it.querySelector<HTMLElement>('[data-dz-band]')!);
    const inners = items.map(it => it.querySelector<HTMLElement>('[data-dz-inner]')!);
    const infos = items.map(it => it.querySelector<HTMLElement>('[data-dz-info]')!);
    const views = items.map(it => it.querySelector<HTMLElement>('[data-dz-view]')!);
    const chips = items.map(it => Array.from(it.querySelectorAll<HTMLElement>('[data-dz-chip]')));
    const fills = qa('[data-dz-stepfill]');
    const stepLabels = qa('[data-dz-steplabel]');
    const stats = qa('[data-dz-stat]');
    const nums = qa('[data-dz-num]');
    if (!stage || items.length < 5 || !eyebrow || !lede || !intro || !word || !board || !story || !statsWrap || !more || !next) return;

    const seg = (x: number, a: number, b: number) => { const t = (x - a) / (b - a); return t < 0 ? 0 : t > 1 ? 1 : t; };
    const io = (t: number) => (t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
    const out3 = (t: number) => 1 - Math.pow(1 - t, 3);
    const out4 = (t: number) => 1 - Math.pow(1 - t, 4);
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const px = (n: number) => n.toFixed(2) + 'px';

    const plan = [
      { w: .40, r: .5625, x: .085, y: .20, rot: -1.1 },
      { w: .155, r: 1, x: .545, y: .085, rot: 1.6 },
      { w: .16, r: 1.25, x: .735, y: .30, rot: -1.8 },
      { w: .22, r: .62, x: .525, y: .55, rot: 1.1 },
      { w: .145, r: 1, x: .80, y: .60, rot: -.8 }
    ];
    const from = [
      { dx: 0, dy: 0, rot: 0 },
      { dx: 0, dy: .34, rot: 7 },
      { dx: .26, dy: 0, rot: -9 },
      { dx: -.24, dy: .1, rot: 6 },
      { dx: 0, dy: .3, rot: -7 }
    ];
    const drift = [{ x: 0, y: -18, r: .3 }, { x: -14, y: -6, r: -.6 }, { x: 10, y: 12, r: .8 }, { x: -8, y: 14, r: -.4 }, { x: 12, y: -10, r: .9 }];
    const statTargets = [{ to: 120, suffix: '+' }, { to: 48, suffix: '' }, { to: 340, suffix: 'M+' }];

    let hoverOn = false, hovered = -1;

    const paintHover = () => {
      items.forEach((it, i) => {
        const on = hoverOn && hovered === i;
        const dim = hoverOn && hovered > -1 && hovered !== i;
        if (inners[i]) {
          inners[i].style.transform = on ? 'translate3d(0,-7px,0) scale(1.02)' : 'translate3d(0,0,0) scale(1)';
          inners[i].style.filter = on ? 'brightness(1.08) contrast(1.06) saturate(1.05)' : dim ? 'brightness(.6)' : 'none';
        }
        if (infos[i]) infos[i].style.transform = on ? 'translate3d(0,-7px,0)' : 'translate3d(0,0,0)';
        if (views[i]) views[i].style.opacity = on ? '1' : '0';
        if (cards[i]) cards[i].style.boxShadow = on ? '0 44px 96px rgba(0,0,0,.66)' : cards[i].dataset.shadow || 'none';
      });
    };

    items.forEach((it, i) => {
      it.addEventListener('mouseenter', () => { if (!hoverOn) return; hovered = i; paintHover(); });
      it.addEventListener('mouseleave', () => { if (hovered !== i) return; hovered = -1; paintHover(); });
    });

    let mode = '';

    const still = () => {
      section.style.height = 'auto';
      stage.style.position = 'relative';
      stage.style.height = 'auto';
      stage.style.overflow = 'visible';
      stage.style.display = 'flex';
      stage.style.flexDirection = 'column';
      stage.style.gap = 'clamp(34px,6vh,60px)';
      stage.style.padding = 'clamp(80px,12vh,140px) clamp(24px,6vw,60px) clamp(60px,9vh,110px)';
      word.style.display = 'none';
      next.style.display = 'none';
      [intro, board, story, statsWrap, more].forEach(el => {
        el.style.position = 'relative';
        el.style.inset = 'auto';
        el.style.left = 'auto'; el.style.right = 'auto'; el.style.top = 'auto'; el.style.bottom = 'auto';
        el.style.width = 'auto';
        el.style.transform = 'none';
        el.style.opacity = '1';
        el.style.pointerEvents = 'auto';
      });
      eyebrow.style.opacity = '1';
      lede.style.opacity = '1';
      lines.forEach(l => { l.style.transform = 'none'; });
      board.style.display = 'grid';
      board.style.gridTemplateColumns = 'repeat(auto-fit, minmax(230px, 1fr))';
      board.style.gap = 'clamp(18px,3vw,32px)';
      story.style.flexWrap = 'wrap';
      statsWrap.style.flexWrap = 'wrap';
      fills.forEach(f => { f.style.width = '100%'; });
      stepLabels.forEach(l => { l.style.color = '#93A0B4'; });
      stats.forEach(s => { s.style.opacity = '1'; });
      nums.forEach((n, i) => { n.textContent = statTargets[i].to + statTargets[i].suffix; });
      if (guides) guides.style.opacity = '0';
      items.forEach((it, i) => {
        it.style.position = 'relative';
        it.style.left = 'auto'; it.style.top = 'auto'; it.style.width = 'auto'; it.style.transform = 'none'; it.style.opacity = '1';
        cards[i].style.height = 'auto';
        cards[i].style.aspectRatio = i === 0 ? '16 / 9' : i === 2 ? '4 / 5' : i === 3 ? '16 / 10' : '1 / 1';
        cards[i].style.boxShadow = 'none';
        bands[i].style.top = '0';
        bands[i].style.height = '100%';
        infos[i].style.opacity = '1';
        chips[i].forEach(c => { c.style.opacity = '1'; });
      });
      hoverOn = true;
    };

    const live = () => {
      section.style.height = '820vh';
      stage.style.position = 'sticky';
      stage.style.height = '100vh';
      stage.style.overflow = 'hidden';
      stage.style.display = 'block';
      stage.style.padding = '0';
      word.style.display = 'block';
      next.style.display = 'flex';
      intro.style.position = 'absolute';
      intro.style.left = 'clamp(24px,6vw,60px)';
      intro.style.top = '50%';
      intro.style.width = 'min(92%, 1040px)';
      board.style.position = 'absolute';
      board.style.display = 'block';
      board.style.inset = '0';
      story.style.position = 'absolute';
      story.style.left = 'clamp(24px,6vw,60px)';
      story.style.right = 'clamp(24px,6vw,60px)';
      story.style.top = 'auto';
      story.style.bottom = 'clamp(84px,12vh,124px)';
      story.style.pointerEvents = 'none';
      statsWrap.style.position = 'absolute';
      statsWrap.style.left = 'clamp(24px,6vw,60px)';
      statsWrap.style.right = 'auto';
      statsWrap.style.top = 'auto';
      statsWrap.style.bottom = 'clamp(28px,4.4vh,52px)';
      statsWrap.style.pointerEvents = 'none';
      more.style.position = 'absolute';
      more.style.right = 'clamp(24px,6vw,60px)';
      more.style.left = 'auto';
      more.style.top = 'auto';
      more.style.bottom = 'clamp(28px,4.4vh,52px)';
      items.forEach((it, i) => { it.style.position = 'absolute'; cards[i].style.aspectRatio = 'auto'; });
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

      // Stage 1 — editorial introduction
      eyebrow.style.opacity = out3(seg(p2, .01, .05)).toFixed(3);
      lines.forEach((l, i) => {
        const t = out4(seg(p2, .035 + i * .07, .14 + i * .07));
        l.style.transform = 'translate3d(0,' + (110 - 110 * t).toFixed(2) + '%,0)';
      });
      const ld = out3(seg(p2, .20, .28));
      lede.style.opacity = ld.toFixed(3);
      lede.style.transform = 'translate3d(0,' + px(lerp(24, 0, ld)) + ',0)';

      const recede = io(seg(p2, .28, .46));
      const introOut = 1 - io(seg(p2, .46, .56));
      intro.style.transform = 'translate3d(0, calc(-50% + ' + px(lerp(0, -H * .3, recede)) + '), 0) scale(' + lerp(1, .56, recede).toFixed(4) + ')';
      intro.style.opacity = introOut.toFixed(3);
      word.style.transform = 'translate3d(-50%, calc(-50% + ' + px(lerp(0, -H * .08, p2)) + '), 0)';
      word.style.opacity = String(1 - io(seg(p2, .88, .96)));

      // Stage 2 — artwork unmasks
      const heroOpen = io(seg(p2, .27, .40));
      const heroGrow = io(seg(p2, .40, .52));
      const enter = [1, out3(seg(p2, .50, .625)), out3(seg(p2, .535, .665)), out3(seg(p2, .575, .705)), out3(seg(p2, .61, .745))];
      const lock = io(seg(p2, .855, .945));
      const collapse = io(seg(p2, .945, 1));
      const driftT = (Math.min(1, Math.max(0, (p2 - .72) / .14)) - .5) * 2 * (1 - lock);

      // aligned mood-board geometry
      const bw = W * .74, gap = Math.max(10, W * .013);
      const col = (bw - gap * 2) / 3;
      const r1 = col * .62, r2 = col * .84;
      const bx = (W - bw) / 2, by = (H - (r1 + gap + r2)) / 2 + H * .015;
      const grid = [
        { x: bx, y: by, w: col * 2 + gap, h: r1 },
        { x: bx + col * 2 + gap * 2, y: by, w: col, h: r1 },
        { x: bx, y: by + r1 + gap, w: col, h: r2 },
        { x: bx + col + gap, y: by + r1 + gap, w: col, h: r2 },
        { x: bx + col * 2 + gap * 2, y: by + r1 + gap, w: col, h: r2 }
      ];

      const focus = p2 < .78 ? 0 : p2 < .815 ? 2 : p2 < .85 ? 3 : -1;
      const railTop = story.getBoundingClientRect().top - sr.top;
      const floor = Math.max(H * .5, (railTop > 0 ? railTop : H) - 14);

      items.forEach((it, i) => {
        const pl = plan[i];
        let ew = W * pl.w, eh = ew * pl.r;
        const infoH = (infos[i].getBoundingClientRect().height || 120) + 18;
        const maxH = floor - H * pl.y - infoH - Math.abs(drift[i].y) - 10;
        if (eh > maxH) { eh = Math.max(80, maxH); ew = eh / pl.r; }
        const ex = W * pl.x, ey = H * pl.y;

        let x, y, w, h, rot;
        if (i === 0) {
          const cw = lerp(W * .17, ew, heroGrow);
          const ch = cw * pl.r;
          x = lerp((W - cw) / 2, ex, heroGrow);
          y = lerp(H * .52, ey, heroGrow);
          w = cw;
          h = ch * heroOpen;
          rot = lerp(0, pl.rot, heroGrow);
        } else {
          const f = from[i];
          x = lerp(ex + W * f.dx, ex, enter[i]);
          y = lerp(ey + H * f.dy, ey, enter[i]);
          w = ew; h = eh;
          rot = lerp(f.rot, pl.rot, enter[i]);
        }

        const g = grid[i];
        x = lerp(x, g.x, lock); y = lerp(y, g.y, lock);
        w = lerp(w, g.w, lock); h = lerp(h, g.h, lock);
        rot = lerp(rot, 0, lock);

        if (i === 0) {
          x = lerp(x, 0, collapse); y = lerp(y, 0, collapse);
          w = lerp(w, W, collapse); h = lerp(h, H, collapse);
        } else {
          x = lerp(x, (W - w * .6) / 2, collapse); y = lerp(y, (H - h * .6) / 2, collapse);
          w = lerp(w, w * .6, collapse); h = lerp(h, h * .6, collapse);
        }

        it.style.left = px(x + drift[i].x * driftT);
        it.style.top = px(y + drift[i].y * driftT);
        it.style.width = px(w);
        cards[i].style.height = px(Math.max(2, h));

        const bandH = i === 0 && heroOpen < .999 ? w * pl.r : Math.max(2, h);
        bands[i].style.height = px(bandH);
        bands[i].style.top = px((Math.max(2, h) - bandH) / 2);

        const emph = focus === -1 || i === focus || lock > .05 ? 1 : .66;
        const emScale = focus === -1 || i === focus || lock > .05 ? 1 : .972;
        it.style.transformOrigin = 'center center';
        it.style.transform = 'rotate(' + (rot + drift[i].r * driftT).toFixed(3) + 'deg) scale(' + emScale.toFixed(4) + ')';
        it.style.opacity = (i === 0 ? 1 : enter[i] < .015 ? 0 : emph * (i === 0 ? 1 : 1 - collapse * .85)).toFixed(3);
        it.style.zIndex = String(i === 0 ? (collapse > .02 ? 6 : 2) : 3);

        const lift = i === 0 ? heroOpen : enter[i];
        cards[i].dataset.shadow = '0 ' + px(30 * lift) + ' ' + px(74 * lift) + ' rgba(0,0,0,' + (.5 * lift).toFixed(3) + ')';

        const chipIn = out3(seg(p2, i === 0 ? .55 : .60 + i * .03, i === 0 ? .66 : .72 + i * .03)) * (1 - io(seg(p2, .86, .92)));
        chips[i].forEach((c, k) => { c.style.opacity = (chipIn * (k ? out3(seg(p2, .78, .86)) : 1)).toFixed(3); });

        const iv = out3(seg(p2, i === 0 ? .60 : .68 + i * .025, i === 0 ? .70 : .80 + i * .025));
        const fo = focus === -1 ? .28 : i === focus ? 1 : .22;
        infos[i].style.opacity = (iv * fo * (1 - io(seg(p2, .84, .90)))).toFixed(3);
        infos[i].style.width = px(Math.max(180, w));
      });

      if (guides) guides.style.opacity = (out3(seg(p2, .52, .60)) * (1 - io(seg(p2, .70, .78)))).toFixed(3);

      const storyIn = out3(seg(p2, .58, .66)) * (1 - io(seg(p2, .855, .91)));
      story.style.opacity = storyIn.toFixed(3);
      fills.forEach((f, i) => {
        const t = out3(seg(p2, .60 + i * .05, .70 + i * .05));
        f.style.width = (t * 100).toFixed(1) + '%';
        stepLabels[i].style.color = t > .6 ? '#D8DEEA' : '#55627A';
      });

      const statsIn = out3(seg(p2, .80, .87)) * (1 - io(seg(p2, .93, .97)));
      statsWrap.style.opacity = statsIn.toFixed(3);
      stats.forEach((s, i) => {
        const t = out3(seg(p2, .80 + i * .022, .90 + i * .022));
        s.style.opacity = (t * (1 - io(seg(p2, .93, .97)))).toFixed(3);
        s.style.transform = 'translate3d(0,' + px(lerp(22, 0, t)) + ',0)';
        nums[i].textContent = Math.round(statTargets[i].to * t) + (t > .995 ? statTargets[i].suffix : '');
      });

      const mo = out3(seg(p2, .74, .82)) * (1 - io(seg(p2, .90, .95)));
      more.style.opacity = mo.toFixed(3);
      more.style.pointerEvents = mo > .8 ? 'auto' : 'none';

      const nx = out3(seg(p2, .955, 1));
      next.style.opacity = nx.toFixed(3);
      next.style.transform = 'translate3d(0,' + px(lerp(44, 0, nx)) + ',0)';
      next.style.zIndex = '7';

      const csReal = document.querySelector<HTMLElement>('#case-studies [data-cs-intro]');
      let hand = 1;
      if (csReal) {
        const rr = csReal.getBoundingClientRect();
        hand = 1 - Math.min(1, Math.max(0, (window.innerHeight * .92 - rr.top) / (window.innerHeight * .5)));
      }
      next.style.opacity = (nx * hand).toFixed(3);

      const wantHover = p2 > .70 && p2 < .87;
      if (wantHover !== hoverOn) {
        hoverOn = wantHover;
        if (!hoverOn) hovered = -1;
        items.forEach(it => { it.style.pointerEvents = hoverOn ? 'auto' : 'none'; });
      }
      if (hovered === -1) paintHover();
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
  }, []);

  return (
    <section
      id="design"
      ref={sectionRef}
      data-dz-section="1"
      data-scene="1"
      style={{
        position: 'relative',
        zIndex: 5,
        marginTop: '-14vh',
        height: '820vh',
        background: 'linear-gradient(180deg, #05070B 0%, #080D18 44%, #05070B 100%)',
      }}
    >
      <div
        ref={stageRef}
        data-dz-stage="1"
        style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden' }}
      >
        {/* Ghost background text */}
        <div
          ref={wordRef}
          data-dz-word="1"
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate3d(-50%,-50%,0)',
            fontSize: 'clamp(90px,24vw,400px)',
            fontWeight: 800,
            letterSpacing: '-.06em',
            color: 'rgba(242,244,248,.03)',
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        >
          DE SIGN
        </div>

        {/* Editorial introduction */}
        <div
          ref={introRef}
          data-dz-intro="1"
          style={{
            position: 'absolute',
            left: 'clamp(24px,6vw,60px)',
            top: '50%',
            transform: 'translate3d(0,-50%,0)',
            width: 'min(92%, 1040px)',
            display: 'flex',
            flexDirection: 'column',
            gap: 'clamp(20px,3.4vh,44px)',
            transformOrigin: 'left center',
          }}
        >
          <span
            ref={eyebrowRef}
            data-dz-eyebrow="1"
            style={{ fontSize: 11, letterSpacing: '.3em', textTransform: 'uppercase', color: 'var(--accent)' }}
          >
            04 — Design &amp; Systems
          </span>

          <h2
            style={{
              margin: 0,
              fontSize: 'clamp(38px,6.2vw,108px)',
              fontWeight: 700,
              letterSpacing: '-.045em',
              lineHeight: .94,
              color: '#F2F4F8',
            }}
          >
            <span style={{ display: 'block', overflow: 'hidden' }}>
              <span data-dz-line="1" style={{ display: 'block', transform: 'translate3d(0,110%,0)' }}>
                The frame people
              </span>
            </span>
            <span style={{ display: 'block', overflow: 'hidden' }}>
              <span data-dz-line="1" style={{ display: 'block', transform: 'translate3d(0,110%,0)' }}>
                decide to <span style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: 'italic', fontWeight: 400 }}>click.</span>
              </span>
            </span>
          </h2>

          <p
            ref={ledeRef}
            data-dz-lede="1"
            style={{
              margin: 0,
              maxWidth: '38ch',
              fontSize: 'clamp(15px,1.4vw,21px)',
              lineHeight: 1.6,
              color: '#A7B2C4',
              opacity: 0,
            }}
          >
            YouTube thumbnails, podcast artwork, social design systems and launch collateral built for CTR, clarity and brand recall.
          </p>
        </div>

        {/* Design board stage */}
        <div ref={boardRef} data-dz-board="1" style={{ position: 'absolute', inset: 0 }}>
          {/* Item 0 - Norwood Clinics */}
          <div data-dz-item="0" style={{ position: 'absolute', left: 0, top: 0, width: 320 }}>
            <div data-dz-card="0" style={{ position: 'relative', overflow: 'hidden', background: '#0C1526' }}>
              <div data-dz-band="0" style={{ position: 'absolute', left: 0, right: 0, top: 0, height: '100%', overflow: 'hidden' }}>
                <div data-dz-inner="0" style={{ position: 'absolute', inset: 0, transformOrigin: 'center center', transition: 'transform 800ms cubic-bezier(.2,.7,.2,1), filter 600ms' }}>
                  <img
                    src="https://res.cloudinary.com/ts350ak2/image/upload/v1785494167/WhatsApp_Image_2026-07-31_at_2.34.48_PM_x4bfca.jpg"
                    alt="Norwood Clinics Thumbnail"
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              </div>
              <span data-dz-view="0" style={{ position: 'absolute', top: 12, right: 12, padding: '5px 11px', borderRadius: 999, background: 'rgba(8,9,13,.72)', backdropFilter: 'blur(6px)', fontSize: 9, letterSpacing: '.2em', textTransform: 'uppercase', color: '#D8DEEA', opacity: 0, pointerEvents: 'none', transition: 'opacity 300ms' }}>
                View system
              </span>
            </div>
            <div style={{ display: 'flex', gap: 6, paddingTop: 10 }}>
              <span data-dz-chip="0" style={{ padding: '4px 9px', border: '1px solid rgba(242,244,248,.14)', borderRadius: 3, fontSize: 9, letterSpacing: '.18em', textTransform: 'uppercase', color: '#A7B2C4', opacity: 0 }}>CTR: 11.4%</span>
              <span data-dz-chip="0" style={{ padding: '4px 9px', border: '1px solid rgba(242,244,248,.14)', borderRadius: 3, fontSize: 9, letterSpacing: '.18em', textTransform: 'uppercase', color: '#A7B2C4', opacity: 0 }}>420K VIEWS</span>
            </div>
            <div data-dz-info="0" style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 10, paddingTop: 10, opacity: 0, transition: 'transform 600ms cubic-bezier(.2,.7,.2,1)' }}>
              <span style={{ fontSize: 14, fontWeight: 600, color: '#F2F4F8' }}>Norwood Clinics</span>
              <span style={{ fontSize: 9, letterSpacing: '.18em', textTransform: 'uppercase', color: '#6C7A92' }}>YouTube Thumbnail</span>
            </div>
          </div>

          {/* Item 1 - The Long Game */}
          <div data-dz-item="1" style={{ position: 'absolute', left: 0, top: 0, width: 180 }}>
            <div data-dz-card="1" style={{ position: 'relative', overflow: 'hidden', background: '#0C1526' }}>
              <div data-dz-band="1" style={{ position: 'absolute', left: 0, right: 0, top: 0, height: '100%', overflow: 'hidden' }}>
                <div data-dz-inner="1" style={{ position: 'absolute', inset: 0, transformOrigin: 'center center', transition: 'transform 800ms cubic-bezier(.2,.7,.2,1), filter 600ms' }}>
                  <img
                    src="https://res.cloudinary.com/ts350ak2/image/upload/v1785494167/WhatsApp_Image_2026-07-31_at_2.34.47_PM_plfmhl.jpg"
                    alt="The Long Game Spotify"
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 6, paddingTop: 10 }}>
              <span data-dz-chip="1" style={{ padding: '4px 9px', border: '1px solid rgba(242,244,248,.14)', borderRadius: 3, fontSize: 9, letterSpacing: '.18em', textTransform: 'uppercase', color: '#A7B2C4', opacity: 0 }}>SPOTIFY</span>
            </div>
            <div data-dz-info="1" style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 10, paddingTop: 10, opacity: 0, transition: 'transform 600ms cubic-bezier(.2,.7,.2,1)' }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: '#F2F4F8' }}>The Long Game</span>
              <span style={{ fontSize: 9, letterSpacing: '.18em', textTransform: 'uppercase', color: '#6C7A92' }}>Podcast Cover</span>
            </div>
          </div>

          {/* Item 2 - Kindra */}
          <div data-dz-item="2" style={{ position: 'absolute', left: 0, top: 0, width: 190 }}>
            <div data-dz-card="2" style={{ position: 'relative', overflow: 'hidden', background: '#0C1526' }}>
              <div data-dz-band="2" style={{ position: 'absolute', left: 0, right: 0, top: 0, height: '100%', overflow: 'hidden' }}>
                <div data-dz-inner="2" style={{ position: 'absolute', inset: 0, transformOrigin: 'center center', transition: 'transform 800ms cubic-bezier(.2,.7,.2,1), filter 600ms' }}>
                  <img
                    src="https://res.cloudinary.com/ts350ak2/image/upload/v1785494167/WhatsApp_Image_2026-07-31_at_2.34.49_PM_du5z6r.jpg"
                    alt="Kindra Carousel"
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 6, paddingTop: 10 }}>
              <span data-dz-chip="2" style={{ padding: '4px 9px', border: '1px solid rgba(242,244,248,.14)', borderRadius: 3, fontSize: 9, letterSpacing: '.18em', textTransform: 'uppercase', color: '#A7B2C4', opacity: 0 }}>CAROUSEL</span>
            </div>
            <div data-dz-info="2" style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 10, paddingTop: 10, opacity: 0, transition: 'transform 600ms cubic-bezier(.2,.7,.2,1)' }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: '#F2F4F8' }}>Kindra</span>
              <span style={{ fontSize: 9, letterSpacing: '.18em', textTransform: 'uppercase', color: '#6C7A92' }}>Social Carousel</span>
            </div>
          </div>

          {/* Item 3 - Sol & Grain */}
          <div data-dz-item="3" style={{ position: 'absolute', left: 0, top: 0, width: 220 }}>
            <div data-dz-card="3" style={{ position: 'relative', overflow: 'hidden', background: '#0C1526' }}>
              <div data-dz-band="3" style={{ position: 'absolute', left: 0, right: 0, top: 0, height: '100%', overflow: 'hidden' }}>
                <div data-dz-inner="3" style={{ position: 'absolute', inset: 0, transformOrigin: 'center center', transition: 'transform 800ms cubic-bezier(.2,.7,.2,1), filter 600ms' }}>
                  <img
                    src="https://res.cloudinary.com/ts350ak2/image/upload/v1785486928/5_hw5ng6.png"
                    alt="Sol & Grain Campaign"
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 6, paddingTop: 10 }}>
              <span data-dz-chip="3" style={{ padding: '4px 9px', border: '1px solid rgba(242,244,248,.14)', borderRadius: 3, fontSize: 9, letterSpacing: '.18em', textTransform: 'uppercase', color: '#A7B2C4', opacity: 0 }}>CAMPAIGN</span>
            </div>
            <div data-dz-info="3" style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 10, paddingTop: 10, opacity: 0, transition: 'transform 600ms cubic-bezier(.2,.7,.2,1)' }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: '#F2F4F8' }}>Sol &amp; Grain</span>
              <span style={{ fontSize: 9, letterSpacing: '.18em', textTransform: 'uppercase', color: '#6C7A92' }}>Ad Campaign</span>
            </div>
          </div>

          {/* Item 4 - Ledgerloop */}
          <div data-dz-item="4" style={{ position: 'absolute', left: 0, top: 0, width: 170 }}>
            <div data-dz-card="4" style={{ position: 'relative', overflow: 'hidden', background: '#0C1526' }}>
              <div data-dz-band="4" style={{ position: 'absolute', left: 0, right: 0, top: 0, height: '100%', overflow: 'hidden' }}>
                <div data-dz-inner="4" style={{ position: 'absolute', inset: 0, transformOrigin: 'center center', transition: 'transform 800ms cubic-bezier(.2,.7,.2,1), filter 600ms' }}>
                  <img
                    src="https://res.cloudinary.com/ts350ak2/image/upload/v1785486926/4_c5ql8a.png"
                    alt="Ledgerloop Social System"
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 6, paddingTop: 10 }}>
              <span data-dz-chip="4" style={{ padding: '4px 9px', border: '1px solid rgba(242,244,248,.14)', borderRadius: 3, fontSize: 9, letterSpacing: '.18em', textTransform: 'uppercase', color: '#A7B2C4', opacity: 0 }}>SYSTEM</span>
            </div>
            <div data-dz-info="4" style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 10, paddingTop: 10, opacity: 0, transition: 'transform 600ms cubic-bezier(.2,.7,.2,1)' }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: '#F2F4F8' }}>Ledgerloop</span>
              <span style={{ fontSize: 9, letterSpacing: '.18em', textTransform: 'uppercase', color: '#6C7A92' }}>Social System</span>
            </div>
          </div>
        </div>

        {/* Guides overlay */}
        <div ref={guidesRef} data-dz-guides="1" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0 }}>
          <div style={{ position: 'absolute', left: '12%', right: '12%', top: '24%', bottom: '24%', border: '1px dashed rgba(242,244,248,.1)' }} />
          <div style={{ position: 'absolute', left: '28%', top: '24%', bottom: '24%', borderLeft: '1px dashed rgba(242,244,248,.08)' }} />
          <div style={{ position: 'absolute', right: '28%', top: '24%', bottom: '24%', borderLeft: '1px dashed rgba(242,244,248,.08)' }} />
        </div>

        {/* Story progress rail */}
        <div ref={storyRef} data-dz-story="1" style={{ display: 'flex', alignItems: 'center', gap: 'clamp(14px,2vw,30px)', opacity: 0 }}>
          {['Concept', 'Iteration', 'Refinement', 'Final', 'Performance'].map((label, i) => (
            <div key={label} style={{ flex: '1 1 0', display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ height: 2, background: 'rgba(242,244,248,.12)' }}>
                <div data-dz-stepfill={i} style={{ height: '100%', width: '0%', background: 'var(--accent)' }} />
              </div>
              <span data-dz-steplabel={i} style={{ fontSize: 10, letterSpacing: '.2em', textTransform: 'uppercase', color: '#55627A' }}>
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Stats counter */}
        <div ref={statsWrapRef} data-dz-stats="1" style={{ display: 'flex', alignItems: 'center', gap: 'clamp(24px,4vw,56px)', opacity: 0 }}>
          {[
            { label: 'Thumbnails shipped' },
            { label: 'Campaign systems' },
            { label: 'Combined impressions' },
          ].map((item, i) => (
            <div key={i} data-dz-stat={i} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span data-dz-num={i} style={{ fontSize: 'clamp(24px,2.8vw,42px)', fontWeight: 700, letterSpacing: '-.035em', color: '#F2F4F8' }}>0</span>
              <span style={{ fontSize: 9, letterSpacing: '.2em', textTransform: 'uppercase', color: '#6C7A92' }}>{item.label}</span>
            </div>
          ))}
        </div>

        {/* More link */}
        <div ref={moreRef} data-dz-more="1" style={{ opacity: 0 }}>
          <a href="#portfolio" className="btn-outline">Explore design systems <span>→</span></a>
        </div>

        {/* Next chapter teaser */}
        <div
          ref={nextRef}
          data-dz-next="1"
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
            <span style={{ fontSize: 'clamp(22px,2.6vw,38px)', fontWeight: 700, letterSpacing: '-.03em', color: '#F2F4F8' }}>05 — Case Studies</span>
          </div>
          <span style={{ fontSize: 11, letterSpacing: '.2em', textTransform: 'uppercase', color: '#7A879C' }}>Scroll to keep watching ↓</span>
        </div>
      </div>
    </section>
  );
}
