import MediaSlot from '@/components/MediaSlot';
import ScrollRail from '@/components/ScrollRail';

/** Same pieces as DesignSection on the landing page. */
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

export default function RiotDesign() {
  return (
    <section id="design" className="riot-olive" style={{ padding: 'clamp(56px,9vh,120px) 0' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, padding: '0 clamp(18px,4vw,44px)', textAlign: 'center' }}>
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.24em', textTransform: 'uppercase', color: 'var(--r-black)' }}>
          Design
        </span>
        <h2 className="riot-display" style={{ maxWidth: '20ch', fontSize: 'clamp(40px,7vw,110px)' }}>
          Thumbnails
        </h2>
        <p style={{ margin: 0, maxWidth: '58ch', fontSize: 'clamp(14px,1.05vw,17px)', lineHeight: 1.65, color: 'rgba(18,18,18,.72)' }}>
          YouTube thumbnails designed to earn the click with bold visuals, clear messaging, and instant curiosity.
        </p>
      </div>

      <ScrollRail ariaLabel="design work">
        {pieces.map((piece, i) => (
          <article key={i} style={{ flex: '0 0 clamp(280px,33vw,460px)', scrollSnapAlign: 'center', display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div className="riot-media" style={{ aspectRatio: '16 / 9', borderRadius: 16 }}>
              <MediaSlot src={piece.src} alt={piece.title} placeholder="Drop image" sizes="460px" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
              <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.2em', textTransform: 'uppercase', color: 'rgba(18,18,18,.65)' }}>
                {piece.category}
              </span>
              <h3 className="riot-display" style={{ fontSize: 'clamp(18px,1.8vw,26px)' }}>{piece.title}</h3>
              <p style={{ margin: 0, maxWidth: '42ch', fontSize: 14, lineHeight: 1.6, color: 'rgba(18,18,18,.7)' }}>{piece.desc}</p>
            </div>
          </article>
        ))}
      </ScrollRail>
    </section>
  );
}
