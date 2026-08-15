'use client';

import { useState } from 'react';
import CaseStudyCard from '@/components/casestudy/CaseStudyCard';
import { featuredCaseStudies } from '@/components/casestudy/caseStudies';

export default function CaseStudiesSection() {
  const [active, setActive] = useState(0);

  return (
    <section id="case-studies" style={{ position: 'relative', zIndex: 6, background: '#04060A' }}>
      <div style={{ position: 'relative', height: '300vh' }}>
        <div
          style={{
            position: 'sticky',
            top: 0,
            height: '100vh',
            boxSizing: 'border-box',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            padding: 'clamp(64px,9vh,104px) 0 clamp(18px,2.6vh,36px)',
          }}
        >
          {/* Header */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, padding: '0 clamp(24px,6vw,60px)', textAlign: 'center' }}>
            <span style={{ fontSize: 11, letterSpacing: '.3em', textTransform: 'uppercase', color: 'var(--accent)' }}>Case Studies</span>
            <h2 style={{ margin: 0, fontSize: 'clamp(30px,3.8vw,62px)', fontWeight: 700, letterSpacing: '-.04em', lineHeight: 1.02 }}>
              Proof, told as <span style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: 'italic', fontWeight: 400 }}>a story.</span>
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10, paddingTop: 4 }}>
              {featuredCaseStudies.map((s, i) => (
                <button
                  key={s.chip}
                  type="button"
                  className={`filter-chip${active === i ? ' is-active' : ''}`}
                  style={{ padding: '6px 18px' }}
                  onClick={() => setActive(i)}
                >
                  {s.chip}
                </button>
              ))}
            </div>
          </div>

          {/* Full-width cards */}
          <div style={{ position: 'relative', flex: 1, minHeight: 0, marginTop: 'clamp(16px,2.4vh,30px)' }}>
            {featuredCaseStudies.map((story, i) => (
              <CaseStudyCard
                key={story.title}
                story={story}
                variant="pinned"
                style={{
                  position: 'absolute',
                  inset: 0,
                  margin: '0 clamp(24px,6vw,60px)',
                  opacity: active === i ? 1 : 0,
                  transition: 'opacity 600ms cubic-bezier(.2,.7,.2,1)',
                  pointerEvents: active === i ? 'auto' : 'none',
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', padding: 'clamp(50px,7vh,86px) clamp(24px,6vw,60px) clamp(70px,10vh,120px)', background: '#04060A' }}>
        <a href="/case-studies" className="btn-outline" style={{ padding: '16px 30px' }}>
          See more case studies <span>→</span>
        </a>
      </div>
    </section>
  );
}
