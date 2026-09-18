import MediaSlot from '@/components/MediaSlot';

/** Mirrors the services shown in PortfolioSection on the live landing page. */
const services = [
  {
    num: '01',
    title: 'Photoshoot',
    tagline: 'Product, portrait, lifestyle and editorial shoots designed to feed high-authority visual content across all channels.',
    src: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_1000/v1786608765/ChatGPT_Image_Jul_16_2026_05_41_45_PM_hox3lo.png',
  },
  {
    num: '02',
    title: 'Ad Campaigns',
    tagline: 'High-converting concept, script, production, and platform-native cutdowns engineered for maximum ROAS and reach.',
    src: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_1000/v1786733662/EOS_Couture_ijyzyw.png',
  },
  {
    num: '03',
    title: 'Packaging & Creative Design',
    tagline: 'Tactile packaging, SKU label architectures, and brand systems crafted to win customer attention on shelves and feeds.',
    src: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_1000/v1786607756/1_2_yk2t4j.jpg',
  },
];

export default function V2OtherServices() {
  return (
    <section id="other-services" className="v2-paper" style={{ padding: 'clamp(56px,9vh,110px) clamp(18px,4vw,44px)' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 14 }}>
        <span className="v2-micro" style={{ color: 'var(--c-red)' }}>Other Services</span>
        <h2 className="v2-display" style={{ fontSize: 'clamp(30px,5vw,78px)' }}>
          Other <span className="v2-dim-dark">Services</span>
        </h2>
        <p style={{ margin: 0, maxWidth: '66ch', fontSize: 13.5, lineHeight: 1.7, color: 'var(--c-dim-dark)' }}>
          From photoshoots and ad campaigns to packaging and creative design, we offer end to end creative solutions that
          bring your brand to life and create a strong, consistent, and memorable presence across every touchpoint.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
          gap: 'clamp(16px,2vw,26px)',
          marginTop: 'clamp(32px,5vh,58px)',
        }}
      >
        {services.map((s) => (
          <article
            key={s.num}
            className="v2-tile"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 18,
              padding: 'clamp(20px,2.2vw,30px)',
              borderRadius: 20,
              background: 'rgba(28,5,8,.045)',
              border: '1px solid rgba(28,5,8,.14)',
            }}
          >
            <span className="v2-micro" style={{ color: 'var(--c-red)' }}>{s.num} · Service</span>
            <h3 className="v2-display" style={{ fontSize: 'clamp(20px,2vw,28px)' }}>{s.title}</h3>
            <div className="v2-media" style={{ width: '100%', aspectRatio: '4 / 3', borderRadius: 14 }}>
              <MediaSlot src={s.src} alt={s.title} placeholder="Drop image" sizes="420px" />
            </div>
            <p style={{ margin: 0, fontSize: 12.5, lineHeight: 1.65, color: 'var(--c-dim-dark)' }}>{s.tagline}</p>
            <a href="#contact" className="v2-cta" style={{ justifyContent: 'center', marginTop: 'auto', padding: '12px 20px', fontSize: 10, color: 'var(--c-ink)' }}>
              Book service ↗
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
