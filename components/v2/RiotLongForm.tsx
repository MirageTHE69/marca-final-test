import RiotReelVideo from './RiotReelVideo';
import { asMedia, posterUrl, videoUrl } from '@/lib/media';
import type { Home } from '@/payload/payload-types';
import ScrollRail from '@/components/ScrollRail';

export default function RiotLongForm({ data }: { data: Home['youtube'] }) {
  const films = data.films ?? [];
  return (
    <section id="long-form" className="riot-black" style={{ padding: 'clamp(56px,9vh,120px) 0' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, padding: '0 clamp(18px,4vw,44px)', textAlign: 'center' }}>
        {data.kicker && <span className="riot-kicker">{data.kicker}</span>}
        <h2 className="riot-display" style={{ maxWidth: '20ch', fontSize: 'clamp(44px,8.6vw,140px)', color: 'var(--r-h-yellow)' }}>
          {data.title}
        </h2>
        {data.lede && (
          <p className="riot-lede" style={{ maxWidth: '58ch' }}>
            {data.lede}
          </p>
        )}
      </div>

      <ScrollRail ariaLabel="films">
        {films.map((film, i) => (
          <article key={film.id ?? i} style={{ flex: '0 0 clamp(300px,40vw,560px)', scrollSnapAlign: 'center', display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div className="riot-media" style={{ aspectRatio: '16 / 9', borderRadius: 16, borderColor: 'var(--r-cream)' }}>
              <RiotReelVideo
                src={videoUrl(asMedia(film.video)) ?? ''}
                poster={posterUrl(asMedia(film.video), 900, 2)}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--r-yellow)' }}>
                {film.category}
              </span>
              <h3 style={{ margin: 0, fontSize: 'clamp(21px,2.1vw,31px)', fontWeight: 800, letterSpacing: '-.025em', lineHeight: 1.15, color: 'var(--r-cream)' }}>
                {film.title}
                {film.titleAccent && (
                  <span style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: 'italic', fontWeight: 400 }}> — {film.titleAccent}</span>
                )}
              </h3>
              {film.description && (
                <p style={{ margin: 0, maxWidth: '46ch', fontSize: 'clamp(14px,1.08vw,16px)', fontWeight: 500, lineHeight: 1.6, color: 'rgba(224,225,207,.75)' }}>{film.description}</p>
              )}
            </div>
          </article>
        ))}
      </ScrollRail>
    </section>
  );
}
