import Link from 'next/link';
import { getPayload } from 'payload';

import config from '@payload-config';

const SERVICE_LABELS: Record<string, string> = {
  photoshoot: 'Photoshoot',
  'ad-campaigns': 'Ad Campaigns',
  'packaging-creative-design': 'Packaging & Design',
  'social-media-content': 'Social Media & Content',
  other: 'General enquiry',
};

const STATUS_LABELS: Record<string, string> = { new: 'New', contacted: 'Contacted', qualified: 'Qualified', won: 'Won', lost: 'Lost' };

function timeAgo(iso: string) {
  const mins = Math.round((Date.now() - new Date(iso).getTime()) / 60000);
  if (mins < 1) return 'just now';
  if (mins < 60) return `${mins} min ago`;
  const hrs = Math.round(mins / 60);
  if (hrs < 24) return `${hrs} h ago`;
  const days = Math.round(hrs / 24);
  return days === 1 ? 'yesterday' : `${days} days ago`;
}

function greeting() {
  const h = Number(new Intl.DateTimeFormat('en-GB', { hour: 'numeric', hour12: false, timeZone: 'Asia/Kolkata' }).format(new Date()));
  return h < 12 ? 'Good morning' : h < 17 ? 'Good afternoon' : 'Good evening';
}

/** The admin home: what needs attention, and shortcuts to everyday jobs. */
export async function Dashboard() {
  const payload = await getPayload({ config });
  const monthStart = new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString();

  const [newLeads, monthLeads, recent, caseStudies, posts, drafts, media] = await Promise.all([
    payload.count({ collection: 'leads', where: { status: { equals: 'new' } } }),
    payload.count({ collection: 'leads', where: { createdAt: { greater_than_equal: monthStart } } }),
    payload.find({ collection: 'leads', sort: '-createdAt', limit: 5, depth: 0 }),
    payload.count({ collection: 'case-studies', where: { _status: { equals: 'published' } } }),
    payload.count({ collection: 'posts', where: { _status: { equals: 'published' } } }),
    payload.count({ collection: 'posts', where: { _status: { equals: 'draft' } } }),
    payload.count({ collection: 'media' }),
  ]);

  const stats = [
    { label: 'New leads', value: newLeads.totalDocs, note: 'waiting for a reply', href: '/admin/collections/leads?where[status][equals]=new', tone: 'yellow' },
    { label: 'Leads this month', value: monthLeads.totalDocs, note: 'from all website forms', href: '/admin/collections/leads', tone: 'blue' },
    { label: 'Case studies', value: caseStudies.totalDocs, note: 'live on the site', href: '/admin/collections/case-studies', tone: 'orange' },
    { label: 'Blog posts', value: posts.totalDocs, note: drafts.totalDocs ? `${drafts.totalDocs} draft${drafts.totalDocs === 1 ? '' : 's'} in progress` : 'published', href: '/admin/collections/posts', tone: 'olive' },
    { label: 'Media files', value: media.totalDocs, note: 'in the library', href: '/admin/collections/media', tone: 'cream' },
  ];

  const actions = [
    { label: 'Write a blog post', href: '/admin/collections/posts/create', icon: '✎' },
    { label: 'Upload media', href: '/admin/collections/media/create', icon: '↑' },
    { label: 'Add a case study', href: '/admin/collections/case-studies/create', icon: '+' },
    { label: 'Edit the home page', href: '/admin/globals/home', icon: '⌂' },
    { label: 'Add portfolio work', href: '/admin/collections/portfolio-items/create', icon: '◧' },
    { label: 'Contact details', href: '/admin/globals/settings', icon: '☎' },
  ];

  return (
    <div className="mc-dash">
      <header className="mc-dash__head">
        <div>
          <span className="mc-dash__kicker">Marca Creatives · Studio admin</span>
          <h1>{greeting()}.</h1>
          <p>
            {newLeads.totalDocs
              ? `You have ${newLeads.totalDocs} new lead${newLeads.totalDocs === 1 ? '' : 's'} waiting.`
              : 'No new leads waiting — you are all caught up.'}
          </p>
        </div>
        <a className="mc-btn mc-btn--dark" href="/" target="_blank" rel="noreferrer">
          View website ↗
        </a>
      </header>

      <section className="mc-dash__stats">
        {stats.map((s) => (
          <a key={s.label} href={s.href} className={`mc-stat mc-stat--${s.tone}`}>
            <span className="mc-stat__label">{s.label}</span>
            <strong className="mc-stat__value">{s.value}</strong>
            <span className="mc-stat__note">{s.note}</span>
          </a>
        ))}
      </section>

      <section className="mc-dash__grid">
        <div className="mc-panel">
          <div className="mc-panel__head">
            <h2>Latest leads</h2>
            <Link href="/admin/collections/leads">See all →</Link>
          </div>
          {recent.docs.length ? (
            <ul className="mc-leads">
              {recent.docs.map((lead) => (
                <li key={lead.id}>
                  <Link href={`/admin/collections/leads/${lead.id}`}>
                    <span className="mc-leads__avatar" aria-hidden="true">
                      {lead.name.trim().charAt(0).toUpperCase()}
                    </span>
                    <span className="mc-leads__who">
                      <strong>{lead.name}</strong>
                      <span>{SERVICE_LABELS[lead.service ?? 'other'] ?? 'General enquiry'} · {timeAgo(lead.createdAt)}</span>
                    </span>
                    <span className={`mc-status mc-status--${lead.status}`}>{STATUS_LABELS[lead.status] ?? lead.status}</span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mc-empty">No leads yet. Enquiries from the website forms will appear here.</p>
          )}
        </div>

        <div className="mc-panel">
          <div className="mc-panel__head">
            <h2>Quick actions</h2>
          </div>
          <div className="mc-actions">
            {actions.map((a) => (
              <a key={a.label} href={a.href} className="mc-action">
                <span className="mc-action__icon" aria-hidden="true">{a.icon}</span>
                {a.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
