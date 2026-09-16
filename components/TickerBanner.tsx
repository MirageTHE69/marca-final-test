interface ClientMark {
  name: string;
  isDoctor?: boolean;
  logo?: string;
  invertLogo?: boolean;
  bgLight?: boolean;
}

const clients: ClientMark[] = [
  { name: 'Dr. Aditya Shah', isDoctor: true },
  {
    name: 'MS Design Studio',
    logo: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,h_160/v1786732216/images_hziweq.png',
  },
  { name: 'Dr. Sandeep Mavani', isDoctor: true },
  {
    name: 'The Crossed Boundaries',
    logo: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,h_160/v1786733051/330135781_221467923575145_4512731909302911718_n_kwxe3u.jpg',
  },
  { name: 'Dr. Ashish Desai', isDoctor: true },
  {
    name: 'EOS Couture',
    logo: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,h_160/v1786733658/images_1_tanpix.png',
    invertLogo: true,
  },
  { name: 'Nutty Affair' },
  {
    name: 'Aadicura Hospital',
    logo: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,h_160/v1786735211/images_2_hhaqap.png',
    bgLight: true,
  },
];

export default function TickerBanner() {
  const renderClients = (runId: string) =>
    [...clients, ...clients].map((client, i) => (
      <span key={`${runId}-${i}`} style={{ display: 'flex', alignItems: 'center', gap: 52, flexShrink: 0 }}>
        {client.logo ? (
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 60,
              padding: '0 26px',
              borderRadius: 14,
              background: client.bgLight ? '#FFFFFF' : 'rgba(255, 255, 255, 0.08)',
              border: client.bgLight ? '2px solid rgba(130, 175, 255, 0.8)' : '1px solid rgba(255, 255, 255, 0.16)',
              boxShadow: client.bgLight
                ? '0 0 18px rgba(90, 150, 255, 0.45), 0 4px 12px rgba(0, 0, 0, 0.5)'
                : 'inset 0 1px 0 rgba(255, 255, 255, 0.12), 0 4px 14px rgba(0, 0, 0, 0.35)',
            }}
          >
            <img
              src={client.logo}
              alt={client.name}
              style={{
                height: 42,
                width: 'auto',
                maxWidth: 160,
                objectFit: 'contain',
                filter: client.invertLogo ? 'invert(1) brightness(1.2)' : 'none',
                display: 'block',
              }}
            />
          </span>
        ) : client.isDoctor ? (
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 12,
              height: 60,
              padding: '0 26px',
              borderRadius: 999,
              background: 'rgba(62, 109, 255, 0.14)',
              border: '1px solid rgba(62, 109, 255, 0.38)',
              boxShadow: '0 0 24px rgba(62, 109, 255, 0.2)',
              boxSizing: 'border-box',
            }}
          >
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 26,
                height: 26,
                borderRadius: '50%',
                background: 'rgba(62, 109, 255, 0.4)',
                color: '#9EBAFF',
                fontSize: 15,
                fontWeight: 700,
                lineHeight: 1,
              }}
            >
              +
            </span>
            <span
              style={{
                fontSize: 'clamp(16px, 1.25vw, 19px)',
                fontWeight: 600,
                color: '#FFFFFF',
                letterSpacing: '-.01em',
                whiteSpace: 'nowrap',
              }}
            >
              {client.name}
            </span>
          </div>
        ) : (
          <span
            style={{
              fontSize: 'clamp(15px, 1.2vw, 18px)',
              fontWeight: 700,
              letterSpacing: '.14em',
              textTransform: 'uppercase',
              color: '#E0E7F5',
              whiteSpace: 'nowrap',
            }}
          >
            {client.name}
          </span>
        )}
        <span style={{ color: 'var(--accent)', opacity: 0.7, fontSize: 16 }}>✦</span>
      </span>
    ));

  return (
    <div
      style={{
        position: 'relative',
        zIndex: 1,
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        overflow: 'hidden',
        padding: '28px 0',
        background: 'linear-gradient(180deg, #090E1B 0%, #060911 100%)',
      }}
    >
      <div
        style={{
          display: 'flex',
          width: 'max-content',
          gap: 52,
          animation: 'marca-drift 36s linear infinite',
          willChange: 'transform',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 52,
          }}
        >
          {renderClients('a')}
        </div>
        <div
          aria-hidden="true"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 52,
          }}
        >
          {renderClients('b')}
        </div>
      </div>
    </div>
  );
}
