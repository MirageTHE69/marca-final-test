'use client';

import { useState, useEffect } from 'react';
import { site } from '@/content-lib/site';

interface NavProps {
  isScrolled?: boolean;
}

export default function Nav({ isScrolled: propIsScrolled }: NavProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen((v) => !v);

  useEffect(() => {
    const handleScroll = () => {
      const isPastHero = window.scrollY > 60;
      setScrolled(isPastHero);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isScrolled = propIsScrolled ?? scrolled;

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 120,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: isScrolled ? '16px clamp(24px, 6vw, 60px)' : '26px clamp(24px, 6vw, 60px)',
          background: isScrolled ? 'rgba(4, 6, 12, 0.75)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
          boxShadow: isScrolled ? '0 12px 36px -8px rgba(0, 0, 0, 0.85)' : 'none',
          transition: 'background 350ms ease, backdrop-filter 350ms ease, padding 350ms ease, border-color 350ms ease, box-shadow 350ms ease',
        }}
      >
        <a
          href="#contact"
          className="btn-glass-discovery"
          style={{
            position: 'relative',
            padding: '10px 22px',
            fontSize: '11px',
            letterSpacing: '.18em',
            textTransform: 'uppercase',
            fontWeight: 600,
          }}
        >
          Discovery call <span style={{ fontSize: 14 }}>→</span>
        </a>
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 'clamp(18px,3vw,40px)' }}>
          <span style={{ fontSize: 10, letterSpacing: '.26em', textTransform: 'uppercase', color: '#7A879C' }}>
            Content · Film · Identity
          </span>
          <button
            onClick={toggleMenu}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              background: 'transparent',
              border: 0,
              color: '#F2F4F8',
              cursor: 'pointer',
              fontSize: 11,
              letterSpacing: '.24em',
              textTransform: 'uppercase',
              padding: '8px 0',
            }}
          >
            Menu
            <span style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span style={{ display: 'block', width: 22, height: 1, background: '#F2F4F8' }} />
              <span style={{ display: 'block', width: 22, height: 1, background: '#F2F4F8' }} />
            </span>
          </button>
        </div>
      </header>

      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 200,
            background: 'rgba(5,7,11,.97)',
            display: 'flex',
            flexDirection: 'column',
            padding: '26px clamp(24px,6vw,60px) clamp(30px,6vh,60px)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 17, fontWeight: 700, letterSpacing: '-.02em' }}>
              MARCA<span style={{ color: 'var(--accent)' }}>.</span>
            </span>
            <button
              onClick={toggleMenu}
              style={{
                background: 'transparent',
                border: 0,
                color: '#F2F4F8',
                cursor: 'pointer',
                fontSize: 11,
                letterSpacing: '.24em',
                textTransform: 'uppercase',
              }}
            >
              Close
            </button>
          </div>
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: 'clamp(40px,8vw,120px)',
              padding: '40px 0',
            }}
          >
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {[
                { href: '#short-form', label: 'Short Form' },
                { href: '#long-form', label: 'Long Form' },
                { href: '/case-studies', label: 'Case Studies' },
                { href: '/portfolio', label: 'Portfolio', italic: true },
                { href: '#faq', label: 'FAQ' },
                { href: '#contact', label: 'Contact' },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={toggleMenu}
                  style={{
                    fontSize: 'clamp(34px,5.5vw,72px)',
                    fontWeight: item.italic ? 400 : 700,
                    letterSpacing: '-.04em',
                    lineHeight: 1.05,
                    fontFamily: item.italic ? "'Instrument Serif', Georgia, serif" : undefined,
                    fontStyle: item.italic ? 'italic' : undefined,
                    color: '#F2F4F8',
                    textDecoration: 'none',
                  }}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 26, maxWidth: 300 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <span style={{ fontSize: 10, letterSpacing: '.28em', textTransform: 'uppercase', color: '#55627A' }}>Studio</span>
                <span style={{ fontSize: 15, lineHeight: 1.6, color: '#9AA6BA' }}>{site.address.full}</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <span style={{ fontSize: 10, letterSpacing: '.28em', textTransform: 'uppercase', color: '#55627A' }}>Enquiries</span>
                <a href={`mailto:${site.email}`} style={{ fontSize: 15, color: '#F2F4F8' }}>{site.email}</a>
                <a href={site.phone.href} style={{ fontSize: 15, color: '#9AA6BA' }}>{site.phone.display}</a>
              </div>
              <div style={{ display: 'flex', gap: 18 }}>
                {site.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase', color: '#9AA6BA' }}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
