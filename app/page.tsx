import Link from 'next/link';
import type { Metadata } from 'next';
import Gyroscope from '@/components/site/Gyroscope';
import CtaBand from '@/components/site/CtaBand';
import Faq, { type FaqEntry } from '@/components/site/Faq';
import Arrow from '@/components/site/Arrow';
import ProSealWidget from '@/components/ProSealWidget';
import { PHASES, SERVICES } from '@/lib/services';
import { CLIENTS, SITE, absoluteUrl } from '@/lib/site';
import { heroDelay, revealDelay } from '@/lib/ui';

export const metadata: Metadata = {
  title: { absolute: 'CAIT – Digitalagentur in Berlin für SEO, Web, Ads, Software & KI' },
  description:
    'CAIT aus Berlin-Zehlendorf plant und baut, was Unternehmen online brauchen: Suchmaschinenoptimierung, Websites, Google Ads, Social Media, individuelle Software und KI – aus einer Hand.',
  alternates: { canonical: absoluteUrl('/') },
  openGraph: {
    title: 'CAIT – Digitalagentur in Berlin',
    description:
      'Gefunden werden, überzeugen, entlasten: SEO, Websites, Google Ads, Social Media, Software und KI aus einer Hand.',
    url: absoluteUrl('/'),
  },
};

const STEPS = [
  {
    title: 'Erstgespräch',
    text: 'Sie schildern Ziel und Ausgangslage, wir stellen Fragen und sagen offen, ob und wie wir helfen können.',
  },
  {
    title: 'Einschätzung',
    text: 'Sie erhalten einen Vorschlag mit Maßnahmen, Ablauf und Aufwand – verständlich und ohne Fachchinesisch.',
  },
  {
    title: 'Umsetzung',
    text: 'Wir arbeiten in klaren Etappen und zeigen Zwischenstände, damit Sie jederzeit mitentscheiden können.',
  },
  {
    title: 'Auswertung',
    text: 'Wir messen, was die Maßnahmen bewirken, und entwickeln weiter, was funktioniert.',
  },
];

