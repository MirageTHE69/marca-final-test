import { BlocksFeature, FixedToolbarFeature, HeadingFeature, lexicalEditor } from '@payloadcms/richtext-lexical';

import { mediaField } from './fields/media';

/**
 * The writing editor for blog posts and case study pages: headings, lists,
 * quotes and links, plus blocks for media from the library, YouTube videos
 * and pull quotes. Payload's own upload/relationship features are left out —
 * media comes from the Cloudinary library instead.
 */
export const richTextEditor = lexicalEditor({
  features: ({ defaultFeatures }) => [
    ...defaultFeatures.filter((f) => !['upload', 'relationship', 'heading'].includes(f.key)),
    HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
    FixedToolbarFeature(),
    BlocksFeature({
      blocks: [
        {
          slug: 'mediaBlock',
          interfaceName: 'MediaBlock',
          labels: { singular: 'Image or video', plural: 'Images and videos' },
          fields: [
            mediaField('media', { required: true }),
            {
              type: 'row',
              fields: [
                { name: 'caption', type: 'text', admin: { width: '70%' } },
                {
                  name: 'size',
                  type: 'select',
                  defaultValue: 'content',
                  options: [
                    { label: 'Text width', value: 'content' },
                    { label: 'Wide', value: 'wide' },
                  ],
                  admin: { width: '30%' },
                },
              ],
            },
          ],
        },
        {
          slug: 'youtube',
          interfaceName: 'YoutubeBlock',
          labels: { singular: 'YouTube video', plural: 'YouTube videos' },
          fields: [
            { name: 'url', label: 'YouTube link', type: 'text', required: true, admin: { placeholder: 'https://www.youtube.com/watch?v=…' } },
            { name: 'caption', type: 'text' },
          ],
        },
        {
          slug: 'pullQuote',
          interfaceName: 'PullQuoteBlock',
          labels: { singular: 'Pull quote', plural: 'Pull quotes' },
          fields: [
            { name: 'quote', type: 'textarea', required: true },
            { name: 'attribution', type: 'text' },
          ],
        },
      ],
    }),
  ],
});
