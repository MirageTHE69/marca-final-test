import MediaSlot from '@/components/MediaSlot';
import ScrollRail from '@/components/ScrollRail';

const reels = [
  {
    src: 'https://res.cloudinary.com/ts350ak2/video/upload/v1786126461/AQPdPtOcQHMhaOzaeEL7dP25WwS8Hsl1abBW1gq1HkIXbAC2KsSJT94RgP-C53I7H7vO4ZuiVW4MDR8R8QM8CT0w32PjcA4h6YqzfPY_x1ykci.mp4',
    badge: 'YouTube Short',
    title: 'EOS Couture',
    subtitle: 'Ad Campaign',
  },
  {
    src: 'https://res.cloudinary.com/ts350ak2/video/upload/v1786126436/vidssave.com_Varicose_Vein_EXPERT_Shares_Top_3_Exercises_for_Relief_720P_tzhv0k.mp4',
    badge: 'Instagram Reel',
    title: 'Dr Sumit Kapadia | Vascular Surgeon',
    subtitle: '3.6M Views | 380K Subscribers',
  },
  {
    src: 'https://res.cloudinary.com/ts350ak2/video/upload/v1786126432/AQOyEXdvv8wO-MO1zIcuoZy25boz6rvkKpIC3jz5V00HQQYMBv7jxu9QWCROB44LPqRDk7ZSwEtTLalaLO6Fhpwkd45rM4V0ir13RBI_vl8igm.mp4',
    badge: 'Instagram Reel',
    title: 'Nutty Affair',
    subtitle: 'Ad Campaign',
  },
  {
    src: 'https://res.cloudinary.com/ts350ak2/video/upload/v1786126450/5.7M_guddh5.mp4',
    badge: 'Instagram Reel',
    title: 'Dr Sandip Mavani | Neurosurgeon',
    subtitle: '5.7M Views | 49K Followers',
  },
  {
    src: 'https://res.cloudinary.com/ts350ak2/video/upload/v1786126442/MICRO_CONCRETE_419K_VIEWS_IG_tsi8ds.mp4',
    badge: 'Instagram Reel',
    title: 'TCB | Harsh Boghani',
    subtitle: '624K Views | 57K Followers',
  },
  {
    src: 'https://res.cloudinary.com/ts350ak2/video/upload/v1786126461/NO_TOUCH_BREAST_IMPLANT_19M_VIEWS_YT_vgdpxm.mp4',
    badge: 'Instagram Reel',
    title: 'Dr Mithun Panchal | Plastic Surgeon',
    subtitle: '19M Views | 419K Followers',
  },
];

export default function ShortFormSection() {
  return (
    <section
      id="short-form"
      style={{
        position: 'relative',
        zIndex: 2,
        padding: 'clamp(80px,11vh,140px) 0 clamp(70px,10vh,120px)',
        background: 'linear-gradient(180deg, #05070B 0%, #070C18 55%, #05070B 100%)',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18, padding: '0 clamp(24px,6vw,60px)', textAlign: 'center' }}>
        <span data-reveal="1" style={{ fontSize: 11, letterSpacing: '.3em', textTransform: 'uppercase', color: 'var(--accent)' }}>Short Form</span>
        <h2 data-reveal="1" style={{ margin: 0, maxWidth: '20ch', fontSize: 'clamp(34px,4.6vw,76px)', fontWeight: 700, letterSpacing: '-.04em', lineHeight: 1.02 }}>
          Built for the <span style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: 'italic', fontWeight: 400 }}>first three seconds.</span>
        </h2>
        <p data-reveal="1" style={{ margin: 0, maxWidth: '58ch', fontSize: 'clamp(14px,1.05vw,17px)', lineHeight: 1.65, color: '#A7B2C4' }}>
          Reels, Shorts and campaign cutdowns written for the scroll — hooked in the first frame, held to the last.
        </p>
      </div>

      <ScrollRail ariaLabel="reels">
        {reels.map((reel, i) => (
          <article key={i} style={{ flex: '0 0 clamp(230px,22vw,300px)', scrollSnapAlign: 'center', display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ position: 'relative', aspectRatio: '9 / 16', overflow: 'hidden', borderRadius: 14, background: '#0C1526', border: '1px solid rgba(242,244,248,.08)' }}>
              <MediaSlot type="video" src={reel.src} placeholder="Drop reel" sizes="300px" />
              <span
                style={{
                  position: 'absolute',
                  top: 12,
                  left: 12,
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
                {reel.badge}
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <span style={{ fontSize: 15, fontWeight: 600, letterSpacing: '-.01em', color: '#F2F4F8' }}>{reel.title}</span>
              <span style={{ fontSize: 12, color: '#8E9BB0' }}>{reel.subtitle}</span>
            </div>
          </article>
        ))}
      </ScrollRail>
    </section>
  );
}
