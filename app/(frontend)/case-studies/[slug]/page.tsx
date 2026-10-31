import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import MediaSlot from '@/components/MediaSlot';
import FitTitle from '@/components/v2/FitTitle';
import RiotFooter from '@/components/v2/RiotFooter';
import RiotNav from '@/components/v2/RiotNav';
import RiotRichText from '@/components/v2/RiotRichText';
import { getCaseStudies, getCaseStudy } from '@/lib/cms';
import { asMedia, imageUrl, videoUrl } from '@/lib/media';

type Params = { params: Promise<{ slug: string }> };

/**
 * Full pages for case studies written in the admin. The hand-built pages
 * (/case-studies/aadicura-hospital, /case-studies/aster-health) are their
 * own routes and take precedence.
 */
export async function generateStaticParams() {
  const studies = await getCaseStudies();
  return studies.filter((c) => c.slug && c.content).map((c) => ({ slug: c.slug as string }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const study = await getCaseStudy((await params).slug);
  if (!study) return {};
  return { title: `${study.title} — Case study — Marca Creatives`, description: study.intro || study.descriptions?.[0]?.text };
}

export default async function CaseStudyPage({ params }: Params) {
  const study = await getCaseStudy((await params).slug);
  if (!study || !study.content) notFound();

  const hero = asMedia(study.heroMedia);
  const before = asMedia(study.beforeImage);
  const after = asMedia(study.afterImage);
  const shots = [before && { label: 'Before', m: before }, after && { label: 'After', m: after }].filter(Boolean) as { label: string; m: NonNullable<typeof after> }[];

  return (
    <main className="riot">
      <RiotNav />

      <section
        className="riot-black"
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          gap: 12,
          minHeight: 'clamp(440px, 74vh, 820px)',
          overflow: 'hidden',
          padding: 'clamp(70px,10vh,120px) clamp(18px,4vw,44px) clamp(40px,6vh,70px)',
        }}
      >
        {hero && (
          <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
            {hero.resourceType === 'video' ? (
              <MediaSlot type="video" src={videoUrl(hero)} placeholder="" />
            ) : (
              <MediaSlot src={imageUrl(hero, { width: 2000 })} alt={hero.alt || ''} placeholder="" />
            )}
            <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(12,12,12,.45), rgba(12,12,12,.88))' }} />
          </div>
        )}
        <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <span className="riot-kicker" style={{ color: 'var(--r-yellow)' }}>
            Case study{study.year ? ` · ${study.year}` : ''}
          </span>
          <div className="riot-fit-wrap" style={{ marginInline: 'calc(-1 * clamp(18px,4vw,44px))' }}>
            <FitTitle text={study.title} className="riot-display" style={{ color: 'var(--r-cream)', lineHeight: 0.9 }}>
              {study.title}
            </FitTitle>
          </div>
          <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(224,225,207,.7)' }}>{study.category}</span>
          {study.intro && (
            <p style={{ margin: '6px 0 0', maxWidth: '46ch', fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: 'italic', fontSize: 'clamp(20px,2vw,30px)', lineHeight: 1.35, color: 'var(--r-cream)' }}>
              {study.intro}
            </p>
          )}
        </div>
      </section>

      {(study.stats?.length ?? 0) > 0 && (
        <section className="riot-yellow" style={{ padding: 'clamp(30px,5vh,56px) clamp(18px,4vw,44px)', borderBottom: '2px solid var(--r-black)' }}>
          <div style={{ maxWidth: 1240, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(200px,100%),1fr))', gap: 'clamp(18px,3vw,40px)' }}>
            {study.stats?.map((s) => (
              <div key={s.id} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                {s.value && <span className="riot-display" style={{ fontSize: 'clamp(40px,5vw,72px)', color: 'var(--r-h-red)' }}>{s.value}</span>}
                <span style={{ fontSize: 15, fontWeight: 600, lineHeight: 1.4 }}>{s.label}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="riot-cream" style={{ padding: 'clamp(50px,8vh,100px) clamp(18px,4vw,44px)' }}>
        <RiotRichText data={study.content} />
      </section>

      {shots.length > 0 && (
        <section className="riot-black" style={{ padding: 'clamp(50px,8vh,100px) clamp(18px,4vw,44px)' }}>
          <div style={{ maxWidth: 1240, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 24 }}>
            <h2 className="riot-display" style={{ fontSize: 'clamp(32px,4.6vw,68px)', color: 'var(--r-h-yellow)' }}>
              Before &amp; after
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(420px,100%),1fr))', gap: 18 }}>
              {shots.map(({ label, m }) => (
                <figure key={label} style={{ margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <div className="riot-media" style={{ aspectRatio: m.width && m.height ? `${m.width} / ${m.height}` : '1723 / 913', borderRadius: 14, background: '#fff', borderColor: 'var(--r-cream)' }}>
                    <MediaSlot src={imageUrl(m, { width: 1400 })} alt={`${study.title} — ${label.toLowerCase()}`} placeholder="" fit="contain" />
                  </div>
                  <figcaption style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--r-yellow)' }}>{label}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="riot-yellow" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20, padding: 'clamp(60px,10vh,120px) clamp(18px,4vw,44px)', textAlign: 'center', borderTop: '2px solid var(--r-black)' }}>
        <h2 className="riot-display" style={{ maxWidth: '18ch', fontSize: 'clamp(34px,5.4vw,82px)' }}>
          Want results like{' '}
          <span style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: 'italic', fontWeight: 400 }}>these?</span>
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12 }}>
          <Link href="/#contact" className="riot-btn" style={{ background: 'var(--r-black)', color: 'var(--r-yellow)' }}>
            Start a project →
          </Link>
          <Link href="/case-studies" className="riot-btn riot-btn-ghost">
            All case studies
          </Link>
        </div>
      </section>

      <RiotFooter />
    </main>
  );
}
