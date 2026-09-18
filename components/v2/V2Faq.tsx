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
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 20 }}>
        <h2 className="v2-display" style={{ fontSize: 'clamp(30px,5vw,78px)' }}>
          Questions, <span className="v2-dim-dark">answered</span>
        </h2>
        <a href="#contact" className="v2-micro" style={{ color: 'var(--c-ink)', textDecoration: 'underline', textUnderlineOffset: 5 }}>
          Still unsure? Book a call ↗
        </a>
      </div>

      <div style={{ maxWidth: 900, marginTop: 'clamp(28px,4.5vh,50px)' }}>
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
    </section>
  );
}
