import MediaSlot from '@/components/MediaSlot';
import ScrollRail from '@/components/ScrollRail';

/** Same films as LongFormSection on the landing page. */
const films = [
  {
    src: 'https://res.cloudinary.com/ts350ak2/video/upload/v1786473746/vidssave.com_Major_Mohit_Sharma__The_Spy_Who_Infiltrated_Kashmir_s_Deadliest_Terror_Network___Dhurandhar_480P_onwwyo.mp4',
    category: 'Storytelling — Documentary',
    title: 'Vedang Rathore — ',
    titleSerif: 'The Dhurandhar Story',
    desc: "The true story of Major Mohit Sharma — the spy who infiltrated Kashmir's deadliest terror network.",
  },
  {
    src: 'https://res.cloudinary.com/ts350ak2/video/upload/v1786474057/vidssave.com_3_Acre_Sustainable_Farmhouse_in_Vadodara___Vernacular_Architecture_Eco-Friendly_Design_480P_n5hcko.mp4',
    category: 'Architecture — Documentary',
    title: 'MS Design Studio — ',
    titleSerif: 'The Vernacular Farmhouse',
    desc: 'A 3-acre sustainable farmhouse in Vadodara, built entirely around vernacular, eco-friendly design principles.',
  },
  {
    src: 'https://res.cloudinary.com/ts350ak2/video/upload/v1786473730/vidssave.com_I_ve_Operated_on_1000_Blocked_Arteries_This_Hidden_Ingredient_Was_in_EVERY_Patient_s_Diet_360P_dbguqj.mp4',
    category: 'Healthcare — Long Form',
    title: 'Dr. Sumit Kapadia — ',
    titleSerif: '1,000 Blocked Arteries',
    desc: 'A cardiac surgeon on the one hidden dietary ingredient he found in every one of his 1,000 blocked-artery patients.',
  },
  {
    src: 'https://res.cloudinary.com/ts350ak2/video/upload/v1786555893/vidssave.com_The_Real_Reason_Shah_Rukh_Khan_Still_Has_Thick_Hair_at_60_360P_ktnzlg.mp4',
    category: 'Healthcare — Long Form',
    title: 'Dr Mithun Panchal — ',
    titleSerif: 'The Shah Rukh Khan Hair Secret',
    desc: "A hair transplant specialist breaks down the real, unglamorous reason Bollywood's biggest star still has thick hair at 60.",
  },
  {
    src: 'https://res.cloudinary.com/ts350ak2/video/upload/v1786473727/vidssave.com_Eyes_Par_Yellow_Patch__Yeh_High_Cholesterol_Ka_Warning_Sign_Hai_Xanthelasma_Truth_480P_zsxocz.mp4',
    category: 'Healthcare — Long Form',
    title: 'Dr. Surbhi Kapadia — ',
    titleSerif: 'The Xanthelasma Truth',
    desc: 'Yellow patches around the eyes can be an early warning sign of high cholesterol — the truth about Xanthelasma.',
  },
];

export default function RiotLongForm() {
  return (
    <section id="long-form" className="riot-black" style={{ padding: 'clamp(56px,9vh,120px) 0' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, padding: '0 clamp(18px,4vw,44px)', textAlign: 'center' }}>
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.24em', textTransform: 'uppercase', color: 'var(--r-yellow)' }}>
          Long Form
        </span>
        <h2 className="riot-display" style={{ maxWidth: '20ch', fontSize: 'clamp(44px,8.6vw,140px)', color: 'var(--r-h-yellow)' }}>
          YouTube
        </h2>
        <p style={{ margin: 0, maxWidth: '58ch', fontSize: 'clamp(14px,1.05vw,17px)', lineHeight: 1.65, color: 'rgba(243,240,221,.7)' }}>
          YouTube long-form content crafted to hook viewers early, tell compelling stories, and keep them watching.
        </p>
      </div>

      <ScrollRail ariaLabel="films">
        {films.map((film, i) => (
          <article key={i} style={{ flex: '0 0 clamp(300px,40vw,560px)', scrollSnapAlign: 'center', display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div className="riot-media" style={{ aspectRatio: '16 / 9', borderRadius: 16, borderColor: 'var(--r-cream)' }}>
              <MediaSlot type="video" src={film.src} placeholder="Drop film" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--r-yellow)' }}>
                {film.category}
              </span>
              <h3 style={{ margin: 0, fontSize: 'clamp(18px,1.8vw,27px)', fontWeight: 700, letterSpacing: '-.025em', lineHeight: 1.15, color: 'var(--r-cream)' }}>
                {film.title}
                <span style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: 'italic', fontWeight: 400 }}>{film.titleSerif}</span>
              </h3>
              <p style={{ margin: 0, maxWidth: '46ch', fontSize: 14, lineHeight: 1.65, color: 'rgba(243,240,221,.62)' }}>{film.desc}</p>
            </div>
          </article>
        ))}
      </ScrollRail>
    </section>
  );
}
