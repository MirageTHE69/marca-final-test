import Link from 'next/link';

import RiotFooter from '@/components/v2/RiotFooter';
import RiotNav from '@/components/v2/RiotNav';
import RiotRichText from '@/components/v2/RiotRichText';
import { departmentLabel, modeLabel, typeLabel } from '@/lib/careers';
import type { Job } from '@/payload/payload-types';

import RiotApplyForm from './RiotApplyForm';

const EMPLOYMENT: Record<string, string> = { 'full-time': 'FULL_TIME', 'part-time': 'PART_TIME', internship: 'INTERN', freelance: 'CONTRACTOR' };

function Points({ title, items }: { title: string; items?: { text: string }[] | null }) {
  if (!items?.length) return null;
  return (
    <section className="riot-jobpage__points">
      <h2 className="riot-display">{title}</h2>
      <ul>
        {items.map((p, i) => (
          <li key={i}>{p.text}</li>
        ))}
      </ul>
    </section>
  );
}

/** A job's page: what it is, the details, and the application form. */
export default function RiotJobView({ job, email }: { job: Job; email: string }) {
  const open = job.status === 'open';

  const facts = [
    { label: 'Team', value: departmentLabel(job.department) },
    { label: 'Type', value: typeLabel(job.employmentType) },
    { label: 'Where', value: [modeLabel(job.workMode), job.location].filter(Boolean).join(' · ') },
    job.experience ? { label: 'Experience', value: job.experience } : null,
    job.salary ? { label: 'Pay', value: job.salary } : null,
  ].filter(Boolean) as { label: string; value: string }[];

  // Search engines list open roles in their job results from this.
  const jsonLd = open
    ? {
        '@context': 'https://schema.org',
        '@type': 'JobPosting',
        title: job.title,
        description: job.summary || `${job.title} at MARCA Creatives, ${job.location}.`,
        datePosted: job.createdAt,
        employmentType: EMPLOYMENT[job.employmentType],
        hiringOrganization: { '@type': 'Organization', name: 'Marca Creatives', sameAs: 'https://www.marcacreative.com' },
        jobLocationType: job.workMode === 'remote' ? 'TELECOMMUTE' : undefined,
        jobLocation: { '@type': 'Place', address: { '@type': 'PostalAddress', addressLocality: job.location } },
      }
    : null;

  return (
    <main className="riot">
      <RiotNav />
      {jsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />}

      <header className="riot-stripes riot-jobpage__head">
        <div className="riot-jobpage__wrap">
          <Link href="/careers#openings" className="riot-jobpage__back">
            ← All open roles
          </Link>
          <span className="riot-kicker">{departmentLabel(job.department)}</span>
          <h1 className="riot-display riot-jobpage__title">{job.title}</h1>
          {job.summary && <p className="riot-lede riot-jobpage__summary">{job.summary}</p>}
          <ul className="riot-jobpage__facts">
            {facts.map((f) => (
              <li key={f.label}>
                <span>{f.label}</span>
                <strong>{f.value}</strong>
              </li>
            ))}
          </ul>
          {open ? (
            <a href="#apply" className="riot-btn riot-btn-yellow" style={{ alignSelf: 'flex-start' }}>
              Apply now ↓
            </a>
          ) : (
            <p className="riot-jobpage__closed">This role is closed and no longer taking applications.</p>
          )}
        </div>
      </header>

      <section className="riot-cream riot-jobpage__body">
        <div className="riot-jobpage__cols">
          <article className="riot-jobpage__text">
            {job.description && <RiotRichText data={job.description} />}
            <Points title="What you will do" items={job.responsibilities} />
            <Points title="What we are looking for" items={job.requirements} />
            <Points title="Nice to have" items={job.niceToHave} />
          </article>

          <aside id="apply" className="riot-jobpage__aside">
            {open ? (
              <RiotApplyForm jobId={String(job.id)} role={job.title} email={email} />
            ) : (
              <div className="riot-card riot-empty" style={{ background: 'var(--r-yellow)' }}>
                <span className="riot-display" style={{ fontSize: 'clamp(24px,2.4vw,34px)' }}>This role is closed</span>
                <p>See what else is open, or send us your CV for future roles.</p>
                <Link href="/careers#openings" className="riot-btn riot-btn-cream">
                  See open roles →
                </Link>
              </div>
            )}
          </aside>
        </div>
      </section>

      <RiotFooter />
    </main>
  );
}
