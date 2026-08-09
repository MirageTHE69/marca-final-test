'use client';

import { useEffect, useRef } from 'react';

const processSteps = [
  { num: '01', title: 'Discovery', desc: 'A 90-minute session with the people who actually make the decisions.', pos: 22 },
  { num: '02', title: 'Research', desc: 'Category teardown, competitor audit and a read of what your audience already watches.', pos: 28 },
  { num: '03', title: 'Strategy', desc: 'Content pillars, formats and the one message everything ladders back to.', pos: 34 },
  { num: '04', title: 'Script writing', desc: 'Hooks, beats and shot lists. You review words on a page, not a rough cut.', pos: 40 },
  { num: '05', title: 'Production', desc: 'Full crew, cinema glass, sound and lighting — one day feeds a month of content.', pos: 46 },
  { num: '06', title: 'Editing', desc: 'Story cut, then colour, sound design and graphics. Two feedback rounds built in.', pos: 52 },
  { num: '07', title: 'Publishing', desc: 'Platform-native exports, thumbnails, captions and copy — scheduled or handed over.', pos: 58 },
  { num: '08', title: 'Optimisation', desc: 'Retention curves, hook tests and a monthly review of what to multiply.', pos: 64 },
];

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const sticky = stickyRef.current;
    const track = trackRef.current;
    const bar = barRef.current;
    if (!section || !sticky || !track) return;

    const apply = () => {
      if (window.innerWidth < 860) {
        section.style.height = 'auto';
        sticky.style.position = 'static';
        sticky.style.height = 'auto';
        sticky.style.padding = '90px 0';
        track.style.overflowX = 'auto';
        track.style.transform = 'none';
        return;
      }
      section.style.height = '420vh';
      sticky.style.position = 'sticky';
      sticky.style.height = '100vh';
      sticky.style.padding = '';
      track.style.overflowX = 'visible';
      const rect = section.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const p = Math.min(1, Math.max(0, -rect.top / (total || 1)));
      const distance = Math.max(0, track.scrollWidth - window.innerWidth);
      track.style.transform = `translate3d(${-distance * p}px,0,0)`;
      if (bar) bar.style.width = (p * 100).toFixed(2) + '%';
    };

    let queued = false;
    const onScroll = () => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(() => { queued = false; apply(); });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    apply();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      data-scene="1"
      style={{
        position: 'relative',
        zIndex: 4,
        marginTop: '-14vh',
        height: '420vh',
        background: 'linear-gradient(180deg, #070C18 0%, #0A1326 40%, #070C18 100%)',
      }}
    >
      <div
        ref={stickyRef}
        style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 'clamp(30px,5vh,60px)' }}
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, padding: '0 clamp(24px,6vw,60px)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <span style={{ fontSize: 11, letterSpacing: '.3em', textTransform: 'uppercase', color: 'var(--accent)' }}>03 — Process</span>
            <h2 style={{ margin: 0, fontSize: 'clamp(32px,4.2vw,68px)', fontWeight: 700, letterSpacing: '-.04em', lineHeight: 1 }}>
              Idea to <span style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: 'italic', fontWeight: 400 }}>published</span>, in eight moves.
            </h2>
          </div>
          <span style={{ fontSize: 11, letterSpacing: '.2em', textTransform: 'uppercase', color: '#6C7A92' }}>Scroll to move through the process →</span>
        </div>

        <div
          ref={trackRef}
          style={{ display: 'flex', gap: 'clamp(16px,1.8vw,28px)', padding: '0 clamp(24px,6vw,60px)', willChange: 'transform' }}
        >
          {processSteps.map((step) => (
            <article
              key={step.num}
              style={{
                flex: '0 0 clamp(250px,23vw,330px)',
                aspectRatio: '4 / 5',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: 'clamp(24px,2vw,34px)',
                borderRadius: 22,
                border: '1px solid rgba(242,244,248,.08)',
                background: `radial-gradient(120% 110% at ${step.pos}% 10%, rgba(62,109,255,.85) 0%, rgba(30,56,150,.55) 34%, rgba(8,12,24,.96) 74%, #06080F 100%)`,
              }}
            >
              <span style={{ fontSize: 'clamp(38px,3.4vw,54px)', fontWeight: 500, letterSpacing: '-.03em', lineHeight: 1, color: '#F2F4F8' }}>{step.num}</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <h3 style={{ margin: 0, fontSize: 'clamp(19px,1.6vw,24px)', fontWeight: 600, letterSpacing: '-.02em', color: '#FFFFFF' }}>{step.title}</h3>
                <p style={{ margin: 0, fontSize: 'clamp(13px,1vw,15px)', lineHeight: 1.55, color: 'rgba(242,244,248,.72)' }}>{step.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div style={{ padding: '0 clamp(24px,6vw,60px)' }}>
          <div style={{ height: 1, background: 'rgba(242,244,248,.12)' }}>
            <div ref={barRef} style={{ height: 1, width: '0%', background: 'var(--accent)' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
