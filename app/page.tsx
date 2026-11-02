import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import HeroCollage from '@/components/home/HeroCollage';
import Marquee from '@/components/home/Marquee';
import ScrollStory from '@/components/home/ScrollStory';
import Gyroscope from '@/components/site/Gyroscope';
import CtaBand from '@/components/site/CtaBand';
import Faq, { type FaqEntry } from '@/components/site/Faq';
import Arrow from '@/components/site/Arrow';
import ProSealWidget from '@/components/ProSealWidget';
import { PHASES, SERVICES } from '@/lib/services';
import { SITE, absoluteUrl } from '@/lib/site';
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
  { title: 'Erstgespräch', text: 'Sie schildern Ziel und Ausgangslage. Wir stellen Fragen und sagen offen, ob und wie wir helfen können.' },
  { title: 'Einschätzung', text: 'Sie erhalten einen Vorschlag mit Maßnahmen, Ablauf und Aufwand – verständlich und ohne Fachchinesisch.' },
  { title: 'Umsetzung', text: 'Wir arbeiten in klaren Etappen und zeigen Zwischenstände, damit Sie jederzeit mitentscheiden können.' },
  { title: 'Auswertung', text: 'Wir messen, was die Maßnahmen bewirken, und entwickeln weiter, was funktioniert.' },
];

