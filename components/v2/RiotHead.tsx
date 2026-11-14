'use client';

import { useLayoutEffect, useRef, type CSSProperties, type ReactNode } from 'react';

/**
 * Section heading in the "Instagram" style used across the site:
 *
 *   - a big display title, sized so its widest line is as wide as the
 *     Instagram title (61% of the screen; most of the column on phones),
 *     never larger than that one, wrapped onto two lines when it is long;
 *   - the small label tucked into the gap right of the first capital, top
 *     level with it, when the letters under the label are short enough —
 *     otherwise it sits just above the title, starting at the second letter;
 *   - the line under the title starting at the title's left edge, close
 *     under it but always clear of letters that drop below the line (g, y…).
 *
 * The server renders a close estimate; once fonts are loaded the browser
 * measures the real letters and settles every position in pixels, and does
 * so again when the screen size changes.
 */

type Props = {
  kicker?: ReactNode;
  /** Plain title; split into one or two lines automatically. */
  title?: string;
  /** Pre-split lines, for titles with mixed type (e.g. an italic ending). */
  lines?: ReactNode[];
  lede?: ReactNode;
  /** Title colour. */
  color?: string;
  /** Centre the heading block on the page (content stays left-aligned), or keep it at the start. */
  place?: 'center' | 'start';
  /** Most lines the title may take. */
  maxLines?: 1 | 2;
  /** Extra size cap (any CSS length), e.g. by screen height for pinned sections. */
  maxSize?: string;
  /** Look for the label's place only after this part of the title (e.g. "Servi"). */
  labelAfter?: string;
  /**
   * Keep the label in the first gap after the first letter even when a
   * taller letter follows soon after; it then rises just enough to clear it.
   */
  labelFirstGap?: boolean;
  kickerStyle?: CSSProperties;
  ledeStyle?: CSSProperties;
  className?: string;
  style?: CSSProperties;
};

/* Rough advance widths (em) of the display face, used only for the first
   render and for choosing where to break a long title. */
const NARROW = new Set('iljtfr.,:;\'!|'.split(''));
const WIDE = new Set('mwMW'.split(''));
function estimateEm(text: string) {
  let w = 0;
  for (const ch of text) {
    if (ch === ' ') w += 0.22;
    else if (NARROW.has(ch)) w += 0.3;
    else if (WIDE.has(ch)) w += 0.74;
    else if (ch >= 'A' && ch <= 'Z') w += 0.6;
    else w += 0.5;
  }
  return w;
}

/** One line if it can still be set large; otherwise the most even two-line split. */
function splitTitle(title: string, maxLines: 1 | 2): string[] {
  const words = title.trim().split(/\s+/);
  if (maxLines === 1 || words.length < 2 || estimateEm(title) <= 7.2) return [title.trim()];
  let best: string[] = [title.trim()];
  let bestW = estimateEm(title);
  for (let i = 1; i < words.length; i++) {
    const a = words.slice(0, i).join(' ');
    const b = words.slice(i).join(' ');
    const w = Math.max(estimateEm(a), estimateEm(b));
    if (w < bestW) {
      best = [a, b];
      bestW = w;
    }
  }
  return best;
}

let canvas: HTMLCanvasElement | null = null;
function ctx2d() {
  canvas ??= document.createElement('canvas');
  return canvas.getContext('2d')!;
}

/** Character ranges for every character of an element's text, in order. */
function charRects(el: HTMLElement) {
  const out: { ch: string; rect: DOMRect; el: Element }[] = [];
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
  const range = document.createRange();
  for (let n = walker.nextNode(); n; n = walker.nextNode()) {
    const text = n.textContent ?? '';
    for (let i = 0; i < text.length; i++) {
      range.setStart(n, i);
      range.setEnd(n, i + 1);
      const rect = range.getBoundingClientRect();
      out.push({ ch: text[i], rect, el: n.parentElement ?? el });
    }
  }
  return out;
}

/**
 * The ink of one title line, column by column: for every pixel column, the
 * top and bottom of the letters there (in px from the top of the line box;
 * NaN where the column is empty). Drawn letter by letter at the browser's own
 * positions, so kerning and mixed fonts come out exactly as on screen.
 */
