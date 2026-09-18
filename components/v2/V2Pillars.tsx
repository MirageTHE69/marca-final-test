import MediaSlot from '@/components/MediaSlot';

const pillars = [
  {
    num: '01',
    title: 'Short form',
    desc: 'Reels and shorts — research, scripting, filming, editing, captions, hooks. The engine that builds reach.',
  },
  {
    num: '02',
    title: 'Long form',
    desc: 'Documentary-style YouTube that turns a niche expert into the name people search for.',
  },
  {
    num: '03',
    title: 'Design & identity',
    desc: 'Thumbnails, brand systems, labels and packaging. Everything that makes you recognisable at a glance.',
  },
  {
    num: '04',
    title: 'Strategy & management',
    desc: 'Content pillars, calendar, posting, optimisation. We run the account so you can run the business.',
  },
];

export default function V2Pillars() {
  return (
    <section
      className="v2-grade"
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: 'clamp(40px,7vh,90px)',
        minHeight: 'min(86vh, 800px)',
        padding: 'clamp(46px,7vh,86px) clamp(18px,4vw,44px)',
      }}
    >
      <MediaSlot
        src="https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_1600/v1786691248/ChatGPT_Image_Jul_16_2026_06_00_57_PM_eneitn.png"
        alt="Marca creative direction"
        placeholder="Drop image"
        sizes="100vw"
      />

      <div style={{ position: 'relative', zIndex: 6, display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 24 }}>
        <h2 className="v2-display" style={{ fontSize: 'clamp(28px,4.4vw,66px)', maxWidth: '14ch' }}>
          Four ways we make
          <br />
          <span className="v2-dim-light">your brand</span> unforgettable
        </h2>
        <span className="v2-star" aria-hidden="true" style={{ color: 'var(--c-paper)' }}>✦</span>
      </div>

      <div
        style={{
          position: 'relative',
          zIndex: 6,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
          gap: 'clamp(20px,3vw,44px)',
        }}
      >
        {pillars.map((p) => (
          <div key={p.num} style={{ display: 'flex', flexDirection: 'column', gap: 8, borderTop: '1px solid rgba(241,238,233,.35)', paddingTop: 14 }}>
            <span className="v2-micro" style={{ color: 'var(--c-paper)' }}>
              {p.num} — {p.title}
            </span>
            <p style={{ margin: 0, fontSize: 12, lineHeight: 1.6, color: 'rgba(241,238,233,.72)' }}>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
