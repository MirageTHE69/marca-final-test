/**
 * Content for the Careers page (from "MARCA — Careers Page Content"). The
 * admin's "Careers page" can change any of it; anything left empty there
 * falls back to the text here, so the page always reads complete.
 */
export const CAREERS_DEFAULTS = {
  hero: {
    scriptLine: 'careers at marca',
    bigWord: 'careers',
    title: 'Make a career out of creativity.',
    lede: 'We’re not here to create more content. We’re here to create work that makes people stop, think, watch and remember.\nAt MARCA, we bring strategy, storytelling and production together to build brands people pay attention to.',
    primaryButton: 'Explore open positions ↓',
    secondaryButton: 'Submit a general application',
    bandWords: ['Strategy', 'Storytelling', 'Production', 'Design', 'Editing', 'Social'],
  },
  life: {
    kicker: 'Life at MARCA',
    title: 'Ideas don’t just happen. People make them happen.',
    lede: 'A typical day at MARCA could mean brainstorming a new campaign, shooting with an expert, building a creative set or spending hours perfecting a 30-second edit.\nIt’s fast-paced, hands-on and never quite the same.',
  },
  perks: {
    kicker: 'Why MARCA?',
    title: 'More than a job. A place to build your craft.',
    lede: '',
    items: [
      { title: 'Work that challenges you.', text: 'Real brands, interesting industries and creative challenges that push you to think beyond the obvious.', colour: 'yellow' },
      { title: 'Learn by doing.', text: 'Hands-on exposure to strategy, production and post-production across diverse projects.', colour: 'blue' },
      { title: 'Creativity with purpose.', text: 'We don’t create just to fill a calendar. Every idea has an objective, every story has a reason.', colour: 'orange' },
      { title: 'A culture of experimentation.', text: 'We encourage fresh perspectives, new ideas and people who aren’t afraid to try something different.', colour: 'cream' },
      { title: 'Grow with the work.', text: 'Take ownership, sharpen your skills, explore new possibilities and grow alongside a team that is constantly evolving.', colour: 'olive' },
    ],
  },
  openings: {
    kicker: 'Find your space at MARCA',
    title: 'Open roles',
    lede: 'Different talents. One creative ecosystem.',
    emptyTitle: 'No open roles right now',
    emptyText: 'We’re always open to meeting creative minds. Send us your work and we’ll reach out when something fits.',
  },
  general: {
    kicker: 'Don’t see a role that fits?',
    title: 'We’re always open to meeting creative minds.',
    text: 'Show us what you do, tell us what excites you and why you’d like to be part of MARCA.',
  },
} as const;

export type CareersDefaults = typeof CAREERS_DEFAULTS;

/** Admin value, or the starter text when the field is empty. */
export const or = <T,>(value: T | null | undefined, fallback: T): T =>
  value === null || value === undefined || (typeof value === 'string' && !value.trim()) || (Array.isArray(value) && !value.length) ? fallback : value;

/* Job facts: the choices in the admin, and their labels on the site. */
export const JOB_DEPARTMENTS = [
  { label: 'Strategy & Research', value: 'strategy' },
  { label: 'Creative & Design', value: 'creative' },
  { label: 'Production & Studio', value: 'production' },
  { label: 'Editing & Post-Production', value: 'editing' },
  { label: 'Social Media & Client Management', value: 'social' },
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
