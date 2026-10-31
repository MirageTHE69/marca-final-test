import RiotReelVideo from './RiotReelVideo';
import { asMedia, posterUrl, videoUrl } from '@/lib/media';
import type { Home } from '@/payload/payload-types';
import ScrollRail from '@/components/ScrollRail';

export default function RiotShortForm({ data }: { data: Home['instagram'] }) {
  const reels = data.reels ?? [];
  return (
    <section id="short-form" className="riot-cream" style={{ padding: 'clamp(56px,9vh,120px) 0' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, padding: '0 clamp(18px,4vw,44px)', textAlign: 'center' }}>
        {data.kicker && <span className="riot-kicker">{data.kicker}</span>}
        <h2 className="riot-display" style={{ maxWidth: '20ch', fontSize: 'clamp(42px,8.4vw,132px)', color: 'var(--r-h-red)' }}>
          {data.title}
        </h2>
        {data.lede && (
          <p className="riot-lede" style={{ maxWidth: '52ch' }}>
            {data.lede}
          </p>
        )}
      </div>

      <ScrollRail ariaLabel="reels">
        {reels.map((reel, i) => (
          <article key={reel.id ?? i} style={{ flex: '0 0 clamp(210px,20vw,280px)', scrollSnapAlign: 'center', display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div className="riot-media" style={{ aspectRatio: '9 / 16', borderRadius: 16 }}>
              <RiotReelVideo
                src={videoUrl(asMedia(reel.video)) ?? ''}
                poster={posterUrl(asMedia(reel.video), 540)}
              />
              <span
                style={{
                  position: 'absolute',
                  top: 10,
                  left: 10,
                  zIndex: 4,
                  padding: '5px 12px',
                  borderRadius: 999,
                  background: 'var(--r-yellow)',
                  border: '2px solid var(--r-black)',
                  fontSize: 9,
                  fontWeight: 700,
                  letterSpacing: '.1em',
                  textTransform: 'uppercase',
                  color: 'var(--r-black)',
                  pointerEvents: 'none',
                }}
              >
                {reel.badge}
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span style={{ fontSize: 'clamp(16px,1.25vw,19px)', fontWeight: 800, letterSpacing: '-.015em', lineHeight: 1.25, color: 'var(--r-ink)' }}>{reel.title}</span>
              <span style={{ fontSize: 'clamp(13px,1.02vw,15px)', fontWeight: 600, color: 'var(--r-muted)' }}>{reel.subtitle}</span>
            </div>
          </article>
        ))}
      </ScrollRail>
    </section>
  );
}
