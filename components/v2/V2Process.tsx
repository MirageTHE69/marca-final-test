const steps = [
  { num: '01', title: 'Research', desc: 'We analyse top-performing creators and content in your niche, then build your positioning from what actually works.' },
  { num: '02', title: 'Scripting', desc: 'An entire month of short form, scripted around you, your business and the questions your buyers already ask.' },
  { num: '03', title: 'Filming', desc: 'Shot in a dedicated, professionally designed setup so quality and consistency never depend on the day.' },
  { num: '04', title: 'Editing', desc: 'High-quality visuals, sound design and pacing built to hold attention past the first three seconds.' },
  { num: '05', title: 'Management', desc: 'We post, caption, schedule and optimise — then report on what moved and what we are changing next.' },
];

export default function V2Process() {
  return (
    <section id="process" className="v2-paper" style={{ padding: 'clamp(56px,9vh,110px) clamp(18px,4vw,44px)' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 20 }}>
        <h2 className="v2-display" style={{ fontSize: 'clamp(30px,5vw,78px)' }}>
          From vision <span className="v2-dim-dark">to delivery</span>
        </h2>
        <span className="v2-micro" style={{ color: 'var(--c-dim-dark)' }}>Done for you, end to end</span>
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
              minHeight: 230,
              padding: 'clamp(20px,2vw,28px)',
              borderRadius: 18,
              background: i === 0 ? 'var(--c-red)' : 'rgba(28,5,8,.05)',
              border: i === 0 ? '1px solid var(--c-red)' : '1px solid rgba(28,5,8,.14)',
              color: i === 0 ? '#FFFFFF' : 'var(--c-ink)',
            }}
          >
            <span className="v2-display" style={{ fontSize: 38, opacity: i === 0 ? 1 : 0.22 }}>{s.num}</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <h3 className="v2-display" style={{ fontSize: 19 }}>{s.title}</h3>
              <p style={{ margin: 0, fontSize: 12.5, lineHeight: 1.6, opacity: i === 0 ? 0.92 : 0.66 }}>{s.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
