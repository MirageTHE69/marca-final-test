'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { filters, portfolioItems, type PortfolioItem } from './portfolioItems';

function PortfolioCard({ item, delay }: { item: PortfolioItem; delay: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.preload = 'metadata';
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { rootMargin: '10% 0px' }
    );
    io.observe(video);
    return () => io.disconnect();
  }, []);

  return (
    <article
      className="pf-card"
      style={{
        gridColumn: item.span2 ? 'span 2' : undefined,
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
        animation: 'pf-in 520ms cubic-bezier(.16,1,.3,1) both',
        animationDelay: `${delay}ms`,
      }}
      onMouseEnter={() => videoRef.current?.play().catch(() => {})}
      onMouseLeave={() => videoRef.current?.pause()}
    >
      <div
        className="pf-media"
        style={{
          position: 'relative',
          aspectRatio: item.aspectRatio,
          overflow: 'hidden',
          borderRadius: 14,
          background: item.span2 ? '#0B1220' : '#0C1526',
          border: '1px solid rgba(242,244,248,.08)',
        }}
      >
        {item.type === 'video' ? (
          <video
            ref={videoRef}
            src={item.src}
            muted
            loop
            playsInline
            preload="none"
            style={{ position: 'absolute', inset: 0, display: 'block', width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          <Image src={item.src} alt={item.title} fill sizes="(max-width: 700px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
        )}
        {item.duration && (
          <span
            style={{
              position: 'absolute',
              bottom: 14,
              right: 14,
              padding: '6px 12px',
              borderRadius: 999,
              background: 'rgba(8,9,13,.62)',
              backdropFilter: 'blur(6px)',
              fontSize: 9,
              letterSpacing: '.2em',
              textTransform: 'uppercase',
              color: '#D8DEEA',
            }}
          >
            {item.duration}
          </span>
        )}
      </div>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 14 }}>
        <span style={{ fontSize: 16, fontWeight: 600, letterSpacing: '-.015em' }}>{item.title}</span>
        <span style={{ fontSize: 9, letterSpacing: '.2em', textTransform: 'uppercase', color: '#6C7A92', whiteSpace: 'nowrap' }}>{item.label}</span>
      </div>
    </article>
  );
}

export default function PortfolioGrid() {
  const [active, setActive] = useState<(typeof filters)[number]['key']>('all');

  const visible = active === 'all' ? portfolioItems : portfolioItems.filter((item) => item.category === active);
  const activeFilter = filters.find((f) => f.key === active)!;

  return (
    <>
      <div
        style={{
          position: 'sticky',
          top: 68,
          zIndex: 30,
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 10,
          padding: '18px clamp(24px,6vw,60px)',
          background: 'rgba(5,7,11,.9)',
          backdropFilter: 'blur(12px)',
        }}
      >
        {filters.map((f) => (
          <button
            key={f.key}
            type="button"
            className={`filter-chip${active === f.key ? ' is-active' : ''}`}
            onClick={() => setActive(f.key)}
          >
            {f.label}
          </button>
        ))}
        <span style={{ paddingLeft: 8, fontSize: 10, letterSpacing: '.18em', textTransform: 'uppercase', color: '#55627A' }}>
          {visible.length} {activeFilter.countLabel}
        </span>
      </div>

      <section style={{ padding: 'clamp(28px,4vh,52px) clamp(24px,6vw,60px) clamp(80px,11vh,140px)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 'clamp(14px,1.5vw,22px)' }}>
          {visible.map((item, i) => (
            <PortfolioCard key={`${active}-${item.id}`} item={item} delay={i * 40} />
          ))}
        </div>
      </section>
    </>
  );
}
