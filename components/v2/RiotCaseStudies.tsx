'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import RiotCaseStudyCard from './RiotCaseStudyCard';
import { featuredCaseStudies } from '@/components/casestudy/caseStudies';

/**
 * Vertical scroll deck: each card sticks just below the nav and the next
 * one slides up over it, so the set stacks as you scroll. Cards also fade
 * up as they enter. No horizontal scrolling.
 */
export default function RiotCaseStudies() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const items = Array.from(root.querySelectorAll<HTMLElement>('.riot-reveal'));
    if (!items.length) return;

    if (typeof IntersectionObserver === 'undefined' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      items.forEach((el) => el.classList.add('is-in'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.12 },
    );

    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section
      id="case-studies"
      ref={rootRef}
      className="riot-black"
      style={{ padding: 'clamp(56px,9vh,120px) clamp(18px,4vw,44px) clamp(70px,11vh,150px)' }}
    >
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          gap: 18,
          maxWidth: 1240,
          margin: '0 auto clamp(32px,5vh,60px)',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.24em', textTransform: 'uppercase', color: 'var(--r-yellow)' }}>
            Case Studies
          </span>
          <h2 className="riot-display" style={{ fontSize: 'clamp(34px,5.4vw,82px)', color: 'var(--r-h-yellow)' }}>
            Proof, told as{' '}
            <span style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: 'italic', fontWeight: 400, letterSpacing: '-.01em' }}>
              a story.
            </span>
          </h2>
        </div>
        <Link href="/case-studies" className="riot-btn riot-btn-yellow" style={{ padding: '11px 22px', fontSize: 11 }}>
          All studies →
        </Link>
      </div>

      <div className="riot-stack" style={{ maxWidth: 1240, margin: '0 auto' }}>
        {featuredCaseStudies.map((story, i) => (
          <div
            key={story.title}
            className="riot-stack-item riot-reveal"
            style={{ top: `calc(var(--riot-stack-top) + ${i * 14}px)`, zIndex: i + 1 }}
          >
            <RiotCaseStudyCard story={story} index={i} />
          </div>
        ))}

        <div
          className="riot-stack-item riot-reveal"
          style={{ top: `calc(var(--riot-stack-top) + ${featuredCaseStudies.length * 14}px)`, zIndex: featuredCaseStudies.length + 1 }}
        >
          <article
            className="riot-card"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              gap: 20,
              padding: 'clamp(34px,4.5vw,64px) clamp(24px,3vw,48px)',
              background: 'var(--r-yellow)',
              color: 'var(--r-black)',
            }}
          >
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.22em', textTransform: 'uppercase' }}>Ready for results?</span>
            <h3 className="riot-display" style={{ fontSize: 'clamp(24px,2.8vw,42px)', maxWidth: '22ch' }}>
              Ready to turn your story into authority?
            </h3>
            <Link href="/case-studies" className="riot-btn riot-btn-cream" style={{ padding: '14px 28px' }}>
              Explore full case studies →
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}
