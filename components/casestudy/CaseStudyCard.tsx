'use client';

import { useState, type CSSProperties } from 'react';
import type { CaseStudy } from './caseStudies';

/**
 * `pinned` — sized to fit a fixed-height slot (landing-page sticky section).
 * `flow`   — natural height, stacks down the page (case studies index).
 */
type Variant = 'pinned' | 'flow' | 'horizontal';

interface Props {
  story: CaseStudy;
  variant?: Variant;
  style?: CSSProperties;
}

export default function CaseStudyCard({ story, variant = 'horizontal', style }: Props) {
  const [loaded, setLoaded] = useState<Record<string, boolean>>({});
  const isHorizontal = variant === 'horizontal' || variant === 'pinned';

  const shots = story.beforeImage ? [story.beforeImage, story.afterImage] : [story.afterImage];

  return (
    <article
      style={{
        /* 60vw gives the clean 1.5 cards on screen look with larger image width */
        flex: isHorizontal ? '0 0 clamp(340px, 60vw, 860px)' : undefined,
        width: isHorizontal ? 'clamp(340px, 60vw, 860px)' : undefined,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: 'clamp(14px, 1.8vh, 22px)',
        padding: 'clamp(22px, 2.4vw, 36px)',
        borderRadius: 'clamp(18px, 1.8vw, 26px)',
        background: 'radial-gradient(120% 130% at 12% 8%, #123C8C 0%, #0A2154 34%, #061029 66%, #030713 100%)',
        border: '1px solid rgba(242, 244, 248, 0.12)',
        boxShadow: '0 24px 60px -12px rgba(0, 0, 0, 0.75)',
        boxSizing: 'border-box',
        ...style,
      }}
    >
      {/* ── Title + CTA ── */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexShrink: 0 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <span style={{ fontSize: 10, letterSpacing: '.22em', textTransform: 'uppercase', color: '#8CA6D8', fontWeight: 600 }}>
            {story.category}&nbsp;&nbsp;·&nbsp;&nbsp;{story.year}
          </span>
          <h3 style={{ margin: 0, fontSize: 'clamp(20px, 1.8vw, 28px)', fontWeight: 700, letterSpacing: '-.035em', lineHeight: 1.1, color: '#F2F4F8' }}>
            {story.title}
          </h3>
        </div>
        {story.href && (
          <a href={story.href} className="btn-outline" style={{ padding: '8px 18px', flexShrink: 0, fontSize: 10, borderRadius: 999 }}>
            Read case study <span>→</span>
          </a>
        )}
      </div>

      {/* ── Logo + before/after screenshots (Enlarged & High-Legibility) ── */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'clamp(14px, 1.8vw, 24px)',
          minHeight: 0,
          flex: '1 1 auto',
        }}
      >
        {story.logo && (
          <div
            style={{
              position: 'relative',
              flex: '0 0 auto',
              width: 'clamp(56px, 5.4vw, 80px)',
              height: 'clamp(56px, 5.4vw, 80px)',
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: 999,
                overflow: 'hidden',
                background: '#FFFFFF',
                border: '2px solid rgba(130,175,255,.85)',
                boxShadow: '0 0 16px 2px rgba(90,150,255,.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img src={story.logo} alt={`${story.title} logo`} style={{ display: 'block', width: '74%', height: '74%', objectFit: 'contain' }} />
            </div>
          </div>
        )}

        <div
          style={{
            flex: '1 1 auto',
            display: 'flex',
            alignItems: 'center',
            gap: 'clamp(10px, 1.4vw, 20px)',
            minWidth: 0,
          }}
        >
          {shots.map((src, i) => {
            const isBefore = i === 0 && Boolean(story.beforeImage);
            return (
              <figure
                key={src}
                style={{
                  flex: story.beforeImage ? '1 1 0' : '0 1 420px',
                  minWidth: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 6,
                }}
              >
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: 'clamp(140px, 18vh, 190px)',
                    overflow: 'hidden',
                    borderRadius: 'clamp(10px, 1vw, 14px)',
                    background: '#FFFFFF',
                    boxShadow: '0 12px 28px rgba(2,6,20,.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '4px',
                    boxSizing: 'border-box',
                  }}
                >
                  <img
                    src={src}
                    alt={`${story.title} — ${isBefore ? 'before' : 'after'}`}
                    onLoad={() => setLoaded((p) => ({ ...p, [src]: true }))}
                    style={{
                      display: 'block',
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      transition: 'opacity 300ms ease',
                      opacity: loaded[src] ? 1 : 0.8,
                    }}
                  />
                </div>
                <figcaption style={{ fontSize: 10, letterSpacing: '.2em', textTransform: 'uppercase', color: '#8CA6D8', fontWeight: 600 }}>
                  {isBefore ? 'Before' : 'After'}
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>

      {/* ── Stats ── */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          flexShrink: 0,
        }}
      >
        {story.stats.map((stat, si) => (
          <p
            key={si}
            style={{
              margin: 0,
              fontSize: 'clamp(13px, 1.1vw, 16px)',
              fontWeight: 400,
              letterSpacing: '-.02em',
              lineHeight: 1.3,
              color: '#F2F4F8',
            }}
          >
            {stat.value && <span style={{ fontWeight: 600, color: '#5B93FF' }}>{stat.value} </span>}
            {stat.label}
          </p>
        ))}
      </div>

      {/* ── Descriptions ── */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
          paddingTop: 'clamp(10px, 1.3vh, 16px)',
          borderTop: '1px solid rgba(180,205,255,.16)',
          flexShrink: 0,
        }}
      >
        {story.descriptions.map((d, di) => (
          <p
            key={di}
            style={{
              margin: 0,
              fontSize: 'clamp(11.5px, 0.9vw, 13.5px)',
              lineHeight: 1.55,
              color: '#B6C6E4',
            }}
          >
            {d}
          </p>
        ))}
      </div>
    </article>
  );
}
