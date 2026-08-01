const testimonials = [
  {
    quote: '"We had been posting for two years with nothing to show. Six months in, patients quote our videos back to us in consultations."',
    name: 'Dr. Anaya Verma',
    role: 'Verma Dental — Healthcare',
    hasVideo: false,
  },
  {
    quote: '"The most organised shoot I\'ve been on. They arrived with a plan and left us with a month of content the same week."',
    name: 'Reyansh Doshi',
    role: 'Kindra — Consumer brands',
    hasVideo: true,
  },
  {
    quote: '"They made a fintech product sound human without dumbing it down. Our investors noticed before our customers did."',
    name: 'Tara Menon',
    role: 'Ledgerloop — Startups',
    hasVideo: false,
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      data-scene="1"
      style={{ position: 'relative', zIndex: 10, marginTop: '-14vh', background: 'linear-gradient(180deg, #05070B, #0A1326)' }}
    >
      <div
        data-chapter-title="1"
        style={{ position: 'sticky', top: 0, height: '100vh', zIndex: 0, display: 'flex', alignItems: 'center', padding: '0 clamp(24px,6vw,60px)' }}
      >
        <div
          data-chapter-title-inner="1"
          style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 20, willChange: 'transform, filter' }}
        >
          <span data-reveal="1" style={{ fontSize: 11, letterSpacing: '.3em', textTransform: 'uppercase', color: 'var(--accent)' }}>09 — Testimonials</span>
          <h2 data-reveal="1" style={{ margin: 0, maxWidth: '20ch', fontSize: 'clamp(34px,4.6vw,80px)', fontWeight: 700, letterSpacing: '-.04em', lineHeight: .98 }}>
            What it's like to<br />work with us.
          </h2>
        </div>
      </div>

      <div
        data-chapter-body="1"
        style={{ position: 'relative', zIndex: 1, marginTop: '44vh', padding: 'clamp(34px,5vh,60px) clamp(24px,6vw,60px) clamp(90px,14vh,180px)', background: 'linear-gradient(180deg, #05070B, #0A1326)', willChange: 'transform, filter' }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: 'clamp(16px,1.8vw,26px)' }}>
          {testimonials.map((t, i) => (
            <article key={i} data-reveal="1" style={{ display: 'flex', flexDirection: 'column', gap: 26, padding: 'clamp(28px,2.4vw,38px)', border: '1px solid rgba(242,244,248,.1)', borderRadius: 6, background: 'rgba(242,244,248,.02)' }}>
              <p style={{ margin: 0, fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 'clamp(19px,1.7vw,25px)', fontStyle: 'italic', lineHeight: 1.45, color: '#E6EAF2' }}>
                {t.quote}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 'auto' }}>
                {t.hasVideo && (
                  <div style={{ position: 'relative', aspectRatio: '16 / 9', borderRadius: 4, overflow: 'hidden', background: '#0C1526' }}>
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #0C1526, #060B18)' }} />
                    <span style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', pointerEvents: 'none' }}>
                      <span style={{ display: 'grid', placeItems: 'center', width: 44, height: 44, borderRadius: '50%', background: 'rgba(5,7,11,.55)', border: '1px solid rgba(242,244,248,.4)', fontSize: 11 }}>▶</span>
                    </span>
                  </div>
                )}
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, paddingTop: t.hasVideo ? 8 : 24, borderTop: '1px solid rgba(242,244,248,.08)' }}>
                  <div style={{ flex: '0 0 auto', width: 46, height: 46, borderRadius: '50%', background: '#1A2540', border: '1px solid rgba(242,244,248,.1)' }} />
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    <span style={{ fontSize: 14, fontWeight: 600 }}>{t.name}</span>
                    <span style={{ fontSize: 11, letterSpacing: '.1em', color: '#7A879C' }}>{t.role}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
