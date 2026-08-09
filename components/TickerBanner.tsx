export default function TickerBanner() {
  const brands = ['Aadicura Hospital', 'Kindra', 'Ledgerloop', 'Sol & Grain', 'Vantara Interiors', 'Norwood Clinics', 'Fold Studio'];

  const renderBrands = () =>
    brands.map((brand, i) => (
      <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 60 }}>
        <span>{brand}</span>
        <span style={{ color: 'var(--accent)' }}>·</span>
      </span>
    ));

  return (
    <div
      style={{
        position: 'relative',
        zIndex: 1,
        borderTop: '1px solid rgba(242,244,248,.08)',
        borderBottom: '1px solid rgba(242,244,248,.08)',
        overflow: 'hidden',
        padding: '22px 0',
        background: '#05070B',
      }}
    >
      <div
        style={{
          display: 'flex',
          width: 'max-content',
          gap: 60,
          animation: 'marca-drift 34s linear infinite',
          willChange: 'transform',
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: 60,
            fontSize: 12,
            letterSpacing: '.3em',
            textTransform: 'uppercase',
            color: '#4E5A70',
          }}
        >
          {renderBrands()}
        </div>
        <div
          style={{
            display: 'flex',
            gap: 60,
            fontSize: 12,
            letterSpacing: '.3em',
            textTransform: 'uppercase',
            color: '#4E5A70',
          }}
        >
          {renderBrands()}
        </div>
      </div>
    </div>
  );
}
