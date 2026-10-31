'use client';

import type { DefaultCellComponentProps } from 'payload';

const LABELS: Record<string, string> = { new: 'New', contacted: 'Contacted', qualified: 'Qualified', won: 'Won', lost: 'Lost' };

/** Lead status as a coloured pill, so new leads stand out in the list. */
export function StatusCell({ cellData }: DefaultCellComponentProps) {
  const status = typeof cellData === 'string' ? cellData : 'new';
  return <span className={`mc-status mc-status--${status}`}>{LABELS[status] ?? status}</span>;
}
