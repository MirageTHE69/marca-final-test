/** Mirrors the steps in ProcessSection on the live landing page. */
const steps = [
  { num: '01', title: 'Research', desc: 'We research and analyze top-performing creators and content in your niche on social media to strategically build and establish your unique brand identity.' },
  { num: '02', title: 'Scripting', desc: 'Using the research and information on you and your business, we script an entire month of short form content.' },
  { num: '03', title: 'Filming', desc: 'We shoot all our content in a dedicated, professionally designed setup to ensure high-quality visuals and consistency.' },
  { num: '04', title: 'Editing', desc: 'We edit videos using high-quality visuals and sound effects to make the content engaging and visually appealing.' },
  { num: '05', title: 'Social Media Management', desc: 'We manage social media accounts, upload content consistently, and optimize it for maximum reach and engagement.' },
];

export default function V2Process() {
  return (
    <section id="process" className="v2-paper" style={{ padding: 'clamp(56px,9vh,110px) clamp(18px,4vw,44px)' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 20 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <span className="v2-micro" style={{ color: 'var(--c-red)' }}>03 — Process</span>
          <h2 className="v2-display" style={{ fontSize: 'clamp(30px,5vw,78px)' }}>
            Our <span className="v2-dim-dark">Process</span>
          </h2>
          <p style={{ margin: 0, fontSize: 'clamp(14px,1.1vw,18px)', lineHeight: 1.6, color: 'var(--c-dim-dark)' }}>
            Done for you end to end!
          </p>
        </div>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 'clamp(16px,2vw,28px)',
          marginTop: 'clamp(32px,5vh,58px)',
        }}
      >
        {steps.map((s, i) => (
          <article
            key={s.num}
            className="v2-tile"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: 26,
              minHeight: 250,
              padding: 'clamp(20px,2vw,28px)',
              borderRadius: 18,
              background: i === 0 ? 'var(--c-red)' : 'rgba(28,5,8,.05)',
              border: i === 0 ? '1px solid var(--c-red)' : '1px solid rgba(28,5,8,.14)',
              color: i === 0 ? '#FFFFFF' : 'var(--c-ink)',
            }}
          >
            <span className="v2-display" style={{ fontSize: 38, opacity: i === 0 ? 1 : 0.22 }}>{s.num}</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <h3 className="v2-display" style={{ fontSize: 18 }}>{s.title}</h3>
              <p style={{ margin: 0, fontSize: 12.5, lineHeight: 1.6, opacity: i === 0 ? 0.92 : 0.66 }}>{s.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
