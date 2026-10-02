import RiotReelVideo from './RiotReelVideo';
import { films, videoUrl, posterUrl } from '@/components/portfolio/cloudinaryMedia';
import ScrollRail from '@/components/ScrollRail';

export default function RiotLongForm() {
  return (
    <section id="long-form" className="riot-black" style={{ padding: 'clamp(56px,9vh,120px) 0' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, padding: '0 clamp(18px,4vw,44px)', textAlign: 'center' }}>
        <span className="riot-kicker">
          Long Form
        </span>
        <h2 className="riot-display" style={{ maxWidth: '20ch', fontSize: 'clamp(44px,8.6vw,140px)', color: 'var(--r-h-yellow)' }}>
          YouTube
        </h2>
        <p className="riot-lede" style={{ maxWidth: '58ch' }}>
          YouTube long-form content crafted to hook viewers early, tell compelling stories, and keep them watching.
        </p>
      </div>

      <ScrollRail ariaLabel="films">
        {films.map((film, i) => (
          <article key={i} style={{ flex: '0 0 clamp(300px,40vw,560px)', scrollSnapAlign: 'center', display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div className="riot-media" style={{ aspectRatio: '16 / 9', borderRadius: 16, borderColor: 'var(--r-cream)' }}>
              <RiotReelVideo
                src={videoUrl(film.id)}
                poster={posterUrl(film.id, 900, 2)}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--r-yellow)' }}>
                {film.category}
              </span>
              <h3 style={{ margin: 0, fontSize: 'clamp(21px,2.1vw,31px)', fontWeight: 800, letterSpacing: '-.025em', lineHeight: 1.15, color: 'var(--r-cream)' }}>
                {film.title}
                {film.titleSerif && (
                  <span style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: 'italic', fontWeight: 400 }}> — {film.titleSerif}</span>
                )}
              </h3>
              {film.desc && (
                <p style={{ margin: 0, maxWidth: '46ch', fontSize: 'clamp(14px,1.08vw,16px)', fontWeight: 500, lineHeight: 1.6, color: 'rgba(224,225,207,.75)' }}>{film.desc}</p>
              )}
            </div>
          </article>
        ))}
      </ScrollRail>
    </section>
  );
}
