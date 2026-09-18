import Link from 'next/link';
import MediaSlot from '@/components/MediaSlot';
import { featuredCaseStudies, type CaseStudy } from '@/components/casestudy/caseStudies';

/** Before/after screenshots are all 1723×913 — lock the frame to that. */
const SHOT_ASPECT = '1723 / 913';

function CaseCard({ story }: { story: CaseStudy }) {
  const shots = story.beforeImage
    ? [
        { src: story.beforeImage, caption: 'Before' },
        { src: story.afterImage, caption: 'After' },
      ]
    : [{ src: story.afterImage, caption: 'After' }];

  return (
    <article
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'clamp(18px,2.4vh,26px)',
        padding: 'clamp(20px,2.2vw,32px)',
        borderRadius: 22,
        background: 'rgba(241,238,233,.05)',
        border: '1px solid rgba(241,238,233,.16)',
      }}
    >
      {/* Title row */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          {story.logo && (
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                width: 52,
                height: 52,
                borderRadius: 999,
                overflow: 'hidden',
                background: '#FFFFFF',
                border: '2px solid var(--c-red)',
              }}
            >
              <span style={{ position: 'relative', width: '74%', height: '74%' }}>
                <MediaSlot src={story.logo} alt={`${story.title} logo`} placeholder="Logo" sizes="52px" fit="contain" />
              </span>
            </span>
          )}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <span className="v2-micro" style={{ color: 'var(--c-red-bright)' }}>
              {story.category} · {story.year}
            </span>
            <h3 className="v2-display" style={{ fontSize: 'clamp(20px,2.2vw,32px)' }}>{story.title}</h3>
          </div>
        </div>

        {story.href && (
          <Link href={story.href} className="v2-cta" style={{ flexShrink: 0, padding: '10px 18px', fontSize: 9, color: 'var(--c-paper)' }}>
            Read case study ↗
          </Link>
        )}
      </div>

      {/* Before / after */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(12px,1.4vw,20px)' }}>
        {shots.map((shot) => (
          <figure key={shot.src} style={{ flex: '1 1 260px', margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div
              className="v2-grade v2-grade-soft"
              style={{ width: '100%', aspectRatio: SHOT_ASPECT, borderRadius: 12, border: '1px solid rgba(241,238,233,.14)' }}
            >
              <MediaSlot src={shot.src} alt={`${story.title} — ${shot.caption.toLowerCase()}`} placeholder="Drop image" sizes="(max-width: 860px) 90vw, 420px" />
            </div>
            <figcaption className="v2-micro" style={{ color: shot.caption === 'After' ? 'var(--c-red-bright)' : 'rgba(241,238,233,.5)' }}>
              {shot.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      {/* Stats */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(16px,2.4vw,34px)' }}>
        {story.stats.map((stat, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {stat.value && (
              <span className="v2-display" style={{ fontSize: 'clamp(20px,2vw,30px)', color: 'var(--c-red-bright)' }}>{stat.value}</span>
            )}
            <span style={{ fontSize: 11.5, lineHeight: 1.45, color: 'rgba(241,238,233,.6)', maxWidth: '20ch' }}>{stat.label}</span>
          </div>
        ))}
      </div>

      {/* Descriptions */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, paddingTop: 14, borderTop: '1px solid rgba(241,238,233,.14)' }}>
        {story.descriptions.map((d, i) => (
          <p key={i} style={{ margin: 0, fontSize: 12.5, lineHeight: 1.65, color: 'rgba(241,238,233,.68)' }}>{d}</p>
        ))}
      </div>
    </article>
  );
}

export default function V2Cases() {
  return (
    <section id="case-studies" className="v2-ox-soft" style={{ padding: 'clamp(56px,9vh,110px) clamp(18px,4vw,44px)' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 20 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <span className="v2-micro" style={{ color: 'var(--c-red-bright)' }}>Case Studies</span>
          <h2 className="v2-display" style={{ fontSize: 'clamp(30px,5vw,78px)' }}>
            Proof, told as <span className="v2-dim-light">a story.</span>
          </h2>
        </div>
        <Link href="/case-studies" className="v2-cta" style={{ padding: '13px 24px', fontSize: 10, color: 'var(--c-paper)' }}>
          All studies ↗
        </Link>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: 'clamp(16px,2vw,26px)',
          marginTop: 'clamp(30px,5vh,56px)',
        }}
      >
        {featuredCaseStudies.map((story) => (
          <CaseCard key={story.title} story={story} />
        ))}

        {/* Closing card, mirroring the landing page's deck */}
        <article
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            gap: 20,
            minHeight: 320,
            padding: 'clamp(28px,3vw,48px)',
            borderRadius: 22,
            background: 'var(--c-red)',
            border: '1px solid var(--c-red)',
            color: '#FFFFFF',
          }}
        >
          <span className="v2-micro" style={{ opacity: 0.8 }}>Ready for results?</span>
          <h3 className="v2-display" style={{ fontSize: 'clamp(22px,2.4vw,34px)', maxWidth: '18ch' }}>
            Ready to turn your story into authority?
          </h3>
          <Link
            href="/case-studies"
            className="v2-cta"
            style={{ background: '#FFFFFF', borderColor: '#FFFFFF', color: 'var(--c-red)' }}
          >
            Explore full case studies ↗
          </Link>
        </article>
      </div>
    </section>
  );
}
