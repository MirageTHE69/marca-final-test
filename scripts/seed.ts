/**
 * Fills an empty database with the content the site launched with.
 *
 *   npm run payload run scripts/seed.ts            (skips anything already filled)
 *   npm run payload run scripts/seed.ts -- --force (rewrites pages and lists)
 */
import { getPayload } from 'payload';

import config from '../payload.config';
import { caseStudies } from '../components/casestudy/caseStudies';
import { fashionShoots, films, packagingDesigns, productShoots, reels, type PortfolioShot } from '../components/portfolio/cloudinaryMedia';
import { fashionSets, packagingSets, portfolioItems, portfolioSections, productSets } from '../components/portfolio/portfolioItems';
import { faqs } from '../content-lib/faqs';
import { site } from '../content-lib/site';
import { getCloudinary, isCloudinaryDemo, mediaDataFromAsset, type CloudinaryAsset } from '../payload/cloudinary';
import { clients, otherServices, packages, pieces, processSteps, testimonials } from './seed-data';

const force = process.argv.includes('--force');
const payload = await getPayload({ config });
const cloud = process.env.CLOUDINARY_CLOUD_NAME;
const log = (...a: unknown[]) => console.log('•', ...a);

// ── 1. Media library: everything in Cloudinary ───────────────────────────
const cloudinary = getCloudinary();
const assets: CloudinaryAsset[] = [];
for (const resource_type of ['image', 'video'] as const) {
  let next_cursor: string | undefined;
  do {
    const page = await cloudinary.api.resources({ resource_type, type: 'upload', max_results: 500, next_cursor });
    assets.push(...(page.resources as CloudinaryAsset[]));
    next_cursor = page.next_cursor;
  } while (next_cursor);
}

const existing = await payload.find({ collection: 'media', pagination: false, depth: 0 });
const byPublicId = new Map<string, string>();
const byUrl = new Map<string, string>();
for (const m of existing.docs) {
  if (m.publicId) byPublicId.set(m.publicId, m.id);
  byUrl.set(m.url, m.id);
}
let added = 0;
for (const a of assets) {
  if (byPublicId.has(a.public_id) || isCloudinaryDemo(a)) continue;
  const doc = await payload.create({ collection: 'media', data: mediaDataFromAsset(a) });
  byPublicId.set(a.public_id, doc.id);
  byUrl.set(doc.url, doc.id);
  added += 1;
}
log(`Media: ${assets.length} files in Cloudinary, ${added} added to the library`);

/** Removes Cloudinary transformations, keeping version + public id. */
function cleanCloudinary(url: string) {
  const m = url.match(/^(https:\/\/res\.cloudinary\.com\/[^/]+\/(?:image|video)\/upload\/)(.+)$/);
  if (!m) return url;
  const segs = m[2].split('/');
  const v = segs.findIndex((s) => /^v\d+$/.test(s));
  return m[1] + (v >= 0 ? segs.slice(v) : segs.filter((s) => !s.includes(',') && !/^[a-z]{1,4}_/.test(s))).join('/');
}

/** The library id for a URL used by the old hard-coded site. */
async function media(url: string | undefined, focus?: 'north' | 'auto'): Promise<string | undefined> {
  if (!url) return undefined;
  const clean = cleanCloudinary(url);
  let id: string | undefined;
  const ours = clean.match(new RegExp(`res\\.cloudinary\\.com/${cloud}/(?:image|video)/upload/(?:v\\d+/)?(.+)\\.[a-z0-9]+$`, 'i'));
  if (ours) id = byPublicId.get(ours[1]);
  id ??= byUrl.get(clean);
  if (!id) {
    // Not in this Cloudinary account (old account, ImageKit): keep the link as an external file.
    const file = decodeURIComponent(clean.split('/').pop() || 'file').replace(/\.[a-z0-9]+$/i, '');
    const isVideo = /\/video\/|\.mp4|\.mov|\.webm/i.test(clean);
    const doc = await payload.create({
      collection: 'media',
      data: {
        title: file.replace(/[_-]+/g, ' ').trim(),
        provider: 'external',
        url: clean,
        resourceType: isVideo ? 'video' : 'image',
        folder: clean.includes('cloudinary') ? 'old Cloudinary account' : 'external',
      },
    });
    id = doc.id;
    byUrl.set(clean, id);
  }
  if (focus) await payload.update({ collection: 'media', id, data: { focus } });
  return id;
}

