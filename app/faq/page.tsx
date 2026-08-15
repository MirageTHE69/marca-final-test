import type { Metadata } from 'next';
import Link from 'next/link';
import PageNav from '@/components/PageNav';
import { faqs, type FaqBlock } from '@/content-lib/faqs';

export const metadata: Metadata = {
  title: 'FAQ — Marca Creatives',
  description: 'How we work, what we deliver, how long results take, and how to start — the questions founders ask us most.',
};

function AnswerBlock({ block }: { block: FaqBlock }) {
  if (block.kind === 'p') {
    return (
      <p style={{ margin: 0, fontSize: 'clamp(14px,1.05vw,17px)', lineHeight: 1.7, color: '#A7B2C4' }}>
        {block.text}
      </p>
    );
  }

  if (block.kind === 'sub') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 5, paddingLeft: 16, borderLeft: '2px solid rgba(62,109,255,.4)' }}>
        <span style={{ fontSize: 'clamp(14px,1.1vw,17px)', fontWeight: 600, letterSpacing: '-.01em', color: '#F2F4F8' }}>
          {block.title}
        </span>
        <p style={{ margin: 0, fontSize: 'clamp(13px,1vw,16px)', lineHeight: 1.65, color: '#A7B2C4' }}>{block.text}</p>
      </div>
    );
  }

  const Tag = block.ordered ? 'ol' : 'ul';
  return (
    <Tag style={{ margin: 0, paddingLeft: block.ordered ? 22 : 0, display: 'flex', flexDirection: 'column', gap: 8, listStyle: block.ordered ? 'decimal' : 'none' }}>
      {block.items.map((item) => (
        <li
          key={item}
          style={{
            display: block.ordered ? 'list-item' : 'flex',
            gap: 12,
            fontSize: 'clamp(13px,1vw,16px)',
            lineHeight: 1.65,
            color: '#B6C6E4',
          }}
        >
          {!block.ordered && <span aria-hidden="true" style={{ color: 'var(--accent)', flexShrink: 0 }}>—</span>}
          <span>{item}</span>
        </li>
      ))}
    </Tag>
  );
}

export default function FaqPage() {
  return (
    <main>
      <PageNav />

      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 16,
          padding: 'clamp(70px,11vh,140px) clamp(24px,6vw,60px) clamp(30px,4vh,48px)',
          textAlign: 'center',
        }}
      >
        <span style={{ fontSize: 11, letterSpacing: '.3em', textTransform: 'uppercase', color: 'var(--accent)' }}>FAQ</span>
        <h1 style={{ margin: 0, maxWidth: '20ch', fontSize: 'clamp(30px,3.8vw,58px)', fontWeight: 700, letterSpacing: '-.04em', lineHeight: 1.02 }}>
          Everything you want to <span style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: 'italic', fontWeight: 400 }}>ask us.</span>
        </h1>
        <p style={{ margin: 0, maxWidth: '56ch', fontSize: 'clamp(14px,1.05vw,17px)', lineHeight: 1.65, color: '#A7B2C4' }}>
          How we work, what we deliver, and what to expect once we start. Still unsure about something? Ask us directly.
        </p>
      </section>

      <section style={{ maxWidth: 900, margin: '0 auto', padding: '0 clamp(24px,6vw,60px) clamp(60px,8vh,100px)' }}>
        {faqs.map((faq, i) => (
          <details
            key={faq.question}
            className="faq-item"
            open={i === 0}
            style={{ borderBottom: '1px solid rgba(242,244,248,.1)' }}
          >
            <summary
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 'clamp(14px,2vw,28px)',
                padding: 'clamp(20px,2.2vw,30px) 0',
                color: '#F2F4F8',
              }}
            >
              <span style={{ fontSize: 11, letterSpacing: '.14em', color: '#55627A', paddingTop: '.45em', flexShrink: 0 }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <span style={{ flex: 1, fontSize: 'clamp(17px,1.7vw,25px)', fontWeight: 600, letterSpacing: '-.025em', lineHeight: 1.3 }}>
                {faq.question}
              </span>
              <span
                className="faq-icon"
                aria-hidden="true"
                style={{
                  flexShrink: 0,
                  fontSize: 22,
                  lineHeight: 1,
                  color: 'var(--accent)',
                  transition: 'transform 300ms cubic-bezier(.2,.7,.2,1)',
                  paddingTop: '.15em',
                }}
              >
                +
              </span>
            </summary>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 14,
                padding: '0 0 clamp(24px,2.6vw,34px)',
                paddingLeft: 'clamp(30px,4vw,58px)',
                maxWidth: '68ch',
              }}
            >
              {faq.answer.map((block, bi) => (
                <AnswerBlock key={bi} block={block} />
              ))}
            </div>
          </details>
        ))}
      </section>

      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 22,
          padding: 'clamp(70px,10vh,120px) clamp(24px,6vw,60px) clamp(90px,13vh,160px)',
          borderTop: '1px solid rgba(242,244,248,.08)',
          textAlign: 'center',
        }}
      >
        <h2 style={{ margin: 0, maxWidth: '24ch', fontSize: 'clamp(28px,3.4vw,54px)', fontWeight: 700, letterSpacing: '-.038em', lineHeight: 1.04 }}>
          Still have <span style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: 'italic', fontWeight: 400 }}>a question?</span>
        </h2>
        <Link href="/#contact" className="btn-outline">
          Talk to us <span>→</span>
        </Link>
      </section>
    </main>
  );
}
