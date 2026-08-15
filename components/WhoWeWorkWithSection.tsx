const audiences = [
  {
    title: 'Local businesses',
    examples: 'Salons, cafes, gyms, clinics',
    line: 'We turn your daily work into content that attracts customers.',
  },
  {
    title: 'Online brands',
    examples: 'D2C products, fashion, skincare, home decor',
    line: 'We make your products impossible to scroll past.',
  },
  {
    title: 'Service providers',
    examples: 'Coaches, consultants, agencies',
    line: 'We turn your expertise into a steady stream of enquiries.',
  },
  {
    title: 'Professionals',
    examples: 'Doctors, lawyers, designers, educators',
    line: 'We build the authority that makes people choose you first.',
  },
  {
    title: 'Creators and personal brands',
    examples: 'Founders, experts, personalities',
    line: 'We turn your ideas into an audience that stays.',
  },
];

export default function WhoWeWorkWithSection() {
  return (
    <section
      id="who-we-work-with"
      style={{
        position: 'relative',
        zIndex: 10,
        padding: 'clamp(80px,11vh,140px) clamp(24px,6vw,60px)',
        background: '#05070B',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18, textAlign: 'center' }}>
        <span data-reveal="1" style={{ fontSize: 11, letterSpacing: '.3em', textTransform: 'uppercase', color: 'var(--accent)' }}>
          Who We Work With
        </span>
        <h2 data-reveal="1" style={{ margin: 0, maxWidth: '22ch', fontSize: 'clamp(34px,4.6vw,76px)', fontWeight: 700, letterSpacing: '-.04em', lineHeight: 1.02 }}>
          If you have a business, you have{' '}
          <span style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: 'italic', fontWeight: 400 }}>a story to tell.</span>
        </h2>
      </div>

      <div
        style={{
          display: 'grid',
          // Capped width keeps five cards on a balanced 3 + 2 grid instead of orphaning one.
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(14px,1.6vw,24px)',
          maxWidth: 1180,
          margin: '0 auto',
          marginTop: 'clamp(44px,6vh,72px)',
        }}
      >
        {audiences.map((a, i) => (
          <article
            key={a.title}
            data-reveal="1"
            className="work-index-card"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
              padding: 'clamp(24px,2.3vw,36px)',
              border: '1px solid rgba(242,244,248,.1)',
              borderRadius: 16,
              background: 'rgba(242,244,248,.02)',
            }}
          >
            <span style={{ fontSize: 10, letterSpacing: '.26em', color: '#55627A' }}>
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 style={{ margin: 0, fontSize: 'clamp(19px,1.8vw,27px)', fontWeight: 700, letterSpacing: '-.03em', lineHeight: 1.1, color: '#F2F4F8' }}>
              {a.title}
            </h3>
            <span style={{ fontSize: 12, lineHeight: 1.6, color: '#8E9BB0' }}>{a.examples}</span>
            <p
              style={{
                margin: '6px 0 0',
                paddingTop: 12,
                borderTop: '1px solid rgba(242,244,248,.08)',
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontStyle: 'italic',
                fontSize: 'clamp(14px,1.15vw,17px)',
                lineHeight: 1.5,
                color: '#B6C6E4',
              }}
            >
              {a.line}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
