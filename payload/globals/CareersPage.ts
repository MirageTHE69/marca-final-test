import type { Field, GlobalConfig } from 'payload';

import { CAREERS_DEFAULTS as D } from '../../lib/careers';
import { isLoggedIn } from '../access/isLoggedIn';
import { colourField, sectionHeading } from '../fields/shared';
import { revalidateAfterChange } from '../hooks/revalidate';

/** The shared section heading, with nothing required: empty fields use the starter text. */
const optional = (fields: Field[]): Field[] =>
  fields.map((f) => {
    if ('fields' in f && Array.isArray(f.fields)) return { ...f, fields: optional(f.fields) } as Field;
    return 'required' in f ? ({ ...f, required: false } as Field) : f;
  });

/** Text on /careers. The roles themselves are in Careers → Jobs. */
export const CareersPage: GlobalConfig = {
  slug: 'careers-page',
  label: 'Careers page',
  admin: {
    group: 'Careers',
    description: 'The words on /careers. Add and close vacancies in Careers → Jobs. Anything left empty uses the starter text.',
    preview: () => '/careers',
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
            {
              type: 'row',
              fields: [
                { name: 'scriptLine', label: 'Handwritten line', type: 'text', admin: { width: '40%', placeholder: D.hero.scriptLine } },
                { name: 'bigWord', label: 'Giant word', type: 'text', admin: { width: '30%', placeholder: D.hero.bigWord } },
              ],
            },
            { name: 'title', label: 'Title', type: 'text', admin: { placeholder: D.hero.title } },
            { name: 'lede', label: 'Line under the title', type: 'textarea', admin: { placeholder: D.hero.lede } },
            {
              type: 'row',
              fields: [
                { name: 'primaryButton', label: 'Main button', type: 'text', admin: { width: '50%', placeholder: D.hero.primaryButton } },
                { name: 'secondaryButton', label: 'Second button', type: 'text', admin: { width: '50%', placeholder: D.hero.secondaryButton } },
              ],
            },
            {
              name: 'bandWords',
              label: 'Words on the curved band',
              type: 'array',
              labels: { singular: 'Word', plural: 'Words' },
              admin: { description: `Leave empty for: ${D.hero.bandWords.join(', ')}.` },
              fields: [{ name: 'word', type: 'text', required: true }],
            },
          ],
        },
        {
          name: 'perks',
          label: 'Why Marca',
          fields: [
            ...optional(sectionHeading()),
            {
              name: 'items',
              label: 'Reasons',
              type: 'array',
              labels: { singular: 'Reason', plural: 'Reasons' },
              admin: { description: 'Leave empty to use the six starter reasons.' },
              fields: [
                { type: 'row', fields: [{ name: 'title', type: 'text', required: true, admin: { width: '60%' } }, { ...colourField(), admin: { width: '40%' } }] },
                { name: 'text', type: 'textarea' },
              ],
            },
          ],
        },
        {
          name: 'openings',
          label: 'Open roles',
          fields: [
            ...optional(sectionHeading()),
            {
              type: 'row',
              fields: [
                { name: 'emptyTitle', label: 'When there are no roles: title', type: 'text', admin: { width: '40%', placeholder: D.openings.emptyTitle } },
                { name: 'emptyText', label: 'When there are no roles: text', type: 'textarea', admin: { width: '60%', placeholder: D.openings.emptyText } },
              ],
            },
          ],
        },
        {
          name: 'process',
          label: 'How we hire',
          fields: [
            ...optional(sectionHeading()),
            {
              name: 'steps',
              type: 'array',
              labels: { singular: 'Step', plural: 'Steps' },
              admin: { description: 'Leave empty to use the four starter steps.' },
              fields: [
                { name: 'title', type: 'text', required: true },
                { name: 'text', type: 'textarea' },
              ],
            },
          ],
        },
        {
          name: 'general',
          label: 'General application',
          fields: [
            {
              type: 'row',
              fields: [
                { name: 'kicker', label: 'Small label above', type: 'text', admin: { width: '30%', placeholder: D.general.kicker } },
                { name: 'title', type: 'text', admin: { width: '70%', placeholder: D.general.title } },
              ],
            },
            { name: 'text', type: 'textarea', admin: { placeholder: D.general.text } },
          ],
        },
      ],
    },
  ],
};
