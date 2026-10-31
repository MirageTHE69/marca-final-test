import { revalidatePath } from 'next/cache';

/**
 * Refreshes every public page after content changes, so a publish shows on
 * the live site within seconds without a redeploy. Outside a Next.js request
 * (seed scripts) there is nothing to refresh, so the call is skipped.
 */
export function revalidateSite() {
  try {
    revalidatePath('/', 'layout');
  } catch {
    // Not running inside Next.js.
  }
}

export const revalidateAfterChange = <T>({ doc }: { doc: T }) => {
  revalidateSite();
  return doc;
};

export const revalidateAfterDelete = <T>({ doc }: { doc: T }) => {
  revalidateSite();
  return doc;
};
