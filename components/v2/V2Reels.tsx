import MediaSlot from '@/components/MediaSlot';
import ScrollRail from '@/components/ScrollRail';

const reels = [
  {
    src: 'https://res.cloudinary.com/ts350ak2/video/upload/v1786553225/Video-59256_f9vyja.mp4',
    title: "Ayushi | Founder Ayu's Clairveda",
    subtitle: 'Cinematic Ad',
  },
  {
    src: 'https://res.cloudinary.com/ts350ak2/video/upload/v1786553205/Varicose_Vein_EXPERT_Shares_Top_3_Exercises_for_Relief_ghxgtx.mp4',
    title: 'Dr Sumit Kapadia | Vascular Surgeon',
    subtitle: '3.6M Views | 380K Subscribers',
  },
  {
    src: 'https://res.cloudinary.com/ts350ak2/video/upload/v1786553180/Video-38021_hhhbkc.mp4',
    title: 'Rajvi | Co-Founder Marca Creatives',
    subtitle: 'Cinematic Ad',
  },
  {
    src: 'https://res.cloudinary.com/ts350ak2/video/upload/v1786553287/5.7M_1_r2lysy.mp4',
    title: 'Dr Sandip Mavani | Neurosurgeon',
    subtitle: '5.7M Views | 49K Followers',
  },
  {
    src: 'https://res.cloudinary.com/ts350ak2/video/upload/v1786553011/Video-54738_z4yoen.mp4',
    title: 'Dr. Aditya Shah | Dermatologist',
    subtitle: '3M+ Views | 85K Followers',
  },
  {
    src: 'https://res.cloudinary.com/ts350ak2/video/upload/v1786553046/Video-24171_zi192s.mp4',
    title: 'Aadicura Hospital',
    subtitle: '43M+ Views | 1.2M+ Likes',
  },
];

const TILTS = [-3, 2, -1.5, 3, -2, 1.5];

export default function V2Reels() {
  return (
    <section id="reels" className="v2-cream-section" style={{ padding: 'clamp(60px,9vh,110px) 0' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, padding: '0 clamp(20px,5vw,48px)' }}>
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.28em', textTransform: 'uppercase', color: 'var(--v2-orange-deep)' }}>
          Short form
        </span>
        <h2 className="v2-heading" style={{ margin: 0, fontSize: 'clamp(40px,6vw,88px)', color: 'var(--v2-black)' }}>
          Instagram
        </h2>
        <p style={{ margin: 0, maxWidth: '52ch', fontSize: 'clamp(14px,1.1vw,17px)', lineHeight: 1.6 }}>
          Content that helps you grow and sell.
        </p>
      </div>

      <ScrollRail ariaLabel="reels">
        {reels.map((reel, i) => (
          <article
            key={reel.title + i}
            className="v2-polaroid"
            style={{ flex: '0 0 clamp(220px,20vw,270px)', scrollSnapAlign: 'center', ['--tilt' as string]: `${TILTS[i % TILTS.length]}deg` }}
          >
            <span className="v2-tape" aria-hidden="true" />
            <div className="v2-polaroid-frame" style={{ aspectRatio: '9 / 16', borderRadius: 1 }}>
              <MediaSlot type="video" src={reel.src} placeholder="Drop reel" sizes="270px" />
            </div>
            <div className="v2-polaroid-caption">
              <span style={{ display: 'block', fontSize: 13, fontWeight: 700, color: 'var(--v2-ink)' }}>{reel.title}</span>
              <span style={{ display: 'block', fontSize: 11, color: '#6B5D4C', marginTop: 2 }}>{reel.subtitle}</span>
            </div>
          </article>
        ))}
      </ScrollRail>
    </section>
  );
}
