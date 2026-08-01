const packages = [
  {
    num: '01',
    title: 'Personal branding',
    for: 'founders, doctors and consultants who need to be known by name.',
    items: ['Monthly shoot day', '12–16 verticals per month', 'Hooks, captions & covers', 'Positioning & content pillars'],
  },
  {
    num: '02',
    title: 'Business marketing',
    for: 'clinics, restaurants and retail brands that need a steady content engine.',
    items: ['Quarterly content strategy', 'Short form + one long form', 'Thumbnails & campaign creative', 'Monthly performance review'],
  },
  {
    num: '03',
    title: 'Brand identity',
    for: 'new brands, and old ones that have outgrown their look.',
    items: ['Naming & positioning', 'Logo & type system', 'Colour, packaging, applications', 'Brand guidelines'],
  },
  {
    num: '04',
    title: 'Creative production',
    for: 'teams with a film to make — commercial, documentary or launch.',
    items: ['Concept, script & boards', 'Full crew production', 'Colour, sound & graphics', 'Cutdowns for every platform'],
  },
];

export default function PackagesSection() {
  return (
    <section
      id="packages"
      data-scene="1"
      style={{ position: 'relative', zIndex: 9, marginTop: '-14vh', background: '#05070B' }}
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
            <span data-reveal="1" style={{ fontSize: 11, letterSpacing: '.3em', textTransform: 'uppercase', color: 'var(--accent)' }}>08 — Engagements</span>
            <h2 data-reveal="1" style={{ margin: 0, fontSize: 'clamp(34px,4.6vw,80px)', fontWeight: 700, letterSpacing: '-.04em', lineHeight: .98 }}>
              Four ways to<br />work with us.
            </h2>
          </div>
          <p data-reveal="1" style={{ margin: 0, maxWidth: '34ch', fontSize: 16, lineHeight: 1.7, color: '#96A2B6' }}>
            Every engagement is scoped after the discovery call — this is what each one covers.
          </p>
        </div>
      </div>

      <div
        data-chapter-body="1"
        style={{ position: 'relative', zIndex: 1, marginTop: '44vh', padding: 'clamp(34px,5vh,60px) clamp(24px,6vw,60px) clamp(90px,14vh,180px)', background: '#05070B', willChange: 'transform, filter' }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(16px,1.6vw,24px)' }}>
          {packages.map((pkg) => (
            <article
              key={pkg.num}
              data-reveal="1"
              className="package-card"
            >
              <span style={{ fontSize: 10, letterSpacing: '.24em', textTransform: 'uppercase', color: 'var(--accent)' }}>{pkg.num}</span>
              <h3 style={{ margin: 0, fontSize: 'clamp(22px,2vw,28px)', fontWeight: 600, letterSpacing: '-.025em' }}>{pkg.title}</h3>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.7, color: '#8E9BB0' }}>
                <strong style={{ color: '#C3CBD9', fontWeight: 500 }}>For</strong> {pkg.for}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, paddingTop: 20, borderTop: '1px solid rgba(242,244,248,.08)', fontSize: 13, color: '#96A2B6' }}>
                {pkg.items.map(item => <span key={item}>{item}</span>)}
              </div>
              <a href="#contact" style={{ marginTop: 'auto', display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase', color: '#F2F4F8' }}>
                Enquire <span>→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