let inkCanvas: HTMLCanvasElement | null = null;
function inkProfile(line: HTMLElement, baseline: number, lh: number, only?: (ch: string) => boolean) {
  const lr = line.getBoundingClientRect();
  const padX = Math.ceil(lh * 0.3);
  const padY = Math.ceil(lh * 0.6);
  const W = Math.ceil(lr.width) + padX * 2;
  const H = Math.ceil(lh) + padY * 2;
  inkCanvas ??= document.createElement('canvas');
  inkCanvas.width = W;
  inkCanvas.height = H;
  const g = inkCanvas.getContext('2d', { willReadFrequently: true })!;
  g.clearRect(0, 0, W, H);
  g.fillStyle = '#000';
  for (const { ch, rect, el } of charRects(line)) {
    if (ch.trim() === '' || (only && !only(ch))) continue;
    g.font = fontOf(el).font;
    g.fillText(ch, rect.left - lr.left + padX, padY + baseline);
  }
  const data = g.getImageData(0, 0, W, H).data;
  const tops = new Float32Array(W).fill(NaN);
  const bottoms = new Float32Array(W).fill(NaN);
  for (let x = 0; x < W; x++) {
    for (let y = 0; y < H; y++) {
      if (data[(y * W + x) * 4 + 3] > 110) {
        tops[x] = y - padY;
        break;
      }
    }
    for (let y = H - 1; y >= 0; y--) {
      if (data[(y * W + x) * 4 + 3] > 110) {
        bottoms[x] = y - padY;
        break;
      }
    }
  }
  return { x0: lr.left - padX, tops, bottoms };
}

function fontOf(el: Element) {
  const cs = getComputedStyle(el);
  return { cs, font: `${cs.fontStyle} ${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`, size: parseFloat(cs.fontSize) };
}

