import MediaSlot from '@/components/MediaSlot';
import ScrollRail from '@/components/ScrollRail';

const pieces = [
  {
    src: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_1100/v1786475475/1_1_jwps5a.png',
    category: 'YouTube — Thumbnails',
    title: "Don't Sleep",
    desc: 'A cinematic warning thumbnail built to stop a health scroll dead — dramatized without leaning on shock value alone.',
  },
  {
    src: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_1100/v1786475469/4_1_obs8z8.png',
    category: 'YouTube — Thumbnails',
    title: 'Why Some Men Never Go Bald?',
    desc: 'A curiosity-gap headline paired with a follicle cutaway to make a dermatology explainer impossible to skip.',
  },
  {
    src: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_1100/v1786475463/5_Blood_Test_Mistakes_That_Make_Your_5_000_Reports_Useless_1_ulahya.jpg',
    category: 'YouTube — Thumbnails · Dr. Sumit Kapadia',
    title: 'Blood Report? Useless.',
    desc: 'Built around the exact numbers his patients scroll past — the red circles do the explaining before the video starts.',
  },
  {
    src: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_1100/v1786475461/2_dwdhm2.jpg',
    category: 'YouTube — Thumbnails · Dr. Sumit Kapadia',
    title: 'Fix Your Morning Routine',
    desc: 'A single cutaway artery makes the health stakes of a coffee habit visible in half a second.',
  },
  {
    src: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_1100/v1786475458/Brain_tumour_treatment_without_surgery_Gamma_knife_on74fv.jpg',
    category: 'YouTube — Thumbnails · Dr. Sandip Mavani',
    title: 'Brain Tumour — No Surgery Needed',
    desc: 'A credibility card and a held brain model turn a frightening diagnosis into a reassuring watch.',
  },
  {
    src: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_1100/v1786475457/Ashwagandha_xcygpx.jpg',
    category: 'YouTube — Thumbnails',
    title: 'Ashwagandha — Wellness Explainer',
    desc: 'High-contrast type and warm product lighting built for a men’s-health topic that needed to feel clinical, not clickbait.',
  },
];

export default function DesignSection() {
  return (
    <section
      id="design"
      className="riot-cream-section"
      style={{
        position: 'relative',
        zIndex: 4,
        padding: 'clamp(80px,11vh,140px) 0 clamp(100px,14vh,160px)',
        marginBottom: 'clamp(30px, 4vh, 60px)',
        ['--card-accent' as string]: 'var(--accent-branding)',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18, padding: '0 clamp(24px,6vw,60px)', textAlign: 'center' }}>
        <span data-reveal="1" style={{ display: 'inline-flex', alignItems: 'center', fontSize: 11, letterSpacing: '.3em', textTransform: 'uppercase', color: 'var(--accent-branding)', fontWeight: 700 }}>
          <span className="pf-kicker-dot" aria-hidden="true" />
          Design
        </span>
        <h2 data-reveal="1" className="riot-heading" style={{ margin: 0, maxWidth: '20ch', fontSize: 'clamp(46px,7vw,120px)' }}>
          Thumbnails
        </h2>
        <p data-reveal="1" style={{ margin: 0, maxWidth: '58ch', fontSize: 'clamp(14px,1.05vw,17px)', lineHeight: 1.65, color: '#4A443A' }}>
          YouTube thumbnails designed to earn the click with{' '}
          <span className="riot-mark" style={{ ['--mark-color' as string]: 'var(--accent-branding)' }}>bold visuals</span>, clear messaging, and instant curiosity.
        </p>
      </div>

      <ScrollRail ariaLabel="design work">
        {pieces.map((piece, i) => (
          <article
            key={i}
            className="polaroid"
            style={{ flex: '0 0 clamp(300px,34vw,480px)', scrollSnapAlign: 'center', ['--tilt' as string]: `${[-2, 1.5, -1, 2, -1.5, 1][i % 6]}deg` }}
          >
            <span className="polaroid-tape" aria-hidden="true" />
            <div className="polaroid-frame" style={{ aspectRatio: '16 / 9', borderRadius: 1 }}>
              <MediaSlot src={piece.src} alt={piece.title} placeholder="Drop image" sizes="480px" />
            </div>
            <div className="polaroid-caption" style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: 8 }}>
              <span style={{ fontSize: 10, letterSpacing: '.24em', textTransform: 'uppercase', color: 'var(--accent-branding)', fontWeight: 700 }}>{piece.category}</span>
              <h3 style={{ margin: 0, fontSize: 'clamp(16px,1.4vw,20px)', fontWeight: 700, letterSpacing: '-.02em', lineHeight: 1.2, color: 'var(--riot-ink)' }}>{piece.title}</h3>
              <p style={{ margin: 0, fontSize: 13, lineHeight: 1.6, color: '#6B6459' }}>{piece.desc}</p>
            </div>
          </article>
        ))}
      </ScrollRail>
    </section>
  );
}