const colour = (v: string) => (v.match(/--r-(yellow|blue|orange|red|olive|cream)/)?.[1] ?? 'yellow') as 'yellow';
const VIDEO_URL = (id: string) => `https://res.cloudinary.com/${cloud}/video/upload/${id}.mp4`;
const IMAGE_URL = (id: string) => `https://res.cloudinary.com/${cloud}/image/upload/${id}.png`;
const HERO_FILM = 'https://ik.imagekit.io/5feqwwaxb/MARCA%20WEBSITE%2001.mp4';

async function isFilled(slug: 'home' | 'portfolio-page' | 'case-studies-page' | 'settings') {
  const g = (await payload.findGlobal({ slug, depth: 0, draft: true })) as unknown as Record<string, unknown>;
  return Boolean(g.updatedAt && Object.keys(g).length > 4);
}

// ── 2. Site settings ─────────────────────────────────────────────────────
if (force || !(await isFilled('settings'))) {
  await payload.updateGlobal({
    slug: 'settings',
    data: {
      email: site.email,
      phone: site.phone.display,
      phoneLink: site.phone.href.replace(/^tel:/, ''),
      addressLine1: site.address.line1,
      addressLine2: site.address.line2,
      socials: site.socials.map((s) => ({ name: s.label, url: s.href })),
      footerBlurb: 'A creative production studio for content, film and brand identity.',
      copyright: '© 2026 Marca Creatives. All rights reserved.',
      seoTitle: 'MARCA Creatives | Content · Film · Brand Identity Studio',
      seoDescription:
        'A production studio for founders and brands who want their story told properly — short form, films, identity and the strategy that holds it together.',
    },
  });
  log('Settings: filled');
}

