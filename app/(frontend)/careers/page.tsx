import type { Metadata } from 'next';

import FitTitle from '@/components/v2/FitTitle';
import RiotFooter from '@/components/v2/RiotFooter';
import RiotHead from '@/components/v2/RiotHead';
import RiotNav from '@/components/v2/RiotNav';
import RiotProcess from '@/components/v2/RiotProcess';
import RiotTicker from '@/components/v2/RiotTicker';
import RiotApplyForm from '@/components/v2/careers/RiotApplyForm';
import RiotJobList from '@/components/v2/careers/RiotJobList';
import { CAREERS_DEFAULTS as D, JOB_DEPARTMENTS, or } from '@/lib/careers';
import { getCareersPage, getOpenJobs, getSettings } from '@/lib/cms';

export const metadata: Metadata = {
  title: 'Careers — MARCA Creatives',
  description: 'Make a career out of creativity. Open roles at MARCA across strategy, design, production, editing and social media — explore the positions and apply.',
  openGraph: { title: 'Careers at MARCA', description: 'Make a career out of creativity. Explore open positions at MARCA.' },
};

/** Text with line breaks as separate paragraphs. */
const paragraphs = (text: string) => text.split(/\n+/).map((t) => t.trim()).filter(Boolean);

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

/** /careers: hero, life at MARCA, why MARCA, open roles, and a general application. */
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
  const life = {
    kicker: or(page.life?.kicker, D.life.kicker),
    title: or(page.life?.title, D.life.title),
    lede: or(page.life?.lede, D.life.lede),
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
        {/* The title on one line; the text below is exactly as wide as it. */}
        <div className="riot-careers__intro">
          <p className="riot-careers__title">{hero.title}</p>
          <div className="riot-careers__lede">
            {paragraphs(hero.lede).map((t) => (
              <p key={t} className="riot-lede">
                {t}
              </p>
            ))}
          </div>
        </div>
        <div className="riot-careers__actions">
          <a href="#openings" className="riot-btn riot-btn-yellow">
            {hero.primaryButton}
          </a>
          <a href="#apply" className="riot-btn riot-btn-ghost" style={{ color: 'var(--r-cream)', borderColor: 'var(--r-cream)' }}>
            {hero.secondaryButton}
          </a>
        </div>
      </section>
      <RiotTicker names={hero.bandWords} label="At MARCA" />

      {/* Life at MARCA */}
      <section className="riot-cream riot-careers__life">
        <RiotHead kicker={life.kicker} title={life.title} color="var(--r-h-red)" />
        <div className="riot-careers__life-text">
          {paragraphs(life.lede).map((t, i) => (
            <p key={t} className={i === 0 ? 'riot-lede' : 'riot-careers__life-note'}>
              {t}
            </p>
          ))}
        </div>
      </section>

      {/* Why MARCA? — numbered cards that slide sideways as you scroll */}
      <RiotProcess
        id="why-marca"
        surface="riot-black"
        dark
        maxLines={2}
        hint="Scroll to see why →"
        data={{
          kicker: perks.kicker,
          title: perks.title,
          lede: perks.lede || null,
          steps: perks.items.map((p) => ({ title: p.title, description: p.text ?? '', colour: (p.colour ?? 'yellow') as never })),
        }}
      />

      {/* Open roles */}
      <section id="openings" className="riot-stripes" style={{ padding: 'clamp(56px,9vh,120px) clamp(18px,4vw,44px)', color: 'var(--r-ink)', borderTop: '2px solid var(--r-black)' }}>
        <RiotHead kicker={openings.kicker} title={openings.title} lede={openings.lede} color="var(--r-h-red)" />
        <div style={{ maxWidth: 1240, margin: 'clamp(30px,5vh,56px) auto 0' }}>
          {cards.length ? (
            <RiotJobList jobs={cards} departments={JOB_DEPARTMENTS.map((d) => d.value)} />
          ) : (
            <div className="riot-card riot-empty" style={{ background: 'var(--r-cream)' }}>
              <span className="riot-display" style={{ fontSize: 'clamp(28px,3.4vw,48px)' }}>{openings.emptyTitle}</span>
              <p>{openings.emptyText}</p>
              <a href="#apply" className="riot-btn riot-btn-yellow">
                Submit a general application →
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Don't see a role that fits? */}
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
