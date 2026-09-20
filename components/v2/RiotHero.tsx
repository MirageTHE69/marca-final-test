import MediaSlot from '@/components/MediaSlot';

/**
 * Same structure as HeroSection — full-bleed film, centred wordmark with
 * the serif tagline, and the positioning line along the bottom.
 */
export default function RiotHero() {
  return (
    <section
      id="top"
      style={{
        position: 'relative',
        minHeight: 'min(92vh, 900px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflow: 'hidden',
        background: 'var(--r-black)',
        padding: 'clamp(28px,5vh,52px) clamp(18px,4vw,44px) clamp(24px,4vh,44px)',
      }}
    >
      {/* Hero film — real colours, only a neutral scrim for legibility */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
        <MediaSlot
          type="video"
          src="https://ik.imagekit.io/5feqwwaxb/MARCA%20WEBSITE%2001.mp4"
          placeholder="Drop hero film"
        />
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(12,12,12,.46) 0%, rgba(12,12,12,.52) 45%, rgba(12,12,12,.82) 100%)',
            pointerEvents: 'none',
          }}
        />
      </div>

      <div style={{ position: 'relative', zIndex: 2, display: 'flex', justifyContent: 'flex-end' }}>
        <span
          style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: '.2em',
            textTransform: 'uppercase',
            color: 'var(--r-yellow)',
          }}
        >
          Content · Film · Identity
        </span>
      </div>

      {/* Centred wordmark */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: 6,
          padding: 'clamp(20px,4vh,40px) 0',
        }}
      >
        <h1 className="riot-display" style={{ fontSize: 'clamp(52px,12vw,180px)', color: 'var(--r-cream)' }}>
          MARCA
        </h1>
        <span
          style={{
            fontFamily: "'Instrument Serif', Georgia, serif",
            fontStyle: 'italic',
            fontWeight: 400,
            fontSize: 'clamp(20px,4.6vw,68px)',
            lineHeight: 1.05,
            color: 'var(--r-yellow)',
          }}
        >
          Made to Make You Grow.
        </span>
      </div>

      {/* Bottom band */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          gap: 20,
        }}
      >
        <p style={{ margin: 0, maxWidth: '46ch', fontSize: 'clamp(14px,1.2vw,18px)', lineHeight: 1.55, color: 'var(--r-cream)' }}>
          We turn founders into content machines that attract clients, build authority, and drive revenue.
        </p>
        <a href="#contact" className="riot-btn riot-btn-yellow">
          Start a project →
        </a>
      </div>
    </section>
  );
}
