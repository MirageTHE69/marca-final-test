import { colourVar } from '@/lib/theme';
import type { Home } from '@/payload/payload-types';

/** Client quotes on coloured cards. */
export default function RiotTestimonials({ data }: { data: Home['testimonials'] }) {
  const testimonials = (data.items ?? []).map((t) => ({ quote: t.quote, name: t.name, role: t.role ?? '', bg: colourVar(t.colour) }));
  return (
    <section id="testimonials" className="riot-cream" style={{ padding: 'clamp(56px,9vh,120px) clamp(18px,4vw,44px)', borderTop: '2px solid var(--r-black)' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, textAlign: 'center' }}>
        {data.kicker && <span className="riot-kicker">{data.kicker}</span>}
        <h2 className="riot-display" style={{ maxWidth: '20ch', fontSize: 'clamp(36px,6.8vw,104px)', color: 'var(--r-h-red)' }}>
          {data.title}{' '}
          {data.titleAccent && (
            <span style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: 'italic', fontWeight: 400, letterSpacing: '-.01em' }}>
              {data.titleAccent}
            </span>
          )}
        </h2>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(290px, 100%), 1fr))',
          gap: 'clamp(16px,1.8vw,26px)',
          marginTop: 'clamp(38px,6vh,68px)',
        }}
      >
        {testimonials.map((t) => (
          <article
            key={t.name}
            className="riot-card"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 24,
              padding: 'clamp(26px,2.6vw,40px)',
              background: t.bg,
              color: 'var(--r-black)',
              textAlign: 'center',
            }}
          >
            <p style={{ margin: 0, fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 'clamp(18px,1.6vw,24px)', fontStyle: 'italic', lineHeight: 1.5 }}>
              {t.quote}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14, marginTop: 'auto' }}>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 5 }}>
                {Array.from({ length: 5 }).map((_, s) => (
                  <span key={s} style={{ fontSize: 13 }}>★</span>
                ))}
              </div>
              <div style={{ width: 58, height: 58, borderRadius: '50%', background: 'var(--r-cream)', border: '2px solid var(--r-black)' }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <span style={{ fontSize: 15, fontWeight: 700, letterSpacing: '-.01em' }}>{t.name}</span>
                <span style={{ fontSize: 12, letterSpacing: '.05em', color: 'rgba(18,18,18,.65)' }}>{t.role}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
