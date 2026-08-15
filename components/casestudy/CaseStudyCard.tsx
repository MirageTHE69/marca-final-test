'use client';

import { useState, type CSSProperties } from 'react';
import type { CaseStudy } from './caseStudies';

/**
 * `pinned` — sized to fit a fixed-height slot (landing-page sticky section).
 * `flow`   — natural height, stacks down the page (case studies index).
 */
type Variant = 'pinned' | 'flow';

interface Props {
  story: CaseStudy;
  variant?: Variant;
  /** Positioning / visibility handled by the parent (e.g. the landing carousel). */
  style?: CSSProperties;
}

const FALLBACK_RATIO = '1.89';

export default function CaseStudyCard({ story, variant = 'flow', style }: Props) {
  const [ratios, setRatios] = useState<Record<string, number>>({});
  const pinned = variant === 'pinned';

  // Each screenshot sizes its holder to the image's own aspect ratio, so any
  // image shape fits without cropping or leaving empty space in the card.
  const handleImageLoad = (src: string) => (e: React.SyntheticEvent<HTMLImageElement>) => {
    const el = e.currentTarget;
    if (!el.naturalWidth || !el.naturalHeight) return;
    const r = el.naturalWidth / el.naturalHeight;
    setRatios((prev) => (prev[src] === r ? prev : { ...prev, [src]: r }));
  };

  const shots = story.beforeImage ? [story.beforeImage, story.afterImage] : [story.afterImage];

  return (
    <article
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: pinned ? 'clamp(8px, min(2vw,1.6vh), 28px)' : 'clamp(18px,2.2vw,34px)',
        padding: pinned
          ? 'clamp(20px, min(3.6vw,3.2vh), 60px) clamp(20px, min(4vw,3.2vh), 68px) clamp(22px, min(4.4vw,3.4vh), 72px)'
          : 'clamp(24px,3.4vw,56px) clamp(24px,3.8vw,64px) clamp(28px,4vw,64px)',
        borderRadius: 'clamp(14px,1.4vw,22px)',
        background: 'radial-gradient(120% 130% at 12% 8%, #123C8C 0%, #0A2154 34%, #061029 66%, #030713 100%)',
        overflow: 'hidden',
        ...style,
      }}
    >
      {/* ── Title + CTA ── */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, flexShrink: 0 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <span style={{ fontSize: 10, letterSpacing: '.22em', textTransform: 'uppercase', color: '#8CA6D8' }}>
            {story.category}&nbsp;&nbsp;·&nbsp;&nbsp;{story.year}
          </span>
          <h3 style={{ margin: 0, fontSize: 'clamp(20px,2.4vw,38px)', fontWeight: 700, letterSpacing: '-.035em', lineHeight: 1.05, color: '#F2F4F8' }}>
            {story.title}
          </h3>
        </div>
        {story.href && (
          <a href={story.href} className="btn-outline" style={{ padding: '11px 22px', flexShrink: 0, fontSize: 10 }}>
            Read case study <span>→</span>
          </a>
        )}
      </div>

      {/* ── Logo + before/after screenshots ── */}
      <div
        style={{
          display: 'flex',
          alignItems: pinned ? 'stretch' : 'center',
          flexWrap: pinned ? 'nowrap' : 'wrap',
          gap: pinned ? 'clamp(18px, min(3vw,2.6vh), 52px)' : 'clamp(22px,3vw,52px)',
          ...(pinned ? { flex: '1 1 0', minHeight: 0, overflow: 'hidden' } : {}),
        }}
      >
        {story.logo && (
          <div
            style={{
              position: 'relative',
              flex: '0 0 auto',
              alignSelf: 'center',
              width: pinned ? 'clamp(90px, min(15vw,24vh), 220px)' : 'clamp(96px,12vw,190px)',
              height: pinned ? 'clamp(90px, min(15vw,24vh), 220px)' : 'clamp(96px,12vw,190px)',
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
                boxShadow: '0 0 14px 2px rgba(90,150,255,.5)',
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
            flex: '1 1 320px',
            display: 'flex',
            // In flow, a before/after pair stacks once the row gets too narrow
            // to keep both screenshots legible (phones).
            flexWrap: pinned ? 'nowrap' : 'wrap',
            alignItems: pinned ? 'stretch' : 'flex-start',
            gap: pinned ? 'clamp(10px, min(1.5vw,1.4vh), 28px)' : 'clamp(12px,1.5vw,28px)',
            minWidth: 0,
          }}
        >
          {shots.map((src, i) => {
            const isBefore = i === 0 && Boolean(story.beforeImage);
            return (
              <figure
                key={src}
                style={{
                  flex: story.beforeImage
                    ? pinned
                      ? '1 1 0'
                      : '1 1 300px'
                    : pinned
                      ? '0 1 480px'
                      : '0 1 660px',
                  minWidth: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                }}
              >
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: ratios[src] ? String(ratios[src]) : FALLBACK_RATIO,
                    overflow: 'hidden',
                    borderRadius: 'clamp(12px,1.1vw,18px)',
                    background: '#FFFFFF',
                    boxShadow: '0 18px 46px rgba(2,6,20,.42)',
                    ...(pinned ? { flex: '0 1 auto', minHeight: 0, maxHeight: '100%', width: 'auto' } : {}),
                  }}
                >
                  <img
                    src={src}
                    alt={`${story.title} — ${isBefore ? 'before' : 'after'}`}
                    onLoad={handleImageLoad(src)}
                    style={{ display: 'block', width: '100%', height: '100%', objectFit: 'contain' }}
                  />
                </div>
                <figcaption style={{ fontSize: 10, letterSpacing: '.22em', textTransform: 'uppercase', color: '#8CA6D8' }}>
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
          gap: pinned ? 'clamp(3px, min(.7vw,.6vh), 10px)' : 'clamp(4px,.8vw,12px)',
          flexShrink: 0,
        }}
      >
        {story.stats.map((stat, si) => (
          <p
            key={si}
            style={{
              margin: 0,
              fontSize: pinned ? 'clamp(14px, min(2vw,2vh), 34px)' : 'clamp(17px,2.1vw,36px)',
              fontWeight: 300,
              letterSpacing: '-.02em',
              lineHeight: 1.22,
              color: '#F2F4F8',
            }}
          >
            {stat.value && <span style={{ fontWeight: 500, color: '#5B93FF' }}>{stat.value} </span>}
            {stat.label}
          </p>
        ))}
      </div>

      {/* ── Descriptions ── */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: pinned ? 'clamp(10px, min(2vw,1.6vh), 36px)' : 'clamp(14px,2.2vw,40px)',
          paddingTop: pinned ? 'clamp(10px, min(1.6vw,1.3vh), 22px)' : 'clamp(14px,1.8vw,26px)',
          borderTop: '1px solid rgba(180,205,255,.16)',
          flexShrink: 0,
        }}
      >
        {story.descriptions.map((d, di) => (
          <p
            key={di}
            style={{
              margin: 0,
              flex: '1 1 320px',
              fontSize: pinned ? 'clamp(13px, min(1.25vw,1.5vh), 18px)' : 'clamp(13px,1.15vw,17px)',
              lineHeight: 1.62,
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
