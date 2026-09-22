'use client';

import { useEffect, useRef } from 'react';
import RiotCaseStudyCard, { CARD_ACCENTS } from './RiotCaseStudyCard';
import { featuredCaseStudies } from '@/components/casestudy/caseStudies';

/** Same sticky horizontal-scroll deck as CaseStudiesSection. */
export default function RiotCaseStudies() {
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
      section.style.height = '280vh';
      sticky.style.position = 'sticky';
      sticky.style.height = '100vh';
      sticky.style.padding = '';
      track.style.overflowX = 'visible';
      const rect = section.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const p = Math.min(1, Math.max(0, -rect.top / (total || 1)));
      const padRight = Math.max(24, window.innerWidth * 0.06);
      const distance = Math.max(0, track.scrollWidth - window.innerWidth + padRight);
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
    <section id="case-studies" ref={sectionRef} className="riot-black" style={{ position: 'relative', height: '280vh' }}>
      <div
        ref={stickyRef}
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          boxSizing: 'border-box',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 'clamp(24px,4vh,46px) 0 clamp(22px,3.5vh,40px)',
        }}
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 18, padding: '0 clamp(18px,4vw,44px)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.24em', textTransform: 'uppercase', color: 'var(--r-yellow)' }}>
              Case Studies
            </span>
            <h2 className="riot-display" style={{ fontSize: 'clamp(34px,5.4vw,82px)', color: 'var(--r-h-yellow)' }}>
              Proof, told as{' '}
              <span style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: 'italic', fontWeight: 400, letterSpacing: '-.01em' }}>
                a story.
              </span>
            </h2>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.16em', textTransform: 'uppercase', color: 'rgba(243,240,221,.6)' }}>
              Scroll to explore case studies →
            </span>
            <a href="/case-studies" className="riot-btn riot-btn-yellow" style={{ padding: '9px 18px', fontSize: 10 }}>
              All studies →
            </a>
          </div>
        </div>

        <div
          ref={trackRef}
          style={{ display: 'flex', gap: 'clamp(20px,2.6vw,36px)', padding: 'clamp(10px,1.5vh,20px) clamp(18px,4vw,44px)', willChange: 'transform', alignItems: 'stretch' }}
        >
          {featuredCaseStudies.map((story, i) => (
            <RiotCaseStudyCard
              key={story.title}
              story={story}
              variant="deck"
              accent={CARD_ACCENTS[i % CARD_ACCENTS.length]}
            />
          ))}

          <article
            className="riot-card"
            style={{
              flex: '0 0 clamp(300px, 52vw, 700px)',
              width: 'clamp(300px, 52vw, 700px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              gap: 20,
              padding: 'clamp(30px,3.4vw,54px)',
              background: 'var(--r-yellow)',
              color: 'var(--r-black)',
              boxSizing: 'border-box',
              minHeight: 360,
            }}
          >
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.22em', textTransform: 'uppercase' }}>Ready for results?</span>
            <h3 className="riot-display" style={{ fontSize: 'clamp(22px,2.2vw,34px)', maxWidth: '22ch' }}>
              Ready to turn your story into authority?
            </h3>
            <a href="/case-studies" className="riot-btn riot-btn-cream" style={{ padding: '14px 28px' }}>
              Explore full case studies →
            </a>
          </article>
        </div>

        <div style={{ padding: '0 clamp(18px,4vw,44px)' }}>
          <div style={{ height: 3, background: 'rgba(243,240,221,.2)' }}>
            <div ref={barRef} style={{ height: 3, width: '0%', background: 'var(--r-yellow)', transition: 'width 100ms ease-out' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
