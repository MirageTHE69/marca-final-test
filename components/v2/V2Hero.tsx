import MediaSlot from '@/components/MediaSlot';

/** Service names as the live site lists them in its nav and footer. */
const tags = ['Short form', 'Long form', 'Thumbnail design', 'Logo & packaging', 'Photography'];

export default function V2Hero() {
  return (
    <section
      id="top"
      style={{
        position: 'relative',
        minHeight: 'min(88vh, 860px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 'clamp(30px,5vh,56px) clamp(18px,4vw,44px) clamp(22px,3.5vh,38px)',
        overflow: 'hidden',
      }}
    >
      {/* Crimson-graded hero film */}
      <div className="v2-grade" style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <MediaSlot
          type="video"
          src="https://res.cloudinary.com/ts350ak2/video/upload/v1785482138/MARCA_WEBSITE_02_ci6tgd.mp4"
          placeholder="Drop hero film"
        />
      </div>

      <div
        style={{
          position: 'relative',
          zIndex: 4,
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: 'clamp(24px,4vw,60px)',
          paddingTop: 'clamp(10px,3vh,34px)',
        }}
      >
        <span className="v2-micro" style={{ flex: '0 1 200px', fontSize: 11, letterSpacing: '.24em' }}>
          Content · Film · Identity
        </span>

        <div style={{ flex: '1 1 520px', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 18, textAlign: 'right' }}>
          <h1 className="v2-display" style={{ fontSize: 'clamp(56px,12vw,190px)', letterSpacing: '-.05em' }}>
            Marca
          </h1>
          <span
            style={{
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontStyle: 'italic',
              fontWeight: 400,
              fontSize: 'clamp(20px,3.2vw,50px)',
              lineHeight: 1.05,
              color: 'var(--c-paper)',
              marginTop: -8,
            }}
          >
            Made to Make You Grow.
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 18, maxWidth: 480, marginTop: 6 }}>
            <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.65, color: 'rgba(241,238,233,.78)' }}>
              We turn founders into content machines that attract clients, build authority, and drive revenue.
            </p>
            <a href="#contact" className="v2-round" aria-label="Book a discovery call">↗</a>
          </div>
        </div>
      </div>

      <div
        style={{
          position: 'relative',
          zIndex: 4,
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          gap: 'clamp(18px,3vw,40px)',
        }}
      >
        {/* Studio-wide results, as stated in the site's own FAQ */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          <div className="v2-glass" style={{ minWidth: 160 }}>
            <div className="v2-display" style={{ fontSize: 32 }}>10M+</div>
            <span style={{ fontSize: 11, color: 'rgba(241,238,233,.62)' }}>Monthly views generated</span>
          </div>
          <div className="v2-glass" style={{ minWidth: 160 }}>
            <div className="v2-display" style={{ fontSize: 32 }}>100K</div>
            <span style={{ fontSize: 11, color: 'rgba(241,238,233,.62)' }}>Pages grown to, from zero</span>
          </div>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'flex-end' }}>
          {tags.map((t) => (
            <span key={t} className="v2-tag">{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
