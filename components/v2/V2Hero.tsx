import MediaSlot from '@/components/MediaSlot';

export default function V2Hero() {
  return (
    <section
      className="v2-cream-section"
      style={{
        position: 'relative',
        overflow: 'hidden',
        padding: 'clamp(50px,8vh,90px) clamp(20px,5vw,48px) clamp(70px,10vh,120px)',
      }}
    >
      {/* Soft orange corner glows, echoing the reference's gradient corners */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: '55vw',
          height: '55vw',
          maxWidth: 700,
          maxHeight: 700,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(225,83,31,.35) 0%, rgba(225,83,31,0) 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ position: 'relative', display: 'flex', justifyContent: 'flex-end' }}>
        <span
          style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: '.2em',
            textTransform: 'uppercase',
            textAlign: 'right',
            maxWidth: 160,
            color: 'var(--v2-orange-deep)',
          }}
        >
          For the bold and unapologetic
        </span>
      </div>

      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: 'clamp(24px,4vw,56px)',
          marginTop: 'clamp(10px,2vh,20px)',
        }}
      >
        <div style={{ flex: '1 1 480px', display: 'flex', flexDirection: 'column', gap: 20 }}>
          <h1 className="v2-heading" style={{ margin: 0, fontSize: 'clamp(60px,10vw,168px)', color: 'var(--v2-black)' }}>
            MARCA
            <span
              style={{
                display: 'block',
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontStyle: 'italic',
                fontWeight: 400,
                fontSize: '.32em',
                letterSpacing: '-.01em',
                color: 'var(--v2-orange-deep)',
                marginTop: 6,
              }}
            >
              Made to make you grow.
            </span>
          </h1>
          <p style={{ margin: 0, maxWidth: '46ch', fontSize: 'clamp(15px,1.2vw,19px)', lineHeight: 1.6, color: 'var(--v2-ink)' }}>
            We turn founders into content machines that attract clients,{' '}
            <span className="v2-mark" style={{ ['--mark-color' as string]: 'var(--v2-yellow)' }}>build authority</span>, and drive revenue.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 8 }}>
            <a href="#contact" className="v2-btn">
              Start a project <span>→</span>
            </a>
            <a href="#work" className="v2-btn v2-btn-outline" style={{ borderColor: 'var(--v2-black)' }}>
              See our work
            </a>
          </div>
        </div>

        <div
          className="v2-polaroid"
          style={{ flex: '0 0 auto', width: 'clamp(200px,22vw,280px)', ['--tilt' as string]: '4deg' }}
        >
          <span className="v2-tape" aria-hidden="true" style={{ ['--tape-color' as string]: 'var(--v2-yellow)' }} />
          <div className="v2-polaroid-frame" style={{ aspectRatio: '4 / 5', borderRadius: 1 }}>
            <MediaSlot
              src="https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_700/v1786608769/ChatGPT_Image_Jul_16_2026_06_10_05_PM_c7dwfy.png"
              alt="Bridal fashion editorial"
              placeholder="Drop image"
              sizes="280px"
            />
          </div>
          <div className="v2-polaroid-caption">
            <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--v2-ink)' }}>Bridal Editorial</span>
          </div>
        </div>
      </div>
    </section>
  );
}
