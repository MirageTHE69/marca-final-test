'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

/** What the studio does, each linking to its section on the landing page. */
const services = [
  { href: '/#short-form', label: 'Short Form', note: 'Instagram reels' },
  { href: '/#long-form', label: 'Long Form', note: 'YouTube videos' },
  { href: '/#design', label: 'Thumbnails', note: 'YouTube thumbnail design' },
  { href: '/#other-services', label: 'Photoshoot', note: 'Product, portrait & editorial' },
  { href: '/#other-services', label: 'Ad Campaigns', note: 'Concept to platform cutdowns' },
  { href: '/#other-services', label: 'Packaging & Design', note: 'Packaging & brand systems' },
  { href: '/#packages', label: 'Packages', note: 'Monthly content plans' },
];

const links = [
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/blog', label: 'Blog' },
  { href: '/careers', label: 'Careers' },
  { href: '/#faq', label: 'FAQ' },
  { href: '/#contact', label: 'Contact' },
];

type Social = { name: string; url: string };

/** The top bar and the full-screen mobile menu. */
export default function RiotNavMenu({ email, socials }: { email: string; socials: Social[] }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((v) => !v);
  // The Services dropdown opens on hover (CSS) and also on click or keyboard.
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!servicesOpen) return;
    const close = (e: MouseEvent | KeyboardEvent) => {
      if (e instanceof KeyboardEvent ? e.key === 'Escape' : !servicesRef.current?.contains(e.target as Node)) setServicesOpen(false);
    };
    document.addEventListener('mousedown', close);
    document.addEventListener('keydown', close);
    return () => {
      document.removeEventListener('mousedown', close);
      document.removeEventListener('keydown', close);
    };
  }, [servicesOpen]);

  return (
    <>
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 120,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
          padding: '12px clamp(18px,4vw,44px)',
          background: 'var(--r-yellow)',
          borderBottom: '2px solid var(--r-black)',
        }}
      >
        <Link href="/#top" className="riot-display" style={{ fontSize: 'clamp(20px,2.3vw,28px)', color: 'var(--r-black)', textDecoration: 'none' }}>
          Marca
        </Link>

        <nav className="riot-nav-links" style={{ alignItems: 'center', gap: 'clamp(16px,2.2vw,32px)' }}>
          <div ref={servicesRef} className={`riot-dd${servicesOpen ? ' is-open' : ''}`}>
            <button
              type="button"
              className="riot-dd__trigger"
              aria-haspopup="true"
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen((v) => !v)}
            >
              Services
              <svg aria-hidden="true" className="riot-dd__caret" viewBox="0 0 12 12" width="12" height="12">
                <path d="M2.5 4.5 6 8l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="riot-dd__panel" role="menu">
              {services.map((s) => (
                <a key={s.label} href={s.href} role="menuitem" className="riot-dd__item" onClick={() => setServicesOpen(false)}>
                  <strong>{s.label}</strong>
                  <span>{s.note}</span>
                </a>
              ))}
            </div>
          </div>
          {links.map((l) => (
            <a key={l.href} href={l.href} className="riot-nav-link">
              {l.label}
            </a>
          ))}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Link href="/#contact" className="riot-btn riot-nav-cta" style={{ padding: '10px 20px', fontSize: 12.5 }}>
            Discovery call
          </Link>
          <button
            type="button"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="riot-menu-btn"
            style={{
              width: 38,
              height: 38,
              borderRadius: 999,
              border: '2px solid var(--r-black)',
              background: 'transparent',
              color: 'var(--r-black)',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              fontSize: 16,
            }}
          >
            {menuOpen ? '×' : '≡'}
          </button>
        </div>
      </header>

      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 200,
            background: 'var(--r-cream)',
            display: 'flex',
            flexDirection: 'column',
            padding: '20px clamp(18px,5vw,48px) clamp(26px,5vh,48px)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span className="riot-display" style={{ fontSize: 22, color: 'var(--r-black)' }}>Marca</span>
            <button
              type="button"
              onClick={toggleMenu}
              style={{
                border: '2px solid var(--r-black)',
                borderRadius: 999,
                background: 'transparent',
                color: 'var(--r-black)',
                cursor: 'pointer',
                fontSize: 11,
                fontWeight: 700,
                padding: '8px 16px',
              }}
            >
              Close
            </button>
          </div>

          <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 4, overflowY: 'auto' }}>
            <span className="riot-display" style={{ fontSize: 'clamp(28px,6vw,60px)', color: 'var(--r-black)', padding: '6px 0' }}>
              Services
            </span>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '6px 18px', padding: '0 0 10px 4px' }}>
              {services.map((s) => (
                <a key={s.label} href={s.href} onClick={toggleMenu} style={{ fontSize: 16, fontWeight: 700, color: 'var(--r-black)', textDecoration: 'none', padding: '4px 0' }}>
                  {s.label}
                </a>
              ))}
            </div>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={toggleMenu}
                className="riot-display"
                style={{ fontSize: 'clamp(28px,6vw,60px)', color: 'var(--r-black)', textDecoration: 'none', padding: '6px 0' }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, justifyContent: 'space-between' }}>
            <a href={`mailto:${email}`} style={{ fontSize: 14, fontWeight: 700, color: 'var(--r-black)' }}>{email}</a>
            <div style={{ display: 'flex', gap: 16 }}>
              {socials.map((s) => (
                <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, fontWeight: 700, color: 'var(--r-black)' }}>
                  {s.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
