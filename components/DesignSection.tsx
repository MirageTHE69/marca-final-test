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
      style={{
        position: 'relative',
        zIndex: 4,
        padding: 'clamp(80px,11vh,140px) 0 clamp(70px,10vh,120px)',
        background: 'linear-gradient(180deg, #05070B 0%, #080D18 55%, #05070B 100%)',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18, padding: '0 clamp(24px,6vw,60px)', textAlign: 'center' }}>
        <span data-reveal="1" style={{ fontSize: 11, letterSpacing: '.3em', textTransform: 'uppercase', color: 'var(--accent)' }}>Design</span>
        <h2 data-reveal="1" style={{ margin: 0, maxWidth: '20ch', fontSize: 'clamp(34px,4.6vw,76px)', fontWeight: 700, letterSpacing: '-.04em', lineHeight: 1.02 }}>
          The frame people decide to <span style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: 'italic', fontWeight: 400 }}>click.</span>
        </h2>
        <p data-reveal="1" style={{ margin: 0, maxWidth: '58ch', fontSize: 'clamp(14px,1.05vw,17px)', lineHeight: 1.65, color: '#A7B2C4' }}>
          Thumbnails, covers and campaign creative designed against the only metric that matters: whether someone stops scrolling.
        </p>
      </div>

      <ScrollRail ariaLabel="design work">
        {pieces.map((piece, i) => (
          <article key={i} style={{ flex: '0 0 clamp(300px,34vw,480px)', scrollSnapAlign: 'center', display: 'flex', flexDirection: 'column', gap: 18 }}>
            <div style={{ position: 'relative', aspectRatio: '16 / 9', overflow: 'hidden', borderRadius: 14, background: '#0C1526', border: '1px solid rgba(242,244,248,.08)' }}>
              <MediaSlot src={piece.src} alt={piece.title} placeholder="Drop image" sizes="480px" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <span style={{ fontSize: 10, letterSpacing: '.24em', textTransform: 'uppercase', color: '#6C7A92' }}>{piece.category}</span>
              <h3 style={{ margin: 0, fontSize: 'clamp(18px,1.7vw,26px)', fontWeight: 600, letterSpacing: '-.025em', lineHeight: 1.15 }}>{piece.title}</h3>
              <p style={{ margin: 0, maxWidth: '42ch', fontSize: 14, lineHeight: 1.65, color: '#8E9BB0' }}>{piece.desc}</p>
            </div>
          </article>
        ))}
      </ScrollRail>
    </section>
  );
}
