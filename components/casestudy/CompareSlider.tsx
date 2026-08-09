'use client';

import { useRef, type PointerEvent } from 'react';
import MediaSlot from '@/components/MediaSlot';

interface CompareSliderProps {
  beforeSrc?: string;
  afterSrc?: string;
  beforePlaceholder: string;
  afterPlaceholder: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export default function CompareSlider({
  beforeSrc,
  afterSrc,
  beforePlaceholder,
  afterPlaceholder,
  beforeLabel = 'Before',
  afterLabel = 'After',
}: CompareSliderProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const afterRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);

  const setSplit = (clientX: number) => {
    const wrap = wrapRef.current;
    const after = afterRef.current;
    const handle = handleRef.current;
    if (!wrap || !after || !handle) return;
    const r = wrap.getBoundingClientRect();
    const split = Math.min(96, Math.max(4, ((clientX - r.left) / r.width) * 100));
    after.style.clipPath = `inset(0 0 0 ${split.toFixed(2)}%)`;
    handle.style.left = `${split.toFixed(2)}%`;
  };

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    setSplit(e.clientX);
  };
  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.buttons !== 1) return;
    setSplit(e.clientX);
  };

  return (
    <div
      ref={wrapRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      style={{
        position: 'relative',
        aspectRatio: '16 / 9',
        borderRadius: 14,
        overflow: 'hidden',
        border: '1px solid rgba(245,246,248,.1)',
        cursor: 'ew-resize',
        touchAction: 'none',
        background: '#0A0F1A',
      }}
    >
      <MediaSlot src={beforeSrc} placeholder={beforePlaceholder} />
      <div ref={afterRef} style={{ position: 'absolute', inset: 0, clipPath: 'inset(0 0 0 50%)' }}>
        <MediaSlot src={afterSrc} placeholder={afterPlaceholder} />
      </div>
      <span
        style={{
          position: 'absolute',
          top: 14,
          left: 14,
          padding: '6px 14px',
          borderRadius: 999,
          fontSize: 9,
          letterSpacing: '.2em',
          textTransform: 'uppercase',
          background: 'rgba(8,9,13,.6)',
          border: '1px solid rgba(245,246,248,.2)',
          pointerEvents: 'none',
        }}
      >
        {beforeLabel}
      </span>
      <span
        style={{
          position: 'absolute',
          top: 14,
          right: 14,
          padding: '6px 14px',
          borderRadius: 999,
          fontSize: 9,
          letterSpacing: '.2em',
          textTransform: 'uppercase',
          background: 'rgba(62,109,255,.25)',
          border: '1px solid var(--accent)',
          pointerEvents: 'none',
        }}
      >
        {afterLabel}
      </span>
      <div ref={handleRef} style={{ position: 'absolute', top: 0, bottom: 0, left: '50%', width: 2, background: '#F5F6F8', pointerEvents: 'none' }}>
        <span
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            width: 38,
            height: 38,
            borderRadius: '50%',
            background: '#F5F6F8',
            color: '#08090D',
            display: 'grid',
            placeItems: 'center',
            fontSize: 12,
          }}
        >
          ↔
        </span>
      </div>
    </div>
  );
}
