import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/site/Breadcrumbs';
import CtaBand from '@/components/site/CtaBand';
import Arrow from '@/components/site/Arrow';
import { PHASES, SERVICES } from '@/lib/services';
import { MORE_SERVICES, absoluteUrl } from '@/lib/site';
import { heroDelay, revealDelay } from '@/lib/ui';

export const metadata: Metadata = {
  title: 'Leistungen: SEO, Webentwicklung, Google Ads, Social Media, Software und KI',
  description:
    'Alle Leistungen von CAIT im Überblick: Suchmaschinenoptimierung, Webdesign und Webentwicklung, Google Ads, Social Media, individuelle Softwareentwicklung und KI-Lösungen.',
  alternates: { canonical: absoluteUrl('/leistungen') },
  openGraph: { url: absoluteUrl('/leistungen'), title: 'Leistungen von CAIT' },
};

export default function LeistungenPage() {
  return (
    <>
      <section className="pb-12 pt-[calc(var(--header-h)+3rem)] sm:pb-16 sm:pt-[calc(var(--header-h)+4.5rem)]">
        <div className="wrap">
          <Breadcrumbs items={[{ href: '/leistungen', label: 'Leistungen' }]} />
          <h1 className="t-h1 mt-10 max-w-[18ch]">
            <span className="hero-line">
              <span style={heroDelay(40)}>Leistungen, die zusammen funktionieren</span>
            </span>
          </h1>
          <p className="hero-fade t-lead mt-8 max-w-[60ch] text-ink-soft" style={heroDelay(240)}>
            Von der Sichtbarkeit bei Google bis zur Automatisierung im Büro: Jede Leistung können Sie einzeln buchen. Ihre
            volle Wirkung entfalten sie, wenn sie auf dasselbe Ziel ausgerichtet sind.
          </p>
        </div>
      </section>

      {PHASES.map((phase, pi) => (
        <section
          key={phase.name}
          aria-labelledby={`phase-${pi}`}
          className={`${pi % 2 === 0 ? 'on-light' : ''} py-16 sm:py-24`}
        >
          <div className="wrap grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 id={`phase-${pi}`} className="t-h2" data-reveal>
                {phase.name}
              </h2>
              <p className="muted mt-4 max-w-sm" data-reveal>
                {phase.text}
              </p>
            </div>
            <ul className="lg:col-span-8">
              {SERVICES.filter((s) => s.phase === phase.name).map((s, i) => (
                <li
                  key={s.href}
                  className={`border-t ${pi % 2 === 0 ? 'border-[var(--line-light)]' : 'border-[var(--line-dark)]'}`}
                  data-reveal
                  style={revealDelay(i * 80)}
                >
                  <Link href={s.href} className="row-link group grid gap-6 py-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
                    <div>
                      <h3 className="flex items-center gap-4 font-display text-[2rem] leading-tight">
                        <span className={pi % 2 === 0 ? 'group-hover:text-gold-500' : 'group-hover:text-gold-200'}>{s.label}</span>
                        <Arrow className={pi % 2 === 0 ? 'text-gold-500' : 'text-gold-300'} />
                      </h3>
                      <p className="muted mt-3">{s.short}</p>
                    </div>
                    <ul className="space-y-2 text-[0.95rem]">
                      {s.deliverables.flatMap((d) => d.items.slice(0, 2)).map((item) => (
                        <li key={item} className="flex gap-3">
                          <span aria-hidden="true" className="mt-[0.7em] h-px w-3 shrink-0 bg-gold-300" />
                          <span className="opacity-90">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      <section aria-labelledby="weitere" className="border-t border-[var(--line-dark)] py-16 sm:py-20">
        <div className="wrap grid gap-8 lg:grid-cols-12">
          <h2 id="weitere" className="t-h3 lg:col-span-4">
            Ergänzende Leistungen
          </h2>
          <ul className="grid gap-x-8 sm:grid-cols-2 lg:col-span-8">
            {MORE_SERVICES.map((l) => (
              <li key={l.href} className="border-b border-[var(--line-dark)]">
                <Link href={l.href} className="row-link flex items-center justify-between gap-4 py-4 text-ink-soft transition-colors hover:text-gold-200">
                  {l.label}
                  <Arrow />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand title="Nicht sicher, womit Sie anfangen sollten?" text="Beschreiben Sie uns Ihr Ziel. Wir empfehlen, welche Leistung zuerst den größten Unterschied macht – auch wenn das weniger ist, als Sie erwartet haben." />
    </>
  );
}
