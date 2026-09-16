import MediaSlot from '@/components/MediaSlot';
import ScrollRail from '@/components/ScrollRail';

const reels = [
  {
    src: 'https://res.cloudinary.com/ts350ak2/video/upload/v1786553225/Video-59256_f9vyja.mp4',
    badge: 'Instagram Reel',
    title: "Ayushi | Founder Ayu's Clairveda",
    subtitle: 'Cinematic Ad',
  },
  {
    src: 'https://res.cloudinary.com/ts350ak2/video/upload/v1786553205/Varicose_Vein_EXPERT_Shares_Top_3_Exercises_for_Relief_ghxgtx.mp4',
    badge: 'YouTube Short',
    title: 'Dr Sumit Kapadia | Vascular Surgeon',
    subtitle: '3.6M Views | 380K Subscribers',
  },
  {
    src: 'https://res.cloudinary.com/ts350ak2/video/upload/v1786553180/Video-38021_hhhbkc.mp4',
    badge: 'Instagram Reel',
    title: 'Rajvi | Co-Founder Marca Creatives',
    subtitle: 'Cinematic Ad',
  },
  {
    src: 'https://res.cloudinary.com/ts350ak2/video/upload/v1786553181/Video-81552_skecuv.mp4',
    badge: 'Instagram Reel',
    title: 'Rajvi | Co-Founder Marca Creatives',
    subtitle: 'Cinematic Ad',
  },
  {
    src: 'https://res.cloudinary.com/ts350ak2/video/upload/v1786553287/5.7M_1_r2lysy.mp4',
    badge: 'Instagram Reel',
    title: 'Dr Sandip Mavani | Neurosurgeon',
    subtitle: '5.7M Views | 49K Followers',
  },
  {
    src: 'https://res.cloudinary.com/ts350ak2/video/upload/v1786553217/Video-12950_kemi72.mp4',
    badge: 'Instagram Reel',
    title: 'EOS Couture',
    subtitle: 'Ad Campaign',
  },
  {
    src: 'https://res.cloudinary.com/ts350ak2/video/upload/v1786553000/Video-71601_agafjd.mp4',
    badge: 'Instagram Reel',
    title: 'Frenzy Couture',
    subtitle: 'Fashion Reels',
  },
  {
    src: 'https://res.cloudinary.com/ts350ak2/video/upload/v1786553006/Video-95206_dmsnpi.mp4',
    badge: 'Instagram Reel',
    title: 'Nutty Affair',
    subtitle: 'Ad Campaign',
  },
  {
    src: 'https://res.cloudinary.com/ts350ak2/video/upload/v1786553011/Video-54738_z4yoen.mp4',
    badge: 'Instagram Reel',
    title: 'Dr. Aditya Shah | Dermatologist',
    subtitle: '3M+ Views | 85K Followers',
  },
  {
    src: 'https://res.cloudinary.com/ts350ak2/video/upload/v1786553046/Video-24171_zi192s.mp4',
    badge: 'Instagram Reel',
    title: 'Aadicura Hospital',
    subtitle: '43M+ Views | 1.2M+ Likes',
  },
  {
    src: 'https://res.cloudinary.com/ts350ak2/video/upload/v1786555487/Video-58265_imt14r.mp4',
    badge: 'Instagram Reel',
    title: 'Dr Preay Mehta | Dentist',
    subtitle: '2.9M Views | 23K Followers',
  },
  {
    src: 'https://res.cloudinary.com/ts350ak2/video/upload/v1786555496/Video-18727_er0ho2.mp4',
    badge: 'Instagram Reel',
    title: 'Dr. Nachiket Kaneria | Interventional Radiologist',
    subtitle: '490K Views',
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
        ['--card-accent' as string]: 'var(--accent-reels)',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18, padding: '0 clamp(24px,6vw,60px)', textAlign: 'center' }}>
        <span data-reveal="1" style={{ display: 'inline-flex', alignItems: 'center', fontSize: 11, letterSpacing: '.3em', textTransform: 'uppercase', color: 'var(--accent-reels)' }}>
          <span className="pf-kicker-dot" aria-hidden="true" />
          Short Form
        </span>
        <h2 data-reveal="1" style={{ margin: 0, maxWidth: '20ch', fontSize: 'clamp(34px,4.6vw,76px)', fontWeight: 700, letterSpacing: '-.04em', lineHeight: 1.02 }}>
          Instagram
        </h2>
        <p data-reveal="1" style={{ margin: 0, maxWidth: '58ch', fontSize: 'clamp(14px,1.05vw,17px)', lineHeight: 1.65, color: '#A7B2C4' }}>
          Content that helps you grow and sell.
        </p>
      </div>

      <ScrollRail ariaLabel="reels">
        {reels.map((reel, i) => (
          <article key={i} className="pf-card" style={{ flex: '0 0 clamp(230px,22vw,300px)', scrollSnapAlign: 'center', display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div className="pf-media" style={{ position: 'relative', aspectRatio: '9 / 16', overflow: 'hidden', borderRadius: 14, background: '#0C1526', border: '1px solid rgba(242,244,248,.08)' }}>
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
