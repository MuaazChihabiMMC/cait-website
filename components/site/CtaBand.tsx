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
    <section aria-labelledby="cta-titel" className="relative overflow-hidden border-t border-[var(--line-dark)] bg-night-900">
      <div className="wrap py-20 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <h2 id="cta-titel" className="t-h2 max-w-[18ch] lg:col-span-7" data-reveal>
            {title}
          </h2>
          <div className="lg:col-span-5" data-reveal style={revealDelay(120)}>
            <p className="muted max-w-md">{text}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
              <Link href={primaryHref} className="btn btn-gold">
                {primaryLabel}
                <Arrow />
              </Link>
              <a href={SITE.phoneHref} className="link text-ink-soft hover:text-ink">
                oder anrufen: {SITE.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
