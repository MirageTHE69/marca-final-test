import MediaSlot from '@/components/MediaSlot';
import ScrollRail from '@/components/ScrollRail';

/** Mirrors the pieces shown in DesignSection on the live landing page. */
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

export default function V2Thumbnails() {
  return (
    <section id="design" className="v2-paper" style={{ padding: 'clamp(56px,9vh,110px) 0' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, padding: '0 clamp(18px,4vw,44px)' }}>
        <span className="v2-micro" style={{ color: 'var(--c-red)' }}>Design</span>
        <h2 className="v2-display" style={{ fontSize: 'clamp(34px,6vw,96px)' }}>Thumbnails</h2>
        <p style={{ margin: 0, maxWidth: '58ch', fontSize: 13.5, lineHeight: 1.7, color: 'var(--c-dim-dark)' }}>
          YouTube thumbnails designed to earn the click with bold visuals, clear messaging, and instant curiosity.
        </p>
      </div>

      <ScrollRail ariaLabel="design work">
        {pieces.map((piece, i) => (
          <article
            key={i}
            style={{ flex: '0 0 clamp(270px,32vw,440px)', scrollSnapAlign: 'center', display: 'flex', flexDirection: 'column', gap: 16 }}
          >
            <div className="v2-tile v2-grade v2-grade-soft" style={{ aspectRatio: '16 / 9' }}>
              <MediaSlot src={piece.src} alt={piece.title} placeholder="Drop image" sizes="440px" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
              <span className="v2-micro" style={{ color: 'var(--c-dim-dark)' }}>{piece.category}</span>
              <h3 className="v2-display" style={{ fontSize: 'clamp(17px,1.6vw,23px)' }}>{piece.title}</h3>
              <p style={{ margin: 0, maxWidth: '42ch', fontSize: 12.5, lineHeight: 1.65, color: 'var(--c-dim-dark)' }}>{piece.desc}</p>
            </div>
          </article>
        ))}
      </ScrollRail>
    </section>
  );
}
