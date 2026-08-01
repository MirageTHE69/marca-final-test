export default function Footer() {
  return (
    <footer
      data-scene="1"
      style={{
        position: 'relative',
        zIndex: 12,
        padding: 'clamp(60px,8vh,100px) clamp(24px,6vw,60px) 34px',
        background: '#05070B',
        borderTop: '1px solid rgba(242,244,248,.08)',
        willChange: 'transform, filter',
      }}
    >
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(34px,5vw,80px)', paddingBottom: 'clamp(44px,5vw,72px)' }}>
        {/* Brand column */}
        <div style={{ flex: '1 1 260px', display: 'flex', flexDirection: 'column', gap: 20 }}>
          <span style={{ fontSize: 20, fontWeight: 700, letterSpacing: '-.02em' }}>MARCA<span style={{ color: 'var(--accent)' }}>.</span></span>
          <p style={{ margin: 0, maxWidth: '30ch', fontSize: 14, lineHeight: 1.7, color: '#7A879C' }}>
            A creative production studio for content, film and brand identity.
          </p>
          <div style={{ display: 'flex', gap: 16, paddingTop: 6 }}>
            {['Instagram', 'YouTube', 'Vimeo', 'LinkedIn'].map(s => (
              <a key={s} href="#contact" style={{ fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase', color: '#9AA6BA' }}>{s}</a>
            ))}
          </div>
        </div>

        {/* Services column */}
        <div style={{ flex: '0 1 160px', display: 'flex', flexDirection: 'column', gap: 14 }}>
          <span style={{ fontSize: 10, letterSpacing: '.26em', textTransform: 'uppercase', color: '#55627A' }}>Services</span>
          {[
            { href: '#short-form', label: 'Short form' },
            { href: '#long-form', label: 'Long form' },
            { href: '#design', label: 'Thumbnail design' },
            { href: '#branding', label: 'Branding' },
            { href: '#packages', label: 'Photography' },
          ].map(link => (
            <a key={link.href} href={link.href} style={{ fontSize: 14, color: '#9AA6BA' }}>{link.label}</a>
          ))}
        </div>

        {/* Studio column */}
        <div style={{ flex: '0 1 160px', display: 'flex', flexDirection: 'column', gap: 14 }}>
          <span style={{ fontSize: 10, letterSpacing: '.26em', textTransform: 'uppercase', color: '#55627A' }}>Studio</span>
          {[
            { href: '#portfolio', label: 'Portfolio' },
            { href: '#case-studies', label: 'Case studies' },
            { href: '#process', label: 'Process' },
            { href: '#packages', label: 'Packages' },
            { href: '#contact', label: 'Contact' },
          ].map(link => (
            <a key={link.href} href={link.href} style={{ fontSize: 14, color: '#9AA6BA' }}>{link.label}</a>
          ))}
        </div>

        {/* Contact column */}
        <div style={{ flex: '1 1 240px', display: 'flex', flexDirection: 'column', gap: 14 }}>
          <span style={{ fontSize: 10, letterSpacing: '.26em', textTransform: 'uppercase', color: '#55627A' }}>Get in touch</span>
          <a href="mailto:studio@marcacreatives.co" style={{ fontSize: 'clamp(16px,1.5vw,20px)', fontWeight: 500, letterSpacing: '-.01em', color: '#F2F4F8' }}>
            studio@marcacreatives.co
          </a>
          <span style={{ fontSize: 14, color: '#9AA6BA' }}>+91 98220 41188</span>
          <span style={{ fontSize: 14, lineHeight: 1.7, color: '#7A879C' }}>
            4th Floor, Kabir House<br />Baner Road, Pune 411045
          </span>
        </div>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 16, paddingTop: 26, borderTop: '1px solid rgba(242,244,248,.08)' }}>
        <span style={{ fontSize: 11, color: '#55627A' }}>© 2026 Marca Creatives. All rights reserved.</span>
        <div style={{ display: 'flex', gap: 24 }}>
          <a href="#contact" style={{ fontSize: 11, color: '#55627A' }}>Privacy policy</a>
          <a href="#contact" style={{ fontSize: 11, color: '#55627A' }}>Terms &amp; conditions</a>
        </div>
      </div>
    </footer>
  );
}
