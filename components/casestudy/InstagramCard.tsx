import MediaSlot from '@/components/MediaSlot';

interface InstagramCardProps {
  avatarSrc?: string;
  handle: string;
  bioLabel: string;
  category: string;
  bio: string;
  badge?: string;
  managedBy?: string;
  posts: string | number;
  followers: string;
  following: string | number;
  website?: string;
}

export default function InstagramCard({
  avatarSrc,
  handle,
  bioLabel,
  category,
  bio,
  badge,
  managedBy,
  posts,
  followers,
  following,
  website,
}: InstagramCardProps) {
  return (
    <div
      style={{
        flex: '1 1 0',
        minWidth: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
        padding: 'clamp(14px,1.6vw,22px)',
        borderRadius: 16,
        background: '#FFFFFF',
        fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div
          style={{
            position: 'relative',
            flex: '0 0 auto',
            width: 'clamp(34px,3.6vw,44px)',
            height: 'clamp(34px,3.6vw,44px)',
            borderRadius: '50%',
            padding: 2,
            background: 'conic-gradient(from 210deg, #FEDA75, #FA7E1E, #D62976, #962FBF, #4F5BD5, #FEDA75)',
          }}
        >
          <div style={{ position: 'relative', width: '100%', height: '100%', borderRadius: '50%', overflow: 'hidden', background: '#fff', border: '2px solid #fff' }}>
            <MediaSlot src={avatarSrc} alt={handle} placeholder="" sizes="44px" fit="contain" />
          </div>
        </div>
        <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 'clamp(12px,1.05vw,15px)', fontWeight: 600, color: '#111' }}>
          {handle}
          <svg width="13" height="13" viewBox="0 0 24 24" fill="#3897F0" style={{ flex: '0 0 auto' }}>
            <path d="M12 0l2.6 2.4 3.5-.5 1 3.4 3.4 1-.5 3.5L24 12l-2 2.6.5 3.5-3.4 1-1 3.4-3.5-.5L12 24l-2.6-2.4-3.5.5-1-3.4-3.4-1 .5-3.5L0 12l2-2.6-.5-3.5 3.4-1 1-3.4 3.5.5z" />
            <path d="M9.8 16.2 5.9 12.3l1.4-1.4 2.5 2.5 6-6 1.4 1.4z" fill="#fff" />
          </svg>
        </span>
        <span style={{ marginLeft: 'auto', fontSize: 16, color: '#888', letterSpacing: 1 }}>&#8943;</span>
      </div>

      <span style={{ fontSize: 'clamp(11px,.9vw,13px)', fontWeight: 700, color: '#111' }}>{bioLabel}</span>

      <div style={{ display: 'flex', gap: 'clamp(10px,1.4vw,20px)', fontSize: 'clamp(10px,.85vw,13px)', color: '#111' }}>
        <span><b>{posts}</b> posts</span>
        <span><b>{followers}</b> followers</span>
        <span><b>{following}</b> following</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 4, fontSize: 'clamp(10px,.85vw,12.5px)', lineHeight: 1.45, color: '#333' }}>
        <span style={{ color: '#8a8a8a' }}>{category}</span>
        <span>{bio}</span>
        {badge && <span style={{ fontWeight: 600 }}>{badge}</span>}
        {managedBy && (
          <span style={{ color: '#8a8a8a' }}>
            {managedBy} <span style={{ color: '#8a8a8a', fontWeight: 600 }}>more</span>
          </span>
        )}
      </div>

      {website && (
        <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 'clamp(10px,.85vw,12.5px)', color: '#3897F0', fontWeight: 600 }}>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#3897F0" strokeWidth="2.5">
            <path d="M10 14a5 5 0 007 0l3-3a5 5 0 00-7-7l-1 1M14 10a5 5 0 00-7 0l-3 3a5 5 0 007 7l1-1" />
          </svg>
          {website}
        </span>
      )}
    </div>
  );
}
