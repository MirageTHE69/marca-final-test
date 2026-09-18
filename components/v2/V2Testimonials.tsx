/** Mirrors TestimonialsSection on the live landing page. */
const testimonials = [
  {
    quote: '"We had been posting for two years with nothing to show. Six months in, patients quote our videos back to us in consultations."',
    name: 'Dr. Anaya Verma',
    role: 'Verma Dental — Healthcare',
  },
  {
    quote: '"The most organised shoot I\'ve been on. They arrived with a plan and left us with a month of content the same week."',
    name: 'Reyansh Doshi',
    role: 'Kindra — Consumer brands',
  },
  {
    quote: '"They made a fintech product sound human without dumbing it down. Our investors noticed before our customers did."',
    name: 'Tara Menon',
    role: 'Ledgerloop — Startups',
  },
];

export default function V2Testimonials() {
  return (
    <section id="testimonials" className="v2-paper" style={{ padding: 'clamp(56px,9vh,110px) clamp(18px,4vw,44px)' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 14 }}>
        <span className="v2-micro" style={{ color: 'var(--c-red)' }}>Testimonials</span>
        <h2 className="v2-display" style={{ fontSize: 'clamp(30px,5vw,76px)', maxWidth: '20ch' }}>
          What it&apos;s like to{' '}
          <span
            style={{
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontStyle: 'italic',
              fontWeight: 400,
              textTransform: 'none',
              letterSpacing: '-.01em',
              color: 'var(--c-red)',
            }}
          >
            work with us.
          </span>
        </h2>
      </div>

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
            <div style={{ display: 'flex', gap: 5 }}>
              {Array.from({ length: 5 }).map((_, s) => (
                <span key={s} style={{ fontSize: 13, color: 'var(--c-red-bright)' }}>★</span>
              ))}
            </div>
            <p
              style={{
                margin: 0,
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontStyle: 'italic',
                fontSize: 'clamp(17px,1.5vw,22px)',
                lineHeight: 1.5,
              }}
            >
              {t.quote}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 3, marginTop: 'auto' }}>
              <span style={{ fontSize: 14, fontWeight: 700 }}>{t.name}</span>
              <span className="v2-micro" style={{ opacity: 0.6 }}>{t.role}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
