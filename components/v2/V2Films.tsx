import MediaSlot from '@/components/MediaSlot';
import ScrollRail from '@/components/ScrollRail';

const films = [
  {
    src: 'https://res.cloudinary.com/ts350ak2/video/upload/v1786473746/vidssave.com_Major_Mohit_Sharma__The_Spy_Who_Infiltrated_Kashmir_s_Deadliest_Terror_Network___Dhurandhar_480P_onwwyo.mp4',
    category: 'Storytelling — Documentary',
    title: 'Vedang Rathore — The Dhurandhar Story',
    desc: "The true story of Major Mohit Sharma — the spy who infiltrated Kashmir's deadliest terror network.",
  },
  {
    src: 'https://res.cloudinary.com/ts350ak2/video/upload/v1786474057/vidssave.com_3_Acre_Sustainable_Farmhouse_in_Vadodara___Vernacular_Architecture_Eco-Friendly_Design_480P_n5hcko.mp4',
    category: 'Architecture — Documentary',
    title: 'MS Design Studio — The Vernacular Farmhouse',
    desc: 'A 3-acre sustainable farmhouse in Vadodara, built entirely around vernacular, eco-friendly design principles.',
  },
  {
    src: 'https://res.cloudinary.com/ts350ak2/video/upload/v1786473730/vidssave.com_I_ve_Operated_on_1000_Blocked_Arteries_This_Hidden_Ingredient_Was_in_EVERY_Patient_s_Diet_360P_dbguqj.mp4',
    category: 'Healthcare — Long Form',
    title: 'Dr. Sumit Kapadia — 1,000 Blocked Arteries',
    desc: 'A cardiac surgeon on the one hidden dietary ingredient he found in every one of his 1,000 blocked-artery patients.',
  },
  {
    src: 'https://res.cloudinary.com/ts350ak2/video/upload/v1786555893/vidssave.com_The_Real_Reason_Shah_Rukh_Khan_Still_Has_Thick_Hair_at_60_360P_ktnzlg.mp4',
    category: 'Healthcare — Long Form',
    title: 'Dr Mithun Panchal — The Shah Rukh Khan Hair Secret',
    desc: "A hair transplant specialist breaks down the real, unglamorous reason Bollywood's biggest star still has thick hair at 60.",
  },
];

const TILTS = [-2, 1.5, -1, 2];

export default function V2Films() {
  return (
    <section id="films" className="v2-black-section" style={{ padding: 'clamp(60px,9vh,110px) 0', borderTop: '2px solid var(--v2-orange)' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, padding: '0 clamp(20px,5vw,48px)' }}>
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.28em', textTransform: 'uppercase', color: 'var(--v2-orange)' }}>
          Long form
        </span>
        <h2 className="v2-heading" style={{ margin: 0, fontSize: 'clamp(40px,6vw,88px)', color: 'var(--v2-cream)' }}>
          YouTube
        </h2>
        <p style={{ margin: 0, maxWidth: '52ch', fontSize: 'clamp(14px,1.1vw,17px)', lineHeight: 1.6, color: 'rgba(244,236,222,.7)' }}>
          Long-form content crafted to hook viewers early, tell compelling stories, and keep them watching.
        </p>
      </div>

      <ScrollRail ariaLabel="films">
        {films.map((film, i) => (
          <article
            key={film.title}
            style={{ flex: '0 0 clamp(320px,40vw,560px)', scrollSnapAlign: 'center', display: 'flex', flexDirection: 'column', gap: 16 }}
          >
            <div className="v2-polaroid" style={{ ['--tilt' as string]: `${TILTS[i % TILTS.length]}deg` }}>
              <span className="v2-tape" aria-hidden="true" />
              <div className="v2-polaroid-frame" style={{ aspectRatio: '16 / 9', borderRadius: 1 }}>
                <MediaSlot type="video" src={film.src} placeholder="Drop film" sizes="560px" />
              </div>
              <div className="v2-polaroid-caption">
                <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--v2-orange-deep)' }}>
                  {film.category}
                </span>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <h3 className="v2-heading" style={{ margin: 0, fontSize: 'clamp(19px,1.8vw,26px)', color: 'var(--v2-cream)' }}>{film.title}</h3>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: 'rgba(244,236,222,.65)' }}>{film.desc}</p>
            </div>
          </article>
        ))}
      </ScrollRail>
    </section>
  );
}
