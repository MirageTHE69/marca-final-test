const packages = [
  {
    num: '01',
    name: 'Instagram',
    subtitle: 'Content package',
    featured: false,
    items: [
      '10–15 reels per month',
      'Topic research & content strategy',
      'Custom scriptwriting',
      'Professional shooting & production',
      'High-quality video editing',
      'Captions, hooks & visual elements',
      'Done-for-you posting & management',
      'Performance tracking & optimisation',
    ],
  },
  {
    num: '02',
    name: 'YouTube',
    subtitle: 'Long-form package',
    featured: true,
    items: [
      '4–8 long-form videos per month',
      'Scriptwriting & storytelling',
      'Concept & creative direction',
      'Professional shooting & production',
      'Custom thumbnail design',
      'Click-focused titles & concepts',
      'Descriptions & upload optimisation',
      'Performance tracking & optimisation',
    ],
  },
  {
    num: '03',
    name: 'Customized',
    subtitle: 'Tailored package',
    featured: false,
    items: [
      'Flexible content volume',
      'Instagram & YouTube strategy',
      'Topic research & scriptwriting',
      'Shooting, editing & post-production',
      'Thumbnail & creative design',
      'Social media management',
      'Campaign & advertising content',
      'Fully tailored to your brand goals',
    ],
  },
];

export default function V2Packages() {
  return (
    <section id="packages" className="v2-ox" style={{ padding: 'clamp(56px,9vh,110px) clamp(18px,4vw,44px)' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 20 }}>
        <h2 className="v2-display" style={{ fontSize: 'clamp(30px,5vw,78px)', maxWidth: '16ch' }}>
          Pick your <span className="v2-dim-light">content engine</span>
        </h2>
        <p style={{ margin: 0, maxWidth: '38ch', fontSize: 13, lineHeight: 1.7, color: 'rgba(241,238,233,.6)' }}>
          Predictable, high-impact production designed to turn founders and businesses into industry authorities.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
          gap: 'clamp(16px,2vw,26px)',
          marginTop: 'clamp(32px,5vh,58px)',
        }}
      >
        {packages.map((p) => (
          <article
            key={p.num}
            className="v2-tile"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 22,
              padding: 'clamp(24px,2.4vw,34px)',
              borderRadius: 20,
              background: p.featured ? 'var(--c-red)' : 'rgba(241,238,233,.04)',
              border: p.featured ? '1px solid var(--c-red)' : '1px solid rgba(241,238,233,.16)',
              color: p.featured ? '#FFFFFF' : 'var(--c-paper)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 14 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                <span className="v2-micro" style={{ opacity: 0.72 }}>{p.num} — {p.subtitle}</span>
                <h3 className="v2-display" style={{ fontSize: 'clamp(24px,2.4vw,34px)' }}>{p.name}</h3>
              </div>
              {p.featured && <span className="v2-tag" style={{ borderColor: 'rgba(255,255,255,.55)' }}>Most picked</span>}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
              {p.items.map((item) => (
                <div key={item} style={{ display: 'flex', gap: 10, fontSize: 12.5, lineHeight: 1.5, opacity: p.featured ? 0.95 : 0.74 }}>
                  <span style={{ flexShrink: 0, color: p.featured ? '#FFFFFF' : 'var(--c-red-bright)', fontWeight: 700 }}>✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="v2-cta"
              style={{
                marginTop: 'auto',
                justifyContent: 'center',
                padding: '13px 22px',
                fontSize: 10,
                background: p.featured ? '#FFFFFF' : 'transparent',
                borderColor: p.featured ? '#FFFFFF' : 'rgba(241,238,233,.4)',
                color: p.featured ? 'var(--c-red)' : 'var(--c-paper)',
              }}
            >
              Book a call
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
