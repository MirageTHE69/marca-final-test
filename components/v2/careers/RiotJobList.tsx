'use client';

import Link from 'next/link';
import { useState } from 'react';

import { departmentLabel, modeLabel, typeLabel } from '@/lib/careers';

export type JobCard = {
  id: string;
  slug: string;
  title: string;
  department: string;
  employmentType: string;
  workMode?: string | null;
  location: string;
  experience?: string | null;
  summary?: string | null;
};

const TONES = ['var(--r-yellow)', 'var(--r-blue)', 'var(--r-orange)', 'var(--r-cream)'];

/**
 * Open roles, filtered by department. Every department shows, so people see
 * the whole studio; teams without an opening right now are greyed out.
 */
export default function RiotJobList({ jobs, departments }: { jobs: JobCard[]; departments: string[] }) {
  const [dept, setDept] = useState<string>('all');
  const shown = dept === 'all' ? jobs : jobs.filter((j) => j.department === dept);
  const count = (d: string) => jobs.filter((j) => j.department === d).length;

  return (
    <div className="riot-jobs">
      <div className="riot-jobs__filters" role="group" aria-label="Filter by department">
        <button type="button" className={`riot-chip${dept === 'all' ? ' is-on' : ''}`} aria-pressed={dept === 'all'} onClick={() => setDept('all')}>
          All roles · {jobs.length}
        </button>
        {departments.map((d) => (
          <button
            key={d}
            type="button"
            className={`riot-chip${dept === d ? ' is-on' : ''}`}
            aria-pressed={dept === d}
            disabled={!count(d)}
            onClick={() => setDept(d)}
          >
            {departmentLabel(d)} · {count(d)}
          </button>
        ))}
      </div>

      <ul className="riot-jobs__list">
        {shown.map((job, i) => (
          <li key={job.id}>
            <Link href={`/careers/${job.slug}`} className="riot-job" style={{ ['--tone' as string]: TONES[i % TONES.length] }}>
              <span className="riot-job__dept">{departmentLabel(job.department)}</span>
              <span className="riot-display riot-job__title">{job.title}</span>
              {job.summary && <span className="riot-job__summary">{job.summary}</span>}
              <span className="riot-job__facts">
                <span>{typeLabel(job.employmentType)}</span>
                {job.workMode && <span>{modeLabel(job.workMode)}</span>}
                <span>{job.location}</span>
                {job.experience && <span>{job.experience}</span>}
              </span>
              <span className="riot-job__go" aria-hidden="true">
                View &amp; apply <b>→</b>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
