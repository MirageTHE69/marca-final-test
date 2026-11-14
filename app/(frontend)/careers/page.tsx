import type { Metadata } from 'next';

import FitTitle from '@/components/v2/FitTitle';
import RiotFooter from '@/components/v2/RiotFooter';
import RiotHead from '@/components/v2/RiotHead';
import RiotNav from '@/components/v2/RiotNav';
import RiotTicker from '@/components/v2/RiotTicker';
import RiotApplyForm from '@/components/v2/careers/RiotApplyForm';
import RiotJobList from '@/components/v2/careers/RiotJobList';
import { CAREERS_DEFAULTS as D, or } from '@/lib/careers';
import { getCareersPage, getOpenJobs, getSettings } from '@/lib/cms';
import { colourVar } from '@/lib/theme';

export const metadata: Metadata = {
  title: 'Careers — Marca Creatives',
  description: 'Join Marca Creatives — open roles for editors, designers, storytellers and strategists. See the openings and apply in two minutes.',
  openGraph: { title: 'Careers at Marca Creatives', description: 'Open roles for editors, designers, storytellers and strategists.' },
};

/** Rotating sticker in the hero, text running around the ring. */
function HiringBadge() {
  return (
    <div className="riot-careers__badge" aria-hidden="true">
      <svg viewBox="0 0 140 140" width="100%" height="100%">
        <circle cx="70" cy="70" r="67" fill="var(--r-yellow)" stroke="var(--r-black)" strokeWidth="2" />
        <g className="riot-badge-ring">
          <defs>
            <path id="riot-hiring-path" d="M70,70 m-50,0 a50,50 0 1,1 100,0 a50,50 0 1,1 -100,0" />
          </defs>
          <text fontFamily="Archivo, sans-serif" fontSize="10.5" fontWeight="700" fill="var(--r-black)">
            {/* Stretched to exactly one lap of the ring, so the ends meet cleanly. */}
            <textPath href="#riot-hiring-path" textLength="306" lengthAdjust="spacing">
              NOW HIRING · JOIN MARCA · NOW HIRING · JOIN MARCA ·
            </textPath>
          </text>
        </g>
        <text x="70" y="84" textAnchor="middle" fontFamily="'Bricolage Grotesque', 'Archivo Black', sans-serif" fontSize="40" fontWeight="800" fill="var(--r-h-red)">
          ★
        </text>
      </svg>
    </div>
  );
}

