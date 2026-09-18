'use client';

import { useState } from 'react';
import Link from 'next/link';

const links = [
  { href: '#work', label: 'Work' },
  { href: '#services', label: 'Services' },
  { href: '#cases', label: 'Cases' },
  { href: '#packages', label: 'Packages' },
  { href: '#faq', label: 'FAQ' },
];

export default function V2Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 120,
        background: 'rgba(26,4,6,.72)',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
        borderBottom: '1px solid rgba(241,238,233,.12)',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 20,
          padding: '14px clamp(18px,4vw,44px)',
        }}
      >
        <Link href="/v2" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 32,
              height: 32,
              borderRadius: 9,
              background: 'var(--c-red)',
              color: '#FFFFFF',
              fontSize: 15,
              fontWeight: 800,
              letterSpacing: '-.04em',
            }}
          >
            M
          </span>
          <span style={{ fontSize: 15, fontWeight: 700, letterSpacing: '-.02em', color: 'var(--c-paper)' }}>MARCA</span>
        </Link>

        <nav className="v2-nav-links" style={{ alignItems: 'center', gap: 'clamp(16px,2.4vw,36px)' }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} className="v2-micro" style={{ color: 'rgba(241,238,233,.72)', textDecoration: 'none' }}>
              {l.label}
            </a>
          ))}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <a href="#contact" className="v2-cta v2-cta-solid" style={{ padding: '11px 22px', fontSize: 10 }}>
            Discovery call
          </a>
          <button
            type="button"
            className="v2-menu-btn"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            style={{
              width: 38,
              height: 38,
              borderRadius: 999,
              border: '1px solid rgba(241,238,233,.35)',
              background: 'transparent',
              color: 'var(--c-paper)',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              fontSize: 16,
            }}
          >
            {open ? '×' : '≡'}
          </button>
        </div>
      </div>

      {open && (
        <nav style={{ display: 'flex', flexDirection: 'column', padding: '0 clamp(18px,4vw,44px) 18px' }}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                padding: '12px 0',
                fontSize: 17,
                fontWeight: 600,
                color: 'var(--c-paper)',
                textDecoration: 'none',
                borderBottom: '1px solid rgba(241,238,233,.1)',
              }}
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
