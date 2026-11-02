import type { Metadata } from 'next';
import Breadcrumbs from '@/components/site/Breadcrumbs';
import KontaktForm from '@/components/KontaktForm';
import { SITE, absoluteUrl } from '@/lib/site';
import { heroDelay } from '@/lib/ui';

export const metadata: Metadata = {
  title: 'Kontakt – Projekt besprechen',
  description:
    'Sprechen Sie mit CAIT über Ihr Projekt: SEO, Website, Google Ads, Social Media, Software oder KI. Telefon 030 2268 9840, E-Mail oder Kontaktformular. Büro in Berlin-Zehlendorf.',
  alternates: { canonical: absoluteUrl('/kontakt') },
  openGraph: { url: absoluteUrl('/kontakt'), title: 'Kontakt | CAIT' },
};

const NEXT = [
  { title: 'Wir lesen Ihre Anfrage', text: 'und melden uns per E-Mail oder telefonisch, um offene Fragen zu klären.' },
  { title: 'Erstgespräch', text: 'per Telefon, Videocall oder bei uns in Zehlendorf – unverbindlich.' },
  { title: 'Einschätzung', text: 'mit Vorgehen, Zeitrahmen und Aufwand, damit Sie in Ruhe entscheiden können.' },
];

export default function KontaktPage() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${SITE.address.street}, ${SITE.address.postalCode} ${SITE.address.city}`,
  )}`;

  return (
    <>
      <section className="pb-14 pt-[calc(var(--header-h)+3rem)] sm:pb-20 sm:pt-[calc(var(--header-h)+4.5rem)]">
        <div className="wrap">
          <Breadcrumbs items={[{ href: '/kontakt', label: 'Kontakt' }]} />
          <h1 className="t-h1 mt-10 max-w-[14ch]">
            <span className="hero-line">
              <span style={heroDelay(40)}>Lassen Sie uns über Ihr Projekt sprechen</span>
            </span>
          </h1>
          <p className="hero-fade t-lead mt-8 max-w-[56ch] text-ink-soft" style={heroDelay(240)}>
            Ob konkreter Auftrag oder erste Idee: Schreiben Sie uns, was Sie erreichen möchten. Je genauer Sie Ihr Ziel
            beschreiben, desto konkreter wird unsere Rückmeldung.
          </p>
        </div>
      </section>

      <section aria-label="Kontaktmöglichkeiten" className="pb-20 sm:pb-28">
        <div className="wrap grid gap-10 lg:grid-cols-12">
          <aside className="space-y-10 lg:col-span-4">
            <div>
              <h2 className="text-sm text-ink-muted">Telefon</h2>
              <a href={SITE.phoneHref} className="link mt-2 inline-block font-display text-3xl">
                {SITE.phoneDisplay}
              </a>
              <p className="mt-1 text-sm text-ink-muted">{SITE.openingHours}</p>
            </div>
            <div>
              <h2 className="text-sm text-ink-muted">E-Mail</h2>
              <a href={`mailto:${SITE.email}`} className="link mt-2 inline-block break-all text-xl">
                {SITE.email}
              </a>
            </div>
            <div>
              <h2 className="text-sm text-ink-muted">WhatsApp</h2>
              <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="link mt-2 inline-block text-xl">
                Nachricht schreiben
              </a>
            </div>
            <div>
              <h2 className="text-sm text-ink-muted">Büro</h2>
              <address className="mt-2 not-italic text-xl leading-relaxed">
                {SITE.legalName}
                <br />
                {SITE.address.street}
                <br />
                {SITE.address.postalCode} {SITE.address.city}-{SITE.address.district}
              </address>
              <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="link-static mt-3 inline-block text-sm text-ink-muted">
                In Google Maps öffnen
              </a>
            </div>
          </aside>

          <div className="on-light p-6 sm:p-10 lg:col-span-8">
            <h2 className="t-h3 mb-8">Anfrage senden</h2>
            <KontaktForm />
          </div>
        </div>
      </section>

      <section aria-labelledby="danach" className="border-t border-[var(--line-dark)] py-16 sm:py-24">
        <div className="wrap">
          <h2 id="danach" className="t-h2" data-reveal>
            Was nach Ihrer Anfrage passiert
          </h2>
          <ol className="mt-12 grid gap-10 md:grid-cols-3">
            {NEXT.map((n, i) => (
              <li key={n.title} data-reveal>
                <span className="font-display text-2xl text-gold-200">{i + 1}</span>
                <h3 className="mt-3 font-display text-2xl">{n.title}</h3>
                <p className="mt-2 text-ink-muted">{n.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
