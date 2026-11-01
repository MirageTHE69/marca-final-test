import MediaSlot from '@/components/MediaSlot';
import ScrollRail from '@/components/ScrollRail';
import { asMedia, imageUrl } from '@/lib/media';
import type { Home } from '@/payload/payload-types';

export default function RiotDesign({ data }: { data: Home['thumbnails'] }) {
  const pieces = data.pieces ?? [];
  return (
    <section id="design" className="riot-red" style={{ padding: 'clamp(56px,9vh,120px) 0' }}>
      <div className="riot-head" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, padding: '0 clamp(18px,4vw,44px)', textAlign: 'center' }}>
        {data.kicker && <span className="riot-kicker">{data.kicker}</span>}
        <h2 className="riot-display" style={{ maxWidth: '20ch', fontSize: 'clamp(40px,8.4vw,132px)', color: 'var(--r-black)' }}>
          {data.title}
        </h2>
        {data.lede && (
          <p className="riot-lede" style={{ maxWidth: '58ch' }}>
            {data.lede}
          </p>
        )}
      </div>

      <ScrollRail ariaLabel="design work">
        {pieces.map((piece, i) => (
          <article key={piece.id ?? i} style={{ flex: '0 0 clamp(280px,33vw,460px)', scrollSnapAlign: 'center', display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div className="riot-media" style={{ aspectRatio: '16 / 9', borderRadius: 16 }}>
              <MediaSlot src={imageUrl(asMedia(piece.image), { width: 1100 })} alt={asMedia(piece.image)?.alt || piece.title} placeholder="Drop image" sizes="460px" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
              <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.2em', textTransform: 'uppercase', color: 'rgba(18,18,18,.65)' }}>
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
