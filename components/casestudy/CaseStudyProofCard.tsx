'use client';

import MediaSlot from '@/components/MediaSlot';
import InstagramCard from '@/components/casestudy/InstagramCard';

interface InstagramProfile {
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

interface StatLine {
  value?: string;
  label: string;
}

interface CaseStudyProofCardProps {
  title: string;
  logo?: string;
  before: InstagramProfile;
  after: InstagramProfile;
  stats: StatLine[];
}

export default function CaseStudyProofCard({ title, logo, before, after, stats }: CaseStudyProofCardProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'clamp(22px,3vh,36px)',
        padding: 'clamp(24px,2.8vw,44px)',
        borderRadius: 24,
        background: 'radial-gradient(ellipse 90% 80% at 10% 20%, #0B1840 0%, #060A14 55%, #030608 100%)',
        border: '1px solid rgba(242,244,248,.07)',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Ambient blue glow blob behind the logo area */}
      <div
        style={{
          position: 'absolute',
          top: '-15%',
          left: '-8%',
          width: 'clamp(220px,32vw,400px)',
          height: 'clamp(220px,32vw,400px)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(62,109,255,0.30) 0%, rgba(30,60,200,0.15) 40%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Top row: large logo circle + two Instagram cards */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          alignItems: 'center',
          gap: 'clamp(16px,2vw,28px)',
        }}
      >
        {/* Large glowing logo circle */}
        <div
          style={{
            flex: '0 0 auto',
            width: 'clamp(110px,13vw,170px)',
            height: 'clamp(110px,13vw,170px)',
            borderRadius: '50%',
            overflow: 'hidden',
            background: '#fff',
            position: 'relative',
            boxShadow:
              '0 0 0 2px rgba(255,255,255,0.06), 0 0 60px 22px rgba(62,109,255,0.50), 0 0 120px 48px rgba(30,80,255,0.25)',
          }}
        >
          <MediaSlot
            src={logo}
            alt={`${title} logo`}
            placeholder={`${title} logo`}
            sizes="170px"
            fit="contain"
          />
        </div>

        {/* Two Instagram profile cards */}
        <div
          style={{
            flex: '1 1 0',
            display: 'flex',
            gap: 'clamp(10px,1.2vw,16px)',
            minWidth: 0,
          }}
        >
          <InstagramCard {...before} />
          <InstagramCard {...after} />
        </div>
      </div>

      {/* Stats below */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: 'clamp(6px,1vh,10px)',
        }}
      >
        {stats.map((stat, i) => (
          <span
            key={i}
            style={{
              fontSize: 'clamp(15px,1.6vw,22px)',
              fontWeight: stat.value ? 600 : 400,
              letterSpacing: '-.01em',
              lineHeight: 1.35,
              color: stat.value ? '#D8DEEA' : 'rgba(216,222,234,0.72)',
            }}
          >
            {stat.value && (
              <span style={{ color: 'var(--accent)', fontWeight: 700 }}>{stat.value} </span>
            )}
            {stat.label}
          </span>
        ))}
      </div>
    </div>
  );
}
