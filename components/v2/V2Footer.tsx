import { site } from '@/content-lib/site';

export default function V2Footer() {
  return (
    <footer className="v2-ox" style={{ padding: 'clamp(30px,5vh,56px) clamp(18px,4vw,44px) 26px', borderTop: '1px solid rgba(241,238,233,.14)' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(26px,4vw,64px)', paddingBottom: 'clamp(26px,4vh,46px)' }}>
        <div style={{ flex: '1 1 240px', display: 'flex', flexDirection: 'column', gap: 12 }}>
          <span className="v2-display" style={{ fontSize: 22 }}>Marca Creatives</span>
          <p style={{ margin: 0, maxWidth: '30ch', fontSize: 12.5, lineHeight: 1.7, color: 'rgba(241,238,233,.55)' }}>
            A creative production studio for content, film and brand identity.
          </p>
          <div style={{ display: 'flex', gap: 14, paddingTop: 4 }}>
            {site.socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="v2-micro" style={{ color: 'rgba(241,238,233,.72)' }}>
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div style={{ flex: '0 1 160px', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <span className="v2-micro" style={{ color: 'rgba(241,238,233,.4)' }}>Services</span>
          {[
            { href: '#short-form', label: 'Short form' },
            { href: '#long-form', label: 'Long form' },
            { href: '#design', label: 'Thumbnail design' },
            { href: '/portfolio', label: 'Logo & packaging' },
            { href: '#packages', label: 'Photography' },
          ].map((l) => (
            <a key={l.href} href={l.href} style={{ fontSize: 13, color: 'rgba(241,238,233,.72)' }}>{l.label}</a>
          ))}
        </div>

        <div style={{ flex: '0 1 160px', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <span className="v2-micro" style={{ color: 'rgba(241,238,233,.4)' }}>Studio</span>
          {[
            { href: '/portfolio', label: 'Services' },
            { href: '/case-studies', label: 'Case studies' },
            { href: '#process', label: 'Process' },
            { href: '#packages', label: 'Packages' },
            { href: '/faq', label: 'FAQ' },
            { href: '#contact', label: 'Contact' },
          ].map((l) => (
            <a key={l.href} href={l.href} style={{ fontSize: 13, color: 'rgba(241,238,233,.72)' }}>{l.label}</a>
          ))}
        </div>

        <div style={{ flex: '1 1 250px', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <span className="v2-micro" style={{ color: 'rgba(241,238,233,.4)' }}>Get in touch</span>
          <a href={`mailto:${site.email}`} style={{ fontSize: 15, fontWeight: 600, color: 'var(--c-paper)' }}>{site.email}</a>
          <a href={site.phone.href} style={{ fontSize: 13, color: 'rgba(241,238,233,.72)' }}>{site.phone.display}</a>
          <span style={{ fontSize: 12.5, lineHeight: 1.65, color: 'rgba(241,238,233,.5)' }}>
            {site.address.line1}
            <br />
            {site.address.line2}
          </span>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 14,
          paddingTop: 20,
          borderTop: '1px solid rgba(241,238,233,.14)',
        }}
      >
        <span className="v2-micro" style={{ color: 'rgba(241,238,233,.4)' }}>© 2026 Marca Creatives. All rights reserved.</span>
        <div style={{ display: 'flex', gap: 22 }}>
          <a href="#contact" className="v2-micro" style={{ color: 'rgba(241,238,233,.4)' }}>Privacy policy</a>
          <a href="#contact" className="v2-micro" style={{ color: 'rgba(241,238,233,.4)' }}>Terms &amp; conditions</a>
        </div>
      </div>
    </footer>
  );
}
