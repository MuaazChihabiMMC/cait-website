import type { Metadata } from 'next';
import Breadcrumbs from '@/components/site/Breadcrumbs';
import CtaBand from '@/components/site/CtaBand';
import { CLIENTS, SITE, absoluteUrl } from '@/lib/site';
import { heroDelay, revealDelay } from '@/lib/ui';

export const metadata: Metadata = {
  title: 'Referenzen – Kunden von CAIT',
  description:
    'Eine Auswahl der Unternehmen, für die CAIT arbeitet: von Kfz-Gutachtern über Gastronomie und Handel bis zu Stiftungen. Mit Links zu den Websites unserer Kunden.',
  alternates: { canonical: absoluteUrl('/referenzen') },
  openGraph: { url: absoluteUrl('/referenzen'), title: 'Referenzen | CAIT' },
};

export default function ReferenzenPage() {
  return (
    <>
      <section className="pb-14 pt-[calc(var(--header-h)+3rem)] sm:pb-20 sm:pt-[calc(var(--header-h)+4.5rem)]">
        <div className="wrap">
          <Breadcrumbs items={[{ href: '/referenzen', label: 'Referenzen' }]} />
          <h1 className="t-h1 mt-10 max-w-[16ch]">
            <span className="hero-line">
              <span style={heroDelay(40)}>Unternehmen, die mit uns arbeiten</span>
            </span>
          </h1>
          <p className="hero-fade t-lead mt-8 max-w-[58ch] text-ink-soft" style={heroDelay(240)}>
            Unsere Kunden kommen aus ganz unterschiedlichen Branchen – vom Handwerk über Gastronomie und Handel bis zu
            Stiftungen. Die Websites sind verlinkt, damit Sie sich selbst ein Bild machen können. Details zu einzelnen
            Projekten besprechen wir gern persönlich.
          </p>
        </div>
      </section>

      <section aria-labelledby="kundenliste" className="on-light py-16 sm:py-24">
        <div className="wrap">
          <h2 id="kundenliste" className="sr-only">
            Kundenliste
          </h2>
          <ul className="grid border-t border-[var(--line-light)] sm:grid-cols-2 lg:grid-cols-3">
            {CLIENTS.map((c, i) => (
              <li key={c.name} className="border-b border-[var(--line-light)] sm:odd:border-r lg:border-r lg:[&:nth-child(3n)]:border-r-0" data-reveal style={revealDelay((i % 3) * 60)}>
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col justify-between gap-6 p-6 transition-colors hover:bg-kalk-100 sm:p-8"
                >
                  <span className="font-display text-[1.75rem] leading-tight group-hover:text-gold-500">{c.name}</span>
                  <span className="flex items-center justify-between text-sm text-slate-muted">
                    {c.industry}
                    <span className="link-static">
                      Website ansehen<span className="sr-only"> (öffnet in neuem Tab)</span>
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="nachweise" className="py-16 sm:py-24">
        <div className="wrap grid gap-10 lg:grid-cols-12">
          <h2 id="nachweise" className="t-h2 lg:col-span-5" data-reveal>
            Unabhängig nachprüfbar
          </h2>
          <ul className="space-y-6 lg:col-span-7">
            <li className="border-t border-[var(--line-dark)] pt-6" data-reveal>
              <h3 className="font-display text-2xl">Google Partner</h3>
              <p className="mt-2 text-ink-muted">
                CAIT ist im Partnerverzeichnis von Google gelistet.{' '}
                <a href={SITE.googlePartnerUrl} target="_blank" rel="noopener noreferrer" className="link-static text-ink">
                  Profil bei Google ansehen
                </a>
              </p>
            </li>
            <li className="border-t border-[var(--line-dark)] pt-6" data-reveal>
              <h3 className="font-display text-2xl">Kundenbewertungen</h3>
              <p className="mt-2 text-ink-muted">
                Bewertungen unserer Kunden sammeln wir bei ProvenExpert.{' '}
                <a href={SITE.provenExpertUrl} target="_blank" rel="noopener noreferrer" className="link-static text-ink">
                  Bewertungen bei ProvenExpert lesen
                </a>
              </p>
            </li>
          </ul>
        </div>
      </section>

      <CtaBand title="Ihr Unternehmen als nächstes Projekt?" />
    </>
  );
}
