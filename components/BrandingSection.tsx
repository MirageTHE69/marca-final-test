const brandingItems = [
  { title: 'Fold Studio', type: 'Logo', desc: 'A monogram built to work at 16px and on a shopfront.' },
  { title: 'Kindra', type: 'Packaging', desc: 'Unboxing designed as the first piece of content.' },
  { title: 'Aster Health', type: 'Colour', desc: 'A palette that survives fluorescent hospital lighting.' },
  { title: 'Vantara', type: 'Guidelines', desc: '64 pages a freelancer can follow without asking.' },
];

export default function BrandingSection() {
  return (
    <section
      id="branding"
      data-scene="1"
      style={{ position: 'relative', zIndex: 7, marginTop: '-14vh', background: '#05070B' }}
    >
      <div
        data-chapter-title="1"
        style={{ position: 'sticky', top: 0, height: '100vh', zIndex: 0, display: 'flex', alignItems: 'center', padding: '0 clamp(24px,6vw,60px)' }}
      >
        <div
          data-chapter-title-inner="1"
          style={{ width: '100%', display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 30, willChange: 'transform, filter' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <span data-reveal="1" style={{ fontSize: 11, letterSpacing: '.3em', textTransform: 'uppercase', color: 'var(--accent)' }}>06 — Identity</span>
            <h2 data-reveal="1" style={{ margin: 0, fontSize: 'clamp(34px,4.6vw,80px)', fontWeight: 700, letterSpacing: '-.04em', lineHeight: .98 }}>
              A brand is how it<br />behaves everywhere.
            </h2>
          </div>
          <p data-reveal="1" style={{ margin: 0, maxWidth: '34ch', fontSize: 16, lineHeight: 1.7, color: '#96A2B6' }}>
            Logo systems, packaging, colour, guidelines and the social identity that carries them into the feed.
          </p>
        </div>
      </div>

      <div
        data-chapter-body="1"
        style={{ position: 'relative', zIndex: 1, marginTop: '44vh', padding: 'clamp(34px,5vh,60px) clamp(24px,6vw,60px) clamp(90px,14vh,180px)', background: '#05070B', willChange: 'transform, filter' }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 'clamp(16px,1.8vw,26px)' }}>
          {brandingItems.map((item) => (
            <article key={item.title} data-reveal="1" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div style={{ position: 'relative', aspectRatio: '1 / 1', borderRadius: 4, overflow: 'hidden', background: '#0C1526' }}>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #0C1526, #060B18)' }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 10 }}>
                <h3 style={{ margin: 0, fontSize: 15, fontWeight: 600 }}>{item.title}</h3>
                <span style={{ fontSize: 10, letterSpacing: '.16em', textTransform: 'uppercase', color: '#6C7A92' }}>{item.type}</span>
              </div>
              <p style={{ margin: 0, fontSize: 13, lineHeight: 1.6, color: '#8E9BB0' }}>{item.desc}</p>
            </article>
          ))}
        </div>

        <div data-reveal="1" style={{ display: 'flex', justifyContent: 'center', paddingTop: 'clamp(36px,4vw,60px)' }}>
          <a href="#portfolio" className="btn-outline">Full branding portfolio <span>→</span></a>
        </div>
      </div>
    </section>
  );
}