export default function RiotHead({
  kicker,
  title,
  lines,
  lede,
  color,
  place = 'center',
  maxLines = 2,
  maxSize,
  labelAfter,
  labelFirstGap,
  kickerStyle,
  ledeStyle,
  className,
  style,
}: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const kickerRef = useRef<HTMLSpanElement>(null);
  const ledeRef = useRef<HTMLParagraphElement>(null);

  const titleLines = lines ?? splitTitle(title ?? '', maxLines);
  const estimate = Math.max(...titleLines.map((l) => (typeof l === 'string' ? estimateEm(l) : 6)));

  useLayoutEffect(() => {
    const root = rootRef.current;
    const h = titleRef.current;
    if (!root || !h) return;
    let frame = 0;

    const settle = () => {
      const k = kickerRef.current;
      const p = ledeRef.current;
      const vw = window.innerWidth;
      const parentW = (root.parentElement?.clientWidth ?? vw) - 0;

      // 1. Width target, then the title's real width in em (independent of size).
      const target = Math.min(vw <= 700 ? vw * 0.86 : vw * 0.61, parentW);
      root.style.setProperty('--rh-t', `${target}px`);
      const fs0 = parseFloat(getComputedStyle(h).fontSize);
      const lineEls = [...h.querySelectorAll<HTMLElement>('.rh__line')];
      const widest = Math.max(...lineEls.map((l) => l.getBoundingClientRect().width));
      if (widest > 0) root.style.setProperty('--rh-w', String(widest / fs0));

      // 2. Metrics at the settled size.
      const { cs, font, size: fs } = fontOf(h);
      const c = ctx2d();
      c.font = font;
      const lh = parseFloat(cs.lineHeight) || fs * 0.95;
      const probe = c.measureText('H');
      const fA = probe.fontBoundingBoxAscent;
      const fD = probe.fontBoundingBoxDescent;
      const baseline = (lh - (fA + fD)) / 2 + fA; // from the top of each line box

      // 2b. Two-line titles: bring the second line up until its letters are
      // a small, even distance from the letters above — measured column by
      // column, so a comma or a "y" above never touches what is below.
      // Small punctuation (a comma's tail) may sit closer than letters do.
      const isMark = (ch: string) => /[,.;:'’"”]/.test(ch);
      const closest = (above: ReturnType<typeof inkProfile>, below: ReturnType<typeof inkProfile>) => {
        const reach = Math.round(fs * 0.03);
        let min = Infinity;
        for (let x = 0; x < below.tops.length; x++) {
          const t = below.tops[x];
          if (Number.isNaN(t)) continue;
          const ax = Math.round(below.x0 + x - above.x0);
          let b = NaN;
          for (let d = -reach; d <= reach; d++) {
            const v = above.bottoms[ax + d];
            if (!Number.isNaN(v) && (Number.isNaN(b) || v > b)) b = v;
          }
          if (!Number.isNaN(b)) min = Math.min(min, lh + t - b);
        }
        return min;
      };
      for (let i = 1; i < lineEls.length; i++) {
        lineEls[i].style.marginTop = '';
        const below = inkProfile(lineEls[i], baseline, lh);
        const letters = closest(inkProfile(lineEls[i - 1], baseline, lh, (ch) => !isMark(ch)), below);
        const marks = closest(inkProfile(lineEls[i - 1], baseline, lh, isMark), below);
        const shift = Math.max(
          Number.isFinite(letters) ? Math.max(6, fs * 0.07) - letters : -Infinity,
          Number.isFinite(marks) ? Math.max(3, fs * 0.025) - marks : -Infinity,
        );
        if (Number.isFinite(shift)) lineEls[i].style.marginTop = `${Math.min(lh * 0.2, Math.max(-lh * 0.45, shift))}px`;
      }

      const first = lineEls[0];
      const chars = charRects(first);
      const c1 = chars[0];
      const m1 = c.measureText(c1?.ch ?? 'H');
      const bearing1 = -m1.actualBoundingBoxLeft; // blank space left of the first letter
      const capTop = baseline - m1.actualBoundingBoxAscent;

      // Pull the title so its first letter's ink lines up with the line below,
      // and so its ink top is the top of the block.
      h.style.marginLeft = `${-bearing1}px`;
      h.style.marginTop = `${-capTop}px`;

      const hRect = h.getBoundingClientRect();
      const originX = hRect.left + bearing1; // ink left of the first letter = block's left edge
      const lineTop = first.getBoundingClientRect().top;

      // 3. The label.
      if (k) {
        const kf = fontOf(k);
        c.font = kf.font;
        const kp = c.measureText('H');
        const klh = parseFloat(kf.cs.lineHeight) || kf.size * 1.2;
        const kBase = (klh - (kp.fontBoundingBoxAscent + kp.fontBoundingBoxDescent)) / 2 + kp.fontBoundingBoxAscent;
        const kCap = kp.actualBoundingBoxAscent;
        const kInkTop = kBase - kCap;
        const kText = (k.textContent ?? '').toUpperCase();
        const kBearing = kText ? -c.measureText(kText[0]).actualBoundingBoxLeft : 0;
        // Ink width: the box also carries the letter spacing after the last letter.
        const kWidth = k.getBoundingClientRect().width - (parseFloat(kf.cs.letterSpacing) || 0);

        // Beside the letters: scan the first line's ink column by column and
        // find the first stretch, after the first letter, where the letters
        // are low enough to leave room above them (under the first capital's
        // height) and which is wide enough for the label — e.g. the shoulder
        // of the "h" and "um" in Thumbnails, "ur" right after the O in Process.
        const air = Math.max(4, kCap * 0.4);
        const gapX = fs * 0.04;
        const need = capTop + kCap + air; // columns whose ink starts below this are free
        const prof = inkProfile(first, baseline, lh);
        const lowAt = (col: number) => Number.isNaN(prof.tops[col]) || prof.tops[col] >= need;
        const blockRight = root.getBoundingClientRect().right;
        const W = prof.tops.length;

        let col = 0;
        if (labelAfter) {
          const at = chars.map((x) => x.ch).join('').indexOf(labelAfter);
          const next = chars[at + labelAfter.length];
          if (at >= 0 && next) col = Math.max(0, Math.round(next.rect.left - prof.x0));
        } else {
          while (col < W && Number.isNaN(prof.tops[col])) col++; // to the first letter
        }

        let notch = false;
        let startX = NaN;
        let labelTop = capTop; // ink top of the label, from the top of the first line box
        if (labelFirstGap) {
          let c0 = col;
          while (c0 < W && !lowAt(c0)) c0++;
          if (c0 < W) {
            const startAbs = prof.x0 + c0 + gapX;
            // Highest ink under the label's width; sit just above it.
            let highest = Infinity;
            for (let x = Math.floor(startAbs - prof.x0); x < Math.min(W, Math.ceil(startAbs - prof.x0 + kWidth)); x++) {
              if (!Number.isNaN(prof.tops[x])) highest = Math.min(highest, prof.tops[x]);
            }
            notch = true;
            startX = startAbs - originX;
            labelTop = Math.min(capTop, highest - air - kCap);
            col = W;
          }
        }
        while (col < W && !notch) {
          while (col < W && !lowAt(col)) col++; // over the tall part
          const runStart = col;
          while (col < W && lowAt(col)) col++;
          if (runStart >= W) break;
          const startAbs = prof.x0 + runStart + gapX;
          const endAbs = col >= W ? blockRight : prof.x0 + col - gapX;
          if (Number.isNaN(startX)) startX = startAbs - originX;
          if (endAbs - startAbs >= kWidth) {
            notch = true;
            startX = startAbs - originX;
          }
        }
        if (!notch) {
          // Above the title: start just after the first letter (ignoring
          // labelAfter, which is about the space beside the letters), or at
          // the edge if even that would run past the title.
          let c0 = 0;
          while (c0 < W && Number.isNaN(prof.tops[c0])) c0++;
          while (c0 < W && !lowAt(c0)) c0++;
          startX = c0 < W ? prof.x0 + c0 + gapX - originX : 0;
          if (originX + startX + kWidth > blockRight) startX = 0;
        }

        // Phones: the label always sits above the title, centred over it.
        if (vw <= 700) {
          notch = false;
          startX = Math.max(0, (blockRight - originX - kWidth) / 2);
        }

        k.style.left = `${startX - kBearing}px`;
        if (notch) {
          root.classList.add('rh--notch');
          const wrapTop = (h.parentElement ?? root).getBoundingClientRect().top;
          k.style.top = `${lineTop - wrapTop + labelTop - kInkTop}px`;
          k.style.marginBottom = '';
        } else {
          root.classList.remove('rh--notch');
          k.style.top = '';
          // Gap between the label and the title, in proportion to the title.
          const gap = Math.min(16, Math.max(9, fs * 0.05));
          k.style.marginBottom = `${gap - (klh - kBase)}px`;
        }
      }

      // 4. The line under the title: close, but clear of descenders above it.
      if (p) {
        const pf = fontOf(p);
        c.font = pf.font;
        const pp = c.measureText('H');
        const plh = parseFloat(pf.cs.lineHeight) || pf.size * 1.4;
        const pInkTop = (plh - (pp.fontBoundingBoxAscent + pp.fontBoundingBoxDescent)) / 2 + pp.fontBoundingBoxAscent - pp.actualBoundingBoxAscent;

        // Right end of the line's first row of text.
        const pr = document.createRange();
        pr.selectNodeContents(p);
        const rows = [...pr.getClientRects()].filter((r) => r.width > 0);
        const firstRowTop = rows.length ? Math.min(...rows.map((r) => r.top)) : 0;
        const firstRowRight = rows.filter((r) => Math.abs(r.top - firstRowTop) < 2).reduce((m, r) => Math.max(m, r.right), originX);

        c.font = font;
        let drop = 0;
        const last = lineEls[lineEls.length - 1];
        for (const { ch, rect, el } of charRects(last)) {
          // Any letter that dips below the baseline (g, y, the tail of a Q…)
          // where the line underneath runs.
          if (ch === ' ' || rect.left > firstRowRight + 4) continue;
          c.font = fontOf(el).font;
          const d = c.measureText(ch).actualBoundingBoxDescent;
          if (d > fs * 0.03) drop = Math.max(drop, d);
        }
        c.font = font;
        const gap = Math.min(16, Math.max(8, fs * 0.045));
        // Line box bottom sits (lh - baseline) below the baseline.
        h.style.marginBottom = `${drop + gap - pInkTop - (lh - baseline)}px`;
      }
    };

    const run = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        settle();
        // Size depends on --rh-w, positions on size: settle once more at the final size.
        settle();
        root.classList.add('rh--ready');
      });
    };

    run();
    document.fonts?.ready.then(run);
    const ro = new ResizeObserver(run);
    if (root.parentElement) ro.observe(root.parentElement);
    window.addEventListener('resize', run);
    return () => {
      cancelAnimationFrame(frame);
      ro.disconnect();
      window.removeEventListener('resize', run);
    };
  }, [title, lede, kicker, labelAfter, labelFirstGap]);

  return (
    <div
      ref={rootRef}
      className={`rh rh--${place}${className ? ` ${className}` : ''}`}
      style={{ ['--rh-w' as string]: estimate.toFixed(3), ...(maxSize ? { ['--rh-max' as string]: maxSize } : null), ...style }}
    >
      <div className="rh__title">
        {kicker && (
          <span ref={kickerRef} className="riot-kicker rh__kicker" style={kickerStyle}>
            {kicker}
          </span>
        )}
        <h2 ref={titleRef} className="riot-display rh__h" style={{ color }}>
          {titleLines.map((line, i) => (
            <span key={i} className="rh__line">
              {line}
            </span>
          ))}
        </h2>
      </div>
      {lede && (
        <p ref={ledeRef} className="riot-lede rh__lede" style={ledeStyle}>
          {lede}
        </p>
      )}
    </div>
  );
}
