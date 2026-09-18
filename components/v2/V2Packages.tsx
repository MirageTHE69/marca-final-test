/** Mirrors the packages in PackagesSection on the live landing page. */
const packages = [
  {
    num: '01',
    name: 'Instagram',
    subtitle: 'Content Package',
    featured: false,
    items: [
      { text: '10–15 Reels per Month', highlight: true },
      { text: 'Topic Research & Content Strategy' },
      { text: 'Custom Scriptwriting' },
      { text: 'Concept & Creative Direction' },
      { text: 'Professional Shooting & Production' },
      { text: 'High-Quality Video Editing' },
      { text: 'Captions, Hooks & Visual Elements' },
      { text: 'Done-for-You Posting & Account Management' },
      { text: 'Performance Tracking & Content Optimization' },
    ],
  },
  {
    num: '02',
    name: 'YouTube',
    subtitle: 'Long-Form Package',
    featured: true,
    items: [
      { text: '4–8 Long-Form Videos per Month', highlight: true },
      { text: 'Topic Research & Content Strategy' },
      { text: 'Custom Scriptwriting & Storytelling' },
      { text: 'Concept & Creative Direction' },
      { text: 'Professional Shooting & Production' },
      { text: 'High-Quality Video Editing' },
      { text: 'Custom YouTube Thumbnail Design' },
      { text: 'Click-Focused Titles & Thumbnail Concepts' },
      { text: 'Video Descriptions & Upload Optimization' },
      { text: 'Performance Tracking & Content Optimization' },
    ],
  },
  {
    num: '03',
    name: 'Customized Plan',
    subtitle: 'Tailored Content Package',
    featured: false,
    items: [
      { text: 'Flexible Content Volume', highlight: true },
      { text: 'Custom Content Strategy for Instagram & YouTube' },
      { text: 'Topic Research & Scriptwriting' },
      { text: 'Concept & Creative Direction' },
      { text: 'Professional Shooting & Production' },
      { text: 'Video Editing & Post-Production' },
      { text: 'Thumbnail & Creative Design' },
      { text: 'Social Media Management' },
      { text: 'Campaign & Advertising Content' },
      { text: 'Fully Tailored to Your Brand Goals', highlight: true },
    ],
  },
];

export default function V2Packages() {
  return (
    <section id="packages" className="v2-ox" style={{ padding: 'clamp(56px,9vh,110px) clamp(18px,4vw,44px)' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 14 }}>
        <span className="v2-micro" style={{ color: 'var(--c-red-bright)' }}>Packages</span>
        <h2 className="v2-display" style={{ fontSize: 'clamp(28px,4.6vw,70px)', maxWidth: '20ch' }}>
          Social Media &amp; <span className="v2-dim-light">Content Production</span> Packages
        </h2>
        <p style={{ margin: 0, maxWidth: '58ch', fontSize: 13.5, lineHeight: 1.7, color: 'rgba(241,238,233,.62)' }}>
          Predictable, high-impact content engines designed to turn founders and businesses into industry authorities.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
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
            <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
              <span className="v2-micro" style={{ opacity: 0.72 }}>{p.num} · {p.subtitle}</span>
              <h3 className="v2-display" style={{ fontSize: 'clamp(24px,2.4vw,34px)' }}>{p.name}</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
              {p.items.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    gap: 10,
                    fontSize: 12.5,
                    lineHeight: 1.5,
                    fontWeight: item.highlight ? 600 : 400,
                    opacity: item.highlight ? 1 : p.featured ? 0.9 : 0.7,
                  }}
                >
                  <span style={{ flexShrink: 0, color: p.featured ? '#FFFFFF' : 'var(--c-red-bright)', fontWeight: 700 }}>✓</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 'clamp(30px,4.5vh,50px)' }}>
        <a href="#contact" className="v2-cta v2-cta-solid">
          Book a free discovery call ↗
        </a>
      </div>
    </section>
  );
}
