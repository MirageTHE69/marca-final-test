'use client';

import { useEffect, useRef, useState } from 'react';

interface CountUpStatProps {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
  size?: 'lg' | 'sm';
  accent: string;
}

export default function CountUpStat({ value, decimals = 0, prefix = '', suffix = '', label, size = 'lg', accent }: CountUpStatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            const t0 = performance.now();
            const duration = 1500;
            const ease = (t: number) => 1 - Math.pow(1 - t, 3);
            const tick = (now: number) => {
              const p = Math.min(1, (now - t0) / duration);
              setDisplay(value * ease(p));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  const pct = value !== 0 ? Math.min(100, (display / value) * 100) : 0;

  return (
    <div ref={ref} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <span style={{ fontSize: size === 'lg' ? 'clamp(34px,4.4vw,64px)' : 'clamp(22px,2.4vw,32px)', fontWeight: 700, letterSpacing: '-.03em' }}>
        {prefix}{display.toFixed(decimals)}{suffix}
      </span>
      <span style={{ fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase', color: '#8E96A8' }}>{label}</span>
      {size === 'lg' && (
        <div style={{ height: 2, background: 'rgba(245,246,248,.1)', borderRadius: 999, overflow: 'hidden' }}>
          <div style={{ height: '100%', width: `${pct}%`, background: accent, transition: 'width 80ms linear' }} />
        </div>
      )}
    </div>
  );
}
