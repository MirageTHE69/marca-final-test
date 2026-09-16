'use client';

const packages = [
  {
    num: '01',
    name: 'Instagram',
    subtitle: 'Content Package',
    gradient: 'linear-gradient(135deg, #1E44AF 0%, #152E7A 45%, #0A1640 100%)',
    headerGlow: 'radial-gradient(ellipse at 50% 0%, rgba(70, 125, 255, 0.6) 0%, rgba(20, 50, 150, 0.3) 70%, transparent 100%)',
    items: [
      { text: '10–15 Reels per Month', highlight: true },
      { text: 'Topic Research & Content Strategy' },
      { text: 'Custom Scriptwriting' },
      { text: 'Concept & Creative Direction' },
      { text: 'Professional Shooting & Production' },
      { text: 'High-Quality Video Editing' },
      { text: 'Captions, Hooks & Visual Elements' },
      { text: 'Done-for-You Posting & Account Management' },
      { text: 'Performance Tracking & Content Optimization' },
    ],
  },
  {
    num: '02',
    name: 'YouTube',
    subtitle: 'Long-Form Package',
    gradient: 'linear-gradient(135deg, #1A3E9E 0%, #112666 45%, #081335 100%)',
    headerGlow: 'radial-gradient(ellipse at 50% 0%, rgba(55, 110, 255, 0.6) 0%, rgba(15, 40, 130, 0.3) 70%, transparent 100%)',
    items: [
      { text: '4–8 Long-Form Videos per Month', highlight: true },
      { text: 'Topic Research & Content Strategy' },
      { text: 'Custom Scriptwriting & Storytelling' },
      { text: 'Concept & Creative Direction' },
      { text: 'Professional Shooting & Production' },
      { text: 'High-Quality Video Editing' },
      { text: 'Custom YouTube Thumbnail Design' },
      { text: 'Click-Focused Titles & Thumbnail Concepts' },
      { text: 'Video Descriptions & Upload Optimization' },
      { text: 'Performance Tracking & Content Optimization' },
    ],
  },
  {
    num: '03',
    name: 'Customized Plan',
    subtitle: 'Tailored Content Package',
    gradient: 'linear-gradient(135deg, #2450CB 0%, #173691 45%, #0B1B4A 100%)',
    headerGlow: 'radial-gradient(ellipse at 50% 0%, rgba(85, 140, 255, 0.65) 0%, rgba(25, 60, 170, 0.3) 70%, transparent 100%)',
    items: [
      { text: 'Flexible Content Volume', highlight: true },
      { text: 'Custom Content Strategy for Instagram & YouTube' },
      { text: 'Topic Research & Scriptwriting' },
      { text: 'Concept & Creative Direction' },
      { text: 'Professional Shooting & Production' },
      { text: 'Video Editing & Post-Production' },
      { text: 'Thumbnail & Creative Design' },
      { text: 'Social Media Management' },
      { text: 'Campaign & Advertising Content' },
      { text: 'Fully Tailored to Your Brand Goals', highlight: true },
    ],
  },
];

interface PackagesSectionProps {
  /** Overrides the section background — used by the /v2 jewel-tone preview. */
  background?: string;
}

