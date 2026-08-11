import Image from 'next/image';

interface MediaSlotProps {
  src?: string;
  type?: 'video' | 'image';
  alt?: string;
  placeholder: string;
  sizes?: string;
  fit?: 'cover' | 'contain';
}

export default function MediaSlot({ src, type = 'image', alt = '', placeholder, sizes = '100vw', fit = 'cover' }: MediaSlotProps) {
  if (!src) {
    return (
      <div className="image-placeholder">
        <span className="image-placeholder-inner">{placeholder}</span>
      </div>
    );
  }

  if (type === 'video') {
    return (
      <video
        src={src}
        autoPlay
        muted
        loop
        playsInline
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: fit }}
      />
    );
  }

  return <Image src={src} alt={alt} fill sizes={sizes} style={{ objectFit: fit }} />;
}
