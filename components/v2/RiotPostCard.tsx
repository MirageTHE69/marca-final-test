import Link from 'next/link';

import { categoryLabel, formatDate } from '@/lib/blog';
import { asMedia, imageUrl } from '@/lib/media';
import type { Post } from '@/payload/payload-types';

const TINTS = ['var(--r-yellow)', 'var(--r-blue)', 'var(--r-orange)', 'var(--r-olive)'];

/** A blog post as a card. `lead` is the large first card on /blog. */
export default function RiotPostCard({ post, index = 0, lead = false }: { post: Post; index?: number; lead?: boolean }) {
  const cover = asMedia(post.cover);
  const tint = TINTS[index % TINTS.length];

  return (
    <Link href={`/blog/${post.slug}`} className={`riot-post${lead ? ' riot-post--lead' : ''}`} style={{ ['--tint' as string]: tint }}>
      <div className="riot-post__media">
        {cover ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={imageUrl(cover, { width: lead ? 1400 : 900, aspect: lead ? '16:10' : '4:3' })} alt={cover.alt || ''} loading={lead ? 'eager' : 'lazy'} />
        ) : (
          <span className="riot-post__placeholder riot-display" aria-hidden="true">
            {post.title.charAt(0)}
          </span>
        )}
        <span className="riot-post__chip">{categoryLabel(post.category)}</span>
      </div>
      <div className="riot-post__body">
        <span className="riot-post__date">{formatDate(post.publishedAt)}</span>
        <h3 className="riot-display">{post.title}</h3>
        {post.excerpt && <p>{post.excerpt}</p>}
        <span className="riot-post__more">Read the post →</span>
      </div>
    </Link>
  );
}
