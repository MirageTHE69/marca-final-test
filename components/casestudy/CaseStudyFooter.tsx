export default function CaseStudyFooter() {
  return (
    <footer
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 20,
        padding: 'clamp(40px,6vh,64px) clamp(20px,5vw,56px)',
      }}
    >
      <span style={{ fontSize: 17, fontWeight: 700, letterSpacing: '-.02em' }}>
        MARCA<span style={{ color: 'var(--accent)' }}>.</span>
      </span>
      <span style={{ fontSize: 11, letterSpacing: '.2em', textTransform: 'uppercase', color: '#55627A' }}>
        Content · Film · Identity
      </span>
    </footer>
  );
}
