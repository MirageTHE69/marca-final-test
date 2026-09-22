'use client';

import { useState } from 'react';
import { faqs, type FaqBlock } from '@/content-lib/faqs';

/* Answers only render on the open (yellow) row, so they need a darker
   tone than --r-muted to stay readable against it. */
const ANSWER_INK = 'rgba(18,18,18,.82)';

function AnswerBlock({ block }: { block: FaqBlock }) {
  if (block.kind === 'p') {
    return <p style={{ margin: '0 0 10px 0', fontSize: 14, lineHeight: 1.7, color: ANSWER_INK }}>{block.text}</p>;
  }
  if (block.kind === 'list') {
    const ListTag = block.ordered ? 'ol' : 'ul';
    return (
      <ListTag style={{ margin: '0 0 12px 0', paddingLeft: 22, fontSize: 14, lineHeight: 1.8, color: 'var(--r-ink)' }}>
        {block.items.map((item, idx) => (
          <li key={idx} style={{ marginBottom: 4 }}>{item}</li>
        ))}
      </ListTag>
    );
  }
  if (block.kind === 'sub') {
    return (
      <div style={{ margin: '0 0 14px 0', display: 'flex', flexDirection: 'column', gap: 3 }}>
        <h4 style={{ margin: 0, fontSize: 14, fontWeight: 700, color: 'var(--r-ink)' }}>{block.title}</h4>
        <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.65, color: ANSWER_INK }}>{block.text}</p>
      </div>
    );
  }
  return null;
}

export default function RiotFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const toggle = (idx: number) => setOpenIndex(openIndex === idx ? null : idx);

  return (
    <section id="faq" className="riot-olive" style={{ position: 'relative', padding: 'clamp(60px,10vh,140px) clamp(18px,4vw,44px)', borderTop: '2px solid var(--r-black)' }}>
      <div style={{ maxWidth: 880, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 'clamp(30px,4.5vh,50px)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 8 }}>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.24em', textTransform: 'uppercase', color: 'var(--r-black)' }}>
            FAQ
          </span>
          <h2 className="riot-display" style={{ fontSize: 'clamp(34px,5.8vw,86px)', color: 'var(--r-h-blue)' }}>Frequently Asked Questions</h2>
          <p style={{ margin: 0, maxWidth: '58ch', fontSize: 'clamp(14px,1.05vw,17px)', lineHeight: 1.65, color: 'rgba(18,18,18,.75)' }}>
            Everything you need to know about how we work, what we deliver, and what to expect when partnering with
            MARCA Creatives.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                style={{
                  border: '2px solid var(--r-black)',
                  borderRadius: 16,
                  background: isOpen ? 'var(--r-yellow)' : 'var(--r-cream)',
                  overflow: 'hidden',
                  transition: 'background 260ms ease',
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
                    gap: 16,
                    padding: 'clamp(16px,2vh,22px) clamp(18px,2.2vw,26px)',
                    background: 'none',
                    border: 'none',
                    color: 'var(--r-black)',
                    textAlign: 'left',
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                  }}
                >
                  <span style={{ fontSize: 'clamp(15px,1.15vw,18px)', fontWeight: 700, letterSpacing: '-.015em', lineHeight: 1.3 }}>
                    {faq.question}
                  </span>
                  <span
                    style={{
                      flexShrink: 0,
                      width: 28,
                      height: 28,
                      borderRadius: 999,
                      border: '2px solid var(--r-black)',
                      background: isOpen ? 'var(--r-black)' : 'transparent',
                      color: isOpen ? 'var(--r-yellow)' : 'var(--r-black)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 16,
                      fontWeight: 700,
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                      transition: 'transform 300ms cubic-bezier(.2,.8,.2,1), background 260ms, color 260ms',
                    }}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div style={{ padding: '0 clamp(18px,2.2vw,26px) clamp(18px,2.2vh,24px)' }}>
                    <div style={{ height: 2, background: 'var(--r-black)', opacity: .25, marginBottom: 15 }} />
                    {faq.answer.map((block, bi) => (
                      <AnswerBlock key={bi} block={block} />
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: 15,
            padding: 'clamp(26px,3vh,40px)',
            borderRadius: 20,
            border: '2px solid var(--r-black)',
            background: 'var(--r-cream)',
          }}
        >
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--r-muted)' }}>
            Have a different question?
          </span>
          <h3 className="riot-display" style={{ fontSize: 'clamp(19px,1.9vw,27px)', maxWidth: '26ch' }}>
            Let’s talk through your vision directly on a call.
          </h3>
          <a href="#contact" className="riot-btn riot-btn-yellow">
            Book a free discovery call →
          </a>
        </div>
      </div>
    </section>
  );
}
