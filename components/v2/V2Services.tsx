import MediaSlot from '@/components/MediaSlot';

const services = [
  {
    num: '01',
    title: 'Photoshoot',
    tagline: 'Product, portrait, lifestyle and editorial shoots designed to feed high-authority visual content across all channels.',
    image: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_1000/v1786608769/ChatGPT_Image_Jul_16_2026_06_10_05_PM_c7dwfy.png',
    bg: 'var(--v2-yellow)',
  },
  {
    num: '02',
    title: 'Ad Campaigns',
    tagline: 'High-converting concept, script, production, and platform-native cutdowns engineered for maximum ROAS.',
    image: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_1000/v1786733662/EOS_Couture_ijyzyw.png',
    bg: 'var(--v2-cream)',
  },
  {
    num: '03',
    title: 'Packaging & Creative Design',
    tagline: 'Tactile packaging, SKU label architectures, and brand systems crafted to win customer attention on shelves and feeds.',
    image: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_1000/v1786607756/1_2_yk2t4j.jpg',
    bg: 'var(--v2-orange)',
  },
];

export default function V2Services() {
  return (
    <section
      id="services"
      className="v2-cream-section"
      style={{ padding: 'clamp(60px,9vh,110px) clamp(20px,5vw,48px)', display: 'flex', flexDirection: 'column', gap: 'clamp(36px,5vh,56px)' }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, textAlign: 'center', alignItems: 'center' }}>
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.28em', textTransform: 'uppercase', color: 'var(--v2-orange-deep)' }}>
          Other services
        </span>
        <h2 className="v2-heading" style={{ margin: 0, fontSize: 'clamp(36px,5vw,72px)', color: 'var(--v2-black)' }}>
          We do things differently
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(18px,2vw,28px)' }}>
        {services.map((s) => (
          <article
            key={s.num}
            className="v2-card"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 20,
              padding: 'clamp(24px,2.2vw,32px)',
              borderRadius: 22,
              border: '2px solid var(--v2-black)',
              background: s.bg,
              color: 'var(--v2-black)',
            }}
          >
            <span className="v2-heading" style={{ fontSize: 14, letterSpacing: '.1em' }}>{s.num} · SERVICE</span>
            <h3 className="v2-heading" style={{ margin: 0, fontSize: 28 }}>{s.title}</h3>
            <div style={{ position: 'relative', aspectRatio: '4 / 3', borderRadius: 14, overflow: 'hidden', border: '2px solid var(--v2-black)' }}>
              <MediaSlot src={s.image} alt={s.title} placeholder="Drop image" sizes="380px" />
            </div>
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6 }}>{s.tagline}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
