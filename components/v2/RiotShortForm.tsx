import MediaSlot from '@/components/MediaSlot';
import ScrollRail from '@/components/ScrollRail';

/** Same reels as ShortFormSection on the landing page. */
const reels = [
  { src: 'https://res.cloudinary.com/ts350ak2/video/upload/v1786553225/Video-59256_f9vyja.mp4', badge: 'Instagram Reel', title: "Ayushi | Founder Ayu's Clairveda", subtitle: 'Cinematic Ad' },
  { src: 'https://res.cloudinary.com/ts350ak2/video/upload/v1786553205/Varicose_Vein_EXPERT_Shares_Top_3_Exercises_for_Relief_ghxgtx.mp4', badge: 'YouTube Short', title: 'Dr Sumit Kapadia | Vascular Surgeon', subtitle: '3.6M Views | 380K Subscribers' },
  { src: 'https://res.cloudinary.com/ts350ak2/video/upload/v1786553180/Video-38021_hhhbkc.mp4', badge: 'Instagram Reel', title: 'Rajvi | Co-Founder Marca Creatives', subtitle: 'Cinematic Ad' },
  { src: 'https://res.cloudinary.com/ts350ak2/video/upload/v1786553181/Video-81552_skecuv.mp4', badge: 'Instagram Reel', title: 'Rajvi | Co-Founder Marca Creatives', subtitle: 'Cinematic Ad' },
  { src: 'https://res.cloudinary.com/ts350ak2/video/upload/v1786553287/5.7M_1_r2lysy.mp4', badge: 'Instagram Reel', title: 'Dr Sandip Mavani | Neurosurgeon', subtitle: '5.7M Views | 49K Followers' },
  { src: 'https://res.cloudinary.com/ts350ak2/video/upload/v1786553217/Video-12950_kemi72.mp4', badge: 'Instagram Reel', title: 'EOS Couture', subtitle: 'Ad Campaign' },
  { src: 'https://res.cloudinary.com/ts350ak2/video/upload/v1786553000/Video-71601_agafjd.mp4', badge: 'Instagram Reel', title: 'Frenzy Couture', subtitle: 'Fashion Reels' },
  { src: 'https://res.cloudinary.com/ts350ak2/video/upload/v1786553006/Video-95206_dmsnpi.mp4', badge: 'Instagram Reel', title: 'Nutty Affair', subtitle: 'Ad Campaign' },
  { src: 'https://res.cloudinary.com/ts350ak2/video/upload/v1786553011/Video-54738_z4yoen.mp4', badge: 'Instagram Reel', title: 'Dr. Aditya Shah | Dermatologist', subtitle: '3M+ Views | 85K Followers' },
  { src: 'https://res.cloudinary.com/ts350ak2/video/upload/v1786553046/Video-24171_zi192s.mp4', badge: 'Instagram Reel', title: 'Aadicura Hospital', subtitle: '43M+ Views | 1.2M+ Likes' },
  { src: 'https://res.cloudinary.com/ts350ak2/video/upload/v1786555487/Video-58265_imt14r.mp4', badge: 'Instagram Reel', title: 'Dr Preay Mehta | Dentist', subtitle: '2.9M Views | 23K Followers' },
  { src: 'https://res.cloudinary.com/ts350ak2/video/upload/v1786555496/Video-18727_er0ho2.mp4', badge: 'Instagram Reel', title: 'Dr. Nachiket Kaneria | Interventional Radiologist', subtitle: '490K Views' },
];

export default function RiotShortForm() {
  return (
    <section id="short-form" className="riot-cream" style={{ padding: 'clamp(56px,9vh,120px) 0' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, padding: '0 clamp(18px,4vw,44px)', textAlign: 'center' }}>
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.24em', textTransform: 'uppercase', color: 'var(--r-muted)' }}>
          Short Form
        </span>
        <h2 className="riot-display" style={{ maxWidth: '20ch', fontSize: 'clamp(40px,7vw,110px)' }}>
          Instagram
        </h2>
        <p style={{ margin: 0, maxWidth: '52ch', fontSize: 'clamp(14px,1.05vw,17px)', lineHeight: 1.65, color: 'var(--r-muted)' }}>
          Content that helps you grow and sell.
        </p>
      </div>

      <ScrollRail ariaLabel="reels">
        {reels.map((reel, i) => (
          <article key={i} style={{ flex: '0 0 clamp(210px,20vw,280px)', scrollSnapAlign: 'center', display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div className="riot-media" style={{ aspectRatio: '9 / 16', borderRadius: 16 }}>
              <MediaSlot type="video" src={reel.src} placeholder="Drop reel" />
              <span
                style={{
                  position: 'absolute',
                  top: 10,
                  left: 10,
                  zIndex: 4,
                  padding: '5px 12px',
                  borderRadius: 999,
                  background: 'var(--r-yellow)',
                  border: '2px solid var(--r-black)',
                  fontSize: 9,
                  fontWeight: 700,
                  letterSpacing: '.1em',
                  textTransform: 'uppercase',
                  color: 'var(--r-black)',
                  pointerEvents: 'none',
                }}
              >
                {reel.badge}
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span style={{ fontSize: 14, fontWeight: 700, letterSpacing: '-.01em', color: 'var(--r-ink)' }}>{reel.title}</span>
              <span style={{ fontSize: 12, color: 'var(--r-muted)' }}>{reel.subtitle}</span>
            </div>
          </article>
        ))}
      </ScrollRail>
    </section>
  );
}
