import MediaSlot from '@/components/MediaSlot';
import ScrollRail from '@/components/ScrollRail';
import { asMedia, imageUrl } from '@/lib/media';
import type { Home } from '@/payload/payload-types';
import RiotHead from './RiotHead';

export default function RiotDesign({ data }: { data: Home['thumbnails'] }) {
  const pieces = data.pieces ?? [];
  // Same gingham background as the portfolio hero.
  return (
    <section id="design" className="riot-stripes" style={{ padding: 'clamp(56px,9vh,120px) 0', color: 'var(--r-ink)' }}>
      <div style={{ padding: '0 clamp(18px,4vw,44px)' }}>
        <RiotHead kicker={data.kicker} title={data.title} lede={data.lede} color="var(--r-h-red)" />
      </div>

      <ScrollRail ariaLabel="design work">
        {pieces.map((piece, i) => (
          // Each piece is a cream card so its text reads cleanly over the checks.
          <article
            key={piece.id ?? i}
            style={{
              flex: '0 0 clamp(280px,33vw,460px)',
              scrollSnapAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              background: 'var(--r-cream)',
              border: '2px solid var(--r-black)',
              borderRadius: 18,
              boxShadow: '5px 5px 0 var(--r-black)',
            }}
          >
            <div className="riot-media" style={{ aspectRatio: '16 / 9', border: 0, borderBottom: '2px solid var(--r-black)' }}>
              <MediaSlot src={imageUrl(asMedia(piece.image), { width: 1100 })} alt={asMedia(piece.image)?.alt || piece.title} placeholder="Drop image" sizes="460px" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 9, padding: 'clamp(16px,1.6vw,22px) clamp(16px,1.6vw,22px) clamp(18px,1.8vw,24px)' }}>
              <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--r-muted)' }}>
                {piece.category}
              </span>
              <h3 className="riot-display" style={{ fontSize: 'clamp(21px,2.1vw,30px)' }}>{piece.title}</h3>
              <p style={{ margin: 0, maxWidth: '42ch', fontSize: 'clamp(14px,1.08vw,16px)', fontWeight: 500, lineHeight: 1.6, color: 'rgba(18,18,18,.78)' }}>{piece.description}</p>
            </div>
          </article>
        ))}
      </ScrollRail>
    </section>
  );
}
