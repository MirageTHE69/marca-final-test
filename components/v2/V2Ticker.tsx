/** Same client roster as TickerBanner on the live landing page. */
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
  return (
    <div
      style={{
        overflow: 'hidden',
        padding: '16px 0',
        background: 'var(--c-red)',
        borderTop: '1px solid rgba(241,238,233,.18)',
        borderBottom: '1px solid rgba(241,238,233,.18)',
      }}
    >
      <div style={{ display: 'flex', width: 'max-content', gap: 34, animation: 'marca-drift 32s linear infinite' }}>
        {[0, 1].map((run) => (
          <div key={run} aria-hidden={run === 1} style={{ display: 'flex', alignItems: 'center', gap: 34 }}>
            {clients.map((c, i) => (
              <span key={`${run}-${i}`} style={{ display: 'flex', alignItems: 'center', gap: 34, flexShrink: 0 }}>
                <span className="v2-display" style={{ fontSize: 'clamp(15px,1.5vw,22px)', color: '#FFFFFF' }}>{c}</span>
                <span style={{ fontSize: 13, color: 'rgba(255,255,255,.6)' }}>✳</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
