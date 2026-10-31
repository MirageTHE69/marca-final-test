/**
 * Delivery helpers for media documents. A media document stores the clean
 * original URL; every size, crop and poster frame is derived from it with a
 * Cloudinary transformation, so nothing is stored twice. URLs that are not
 * Cloudinary (e.g. ImageKit) pass through unchanged.
 */

export type MediaDoc = {
  id?: string;
  url: string;
  title?: string | null;
  alt?: string | null;
  resourceType?: 'image' | 'video' | null;
  width?: number | null;
  height?: number | null;
  /** Where crops anchor: auto (subject detection), north (top), center, south. */
  focus?: 'auto' | 'north' | 'center' | 'south' | null;
};

/** A relationship value may be an id (not populated) or the document. */
export type MediaRef = MediaDoc | string | null | undefined;

export const asMedia = (ref: MediaRef): MediaDoc | null =>
  ref && typeof ref === 'object' && typeof ref.url === 'string' ? ref : null;

export const isCloudinary = (url: string) => /res\.cloudinary\.com\/[^/]+\/(image|video)\/upload\//.test(url);

/** Inserts a Cloudinary transformation into a clean delivery URL. */
export const transform = (url: string, t: string) => (isCloudinary(url) && t ? url.replace('/upload/', `/upload/${t}/`) : url);

type ImageOpts = { width?: number; height?: number; aspect?: string; crop?: 'fill' | 'limit' | 'pad'; focus?: MediaDoc['focus'] };

/** An optimised image URL: right format and quality for the browser, sized to fit. */
export function imageUrl(m: MediaDoc | null | undefined, opts: ImageOpts = {}): string | undefined {
  if (!m?.url) return undefined;
  const { width = 1000, height, aspect, crop = height || aspect ? 'fill' : 'limit' } = opts;
  const focus = opts.focus ?? m.focus ?? 'auto';
  const parts = [`c_${crop}`];
  if (crop === 'fill') parts.push(`g_${focus}`);
  if (aspect) parts.push(`ar_${aspect}`);
  parts.push(`w_${width}`);
  if (height) parts.push(`h_${height}`);
  parts.push('f_auto', 'q_auto');
  return transform(m.url, parts.join(','));
}

export const videoUrl = (m: MediaDoc | null | undefined) => m?.url;

/** A still frame of a video, shown until the video starts. */
export function posterUrl(m: MediaDoc | null | undefined, width = 900, second = 0): string | undefined {
  if (!m?.url || !isCloudinary(m.url)) return undefined;
  return transform(m.url, `so_${second},w_${width},c_limit,q_auto,f_jpg`).replace(/\.[a-z0-9]+$/i, '.jpg');
}

/** A small preview for any media: the image itself, or a video's first frame. */
export function thumbUrl(m: MediaDoc | null | undefined, w = 240, h = 160): string | undefined {
  if (!m?.url) return undefined;
  if (m.resourceType === 'video') return isCloudinary(m.url) ? transform(m.url, `so_0,c_fill,w_${w},h_${h},q_auto,f_jpg`).replace(/\.[a-z0-9]+$/i, '.jpg') : undefined;
  return isCloudinary(m.url) ? transform(m.url, `c_fill,g_auto,w_${w},h_${h},f_auto,q_auto`) : m.url;
}
