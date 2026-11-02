import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumbs from './Breadcrumbs';
import CtaBand from './CtaBand';
import Faq from './Faq';
import JsonLd from './JsonLd';
import ServiceVisual from './ServiceVisual';
import Arrow from './Arrow';
import { SERVICES, type Service } from '@/lib/services';
import { SITE, absoluteUrl } from '@/lib/site';
import { heroDelay, revealDelay } from '@/lib/ui';

export function serviceMetadata(s: Service): Metadata {
  return {
    title: { absolute: `${s.metaTitle} | CAIT` },
    description: s.metaDescription,
    alternates: { canonical: absoluteUrl(s.href) },
    openGraph: {
      title: s.metaTitle,
      description: s.metaDescription,
      url: absoluteUrl(s.href),
      type: 'website',
    },
  };
}

export default function ServicePage({ service: s }: { service: Service }) {
  const related = s.related.map((h) => SERVICES.find((x) => x.href === h)!).filter(Boolean);

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: s.label,
          serviceType: s.schemaType,
          description: s.metaDescription,
          url: absoluteUrl(s.href),
          provider: { '@id': `${SITE.url}/#organization` },
          areaServed: [
            { '@type': 'City', name: 'Berlin' },
            { '@type': 'Country', name: 'Deutschland' },
          ],
        }}
      />

      {/* Hero */}
      <section className="bg-grid relative overflow-hidden pb-16 pt-[calc(var(--header-h)+3rem)] sm:pb-24 sm:pt-[calc(var(--header-h)+4.5rem)]">
        <div className="wrap grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <Breadcrumbs items={[{ href: '/leistungen', label: 'Leistungen' }, { href: s.href, label: s.label }]} />
            <p className="hero-fade eyebrow mt-10" style={heroDelay(0)}>
              {s.label}
            </p>
            <h1 className="t-h1 mt-5 max-w-[20ch]">
              <span className="hero-line">
                <span style={heroDelay(60)}>{s.h1}</span>
              </span>
            </h1>
            <p className="hero-fade t-lead mt-8 max-w-[60ch] text-ink-soft" style={heroDelay(260)}>
              {s.intro}
            </p>
            <div className="hero-fade mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6" style={heroDelay(380)}>
              <Link href="/kontakt" className="btn btn-gold">
                Projekt besprechen
                <Arrow />
              </Link>
              <a href="#ablauf" className="link text-ink-soft hover:text-ink">
                So läuft die Zusammenarbeit
              </a>
            </div>
          </div>
          <div className="hero-fade lg:col-span-5" style={heroDelay(300)}>
            <ServiceVisual href={s.href} />
          </div>
        </div>
      </section>

      {/* Für wen */}
      <section aria-labelledby="fuer-wen" className="on-light py-20 sm:py-28">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 id="fuer-wen" className="t-h2 lg:sticky lg:top-28" data-reveal>
              Für wen das passt
            </h2>
          </div>
          <ul className="lg:col-span-8">
            {s.audiences.map((a, i) => (
              <li
                key={a.title}
                className="grid gap-2 border-t border-[var(--line-light)] py-7 sm:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] sm:gap-8"
                data-reveal
                style={revealDelay(i * 60)}
              >
                <h3 className="font-display font-semibold text-2xl leading-snug">{a.title}</h3>
                <p className="muted">{a.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Probleme */}
      <section aria-labelledby="probleme" className="py-20 sm:py-28">
        <div className="wrap">
          <h2 id="probleme" className="t-h2 max-w-[20ch]" data-reveal>
            Typische Ausgangslagen – und was wir tun
          </h2>
          <dl className="mt-14 grid gap-4 md:grid-cols-2">
            {s.problems.map((p, i) => (
              <div key={p.problem} className="rounded-2xl border border-white/10 bg-night-700/60 p-7 transition-colors hover:border-gold-300/40 sm:p-9" data-reveal style={revealDelay((i % 2) * 80)}>
                <dt className="flex gap-4 font-display text-xl font-semibold leading-snug"><span aria-hidden="true" className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold-300/15 text-sm text-gold-200">?</span>{p.problem}</dt>
                <dd className="mt-4 pl-11 text-ink-muted">{p.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Leistungsumfang */}
      <section aria-labelledby="umfang" className="border-t border-[var(--line-dark)] bg-night-700 py-20 sm:py-28">
        <div className="wrap">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <h2 id="umfang" className="t-h2 lg:col-span-6" data-reveal>
              Was CAIT übernimmt
            </h2>
            <p className="muted lg:col-span-5 lg:col-start-8" data-reveal>
              Sie entscheiden, ob wir alles übernehmen oder einzelne Bausteine mit Ihrem Team umsetzen. Der Umfang wird vor
              Beginn schriftlich festgehalten.
            </p>
          </div>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {s.deliverables.map((d, i) => (
              <div key={d.title} className="rounded-2xl border border-white/10 bg-night p-7" data-reveal style={revealDelay(i * 90)}>
                <h3 className="t-h3">{d.title}</h3>
                <ul className="mt-5 space-y-3">
                  {d.items.map((item) => (
                    <li key={item} className="flex gap-3 text-ink-soft">
                      <span aria-hidden="true" className="mt-[0.7em] h-px w-3 shrink-0 bg-gold-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ablauf */}
      <section id="ablauf" aria-labelledby="ablauf-titel" className="on-light py-20 sm:py-28">
        <div className="wrap">
          <h2 id="ablauf-titel" className="t-h2" data-reveal>
            So läuft die Zusammenarbeit
          </h2>
          <div className="relative mt-14">
          <span aria-hidden="true" className="draw-line absolute left-0 right-0 top-6 hidden h-px bg-[var(--night)]/30 lg:block" />
          <ol className="relative grid gap-10 md:grid-cols-2 lg:grid-flow-col lg:grid-cols-none lg:auto-cols-fr lg:gap-8">
            {s.process.map((step, i) => (
              <li key={step.title} className="relative" data-reveal style={revealDelay(i * 90)}>
                <span className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--night)] font-display text-xl font-bold text-gold-200 ring-8 ring-[var(--kalk)]">
                  {i + 1}
                </span>
                <h3 className="mt-5 font-display font-semibold text-2xl leading-snug">{step.title}</h3>
                <p className="muted mt-3">{step.text}</p>
              </li>
            ))}
          </ol>
          </div>
        </div>
      </section>

      {/* Kostenfaktoren */}
      <section aria-labelledby="kosten" className="py-20 sm:py-28">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 id="kosten" className="t-h2 lg:sticky lg:top-28" data-reveal>
              Was Aufwand und Kosten beeinflusst
            </h2>
            <p className="muted mt-6 max-w-md" data-reveal>
              Pauschalpreise ohne Kenntnis Ihrer Ausgangslage wären unseriös. Nach dem Erstgespräch erhalten Sie eine
              nachvollziehbare Einschätzung – diese Faktoren bestimmen sie.
            </p>
          </div>
          <ul className="lg:col-span-7">
            {s.costFactors.map((c, i) => (
              <li key={c.title} className="border-t border-[var(--line-dark)] py-6" data-reveal style={revealDelay(i * 50)}>
                <h3 className="text-lg font-medium text-ink">{c.title}</h3>
                <p className="mt-2 text-ink-muted">{c.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Vertiefung */}
      {s.deepDive && (
        <section aria-labelledby="vertiefung" className="border-t border-[var(--line-dark)] py-16 sm:py-20">
          <div className="wrap grid gap-8 lg:grid-cols-12">
            <h2 id="vertiefung" className="t-h3 lg:col-span-4">
              {s.deepDive.title}
            </h2>
            <ul className="grid gap-x-8 sm:grid-cols-2 lg:col-span-8">
              {s.deepDive.links.map((l) => (
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
      )}

      {/* FAQ */}
      <section aria-labelledby="faq" className="border-t border-[var(--line-dark)] py-20 sm:py-28">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <h2 id="faq" className="t-h2 lg:col-span-4" data-reveal>
            Häufige Fragen
          </h2>
          <div className="lg:col-span-8">
            <Faq items={s.faqs} />
          </div>
        </div>
      </section>

      {/* Verwandte Leistungen */}
      <section aria-labelledby="verwandt" className="border-t border-[var(--line-dark)] bg-night-700 py-16 sm:py-20">
        <div className="wrap">
          <h2 id="verwandt" className="text-ink-muted">
            Passt oft dazu
          </h2>
          <ul className="mt-6 grid gap-px bg-[var(--line-dark)] sm:grid-cols-2">
            {related.map((r) => (
              <li key={r.href} className="bg-night-700">
                <Link href={r.href} className="row-link group flex h-full flex-col gap-3 p-6 sm:p-8">
                  <span className="flex items-center justify-between gap-4">
                    <span className="hyph font-display font-semibold text-3xl transition-colors group-hover:text-gold-200">{r.label}</span>
                    <Arrow className="text-gold-300" />
                  </span>
                  <span className="text-ink-muted">{r.short}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand title={s.ctaTitle} />
    </>
  );
}
