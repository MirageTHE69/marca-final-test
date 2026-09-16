const clients = [
  'Dr. Aditya Shah',
  'MS Design Studio',
  'Dr. Sandeep Mavani',
  'The Crossed Boundaries',
  'Dr. Ashish Desai',
  'EOS Couture',
  'Nutty Affair',
  'Aadicura Hospital',
];

export default function V2Ticker() {
  const renderClients = (runId: string) =>
    [...clients, ...clients].map((name, i) => (
      <span key={`${runId}-${i}`} style={{ display: 'flex', alignItems: 'center', gap: 40, flexShrink: 0 }}>
        <span
          style={{
            fontFamily: "'Fredoka', Archivo, system-ui, sans-serif",
            fontWeight: 600,
            fontSize: 'clamp(18px,1.8vw,26px)',
            letterSpacing: '-.01em',
            color: 'var(--v2-black)',
            whiteSpace: 'nowrap',
          }}
        >
          {name}
        </span>
        <span style={{ fontSize: 16, color: 'var(--v2-black)' }}>✦</span>
      </span>
    ));

  return (
    <div
      className="v2-orange-section"
      style={{
        position: 'relative',
        overflow: 'hidden',
        padding: '20px 0',
        borderTop: '2px solid var(--v2-black)',
        borderBottom: '2px solid var(--v2-black)',
      }}
    >
      <div style={{ display: 'flex', width: 'max-content', gap: 40, animation: 'marca-drift 30s linear infinite' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 40 }}>{renderClients('a')}</div>
        <div aria-hidden="true" style={{ display: 'flex', alignItems: 'center', gap: 40 }}>{renderClients('b')}</div>
      </div>
    </div>
  );
}
