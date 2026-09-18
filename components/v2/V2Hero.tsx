import MediaSlot from '@/components/MediaSlot';

const tags = ['Branding', 'Short Form', 'Long Form', 'Creative Strategy'];

export default function V2Hero() {
  return (
    <section
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

      {/* Top row — positioning line on the left, the wordmark block on the right */}
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
        <div style={{ flex: '0 1 240px', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <span className="v2-micro" style={{ fontSize: 12, letterSpacing: '.12em' }}>
            Source of
            <br />
            bold ideas/
          </span>
          <p style={{ margin: 0, maxWidth: '26ch', fontSize: 12, lineHeight: 1.6, color: 'rgba(241,238,233,.62)' }}>
            When founders stop posting into the void and start being chosen.
          </p>
        </div>

        <div style={{ flex: '1 1 520px', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 22, textAlign: 'right' }}>
          <h1 className="v2-display" style={{ fontSize: 'clamp(38px,6.6vw,104px)' }}>
            Creative
            <br />
            Content
            <br />
            Studio
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: 18, maxWidth: 460 }}>
            <p style={{ margin: 0, fontSize: 13, lineHeight: 1.6, color: 'rgba(241,238,233,.75)' }}>
              We turn founders into content machines that attract clients, build authority, and{' '}
              <strong style={{ color: 'var(--c-paper)', fontWeight: 700 }}>drive revenue</strong>.
            </p>
            <a href="#contact" className="v2-round" aria-label="Start a project">↗</a>
          </div>
        </div>
      </div>

      {/* Bottom row — frosted proof cards on the left, service tags on the right */}
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
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          <div className="v2-glass" style={{ minWidth: 150 }}>
            <span className="v2-micro" style={{ color: 'rgba(241,238,233,.6)' }}>Views generated</span>
            <div className="v2-display" style={{ fontSize: 34, marginTop: 6 }}>350M+</div>
            <span style={{ fontSize: 11, color: 'rgba(241,238,233,.6)' }}>Across client channels</span>
          </div>
          <div className="v2-glass" style={{ minWidth: 150 }}>
            <span className="v2-micro" style={{ color: 'rgba(241,238,233,.6)' }}>Built organically</span>
            <div className="v2-display" style={{ fontSize: 34, marginTop: 6 }}>400K+</div>
            <span style={{ fontSize: 11, color: 'rgba(241,238,233,.6)' }}>Followers &amp; subscribers</span>
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
