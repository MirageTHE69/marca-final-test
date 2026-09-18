import MediaSlot from '@/components/MediaSlot';
import ScrollRail from '@/components/ScrollRail';

const reels = [
  { src: 'https://res.cloudinary.com/ts350ak2/video/upload/v1786553205/Varicose_Vein_EXPERT_Shares_Top_3_Exercises_for_Relief_ghxgtx.mp4', title: 'Dr Sumit Kapadia', meta: '3.6M views · 380K subs' },
  { src: 'https://res.cloudinary.com/ts350ak2/video/upload/v1786553287/5.7M_1_r2lysy.mp4', title: 'Dr Sandip Mavani', meta: '5.7M views · 49K followers' },
  { src: 'https://res.cloudinary.com/ts350ak2/video/upload/v1786553046/Video-24171_zi192s.mp4', title: 'Aadicura Hospital', meta: '43M+ views · 1.2M+ likes' },
  { src: 'https://res.cloudinary.com/ts350ak2/video/upload/v1786553011/Video-54738_z4yoen.mp4', title: 'Dr. Aditya Shah', meta: '3M+ views · 85K followers' },
  { src: 'https://res.cloudinary.com/ts350ak2/video/upload/v1786553225/Video-59256_f9vyja.mp4', title: "Ayu's Clairveda", meta: 'Cinematic ad' },
  { src: 'https://res.cloudinary.com/ts350ak2/video/upload/v1786553217/Video-12950_kemi72.mp4', title: 'EOS Couture', meta: 'Ad campaign' },
];

const films = [
  {
    src: 'https://res.cloudinary.com/ts350ak2/video/upload/v1786473746/vidssave.com_Major_Mohit_Sharma__The_Spy_Who_Infiltrated_Kashmir_s_Deadliest_Terror_Network___Dhurandhar_480P_onwwyo.mp4',
    chip: 'Documentary',
    title: 'Vedang Rathore — The Dhurandhar Story',
  },
  {
    src: 'https://res.cloudinary.com/ts350ak2/video/upload/v1786474057/vidssave.com_3_Acre_Sustainable_Farmhouse_in_Vadodara___Vernacular_Architecture_Eco-Friendly_Design_480P_n5hcko.mp4',
    chip: 'Architecture',
    title: 'MS Design Studio — The Vernacular Farmhouse',
  },
  {
    src: 'https://res.cloudinary.com/ts350ak2/video/upload/v1786473730/vidssave.com_I_ve_Operated_on_1000_Blocked_Arteries_This_Hidden_Ingredient_Was_in_EVERY_Patient_s_Diet_360P_dbguqj.mp4',
    chip: 'Healthcare',
    title: 'Dr. Sumit Kapadia — 1,000 Blocked Arteries',
  },
];

export default function V2Work() {
  return (
    <section id="work" className="v2-ox" style={{ padding: 'clamp(56px,9vh,110px) 0' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 20, padding: '0 clamp(18px,4vw,44px)' }}>
        <h2 className="v2-display" style={{ fontSize: 'clamp(30px,5vw,78px)' }}>
          Selected <span className="v2-dim-light">work</span>
        </h2>
        <span className="v2-micro" style={{ color: 'rgba(241,238,233,.55)' }}>
          2022 — 2026 · Drag to explore
        </span>
      </div>

      <ScrollRail ariaLabel="reels">
        {reels.map((r) => (
          <article
            key={r.title}
            style={{ flex: '0 0 clamp(190px,18vw,250px)', scrollSnapAlign: 'center', display: 'flex', flexDirection: 'column', gap: 12 }}
          >
            <div className="v2-tile v2-grade" style={{ aspectRatio: '9 / 16' }}>
              <MediaSlot type="video" src={r.src} placeholder="Drop reel" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: '-.01em' }}>{r.title}</span>
              <span className="v2-micro" style={{ color: 'rgba(241,238,233,.5)' }}>{r.meta}</span>
            </div>
          </article>
        ))}
      </ScrollRail>

      <ScrollRail ariaLabel="films">
        {films.map((f) => (
          <article
            key={f.title}
            style={{ flex: '0 0 clamp(290px,38vw,520px)', scrollSnapAlign: 'center', display: 'flex', flexDirection: 'column', gap: 14 }}
          >
            <div className="v2-tile v2-grade" style={{ aspectRatio: '16 / 9' }}>
              <span className="v2-chip">{f.chip}</span>
              <MediaSlot type="video" src={f.src} placeholder="Drop film" />
            </div>
            <h3 style={{ margin: 0, fontSize: 'clamp(15px,1.4vw,19px)', fontWeight: 600, letterSpacing: '-.02em' }}>{f.title}</h3>
          </article>
        ))}
      </ScrollRail>
    </section>
  );
}
