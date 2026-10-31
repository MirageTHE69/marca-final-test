import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import RiotFooter from '@/components/v2/RiotFooter';
import RiotNav from '@/components/v2/RiotNav';
import RiotPostCard from '@/components/v2/RiotPostCard';
import RiotRichText, { readingMinutes } from '@/components/v2/RiotRichText';
import { categoryLabel, formatDate } from '@/lib/blog';
import { getPost, getPosts } from '@/lib/cms';
import { asMedia, imageUrl } from '@/lib/media';

type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.filter((p) => p.slug).map((p) => ({ slug: p.slug as string }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const post = await getPost((await params).slug);
  if (!post) return {};
  const cover = imageUrl(asMedia(post.cover), { width: 1200, height: 630 });
  const title = post.seo?.title || post.title;
  const description = post.seo?.description || post.excerpt || undefined;
  return {
    title: `${title} — Marca Creatives`,
    description,
    openGraph: { title, description, type: 'article', publishedTime: post.publishedAt ?? undefined, images: cover ? [cover] : undefined },
  };
}

/** One blog post: header, cover, the writing, then more posts. */
export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const [post, all] = await Promise.all([getPost(slug), getPosts()]);
  if (!post) notFound();

  const cover = asMedia(post.cover);
  const more = all.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <main className="riot">
      <RiotNav />

      <article>
        <header className="riot-cream" style={{ padding: 'clamp(54px,9vh,110px) clamp(18px,4vw,44px) clamp(30px,5vh,56px)' }}>
          <div style={{ maxWidth: 980, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 18 }}>
            <Link href="/blog" style={{ alignSelf: 'flex-start', fontSize: 12, fontWeight: 700, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--r-ink)' }}>
              ← All posts
            </Link>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 12, fontSize: 13, fontWeight: 600, color: 'var(--r-muted)' }}>
              <span className="riot-post__chip" style={{ position: 'static' }}>
                {categoryLabel(post.category)}
              </span>
              <span>{formatDate(post.publishedAt)}</span>
              <span aria-hidden="true">·</span>
              <span>{readingMinutes(post.content)} min read</span>
            </div>
            <h1 className="riot-display" style={{ fontSize: 'clamp(40px,6.4vw,96px)', color: 'var(--r-h-red)' }}>
              {post.title}
            </h1>
            {post.excerpt && (
              <p className="riot-lede" style={{ maxWidth: '52ch', marginTop: 0 }}>
                {post.excerpt}
              </p>
            )}
            {post.author && <span style={{ fontSize: 14, fontWeight: 700 }}>By {post.author}</span>}
          </div>
        </header>

        {cover && (
          <div className="riot-cream" style={{ padding: '0 clamp(18px,4vw,44px)' }}>
            <div className="riot-media" style={{ maxWidth: 1240, margin: '0 auto', aspectRatio: '16 / 9', borderRadius: 22 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={imageUrl(cover, { width: 1800, aspect: '16:9' })} alt={cover.alt || ''} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
          </div>
        )}

        <div className="riot-cream" style={{ padding: 'clamp(40px,7vh,80px) clamp(18px,4vw,44px) clamp(60px,10vh,110px)' }}>
          <RiotRichText data={post.content} />
        </div>
      </article>

      <section className="riot-black" style={{ padding: 'clamp(56px,9vh,110px) clamp(18px,4vw,44px)' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 'clamp(24px,4vh,40px)' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 18 }}>
            <h2 className="riot-display" style={{ fontSize: 'clamp(32px,4.6vw,68px)', color: 'var(--r-h-yellow)' }}>
              {more.length ? 'Keep reading' : 'Got a story to tell?'}
            </h2>
            <Link href={more.length ? '/blog' : '/#contact'} className="riot-btn riot-btn-yellow">
              {more.length ? 'All posts →' : 'Start a project →'}
            </Link>
          </div>
          {more.length > 0 && (
            <div className="riot-post-grid">
              {more.map((p, i) => (
                <RiotPostCard key={p.id} post={p} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>

      <RiotFooter />
    </main>
  );
}
