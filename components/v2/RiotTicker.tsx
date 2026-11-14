'use client';

import { useEffect, useId, useRef } from 'react';

type Wave = {
  /** viewBox width and height. */
  w: number;
  h: number;
  /** Centre line of the band, running past both edges. */
  path: string;
  band: number;
  font: number;
  /** Scroll speed in viewBox units per second. */
  speed: number;
};

// The band's centre line: a gentle S-curve, extended well past both edges
// so the text can enter and leave off-screen.
const DESKTOP: Wave = {
  w: 1600,
  h: 300,
  path: 'M -700 190 C -300 120, 100 120, 450 190 S 1150 255, 1600 175 S 2100 115, 2400 170',
  band: 128,
  font: 78,
  speed: 70,
};

const MOBILE: Wave = {
  w: 800,
  h: 260,
  path: 'M -500 165 C -250 115, 0 115, 220 165 S 600 215, 800 155 S 1100 115, 1300 150',
  band: 104,
  font: 58,
  speed: 45,
};

/** One curved band: the names flow along the wave and scroll continuously. */
function Band({ wave, names, className }: { wave: Wave; names: string[]; className: string }) {
  const id = useId().replace(/:/g, '');
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGTextPathElement>(null);
  const unitRef = useRef<SVGTextElement>(null);
  const unit = names.map((n) => `${n}  ★  `).join('');

  useEffect(() => {
    const svg = svgRef.current;
    const tp = pathRef.current;
    const measure = unitRef.current;
    if (!svg || !tp || !measure) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let frame = 0;
    let last = 0;
    let offset = 0;
    let visible = true;
    const step = (t: number) => {
      const len = measure.getComputedTextLength();
      if (last && len) {
        offset = (offset + ((t - last) / 1000) * wave.speed) % len;
        tp.setAttribute('startOffset', String(-offset));
      }
      last = t;
      frame = visible ? requestAnimationFrame(step) : 0;
    };
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (visible && !frame) {
        last = 0;
        frame = requestAnimationFrame(step);
      }
    });
    io.observe(svg);
    frame = requestAnimationFrame(step);
    return () => {
      cancelAnimationFrame(frame);
      io.disconnect();
    };
  }, [wave.speed]);

  return (
    <svg
      ref={svgRef}
      className={className}
      viewBox={`0 0 ${wave.w} ${wave.h}`}
      width="100%"
      aria-hidden="true"
      style={{ display: 'block', overflow: 'visible', pointerEvents: 'none' }}
    >
      <defs>
        <path id={`wave-${id}`} d={wave.path} />
      </defs>
      {/* Below the band: the next section's colour, so the wave's lower edge reads as the section edge. */}
      <path d={`${wave.path} L 2400 ${wave.h + 40} L -700 ${wave.h + 40} Z`} fill="var(--r-cream)" />
      <use href={`#wave-${id}`} fill="none" stroke="var(--r-yellow)" strokeWidth={wave.band} />
      {/* Hidden copy of one run of names, to measure how far the loop scrolls. */}
      <text ref={unitRef} x="-9999" y="-9999" className="riot-display" style={{ fontSize: wave.font, letterSpacing: '-.02em' }}>
        {unit}
      </text>
      <text className="riot-display" fill="var(--r-black)" style={{ fontSize: wave.font, letterSpacing: '-.02em' }} dominantBaseline="central">
        <textPath ref={pathRef} href={`#wave-${id}`} startOffset="0">
          {unit.repeat(8)}
        </textPath>
      </text>
    </svg>
  );
}

/**
 * Names on a curved band that overlaps the bottom of a hero: the clients
 * under the home page film, the work categories under the portfolio hero.
 */
export default function RiotTicker({ names, label = 'Clients' }: { names: string[]; label?: string }) {
  if (!names.length) return null;
  return (
    <div className="riot-wave" role="marquee" aria-label={`${label}: ${names.join(', ')}`}>
      <Band wave={DESKTOP} names={names} className="riot-wave__desktop" />
      <Band wave={MOBILE} names={names} className="riot-wave__mobile" />
    </div>
  );
}
