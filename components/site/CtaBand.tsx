import Link from 'next/link';
import { SITE } from '@/lib/site';
import Arrow from './Arrow';
import { revealDelay } from '@/lib/ui';

export default function CtaBand({
  title = 'Erzählen Sie uns, was online besser laufen soll.',
  text = 'Im ersten Gespräch klären wir Ziel, Ausgangslage und sinnvolle nächste Schritte. Danach erhalten Sie eine Einschätzung mit Aufwand und Ablauf – unverbindlich.',
  primaryLabel = 'Projekt besprechen',
  primaryHref = '/kontakt',
}: {
  title?: string;
  text?: string;
  primaryLabel?: string;
  primaryHref?: string;
}) {
  return (
    <section aria-labelledby="cta-titel" className="relative py-16 sm:py-24">
      <div className="wrap">
        <div className="bg-grid relative grid gap-10 overflow-hidden rounded-[2rem] border border-[var(--line-gold)] bg-night-700 p-8 shadow-[0_40px_120px_-40px_rgba(212,175,55,0.35)] sm:p-12 lg:grid-cols-12 lg:items-end lg:p-16">
          <h2 id="cta-titel" className="t-h2 max-w-[18ch] lg:col-span-7" data-reveal>
            {title}
          </h2>
          <div className="lg:col-span-5" data-reveal style={revealDelay(120)}>
            <p className="muted max-w-md">{text}</p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <Link href={primaryHref} className="btn btn-gold">
                {primaryLabel}
                <Arrow />
              </Link>
              <a href={SITE.phoneHref} className="link text-ink-soft hover:text-ink">
                <span className="whitespace-nowrap">oder anrufen: {SITE.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
