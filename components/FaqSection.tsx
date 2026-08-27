'use client';

import { useState } from 'react';
import { faqs, type FaqBlock } from '@/content-lib/faqs';

function AnswerBlock({ block }: { block: FaqBlock }) {
  if (block.kind === 'p') {
    return <p style={{ margin: '0 0 10px 0', fontSize: 14, lineHeight: 1.7, color: '#A0B0CC' }}>{block.text}</p>;
  }

  if (block.kind === 'list') {
    const ListTag = block.ordered ? 'ol' : 'ul';
    return (
      <ListTag style={{ margin: '0 0 12px 0', paddingLeft: 22, fontSize: 14, lineHeight: 1.8, color: '#C0D0EA' }}>
        {block.items.map((item, idx) => (
          <li key={idx} style={{ marginBottom: 4 }}>
            {item}
          </li>
        ))}
      </ListTag>
    );
  }

  if (block.kind === 'sub') {
    return (
      <div style={{ margin: '0 0 14px 0', display: 'flex', flexDirection: 'column', gap: 3 }}>
        <h4 style={{ margin: 0, fontSize: 14, fontWeight: 600, color: '#E2E8F0', letterSpacing: '-.01em' }}>
          {block.title}
        </h4>
        <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.65, color: '#8E9FB8' }}>{block.text}</p>
      </div>
    );
  }

  return null;
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      style={{
        position: 'relative',
        zIndex: 5,
        padding: 'clamp(90px, 12vh, 150px) clamp(24px, 6vw, 60px)',
        background: '#04060A',
        borderTop: '1px solid rgba(242, 244, 248, 0.08)',
      }}
    >
      {/* ── Atmospheric Radial Glow ── */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'min(900px, 90vw)',
          height: 380,
          background: 'radial-gradient(ellipse at 50% 0%, rgba(62, 109, 255, 0.12) 0%, rgba(10, 20, 48, 0.04) 60%, transparent 80%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ position: 'relative', maxWidth: 860, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 'clamp(36px, 5vh, 56px)' }}>
        {/* ── Centered Section Header ── */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 14 }}>
          <span style={{ fontSize: 11, letterSpacing: '.3em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 600 }}>
            FAQ
          </span>
          <h2
            style={{
              margin: 0,
              fontSize: 'clamp(32px, 4.2vw, 64px)',
              fontWeight: 700,
              letterSpacing: '-.04em',
              lineHeight: 1.05,
              color: '#F2F4F8',
            }}
          >
            Frequently Asked Questions
          </h2>
          <p
            style={{
              margin: 0,
              maxWidth: '56ch',
              fontSize: 'clamp(14px, 1.05vw, 17px)',
              lineHeight: 1.65,
              color: '#A0B0CC',
            }}
          >
            Everything you need to know about how we work, what we deliver, and what to expect when partnering with MARCA Creatives.
          </p>
        </div>

        {/* ── FAQ Accordion List ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                style={{
                  borderRadius: 16,
                  background: isOpen
                    ? 'radial-gradient(120% 120% at 10% 0%, rgba(18, 42, 94, 0.4) 0%, rgba(8, 14, 28, 0.8) 100%)'
                    : 'rgba(242, 244, 248, 0.02)',
                  border: isOpen ? '1px solid rgba(62, 109, 255, 0.35)' : '1px solid rgba(242, 244, 248, 0.08)',
                  boxShadow: isOpen ? '0 12px 32px -6px rgba(0, 0, 0, 0.65)' : 'none',
                  overflow: 'hidden',
                  transition: 'border-color 300ms ease, background 300ms ease, box-shadow 300ms ease',
                }}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 18,
                    padding: 'clamp(18px, 2.2vh, 24px) clamp(20px, 2.4vw, 28px)',
                    background: 'none',
                    border: 'none',
                    color: isOpen ? '#FFFFFF' : '#E2E8F0',
                    textAlign: 'left',
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                  }}
                >
                  <span style={{ fontSize: 'clamp(15px, 1.15vw, 18px)', fontWeight: 600, letterSpacing: '-.02em', lineHeight: 1.3 }}>
                    {faq.question}
                  </span>
                  <div
                    style={{
                      flexShrink: 0,
                      width: 28,
                      height: 28,
                      borderRadius: 999,
                      background: isOpen ? 'var(--accent)' : 'rgba(255, 255, 255, 0.06)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: isOpen ? '#FFFFFF' : '#8E9FB8',
                      fontSize: 18,
                      fontWeight: 300,
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                      transition: 'transform 300ms cubic-bezier(.2,.8,.2,1), background 300ms ease, color 300ms ease',
                    }}
                  >
                    +
                  </div>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: '0 clamp(20px, 2.4vw, 28px) clamp(20px, 2.4vh, 26px)',
                      animation: 'fadeIn 300ms ease-out',
                    }}
                  >
                    <div style={{ height: 1, background: 'rgba(242, 244, 248, 0.08)', marginBottom: 16 }} />
                    {faq.answer.map((block, bi) => (
                      <AnswerBlock key={bi} block={block} />
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ── Bottom Help CTA ── */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: 16,
            padding: 'clamp(28px, 3vh, 40px)',
            borderRadius: 20,
            background: 'radial-gradient(120% 120% at 50% 0%, rgba(62, 109, 255, 0.15) 0%, rgba(7, 12, 24, 0.8) 100%)',
            border: '1px solid rgba(62, 109, 255, 0.25)',
          }}
        >
          <span style={{ fontSize: 11, letterSpacing: '.24em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 600 }}>
            Have a different question?
          </span>
          <h3 style={{ margin: 0, fontSize: 'clamp(20px, 1.8vw, 26px)', fontWeight: 600, color: '#F2F4F8', letterSpacing: '-.025em' }}>
            Let’s talk through your vision directly on a call.
          </h3>
          <a href="#contact" className="btn-glass-discovery" style={{ padding: '14px 28px', fontSize: 11 }}>
            Book a free discovery call <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
