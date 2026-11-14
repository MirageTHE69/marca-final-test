'use client';

import { useEffect, useRef, useState, type DragEvent, type FormEvent } from 'react';

import { EXPERIENCE_LEVELS } from '@/lib/careers';

const MAX_BYTES = 4 * 1024 * 1024;
const ACCEPT = '.pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document';

type Props = {
  /** The job's id; leave out for a general application. */
  jobId?: string;
  /** Shown in the heading, e.g. "Video Editor". */
  role?: string;
  email: string;
};

const sizeLabel = (b: number) => (b > 1024 * 1024 ? `${(b / 1024 / 1024).toFixed(1)} MB` : `${Math.max(1, Math.round(b / 1024))} KB`);

/** The application form; applications land in the admin's Careers → Applications. */
export default function RiotApplyForm({ jobId, role, email }: Props) {
  const openedAt = useRef(0);
  const fileInput = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [dragging, setDragging] = useState(false);
  const [error, setError] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    openedAt.current = Date.now();
  }, []);

  const pick = (f: File | null | undefined) => {
    setError('');
    if (!f) return;
    if (!/\.(pdf|docx?)$/i.test(f.name)) return setError('Please attach your CV as a PDF or Word file.');
    if (f.size > MAX_BYTES) return setError('Your CV is over 4 MB — please attach a smaller file.');
    setFile(f);
  };

  const onDrop = (e: DragEvent) => {
    e.preventDefault();
    setDragging(false);
    pick(e.dataTransfer.files?.[0]);
  };

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) return setError('Please attach your CV.');
    const data = new FormData(e.currentTarget);
    data.set('resume', file);
    data.set('openedAt', String(openedAt.current));
    if (jobId) data.set('job', jobId);
    setError('');
    setSending(true);
    try {
      const res = await fetch('/api/applications/apply', { method: 'POST', body: data });
      const body = (await res.json().catch(() => null)) as { ok: boolean; error?: string } | null;
      if (body?.ok) setSent(true);
      else setError(body?.error || 'Something went wrong. Please try again.');
    } catch {
      setError('Could not reach us — check your connection and try again.');
    } finally {
      setSending(false);
    }
  };

  if (sent) {
    return (
      <div className="riot-apply riot-apply--done" role="status">
        <span className="riot-apply__tick" aria-hidden="true">✓</span>
        <span className="riot-display" style={{ fontSize: 'clamp(28px,2.8vw,40px)' }}>Application sent!</span>
        <p>
          Thank you{role ? ` for applying for ${role}` : ''}. We read every application and will get back to you within a week.
        </p>
      </div>
    );
  }

  return (
    <form className="riot-apply" onSubmit={submit} noValidate={false}>
      <div className="riot-apply__head">
        <span className="riot-kicker">{role ? 'Apply for this role' : 'General application'}</span>
        <span className="riot-display" style={{ fontSize: 'clamp(26px,2.4vw,36px)' }}>{role || 'Tell us about you'}</span>
      </div>

      {/* Spam trap: hidden from people, filled in by bots. */}
      <input name="website" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" className="riot-apply__trap" />

      <div className="riot-apply__grid">
        <label>
          <span>Full name *</span>
          <input name="name" type="text" required maxLength={120} autoComplete="name" />
        </label>
        <label>
          <span>Email *</span>
          <input name="email" type="email" required maxLength={200} autoComplete="email" />
        </label>
        <label>
          <span>Phone *</span>
          <input name="phone" type="tel" required maxLength={40} autoComplete="tel" />
        </label>
        <label>
          <span>City</span>
          <input name="city" type="text" maxLength={80} autoComplete="address-level2" />
        </label>
        <label>
          <span>Experience</span>
          <select name="experience" defaultValue="">
            <option value="">Select…</option>
            {EXPERIENCE_LEVELS.map((x) => (
              <option key={x.value} value={x.value}>
                {x.label}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span>Can start</span>
          <input name="noticePeriod" type="text" maxLength={60} placeholder="Immediately, 30 days…" />
        </label>
        <label>
          <span>Portfolio / showreel</span>
          <input name="portfolio" type="text" inputMode="url" maxLength={400} placeholder="Link to your best work" />
        </label>
        <label>
          <span>LinkedIn</span>
          <input name="linkedin" type="text" inputMode="url" maxLength={400} placeholder="linkedin.com/in/…" />
        </label>
      </div>

      <label className="riot-apply__wide">
        <span>Anything you want us to know</span>
        <textarea name="message" rows={4} maxLength={4000} placeholder="What you are great at, the work you are proudest of, why Marca…" />
      </label>

      <div
        className={`riot-drop${dragging ? ' is-over' : ''}${file ? ' has-file' : ''}`}
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={onDrop}
      >
        <input ref={fileInput} id={`cv-${jobId ?? 'general'}`} type="file" accept={ACCEPT} className="riot-drop__input" onChange={(e) => pick(e.target.files?.[0])} />
        {file ? (
          <>
            <span className="riot-drop__icon" aria-hidden="true">CV</span>
            <span className="riot-drop__text">
              <strong>{file.name}</strong>
              <span>{sizeLabel(file.size)}</span>
            </span>
            <button
              type="button"
              className="riot-drop__change"
              onClick={() => {
                setFile(null);
                if (fileInput.current) fileInput.current.value = '';
              }}
            >
              Remove
            </button>
          </>
        ) : (
          <label htmlFor={`cv-${jobId ?? 'general'}`} className="riot-drop__empty">
            <span className="riot-drop__icon" aria-hidden="true">↑</span>
            <span className="riot-drop__text">
              <strong>Attach your CV *</strong>
              <span>PDF or Word, up to 4 MB — click or drop it here</span>
            </span>
          </label>
        )}
      </div>

      {error && (
        <p role="alert" className="riot-apply__error">
          {error}{' '}
          <span>
            Stuck? Email <a href={`mailto:${email}`}>{email}</a>
          </span>
        </p>
      )}

      <button type="submit" disabled={sending} className="riot-btn riot-btn-yellow riot-apply__send">
        {sending ? 'Sending your application…' : 'Send application →'}
      </button>
      <p className="riot-apply__small">Your details are only used to consider you for roles at Marca Creatives.</p>
    </form>
  );
}
