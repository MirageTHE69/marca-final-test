'use client';

import { useEffect } from 'react';

export function useCinemaScroll() {
  useEffect(() => {
    const narrow = () => window.innerWidth < 860;
    if (narrow()) {
      cinemaFlat();
      return;
    }

    const d = 1; // sceneDepth
    const clamp = (t: number) => (t < 0 ? 0 : t > 1 ? 1 : t);
    const lerp = (x: number, y: number, t: number) => x + (y - x) * t;
    const outQ = (t: number) => 1 - Math.pow(1 - t, 3);
    const io2 = (t: number) => (t < .5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
    const io3 = (t: number) => (t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
    const H = () => window.innerHeight;

    interface SlotPart {
      trig: Element;
      s: number;
      e: number;
      s0: number;
      e0: number;
      get: (t: number) => { y: number; sc: number; op: number; bl: number };
      cur: number | null;
    }
    interface Slot { el: HTMLElement; parts: SlotPart[]; last: string; }

    const slots = new Map<HTMLElement, Slot>();
    const feed = (el: HTMLElement | null, trig: Element | null, s: number, e: number, get: SlotPart['get']) => {
      if (!el || !trig) return;
      let slot = slots.get(el);
      if (!slot) { slot = { el, parts: [], last: '' }; slots.set(el, slot); }
      slot.parts.push({ trig, s, e, s0: s, e0: e, get, cur: null });
    };

    const scenes = Array.from(document.querySelectorAll<HTMLElement>('[data-scene]'));
    const outOf = (sc: HTMLElement) => sc.querySelector<HTMLElement>('[data-chapter-body]') || sc;

    scenes.forEach((sc, i) => {
      const cap = sc.querySelector<HTMLElement>('[data-chapter-title-inner]');
      const bodyEl = sc.querySelector<HTMLElement>('[data-chapter-body]');
      const prev = i ? outOf(scenes[i - 1]) : null;
      const rise = bodyEl || sc;

      if (prev) {
        (prev as HTMLElement).style.transformOrigin = 'center bottom';
        const endOp = Math.max(.2, 1 - .66 * d);
        feed(prev, sc, .88, 0, t => { const e = io2(t); return { y: lerp(0, -.075 * d * H(), e), sc: lerp(1, 1 - .07 * d, e), op: lerp(1, endOp, e), bl: lerp(0, 6 * d, e) }; });
      }

      if (i > 0) {
        rise.style.transformOrigin = 'center top';
        feed(rise, bodyEl || sc, bodyEl ? 1 : .88, 0, t => { const e = outQ(t); return { y: lerp(.14 * d * H(), 0, e), sc: lerp(1 - .045 * d, 1, e), op: lerp(.2, 1, e), bl: 0 }; });
      }

      if (cap && bodyEl) {
        cap.style.transformOrigin = 'center center';
        feed(cap, bodyEl, .95, .12, t => { const e = io3(t); return { y: lerp(0, -.1 * d * H(), e), sc: lerp(1, 1 - .09 * d, e), op: lerp(1, 0, e), bl: lerp(0, 11 * d, e) }; });
      }

      if (cap) {
        const bits = Array.from(cap.querySelectorAll<HTMLElement>('[data-reveal]'));
        const st = .22, span = 1 + (bits.length - 1) * st;
        bits.forEach((el, k) => {
          feed(el, sc, .8, .2, t => { const e = outQ(clamp(t * span - k * st)); return { y: lerp(58, 0, e), sc: 1, op: e, bl: lerp(9, 0, e) }; });
        });
      }
    });

    Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
      .filter(el => !el.closest('[data-chapter-title-inner]'))
      .forEach(el => {
        feed(el, el, .95, .66, t => { const e = outQ(t); return { y: lerp(54, 0, e), sc: 1, op: e, bl: lerp(7, 0, e) }; });
      });

    const list = Array.from(slots.values());

    const normalize = () => {
      const vh = H();
      const top = window.scrollY || document.documentElement.scrollTop || 0;
      const room = Math.max(0, document.documentElement.scrollHeight - vh);
      list.forEach(sl => sl.parts.forEach(pt => {
        const minTop = pt.trig.getBoundingClientRect().top + top - room;
        const target = vh * pt.e0;
        pt.e = minTop > target ? Math.min(pt.s0 - .05, (minTop + 8) / vh) : pt.e0;
      }));
    };
    normalize();

    const step = (smooth: boolean) => {
      const vh = H();
      const tops = new Map<Element, number>();
      list.forEach(sl => sl.parts.forEach(pt => { if (!tops.has(pt.trig)) tops.set(pt.trig, pt.trig.getBoundingClientRect().top); }));
      for (const sl of list) {
        let y = 0, scl = 1, op = 1, bl = 0;
        for (const pt of sl.parts) {
          const sp = vh * pt.s, ep = vh * pt.e;
          const t = clamp((sp - (tops.get(pt.trig) ?? 0)) / ((sp - ep) || 1));
          if (!smooth || pt.cur === null) pt.cur = t;
          else {
            pt.cur += (t - pt.cur) * .17;
            if (Math.abs(t - pt.cur) < .001) pt.cur = t;
          }
          const v = pt.get(pt.cur);
          y += v.y; scl *= v.sc; op *= v.op; bl = Math.max(bl, v.bl);
        }
        const tf = `translate3d(0,${y.toFixed(2)}px,0) scale(${scl.toFixed(4)})`;
        const key = tf + '|' + op.toFixed(3) + '|' + bl.toFixed(2);
        if (key !== sl.last) {
          sl.last = key;
          sl.el.style.transform = tf;
          sl.el.style.opacity = op.toFixed(3);
          sl.el.style.filter = bl > .04 ? `blur(${bl.toFixed(2)}px)` : 'none';
        }
      }
    };

    step(false);

    let lastStep = Date.now();
    const run = (smooth: boolean) => { lastStep = Date.now(); step(smooth); };
    let cineRaf: number;
    const drive = () => { run(true); cineRaf = requestAnimationFrame(drive); };
    drive();

    let queued = false;
    const onCineScroll = () => {
      if (queued) return;
      queued = true;
      const go = () => { if (!queued) return; queued = false; run(true); };
      const id = requestAnimationFrame(go);
      setTimeout(() => { if (queued) { cancelAnimationFrame(id); go(); } }, 50);
    };
    window.addEventListener('scroll', onCineScroll, { passive: true });

    const onVis = () => { if (!document.hidden) { normalize(); run(false); } };
    document.addEventListener('visibilitychange', onVis);
    const watchdog = setInterval(() => { if (Date.now() - lastStep > 900) run(false); }, 700);

    let rt: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(rt);
      rt = setTimeout(() => {
        if (narrow()) {
          cancelAnimationFrame(cineRaf);
          clearInterval(watchdog);
          window.removeEventListener('scroll', onCineScroll);
          cinemaFlat();
          return;
        }
        normalize();
        step(false);
      }, 200);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(cineRaf);
      clearInterval(watchdog);
      window.removeEventListener('scroll', onCineScroll);
      document.removeEventListener('visibilitychange', onVis);
      window.removeEventListener('resize', onResize);
    };
  }, []);
}

function cinemaFlat() {
  document.querySelectorAll<HTMLElement>('[data-scene]').forEach(s => { s.style.marginTop = '0px'; });
  document.querySelectorAll<HTMLElement>('[data-chapter-title]').forEach(t => {
    t.style.position = 'relative';
    t.style.height = 'auto';
    t.style.padding = 'clamp(80px,12vh,150px) clamp(24px,6vw,60px) 0';
  });
  document.querySelectorAll<HTMLElement>('[data-chapter-body]').forEach(b => { b.style.marginTop = '0px'; });
  ['[data-chapter-title-inner]', '[data-chapter-body]', '[data-reveal]'].forEach(sel => {
    document.querySelectorAll<HTMLElement>(sel).forEach(el => {
      el.style.transform = '';
      el.style.opacity = '';
      el.style.filter = '';
    });
  });
}
