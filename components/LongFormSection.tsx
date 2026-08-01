'use client';

import { useEffect, useRef } from 'react';

export default function LongFormSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const wordRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const ledeRef = useRef<HTMLParagraphElement>(null);
  const metaWrapRef = useRef<HTMLDivElement>(null);
  const filmsRef = useRef<HTMLDivElement>(null);
  const moreRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const q = (s: string) => section.querySelector<HTMLElement>(s);
    const qa = (s: string) => Array.from(section.querySelectorAll<HTMLElement>(s));
    const stage = stageRef.current;
    const word = wordRef.current;
    const intro = introRef.current;
    const eyebrow = eyebrowRef.current;
    const lines = qa('[data-lf-line]');
    const lede = ledeRef.current;
    const metaWrap = metaWrapRef.current;
    const films = filmsRef.current;
    const more = moreRef.current;
    const next = nextRef.current;
    const items = qa('[data-lf-item]');
    const wins = items.map(it => it.querySelector<HTMLElement>('[data-lf-win]')!);
    const bands = items.map(it => it.querySelector<HTMLElement>('[data-lf-band]')!);
    const inners = items.map(it => it.querySelector<HTMLElement>('[data-lf-inner]')!);
    const grains = items.map(it => it.querySelector<HTMLElement>('[data-lf-grain]')!);
    const progs = items.map(it => it.querySelector<HTMLElement>('[data-lf-prog]')!);
    const bars = items.map(it => it.querySelector<HTMLElement>('[data-lf-progbar]')!);
    const infos = items.map(it => it.querySelector<HTMLElement>('[data-lf-info]')!);
    if (!stage || items.length < 3 || !eyebrow || !lede || !intro || !word || !films || !more || !next || !metaWrap) return;

    const seg = (x: number, a: number, b: number) => { const t = (x - a) / (b - a); return t < 0 ? 0 : t > 1 ? 1 : t; };
    const io = (t: number) => (t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
    const out3 = (t: number) => 1 - Math.pow(1 - t, 3);
    const out4 = (t: number) => 1 - Math.pow(1 - t, 4);
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const px = (n: number) => n.toFixed(2) + 'px';
    const panelOf = [1, 0, 2];

    const plan = [
      { w: .42, r: .58, x: .29, y: .28 },
      { w: .235, r: 1.15, x: .045, y: .13 },
      { w: .265, r: .62, x: .705, y: .545 }
    ];
    const drift = [{ x: 0, y: -26 }, { x: -22, y: -8 }, { x: 8, y: 26 }];

    let hoverOn = false, hovered = -1;

    const paintHover = () => {
      items.forEach((it, i) => {
        const on = hoverOn && hovered === i;
        const dim = hoverOn && hovered > -1 && hovered !== i;
        if (inners[i]) {
          inners[i].style.transform = on ? 'translate3d(0,-6px,0) scale(1.02)' : 'translate3d(0,0,0) scale(1)';
          inners[i].style.filter = on ? 'brightness(1.14) contrast(1.04)' : dim ? 'brightness(.55)' : 'none';
        }
        if (grains[i]) {
          grains[i].style.opacity = on ? '.85' : grains[i].dataset.base || '0';
        }
        if (progs[i]) progs[i].style.opacity = on ? '1' : '0';
        if (bars[i]) {
          bars[i].style.transition = on ? 'width 3.4s linear' : 'width 300ms';
          bars[i].style.width = on ? '86%' : '30%';
        }
        if (infos[i]) infos[i].style.transform = on ? 'translate3d(0,-6px,0)' : 'translate3d(0,0,0)';
        if (wins[i]) wins[i].style.boxShadow = on ? '0 46px 110px rgba(0,0,0,.62)' : wins[i].dataset.shadow || 'none';
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
      stage.style.padding = 'clamp(80px,12vh,140px) clamp(24px,6vw,60px) clamp(60px,9vh,110px)';
      stage.style.display = 'flex';
      stage.style.flexDirection = 'column';
      stage.style.gap = 'clamp(36px,6vh,64px)';
      word.style.display = 'none';
      metaWrap.style.display = 'none';
      next.style.display = 'none';
      [intro, films, more].forEach(el => {
        el.style.position = 'relative';
        el.style.left = 'auto'; el.style.right = 'auto'; el.style.top = 'auto'; el.style.bottom = 'auto';
        el.style.inset = 'auto';
        el.style.width = 'auto';
        el.style.transform = 'none';
        el.style.opacity = '1';
      });
      eyebrow.style.opacity = '1';
      lede.style.opacity = '1';
      lines.forEach(l => { l.style.transform = 'none'; });
      films.style.display = 'grid';
      films.style.gridTemplateColumns = 'repeat(auto-fit, minmax(280px, 1fr))';
      films.style.gap = 'clamp(26px,4vw,46px)';
      items.forEach((it, i) => {
        it.style.position = 'relative';
        it.style.left = 'auto'; it.style.top = 'auto'; it.style.width = 'auto'; it.style.transform = 'none';
        wins[i].style.height = 'auto';
        wins[i].style.aspectRatio = i === 0 ? '21 / 9' : '16 / 9';
        wins[i].style.boxShadow = 'none';
        bands[i].style.top = '0';
        bands[i].style.height = '100%';
        infos[i].style.opacity = '1';
        infos[i].style.transform = 'none';
        grains[i].dataset.base = '.3';
        grains[i].style.opacity = '.3';
      });
      hoverOn = true;
    };

    const live = () => {
      section.style.height = '780vh';
      stage.style.position = 'sticky';
      stage.style.height = '100vh';
      stage.style.overflow = 'hidden';
      stage.style.padding = '0';
      stage.style.display = 'block';
      word.style.display = 'block';
      metaWrap.style.display = 'block';
      next.style.display = 'flex';
      intro.style.position = 'absolute';
      intro.style.left = 'clamp(24px,6vw,60px)';
      intro.style.top = '50%';
      intro.style.width = 'min(92%, 1080px)';
      films.style.position = 'absolute';
      films.style.display = 'block';
      films.style.inset = '0';
      more.style.position = 'absolute';
      more.style.right = 'clamp(24px,6vw,60px)';
      more.style.left = 'auto';
      more.style.bottom = 'clamp(26px,4vh,46px)';
      more.style.top = 'auto';
      items.forEach((it, i) => {
        it.style.position = 'absolute';
        wins[i].style.aspectRatio = 'auto';
      });
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
        const t = out4(seg(p2, .04 + i * .075, .15 + i * .075));
        l.style.transform = 'translate3d(0,' + (110 - 110 * t).toFixed(2) + '%,0)';
      });
      const ld = out3(seg(p2, .23, .32));
      lede.style.opacity = ld.toFixed(3);
      lede.style.transform = 'translate3d(0,' + px(lerp(26, 0, ld)) + ',0)';

      const recede = io(seg(p2, .34, .54));
      const introOut = 1 - io(seg(p2, .56, .66));
      intro.style.transform = 'translate3d(0, calc(-50% + ' + px(lerp(0, -H * .3, recede)) + '), 0) scale(' + lerp(1, .58, recede).toFixed(4) + ')';
      intro.style.opacity = introOut.toFixed(3);

      word.style.transform = 'translate3d(-50%, calc(-50% + ' + px(lerp(0, -H * .09, p2)) + '), 0)';

      const open = io(seg(p2, .33, .47));
      const widen = io(seg(p2, .47, .58));
      const shrink = io(seg(p2, .62, .78));
      const merge = io(seg(p2, .90, 1));
      const enter = [1, out3(seg(p2, .62, .745)), out3(seg(p2, .655, .805))];
      const driftT = (Math.min(1, Math.max(0, (p2 - .74) / .16)) - .5) * 2 * (1 - merge);

      const heroW = lerp(W * .44, Math.min(W * .86, H * .66 * 21 / 9), widen);
      const heroFilmH = heroW * 9 / 21;
      const heroWinH = Math.max(2, heroFilmH * open);

      const MW = lerp(Math.min(W * .86, H * .66 * 21 / 9), W, merge);
      const MH = lerp(MW * 9 / 21, H, merge);
      const mx = (W - MW) / 2, my = (H - MH) / 2, mw = MW / 3;

      const focus = p2 < .795 ? 0 : p2 < .855 ? 1 : 2;

      items.forEach((it, i) => {
        const pl = plan[i];
        let ew = W * pl.w;
        let eh = ew * pl.r;
        const infoH = (infos[i].getBoundingClientRect().height || 150) + 20;
        const room = H - H * pl.y - infoH - Math.abs(drift[i].y) - 12;
        if (eh > room) { eh = Math.max(90, room); ew = Math.min(ew, eh / pl.r); }
        const need = eh + infoH + Math.abs(drift[i].y) + 12;
        const ex = W * pl.x, ey = Math.min(H * pl.y, Math.max(H * .055, H - need));

        let x, y, w, h;
        if (i === 0) {
          const cw = heroW, ch = heroWinH;
          x = lerp((W - cw) / 2, ex, shrink);
          y = lerp((H - ch) / 2, ey, shrink);
          w = lerp(cw, ew, shrink);
          h = lerp(ch, eh, shrink);
        } else {
          const fromX = i === 1 ? -ew - W * .06 : W + W * .06;
          const fromY = i === 1 ? ey - H * .07 : ey + H * .09;
          x = lerp(fromX, ex, enter[i]);
          y = lerp(fromY, ey, enter[i]);
          w = ew; h = eh;
        }

        const panel = panelOf[i];
        x = lerp(x, mx + mw * panel, merge);
        y = lerp(y, my, merge);
        w = lerp(w, mw, merge);
        h = lerp(h, MH, merge);

        it.style.left = px(x + drift[i].x * driftT);
        it.style.top = px(y + drift[i].y * driftT);
        it.style.width = px(w);
        wins[i].style.height = px(h);

        const bandH = i === 0 && open < .999 ? heroFilmH : h;
        bands[i].style.height = px(bandH);
        bands[i].style.top = px((h - bandH) / 2);

        const em = i === focus || merge > .04 ? 1 : .62;
        const emScale = i === focus || merge > .04 ? 1 : .965;
        it.style.opacity = (i === 0 ? 1 : enter[i] < .02 ? 0 : em).toFixed(3);
        it.style.transform = 'scale(' + emScale.toFixed(4) + ')';
        it.style.transformOrigin = 'center center';

        const base = i === 0 ? .5 * out3(seg(p2, .5, .6)) : .34 * enter[i];
        grains[i].dataset.base = base.toFixed(3);

        const lift = i === 0 ? open * (1 - merge) : enter[i] * (1 - merge);
        const shadow = '0 ' + px(40 * lift) + ' ' + px(96 * lift) + ' rgba(0,0,0,' + (.55 * lift).toFixed(3) + ')';
        wins[i].dataset.shadow = shadow;

        const iv = i === 0 ? out3(seg(p2, .68, .78)) : out3(seg(p2, .70 + i * .04, .82 + i * .04));
        const focusOp = i === focus ? 1 : .2;
        infos[i].style.opacity = (iv * focusOp * (1 - io(seg(p2, .88, .94)))).toFixed(3);
        infos[i].style.width = px(Math.max(200, w));
      });

      metaWrap.style.opacity = (out3(seg(p2, .52, .62)) * (1 - io(seg(p2, .86, .93)))).toFixed(3);
      const mo = out3(seg(p2, .80, .87)) * (1 - io(seg(p2, .88, .93)));
      more.style.opacity = mo.toFixed(3);
      more.style.pointerEvents = mo > .8 ? 'auto' : 'none';
      word.style.opacity = String(1 - io(seg(p2, .86, .95)));

      const nx = out3(seg(p2, .945, 1));
      next.style.opacity = nx.toFixed(3);
      next.style.transform = 'translate3d(0,' + px(lerp(46, 0, nx)) + ',0)';

      const wantHover = p2 > .76 && p2 < .89;
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
      id="long-form"
      ref={sectionRef}
      data-lf-section="1"
      data-scene="1"
      style={{
        position: 'relative',
        zIndex: 3,
        marginTop: '-14vh',
        height: '780vh',
        background: 'linear-gradient(180deg, #070C18 0%, #05070B 46%, #070C18 100%)',
      }}
    >
      <div
        ref={stageRef}
        data-lf-stage="1"
        style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden' }}
      >
        {/* Ghost background text */}
        <div
          ref={wordRef}
          data-lf-word="1"
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate3d(-50%,-50%,0)',
            fontSize: 'clamp(80px,22vw,360px)',
            fontWeight: 800,
            letterSpacing: '-.06em',
            color: 'rgba(242,244,248,.032)',
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        >
          LONG FORM
        </div>

        {/* Editorial introduction */}
        <div
          ref={introRef}
          data-lf-intro="1"
          style={{
            position: 'absolute',
            left: 'clamp(24px,6vw,60px)',
            top: '50%',
            transform: 'translate3d(0,-50%,0)',
            width: 'min(92%, 1080px)',
            display: 'flex',
            flexDirection: 'column',
            gap: 'clamp(20px,3.4vh,44px)',
            transformOrigin: 'left center',
          }}
        >
          <span
            ref={eyebrowRef}
            data-lf-eyebrow="1"
            style={{ fontSize: 11, letterSpacing: '.3em', textTransform: 'uppercase', color: 'var(--accent)' }}
          >
            02 — Long Form
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
              <span data-lf-line="1" style={{ display: 'block', transform: 'translate3d(0,110%,0)' }}>
                Films that hold
              </span>
            </span>
            <span style={{ display: 'block', overflow: 'hidden' }}>
              <span data-lf-line="1" style={{ display: 'block', transform: 'translate3d(0,110%,0)' }}>
                a room <span style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: 'italic', fontWeight: 400 }}>quiet.</span>
              </span>
            </span>
          </h2>

          <p
            ref={ledeRef}
            data-lf-lede="1"
            style={{
              margin: 0,
              maxWidth: '38ch',
              fontSize: 'clamp(15px,1.4vw,21px)',
              lineHeight: 1.6,
              color: '#A7B2C4',
              opacity: 0,
            }}
          >
            Commercials, brand documentaries, founder interviews and long-form narrative work — written, shot and cut in-house.
          </p>
        </div>

        {/* Metadata overlay */}
        <div
          ref={metaWrapRef}
          data-lf-meta="1"
          style={{
            position: 'absolute',
            left: 'clamp(24px,6vw,60px)',
            right: 'clamp(24px,6vw,60px)',
            top: 'clamp(84px,12vh,124px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 20,
            opacity: 0,
            pointerEvents: 'none',
          }}
        >
          <span style={{ fontSize: 10, letterSpacing: '.24em', textTransform: 'uppercase', color: '#55627A' }}>
            ARRI ALEXA 35 · ANAMORPHIC
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 18, fontSize: 10, letterSpacing: '.22em', textTransform: 'uppercase', color: '#7A879C' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#FF3E3E', animation: 'marca-pulse 1.4s infinite' }} /> REC
            </span>
            <span>COLOR GRADE: FILM LOG</span>
          </div>
        </div>

        {/* Film Cards Stage */}
        <div ref={filmsRef} data-lf-films="1" style={{ position: 'absolute', inset: 0 }}>
          {/* Card 0 - Hero Film */}
          <div data-lf-item="0" style={{ position: 'absolute', left: 0, top: 0, width: 300 }}>
            <div data-lf-win="0" style={{ position: 'relative', overflow: 'hidden', background: '#0C1526' }}>
              <div data-lf-band="0" style={{ position: 'absolute', left: 0, right: 0, top: 0, height: '100%', overflow: 'hidden' }}>
                <div data-lf-inner="0" style={{ position: 'absolute', inset: 0, transformOrigin: 'center center', transition: 'transform 800ms cubic-bezier(.2,.7,.2,1), filter 600ms' }}>
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    src="https://res.cloudinary.com/ts350ak2/video/upload/v1785482138/MARCA_WEBSITE_02_ci6tgd.mp4"
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', background: '#08090D' }}
                  />
                </div>
                <div data-lf-grain="0" style={{ position: 'absolute', inset: '-40%', opacity: 0, mixBlendMode: 'overlay', pointerEvents: 'none', transition: 'opacity 600ms', backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,.09) 0 1px, transparent 1px 2px), repeating-linear-gradient(90deg, rgba(255,255,255,.07) 0 1px, transparent 1px 3px)', animation: 'marca-grain 1.1s steps(3) infinite' }} />
                <div data-lf-prog="0" style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 2, background: 'rgba(242,244,248,.16)', opacity: 0, transition: 'opacity 400ms' }}>
                  <div data-lf-progbar="0" style={{ height: '100%', width: '30%', background: 'var(--accent)' }} />
                </div>
              </div>
            </div>
            <div data-lf-info="0" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 14, paddingTop: 14, opacity: 0, transition: 'transform 600ms cubic-bezier(.2,.7,.2,1)' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <span style={{ fontSize: 9, letterSpacing: '.24em', textTransform: 'uppercase', color: '#6C7A92' }}>Healthcare — Documentary</span>
                <h3 style={{ margin: 0, fontSize: 'clamp(18px,1.8vw,28px)', fontWeight: 600, letterSpacing: '-.025em', color: '#F2F4F8' }}>
                  Aadicura Hospital — <span style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: 'italic', fontWeight: 400 }}>Still Here</span>
                </h3>
              </div>
              <a href="#case-studies" style={{ flex: '0 0 auto', fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--accent)' }}>Watch →</a>
            </div>
          </div>

          {/* Card 1 - Film 2 */}
          <div data-lf-item="1" style={{ position: 'absolute', left: 0, top: 0, width: 220 }}>
            <div data-lf-win="1" style={{ position: 'relative', overflow: 'hidden', background: '#0C1526' }}>
              <div data-lf-band="1" style={{ position: 'absolute', left: 0, right: 0, top: 0, height: '100%', overflow: 'hidden' }}>
                <div data-lf-inner="1" style={{ position: 'absolute', inset: 0, transformOrigin: 'center center', transition: 'transform 800ms cubic-bezier(.2,.7,.2,1), filter 600ms' }}>
                  <img
                    src="https://res.cloudinary.com/ts350ak2/image/upload/v1785486928/5_hw5ng6.png"
                    alt="Vantara Interiors"
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div data-lf-grain="1" style={{ position: 'absolute', inset: '-40%', opacity: 0, mixBlendMode: 'overlay', pointerEvents: 'none', transition: 'opacity 600ms', backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,.09) 0 1px, transparent 1px 2px), repeating-linear-gradient(90deg, rgba(255,255,255,.07) 0 1px, transparent 1px 3px)', animation: 'marca-grain 1.1s steps(3) infinite' }} />
                <div data-lf-prog="1" style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 2, background: 'rgba(242,244,248,.16)', opacity: 0, transition: 'opacity 400ms' }}>
                  <div data-lf-progbar="1" style={{ height: '100%', width: '30%', background: 'var(--accent)' }} />
                </div>
              </div>
            </div>
            <div data-lf-info="1" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 14, paddingTop: 14, opacity: 0, transition: 'transform 600ms cubic-bezier(.2,.7,.2,1)' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <span style={{ fontSize: 9, letterSpacing: '.24em', textTransform: 'uppercase', color: '#6C7A92' }}>Interior Design — Commercial</span>
                <h3 style={{ margin: 0, fontSize: 'clamp(17px,1.6vw,25px)', fontWeight: 600, letterSpacing: '-.025em', color: '#F2F4F8' }}>Vantara Interiors</h3>
              </div>
              <a href="#case-studies" style={{ flex: '0 0 auto', fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--accent)' }}>Watch →</a>
            </div>
          </div>

          {/* Card 2 - Film 3 */}
          <div data-lf-item="2" style={{ position: 'absolute', left: 0, top: 0, width: 240 }}>
            <div data-lf-win="2" style={{ position: 'relative', overflow: 'hidden', background: '#0C1526' }}>
              <div data-lf-band="2" style={{ position: 'absolute', left: 0, right: 0, top: 0, height: '100%', overflow: 'hidden' }}>
                <div data-lf-inner="2" style={{ position: 'absolute', inset: 0, transformOrigin: 'center center', transition: 'transform 800ms cubic-bezier(.2,.7,.2,1), filter 600ms' }}>
                  <img
                    src="https://res.cloudinary.com/ts350ak2/image/upload/v1785486926/4_c5ql8a.png"
                    alt="Ledgerloop Series A"
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div data-lf-grain="2" style={{ position: 'absolute', inset: '-40%', opacity: 0, mixBlendMode: 'overlay', pointerEvents: 'none', transition: 'opacity 600ms', backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,.09) 0 1px, transparent 1px 2px), repeating-linear-gradient(90deg, rgba(255,255,255,.07) 0 1px, transparent 1px 3px)', animation: 'marca-grain 1.1s steps(3) infinite' }} />
                <div data-lf-prog="2" style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 2, background: 'rgba(242,244,248,.16)', opacity: 0, transition: 'opacity 400ms' }}>
                  <div data-lf-progbar="2" style={{ height: '100%', width: '30%', background: 'var(--accent)' }} />
                </div>
              </div>
            </div>
            <div data-lf-info="2" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 14, paddingTop: 14, opacity: 0, transition: 'transform 600ms cubic-bezier(.2,.7,.2,1)' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <span style={{ fontSize: 9, letterSpacing: '.24em', textTransform: 'uppercase', color: '#6C7A92' }}>Startup — Brand Film</span>
                <h3 style={{ margin: 0, fontSize: 'clamp(17px,1.6vw,25px)', fontWeight: 600, letterSpacing: '-.025em', color: '#F2F4F8' }}>Ledgerloop, Series A</h3>
              </div>
              <a href="#case-studies" style={{ flex: '0 0 auto', fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--accent)' }}>Watch →</a>
            </div>
          </div>
        </div>

        {/* More films button */}
        <div ref={moreRef} data-lf-more="1" style={{ opacity: 0 }}>
          <a href="#portfolio" className="btn-outline">Show more films <span>→</span></a>
        </div>

        {/* Next chapter teaser */}
        <div
          ref={nextRef}
          data-lf-next="1"
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
            <span style={{ fontSize: 'clamp(22px,2.6vw,38px)', fontWeight: 700, letterSpacing: '-.03em', color: '#F2F4F8' }}>03 — Process</span>
          </div>
          <span style={{ fontSize: 11, letterSpacing: '.2em', textTransform: 'uppercase', color: '#7A879C' }}>Scroll to keep watching ↓</span>
        </div>
      </div>
    </section>
  );
}
