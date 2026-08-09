import MediaSlot from '@/components/MediaSlot';

interface MediaCardProps {
  src?: string;
  type?: 'video' | 'image';
  aspect: string;
  caption: string;
  placeholder: string;
}

export default function MediaCard({ src, type = 'image', aspect, caption, placeholder }: MediaCardProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <div style={{ position: 'relative', aspectRatio: aspect, overflow: 'hidden', borderRadius: 12, background: '#0B0D13', border: '1px solid rgba(245,246,248,.08)' }}>
        <MediaSlot type={type} src={src} placeholder={placeholder} />
      </div>
      <span style={{ fontSize: 10, letterSpacing: '.2em', textTransform: 'uppercase', color: '#626B7E' }}>{caption}</span>
    </div>
  );
}
