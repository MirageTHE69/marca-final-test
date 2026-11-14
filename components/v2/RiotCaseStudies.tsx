'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

import type { CaseStudy } from '@/components/casestudy/caseStudies';
import type { Home } from '@/payload/payload-types';

import RiotCaseStudyCard from './RiotCaseStudyCard';
import RiotHead from './RiotHead';

/**
 * Featured case studies: a big centred heading, then the cards on a sticky
 * horizontal scroll (the same mechanic as the Process section) — the card
 * row pins while you scroll down and slides sideways in step. The pinned part
 * is exactly as tall as the sideways distance, so the cards move at scroll
 * speed. On phones and short screens it falls back to a row you swipe.
 */
export default function RiotCaseStudies({ data, stories }: { data: Home['caseStudies']; stories: CaseStudy[] }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const sticky = stickyRef.current;
    const track = trackRef.current;
    const bar = barRef.current;
    if (!section || !sticky || !track) return;

    const apply = () => {
      const pinned = window.innerWidth >= 860 && window.innerHeight >= 680;
      if (!pinned) {
        section.style.height = 'auto';
        sticky.style.position = 'static';
        sticky.style.height = 'auto';
        track.style.overflowX = 'auto';
        track.style.transform = 'none';
        if (bar) bar.style.width = '0%';
        return;
      }
      track.style.overflowX = 'visible';
      sticky.style.position = 'sticky';
      sticky.style.height = '100vh';
      const distance = Math.max(0, track.scrollWidth - window.innerWidth);
      section.style.height = `${window.innerHeight + distance}px`;
      const rect = section.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, -rect.top / (distance || 1)));
      track.style.transform = `translate3d(${-distance * p}px,0,0)`;
      if (bar) bar.style.width = (p * 100).toFixed(2) + '%';
    };

    let queued = false;
    const onScroll = () => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(() => {
        queued = false;
        apply();
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    apply();
    // Card images change the row's width as they load.
    const ro = new ResizeObserver(onScroll);
    ro.observe(track);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      ro.disconnect();
    };
  }, []);

  // Two lines like the other big headings: the last word of the title moves
  // down to join the italic ending ("Proof, told / as a story.").
  const words = (data.title ?? '').trim().split(/\s+/).filter(Boolean);
  const accent = data.titleAccent ? (
    // lineHeight 0: the serif's taller line box must not push the two lines apart.
    <span style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: 'italic', fontWeight: 400, letterSpacing: '-.01em', lineHeight: 0 }}>{data.titleAccent}</span>
  ) : null;
  const titleLines: React.ReactNode[] =
    words.length > 1 && accent
      ? [words.slice(0, -1).join(' '), <>{words[words.length - 1]} {accent}</>]
      : [<>{data.title}{accent && <> {accent}</>}</>];

  return (
    <section id="case-studies" className="riot-black" style={{ position: 'relative' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'clamp(18px,2.6vh,28px)',
          padding: 'clamp(56px,9vh,120px) clamp(18px,4vw,44px) 0',
        }}
      >
        <RiotHead kicker={data.kicker} lines={titleLines} color="var(--r-h-yellow)" />
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: 18 }}>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.16em', textTransform: 'uppercase', color: 'rgba(224,225,207,.6)' }}>
            Scroll to explore →
          </span>
          <Link href="/case-studies" className="riot-btn riot-btn-yellow" style={{ padding: '11px 22px', fontSize: 11 }}>
            {data.buttonLabel || 'All studies →'}
          </Link>
        </div>
      </div>

      {/* The pinned card row. */}
      <div ref={sectionRef} style={{ position: 'relative' }}>
      <div
        ref={stickyRef}
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          // "safe": on short screens extra height runs off the bottom, never up under the menu.
          justifyContent: 'safe center',
          gap: 'clamp(20px,3.5vh,44px)',
          padding: 'clamp(70px,9vh,96px) 0 clamp(28px,4vh,48px)',
          boxSizing: 'border-box',
        }}
      >
        <div
          ref={trackRef}
          style={{
            display: 'flex',
            alignItems: 'stretch',
            gap: 'clamp(16px,1.8vw,26px)',
            padding: '0 clamp(18px,4vw,44px)',
            willChange: 'transform',
            scrollSnapType: 'x mandatory',
          }}
        >
          {stories.map((story, i) => (
            <RiotCaseStudyCard key={story.title} story={story} index={i} variant="deck" />
          ))}

          <article
            className="riot-card"
            style={{
              flex: '0 0 clamp(280px, 30vw, 420px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              gap: 20,
              padding: 'clamp(30px,3.5vw,52px) clamp(22px,2.6vw,40px)',
              background: 'var(--r-yellow)',
              color: 'var(--r-black)',
              scrollSnapAlign: 'center',
            }}
          >
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.22em', textTransform: 'uppercase' }}>{data.endKicker}</span>
            <h3 className="riot-display" style={{ fontSize: 'clamp(24px,2.6vw,38px)' }}>{data.endTitle}</h3>
            <Link href="/case-studies" className="riot-btn riot-btn-cream" style={{ padding: '14px 28px' }}>
              {data.endButton || 'Explore full case studies →'}
            </Link>
          </article>
        </div>

        <div style={{ margin: '0 clamp(18px,4vw,44px)', height: 3, background: 'rgba(224,225,207,.18)' }}>
          <div ref={barRef} style={{ height: 3, width: '0%', background: 'var(--r-yellow)' }} />
        </div>
      </div>
      </div>
    </section>
  );
}
