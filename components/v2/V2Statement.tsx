import MediaSlot from '@/components/MediaSlot';

const shots = [
  {
    src: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_900/v1786608769/ChatGPT_Image_Jul_16_2026_06_10_05_PM_c7dwfy.png',
    label: 'Fashion',
  },
  {
    src: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_900/v1786607756/1_2_yk2t4j.jpg',
    label: 'Packaging',
  },
  {
    src: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_900/v1786691250/ChatGPT_Image_Aug_12_2026_02_26_19_PM_puys6a.png',
    label: 'Editorial',
  },
];

export default function V2Statement() {
  return (
    <section
      className="v2-paper"
      style={{ position: 'relative', padding: 'clamp(50px,8vh,96px) clamp(18px,4vw,44px) clamp(56px,9vh,110px)' }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 24 }}>
        <span className="v2-star" aria-hidden="true">✳</span>
        <span className="v2-micro" style={{ color: 'var(--c-dim-dark)', textAlign: 'right' }}>
          Shape
          <br />
          the future
        </span>
      </div>

      <h2
        className="v2-display"
        style={{ fontSize: 'clamp(30px,5.2vw,82px)', textAlign: 'center', marginTop: 'clamp(-6px,-0.6vw,0px)' }}
      >
        Marca builds content
        <br />
        systems that make founders
        <br />
        <span className="v2-dim-dark">impossible to scroll past</span>
        <br />
        and easy to choose
      </h2>

      <p
        style={{
          margin: 'clamp(24px,3.5vh,40px) auto 0',
          maxWidth: '54ch',
          textAlign: 'center',
          fontSize: 14,
          lineHeight: 1.7,
          color: 'var(--c-dim-dark)',
        }}
      >
        Strategy, scripting, production, editing and posting — handled end to end. You show up for a few
        hours a month; we build the authority that compounds behind it.
      </p>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-end',
          gap: 'clamp(20px,3vw,40px)',
          marginTop: 'clamp(34px,5vh,60px)',
        }}
      >
        <a
          href="#work"
          className="v2-micro"
          style={{ color: 'var(--c-ink)', textDecoration: 'underline', textUnderlineOffset: 5, lineHeight: 1.7 }}
        >
          Our
          <br />
          latest
          <br />
          projects
        </a>

        <div
          style={{
            flex: '1 1 460px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
            gap: 'clamp(12px,1.6vw,22px)',
          }}
        >
          {shots.map((s) => (
            <div key={s.label} className="v2-tile v2-grade" style={{ aspectRatio: '1 / 1' }}>
              <span className="v2-chip">{s.label}</span>
              <MediaSlot src={s.src} alt={s.label} placeholder="Drop image" sizes="300px" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
