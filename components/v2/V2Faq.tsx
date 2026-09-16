import { faqs, type FaqBlock } from '@/content-lib/faqs';

function AnswerBlock({ block }: { block: FaqBlock }) {
  if (block.kind === 'p') {
    return <p style={{ margin: '0 0 10px 0', fontSize: 14, lineHeight: 1.65 }}>{block.text}</p>;
  }
  if (block.kind === 'list') {
    const ListTag = block.ordered ? 'ol' : 'ul';
    return (
      <ListTag style={{ margin: '0 0 12px 0', paddingLeft: 22, fontSize: 14, lineHeight: 1.75 }}>
        {block.items.map((item, idx) => (
          <li key={idx} style={{ marginBottom: 4 }}>{item}</li>
        ))}
      </ListTag>
    );
  }
  if (block.kind === 'sub') {
    return (
      <div style={{ margin: '0 0 14px 0', display: 'flex', flexDirection: 'column', gap: 3 }}>
        <h4 style={{ margin: 0, fontSize: 14, fontWeight: 700 }}>{block.title}</h4>
        <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.65 }}>{block.text}</p>
      </div>
    );
  }
  return null;
}

export default function V2Faq() {
  return (
    <section
      id="faq"
      className="v2-cream-section"
      style={{ padding: 'clamp(70px,10vh,130px) clamp(20px,5vw,48px)' }}
    >
      <div style={{ maxWidth: 860, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 'clamp(32px,4.5vh,48px)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, textAlign: 'center', alignItems: 'center' }}>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.28em', textTransform: 'uppercase', color: 'var(--v2-orange-deep)' }}>
            FAQ
          </span>
          <h2 className="v2-heading" style={{ margin: 0, fontSize: 'clamp(36px,5vw,68px)', color: 'var(--v2-black)' }}>
            Questions? Answered.
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {faqs.map((faq) => (
            <details key={faq.question} className="v2-faq-row" style={{ padding: 0 }}>
              <summary
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 18,
                  padding: 'clamp(16px,2vh,20px) clamp(20px,2.2vw,26px)',
                  fontSize: 15,
                  fontWeight: 700,
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
                    border: '2px solid currentColor',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 16,
                    transition: 'transform 250ms',
                  }}
                >
                  +
                </span>
              </summary>
              <div style={{ padding: '0 clamp(20px,2.2vw,26px) clamp(18px,2vh,24px)' }}>
                {faq.answer.map((block, bi) => (
                  <AnswerBlock key={bi} block={block} />
                ))}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
