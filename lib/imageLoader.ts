'use client';

/**
 * Image loader for next/image: Cloudinary resizes images itself, so the
 * browser asks Cloudinary directly for the width it needs instead of going
 * through Vercel's image optimiser. That optimiser was dropping requests
 * (connection resets left random slides blank) and its free allowance is
 * small. Each width is a chained transformation added after whatever crop
 * the URL already asks for; anything that isn't Cloudinary is used as is.
 */
export default function cloudinaryLoader({ src, width, quality }: { src: string; width: number; quality?: number }) {
  const m = src.match(/^(https:\/\/res\.cloudinary\.com\/[^/]+\/image\/upload\/)(.*)$/);
  if (!m) return src;
  const resize = `c_limit,w_${width},f_auto,q_${quality ?? 'auto'}`;
  const rest = m[2];
  // Insert just before the version (v123…) or the public id, after any existing transformations.
  const at = rest.search(/(^|\/)v\d+\//);
  if (at >= 0) {
    const cut = rest[at] === '/' ? at + 1 : at;
    return `${m[1]}${rest.slice(0, cut)}${resize}/${rest.slice(cut)}`;
  }
  return `${m[1]}${resize}/${rest}`;
}
