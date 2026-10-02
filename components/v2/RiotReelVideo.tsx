'use client';

import { useEffect, useRef } from 'react';

interface Props {
  src: string;
  poster?: string;
}

/**
 * Reel that only downloads and plays while it is on screen. A rail of
 * twenty-odd autoplaying files would otherwise all start loading with the
 * page; here each one shows its poster until it scrolls into view.
 */
export default function RiotReelVideo({ src, poster }: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    if (typeof IntersectionObserver === 'undefined') {
      video.play().catch(() => {});
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.35 },
    );

    io.observe(video);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      preload="none"
      muted
      loop
      playsInline
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
    />
  );
}
