interface ClientMark {
  name: string;
  /** Omit to render the name as a wordmark instead of an image. */
  logo?: string;
}

const clients: ClientMark[] = [
  { name: 'MS Design Studio', logo: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,h_120/v1786732216/images_hziweq.png' },
  { name: 'Dr Aditya Shah' },
  { name: 'The Crossed Boundaries', logo: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,h_120/v1786733051/330135781_221467923575145_4512731909302911718_n_kwxe3u.jpg' },
  { name: 'Dr Sandeep Mavani' },
  { name: 'EOS Couture', logo: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,h_120/v1786733658/images_1_tanpix.png' },
  { name: 'Dr Ashish Desai' },
  { name: 'Nutty Affair' },
];

export default function TickerBanner() {
  // marca-drift translates -50%, so the row is two identical halves. Each half repeats
  // the client list twice so a half stays wider than the viewport on large screens —
  // otherwise a gap scrolls into view.
  const renderClients = (runId: string) =>
    [...clients, ...clients].map((client, i) => (
      <span key={`${runId}-${i}`} style={{ display: 'flex', alignItems: 'center', gap: 60, flexShrink: 0 }}>
        {client.logo ? (
          // Client art arrives with baked-in backgrounds of both polarities, so each
          // logo sits on a uniform light tile rather than being blended or inverted.
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 'clamp(40px,3.4vw,52px)',
              padding: '0 clamp(10px,1vw,16px)',
              borderRadius: 10,
              background: '#EEF1F6',
              overflow: 'hidden',
            }}
          >
            <img
              src={client.logo}
              alt={client.name}
              style={{
                height: 'clamp(28px,2.4vw,38px)',
                width: 'auto',
                objectFit: 'contain',
              }}
            />
          </span>
        ) : (
          <span>{client.name}</span>
        )}
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
        padding: '20px 0',
        background: '#05070B',
      }}
    >
      <div
        style={{
          display: 'flex',
          width: 'max-content',
          gap: 60,
          animation: 'marca-drift 38s linear infinite',
          willChange: 'transform',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 60,
            fontSize: 12,
            letterSpacing: '.3em',
            textTransform: 'uppercase',
            color: '#4E5A70',
          }}
        >
          {renderClients('a')}
        </div>
        <div
          aria-hidden="true"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 60,
            fontSize: 12,
            letterSpacing: '.3em',
            textTransform: 'uppercase',
            color: '#4E5A70',
          }}
        >
          {renderClients('b')}
        </div>
      </div>
    </div>
  );
}