const FAQS: FaqEntry[] = [
  {
    q: 'Muss ich alle Leistungen bei CAIT buchen?',
    a: 'Nein. Viele Kunden starten mit einem einzelnen Bereich, etwa einer neuen Website oder Google Ads. Der Vorteil aus einer Hand zeigt sich, wenn Bereiche zusammenkommen – zum Beispiel Website, SEO und Anzeigen, die auf dieselben Ziele ausgerichtet sind.',
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
  const steps = PHASES.map((p) => ({
    phase: p.name,
    text: p.text,
    services: SERVICES.filter((s) => s.phase === p.name).map((s) => ({ href: s.href, label: s.label, short: s.short })),
  }));

  return (
    <>
      {/* ---------------------------------------------------------------- Hero */}
      <section
        aria-labelledby="hero-titel"
        className="bg-grid relative isolate overflow-hidden pb-10 pt-[calc(var(--header-h)+2.5rem)] lg:flex lg:min-h-[100svh] lg:flex-col lg:pb-6 lg:pt-[var(--header-h)]"
      >
        <div className="wrap grid flex-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="relative z-10 lg:col-span-6 lg:py-16">
            <p className="hero-fade eyebrow" style={heroDelay(0)}>
              <span className="h-1.5 w-1.5 rounded-full bg-gold-300" aria-hidden="true" />
              Digitalagentur aus Berlin-Zehlendorf
            </p>
            <h1 id="hero-titel" className="mt-6">
              <span className="t-display block">
                <span className="hero-line">
                  <span style={heroDelay(80)}>Gefunden werden.</span>
                </span>
                <span className="hero-line">
                  <span style={heroDelay(180)}>Überzeugen.</span>
                </span>
                <span className="hero-line">
                  <span style={heroDelay(280)} className="text-grad">
                    Entlasten.
                  </span>
                </span>
              </span>
              <span className="hero-fade mt-7 block max-w-[38ch] text-xl font-medium leading-snug text-ink sm:text-2xl" style={heroDelay(460)}>
                SEO, Websites, Google Ads, Social Media, Software und KI – geplant und gebaut aus einer Hand.
              </span>
            </h1>
            <p className="hero-fade mt-5 max-w-[50ch] text-lg text-ink-muted" style={heroDelay(560)}>
              Damit Kunden Sie finden, Ihr Angebot verstehen und Ihr Team mehr Zeit für das Wesentliche hat.
            </p>
            <div className="hero-fade mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4" style={heroDelay(680)}>
              <Link href="/kontakt" className="btn btn-gold">
                Projekt besprechen
                <Arrow />
              </Link>
              <Link href="/leistungen" className="btn btn-line">
                Leistungen ansehen
              </Link>
            </div>
            <ul className="hero-fade mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-muted" style={heroDelay(820)}>
              <li>
                <a href={SITE.googlePartnerUrl} target="_blank" rel="noopener noreferrer" className="link hover:text-ink">
                  Google Partner
                </a>
              </li>
              <li>
                <a href={SITE.provenExpertUrl} target="_blank" rel="noopener noreferrer" className="link hover:text-ink">
                  Bewertungen bei ProvenExpert
                </a>
              </li>
              <li>
                <a href={SITE.phoneHref} className="link hover:text-ink">
                  {SITE.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>

          <div className="relative lg:col-span-6">
            <HeroCollage />
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- Kunden-Laufband */}
      <section aria-label="Kunden" className="border-y border-[var(--line-dark)] bg-night-900">
        <p className="wrap pt-8 text-center text-sm text-ink-muted">Unternehmen, die mit CAIT arbeiten</p>
        <Marquee />
      </section>

      {/* ---------------------------------------------------------------- Scroll-Story: drei Aufgaben */}
      <section aria-labelledby="aufgaben-titel" className="relative py-20 sm:py-28">
        <div className="wrap">
          <div className="max-w-3xl" data-reveal>
            <p className="eyebrow">Unsere Leistungen</p>
            <h2 id="aufgaben-titel" className="t-h2 mt-5">
              Drei Aufgaben, sechs Disziplinen, ein Plan
            </h2>
            <p className="mt-5 max-w-[56ch] text-lg text-ink-muted">
              „Wir machen alles im Internet“ ist keine Strategie. Deshalb ordnen wir jede Leistung der Aufgabe zu, die sie
              für Ihr Unternehmen erfüllt.
            </p>
          </div>
          <div className="mt-10 lg:mt-4">
            <ScrollStory steps={steps} />
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- Aus einer Hand + 3D */}
      <section id="einer-hand" aria-labelledby="hand-titel" className="relative overflow-hidden border-t border-[var(--line-dark)] bg-night-900 py-20 sm:py-28">
        <div className="wrap grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="eyebrow" data-reveal>
              Warum aus einer Hand
            </p>
            <h2 id="hand-titel" className="t-h2 mt-5" data-reveal>
              Sechs Disziplinen, die in dieselbe Richtung arbeiten
            </h2>
            <p className="mt-5 max-w-[52ch] text-lg text-ink-muted" data-reveal>
              Wenn SEO, Website und Anzeigen von verschiedenen Dienstleistern kommen, optimiert jeder seinen Teil. Bei CAIT
              gehört alles zu einem Plan – wie die Ringe rechts, die sich beim Scrollen ausrichten.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {[
                { title: 'Direkter Draht', text: 'Inhabergeführt. Sie sprechen mit den Menschen, die Ihr Projekt umsetzen.' },
                { title: 'Technik im Haus', text: 'Websites, Software und KI entwickeln wir selbst.' },
                { title: 'Messbar', text: 'Erst die Messung, dann das Budget. Sie sehen, was wirkt.' },
              ].map((p, i) => (
                <div
                  key={p.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 lg:flex lg:items-baseline lg:gap-6"
                  data-reveal
                  style={revealDelay(i * 100)}
                >
                  <h3 className="font-display text-lg font-semibold text-gold-200 lg:w-44 lg:shrink-0">{p.title}</h3>
                  <p className="mt-2 text-[0.95rem] text-ink-muted lg:mt-0">{p.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative lg:col-span-6">
            <div className="mx-auto aspect-square w-full max-w-[560px]">
              <Gyroscope className="h-full w-full" scrollTarget="einer-hand" />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- Gründer */}
      <section aria-labelledby="gruender-titel" className="on-light py-20 sm:py-28">
        <div className="wrap grid items-center gap-12 lg:grid-cols-12">
          <figure className="lg:col-span-5" data-reveal="clip">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-night-700">
              <Image
                src="/author-muaaz.webp"
                alt={`${SITE.owner}, Gründer und Inhaber von CAIT`}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-top"
              />
              <figcaption className="absolute inset-x-4 bottom-4 rounded-2xl bg-night/80 p-4 text-ink backdrop-blur">
                <span className="block font-display text-lg font-semibold">{SITE.owner}</span>
                <span className="block text-sm text-ink-muted">Gründer und Inhaber · Informatik-Master, TU Berlin</span>
              </figcaption>
            </div>
          </figure>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="eyebrow" data-reveal>
              Wer hinter CAIT steht
            </p>
            <h2 id="gruender-titel" className="t-h2 mt-5" data-reveal>
              Persönlich betreut – vom ersten Gespräch bis zum Ergebnis
            </h2>
            <div className="prose-cait mt-6 text-slate-muted" data-reveal>
              <p>
                {SITE.owner} hat {SITE.founded} CAIT gegründet. Als Informatiker verbindet er Marketing mit eigener
                Entwicklung – deshalb entstehen bei uns Strategie und Umsetzung in denselben Händen.
              </p>
              <p>
                Sie haben einen festen Ansprechpartner, kurze Wege und ehrliche Empfehlungen – auch wenn das einmal ein
                kleinerer Auftrag ist.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4" data-reveal>
              <Link href="/ueber-uns" className="btn btn-night">
                Mehr über uns
                <Arrow />
              </Link>
              <Link href="/referenzen" className="link-static font-medium text-slate-ink">
                Unsere Kunden
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- Ablauf */}
      <section aria-labelledby="ablauf-titel" className="relative py-20 sm:py-28">
        <div className="wrap">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7" data-reveal>
              <p className="eyebrow">So arbeiten wir</p>
              <h2 id="ablauf-titel" className="t-h2 mt-5">
                Vom ersten Gespräch zum messbaren Ergebnis
              </h2>
            </div>
            <p className="text-lg text-ink-muted lg:col-span-5" data-reveal>
              Jedes Projekt folgt denselben vier Schritten – egal ob neue Website, Kampagne oder Automatisierung.
            </p>
          </div>
          <div className="relative mt-14">
            <span aria-hidden="true" className="draw-line absolute left-0 right-0 top-7 hidden h-px bg-gold-300/50 lg:block" />
            <ol className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {STEPS.map((step, i) => (
                <li
                  key={step.title}
                  className="rounded-2xl border border-white/10 bg-night-700/80 p-6 backdrop-blur"
                  data-reveal
                  style={revealDelay(i * 120)}
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-200 to-gold-400 font-display text-2xl font-bold text-night">
                    {i + 1}
                  </span>
                  <h3 className="mt-6 font-display text-xl font-semibold">{step.title}</h3>
                  <p className="mt-2 text-ink-muted">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- FAQ */}
      <section aria-labelledby="faq-titel" className="border-t border-[var(--line-dark)] py-20 sm:py-28">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4" data-reveal>
            <p className="eyebrow">FAQ</p>
            <h2 id="faq-titel" className="t-h2 mt-5">
              Bevor Sie anfragen
            </h2>
          </div>
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
