import MediaSlot from '@/components/MediaSlot';
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
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(440px, 100%), 1fr))',
          borderBottom: '2px solid var(--r-black)',
        }}
      >
        {/* Left — the film, in its own colours */}
        <div style={{ position: 'relative', minHeight: 'clamp(320px, 62vh, 700px)', overflow: 'hidden', background: 'var(--r-black)' }}>
          <MediaSlot type="video" src="https://ik.imagekit.io/5feqwwaxb/MARCA%20WEBSITE%2001.mp4" placeholder="Drop film" />
        </div>

        {/* Right — striped panel */}
        <div
          className="riot-stripes"
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 'clamp(14px,2.2vh,22px)',
            padding: 'clamp(40px,7vh,84px) clamp(22px,4.5vw,64px)',
            borderLeft: '2px solid var(--r-black)',
          }}
        >
          <Badge />

          <span
            className="riot-display"
            style={{ fontSize: 'clamp(44px,6.6vw,96px)', color: 'var(--r-h-red)', letterSpacing: '-.05em', lineHeight: .85 }}
          >
            portfolio
          </span>

          <span className="riot-script" style={{ fontSize: 'clamp(22px,2.2vw,30px)', color: 'var(--r-ink)', marginTop: 6 }}>
            content · film · identity
          </span>

          <h1
            style={{
              margin: 0,
              maxWidth: '14ch',
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontWeight: 400,
              fontSize: 'clamp(36px,4.8vw,72px)',
              lineHeight: 1,
              letterSpacing: '-.02em',
              color: 'var(--r-ink)',
            }}
          >
            Everything we have made.
          </h1>

          <p style={{ margin: 0, maxWidth: '44ch', fontSize: 'clamp(14px,1.1vw,16px)', lineHeight: 1.6, color: 'var(--r-ink)' }}>
            Fashion shoots, product shoots, branding, ad campaigns, reels and films — organised by the kind of work you
            came to see.
          </p>

          <a
            href="#fashion-shoots"
            className="riot-btn"
            style={{ alignSelf: 'flex-start', background: 'var(--r-h-red)', color: '#FFFFFF', marginTop: 6 }}
          >
            Explore the work ↓
          </a>
        </div>
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
