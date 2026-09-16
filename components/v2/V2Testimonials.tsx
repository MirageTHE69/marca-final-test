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

export default function V2Testimonials() {
  return (
    <section
      className="v2-cream-section"
      style={{ padding: 'clamp(60px,9vh,110px) clamp(20px,5vw,48px)', display: 'flex', flexDirection: 'column', gap: 'clamp(36px,5vh,56px)' }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, textAlign: 'center', alignItems: 'center' }}>
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.28em', textTransform: 'uppercase', color: 'var(--v2-orange-deep)' }}>
          Testimonials
        </span>
        <h2 className="v2-heading" style={{ margin: 0, fontSize: 'clamp(36px,5vw,72px)', color: 'var(--v2-black)' }}>
          What it&apos;s like to work with us
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(18px,2vw,26px)' }}>
        {testimonials.map((t, i) => (
          <article
            key={t.name}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 22,
              padding: 'clamp(26px,2.4vw,34px)',
              borderRadius: 20,
              border: '2px solid var(--v2-black)',
              background: i === 1 ? 'var(--v2-orange)' : '#FFFFFF',
              transform: `rotate(${[-1, 0, 1][i % 3]}deg)`,
            }}
          >
            <div style={{ display: 'flex', gap: 4 }}>
              {Array.from({ length: 5 }).map((_, s) => (
                <span key={s} style={{ fontSize: 14 }}>★</span>
              ))}
            </div>
            <p style={{ margin: 0, fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: 'italic', fontSize: 'clamp(17px,1.4vw,20px)', lineHeight: 1.55, color: 'var(--v2-black)' }}>
              “{t.quote}”
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2, marginTop: 'auto' }}>
              <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--v2-black)' }}>{t.name}</span>
              <span style={{ fontSize: 12, color: 'var(--v2-ink)', opacity: 0.7 }}>{t.role}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
