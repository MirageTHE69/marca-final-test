/**
 * Starter content for the Careers page. The admin's "Careers page" fills
 * these in; anything left empty there falls back to the text here, so the
 * page always reads complete.
 */
export const CAREERS_DEFAULTS = {
  hero: {
    scriptLine: 'we are hiring',
    bigWord: 'careers',
    title: 'Make the work people stop scrolling for.',
    lede: 'Marca is a small, fast studio of editors, designers and storytellers building content machines for founders and brands. Come do the best work of your life with us.',
    primaryButton: 'See open roles ↓',
    secondaryButton: 'Send your CV',
    bandWords: ['Editors', 'Designers', 'Storytellers', 'Strategists', 'Shooters', 'Producers'],
  },
  perks: {
    kicker: 'Why Marca',
    title: 'Life at the studio',
    lede: 'We keep the team small and the standards high — so your work ships, gets seen and gets better every week.',
    items: [
      { title: 'Real briefs, real brands', text: 'Founders, doctors, architects and consumer brands — work that goes live to millions, not a drawer.', colour: 'yellow' },
      { title: 'Grow fast', text: 'Weekly feedback, open reviews of what performed and why, and room to own a client end to end.', colour: 'blue' },
      { title: 'Proper kit', text: 'A dedicated shoot setup, good machines and the tools you need — you focus on the craft.', colour: 'orange' },
      { title: 'Small team, big say', text: 'No layers. Your ideas reach the work and the client in days, not quarters.', colour: 'cream' },
      { title: 'Flexible where it counts', text: 'Hybrid days for focused edit work, and time off that is actually taken.', colour: 'olive' },
      { title: 'Paid fairly, on time', text: 'Clear pay, a review every six months and a bonus when the work wins.', colour: 'yellow' },
    ],
  },
  openings: {
    kicker: 'Open roles',
    title: 'Join the team',
    lede: 'Pick a role to read more and apply. Applications go straight to the people you would work with.',
    emptyTitle: 'No open roles right now',
    emptyText: 'We are always happy to meet great people. Send your CV and portfolio and we will reach out when something fits.',
  },
  process: {
    kicker: 'How we hire',
    title: 'Four steps, no ghosting',
    lede: 'You hear back from us within a week of applying — whatever the answer.',
    steps: [
      { title: 'Apply', text: 'Send your CV and the work you are proudest of. Two minutes, no cover-letter essays.' },
      { title: 'Intro call', text: 'A 20-minute chat about you, the role and how we work.' },
      { title: 'Small task', text: 'A short, paid task close to the real job — so we both see the fit.' },
      { title: 'Meet the team', text: 'A final conversation with the founders, then an offer.' },
    ],
  },
  general: {
    kicker: 'Don’t see your role?',
    title: 'Send us your work anyway',
    text: 'Great editors, designers and storytellers are always welcome. Tell us what you do best.',
  },
} as const;

export type CareersDefaults = typeof CAREERS_DEFAULTS;

/** Admin value, or the starter text when the field is empty. */
export const or = <T,>(value: T | null | undefined, fallback: T): T =>
  value === null || value === undefined || (typeof value === 'string' && !value.trim()) || (Array.isArray(value) && !value.length) ? fallback : value;

/* Job facts: the choices in the admin, and their labels on the site. */
export const JOB_DEPARTMENTS = [
  { label: 'Video & Editing', value: 'video' },
  { label: 'Design', value: 'design' },
  { label: 'Content & Strategy', value: 'content' },
  { label: 'Production', value: 'production' },
  { label: 'Marketing & Growth', value: 'marketing' },
  { label: 'Operations', value: 'operations' },
] as const;

export const JOB_TYPES = [
  { label: 'Full-time', value: 'full-time' },
  { label: 'Part-time', value: 'part-time' },
  { label: 'Internship', value: 'internship' },
  { label: 'Freelance / Contract', value: 'freelance' },
] as const;

export const JOB_MODES = [
  { label: 'On-site', value: 'on-site' },
  { label: 'Hybrid', value: 'hybrid' },
  { label: 'Remote', value: 'remote' },
] as const;


export const EXPERIENCE_LEVELS = [
  { label: 'Fresher / student', value: 'fresher' },
  { label: 'Under 1 year', value: 'lt1' },
  { label: '1–3 years', value: '1-3' },
  { label: '3–5 years', value: '3-5' },
  { label: '5+ years', value: '5plus' },
] as const;

const labelOf = (list: readonly { label: string; value: string }[], v?: string | null) => list.find((x) => x.value === v)?.label ?? '';
export const departmentLabel = (v?: string | null) => labelOf(JOB_DEPARTMENTS, v);
export const typeLabel = (v?: string | null) => labelOf(JOB_TYPES, v);
export const modeLabel = (v?: string | null) => labelOf(JOB_MODES, v);
