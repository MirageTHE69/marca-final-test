/** Same client roster as TickerBanner, shown as the reference's angled ribbon. */
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

export default function RiotTicker() {
  const run = (key: string) => (
    <div key={key} aria-hidden={key === 'b'} style={{ display: 'flex', alignItems: 'center', gap: 30 }}>
      {clients.map((c, i) => (
        <span key={`${key}-${i}`} style={{ display: 'flex', alignItems: 'center', gap: 30, flexShrink: 0 }}>
          <span className="riot-display" style={{ fontSize: 'clamp(16px,1.7vw,26px)', color: 'var(--r-black)' }}>{c}</span>
          <span style={{ fontSize: 16, color: 'var(--r-black)' }}>★</span>
        </span>
      ))}
    </div>
  );

  return (
    <div style={{ position: 'relative', background: 'var(--r-black)', padding: '18px 0', overflow: 'hidden' }}>
      <div className="riot-band">
        <div className="riot-band-track">
          {run('a')}
          {run('b')}
        </div>
      </div>
    </div>
  );
}
