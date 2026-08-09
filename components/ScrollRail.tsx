'use client';

import { useRef, type ReactNode } from 'react';

interface ScrollRailProps {
  children: ReactNode;
  ariaLabel: string;
}

export default function ScrollRail({ children, ariaLabel }: ScrollRailProps) {
  const railRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    const rail = railRef.current;
    if (!rail) return;
    const amount = Math.min(rail.clientWidth * 0.8, 620);
    rail.scrollBy({ left: dir * amount, behavior: 'smooth' });
  };

  return (
    <>
      <div ref={railRef} className="rail-track">
        {children}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, marginTop: 'clamp(28px,4vh,44px)' }}>
        <button type="button" className="rail-arrow" aria-label={`Previous ${ariaLabel}`} onClick={() => scroll(-1)}>←</button>
        <button type="button" className="rail-arrow" aria-label={`Next ${ariaLabel}`} onClick={() => scroll(1)}>→</button>
      </div>
    </>
  );
}
