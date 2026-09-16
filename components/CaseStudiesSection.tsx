'use client';

import { useEffect, useRef } from 'react';
import CaseStudyCard from '@/components/casestudy/CaseStudyCard';
import { featuredCaseStudies } from '@/components/casestudy/caseStudies';

interface CaseStudiesSectionProps {
  /** Overrides the section background — used by the /v2 jewel-tone preview. */
  background?: string;
}

export default function CaseStudiesSection({ background }: CaseStudiesSectionProps = {}) {
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
      requestAnimationFrame(() => {
        queued = false;
        apply();
      });
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
      id="case-studies"
      ref={sectionRef}
      style={{
        position: 'relative',
        zIndex: 6,
        height: '280vh',
        background: background ?? '#04060A',
      }}
    >
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
          padding: 'clamp(28px, 4vh, 48px) 0 clamp(24px, 3.5vh, 40px)',
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 20, padding: '0 clamp(24px,6vw,60px)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={{ fontSize: 11, letterSpacing: '.3em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 600 }}>Case Studies</span>
            <h2 style={{ margin: 0, fontSize: 'clamp(28px,3.4vw,56px)', fontWeight: 700, letterSpacing: '-.04em', lineHeight: 1.02, color: '#F2F4F8' }}>
              Proof, told as <span style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: 'italic', fontWeight: 400 }}>a story.</span>
            </h2>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <span style={{ fontSize: 11, letterSpacing: '.2em', textTransform: 'uppercase', color: '#6C7A92' }}>
              Scroll to explore case studies →
            </span>
            <a href="/case-studies" className="btn-outline" style={{ padding: '8px 18px', fontSize: 10 }}>
              All studies <span>→</span>
            </a>
          </div>
        </div>

        {/* Horizontal scroll track */}
        <div
          ref={trackRef}
          style={{
            display: 'flex',
            gap: 'clamp(24px, 3vw, 40px)',
            padding: 'clamp(10px, 1.5vh, 20px) clamp(24px, 6vw, 60px)',
            willChange: 'transform',
            alignItems: 'stretch',
          }}
        >
          {featuredCaseStudies.map((story) => (
            <CaseStudyCard
              key={story.title}
              story={story}
              variant="horizontal"
            />
          ))}

          {/* Final CTA card in the deck */}
          <article
            style={{
              flex: '0 0 clamp(340px, 60vw, 860px)',
              width: 'clamp(340px, 60vw, 860px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              gap: 22,
              padding: 'clamp(32px, 3.5vw, 56px)',
              borderRadius: 'clamp(18px, 1.8vw, 26px)',
              background: 'radial-gradient(120% 120% at 50% 20%, rgba(62,109,255,.25) 0%, rgba(10,20,50,.7) 60%, #060912 100%)',
              border: '1px solid rgba(62,109,255,.3)',
              boxShadow: '0 24px 60px -10px rgba(0, 0, 0, 0.75)',
              boxSizing: 'border-box',
              minHeight: 380,
            }}
          >
            <span style={{ fontSize: 11, letterSpacing: '.26em', textTransform: 'uppercase', color: 'var(--accent)' }}>Ready for results?</span>
            <h3 style={{ margin: 0, fontSize: 'clamp(22px, 2.2vw, 32px)', fontWeight: 700, letterSpacing: '-.03em', color: '#F2F4F8', lineHeight: 1.15, maxWidth: '24ch' }}>
              Ready to turn your story into authority?
            </h3>
            <a href="/case-studies" className="btn-primary" style={{ padding: '16px 32px', fontSize: 12 }}>
              Explore full case studies <span>→</span>
            </a>
          </article>
        </div>

        {/* Progress bar */}
        <div style={{ padding: '0 clamp(24px,6vw,60px)' }}>
          <div style={{ height: 2, background: 'rgba(242,244,248,.1)' }}>
            <div ref={barRef} style={{ height: 2, width: '0%', background: 'var(--accent)', transition: 'width 100ms ease-out' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
