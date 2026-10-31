import type { Metadata } from 'next';
import Link from 'next/link';

import FitTitle from '@/components/v2/FitTitle';
import RiotFooter from '@/components/v2/RiotFooter';
import RiotNav from '@/components/v2/RiotNav';
import RiotPostCard from '@/components/v2/RiotPostCard';
import { getBlogPage, getPosts } from '@/lib/cms';

export const metadata: Metadata = {
  title: 'Blog — Marca Creatives',
  description: 'Notes from the studio on content, film and building brands people choose.',
};

/** The blog: a fitted hero, the newest post large, the rest in a grid. */
export default async function BlogIndexPage() {
  const [page, posts] = await Promise.all([getBlogPage(), getPosts()]);
  const [lead, ...rest] = posts;

  return (
    <main className="riot">
      <RiotNav />

      <section
        className="riot-yellow"
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'clamp(10px,1.8vh,18px)',
          padding: 'clamp(70px,10vh,130px) clamp(20px,5vw,72px) clamp(46px,7vh,80px)',
          borderBottom: '2px solid var(--r-black)',
          textAlign: 'center',
        }}
      >
        {page.scriptLine && (
          <span className="riot-script" style={{ fontSize: 'clamp(24px,2.6vw,38px)', color: 'var(--r-ink)' }}>
            {page.scriptLine}
          </span>
        )}
        <div className="riot-fit-wrap" style={{ marginInline: 'calc(-1 * clamp(20px,5vw,72px))' }}>
          <FitTitle text={page.bigWord} className="riot-display" style={{ color: 'var(--r-black)', letterSpacing: '-.055em', lineHeight: 0.82 }}>
            {page.bigWord}
          </FitTitle>
        </div>
        {page.lede && (
          <p className="riot-lede" style={{ maxWidth: '56ch' }}>
            {page.lede}
          </p>
        )}
      </section>

      <section className="riot-cream" style={{ padding: 'clamp(46px,8vh,100px) clamp(18px,4vw,44px) clamp(60px,10vh,120px)' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 'clamp(26px,4vw,48px)' }}>
          {lead ? (
            <>
              <RiotPostCard post={lead} lead />
              {rest.length > 0 && (
                <div className="riot-post-grid">
                  {rest.map((post, i) => (
                    <RiotPostCard key={post.id} post={post} index={i + 1} />
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="riot-card riot-empty">
              <span className="riot-display" style={{ fontSize: 'clamp(28px,3.4vw,48px)' }}>
                {page.emptyMessage || 'The first stories are on their way.'}
              </span>
              <p>In the meantime, see what we have been building.</p>
              <Link href="/case-studies" className="riot-btn riot-btn-yellow">
                Read the case studies →
              </Link>
            </div>
          )}
        </div>
      </section>

      <RiotFooter />
    </main>
  );
}
