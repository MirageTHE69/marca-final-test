'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

interface PageNavProps {
  variant?: 'sticky' | 'fixed-progress';
  accent?: string;
  rightLabel?: string;
  navLinks?: { label: string; href: string }[];
  ctaLabel?: string;
  ctaHref?: string;
}

export default function PageNav({
  variant = 'sticky',
  accent,
  rightLabel,
  navLinks = [],
  ctaLabel = 'Contact',
  ctaHref = '/#contact',
}: PageNavProps) {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (variant !== 'fixed-progress') return;
    const bar = barRef.current;
    if (!bar) return;

    const onScroll = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      const p = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
      bar.style.width = p.toFixed(2) + '%';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [variant]);

  if (variant === 'fixed-progress') {
    const glow = accent ? `${accent}CC` : 'rgba(62,109,255,.8)';
    return (
      <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200, display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 20,
            padding: '24px clamp(20px,5vw,56px)',
            background: 'linear-gradient(180deg, rgba(8,9,13,.86), rgba(8,9,13,0))',
          }}
        >
          <Link href="/" style={{ fontSize: 16, fontWeight: 700, letterSpacing: '-.02em' }}>
            MARCA<span style={{ color: accent || 'var(--accent)' }}>.</span>
          </Link>
          <nav style={{ display: 'flex', alignItems: 'center', gap: 'clamp(14px,2.4vw,34px)' }}>
            {rightLabel && (
              <span data-hide-narrow="1" style={{ fontSize: 10, letterSpacing: '.24em', textTransform: 'uppercase', color: '#8E96A8' }}>
                {rightLabel}
              </span>
            )}
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} style={{ fontSize: 10, letterSpacing: '.24em', textTransform: 'uppercase', color: '#8E96A8' }}>
                {link.label}
              </Link>
            ))}
            <Link
              href={ctaHref}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '11px 22px',
                border: '1px solid rgba(245,246,248,.18)',
                borderRadius: 999,
                fontSize: 10,
                letterSpacing: '.2em',
                textTransform: 'uppercase',
              }}
            >
              {ctaLabel}
            </Link>
          </nav>
        </div>
        <div style={{ height: 1, background: 'rgba(245,246,248,.07)' }}>
          <div ref={barRef} style={{ height: 1, width: '0%', background: accent || 'var(--accent)', boxShadow: `0 0 14px ${glow}` }} />
        </div>
      </header>
    );
  }

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 20,
        padding: '22px clamp(24px,6vw,60px)',
        background: 'var(--riot-black)',
        borderBottom: '2px solid var(--accent-ads)',
      }}
    >
      <Link href="/" style={{ fontSize: 17, fontWeight: 700, letterSpacing: '-.02em' }}>
        MARCA<span style={{ color: 'var(--accent-ads)' }}>.</span>
      </Link>
      <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 10, letterSpacing: '.22em', textTransform: 'uppercase', color: '#8E9BB0' }}>
        <span>←</span> Back to site
      </Link>
    </header>
  );
}
