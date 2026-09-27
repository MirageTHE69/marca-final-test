import Link from 'next/link';
import MediaSlot from '@/components/MediaSlot';
import type { CaseStudy } from '@/components/casestudy/caseStudies';

/** Before/after screenshots are all 1723×913 — lock the frames to that. */
const SHOT_ASPECT = '1723 / 913';

/**
 * Every card gets its own colourway, cycled by position, so a column of
 * them reads as a set rather than one repeated block. Each entry carries
 * the full pairing — surface, text, numbers and the tint used on the logo
 * ring, the AFTER chip and the button — so contrast holds on every surface.
 */
export const CARD_THEMES = [
  {
    surface: 'var(--r-cream)',
    ink: 'var(--r-ink)',
    muted: 'var(--r-muted)',
    stat: 'var(--r-h-red)',
    accent: 'var(--r-yellow)',
    accentInk: 'var(--r-black)',
  },
  {
    surface: 'var(--r-yellow)',
    ink: 'var(--r-black)',
    muted: 'rgba(18,18,18,.72)',
    stat: 'var(--r-h-blue)',
    accent: 'var(--r-blue)',
    accentInk: 'var(--r-black)',
  },
  {
    surface: 'var(--r-blue)',
    ink: 'var(--r-black)',
    muted: 'rgba(18,18,18,.7)',
    stat: 'var(--r-h-red)',
    accent: 'var(--r-yellow)',
    accentInk: 'var(--r-black)',
  },
  {
    surface: 'var(--r-black)',
    ink: 'var(--r-cream)',
    muted: 'rgba(224,225,207,.7)',
    stat: 'var(--r-yellow)',
    accent: 'var(--r-yellow)',
    accentInk: 'var(--r-black)',
    invert: true,
  },
  {
    surface: 'var(--r-orange)',
    ink: 'var(--r-black)',
    muted: 'rgba(18,18,18,.74)',
    stat: 'var(--r-black)',
    accent: 'var(--r-cream)',
    accentInk: 'var(--r-black)',
  },
  {
    surface: 'var(--r-olive)',
    ink: 'var(--r-black)',
    muted: 'rgba(18,18,18,.72)',
    stat: 'var(--r-h-blue)',
    accent: 'var(--r-black)',
    accentInk: 'var(--r-cream)',
  },
] as const;

interface Props {
  story: CaseStudy;
  /** Position in the set — picks the colourway. */
  index?: number;
  /**
   * `deck` — fixed width for the landing page's horizontal rail.
   * `list` — full width, for the case studies index.
   */
  variant?: 'deck' | 'list';
}

/**
 * Landscape card: identity and numbers on the left, the before/after
 * pair on the right. Collapses to a single column under ~820px.
 */
export default function RiotCaseStudyCard({ story, index = 0, variant = 'list' }: Props) {
  const t = CARD_THEMES[index % CARD_THEMES.length];
  const invert = 'invert' in t && t.invert;

  const shots = story.beforeImage
    ? [
        { src: story.beforeImage, caption: 'Before' },
        { src: story.afterImage, caption: 'After' },
      ]
    : [{ src: story.afterImage, caption: 'After' }];

  const deck = variant === 'deck';

  return (
    <article
      className={`riot-card riot-case${invert ? ' riot-card-invert' : ''}`}
      style={{
        flex: deck ? '0 0 clamp(300px, 82vw, 1020px)' : undefined,
        width: deck ? 'clamp(300px, 82vw, 1020px)' : '100%',
        display: 'grid',
        gap: 'clamp(18px,2.4vw,34px)',
        padding: 'clamp(18px,2.2vw,32px)',
        background: t.surface,
        color: t.ink,
        boxSizing: 'border-box',
        scrollSnapAlign: 'center',
      }}
    >
      {/* ── Left: identity, numbers, copy ── */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(12px,1.6vh,18px)', minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {story.logo && (
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                width: 'clamp(44px,4.2vw,58px)',
                height: 'clamp(44px,4.2vw,58px)',
                borderRadius: 999,
                overflow: 'hidden',
                background: 'var(--r-cream)',
                border: `2px solid ${t.ink}`,
                boxShadow: `0 0 0 4px ${t.accent}`,
              }}
            >
              <span style={{ position: 'relative', width: '70%', height: '70%' }}>
                <MediaSlot src={story.logo} alt={`${story.title} logo`} placeholder="Logo" sizes="60px" fit="contain" />
              </span>
            </span>
          )}
          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: t.muted }}>
            {story.category}
            <br />
            {story.year}
          </span>
        </div>

        <h3 className="riot-display" style={{ fontSize: 'clamp(24px,2.6vw,40px)', color: t.ink }}>{story.title}</h3>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(12px,1.6vw,24px)' }}>
          {story.stats.map((stat, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 1, minWidth: 0 }}>
              {stat.value && (
                <span className="riot-display" style={{ fontSize: 'clamp(20px,2vw,30px)', color: t.stat }}>{stat.value}</span>
              )}
              <span style={{ fontSize: 11.5, lineHeight: 1.4, color: t.muted, maxWidth: '18ch' }}>{stat.label}</span>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, paddingTop: 12, borderTop: `2px solid ${t.ink}` }}>
          {story.descriptions.slice(0, deck ? 1 : 2).map((d, i) => (
            <p key={i} style={{ margin: 0, fontSize: 'clamp(12px,.92vw,13.5px)', lineHeight: 1.6, color: t.muted }}>{d}</p>
          ))}
        </div>

        {story.href && (
          <Link
            href={story.href}
            className="riot-btn"
            style={{
              alignSelf: 'flex-start',
              marginTop: 'auto',
              padding: '11px 22px',
              fontSize: 11,
              background: t.accent,
              color: t.accentInk,
              borderColor: t.ink,
            }}
          >
            Read case study →
          </Link>
        )}
      </div>

      {/* ── Right: the before / after pair ── */}
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 'clamp(10px,1.4vh,16px)', minWidth: 0 }}>
        {shots.map((shot) => (
          <figure key={shot.src} style={{ margin: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
            <div
              className="riot-media"
              style={{ width: '100%', aspectRatio: SHOT_ASPECT, borderRadius: 12, background: 'var(--r-cream)', borderColor: t.ink }}
            >
              <MediaSlot
                src={shot.src}
                alt={`${story.title} — ${shot.caption.toLowerCase()}`}
                placeholder="Drop image"
                sizes="(max-width: 820px) 90vw, 520px"
                fit="contain"
              />
              <span
                style={{
                  position: 'absolute',
                  top: 8,
                  left: 8,
                  zIndex: 4,
                  padding: '4px 11px',
                  borderRadius: 999,
                  background: shot.caption === 'After' ? t.accent : 'var(--r-cream)',
                  border: '2px solid var(--r-black)',
                  fontSize: 9,
                  fontWeight: 700,
                  letterSpacing: '.14em',
                  textTransform: 'uppercase',
                  color: shot.caption === 'After' ? t.accentInk : 'var(--r-black)',
                  pointerEvents: 'none',
                }}
              >
                {shot.caption}
              </span>
            </div>
          </figure>
        ))}
      </div>
    </article>
  );
}
