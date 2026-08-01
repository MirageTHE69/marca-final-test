'use client';

import { useEffect, useRef } from 'react';

const processSteps = [
  { num: '01', title: 'Discovery', desc: 'A 90-minute session with the people who actually make the decisions. We leave with your positioning, your audience and what winning looks like.', deliverable: 'Creative brief', highlight: false },
  { num: '02', title: 'Research', desc: 'Category teardown, competitor content audit and a read of what your audience already watches. Taste, backed by evidence.', deliverable: 'Insight deck', highlight: false },
  { num: '03', title: 'Strategy', desc: 'Content pillars, formats, cadence and the one message everything ladders back to. Signed off before a camera comes out.', deliverable: 'Content strategy', highlight: false },
  { num: '04', title: 'Script writing', desc: 'Hooks, beats and shot lists. You review words on a page, not a rough cut — cheaper to change, better to shoot.', deliverable: 'Scripts & boards', highlight: false },
  { num: '05', title: 'Production', desc: 'Full crew, cinema glass, sound and lighting. One shoot day is engineered to feed a month of content across every format.', deliverable: 'Raw footage library', highlight: true },
  { num: '06', title: 'Editing', desc: 'Story cut, then colour, sound design and graphics. Two rounds of feedback built into the schedule, not bolted on.', deliverable: 'Final masters', highlight: false },
  { num: '07', title: 'Publishing', desc: 'Platform-native exports, thumbnails, captions and copy — scheduled, or handed over ready to post.', deliverable: 'Publishing kit', highlight: false },
  { num: '08', title: 'Optimisation', desc: 'Retention curves, hook tests and a monthly review. What worked gets multiplied; what didn\'t gets retired.', deliverable: 'Performance review', highlight: false },
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
          style={{ display: 'flex', gap: 'clamp(18px,2vw,32px)', padding: '0 clamp(24px,6vw,60px)', willChange: 'transform' }}
        >
          {processSteps.map((step) => (
            <div
              key={step.num}
              style={{
                flex: '0 0 clamp(260px,24vw,360px)',
                display: 'flex',
                flexDirection: 'column',
                gap: 18,
                padding: '32px 28px',
                border: '1px solid rgba(242,244,248,.1)',
                borderRadius: 6,
                background: step.highlight
                  ? 'linear-gradient(180deg, rgba(62,109,255,.14), rgba(242,244,248,0))'
                  : 'linear-gradient(180deg, rgba(242,244,248,.045), rgba(242,244,248,0))',
              }}
            >
              <span style={{ fontSize: 44, fontWeight: 700, letterSpacing: '-.04em', color: 'rgba(242,244,248,.16)' }}>{step.num}</span>
              <h3 style={{ margin: 0, fontSize: 22, fontWeight: 600, letterSpacing: '-.02em' }}>{step.title}</h3>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.7, color: '#8E9BB0' }}>{step.desc}</p>
              <span style={{ marginTop: 'auto', fontSize: 10, letterSpacing: '.2em', textTransform: 'uppercase', color: '#55627A' }}>
                Deliverable — {step.deliverable}
              </span>
            </div>
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
