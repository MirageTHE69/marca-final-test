'use client';

import { useEffect, useRef } from 'react';

/** Same steps and same sticky horizontal-scroll mechanic as ProcessSection. */
const processSteps = [
  { num: '01', title: 'Research', desc: 'We research and analyze top-performing creators and content in your niche on social media to strategically build and establish your unique brand identity.', bg: 'var(--r-yellow)' },
  { num: '02', title: 'Scripting', desc: 'Using the research and information on you and your business, we script an entire month of short form content.', bg: 'var(--r-blue)' },
  { num: '03', title: 'Filming', desc: 'We shoot all our content in a dedicated, professionally designed setup to ensure high-quality visuals and consistency.', bg: 'var(--r-orange)' },
  { num: '04', title: 'Editing', desc: 'We edit videos using high-quality visuals and sound effects to make the content engaging and visually appealing.', bg: 'var(--r-cream)' },
  { num: '05', title: 'Social Media Management', desc: 'We manage social media accounts, upload content consistently, and optimize it for maximum reach and engagement.', bg: 'var(--r-olive)' },
];

export default function RiotProcess() {
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
        sticky.style.padding = '70px 0';
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
    <section id="process" ref={sectionRef} className="riot-cream" style={{ position: 'relative', height: '260vh' }}>
      <div
        ref={stickyRef}
        style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 'clamp(26px,4.5vh,54px)' }}
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 22, padding: '0 clamp(18px,4vw,44px)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 8 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.24em', textTransform: 'uppercase', color: 'var(--r-muted)' }}>
              03 — Process
            </span>
            <h2 className="riot-display" style={{ fontSize: 'clamp(40px,7.2vw,112px)', color: 'var(--r-h-red)' }}>Our Process</h2>
            <p style={{ margin: 0, fontSize: 'clamp(15px,1.15vw,19px)', lineHeight: 1.6, color: 'var(--r-muted)' }}>
              Done for you end to end!
            </p>
          </div>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--r-muted)' }}>
            Scroll to move through the process →
          </span>
        </div>

        <div ref={trackRef} style={{ display: 'flex', gap: 'clamp(16px,1.8vw,26px)', padding: '0 clamp(18px,4vw,44px)', willChange: 'transform' }}>
          {processSteps.map((step) => (
            <article
              key={step.num}
              className="riot-card"
              style={{
                flex: '0 0 clamp(250px,23vw,330px)',
                aspectRatio: '4 / 5',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: 'clamp(22px,2vw,32px)',
                background: step.bg,
                color: 'var(--r-black)',
              }}
            >
              <span className="riot-display" style={{ fontSize: 'clamp(38px,3.4vw,54px)' }}>{step.num}</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <h3 className="riot-display" style={{ fontSize: 'clamp(18px,1.6vw,23px)' }}>{step.title}</h3>
                <p style={{ margin: 0, fontSize: 'clamp(13px,1vw,15px)', lineHeight: 1.55, color: 'rgba(18,18,18,.78)' }}>{step.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div style={{ padding: '0 clamp(18px,4vw,44px)' }}>
          <div style={{ height: 3, background: 'rgba(18,18,18,.15)' }}>
            <div ref={barRef} style={{ height: 3, width: '0%', background: 'var(--r-black)' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
