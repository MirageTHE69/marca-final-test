/** A palette name from the admin as the theme's CSS variable. */
export const colourVar = (c?: string | null) => `var(--r-${c || 'yellow'})`;

/** Two-digit step number: 1 → "01". */
export const pad2 = (n: number) => String(n).padStart(2, '0');
