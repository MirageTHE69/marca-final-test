'use client';

import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react';

/** Rough width of the text at 100px, so the first paint is close before the exact measure. */
function estimate(text: string) {
  let w = 0;
  // Average advance per character at 100px, measured from the site's display face.
  for (const ch of text) w += ch === ' ' ? 24 : /[A-Z]/.test(ch) ? 54 : /[.,'’]/.test(ch) ? 18 : /[mw]/.test(ch) ? 58 : /[ilfjt]/.test(ch) ? 26 : 40;
  return Math.max(10000 / Math.max(w, 1), 1);
}

/**
 * A hero title that runs edge to edge on one line, whatever the words. It
 * starts from an estimate, then measures the real text once the fonts are
 * in and sets the exact size (see .riot-fit in globals.css).
 */
export default function FitTitle({
  text,
  children,
  as: Tag = 'h1',
  className = '',
  style,
}: {
  /** Plain text of the title, used for the first estimate. */
  text: string;
  children: ReactNode;
  as?: 'h1' | 'span';
  className?: string;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let live = true;
    const measure = () => {
      if (!live || !el.parentElement) return;
      const probe = el.cloneNode(true) as HTMLElement;
      Object.assign(probe.style, { position: 'absolute', left: '-99999px', top: '0', visibility: 'hidden', fontSize: '100px', width: 'auto', display: 'inline-block' });
      el.parentElement.appendChild(probe);
      const width = probe.getBoundingClientRect().width;
      probe.remove();
      if (width) el.style.setProperty('--fit', ((10000 / width) * 0.995).toFixed(3));
    };
    void document.fonts.ready.then(measure);
    return () => {
      live = false;
    };
  }, [text]);

  return (
    <Tag ref={ref as never} className={`riot-fit ${className}`.trim()} style={{ ...style, ['--fit' as string]: estimate(text).toFixed(3) }}>
      {children}
    </Tag>
  );
}
