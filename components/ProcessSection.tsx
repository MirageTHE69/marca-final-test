'use client';

import { useEffect, useRef } from 'react';

const processSteps = [
  { num: '01', title: 'Research', desc: 'We research and analyze top-performing creators and content in your niche on social media to strategically build and establish your unique brand identity.', pos: 22 },
  { num: '02', title: 'Scripting', desc: 'Using the research and information on you and your business, we script an entire month of short form content.', pos: 34 },
  { num: '03', title: 'Filming', desc: 'We shoot all our content in a dedicated, professionally designed setup to ensure high-quality visuals and consistency.', pos: 46 },
  { num: '04', title: 'Editing', desc: 'We edit videos using high-quality visuals and sound effects to make the content engaging and visually appealing.', pos: 58 },
  { num: '05', title: 'Social Media Management', desc: 'We manage social media accounts, upload content consistently, and optimize it for maximum reach and engagement.', pos: 70 },
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
      section.style.height = '260vh';
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
        height: '260vh',
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
              Idea to <span style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: 'italic', fontWeight: 400 }}>published</span>, in five moves.
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
