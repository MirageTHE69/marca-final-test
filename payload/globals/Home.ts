import type { ArrayField, GlobalConfig } from 'payload';

import { isLoggedIn } from '../access/isLoggedIn';
import { mediaField } from '../fields/media';
import { colourField, sectionHeading } from '../fields/shared';
import { revalidateAfterChange } from '../hooks/revalidate';
import { LEAD_SERVICES } from '../collections/Leads';

const titled = { components: { RowLabel: '/payload/admin/RowLabel#TitleRowLabel' } };

const list = (name: string, label: string, singular: string, fields: ArrayField['fields'], extra: Partial<ArrayField> = {}): ArrayField => ({
  name,
  label,
  type: 'array',
  labels: { singular, plural: label },
  admin: { initCollapsed: true, ...titled },
  fields,
  ...extra,
});

/** Every section of the landing page, one tab each, in page order. */
export const Home: GlobalConfig = {
  slug: 'home',
  label: 'Home page',
  versions: { drafts: true, max: 30 },
  admin: {
    group: 'Pages',
    description: 'Text, images and videos for each landing page section. Publish to put changes live.',
    preview: () => '/',
  },
  access: { read: isLoggedIn, update: isLoggedIn },
  hooks: { afterChange: [revalidateAfterChange] },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          name: 'hero',
          label: 'Hero',
          fields: [
            mediaField('video', { label: 'Background video', accept: 'video', required: true }),
            {
              type: 'row',
              fields: [
                { name: 'title', type: 'text', required: true, admin: { width: '40%' } },
                { name: 'tagline', label: 'Italic line', type: 'text', admin: { width: '60%' } },
              ],
            },
            { name: 'intro', label: 'Line at the bottom', type: 'textarea' },
            {
              type: 'row',
              fields: [
                { name: 'cornerLabel', label: 'Corner label', type: 'text', admin: { width: '50%' } },
                { name: 'buttonLabel', label: 'Button', type: 'text', admin: { width: '50%' } },
              ],
            },
          ],
        },
        {
          name: 'clients',
          label: 'Client strip',
          description: 'The names scrolling under the hero.',
          fields: [list('names', 'Names', 'Name', [{ name: 'name', type: 'text', required: true }])],
        },
        {
          name: 'instagram',
          label: 'Instagram',
          fields: [
            ...sectionHeading(),
            list('reels', 'Reels', 'Reel', [
              mediaField('video', { accept: 'video', required: true }),
              {
                type: 'row',
                fields: [
                  { name: 'title', type: 'text', required: true, admin: { width: '40%' } },
                  { name: 'subtitle', label: 'Line under', type: 'text', admin: { width: '35%' } },
                  {
                    name: 'badge',
                    type: 'select',
                    defaultValue: 'Instagram Reel',
                    options: ['Instagram Reel', 'YouTube Short'],
                    admin: { width: '25%' },
                  },
                ],
              },
            ]),
          ],
        },
        {
          name: 'youtube',
          label: 'YouTube',
          fields: [
            ...sectionHeading(),
            list('films', 'Videos', 'Video', [
              mediaField('video', { accept: 'video', required: true }),
              {
                type: 'row',
                fields: [
                  { name: 'title', label: 'Client', type: 'text', required: true, admin: { width: '35%' } },
                  { name: 'titleAccent', label: 'Video name (italic)', type: 'text', admin: { width: '35%' } },
                  { name: 'category', type: 'text', admin: { width: '30%' } },
                ],
              },
              { name: 'description', type: 'textarea' },
            ]),
          ],
        },
        {
          name: 'thumbnails',
          label: 'Thumbnails',
          fields: [
            ...sectionHeading(),
            list('pieces', 'Thumbnails', 'Thumbnail', [
              mediaField('image', { accept: 'image', required: true }),
              {
                type: 'row',
                fields: [
                  { name: 'title', type: 'text', required: true, admin: { width: '50%' } },
                  { name: 'category', type: 'text', admin: { width: '50%' } },
                ],
              },
              { name: 'description', type: 'textarea' },
            ]),
          ],
        },
        {
          name: 'process',
          label: 'Process',
          fields: [
            ...sectionHeading(),
            list('steps', 'Steps', 'Step', [
              { type: 'row', fields: [{ name: 'title', type: 'text', required: true, admin: { width: '60%' } }, { ...colourField(), admin: { width: '40%' } }] },
              { name: 'description', type: 'textarea' },
            ]),
          ],
        },
        {
          name: 'caseStudies',
          label: 'Case studies',
          description: 'The cards themselves come from Content → Case studies (tick "Show on the landing page").',
          fields: [
            ...sectionHeading({ accent: true, lede: false }),
            { name: 'buttonLabel', label: 'Button', type: 'text' },
            {
              type: 'row',
              fields: [
                { name: 'endKicker', label: 'Last card: label', type: 'text', admin: { width: '30%' } },
                { name: 'endTitle', label: 'Last card: title', type: 'text', admin: { width: '40%' } },
                { name: 'endButton', label: 'Last card: button', type: 'text', admin: { width: '30%' } },
              ],
            },
          ],
        },
        {
          name: 'services',
          label: 'Other services',
          fields: [
            ...sectionHeading(),
            list(
              'items',
              'Services',
              'Service',
              [
                {
                  type: 'row',
                  fields: [
                    { name: 'title', type: 'text', required: true, admin: { width: '45%' } },
                    {
                      name: 'leadService',
                      label: 'Leads are tagged as',
                      type: 'select',
                      required: true,
                      options: [...LEAD_SERVICES],
                      admin: { width: '30%' },
                    },
                    { ...colourField(), admin: { width: '25%' } },
                  ],
                },
                { name: 'tagline', type: 'textarea' },
                list('images', 'Slideshow images', 'Image', [
                  mediaField('image', { accept: 'image', required: true }),
                  { name: 'caption', type: 'text' },
                ], { admin: { initCollapsed: true, components: { RowLabel: '/payload/admin/RowLabel#TitleRowLabel' } } }),
              ],
            ),
          ],
        },
        {
          name: 'packages',
          label: 'Packages',
          fields: [
            ...sectionHeading(),
            list('items', 'Packages', 'Package', [
              {
                type: 'row',
                fields: [
                  { name: 'name', type: 'text', required: true, admin: { width: '40%' } },
                  { name: 'subtitle', type: 'text', admin: { width: '35%' } },
                  { ...colourField(), admin: { width: '25%' } },
                ],
              },
              list('features', "What's included", 'Line', [
                {
                  type: 'row',
                  fields: [
                    { name: 'text', type: 'text', required: true, admin: { width: '75%' } },
                    { name: 'highlight', label: 'Highlight', type: 'checkbox', admin: { width: '25%' } },
                  ],
                },
              ]),
            ]),
          ],
        },
        {
          name: 'testimonials',
          label: 'Testimonials',
          fields: [
            ...sectionHeading({ accent: true, lede: false }),
            list(
              'items',
              'Testimonials',
              'Testimonial',
              [
                { name: 'quote', type: 'textarea', required: true },
                {
                  type: 'row',
                  fields: [
                    { name: 'name', type: 'text', required: true, admin: { width: '40%' } },
                    { name: 'role', label: 'Role / company', type: 'text', admin: { width: '35%' } },
                    { ...colourField('colour', 'cream'), admin: { width: '25%' } },
                  ],
                },
              ],
              { admin: { initCollapsed: true, components: { RowLabel: '/payload/admin/RowLabel#QuoteRowLabel' } } },
            ),
          ],
        },
        {
          name: 'faq',
          label: 'FAQ',
          description: 'Also shown on the /faq page.',
          fields: [
            ...sectionHeading(),
            list('questions', 'Questions', 'Question', [
              { name: 'question', type: 'text', required: true },
              {
                name: 'answer',
                type: 'blocks',
                required: true,
                blocks: [
                  { slug: 'paragraph', labels: { singular: 'Paragraph', plural: 'Paragraphs' }, fields: [{ name: 'text', type: 'textarea', required: true }] },
                  {
                    slug: 'list',
                    labels: { singular: 'Bullet list', plural: 'Bullet lists' },
                    fields: [
                      { name: 'ordered', label: 'Numbered', type: 'checkbox' },
                      { name: 'items', type: 'array', fields: [{ name: 'text', type: 'text', required: true }] },
                    ],
                  },
                  {
                    slug: 'subheading',
                    labels: { singular: 'Point with heading', plural: 'Points with headings' },
                    fields: [
                      { name: 'title', type: 'text', required: true },
                      { name: 'text', type: 'textarea', required: true },
                    ],
                  },
                ],
              },
            ]),
          ],
        },
        {
          name: 'contact',
          label: 'Contact',
          fields: [
            mediaField('video', { label: 'Background video', accept: 'video' }),
            ...sectionHeading({ accent: true, lede: false }),
            {
              type: 'row',
              fields: [
                { name: 'primaryButton', label: 'Main button', type: 'text', admin: { width: '33%' } },
                { name: 'secondaryButton', label: 'Second button', type: 'text', admin: { width: '33%' } },
                { name: 'note', label: 'Small note', type: 'text', admin: { width: '34%' } },
              ],
            },
            {
              type: 'row',
              fields: [
                { name: 'formTitle', label: 'Form title', type: 'text', admin: { width: '50%' } },
                { name: 'formButton', label: 'Form button', type: 'text', admin: { width: '50%' } },
              ],
            },
          ],
        },
      ],
    },
  ],
};
