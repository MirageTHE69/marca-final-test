import MediaSlot from '@/components/MediaSlot';
import type { CaseStudy } from '@/components/casestudy/caseStudies';

/** Riot-themed twin of CaseStudyCard — same content, same before/after pair. */
export default function RiotCaseStudyCard({ story }: { story: CaseStudy }) {
  const shots = story.beforeImage
    ? [
        { src: story.beforeImage, caption: 'Before' },
        { src: story.afterImage, caption: 'After' },
      ]
    : [{ src: story.afterImage, caption: 'After' }];

  return (
    <article
      className="riot-card"
      style={{
        flex: '0 0 clamp(330px, 60vw, 860px)',
        width: 'clamp(330px, 60vw, 860px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: 'clamp(13px,1.7vh,20px)',
        padding: 'clamp(20px,2.2vw,32px)',
        background: 'var(--r-cream)',
        color: 'var(--r-ink)',
        boxSizing: 'border-box',
      }}
    >
      {/* Title + CTA */}
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 14, flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 13 }}>
          {story.logo && (
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                width: 'clamp(46px,4.6vw,62px)',
                height: 'clamp(46px,4.6vw,62px)',
                borderRadius: 999,
                overflow: 'hidden',
                background: '#FFFFFF',
                border: '2px solid var(--r-black)',
              }}
            >
              <span style={{ position: 'relative', width: '72%', height: '72%' }}>
                <MediaSlot src={story.logo} alt={`${story.title} logo`} placeholder="Logo" sizes="62px" fit="contain" />
              </span>
            </span>
          )}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--r-muted)' }}>
              {story.category}&nbsp;·&nbsp;{story.year}
            </span>
            <h3 className="riot-display" style={{ fontSize: 'clamp(20px,1.9vw,30px)' }}>{story.title}</h3>
          </div>
        </div>
        {story.href && (
          <a href={story.href} className="riot-btn" style={{ padding: '9px 18px', fontSize: 10 }}>
            Read case study →
          </a>
        )}
      </div>

      {/* Before / after */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(10px,1.3vw,18px)', flex: '1 1 auto', minHeight: 0 }}>
        {shots.map((shot) => (
          <figure key={shot.src} style={{ flex: '1 1 240px', minWidth: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 7 }}>
            <div className="riot-media" style={{ width: '100%', aspectRatio: '1723 / 913', borderRadius: 10, background: '#FFFFFF' }}>
              <MediaSlot
                src={shot.src}
                alt={`${story.title} — ${shot.caption.toLowerCase()}`}
                placeholder="Drop image"
                sizes="(max-width: 860px) 90vw, 420px"
                fit="contain"
              />
            </div>
            <figcaption
              style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: '.18em',
                textTransform: 'uppercase',
                color: shot.caption === 'After' ? 'var(--r-black)' : 'var(--r-muted)',
              }}
            >
              {shot.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      {/* Stats */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4, flexShrink: 0 }}>
        {story.stats.map((stat, i) => (
          <p key={i} style={{ margin: 0, fontSize: 'clamp(13px,1.05vw,16px)', lineHeight: 1.3, letterSpacing: '-.01em' }}>
            {stat.value && <span className="riot-display" style={{ fontSize: '1.05em' }}>{stat.value} </span>}
            {stat.label}
          </p>
        ))}
      </div>

      {/* Descriptions */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, paddingTop: 'clamp(9px,1.2vh,14px)', borderTop: '2px solid var(--r-black)', flexShrink: 0 }}>
        {story.descriptions.map((d, i) => (
          <p key={i} style={{ margin: 0, fontSize: 'clamp(11.5px,.9vw,13.5px)', lineHeight: 1.55, color: 'var(--r-muted)' }}>{d}</p>
        ))}
      </div>
    </article>
  );
}
