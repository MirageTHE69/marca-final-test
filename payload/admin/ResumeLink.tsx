'use client';

import type { DefaultCellComponentProps } from 'payload';
import { useConfig, useDocumentInfo, useFormFields } from '@payloadcms/ui';

const size = (bytes?: number | null) => (bytes ? `${Math.max(1, Math.round(bytes / 1024))} KB` : '');

/** "Open CV" in the applications list. */
export function ResumeCell({ rowData }: DefaultCellComponentProps) {
  const { config } = useConfig();
  const row = rowData as { id?: string; resume?: { publicId?: string; format?: string } };
  if (!row.resume?.publicId || !row.id) return <span className="mc-empty">—</span>;
  return (
    <a
      className="mc-pill mc-pill--link"
      href={`${config.serverURL ?? ''}${config.routes.api}/applications/${row.id}/resume`}
      target="_blank"
      rel="noreferrer"
      onClick={(e) => e.stopPropagation()}
    >
      Open CV · {(row.resume.format ?? '').toUpperCase()}
    </a>
  );
}

/** The CV on an application's page: file name, size and a button to open it. */
export function ResumeField() {
  const { config } = useConfig();
  const { id } = useDocumentInfo();
  const fileName = useFormFields(([fields]) => fields['resume.fileName']?.value as string | undefined);
  const bytes = useFormFields(([fields]) => fields['resume.bytes']?.value as number | undefined);
  const publicId = useFormFields(([fields]) => fields['resume.publicId']?.value as string | undefined);
  if (!publicId || !id) return <p className="mc-empty">No CV attached.</p>;
  return (
    <div className="mc-resume">
      <span className="mc-resume__icon" aria-hidden="true">CV</span>
      <span className="mc-resume__name">
        <strong>{fileName || 'CV'}</strong>
        <span>{size(bytes)} · stored privately — the link works for 10 minutes</span>
      </span>
      <a className="mc-btn mc-btn--dark" href={`${config.serverURL ?? ''}${config.routes.api}/applications/${id}/resume`} target="_blank" rel="noreferrer">
        Open CV ↗
      </a>
    </div>
  );
}
