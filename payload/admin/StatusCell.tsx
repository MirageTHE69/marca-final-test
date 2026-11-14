'use client';

import type { DefaultCellComponentProps } from 'payload';

const LABELS: Record<string, string> = { new: 'New', contacted: 'Contacted', qualified: 'Qualified', won: 'Won', lost: 'Lost' };

/** Lead status as a coloured pill, so new leads stand out in the list. */
export function StatusCell({ cellData }: DefaultCellComponentProps) {
  const status = typeof cellData === 'string' ? cellData : 'new';
  return <span className={`mc-status mc-status--${status}`}>{LABELS[status] ?? status}</span>;
}

const APPLICATION_LABELS: Record<string, string> = {
  new: 'New',
  reviewing: 'Reviewing',
  shortlisted: 'Shortlisted',
  interview: 'Interview',
  offer: 'Offer',
  hired: 'Hired',
  rejected: 'Not a fit',
};

/** Applicant status as a coloured pill. */
export function ApplicationStatusCell({ cellData }: DefaultCellComponentProps) {
  const status = typeof cellData === 'string' ? cellData : 'new';
  return <span className={`mc-status mc-status--app-${status}`}>{APPLICATION_LABELS[status] ?? status}</span>;
}

/** Whether a job is taking applications. */
export function JobStatusCell({ cellData }: DefaultCellComponentProps) {
  const open = cellData !== 'closed';
  return <span className={`mc-status mc-status--${open ? 'job-open' : 'job-closed'}`}>{open ? 'Open' : 'Closed'}</span>;
}