/** /careers: hero, why Marca, open roles, how we hire, and a general application. */
export default async function CareersPage() {
  const [page, jobs, site] = await Promise.all([getCareersPage(), getOpenJobs(), getSettings()]);

  const hero = {
    scriptLine: or(page.hero?.scriptLine, D.hero.scriptLine),
    bigWord: or(page.hero?.bigWord, D.hero.bigWord),
    title: or(page.hero?.title, D.hero.title),
    lede: or(page.hero?.lede, D.hero.lede),
    primaryButton: or(page.hero?.primaryButton, D.hero.primaryButton),
    secondaryButton: or(page.hero?.secondaryButton, D.hero.secondaryButton),
    bandWords: or(page.hero?.bandWords?.map((w) => w.word), [...D.hero.bandWords]),
  };
  const perks = {
    kicker: or(page.perks?.kicker, D.perks.kicker),
    title: or(page.perks?.title, D.perks.title),
    lede: or(page.perks?.lede, D.perks.lede),
    items: or(page.perks?.items as { title: string; text?: string | null; colour?: string | null }[] | undefined, [...D.perks.items]),
  };
  const openings = {
    kicker: or(page.openings?.kicker, D.openings.kicker),
    title: or(page.openings?.title, D.openings.title),
    lede: or(page.openings?.lede, D.openings.lede),
    emptyTitle: or(page.openings?.emptyTitle, D.openings.emptyTitle),
    emptyText: or(page.openings?.emptyText, D.openings.emptyText),
  };
  const process = {
    kicker: or(page.process?.kicker, D.process.kicker),
    title: or(page.process?.title, D.process.title),
    lede: or(page.process?.lede, D.process.lede),
    steps: or(page.process?.steps as { title: string; text?: string | null }[] | undefined, [...D.process.steps]),
  };
  const general = {
    kicker: or(page.general?.kicker, D.general.kicker),
    title: or(page.general?.title, D.general.title),
    text: or(page.general?.text, D.general.text),
  };

  const cards = jobs
    .filter((j) => j.slug)
    .map((j) => ({
      id: String(j.id),
      slug: j.slug as string,
      title: j.title,
      department: j.department,
      employmentType: j.employmentType,
      workMode: j.workMode,
      location: j.location,
      experience: j.experience,
      summary: j.summary,
    }));

  return (
    <main className="riot">
      <RiotNav />

      {/* Hero */}
      <section className="riot-black riot-careers__hero">
        <HiringBadge />
        <span className="riot-script" style={{ fontSize: 'clamp(26px,2.8vw,40px)', color: 'var(--r-yellow)' }}>
          {hero.scriptLine}
        </span>
        <div className="riot-fit-wrap" style={{ marginInline: 'calc(-1 * clamp(20px,5vw,72px))' }}>
          <FitTitle as="h1" text={hero.bigWord} className="riot-display" style={{ color: 'var(--r-h-yellow)', letterSpacing: '-.055em', lineHeight: 0.82 }}>
            {hero.bigWord}
          </FitTitle>
        </div>
        <p className="riot-careers__title">{hero.title}</p>
        <p className="riot-lede riot-careers__lede">{hero.lede}</p>
        <div className="riot-careers__actions">
          <a href="#openings" className="riot-btn riot-btn-yellow">
            {hero.primaryButton}
          </a>
          <a href="#apply" className="riot-btn riot-btn-ghost" style={{ color: 'var(--r-cream)', borderColor: 'var(--r-cream)' }}>
            {hero.secondaryButton}
          </a>
          {cards.length > 0 && (
            <span className="riot-careers__count">
              <b>{cards.length}</b> open role{cards.length === 1 ? '' : 's'}
            </span>
          )}
        </div>
      </section>
      <RiotTicker names={hero.bandWords} label="We hire" />

      {/* Why Marca */}
      <section className="riot-cream" style={{ padding: 'clamp(40px,7vh,90px) clamp(18px,4vw,44px) clamp(60px,10vh,120px)' }}>
        <RiotHead kicker={perks.kicker} title={perks.title} lede={perks.lede} color="var(--r-h-red)" />
        <div className="riot-perks">
          {perks.items.map((p, i) => (
            <article key={`${p.title}-${i}`} className="riot-card riot-perk" style={{ background: colourVar(p.colour) }}>
              <span className="riot-perk__num">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="riot-display" style={{ fontSize: 'clamp(22px,2vw,30px)' }}>{p.title}</h3>
              {p.text && <p>{p.text}</p>}
            </article>
          ))}
        </div>
      </section>

      {/* Open roles */}
      <section id="openings" className="riot-stripes" style={{ padding: 'clamp(56px,9vh,120px) clamp(18px,4vw,44px)', color: 'var(--r-ink)', borderTop: '2px solid var(--r-black)' }}>
        <RiotHead kicker={openings.kicker} title={openings.title} lede={openings.lede} color="var(--r-h-red)" />
        <div style={{ maxWidth: 1240, margin: 'clamp(30px,5vh,56px) auto 0' }}>
          {cards.length ? (
            <RiotJobList jobs={cards} />
          ) : (
            <div className="riot-card riot-empty" style={{ background: 'var(--r-cream)' }}>
              <span className="riot-display" style={{ fontSize: 'clamp(28px,3.4vw,48px)' }}>{openings.emptyTitle}</span>
              <p>{openings.emptyText}</p>
              <a href="#apply" className="riot-btn riot-btn-yellow">
                Send your CV →
              </a>
            </div>
          )}
        </div>
      </section>

      {/* How we hire */}
      <section className="riot-black" style={{ padding: 'clamp(56px,9vh,120px) clamp(18px,4vw,44px)' }}>
        <RiotHead kicker={process.kicker} title={process.title} lede={process.lede} color="var(--r-h-yellow)" />
        <ol className="riot-steps">
          {process.steps.map((s, i) => (
            <li key={`${s.title}-${i}`} className="riot-step">
              <span className="riot-display riot-step__num">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="riot-display" style={{ fontSize: 'clamp(22px,2vw,30px)' }}>{s.title}</h3>
              {s.text && <p>{s.text}</p>}
            </li>
          ))}
        </ol>
      </section>

      {/* General application */}
      <section id="apply" className="riot-cream" style={{ padding: 'clamp(56px,9vh,120px) clamp(18px,4vw,44px)', borderTop: '2px solid var(--r-black)' }}>
        <div className="riot-careers__apply">
          <div className="riot-careers__apply-copy">
            <RiotHead kicker={general.kicker} title={general.title} lede={general.text} color="var(--r-h-blue)" place="start" maxLines={2} />
            <p className="riot-careers__mail">
              Prefer email? Write to <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
          </div>
          <RiotApplyForm email={site.email} />
        </div>
      </section>

      <RiotFooter />
    </main>
  );
}
