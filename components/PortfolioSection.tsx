'use client';

import { useState } from 'react';

const portfolioItems = [
  { label: 'Reels', count: '148' },
  { label: 'Long videos', count: '62' },
  { label: 'Commercials', count: '24' },
  { label: 'Photography', count: '310' },
  { label: 'Branding', count: '38' },
  { label: 'Graphic design', count: '190' },
  { label: 'Thumbnails', count: '420' },
  { label: 'Campaigns', count: '27' },
];

export default function PortfolioSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="portfolio"
      data-scene="1"
      style={{
        position: 'relative',
        zIndex: 8,
        marginTop: '-14vh',
        display: 'flex',
        flexWrap: 'wrap',
        gap: 'clamp(40px,5vw,80px)',
        padding: 'clamp(90px,14vh,180px) clamp(24px,6vw,60px)',
        background: '#070C18',
        borderTop: '1px solid rgba(242,244,248,.08)',
        willChange: 'transform, filter',
      }}
    >
      <div style={{ flex: '2 1 480px', display: 'flex', flexDirection: 'column', gap: 'clamp(28px,3vw,44px)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <span data-reveal="1" style={{ fontSize: 11, letterSpacing: '.3em', textTransform: 'uppercase', color: 'var(--accent)' }}>07 — Portfolio</span>
          <h2 data-reveal="1" style={{ margin: 0, fontSize: 'clamp(34px,4.4vw,76px)', fontWeight: 700, letterSpacing: '-.04em', lineHeight: .98 }}>
            Everything, in<br />one place.
          </h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {portfolioItems.map((item, i) => (
            <a
              key={i}
              href="#portfolio"
              className="portfolio-row"
              style={{
                borderBottom: i === portfolioItems.length - 1 ? '1px solid rgba(242,244,248,.1)' : undefined,
              }}
              onMouseEnter={() => setActiveIndex(i)}
            >
              {item.label}
              <span style={{ fontSize: 11, letterSpacing: '.18em', color: '#55627A' }}>{item.count}</span>
            </a>
          ))}
        </div>
        <a href="#contact" data-reveal="1" className="btn-primary" style={{ alignSelf: 'flex-start', padding: '18px 32px', fontSize: 12 }}>
          Explore full portfolio <span>→</span>
        </a>
      </div>
      <div style={{ flex: '1 1 320px', position: 'sticky', top: 130, alignSelf: 'flex-start' }}>
        <div style={{ position: 'relative', aspectRatio: '4 / 5', borderRadius: 4, overflow: 'hidden', background: '#0C1526' }}>
          {portfolioItems.map((item, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                inset: 0,
                opacity: activeIndex === i ? 1 : 0,
                transition: 'opacity 600ms cubic-bezier(.16,1,.3,1)',
                background: `linear-gradient(${135 + i * 20}deg, #0C1526, #060B18)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span style={{ fontSize: 9, letterSpacing: '.2em', textTransform: 'uppercase', color: '#55627A' }}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