// ── 3. Home page ─────────────────────────────────────────────────────────
if (force || !(await isFilled('home'))) {
  const services = [];
  for (const s of otherServices) {
    const images = [];
    for (const img of s.images) images.push({ image: await media(img.src, s.id === 'photoshoot' ? 'north' : undefined), caption: img.caption });
    services.push({ title: s.title, leadService: s.id as 'photoshoot', colour: colour(s.bg), tagline: s.tagline, images });
  }

  await payload.updateGlobal({
    slug: 'home',
    data: {
      _status: 'published',
      hero: {
        video: await media(HERO_FILM),
        title: 'MARCA',
        tagline: 'Made to Make You Grow.',
        intro: 'We turn founders into content machines that attract clients, build authority, and drive revenue.',
        cornerLabel: 'Content · Film · Identity',
        buttonLabel: 'Start a project →',
      },
      clients: { names: clients.map((name) => ({ name })) },
      instagram: {
        kicker: 'Short Form',
        title: 'Instagram',
        lede: 'Content that helps you grow and sell.',
        reels: await Promise.all(
          reels.map(async (r) => ({ video: await media(VIDEO_URL(r.id)), title: r.title, subtitle: r.subtitle, badge: r.badge as 'Instagram Reel' })),
        ),
      },
      youtube: {
        kicker: 'Long Form',
        title: 'YouTube',
        lede: 'YouTube long-form content crafted to hook viewers early, tell compelling stories, and keep them watching.',
        films: await Promise.all(
          films.map(async (f) => ({ video: await media(VIDEO_URL(f.id)), title: f.title, titleAccent: f.titleSerif, category: f.category, description: f.desc })),
        ),
      },
      thumbnails: {
        kicker: 'Design',
        title: 'Thumbnails',
        lede: 'YouTube thumbnails designed to earn the click with bold visuals, clear messaging, and instant curiosity.',
        pieces: await Promise.all(
          pieces.map(async (p) => ({ image: await media(p.src), title: p.title, category: p.category, description: p.desc })),
        ),
      },
      process: {
        kicker: '03 — Process',
        title: 'Our Process',
        lede: 'Done for you end to end!',
        steps: processSteps.map((s) => ({ title: s.title, description: s.desc, colour: colour(s.bg) })),
      },
      caseStudies: {
        kicker: 'Case Studies',
        title: 'Proof, told as',
        titleAccent: 'a story.',
        buttonLabel: 'All studies →',
        endKicker: 'Ready for results?',
        endTitle: 'Ready to turn your story into authority?',
        endButton: 'Explore full case studies →',
      },
      services: {
        kicker: 'Other Services',
        title: 'Other Services',
        lede:
          'From photoshoots and ad campaigns to packaging and creative design, we offer end to end creative solutions that bring your brand to life and create a strong, consistent, and memorable presence across every touchpoint.',
        items: services,
      },
      packages: {
        kicker: 'Packages',
        title: 'Social Media & Content Production Packages',
        lede: 'Predictable, high-impact content engines designed to turn founders and businesses into industry authorities.',
        items: packages.map((p) => ({
          name: p.name,
          subtitle: p.subtitle,
          colour: colour(p.bg),
          features: p.items.map((i) => ({ text: i.text, highlight: Boolean((i as { highlight?: boolean }).highlight) })),
        })),
      },
      testimonials: {
        kicker: 'Testimonials',
        title: 'What it’s like to',
        titleAccent: 'work with us.',
        items: testimonials.map((t) => ({ quote: t.quote, name: t.name, role: t.role, colour: colour(t.bg) })),
      },
      faq: {
        kicker: 'FAQ',
        title: 'Frequently Asked Questions',
        lede: 'Everything you need to know about how we work, what we deliver, and what to expect when partnering with MARCA Creatives.',
        questions: faqs.map((f) => ({
          question: f.question,
          answer: f.answer.map((b) =>
            b.kind === 'p'
              ? { blockType: 'paragraph' as const, text: b.text }
              : b.kind === 'list'
                ? { blockType: 'list' as const, ordered: Boolean(b.ordered), items: b.items.map((text) => ({ text })) }
                : { blockType: 'subheading' as const, title: b.title, text: b.text },
          ),
        })),
      },
      contact: {
        video: await media(HERO_FILM),
        kicker: '10 — Let’s talk',
        title: 'Somebody is going to tell your story this year. It should be',
        titleAccent: 'you.',
        primaryButton: 'Start your project →',
        secondaryButton: 'Schedule a discovery call',
        note: 'Usually a reply within a day.',
        formTitle: 'Or tell us about your project',
        formButton: 'Send enquiry →',
      },
    },
  });
  log('Home page: filled and published');
}

// ── 4. Portfolio page + items ────────────────────────────────────────────
if (force || !(await isFilled('portfolio-page'))) {
  const meta = (key: string) => {
    const s = portfolioSections.find((p) => p.key === key)!;
    return { kicker: s.kicker, title: s.title, description: s.description };
  };
  await payload.updateGlobal({
    slug: 'portfolio-page',
    data: {
      _status: 'published',
      hero: {
        scriptLine: 'content · film · identity',
        bigWord: 'portfolio',
        title: 'Everything we have made.',
        lede: 'Fashion shoots, product shoots, branding, ad campaigns, reels and films — organised by the kind of work you came to see.',
        buttonLabel: 'Explore the work ↓',
      },
      sections: {
        fashionShoots: meta('fashion-shoots'),
        productShoots: meta('product-shoots'),
        brandingPackaging: meta('branding-packaging'),
        adCampaigns: meta('ad-campaigns'),
        instagramReels: meta('instagram-reels'),
        youtubeVideos: meta('youtube-videos'),
      },
      closing: { title: 'Something here look like', titleAccent: 'your project?', buttonLabel: 'Start a project →' },
    },
  });
  log('Portfolio page: filled and published');
}

