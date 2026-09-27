import { portfolioSections } from '@/components/portfolio/portfolioItems';

/** Rotating sticker, text running around the ring. */
function Badge() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        top: 'clamp(14px,3vw,34px)',
        right: 'clamp(14px,3vw,34px)',
        width: 'clamp(96px,11vw,138px)',
        height: 'clamp(96px,11vw,138px)',
      }}
    >
      <svg viewBox="0 0 140 140" width="100%" height="100%">
        <circle cx="70" cy="70" r="67" fill="var(--r-yellow)" stroke="var(--r-black)" strokeWidth="2" />
        <g className="riot-badge-ring">
          <defs>
            <path id="riot-badge-path" d="M70,70 m-50,0 a50,50 0 1,1 100,0 a50,50 0 1,1 -100,0" />
          </defs>
          <text fontFamily="Archivo, sans-serif" fontSize="11.5" fontWeight="700" letterSpacing="2.6" fill="var(--r-h-red)">
            <textPath href="#riot-badge-path">MARCA CREATIVES · CONTENT · FILM · IDENTITY ·</textPath>
          </text>
        </g>
        <text
          x="70"
          y="82"
          textAnchor="middle"
          fontFamily="'Bricolage Grotesque', 'Archivo Black', sans-serif"
          fontSize="38"
          fontWeight="800"
          fill="var(--r-h-red)"
        >
          M
        </text>
      </svg>
    </div>
  );
}

export default function RiotPortfolioHero() {
  return (
    <>
      {/* Type-only hero — the work below carries the pictures. */}
      <section
        className="riot-stripes"
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          gap: 'clamp(12px,2vh,20px)',
          minHeight: 'clamp(460px, 76vh, 860px)',
          padding: 'clamp(84px,11vh,150px) clamp(20px,5vw,72px) clamp(52px,8vh,100px)',
          borderBottom: '2px solid var(--r-black)',
        }}
      >
        <Badge />

        <span className="riot-script" style={{ fontSize: 'clamp(24px,2.6vw,38px)', color: 'var(--r-ink)' }}>
          content · film · identity
        </span>

        <span
          className="riot-display"
          style={{
            display: 'block',
            width: '100%',
            fontSize: 'clamp(66px,16.5vw,290px)',
            color: 'var(--r-h-red)',
            letterSpacing: '-.055em',
            lineHeight: .82,
          }}
        >
          portfolio
        </span>

        <h1
          style={{
            margin: 0,
            maxWidth: '16ch',
            fontFamily: "'Instrument Serif', Georgia, serif",
            fontWeight: 400,
            fontSize: 'clamp(38px,6.4vw,104px)',
            lineHeight: .98,
            letterSpacing: '-.02em',
            color: 'var(--r-ink)',
          }}
        >
          Everything we have made.
        </h1>

        <p
          style={{
            margin: 0,
            maxWidth: '52ch',
            fontSize: 'clamp(15px,1.35vw,21px)',
            lineHeight: 1.6,
            color: 'var(--r-ink)',
          }}
        >
          Fashion shoots, product shoots, branding, ad campaigns, reels and films — organised by the kind of work you
          came to see.
        </p>

        <a
          href="#fashion-shoots"
          className="riot-btn"
          style={{ background: 'var(--r-h-red)', color: '#FFFFFF', marginTop: 'clamp(6px,1.4vh,14px)', padding: '16px 32px', fontSize: 13 }}
        >
          Explore the work ↓
        </a>
      </section>

      {/* Category ticker */}
      <div
        style={{
          overflow: 'hidden',
          padding: '13px 0',
          background: 'var(--r-cream)',
          borderBottom: '2px solid var(--r-h-red)',
        }}
      >
        <div className="riot-band-track">
          {['a', 'b'].map((run) => (
            <div key={run} aria-hidden={run === 'b'} style={{ display: 'flex', alignItems: 'center', gap: 30 }}>
              {portfolioSections.map((s) => (
                <span key={`${run}-${s.key}`} style={{ display: 'flex', alignItems: 'center', gap: 30, flexShrink: 0 }}>
                  <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--r-ink)' }}>
                    {s.title}
                  </span>
                  <span style={{ fontSize: 17, color: 'var(--r-h-red)' }}>✱</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
