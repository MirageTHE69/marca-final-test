'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

/**
 * Keeps the line under each section title exactly as wide as the title, with
 * its words spread to the title's edges.
 *
 * `.riot-head` already shrinks to its title in CSS, but a title that wraps
 * onto two lines keeps a full-width box, so the line under it would run
 * wider than the words above. This measures the title's longest line of
 * text and narrows the group to it — on load, on resize and on navigation.
 */
export default function HeadFitter() {
  const pathname = usePathname();

  useEffect(() => {
    let frame = 0;

    const fit = () => {
      document.querySelectorAll<HTMLElement>('.riot-head').forEach((group) => {
        const title = group.querySelector<HTMLElement>('.riot-display, .riot-head__title');
        if (!title) return;
        group.style.width = '';
        const range = document.createRange();
        range.selectNodeContents(title);
        const rects = [...range.getClientRects()].filter((r) => r.width > 0);
        if (!rects.length) return;
        const text = Math.max(...rects.map((r) => r.right)) - Math.min(...rects.map((r) => r.left));
        const cs = getComputedStyle(group);
        const padding = parseFloat(cs.paddingLeft) + parseFloat(cs.paddingRight);
        group.style.width = `${Math.ceil(text + padding) + 2}px`;

        // A line that fits on one row is spread edge to edge (see .is-one-line).
        const lede = group.querySelector<HTMLElement>('.riot-lede');
        if (lede) {
          lede.classList.remove('is-one-line');
          const rows = lede.getBoundingClientRect().height / parseFloat(getComputedStyle(lede).lineHeight);
          lede.classList.toggle('is-one-line', rows < 1.5);
        }
      });
    };

    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(fit);
    };

    schedule();
    void document.fonts.ready.then(schedule);
    window.addEventListener('resize', schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', schedule);
    };
  }, [pathname]);

  return null;
}
