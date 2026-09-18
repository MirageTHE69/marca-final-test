import { faqs, type FaqBlock } from '@/content-lib/faqs';

function AnswerBlock({ block }: { block: FaqBlock }) {
  if (block.kind === 'p') {
    return <p style={{ margin: '0 0 10px 0', fontSize: 13.5, lineHeight: 1.7, color: 'var(--c-dim-dark)' }}>{block.text}</p>;
  }
  if (block.kind === 'list') {
    const ListTag = block.ordered ? 'ol' : 'ul';
    return (
      <ListTag style={{ margin: '0 0 12px 0', paddingLeft: 20, fontSize: 13.5, lineHeight: 1.8, color: 'var(--c-dim-dark)' }}>
        {block.items.map((item, i) => (
          <li key={i} style={{ marginBottom: 3 }}>{item}</li>
        ))}
      </ListTag>
    );
  }
  if (block.kind === 'sub') {
    return (
      <div style={{ margin: '0 0 14px 0', display: 'flex', flexDirection: 'column', gap: 3 }}>
        <h4 style={{ margin: 0, fontSize: 13.5, fontWeight: 700, color: 'var(--c-ink)' }}>{block.title}</h4>
        <p style={{ margin: 0, fontSize: 13, lineHeight: 1.65, color: 'var(--c-dim-dark)' }}>{block.text}</p>
      </div>
    );
  }
  return null;
}

export default function V2Faq() {
  return (
    <section id="faq" className="v2-paper" style={{ padding: 'clamp(46px,7vh,90px) clamp(18px,4vw,44px) clamp(56px,9vh,110px)' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 14 }}>
        <span className="v2-micro" style={{ color: 'var(--c-red)' }}>FAQ</span>
        <h2 className="v2-display" style={{ fontSize: 'clamp(28px,4.6vw,70px)', maxWidth: '20ch' }}>
          Frequently Asked <span className="v2-dim-dark">Questions</span>
        </h2>
        <p style={{ margin: 0, maxWidth: '58ch', fontSize: 13.5, lineHeight: 1.7, color: 'var(--c-dim-dark)' }}>
          Everything you need to know about how we work, what we deliver, and what to expect when partnering with
          MARCA Creatives.
        </p>
      </div>

      <div style={{ maxWidth: 900, margin: 'clamp(28px,4.5vh,50px) auto 0' }}>
        {faqs.map((faq) => (
          <details key={faq.question} className="v2-faq">
            <summary
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 18,
                padding: '18px 0',
                fontSize: 'clamp(14px,1.2vw,17px)',
                fontWeight: 600,
                letterSpacing: '-.01em',
              }}
            >
              {faq.question}
              <span
                className="v2-faq-icon"
                style={{
                  flexShrink: 0,
                  width: 26,
                  height: 26,
                  borderRadius: 999,
                  border: '1px solid rgba(28,5,8,.3)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 15,
                  transition: 'transform 260ms, background 260ms, color 260ms, border-color 260ms',
                }}
              >
                +
              </span>
            </summary>
            <div style={{ padding: '0 0 20px', maxWidth: '72ch' }}>
              {faq.answer.map((block, i) => (
                <AnswerBlock key={i} block={block} />
              ))}
            </div>
          </details>
        ))}
      </div>

      {/* Closing helper block, as on the live landing page */}
      <div
        style={{
          maxWidth: 900,
          margin: 'clamp(30px,4.5vh,50px) auto 0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: 16,
          padding: 'clamp(26px,3vw,40px)',
          borderRadius: 20,
          background: 'var(--c-red)',
          color: '#FFFFFF',
        }}
      >
        <span className="v2-micro" style={{ opacity: 0.85 }}>Have a different question?</span>
        <h3 className="v2-display" style={{ fontSize: 'clamp(19px,2vw,28px)', maxWidth: '24ch' }}>
          Let’s talk through your vision directly on a call.
        </h3>
        <a href="#contact" className="v2-cta" style={{ background: '#FFFFFF', borderColor: '#FFFFFF', color: 'var(--c-red)' }}>
          Book a free discovery call ↗
        </a>
      </div>
    </section>
  );
}
