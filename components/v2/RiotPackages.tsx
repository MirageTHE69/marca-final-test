import { colourVar, pad2 } from '@/lib/theme';
import type { Home } from '@/payload/payload-types';

/** The packages and their checklists. */
export default function RiotPackages({ data }: { data: Home['packages'] }) {
  const packages = (data.items ?? []).map((p, i) => ({
    num: pad2(i + 1),
    name: p.name,
    subtitle: p.subtitle ?? '',
    bg: colourVar(p.colour),
    items: (p.features ?? []).map((f) => ({ text: f.text, highlight: Boolean(f.highlight) })),
  }));
  return (
    <section id="packages" className="riot-black" style={{ padding: 'clamp(56px,9vh,120px) clamp(18px,4vw,44px)' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, textAlign: 'center', marginBottom: 'clamp(38px,6vh,68px)' }}>
        {data.kicker && <span className="riot-kicker">{data.kicker}</span>}
        <h2 className="riot-display" style={{ fontSize: 'clamp(32px,5.6vw,86px)', maxWidth: '22ch', color: 'var(--r-h-yellow)' }}>
          {data.title}
        </h2>
        <p className="riot-lede" style={{ maxWidth: '58ch' }}>
          {data.lede}
        </p>
      </div>

      <div
        style={{
          maxWidth: 1320,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
          gap: 'clamp(18px,2.2vw,30px)',
          alignItems: 'stretch',
        }}
      >
        {packages.map((pkg) => (
          <article
            key={pkg.num}
            className="riot-card"
            style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', background: 'var(--r-cream)', color: 'var(--r-ink)' }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 5,
                padding: 'clamp(22px,2.6vh,32px) clamp(20px,2.4vw,32px)',
                background: pkg.bg,
                borderBottom: '2px solid var(--r-black)',
                color: 'var(--r-black)',
              }}
            >
              <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.22em', textTransform: 'uppercase' }}>
                {pkg.num} · {pkg.subtitle}
              </span>
              <h3 className="riot-display" style={{ fontSize: 'clamp(29px,3vw,44px)', lineHeight: .98 }}>{pkg.name}</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, flex: '1 1 auto', padding: 'clamp(22px,2.8vh,32px) clamp(20px,2.4vw,32px) clamp(26px,3.2vh,38px)' }}>
              {pkg.items.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 11,
                    fontSize: 'clamp(13px,1vw,15px)',
                    lineHeight: 1.5,
                    fontWeight: item.highlight ? 700 : 400,
                    color: item.highlight ? 'var(--r-ink)' : 'var(--r-muted)',
                  }}
                >
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      width: 18,
                      height: 18,
                      marginTop: 1,
                      borderRadius: 999,
                      border: '2px solid var(--r-black)',
                      background: item.highlight ? pkg.bg : 'transparent',
                      fontSize: 10,
                      fontWeight: 700,
                      color: 'var(--r-black)',
                    }}
                  >
                    ✓
                  </span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 'clamp(34px,5vh,60px)' }}>
        <a href="#contact" className="riot-btn riot-btn-yellow" style={{ padding: '16px 32px', fontSize: 13 }}>
          Book a free discovery call ↗
        </a>
      </div>
    </section>
  );
}