const FAQS: FaqEntry[] = [
  {
    q: 'Muss ich alle Leistungen bei CAIT buchen?',
    a: 'Nein. Viele Kunden starten mit einem einzelnen Bereich, etwa einer neuen Website oder Google Ads. Der Vorteil aus einer Hand zeigt sich dann, wenn Bereiche zusammenkommen – zum Beispiel Website, SEO und Anzeigen, die auf dieselben Ziele ausgerichtet sind.',
  },
  {
    q: 'Arbeiten Sie nur mit Unternehmen aus Berlin?',
    a: 'Unser Büro ist in Berlin-Zehlendorf, und viele Kunden kommen aus Berlin. Wir arbeiten aber auch mit Unternehmen aus ganz Deutschland zusammen – Abstimmungen laufen dann per Telefon oder Videocall.',
  },
  {
    q: 'Was kostet eine Zusammenarbeit?',
    a: 'Das hängt vom Umfang, vom Ausgangspunkt und vom gewünschten Ergebnis ab. Auf jeder Leistungsseite erklären wir die Faktoren, die den Aufwand bestimmen. Nach dem Erstgespräch erhalten Sie eine konkrete, nachvollziehbare Einschätzung.',
  },
  {
    q: 'Können Sie garantieren, dass wir bei Google auf Platz 1 stehen?',
    a: 'Nein – und davon sollten Sie bei jeder Agentur Abstand nehmen, die das verspricht. Platzierungen hängen von vielen Faktoren ab, die niemand vollständig kontrolliert. Wir versprechen saubere Arbeit, transparente Messung und ehrliche Berichte.',
  },
  {
    q: 'Wie schnell können wir starten?',
    a: 'Das hängt von unserer aktuellen Auslastung und vom Projekt ab. Im Erstgespräch nennen wir Ihnen einen realistischen Starttermin.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* ---------------------------------------------------------------- Hero */}
      <section
        id="hero"
        aria-labelledby="hero-titel"
        className="relative isolate flex flex-col overflow-hidden pt-[calc(var(--header-h)+2.5rem)] lg:min-h-[100svh] lg:pt-[var(--header-h)]"
      >
        <div className="wrap grid flex-1 gap-8 lg:grid-cols-12 lg:items-center">
          <div className="relative z-10 lg:col-span-7 lg:py-16">
            <h1 id="hero-titel">
              <span className="t-display block">
                <span className="hero-line">
                  <span style={heroDelay(80)}>Gefunden werden.</span>
                </span>
                <span className="hero-line">
                  <span style={heroDelay(200)}>Überzeugen.</span>
                </span>
                <span className="hero-line">
                  <span style={heroDelay(320)}>Entlasten.</span>
                </span>
              </span>
              <span className="hero-fade t-lead mt-8 block max-w-[34ch] font-sans text-ink" style={heroDelay(520)}>
                Ihre Digitalagentur in Berlin für SEO, Websites, Google Ads, Social Media, Software und KI.
              </span>
            </h1>
            <p className="hero-fade mt-5 max-w-[52ch] text-ink-muted" style={heroDelay(620)}>
              Wir planen und bauen, was Ihr Unternehmen online braucht – aufeinander abgestimmt statt in Einzelteilen. Damit
              Kunden Sie finden, Ihr Angebot verstehen und Ihr Team Zeit für das Wesentliche hat.
            </p>
            <div className="hero-fade mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6" style={heroDelay(740)}>
              <Link href="/kontakt" className="btn btn-gold">
                Projekt besprechen
                <Arrow />
              </Link>
              <Link href="/leistungen" className="link text-ink-soft hover:text-ink">
                Alle Leistungen ansehen
              </Link>
            </div>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-[520px] lg:col-span-5 lg:max-w-none">
            <Gyroscope className="h-full w-full" scrollTarget="hero" />
          </div>
        </div>

        <div className="wrap relative z-10 pb-10">
          <div className="hero-fade flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-[var(--line-dark)] pt-6 text-sm text-ink-muted" style={heroDelay(900)}>
            <a href={SITE.googlePartnerUrl} target="_blank" rel="noopener noreferrer" className="link hover:text-ink">
              Google Partner – Profil bei Google ansehen
            </a>
            <span>
              {SITE.address.street}, Berlin-{SITE.address.district}
            </span>
            <a href={SITE.phoneHref} className="link hover:text-ink">
              {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- Leistungen nach Aufgaben */}
      <section aria-labelledby="leistungen-titel" className="on-light py-20 sm:py-28">
        <div className="wrap">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <h2 id="leistungen-titel" className="t-h2 max-w-[16ch] lg:col-span-7" data-reveal>
              Drei Aufgaben, sechs Disziplinen, ein Plan
            </h2>
            <p className="muted lg:col-span-5" data-reveal style={revealDelay(100)}>
              „Wir machen alles im Internet“ ist keine Strategie. Deshalb ordnen wir jede Leistung der Aufgabe zu, die sie
              für Ihr Unternehmen erfüllt.
            </p>
          </div>

          <div className="mt-16 grid lg:grid-cols-3">
            {PHASES.map((phase, pi) => (
              <div
                key={phase.name}
                className={`border-t border-[var(--line-light)] pt-8 lg:pt-10 ${pi > 0 ? 'mt-12 lg:mt-0 lg:border-l lg:pl-8' : 'lg:pr-8'} ${pi === 1 ? 'lg:pr-8' : ''}`}
                data-reveal
                style={revealDelay(pi * 120)}
              >
                <h3 className="t-h3">{phase.name}</h3>
                <p className="muted mt-3 max-w-[36ch]">{phase.text}</p>
                <ul className="mt-8">
                  {SERVICES.filter((s) => s.phase === phase.name).map((s) => (
                    <li key={s.href} className="border-t border-[var(--line-light)]">
                      <Link href={s.href} className="row-link group block py-6">
                        <span className="flex items-center justify-between gap-4">
                          <span className="hyph font-display text-[1.7rem] leading-tight transition-colors group-hover:text-gold-500">
                            {s.label}
                          </span>
                          <Arrow className="text-gold-500" />
                        </span>
                        <span className="muted mt-2 block text-[0.95rem]">{s.short}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-14 text-[0.95rem] text-slate-muted" data-reveal>
            Außerdem:{' '}
            <Link href="/pr-agentur-berlin" className="link-static text-slate-ink">
              PR und Pressearbeit
            </Link>{' '}
            sowie{' '}
            <Link href="/google-bewertungen-loeschen" className="link-static text-slate-ink">
              Prüfung unzulässiger Google-Bewertungen
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ---------------------------------------------------------------- Aus einer Hand */}
      <section aria-labelledby="hand-titel" className="relative py-24 sm:py-32">
        <div className="wrap">
          <h2 id="hand-titel" className="sr-only">
            Warum aus einer Hand
          </h2>
          <p className="t-h2 max-w-[24ch]" data-reveal>
            Wenn SEO, Website und Anzeigen von verschiedenen Dienstleistern kommen, optimiert jeder seinen Teil. Bei CAIT
            gehört alles zu einem Plan.
          </p>

          <div className="mt-20 grid gap-12 md:grid-cols-3 md:gap-10">
            {[
              {
                title: 'Direkter Draht',
                text: 'CAIT ist inhabergeführt. Sie sprechen mit den Menschen, die Ihr Projekt umsetzen – nicht mit einer Vertriebsebene dazwischen.',
              },
              {
                title: 'Technik aus eigener Hand',
                text: `Websites, Software und KI-Lösungen entwickeln wir selbst. Gründer ${SITE.owner} hat Informatik an der TU Berlin studiert.`,
              },
              {
                title: 'Messen statt behaupten',
                text: 'Bevor Budget fließt, steht die Messung. Sie sehen nachvollziehbar, welche Maßnahme was bewirkt.',
              },
            ].map((p, i) => (
              <div key={p.title} data-reveal style={revealDelay(i * 100)}>
                <div className="cut" aria-hidden="true" />
                <h3 className="t-h3 mt-6">{p.title}</h3>
                <p className="mt-3 text-ink-muted">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- Ablauf */}
      <section aria-labelledby="ablauf-titel" className="on-light py-20 sm:py-28">
        <div className="wrap">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <h2 id="ablauf-titel" className="t-h2 lg:col-span-6" data-reveal>
              Vom ersten Gespräch zum messbaren Ergebnis
            </h2>
            <p className="muted lg:col-span-5 lg:col-start-8" data-reveal>
              Jedes Projekt folgt denselben vier Schritten – egal ob neue Website, Kampagne oder Automatisierung.
            </p>
          </div>
          <div className="relative mt-16">
            <span aria-hidden="true" className="draw-line absolute left-0 right-0 top-[1.15rem] hidden h-px bg-[var(--night)] lg:block" />
            <ol className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {STEPS.map((step, i) => (
                <li key={step.title} data-reveal style={revealDelay(i * 100)}>
                  <span className="relative z-10 inline-flex h-9 items-center bg-[var(--kalk)] pr-3 font-display text-2xl">
                    {i + 1}
                  </span>
                  <h3 className="mt-5 font-display text-2xl">{step.title}</h3>
                  <p className="muted mt-3">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- Kunden */}
      <section aria-labelledby="kunden-titel" className="py-20 sm:py-28">
        <div className="wrap">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <h2 id="kunden-titel" className="t-h2 lg:col-span-7" data-reveal>
              Unternehmen, für die wir arbeiten
            </h2>
            <p className="muted lg:col-span-5" data-reveal>
              Eine Auswahl – vom Kfz-Gutachter über Gastronomie und Handel bis zur Stiftung. Was wir für sie umgesetzt haben,
              erzählen wir Ihnen gern im Gespräch.
            </p>
          </div>
          <ul className="mt-14 flex flex-wrap items-baseline gap-x-3 gap-y-2 font-display text-[clamp(1.5rem,2.6vw,2.4rem)] leading-tight" data-reveal>
            {CLIENTS.map((c, i) => (
              <li key={c.name} className="flex items-baseline gap-3">
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink-soft transition-colors hover:text-gold-200 focus-visible:text-gold-200"
                  title={`${c.name} (${c.industry}) – Website öffnen`}
                >
                  {c.name}
                </a>
                {i < CLIENTS.length - 1 && (
                  <span aria-hidden="true" className="text-gold-300/50">
                    /
                  </span>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-12">
            <Link href="/referenzen" className="link text-gold-200">
              Mehr zu unseren Referenzen
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- FAQ */}
      <section aria-labelledby="faq-titel" className="border-t border-[var(--line-dark)] py-20 sm:py-28">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <h2 id="faq-titel" className="t-h2 lg:col-span-4" data-reveal>
            Bevor Sie anfragen
          </h2>
          <div className="lg:col-span-8">
            <Faq items={FAQS} />
          </div>
        </div>
      </section>

      <CtaBand />
      <ProSealWidget />
    </>
  );
}
