import type { Field, SelectField, TextField } from 'payload';

/** The site's palette, by the names the theme uses. */
export const COLOURS = [
  { label: 'Yellow', value: 'yellow' },
  { label: 'Blue', value: 'blue' },
  { label: 'Orange', value: 'orange' },
  { label: 'Red', value: 'red' },
  { label: 'Olive', value: 'olive' },
  { label: 'Cream', value: 'cream' },
] as const;

export type Colour = (typeof COLOURS)[number]['value'];

export const colourField = (name = 'colour', defaultValue: Colour = 'yellow'): SelectField => ({
  name,
  label: 'Card colour',
  type: 'select',
  defaultValue,
  options: [...COLOURS],
});

/**
 * The heading every section shares: a small label above, the big title,
 * an optional italic serif ending, and the line under it.
 */
export const sectionHeading = ({ accent = false, lede = true } = {}): Field[] => [
  {
    type: 'row',
    fields: [
      { name: 'kicker', label: 'Small label above', type: 'text', admin: { width: '30%' } },
      { name: 'title', label: 'Title', type: 'text', required: true, admin: { width: accent ? '40%' : '70%' } },
      ...(accent
        ? [
            {
              name: 'titleAccent',
              label: 'Italic ending',
              type: 'text',
              admin: { width: '30%', description: 'Shown in the serif italic after the title.' },
            } satisfies TextField,
          ]
        : []),
    ],
  },
  ...(lede ? [{ name: 'lede', label: 'Line under the title', type: 'textarea' } satisfies Field] : []),
];

/** URL-friendly slug, filled from the title when left empty. */
export const slugField = (from = 'title'): TextField => ({
  name: 'slug',
  type: 'text',
  index: true,
  unique: true,
  admin: { position: 'sidebar', description: 'The page address. Filled from the title if left empty.' },
  hooks: {
    beforeValidate: [
      ({ value, data }) => {
        const source = typeof value === 'string' && value ? value : (data?.[from] as string | undefined);
        return source
          ? source
              .toLowerCase()
              .normalize('NFKD')
              .replace(/[̀-ͯ]/g, '')
              .replace(/[^a-z0-9]+/g, '-')
              .replace(/^-+|-+$/g, '')
          : value;
      },
    ],
  },
});
