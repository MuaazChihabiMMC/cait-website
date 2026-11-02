import Image from 'next/image';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/site/Breadcrumbs';
import CtaBand from '@/components/site/CtaBand';
import JsonLd from '@/components/site/JsonLd';
import { SITE, absoluteUrl } from '@/lib/site';
import { heroDelay, revealDelay } from '@/lib/ui';

export const metadata: Metadata = {
  title: 'Über uns – inhabergeführte Digitalagentur aus Berlin',
  description:
    'CAIT ist eine inhabergeführte Digitalagentur aus Berlin-Zehlendorf, 2022 gegründet von Muaaz Chihabi, Informatiker (M.Sc., TU Berlin). Wie wir arbeiten und wofür wir stehen.',
  alternates: { canonical: absoluteUrl('/ueber-uns') },
  openGraph: { url: absoluteUrl('/ueber-uns'), title: 'Über CAIT' },
};

const PRINCIPLES = [
  {
    title: 'Ehrlich beraten',
    text: 'Wir empfehlen, was Ihnen nützt – auch wenn das ein kleinerer Auftrag ist. Und wir versprechen keine Platzierungen oder Zahlen, die niemand garantieren kann.',
  },
  {
    title: 'Nachvollziehbar arbeiten',
    text: 'Klare Absprachen, dokumentierte Abläufe und Berichte in verständlicher Sprache. Sie wissen jederzeit, woran wir arbeiten und warum.',
  },
  {
    title: 'Mit Daten entscheiden',
    text: 'Wir richten Messung ein, bevor wir optimieren, und begründen Empfehlungen mit dem, was Ihre Zahlen zeigen.',
  },
  {
    title: 'Kurze Wege',
    text: 'Als inhabergeführte Agentur haben Sie direkten Zugang zu den Menschen, die entscheiden und umsetzen.',
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: SITE.owner,
          jobTitle: 'Gründer und Inhaber',
          worksFor: { '@id': `${SITE.url}/#organization` },
          alumniOf: { '@type': 'CollegeOrUniversity', name: 'Technische Universität Berlin' },
          image: absoluteUrl('/author-muaaz.webp'),
        }}
      />

      <section className="bg-grid pb-16 pt-[calc(var(--header-h)+3rem)] sm:pb-24 sm:pt-[calc(var(--header-h)+4.5rem)]">
        <div className="wrap">
          <Breadcrumbs items={[{ href: '/ueber-uns', label: 'Über uns' }]} />
          <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <h1 className="t-h1 max-w-[15ch]">
                <span className="hero-line">
                  <span style={heroDelay(40)}>Eine Agentur, die selbst baut, was sie empfiehlt</span>
                </span>
              </h1>
              <p className="hero-fade t-lead mt-8 max-w-[56ch] text-ink-soft" style={heroDelay(240)}>
                CAIT ist eine inhabergeführte Digitalagentur aus Berlin-Zehlendorf. Wir verbinden Marketing mit eigener
                Entwicklung – damit Strategie und Umsetzung nicht in verschiedenen Händen auseinanderlaufen.
              </p>
            </div>
            <figure className="hero-fade lg:col-span-4 lg:col-start-9" style={heroDelay(320)}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-night-700 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.7)]">
                <Image
                  src="/author-muaaz.webp"
                  alt={`${SITE.owner}, Gründer und Inhaber von CAIT`}
                  fill
                  priority
                  sizes="(min-width: 1024px) 30vw, 100vw"
                  className="object-cover object-top"
                />
              </div>
              <figcaption className="mt-3 text-sm text-ink-muted">{SITE.owner}, Gründer und Inhaber</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section aria-labelledby="geschichte" className="on-light py-20 sm:py-28">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <h2 id="geschichte" className="t-h2 lg:col-span-4" data-reveal>
            Wie CAIT entstanden ist
          </h2>
          <div className="prose-cait lg:col-span-7 lg:col-start-6" data-reveal>
            <p>
              {SITE.owner} hat Informatik an der Technischen Universität Berlin studiert und mit dem Master abgeschlossen.
              Seine Begeisterung für digitales Marketing entdeckte er schon während des Studiums. Danach sammelte er über fünf
              Jahre Erfahrung in der Digitalbranche – von SEO-Strategien bis zu komplexer Webentwicklung.
            </p>
            <p>
              {SITE.founded} gründete er CAIT mit einem klaren Anspruch: Unternehmen nicht einzelne Dienstleistungen zu
              verkaufen, sondern digitale Arbeit, die messbar etwas bewirkt – und offen darüber zu sprechen, was funktioniert
              und was nicht.
            </p>
            <p>
              Heute betreut CAIT Unternehmen aus Berlin und ganz Deutschland – vom lokalen Handwerksbetrieb bis zum Onlinehändler.
              Der technische Hintergrund prägt die Arbeit bis heute: Websites, individuelle Software und KI-Lösungen entstehen
              bei uns im eigenen Haus.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="prinzipien" className="py-20 sm:py-28">
        <div className="wrap">
          <h2 id="prinzipien" className="t-h2" data-reveal>
            Wofür wir stehen
          </h2>
          <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-x-16">
            {PRINCIPLES.map((p, i) => (
              <div key={p.title} data-reveal style={revealDelay((i % 2) * 100)}>
                <div className="cut" aria-hidden="true" />
                <h3 className="t-h3 mt-6">{p.title}</h3>
                <p className="mt-3 max-w-[52ch] text-ink-muted">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Lernen wir uns kennen." text="Ein erstes Gespräch ist unverbindlich. Sie erzählen von Ihrem Vorhaben, wir sagen ehrlich, ob und wie wir helfen können." />
    </>
  );
}
