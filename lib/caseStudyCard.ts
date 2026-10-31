import type { CaseStudy as CardStory } from '@/components/casestudy/caseStudies';
import type { CaseStudy } from '@/payload/payload-types';

import { asMedia, imageUrl } from './media';

/** Where a case study card's button goes: its own page, a custom link, or nowhere. */
export const caseStudyHref = (c: Pick<CaseStudy, 'slug' | 'content' | 'link'>) =>
  c.link || (c.content && c.slug ? `/case-studies/${c.slug}` : undefined);

/** An admin case study in the shape the card component draws. */
export function toCardStory(c: CaseStudy): CardStory {
  return {
    chip: c.chip ?? '',
    category: c.category,
    year: c.year ?? '',
    title: c.title,
    href: caseStudyHref(c),
    logo: imageUrl(asMedia(c.logo), { width: 240, height: 240 }),
    beforeImage: imageUrl(asMedia(c.beforeImage), { width: 900 }),
    afterImage: imageUrl(asMedia(c.afterImage), { width: 900 }) ?? '',
    stats: (c.stats ?? []).map((s) => ({ value: s.value ?? undefined, label: s.label })),
    descriptions: (c.descriptions ?? []).map((d) => d.text),
    featured: Boolean(c.featured),
  };
}
