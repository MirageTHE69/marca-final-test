const rows = [
  { lead: 'Short form', bold: 'REELS', href: '#reels' },
  { lead: 'Long form', bold: 'FILMS', href: '#films' },
  { lead: 'Thumbnail', bold: 'DESIGN', href: '#design' },
  { lead: 'Brand', bold: 'IDENTITY', href: '#services' },
];

export default function V2Intro() {
  return (
    <section
      className="v2-black-section"
      style={{
        padding: 'clamp(60px,9vh,110px) clamp(20px,5vw,48px)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'clamp(28px,4vh,44px)',
      }}
    >
      <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.28em', textTransform: 'uppercase', color: 'var(--v2-orange)' }}>
        What we do
      </span>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {rows.map((row, i) => (
          <a
            key={row.href}
            href={row.href}
            style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: 'clamp(14px,2vw,26px)',
              padding: 'clamp(14px,2.2vh,22px) 0',
              borderTop: i === 0 ? '2px solid rgba(244,236,222,.2)' : undefined,
              borderBottom: '2px solid rgba(244,236,222,.2)',
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            <span
              className="v2-heading"
              style={{ fontSize: 'clamp(28px,3.2vw,44px)', fontWeight: 500, color: 'var(--v2-cream)', opacity: 0.55 }}
            >
              {row.lead}
            </span>
            <span
              className="v2-heading"
              style={{ fontSize: 'clamp(38px,5.6vw,84px)', color: 'var(--v2-orange)' }}
            >
              {row.bold}
            </span>
            <span style={{ marginLeft: 'auto', fontSize: 20, color: 'var(--v2-cream)' }}>↗</span>
          </a>
        ))}
      </div>
    </section>
  );
}
