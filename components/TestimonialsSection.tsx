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

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      style={{
        position: 'relative',
        zIndex: 10,
        padding: 'clamp(80px,11vh,140px) clamp(24px,6vw,60px)',
        background: 'linear-gradient(180deg, #05070B, #0A1326)',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18, textAlign: 'center' }}>
        <span data-reveal="1" style={{ fontSize: 11, letterSpacing: '.3em', textTransform: 'uppercase', color: 'var(--accent)' }}>Testimonials</span>
        <h2 data-reveal="1" style={{ margin: 0, maxWidth: '20ch', fontSize: 'clamp(34px,4.6vw,76px)', fontWeight: 700, letterSpacing: '-.04em', lineHeight: 1.02 }}>
          What it&apos;s like to <span style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: 'italic', fontWeight: 400 }}>work with us.</span>
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: 'clamp(16px,1.8vw,26px)', marginTop: 'clamp(44px,6vh,72px)' }}>
        {testimonials.map((t) => (
          <article
            key={t.name}
            data-reveal="1"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 26,
              padding: 'clamp(30px,2.6vw,42px)',
              border: '1px solid rgba(242,244,248,.1)',
              borderRadius: 16,
              background: 'rgba(242,244,248,.02)',
              textAlign: 'center',
            }}
          >
            <p style={{ margin: 0, fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 'clamp(18px,1.6vw,24px)', fontStyle: 'italic', lineHeight: 1.5, color: '#E6EAF2' }}>
              {t.quote}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, marginTop: 'auto' }}>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
                {Array.from({ length: 5 }).map((_, s) => (
                  <span key={s} style={{ fontSize: 13, color: '#D9A441' }}>★</span>
                ))}
              </div>
              <div style={{ width: 62, height: 62, borderRadius: '50%', background: '#1A2540', border: '1px solid rgba(242,244,248,.1)' }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                <span style={{ fontSize: 15, fontWeight: 600, letterSpacing: '-.01em' }}>{t.name}</span>
                <span style={{ fontSize: 12, letterSpacing: '.06em', color: '#7A879C' }}>{t.role}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
