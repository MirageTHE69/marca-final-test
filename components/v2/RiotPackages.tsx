/** Same three packages and full checklists as PackagesSection. */
const packages = [
  {
    num: '01',
    name: 'Instagram',
    subtitle: 'Content Package',
    bg: 'var(--r-yellow)',
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
    bg: 'var(--r-blue)',
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
    bg: 'var(--r-orange)',
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

export default function RiotPackages() {
  return (
    <section id="packages" className="riot-black" style={{ padding: 'clamp(56px,9vh,120px) clamp(18px,4vw,44px)' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 15, textAlign: 'center', marginBottom: 'clamp(38px,6vh,68px)' }}>
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.24em', textTransform: 'uppercase', color: 'var(--r-yellow)' }}>
          Packages
        </span>
        <h2 className="riot-display" style={{ fontSize: 'clamp(30px,4.6vw,70px)', maxWidth: '22ch', color: 'var(--r-cream)' }}>
          Social Media &amp; Content Production Packages
        </h2>
        <p style={{ margin: 0, maxWidth: '58ch', fontSize: 'clamp(14px,1.1vw,17px)', lineHeight: 1.65, color: 'rgba(243,240,221,.68)' }}>
          Predictable, high-impact content engines designed to turn founders and businesses into industry authorities.
        </p>
      </div>

      <div
        style={{
          maxWidth: 1320,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
          gap: 'clamp(18px,2.2vw,30px)',
          alignItems: 'stretch',
        }}
      >
        {packages.map((pkg) => (
          <article
            key={pkg.num}
            className="riot-card"
            style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', background: 'var(--r-cream)', color: 'var(--r-ink)' }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 5,
                padding: 'clamp(22px,2.6vh,32px) clamp(20px,2.4vw,32px)',
                background: pkg.bg,
                borderBottom: '2px solid var(--r-black)',
                color: 'var(--r-black)',
              }}
            >
              <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.22em', textTransform: 'uppercase' }}>
                {pkg.num} · {pkg.subtitle}
              </span>
              <h3 className="riot-display" style={{ fontSize: 'clamp(24px,2.2vw,32px)' }}>{pkg.name}</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, flex: '1 1 auto', padding: 'clamp(22px,2.8vh,32px) clamp(20px,2.4vw,32px) clamp(26px,3.2vh,38px)' }}>
              {pkg.items.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 11,
                    fontSize: 'clamp(13px,1vw,15px)',
                    lineHeight: 1.5,
                    fontWeight: item.highlight ? 700 : 400,
                    color: item.highlight ? 'var(--r-ink)' : 'var(--r-muted)',
                  }}
                >
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      width: 18,
                      height: 18,
                      marginTop: 1,
                      borderRadius: 999,
                      border: '2px solid var(--r-black)',
                      background: item.highlight ? pkg.bg : 'transparent',
                      fontSize: 10,
                      fontWeight: 700,
                      color: 'var(--r-black)',
                    }}
                  >
                    ✓
                  </span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 'clamp(34px,5vh,60px)' }}>
        <a href="#contact" className="riot-btn riot-btn-yellow" style={{ padding: '16px 32px', fontSize: 13 }}>
          Book a free discovery call ↗
        </a>
      </div>
    </section>
  );
}
