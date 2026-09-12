import MediaSlot from '@/components/MediaSlot';
import ScrollRail from '@/components/ScrollRail';

interface Film {
  src?: string;
  duration?: string;
  category: string;
  title: string;
  titleSerif?: string;
  desc?: string;
  href?: string;
}

const films: Film[] = [
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

export default function LongFormSection() {
  return (
    <section
      id="long-form"
      className="riot-black-section"
      style={{
        position: 'relative',
        zIndex: 3,
        padding: 'clamp(90px,12vh,150px) 0 clamp(80px,11vh,130px)',
        borderTop: '2px solid var(--accent-youtube)',
        ['--card-accent' as string]: 'var(--accent-youtube)',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18, padding: '0 clamp(24px,6vw,60px)', textAlign: 'center' }}>
        <span data-reveal="1" style={{ display: 'inline-flex', alignItems: 'center', fontSize: 11, letterSpacing: '.3em', textTransform: 'uppercase', color: 'var(--accent-youtube)', fontWeight: 600 }}>
          <span className="pf-kicker-dot" aria-hidden="true" />
          Long Form
        </span>
        <h2 data-reveal="1" className="riot-heading" style={{ margin: 0, maxWidth: '20ch', fontSize: 'clamp(50px,8vw,140px)' }}>
          YouTube
        </h2>
        <p data-reveal="1" style={{ margin: 0, maxWidth: '58ch', fontSize: 'clamp(14px,1.05vw,17px)', lineHeight: 1.65, color: '#B8BFCC' }}>
          Long-form content crafted to hook viewers early,{' '}
          <span className="riot-mark" style={{ ['--mark-color' as string]: 'var(--accent-youtube)' }}>tell compelling stories</span>, and keep them watching.
        </p>
      </div>

      <ScrollRail ariaLabel="films">
        {films.map((film, i) => (
          <article key={i} style={{ flex: '0 0 clamp(320px,42vw,620px)', scrollSnapAlign: 'center', display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div className="polaroid" style={{ ['--tilt' as string]: `${[-2, 1.5, -1, 2][i % 4]}deg` }}>
              <span className="polaroid-tape" aria-hidden="true" />
              <div className="polaroid-frame" style={{ aspectRatio: '16 / 9', borderRadius: 1, boxShadow: '0 24px 60px -12px rgba(0,0,0,0.85)' }}>
                {film.src ? (
                  <MediaSlot type="video" src={film.src} placeholder="Drop film" sizes="620px" />
                ) : (
                  <MediaSlot placeholder="Drop film" />
                )}
                {film.duration && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: 14,
                      right: 14,
                      padding: '6px 12px',
                      borderRadius: 999,
                      background: 'rgba(8,9,13,.62)',
                      backdropFilter: 'blur(6px)',
                      fontSize: 9,
                      letterSpacing: '.2em',
                      textTransform: 'uppercase',
                      color: '#D8DEEA',
                      pointerEvents: 'none',
                    }}
                  >
                    {film.duration}
                  </span>
                )}
              </div>
              <div className="polaroid-caption" style={{ textAlign: 'left', padding: '12px 6px 16px' }}>
                <span style={{ fontSize: 10, letterSpacing: '.24em', textTransform: 'uppercase', color: 'var(--accent-youtube)', fontWeight: 700 }}>{film.category}</span>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <h3 style={{ margin: 0, fontSize: 'clamp(20px,1.9vw,30px)', fontWeight: 600, letterSpacing: '-.028em', lineHeight: 1.1 }}>
                {film.title}
                {film.titleSerif && (
                  <span style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: 'italic', fontWeight: 400 }}>{film.titleSerif}</span>
                )}
              </h3>
              {film.desc && (
                <p style={{ margin: 0, maxWidth: '46ch', fontSize: 14, lineHeight: 1.65, color: '#8E9BB0' }}>{film.desc}</p>
              )}
              {film.href && (
                <a href={film.href} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 2, fontSize: 10, letterSpacing: '.2em', textTransform: 'uppercase' }}>
                  Learn more <span>→</span>
                </a>
              )}
            </div>
          </article>
        ))}
      </ScrollRail>
    </section>
  );
}