const itemCount = await payload.count({ collection: 'portfolio-items' });
if (force || !itemCount.totalDocs) {
  if (force) await payload.delete({ collection: 'portfolio-items', where: { id: { exists: true } } });
  const shotSets: [PortfolioShot[], Record<number, [string, string]>, 'fashion-shoots' | 'product-shoots' | 'branding-packaging'][] = [
    [fashionShoots, fashionSets, 'fashion-shoots'],
    [productShoots, productSets, 'product-shoots'],
    [packagingDesigns, packagingSets, 'branding-packaging'],
  ];
  let n = 0;
  for (const [shots, names, category] of shotSets) {
    for (const shot of shots) {
      await payload.create({
        collection: 'portfolio-items',
        data: { category, media: (await media(IMAGE_URL(shot.id))) as string, title: names[shot.set][0], label: names[shot.set][1] },
      });
      n += 1;
    }
  }
  for (const item of portfolioItems.filter((i) => i.category === 'ad-campaigns')) {
    await payload.create({ collection: 'portfolio-items', data: { category: 'ad-campaigns', media: (await media(item.src)) as string, title: item.title, label: item.label } });
    n += 1;
  }
  log(`Portfolio: ${n} items`);
}

// ── 5. Case studies ──────────────────────────────────────────────────────
if (force || !(await isFilled('case-studies-page'))) {
  await payload.updateGlobal({
    slug: 'case-studies-page',
    data: {
      _status: 'published',
      hero: {
        video: await media(HERO_FILM),
        kicker: 'Case Studies',
        title: 'Proof, told as',
        titleAccent: 'a story.',
        lede: 'Every brand here started somewhere quieter. These are the accounts we built, the numbers behind them, and the content strategy that got them there.',
      },
      closing: { title: 'Want results like', titleAccent: 'these?', buttonLabel: 'Start a project →' },
    },
  });
  log('Case studies page: filled and published');
}

const csCount = await payload.count({ collection: 'case-studies' });
if (force || !csCount.totalDocs) {
  if (force) await payload.delete({ collection: 'case-studies', where: { id: { exists: true } } });
  for (const c of caseStudies) {
    let logo = await media(c.logo);
    // EOS Couture's profile picture was cropped out of its screenshot; save that crop as a real file.
    if (c.logo?.includes('c_crop')) {
      const up = await cloudinary.uploader.upload(c.logo.replace('/w_240,f_auto,q_auto/', '/'), {
        asset_folder: 'profiles_images',
        public_id: `${c.title.replace(/\W+/g, '_')}_profile`,
        overwrite: true,
      });
      const doc = await payload.create({ collection: 'media', data: { ...mediaDataFromAsset(up as unknown as CloudinaryAsset), title: `${c.title} profile` } });
      logo = doc.id;
    }
    await payload.create({
      collection: 'case-studies',
      data: {
        _status: 'published',
        title: c.title,
        category: c.category,
        year: c.year,
        chip: c.chip,
        featured: Boolean(c.featured),
        logo,
        beforeImage: await media(c.beforeImage),
        afterImage: (await media(c.afterImage)) as string,
        stats: c.stats.map((s) => ({ value: s.value, label: s.label })),
        descriptions: c.descriptions.map((text) => ({ text })),
        link: c.href,
      },
    });
  }
  log(`Case studies: ${caseStudies.length} created and published`);
}

const total = await payload.count({ collection: 'media' });
log(`Done. Media library now has ${total.totalDocs} files.`);
process.exit(0);
