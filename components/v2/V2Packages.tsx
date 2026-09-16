const packages = [
  {
    num: '01',
    name: 'Instagram',
    subtitle: 'Content Package',
    bg: 'var(--v2-orange)',
    items: ['10–15 Reels per Month', 'Topic Research & Content Strategy', 'Custom Scriptwriting', 'Professional Shooting & Production', 'High-Quality Video Editing', 'Done-for-You Posting & Management'],
  },
  {
    num: '02',
    name: 'YouTube',
    subtitle: 'Long-Form Package',
    bg: 'var(--v2-black)',
    items: ['4–8 Long-Form Videos per Month', 'Custom Scriptwriting & Storytelling', 'Professional Shooting & Production', 'Custom YouTube Thumbnail Design', 'Upload Optimization', 'Performance Tracking'],
  },
  {
    num: '03',
    name: 'Customized Plan',
    subtitle: 'Tailored Content Package',
    bg: 'var(--v2-yellow)',
    items: ['Flexible Content Volume', 'Instagram & YouTube Strategy', 'Thumbnail & Creative Design', 'Social Media Management', 'Campaign & Advertising Content', 'Fully Tailored to Your Goals'],
  },
];

export default function V2Packages() {
  return (
    <section
      id="packages"
      className="v2-black-section"
      style={{ padding: 'clamp(60px,9vh,110px) clamp(20px,5vw,48px)', display: 'flex', flexDirection: 'column', gap: 'clamp(36px,5vh,56px)' }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, textAlign: 'center', alignItems: 'center' }}>
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.28em', textTransform: 'uppercase', color: 'var(--v2-orange)' }}>
          Packages
        </span>
        <h2 className="v2-heading" style={{ margin: 0, fontSize: 'clamp(36px,5vw,72px)', color: 'var(--v2-cream)' }}>
          Content production packages
        </h2>
        <p style={{ margin: 0, maxWidth: '52ch', fontSize: 'clamp(14px,1.1vw,17px)', lineHeight: 1.6, color: 'rgba(244,236,222,.68)' }}>
          Predictable, high-impact content engines designed to turn founders into industry authorities.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(18px,2vw,28px)' }}>
        {packages.map((pkg) => {
          const isDark = pkg.bg === 'var(--v2-black)';
          const fg = isDark ? 'var(--v2-cream)' : 'var(--v2-black)';
          return (
            <article
              key={pkg.num}
              className="v2-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 20,
                padding: 'clamp(26px,2.4vw,34px)',
                borderRadius: 22,
                border: `2px solid ${isDark ? 'var(--v2-cream)' : 'var(--v2-black)'}`,
                background: pkg.bg,
                color: fg,
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.2em', textTransform: 'uppercase', opacity: 0.7 }}>
                  {pkg.num} · {pkg.subtitle}
                </span>
                <h3 className="v2-heading" style={{ margin: 0, fontSize: 30 }}>{pkg.name}</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {pkg.items.map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, lineHeight: 1.5 }}>
                    <span style={{ flexShrink: 0, marginTop: 2, fontWeight: 700 }}>✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </article>
          );
        })}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <a href="#contact" className="v2-btn v2-btn-yellow" style={{ padding: '16px 32px' }}>
          Book a free discovery call <span>↗</span>
        </a>
      </div>
    </section>
  );
}
