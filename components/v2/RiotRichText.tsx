import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical';
import { RichText, type JSXConvertersFunction } from '@payloadcms/richtext-lexical/react';

import { asMedia, imageUrl, videoUrl } from '@/lib/media';
import type { MediaBlock, PullQuoteBlock, YoutubeBlock } from '@/payload/payload-types';

/** The YouTube video id from any of its link shapes. */
function youtubeId(url: string) {
  const m = url.match(/(?:youtu\.be\/|v=|\/embed\/|\/shorts\/|\/live\/)([\w-]{11})/);
  return m?.[1];
}

type BlockArgs = { node: { fields: unknown } };

const converters: JSXConvertersFunction = ({ defaultConverters }) => ({
  ...defaultConverters,
  blocks: {
    mediaBlock: ({ node }: BlockArgs) => {
      const block = node.fields as MediaBlock;
      const m = asMedia(block.media);
      if (!m) return null;
      return (
        <figure className={`riot-prose__figure${block.size === 'wide' ? ' is-wide' : ''}`}>
          {m.resourceType === 'video' ? (
            <video src={videoUrl(m)} controls playsInline preload="metadata" />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={imageUrl(m, { width: block.size === 'wide' ? 1600 : 1100 })} alt={m.alt || block.caption || ''} loading="lazy" />
          )}
          {block.caption && <figcaption>{block.caption}</figcaption>}
        </figure>
      );
    },
    youtube: ({ node }: BlockArgs) => {
      const block = node.fields as YoutubeBlock;
      const id = youtubeId(block.url);
      if (!id) return null;
      return (
        <figure className="riot-prose__figure is-wide">
          <div className="riot-prose__embed">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${id}`}
              title={block.caption || 'YouTube video'}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          {block.caption && <figcaption>{block.caption}</figcaption>}
        </figure>
      );
    },
    pullQuote: ({ node }: BlockArgs) => {
      const block = node.fields as PullQuoteBlock;
      return (
        <blockquote className="riot-prose__pull">
          <p>{block.quote}</p>
          {block.attribution && <cite>— {block.attribution}</cite>}
        </blockquote>
      );
    },
  },
});

/** Blog and case study writing, in the site's type. */
export default function RiotRichText({ data }: { data: SerializedEditorState }) {
  return <RichText data={data} converters={converters} className="riot-prose" />;
}

/** Minutes to read, from the words in a rich text document. */
export function readingMinutes(data: SerializedEditorState | null | undefined) {
  let words = 0;
  const walk = (node: unknown) => {
    if (!node || typeof node !== 'object') return;
    const n = node as { text?: string; children?: unknown[] };
    if (typeof n.text === 'string') words += n.text.trim().split(/\s+/).filter(Boolean).length;
    n.children?.forEach(walk);
  };
  walk(data?.root);
  return Math.max(1, Math.round(words / 220));
}
