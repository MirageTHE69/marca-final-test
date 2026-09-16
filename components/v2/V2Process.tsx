const steps = [
  { num: '01', title: 'Research', desc: 'We research and analyze top-performing creators and content in your niche to strategically build your unique brand identity.' },
  { num: '02', title: 'Scripting', desc: 'Using research on you and your business, we script an entire month of short form content.' },
  { num: '03', title: 'Filming', desc: 'We shoot all our content in a dedicated, professionally designed setup for high-quality, consistent visuals.' },
  { num: '04', title: 'Editing', desc: 'We edit using high-quality visuals and sound effects to make the content engaging and visually appealing.' },
  { num: '05', title: 'Management', desc: 'We manage your accounts, post consistently, and optimize for maximum reach and engagement.' },
];

const CARD_BG = ['var(--v2-orange)', 'var(--v2-cream)', 'var(--v2-black)', 'var(--v2-yellow)', 'var(--v2-cream)'];

export default function V2Process() {
  return (
    <section
      id="process"
      className="v2-cream-section"
      style={{ padding: 'clamp(60px,9vh,110px) clamp(20px,5vw,48px)', display: 'flex', flexDirection: 'column', gap: 'clamp(30px,4.5vh,48px)' }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, textAlign: 'center', alignItems: 'center' }}>
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.28em', textTransform: 'uppercase', color: 'var(--v2-orange-deep)' }}>
          How we work
        </span>
        <h2 className="v2-heading" style={{ margin: 0, fontSize: 'clamp(36px,5vw,72px)', color: 'var(--v2-black)' }}>
          Our process
        </h2>
        <p style={{ margin: 0, maxWidth: '52ch', fontSize: 'clamp(14px,1.1vw,17px)', lineHeight: 1.6 }}>Done for you, end to end.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 'clamp(16px,1.8vw,24px)' }}>
        {steps.map((step, i) => {
          const bg = CARD_BG[i % CARD_BG.length];
          const isDark = bg === 'var(--v2-black)';
          const fg = isDark ? 'var(--v2-cream)' : 'var(--v2-black)';
          return (
            <article
              key={step.num}
              className="v2-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: 24,
                padding: 'clamp(24px,2.2vw,32px)',
                minHeight: 240,
                borderRadius: 20,
                border: '2px solid var(--v2-black)',
                background: bg,
                color: fg,
              }}
            >
              <span className="v2-heading" style={{ fontSize: 40 }}>{step.num}</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <h3 className="v2-heading" style={{ margin: 0, fontSize: 22 }}>{step.title}</h3>
                <p style={{ margin: 0, fontSize: 14, lineHeight: 1.55, opacity: 0.85 }}>{step.desc}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
