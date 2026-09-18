import { site } from '@/content-lib/site';

export default function V2Contact() {
  return (
    <section
      id="contact"
      className="v2-ox"
      style={{
        position: 'relative',
        overflow: 'hidden',
        padding: 'clamp(60px,10vh,120px) clamp(18px,4vw,44px) 0',
      }}
    >
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between', gap: 'clamp(24px,4vw,60px)' }}>
        <h2 className="v2-display" style={{ flex: '1 1 460px', fontSize: 'clamp(28px,4.2vw,64px)', maxWidth: '16ch' }}>
          Somebody is going to tell your story this year.{' '}
          <span style={{ color: 'var(--c-red-bright)' }}>It should be you.</span>
        </h2>

        <div style={{ flex: '0 1 320px', display: 'flex', flexDirection: 'column', gap: 18 }}>
          <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.7, color: 'rgba(241,238,233,.68)' }}>
            Tell us where the business is going. We&apos;ll come back with the content plan that gets it there —
            usually within a day.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <a href={`mailto:${site.email}`} className="v2-cta v2-cta-solid">
              Start your project
            </a>
            <a href={site.phone.href} className="v2-round" aria-label="Call the studio">↗</a>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <a href={`mailto:${site.email}`} style={{ fontSize: 14, fontWeight: 600, color: 'var(--c-paper)' }}>{site.email}</a>
            <a href={site.phone.href} className="v2-micro" style={{ color: 'rgba(241,238,233,.6)' }}>{site.phone.display}</a>
          </div>
        </div>
      </div>

      {/* Oversized closing wordmark, cropped by the section edge */}
      <div
        aria-hidden="true"
        className="v2-display"
        style={{
          marginTop: 'clamp(30px,6vh,70px)',
          fontSize: 'clamp(64px,19vw,300px)',
          lineHeight: .78,
          textAlign: 'center',
          color: 'rgba(241,238,233,.1)',
          userSelect: 'none',
        }}
      >
        MARCA
      </div>
    </section>
  );
}
