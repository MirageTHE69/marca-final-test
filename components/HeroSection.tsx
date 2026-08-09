'use client';

import { useEffect, useRef } from 'react';

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const clipRef = useRef<HTMLDivElement>(null);
  const filmRef = useRef<HTMLDivElement>(null);
  const wordRef = useRef<HTMLDivElement>(null);
  const bandRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const sec = sectionRef.current;
    const clip = clipRef.current;
    const film = filmRef.current;
    const word = wordRef.current;
    const band = bandRef.current;
    if (!sec || !clip || !film || !word || !band) return;

    const settle = () => {
      clip.style.clipPath = 'inset(0px 0px 0px 0px)';
      film.style.transform = 'none';
      word.style.clipPath = 'inset(0px 0px 0px 0px)';
      word.style.transform = 'none';
      band.style.transform = 'none';
      document.body.style.overflow = '';
    };

    const skip = window.innerWidth < 860;
    if (skip) { settle(); return; }

    const easeIO = (t: number) => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 4);
    const seg = (x: number, a: number, b: number) => { const t = (x - a) / (b - a); return t < 0 ? 0 : t > 1 ? 1 : t; };
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const vw = window.innerWidth, vh = window.innerHeight;
    const total = 3200;
    document.body.style.overflow = 'hidden';
    if (window.scrollTo) window.scrollTo(0, 0);

    const wr = word.getBoundingClientRect();
    const wordScale = 0.28;
    const wordDX = vw / 2 - (wr.left + wr.width / 2);
    const wordDY = vh * .5 + vh * .12 - (wr.top + wr.height / 2);

    const place = (w: number) => {
      word.style.transform = `translate3d(${(wordDX * (1 - w)).toFixed(2)}px,${(wordDY * (1 - w)).toFixed(2)}px,0) scale(${lerp(wordScale, 1, w).toFixed(4)})`;
    };
    place(0);
    clip.style.clipPath = `inset(${vh / 2 - 4}px ${vw / 2 - 7}px)`;

    const t0 = performance.now();
    const frame = () => {
      const p = Math.min(1, (performance.now() - t0) / total);

      word.style.clipPath = `inset(0px 0px ${(100 - easeOut(seg(p, .02, .26)) * 100).toFixed(2)}% 0px)`;

      const hz = easeIO(seg(p, .3, .56));
      const vt = easeIO(seg(p, .5, .74));
      const full = easeIO(seg(p, .68, 1));
      const w = lerp(lerp(14, vw * .46, hz), vw, full);
      const h = lerp(lerp(8, vh * .3, vt), vh, full);
      const x = Math.max(0, (vw - w) / 2), y = Math.max(0, (vh - h) / 2);
      clip.style.clipPath = `inset(${y.toFixed(2)}px ${x.toFixed(2)}px ${y.toFixed(2)}px ${x.toFixed(2)}px)`;
      film.style.transform = `scale(${lerp(1.09, 1, full).toFixed(4)})`;

      const move = easeIO(seg(p, .64, 1));
      place(move);
      band.style.transform = `translate3d(0,${lerp(110, 0, easeOut(seg(p, .78, 1))).toFixed(2)}%,0)`;

      if (p < 1) rafRef.current = requestAnimationFrame(frame); else settle();
    };
    rafRef.current = requestAnimationFrame(frame);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <section
      id="top"
      ref={sectionRef}
      style={{
        position: 'relative',
        zIndex: 1,
        height: '100vh',
        overflow: 'hidden',
        background: '#08090D',
        willChange: 'transform, filter',
      }}
    >
      <div
        ref={clipRef}
        style={{
          position: 'absolute',
          inset: 0,
          overflow: 'hidden',
          clipPath: 'inset(0px 0px 0px 0px)',
          willChange: 'clip-path',
        }}
      >
        <div
          ref={filmRef}
          style={{ position: 'absolute', inset: 0, willChange: 'transform' }}
        >
          {/* Hero video */}
          <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', background: '#0A0F1A' }}>
            <video
              autoPlay
              loop
              muted
              playsInline
              src="https://res.cloudinary.com/ts350ak2/video/upload/v1785482138/MARCA_WEBSITE_02_ci6tgd.mp4"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                background: '#08090D',
              }}
            />
          </div>
          {/* Gradient overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, rgba(8,9,13,.68) 0%, rgba(8,9,13,.08) 30%, rgba(8,9,13,.5) 66%, rgba(8,9,13,.93) 100%)',
              pointerEvents: 'none',
            }}
          />
          {/* Film grain */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              opacity: .14,
              mixBlendMode: 'overlay',
              backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)' opacity='.5'/%3E%3C/svg%3E\")",
              backgroundSize: '140px 140px',
              pointerEvents: 'none',
            }}
          />
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          left: 'clamp(24px,6vw,60px)',
          right: 'clamp(24px,6vw,60px)',
          bottom: 'clamp(44px,6vh,72px)',
          display: 'flex',
          flexDirection: 'column',
          gap: 'clamp(16px,2.4vh,34px)',
        }}
      >
        <div
          ref={wordRef}
          style={{
            textAlign: 'center',
            fontSize: 'clamp(38px, min(9.2vw, 19vh), 168px)',
            fontWeight: 800,
            letterSpacing: '-.055em',
            lineHeight: .84,
            color: '#F4F6FA',
            clipPath: 'inset(0px 0px 100% 0px)',
            transformOrigin: 'center',
            willChange: 'transform, clip-path',
            pointerEvents: 'none',
          }}
        >
          MARCA<br />CREATIVES
        </div>

        <div style={{ overflow: 'hidden', paddingTop: 4 }}>
          <div
            ref={bandRef}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              gap: 'clamp(24px,3.4vw,60px)',
              transform: 'translate3d(0,110%,0)',
              willChange: 'transform',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: '54ch' }}>
              <span
                style={{
                  fontFamily: "'Instrument Serif', Georgia, serif",
                  fontStyle: 'italic',
                  fontSize: 'clamp(19px,1.9vw,29px)',
                  lineHeight: 1.3,
                  color: '#E4E9F2',
                }}
              >
                Stories worth remembering.
              </span>
              <p style={{ margin: 0, fontSize: 'clamp(13px,1vw,16px)', lineHeight: 1.6, color: '#A7B2C4' }}>
                A production studio for founders and brands who want their story told properly — short form, films, identity and the strategy that holds it together.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 12 }}>
              <a href="#contact" className="btn-primary">
                Start a project <span style={{ fontSize: 15 }}>→</span>
              </a>
              <span style={{ fontSize: 10, letterSpacing: '.16em', textTransform: 'uppercase', color: '#6C7A92' }}>
                Trusted by 40+ brands · healthcare, retail &amp; tech
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
