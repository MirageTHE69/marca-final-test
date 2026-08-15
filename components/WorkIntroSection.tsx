export default function WorkIntroSection() {
  return (
    <section
      id="work"
      style={{
        position: 'relative',
        zIndex: 2,
        padding: 'clamp(70px,10vh,130px) clamp(24px,6vw,60px) clamp(50px,7vh,90px)',
        background: '#05070B',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, textAlign: 'center' }}>
        <span data-reveal="1" style={{ fontSize: 11, letterSpacing: '.3em', textTransform: 'uppercase', color: 'var(--accent)' }}>
          Our Work
        </span>
        <h2 data-reveal="1" style={{ margin: 0, maxWidth: '20ch', fontSize: 'clamp(34px,4.6vw,76px)', fontWeight: 700, letterSpacing: '-.04em', lineHeight: 1.02 }}>
          Our work <span style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: 'italic', fontWeight: 400 }}>speaks for us.</span>
        </h2>
        <p data-reveal="1" style={{ margin: 0, maxWidth: '52ch', fontSize: 'clamp(14px,1.05vw,17px)', lineHeight: 1.65, color: '#A7B2C4' }}>
          We work with new and established accounts.
        </p>
      </div>

    </section>
  );
}
