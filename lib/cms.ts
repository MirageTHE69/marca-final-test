import { getPayload } from 'payload';
import { cache } from 'react';

import config from '@payload-config';
import type { CaseStudy, Home, PortfolioItem, Post, Setting } from '@/payload/payload-types';

/**
 * Reads the admin panel's content for the public site. Only published
 * content is returned. Each loader is cached per request, so sections that
 * share data (nav, footer) don't query twice.
 */
const cms = cache(() => getPayload({ config }));

const published = { _status: { equals: 'published' } } as const;

export const getSettings = cache(async (): Promise<Setting> => (await cms()).findGlobal({ slug: 'settings', depth: 1 }));

export const getHome = cache(async (): Promise<Home> => (await cms()).findGlobal({ slug: 'home', depth: 1 }));

export const getPortfolioPage = cache(async () => (await cms()).findGlobal({ slug: 'portfolio-page', depth: 1 }));

export const getCaseStudiesPage = cache(async () => (await cms()).findGlobal({ slug: 'case-studies-page', depth: 1 }));

export const getBlogPage = cache(async () => (await cms()).findGlobal({ slug: 'blog-page', depth: 0 }));

export const getCaseStudies = cache(async (): Promise<CaseStudy[]> => {
  const { docs } = await (await cms()).find({ collection: 'case-studies', where: published, sort: '_order', depth: 1, pagination: false });
  return docs;
});

export const getCaseStudy = cache(async (slug: string): Promise<CaseStudy | null> => {
  const { docs } = await (await cms()).find({
    collection: 'case-studies',
    where: { and: [published, { slug: { equals: slug } }] },
    depth: 2,
    limit: 1,
  });
  return docs[0] ?? null;
});

export const getPortfolioItems = cache(async (): Promise<PortfolioItem[]> => {
  const { docs } = await (await cms()).find({ collection: 'portfolio-items', sort: '_order', depth: 1, pagination: false });
  return docs;
});

export const getPosts = cache(async (): Promise<Post[]> => {
  const { docs } = await (await cms()).find({ collection: 'posts', where: published, sort: '-publishedAt', depth: 1, pagination: false });
  return docs;
});

export const getPost = cache(async (slug: string): Promise<Post | null> => {
  const { docs } = await (await cms()).find({
    collection: 'posts',
    where: { and: [published, { slug: { equals: slug } }] },
    depth: 2,
    limit: 1,
  });
  return docs[0] ?? null;
});

export { colourVar } from './theme';
