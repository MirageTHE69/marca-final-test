'use client';

import { useEffect, useRef } from 'react';

export default function ShortFormSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const chromeRef = useRef<HTMLDivElement>(null);
  const boardRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const floatRef = useRef<HTMLDivElement>(null);
  const tcRef = useRef<HTMLSpanElement>(null);
  const stateTagRef = useRef<HTMLSpanElement>(null);
  const outroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const sticky = stickyRef.current;
    const chrome = chromeRef.current;
    const board = boardRef.current;
    const head = headRef.current;
    const float = floatRef.current;
    const tc = tcRef.current;
    const stateTag = stateTagRef.current;
    const outro = outroRef.current;
    if (!section || !sticky || !board || !float) return;

    const seg = (x: number, a: number, b: number) => { const t = (x - a) / (b - a); return t < 0 ? 0 : t > 1 ? 1 : t; };
    const ease = (t: number) => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 4);
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const tcode = (s: number) => {
      const f2 = Math.round(s * 24), ss = Math.floor(f2 / 24);
      const pad = (n: number) => (n < 10 ? '0' : '') + n;
      return '00:' + pad(Math.floor(ss / 60)) + ':' + pad(ss % 60) + ':' + pad(f2 % 24);
    };

    const clips = Array.from(section.querySelectorAll<HTMLElement>('[data-tl-clip]'));
    const lanes = Array.from(section.querySelectorAll<HTMLElement>('[data-tl-lane]'));
    const ghosts = Array.from(section.querySelectorAll<HTMLElement>('[data-tl-ghost]'));
    const items = Array.from(section.querySelectorAll<HTMLElement>('[data-tl-item]'));
    const wins = items.map(it => it.querySelector<HTMLElement>('[data-tl-win]')!);
    const caps = items.map(it => it.querySelector<HTMLElement>('[data-tl-cap]')!);
    const badges = items.map(it => it.querySelector<HTMLElement>('[data-tl-badge]')!);
    const targets = [{ w: .205 }, { w: .25 }, { w: .205 }];

    const still = () => {
      section.style.height = 'auto';
      sticky.style.position = 'relative';
      sticky.style.height = 'auto';
      sticky.style.padding = 'clamp(80px,12vh,130px) 0 clamp(40px,6vh,70px)';
      if (board) board.style.display = 'none';
      if (chrome) { chrome.style.position = 'relative'; chrome.style.padding = '0 clamp(24px,6vw,60px) 34px'; chrome.style.opacity = '1'; }
      float.style.position = 'relative';
      float.style.display = 'grid';
      float.style.gridTemplateColumns = 'repeat(auto-fit, minmax(200px, 1fr))';
      float.style.gap = 'clamp(18px,3vw,32px)';
      float.style.padding = '0 clamp(24px,6vw,60px)';
      items.forEach((it, i) => {
        it.style.position = 'relative';
        it.style.left = 'auto';
        it.style.top = 'auto';
        it.style.width = 'auto';
        wins[i].style.height = 'auto';
        wins[i].style.aspectRatio = '9 / 16';
        wins[i].style.opacity = '1';
        wins[i].style.boxShadow = 'none';
        if (caps[i]) caps[i].style.opacity = '1';
        if (badges[i]) badges[i].style.opacity = '1';
      });
      if (outro) { outro.style.transform = 'none'; outro.parentElement!.style.position = 'relative'; outro.parentElement!.style.inset = 'auto'; outro.parentElement!.style.padding = 'clamp(34px,5vh,60px) clamp(24px,6vw,60px) 0'; }
    };

    const apply = () => {
      const vw = window.innerWidth;
      if (vw < 860) { still(); return; }

      section.style.height = '540vh';
      sticky.style.position = 'sticky';
      sticky.style.height = '100vh';
      sticky.style.padding = '';
      if (board) board.style.display = 'flex';
      if (chrome) { chrome.style.position = 'absolute'; chrome.style.padding = 'clamp(86px,12vh,130px) clamp(24px,6vw,60px) 0'; }
      float.style.position = 'absolute';
      float.style.display = 'block';
      float.style.padding = '0';
      if (outro) { outro.parentElement!.style.position = 'absolute'; outro.parentElement!.style.padding = '4px 0 0'; }

      const rect = section.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const p = Math.min(1, Math.max(0, -rect.top / (total || 1)));
      const sr = sticky.getBoundingClientRect();
      const W = sr.width, H = sr.height;

      const inUi = ease(seg(p, 0, .1));
      const out = ease(seg(p, .72, .92));
      if (chrome) { chrome.style.opacity = String(inUi); }
      if (board) board.style.opacity = String(inUi * (1 - out));
      lanes.forEach((l, i) => { l.style.transform = `translate3d(${lerp(-26 - i * 8, 0, inUi).toFixed(2)}px,0,0)`; });
      ghosts.forEach(g => { g.style.opacity = String(1 - ease(seg(p, .58, .78))); });

      const track = section.querySelector<HTMLElement>('[data-tl-track]');
      const sweep = ease(seg(p, .1, .56));
      let px = 0;
      if (track && head) {
        const tr = track.getBoundingClientRect();
        px = (tr.left - sr.left) + tr.width * sweep;
        head.style.left = px.toFixed(2) + 'px';
      }
      if (head) head.style.opacity = String(inUi * (1 - ease(seg(p, .62, .8))));
      if (tc) tc.textContent = tcode(sweep * 36);
      if (stateTag) {
        const label = p < .1 ? 'Standby' : p < .58 ? 'Playing' : p < .9 ? 'Rendering' : 'Final cut';
        if (stateTag.textContent !== label) stateTag.textContent = label;
        stateTag.style.color = p < .1 ? '#93A0B4' : '#F2F4F8';
        stateTag.style.borderColor = p >= .1 && p < .58 ? 'var(--accent)' : 'rgba(242,244,248,.16)';
      }

      clips.forEach(c => {
        const cr = c.getBoundingClientRect();
        const armed = px >= (cr.left - sr.left) + 2;
        c.style.borderColor = armed ? 'var(--accent)' : 'rgba(242,244,248,.14)';
        c.style.background = armed ? 'rgba(62,109,255,.14)' : '#101B30';
      });

      if (chrome && outro) {
        const cr = chrome.getBoundingClientRect();
        const wrapR = outro.parentElement!.getBoundingClientRect();
        const capH = (caps[0] ? caps[0].getBoundingClientRect().height : 26) + 14;
        const availTop = (cr.bottom - sr.top) + Math.max(18, H * .04);
        const availBot = (wrapR.top - sr.top) - Math.max(18, H * .035);
        const availH = Math.max(140, availBot - availTop);
        const maxWinH = Math.max(90, availH - capH);
        const ws = targets.map(t => Math.min(t.w * W, maxWinH * 9 / 16));
        const gap = Math.max(16, W * .042);
        const rowW = ws[0] + ws[1] + ws[2] + gap * 2;
        const x0 = Math.max(0, (W - rowW) / 2);
        const xs = [x0, x0 + ws[0] + gap, x0 + ws[0] + ws[1] + gap * 2];
        const stagger = [.62, 0, .88];
        const srcFor = ['V1', 'V2', 'V3'].map(k => section.querySelector<HTMLElement>(`[data-tl-clip="${k}"]`));

        items.forEach((it, i) => {
          const src = srcFor[i] ? srcFor[i]!.getBoundingClientRect() : null;
          const t = ease(seg(p, .56 + i * .05, .82 + i * .05));
          const armed = ease(seg(p, .12 + i * .13, .3 + i * .13));
          const ew = ws[i], eh = ew * 16 / 9;
          const ey = availTop + Math.max(0, availH - (eh + capH)) * stagger[i];
          const sx = src ? src.left - sr.left : 0;
          const sy = src ? src.top - sr.top : 0;
          const sw = src ? src.width : 120;
          const sh = src ? src.height : 40;
          it.style.position = 'absolute';
          it.style.left = lerp(sx, xs[i], t).toFixed(2) + 'px';
          it.style.top = lerp(sy, ey, t).toFixed(2) + 'px';
          it.style.width = lerp(sw, ew, t).toFixed(2) + 'px';
          wins[i].style.aspectRatio = 'auto';
          wins[i].style.height = lerp(sh, eh, t).toFixed(2) + 'px';
          wins[i].style.opacity = String(lerp(.28, 1, armed));
          wins[i].style.boxShadow = `0 ${(44 * t).toFixed(1)}px ${(96 * t).toFixed(1)}px rgba(0,0,0,${(.55 * t).toFixed(3)})`;
          if (badges[i]) badges[i].style.opacity = ease(seg(p, .6 + i * .04, .8 + i * .04)).toFixed(3);
          if (caps[i]) caps[i].style.opacity = ease(seg(p, .8 + i * .03, .95 + i * .03)).toFixed(3);
        });
      }

      if (outro) outro.style.transform = `translate3d(0,${lerp(120, 0, easeOut(seg(p, .86, 1))).toFixed(2)}%,0)`;
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
      id="short-form"
      ref={sectionRef}
      style={{
        position: 'relative',
        zIndex: 2,
        marginTop: '-14vh',
        height: '540vh',
        background: 'linear-gradient(180deg, #05070B 0%, #070C18 55%, #05070B 100%)',
      }}
    >
      <div
        ref={stickyRef}
        style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden' }}
      >
        {/* Chrome header */}
        <div
          ref={chromeRef}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 20,
            padding: 'clamp(86px,12vh,130px) clamp(24px,6vw,60px) 0',
            pointerEvents: 'none',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
            <span style={{ fontSize: 11, letterSpacing: '.3em', textTransform: 'uppercase', color: 'var(--accent)' }}>02 — Short Form</span>
            <span style={{ fontSize: 10, letterSpacing: '.22em', textTransform: 'uppercase', color: '#55627A' }}>MARCA_SHORTFORM_v04 · SEQ 03</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(14px,2vw,26px)', fontSize: 10, letterSpacing: '.22em', textTransform: 'uppercase', color: '#6C7A92' }}>
            <span ref={tcRef} style={{ fontVariantNumeric: 'tabular-nums', color: '#F2F4F8' }}>00:00:00:00</span>
            <span>24 fps</span>
            <span ref={stateTagRef} style={{ padding: '5px 11px', border: '1px solid rgba(242,244,248,.16)', borderRadius: 999, color: '#93A0B4' }}>Standby</span>
          </div>
        </div>

        {/* Timeline board */}
        <div
          ref={boardRef}
          style={{
            position: 'absolute',
            left: 'clamp(24px,6vw,60px)',
            right: 'clamp(24px,6vw,60px)',
            top: '50%',
            transform: 'translateY(-50%)',
            display: 'flex',
            flexDirection: 'column',
            gap: 9,
          }}
        >
          {/* Timeline ruler */}
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 14 }}>
            <div style={{ flex: '0 0 clamp(96px,11vw,148px)', fontSize: 9, letterSpacing: '.2em', textTransform: 'uppercase', color: '#55627A', paddingRight: 10 }}>Timeline</div>
            <div style={{ position: 'relative', flex: 1, height: 20, borderBottom: '1px solid rgba(242,244,248,.14)', backgroundImage: 'repeating-linear-gradient(90deg, rgba(242,244,248,.2) 0 1px, transparent 1px 5%)', backgroundSize: '100% 7px', backgroundPosition: 'left bottom', backgroundRepeat: 'repeat-x' }}>
              <span style={{ position: 'absolute', left: 0, bottom: 8, fontSize: 9, letterSpacing: '.16em', color: '#55627A' }}>00:00</span>
              <span style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', bottom: 8, fontSize: 9, letterSpacing: '.16em', color: '#55627A' }}>00:18</span>
              <span style={{ position: 'absolute', right: 0, bottom: 8, fontSize: 9, letterSpacing: '.16em', color: '#55627A' }}>00:36</span>
            </div>
          </div>

          {/* V3 Lane */}
          <div data-tl-lane="1" style={{ display: 'flex', alignItems: 'stretch', gap: 14 }}>
            <div style={{ flex: '0 0 clamp(96px,11vw,148px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 5, paddingRight: 10, borderRight: '1px solid rgba(242,244,248,.1)' }}>
              <span style={{ fontSize: 10, letterSpacing: '.2em', textTransform: 'uppercase', color: '#F2F4F8' }}>V3</span>
              <span style={{ fontSize: 9, letterSpacing: '.18em', textTransform: 'uppercase', color: '#55627A' }}>Campaign</span>
            </div>
            <div data-tl-track="1" style={{ position: 'relative', flex: 1, height: 'clamp(52px,8vh,74px)', background: 'rgba(242,244,248,.028)', border: '1px solid rgba(242,244,248,.07)' }}>
              <div data-tl-clip="V3" style={{ position: 'absolute', left: '44%', top: 7, bottom: 7, width: '34%', overflow: 'hidden', background: '#101B30', border: '1px solid rgba(242,244,248,.14)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, padding: '0 10px' }}>
                <span style={{ fontSize: 9, letterSpacing: '.16em', textTransform: 'uppercase', color: '#93A0B4', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>03 DR AMRUTANSH · 00:14</span>
                <span style={{ flex: '0 0 34%', height: '60%', backgroundImage: 'repeating-linear-gradient(90deg, rgba(242,244,248,.34) 0 1px, transparent 1px 4px)', backgroundSize: '100% 100%' }} />
              </div>
              <div data-tl-ghost="1" style={{ position: 'absolute', left: '4%', top: 7, bottom: 7, width: '32%', background: 'rgba(242,244,248,.05)', border: '1px solid rgba(242,244,248,.08)' }} />
              <div data-tl-ghost="1" style={{ position: 'absolute', left: '82%', top: 7, bottom: 7, width: '14%', background: 'rgba(242,244,248,.05)', border: '1px solid rgba(242,244,248,.08)' }} />
            </div>
          </div>

          {/* V2 Lane */}
          <div data-tl-lane="1" style={{ display: 'flex', alignItems: 'stretch', gap: 14 }}>
            <div style={{ flex: '0 0 clamp(96px,11vw,148px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 5, paddingRight: 10, borderRight: '1px solid rgba(242,244,248,.1)' }}>
              <span style={{ fontSize: 10, letterSpacing: '.2em', textTransform: 'uppercase', color: '#F2F4F8' }}>V2</span>
              <span style={{ fontSize: 9, letterSpacing: '.18em', textTransform: 'uppercase', color: '#55627A' }}>YouTube Short</span>
            </div>
            <div style={{ position: 'relative', flex: 1, height: 'clamp(52px,8vh,74px)', background: 'rgba(242,244,248,.028)', border: '1px solid rgba(242,244,248,.07)' }}>
              <div data-tl-clip="V2" style={{ position: 'absolute', left: '22%', top: 7, bottom: 7, width: '30%', overflow: 'hidden', background: '#101B30', border: '1px solid rgba(242,244,248,.14)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, padding: '0 10px' }}>
                <span style={{ fontSize: 9, letterSpacing: '.16em', textTransform: 'uppercase', color: '#93A0B4', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>02 DR DHRUTI · 00:22</span>
                <span style={{ flex: '0 0 34%', height: '60%', backgroundImage: 'repeating-linear-gradient(90deg, rgba(242,244,248,.34) 0 1px, transparent 1px 4px)', backgroundSize: '100% 100%' }} />
              </div>
              <div data-tl-ghost="1" style={{ position: 'absolute', left: '56%', top: 7, bottom: 7, width: '24%', background: 'rgba(242,244,248,.05)', border: '1px solid rgba(242,244,248,.08)' }} />
            </div>
          </div>

          {/* V1 Lane */}
          <div data-tl-lane="1" style={{ display: 'flex', alignItems: 'stretch', gap: 14 }}>
            <div style={{ flex: '0 0 clamp(96px,11vw,148px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 5, paddingRight: 10, borderRight: '1px solid rgba(242,244,248,.1)' }}>
              <span style={{ fontSize: 10, letterSpacing: '.2em', textTransform: 'uppercase', color: '#F2F4F8' }}>V1</span>
              <span style={{ fontSize: 9, letterSpacing: '.18em', textTransform: 'uppercase', color: '#55627A' }}>Instagram Reel</span>
            </div>
            <div style={{ position: 'relative', flex: 1, height: 'clamp(52px,8vh,74px)', background: 'rgba(242,244,248,.028)', border: '1px solid rgba(242,244,248,.07)' }}>
              <div data-tl-clip="V1" style={{ position: 'absolute', left: '6%', top: 7, bottom: 7, width: '26%', overflow: 'hidden', background: '#101B30', border: '1px solid rgba(242,244,248,.14)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, padding: '0 10px' }}>
                <span style={{ fontSize: 9, letterSpacing: '.16em', textTransform: 'uppercase', color: '#93A0B4', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>01 TCB · 00:09</span>
                <span style={{ flex: '0 0 34%', height: '60%', backgroundImage: 'repeating-linear-gradient(90deg, rgba(242,244,248,.34) 0 1px, transparent 1px 4px)', backgroundSize: '100% 100%' }} />
              </div>
              <div data-tl-ghost="1" style={{ position: 'absolute', left: '38%', top: 7, bottom: 7, width: '18%', background: 'rgba(242,244,248,.05)', border: '1px solid rgba(242,244,248,.08)' }} />
              <div data-tl-ghost="1" style={{ position: 'absolute', left: '62%', top: 7, bottom: 7, width: '30%', background: 'rgba(242,244,248,.05)', border: '1px solid rgba(242,244,248,.08)' }} />
            </div>
          </div>

          {/* A1 Audio Lane */}
          <div data-tl-lane="1" style={{ display: 'flex', alignItems: 'stretch', gap: 14 }}>
            <div style={{ flex: '0 0 clamp(96px,11vw,148px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 5, paddingRight: 10, borderRight: '1px solid rgba(242,244,248,.1)' }}>
              <span style={{ fontSize: 10, letterSpacing: '.2em', textTransform: 'uppercase', color: '#F2F4F8' }}>A1</span>
              <span style={{ fontSize: 9, letterSpacing: '.18em', textTransform: 'uppercase', color: '#55627A' }}>Sound design</span>
            </div>
            <div style={{ position: 'relative', flex: 1, height: 'clamp(30px,4.4vh,42px)', background: 'rgba(62,109,255,.06)', border: '1px solid rgba(62,109,255,.16)', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: '6px 8px', backgroundImage: 'repeating-linear-gradient(90deg, rgba(62,109,255,.55) 0 1px, transparent 1px 5px)', backgroundSize: '100% 100%', opacity: .8 }} />
            </div>
          </div>

          {/* Playhead */}
          <div ref={headRef} style={{ position: 'absolute', left: 0, top: 26, bottom: 0, width: 1, background: 'var(--accent)', pointerEvents: 'none' }}>
            <span style={{ position: 'absolute', top: -22, left: -1, padding: '4px 8px', background: 'var(--accent)', color: '#FFFFFF', fontSize: 9, letterSpacing: '.14em', whiteSpace: 'nowrap' }}>PLAYHEAD</span>
          </div>
        </div>

        {/* Float preview windows */}
        <div ref={floatRef} style={{ position: 'absolute', inset: 0 }}>
          {[
            { label: 'Instagram Reel', name: 'TCB', category: 'Interior', video: 'https://res.cloudinary.com/ts350ak2/video/upload/v1785486111/ACCENT_WALL_25K_VIEWS_dmvtj8.mp4' },
            { label: 'YouTube Short', name: 'DR DHRUTI', category: 'Healthcare', video: 'https://res.cloudinary.com/ts350ak2/video/upload/v1785486188/3M_tbl2fe.mp4' },
            { label: 'Campaign', name: 'DR AMRUTANSH', category: 'Healthcare', video: 'https://res.cloudinary.com/ts350ak2/video/upload/v1785486291/22K_egrmzj.mp4' },
          ].map((item, i) => (
            <div key={i} data-tl-item={i} style={{ position: 'absolute', left: 0, top: 0, width: 200 }}>
              <div data-tl-win={i} style={{ position: 'relative', height: 120, overflow: 'hidden', background: '#0C1526', opacity: .3 }}>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  src={item.video}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    background: '#0C1526',
                  }}
                />
                <span data-tl-badge={i} style={{ position: 'absolute', top: 10, left: 10, padding: '5px 11px', borderRadius: 999, background: 'rgba(8,9,13,.62)', backdropFilter: 'blur(6px)', fontSize: 9, letterSpacing: '.2em', textTransform: 'uppercase', color: '#D8DEEA', opacity: 0, pointerEvents: 'none' }}>
                  {item.label}
                </span>
              </div>
              <div data-tl-cap={i} style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 10, paddingTop: 12, opacity: 0 }}>
                <span style={{ fontSize: 14, fontWeight: 600, letterSpacing: '-.01em', color: '#F2F4F8' }}>{item.name}</span>
                <span style={{ fontSize: 9, letterSpacing: '.18em', textTransform: 'uppercase', color: '#6C7A92' }}>{item.category}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Outro */}
        <div style={{ position: 'absolute', left: 'clamp(24px,6vw,60px)', right: 'clamp(24px,6vw,60px)', bottom: 'clamp(28px,4.4vh,54px)', overflow: 'hidden', paddingTop: 4 }}>
          <div ref={outroRef} style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 'clamp(24px,3.4vw,60px)', transform: 'translate3d(0,120%,0)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: '46ch' }}>
              <h2 style={{ margin: 0, fontSize: 'clamp(26px,2.9vw,46px)', fontWeight: 700, letterSpacing: '-.035em', lineHeight: 1.05 }}>
                Built for the <span style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: 'italic', fontWeight: 400 }}>first three seconds.</span>
              </h2>
              <p style={{ margin: 0, fontSize: 'clamp(13px,1vw,16px)', lineHeight: 1.6, color: '#A7B2C4' }}>
                Reels, Shorts and campaign cutdowns written for the scroll — hooked in the first frame, held to the last.
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 'clamp(22px,3vw,44px)' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <span style={{ fontSize: 'clamp(22px,2.1vw,34px)', fontWeight: 700, letterSpacing: '-.03em' }}>61M</span>
                <span style={{ fontSize: 9, letterSpacing: '.2em', textTransform: 'uppercase', color: '#6C7A92' }}>Organic views</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <span style={{ fontSize: 'clamp(22px,2.1vw,34px)', fontWeight: 700, letterSpacing: '-.03em' }}>1,400+</span>
                <span style={{ fontSize: 9, letterSpacing: '.2em', textTransform: 'uppercase', color: '#6C7A92' }}>Verticals shipped</span>
              </div>
              <a href="#portfolio" className="btn-outline">
                Show more <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
