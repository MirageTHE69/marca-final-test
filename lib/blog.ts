/** Blog categories, shared by the admin and the site. */
export const POST_CATEGORIES = [
  { label: 'Insights', value: 'insights' },
  { label: 'Content strategy', value: 'content-strategy' },
  { label: 'Behind the scenes', value: 'behind-the-scenes' },
  { label: 'Case notes', value: 'case-notes' },
  { label: 'Studio news', value: 'studio-news' },
] as const;

export const categoryLabel = (value?: string | null) => POST_CATEGORIES.find((c) => c.value === value)?.label ?? 'Insights';

export const formatDate = (iso?: string | null) =>
  iso ? new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }).format(new Date(iso)) : '';
