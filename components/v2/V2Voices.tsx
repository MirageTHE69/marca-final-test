const clients = [
  'Aadicura Hospital',
  'MS Design Studio',
  'Dr. Aditya Shah',
  'The Crossed Boundaries',
  'EOS Couture',
  'Dr. Sandeep Mavani',
  'Nutty Affair',
  'Dr. Ashish Desai',
];

const testimonials = [
  {
    quote: 'We had been posting for two years with nothing to show. Six months in, patients quote our videos back to us in consultations.',
    name: 'Dr. Anaya Verma',
    role: 'Verma Dental — Healthcare',
  },
  {
    quote: "The most organised shoot I've been on. They arrived with a plan and left us with a month of content the same week.",
    name: 'Reyansh Doshi',
    role: 'Kindra — Consumer brands',
  },
  {
    quote: 'They made a fintech product sound human without dumbing it down. Our investors noticed before our customers did.',
    name: 'Tara Menon',
    role: 'Ledgerloop — Startups',
  },
];

export default function V2Voices() {
  return (
    <>
      {/* Client marquee */}
      <div
        style={{
          overflow: 'hidden',
          padding: '16px 0',
          background: 'var(--c-red)',
          borderTop: '1px solid rgba(241,238,233,.16)',
          borderBottom: '1px solid rgba(241,238,233,.16)',
        }}
      >
        <div style={{ display: 'flex', width: 'max-content', gap: 34, animation: 'marca-drift 32s linear infinite' }}>
          {[0, 1].map((run) => (
            <div key={run} aria-hidden={run === 1} style={{ display: 'flex', alignItems: 'center', gap: 34 }}>
              {clients.map((c, i) => (
                <span key={`${run}-${i}`} style={{ display: 'flex', alignItems: 'center', gap: 34, flexShrink: 0 }}>
                  <span className="v2-display" style={{ fontSize: 'clamp(15px,1.5vw,22px)', color: '#FFFFFF' }}>{c}</span>
                  <span style={{ fontSize: 13, color: 'rgba(255,255,255,.6)' }}>✳</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <section className="v2-paper" style={{ padding: 'clamp(56px,9vh,110px) clamp(18px,4vw,44px)' }}>
        <h2 className="v2-display" style={{ fontSize: 'clamp(30px,5vw,78px)', maxWidth: '18ch' }}>
          What it&apos;s like <span className="v2-dim-dark">to work with us</span>
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
            gap: 'clamp(16px,2vw,26px)',
            marginTop: 'clamp(32px,5vh,58px)',
          }}
        >
          {testimonials.map((t, i) => (
            <article
              key={t.name}
              className="v2-tile"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 22,
                padding: 'clamp(24px,2.4vw,34px)',
                borderRadius: 18,
                background: i === 1 ? 'var(--c-ink)' : 'rgba(28,5,8,.045)',
                border: i === 1 ? '1px solid var(--c-ink)' : '1px solid rgba(28,5,8,.14)',
                color: i === 1 ? 'var(--c-paper)' : 'var(--c-ink)',
              }}
            >
              <span className="v2-star" style={{ fontSize: 24, color: i === 1 ? 'var(--c-red-bright)' : 'var(--c-red)' }} aria-hidden="true">✳</span>
              <p style={{ margin: 0, fontSize: 'clamp(14px,1.2vw,17px)', lineHeight: 1.6, fontWeight: 500 }}>{t.quote}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2, marginTop: 'auto' }}>
                <span style={{ fontSize: 13, fontWeight: 700 }}>{t.name}</span>
                <span className="v2-micro" style={{ opacity: 0.6 }}>{t.role}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
