export default function ContactSection() {
  return (
    <section
      id="contact"
      data-scene="1"
      style={{
        position: 'relative',
        zIndex: 11,
        marginTop: '-14vh',
        minHeight: '92vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: 'clamp(80px,12vh,150px) clamp(24px,6vw,60px)',
        overflow: 'hidden',
        background: '#0A1326',
        willChange: 'transform, filter',
      }}
    >
      {/* Closing background */}
      <div style={{ position: 'absolute', inset: 0, opacity: .5, overflow: 'hidden', background: '#070C18' }}>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at 60% 50%, rgba(62,109,255,.08) 0%, transparent 60%), linear-gradient(135deg, #070C18 0%, #0A1020 100%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E\")",
            backgroundSize: '200px 200px',
            opacity: 0.5,
          }}
        />
      </div>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(10,19,38,.9), rgba(5,7,11,.94))', pointerEvents: 'none' }} />

      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 'clamp(34px,4vw,56px)', maxWidth: 1100 }}>
        <span data-reveal="1" style={{ fontSize: 11, letterSpacing: '.3em', textTransform: 'uppercase', color: 'var(--accent)' }}>10 — Let's talk</span>
        <h2
          data-reveal="1"
          style={{
            margin: 0,
            fontSize: 'clamp(38px,6.6vw,116px)',
            fontWeight: 700,
            letterSpacing: '-.045em',
            lineHeight: .95,
            textWrap: 'balance' as never,
          }}
        >
          Somebody is going to tell your story this year. It should be{' '}
          <span style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: 'italic', fontWeight: 400 }}>you.</span>
        </h2>
        <div data-reveal="1" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 18 }}>
          <a href="mailto:studio@marcacreatives.co" className="btn-primary" style={{ padding: '20px 36px', fontSize: 12 }}>
            Start your project <span>→</span>
          </a>
          <a href="tel:+919822041188" className="btn-ghost-lg">
            Schedule a discovery call
          </a>
          <span style={{ fontSize: 12, color: '#7A879C' }}>Usually a reply within a day.</span>
        </div>
      </div>
    </section>
  );
}