export default function PackagesSection({ background }: PackagesSectionProps = {}) {
  return (
    <section
      id="packages"
      style={{
        position: 'relative',
        zIndex: 8,
        padding: 'clamp(80px, 11vh, 140px) clamp(24px, 6vw, 60px)',
        background: background ?? '#04060A',
      }}
    >
      {/* ── Section Header ── */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, textAlign: 'center', marginBottom: 'clamp(48px, 7vh, 76px)' }}>
        <span style={{ fontSize: 11, letterSpacing: '.3em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 600 }}>
          Packages
        </span>
        <h2 style={{ margin: 0, fontSize: 'clamp(32px, 4.2vw, 68px)', fontWeight: 700, letterSpacing: '-.04em', lineHeight: 1.04, color: '#F2F4F8' }}>
          Social Media &amp; Content Production Packages
        </h2>
        <p style={{ margin: 0, maxWidth: '56ch', fontSize: 'clamp(14px, 1.1vw, 17px)', lineHeight: 1.65, color: '#96A2B6' }}>
          Predictable, high-impact content engines designed to turn founders and businesses into industry authorities.
        </p>
      </div>

      {/* ── 3 Package Cards Grid ── */}
      <div
        style={{
          maxWidth: 1320,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 'clamp(20px, 2.4vw, 32px)',
          alignItems: 'stretch',
        }}
      >
        {packages.map((pkg) => (
          <article
            key={pkg.num}
            style={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              borderRadius: 24,
              background: '#090D18',
              border: '1px solid rgba(242, 244, 248, 0.1)',
              boxShadow: '0 24px 60px -12px rgba(0, 0, 0, 0.8)',
              overflow: 'hidden',
              transition: 'transform 300ms ease, border-color 300ms ease, box-shadow 300ms ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.borderColor = 'rgba(62, 109, 255, 0.4)';
              e.currentTarget.style.boxShadow = '0 32px 70px -12px rgba(30, 68, 175, 0.35)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'rgba(242, 244, 248, 0.1)';
              e.currentTarget.style.boxShadow = '0 24px 60px -12px rgba(0, 0, 0, 0.8)';
            }}
          >
            {/* Top Gradient Header (Matching reference styling in our blue theme) */}
            <div
              style={{
                position: 'relative',
                padding: 'clamp(28px, 3.4vh, 40px) clamp(24px, 2.6vw, 36px)',
                background: pkg.gradient,
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                gap: 6,
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: pkg.headerGlow,
                  pointerEvents: 'none',
                }}
              />
              <span
                style={{
                  position: 'relative',
                  fontSize: 10,
                  letterSpacing: '.28em',
                  textTransform: 'uppercase',
                  color: 'rgba(215, 230, 255, 0.8)',
                  fontWeight: 600,
                }}
              >
                {pkg.num} · {pkg.subtitle}
              </span>
              <h3
                style={{
                  position: 'relative',
                  margin: 0,
                  fontSize: 'clamp(24px, 2.2vw, 32px)',
                  fontWeight: 700,
                  letterSpacing: '-.03em',
                  color: '#FFFFFF',
                  lineHeight: 1.1,
                }}
              >
                {pkg.name}
              </h3>
            </div>

            {/* Card Body with Deliverables Checklist */}
            <div
              style={{
                padding: 'clamp(26px, 3vh, 36px) clamp(24px, 2.6vw, 36px) clamp(30px, 3.6vh, 42px)',
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
                flex: '1 1 auto',
              }}
            >
              {pkg.items.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 12,
                    fontSize: 'clamp(13px, 1vw, 15px)',
                    lineHeight: 1.5,
                    color: item.highlight ? '#FFFFFF' : '#9EB0CB',
                    fontWeight: item.highlight ? 600 : 400,
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
                      borderRadius: 999,
                      background: item.highlight ? 'rgba(62, 109, 255, 0.25)' : 'rgba(255, 255, 255, 0.06)',
                      color: item.highlight ? '#5B8CFF' : '#8CA6D8',
                      fontSize: 11,
                      fontWeight: 700,
                      marginTop: 2,
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

      {/* ── Bottom CTA matching reference image ── */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 'clamp(44px, 6vh, 72px)' }}>
        <a
          href="#contact"
          className="btn-outline"
          style={{
            padding: '16px 36px',
            fontSize: 'clamp(12px, 1.05vw, 14px)',
            borderRadius: 999,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            background: 'rgba(12, 18, 32, 0.8)',
            borderColor: 'rgba(62, 109, 255, 0.4)',
            boxShadow: '0 0 24px -4px rgba(62, 109, 255, 0.35)',
            transition: 'all 300ms ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'var(--accent)';
            e.currentTarget.style.boxShadow = '0 0 32px 2px rgba(62, 109, 255, 0.6)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(62, 109, 255, 0.4)';
            e.currentTarget.style.boxShadow = '0 0 24px -4px rgba(62, 109, 255, 0.35)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          Book a free discovery call <span>↗</span>
        </a>
      </div>
    </section>
  );
}
