import MediaSlot from '@/components/MediaSlot';
import ScrollRail from '@/components/ScrollRail';

const pieces = [
  {
    src: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_1100/v1786475475/1_1_jwps5a.png',
    category: 'YouTube — Thumbnails',
    title: "Don't Sleep",
  },
  {
    src: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_1100/v1786475469/4_1_obs8z8.png',
    category: 'YouTube — Thumbnails',
    title: 'Why Some Men Never Go Bald?',
  },
  {
    src: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_1100/v1786475463/5_Blood_Test_Mistakes_That_Make_Your_5_000_Reports_Useless_1_ulahya.jpg',
    category: 'YouTube — Thumbnails · Dr. Sumit Kapadia',
    title: 'Blood Report? Useless.',
  },
  {
    src: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_1100/v1786475458/Brain_tumour_treatment_without_surgery_Gamma_knife_on74fv.jpg',
    category: 'YouTube — Thumbnails · Dr. Sandip Mavani',
    title: 'Brain Tumour — No Surgery Needed',
  },
];

const TILTS = [-2, 1.5, -1, 2];

export default function V2Design() {
  return (
    <section id="design" className="v2-cream-section" style={{ padding: 'clamp(60px,9vh,110px) 0' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, padding: '0 clamp(20px,5vw,48px)' }}>
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.28em', textTransform: 'uppercase', color: 'var(--v2-orange-deep)' }}>
          Design
        </span>
        <h2 className="v2-heading" style={{ margin: 0, fontSize: 'clamp(40px,6vw,88px)', color: 'var(--v2-black)' }}>
          Thumbnails
        </h2>
        <p style={{ margin: 0, maxWidth: '52ch', fontSize: 'clamp(14px,1.1vw,17px)', lineHeight: 1.6 }}>
          Designed to{' '}
          <span className="v2-mark" style={{ ['--mark-color' as string]: 'var(--v2-yellow)' }}>earn the click</span>{' '}
          with bold visuals, clear messaging, and instant curiosity.
        </p>
      </div>

      <ScrollRail ariaLabel="design work">
        {pieces.map((piece, i) => (
          <article
            key={piece.title}
            className="v2-polaroid"
            style={{ flex: '0 0 clamp(280px,32vw,440px)', scrollSnapAlign: 'center', ['--tilt' as string]: `${TILTS[i % TILTS.length]}deg` }}
          >
            <span className="v2-tape" aria-hidden="true" />
            <div className="v2-polaroid-frame" style={{ aspectRatio: '16 / 9', borderRadius: 1 }}>
              <MediaSlot src={piece.src} alt={piece.title} placeholder="Drop image" sizes="440px" />
            </div>
            <div className="v2-polaroid-caption">
              <span style={{ display: 'block', fontSize: 10, fontWeight: 700, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--v2-orange-deep)' }}>
                {piece.category}
              </span>
              <span style={{ display: 'block', marginTop: 4, fontSize: 16, fontWeight: 700, color: 'var(--v2-ink)' }}>{piece.title}</span>
            </div>
          </article>
        ))}
      </ScrollRail>
    </section>
  );
}
