// components/SeoFeatures.tsx
import Link from 'next/link';

const features = [
  {
    title: '🧠 Keyword-Recherche & Suchintention',
    description: (
      <>
        Wir analysieren, wonach deine Kunden suchen – und warum. Damit du nicht nur Klicks bekommst, sondern
        relevanten Traffic, der konvertiert.{' '}
        <Link href="/seo/keyword-recherche" className="text-blue-500 underline">
          Mehr erfahren
        </Link>
      </>
    ),
  },
  {
    title: '🛠️ OnPage-SEO',
    description: (
      <>
        Optimierung deiner Website-Struktur, Inhalte, Meta-Tags, internen Verlinkungen und technischen Basis. Schnell, sauber, suchmaschinenfreundlich.{' '}
        <Link href="/seo/onpage-seo" className="text-blue-500 underline">
          Mehr erfahren
        </Link>
      </>
    ),
  },
  {
    title: '🌍 OffPage-SEO & Backlinkaufbau',
    description: (
      <>
        Wir stärken deine Domain-Autorität mit qualitativen Backlinks, PR-Erwähnungen und strategischer OffPage-Optimierung.{' '}
        <Link href="/seo/offpage-seo" className="text-blue-500 underline">
          Mehr erfahren
        </Link>
      </>
    ),
  },
  {
    title: '⚙️ Technisches SEO',
    description:
      'Core Web Vitals, Mobile Optimierung, Fehleranalyse, Indexierung und Crawling: Wir sorgen für einen einwandfreien technischen Unterbau.',
  },
  {
    title: '📍 Lokale SEO',
    description:
      'Ideal für lokale Dienstleister: Optimierung deines Google-Profils, lokaler Content und Sichtbarkeit in deiner Region.',
  },
  {
    title: '📝 SEO-Content-Erstellung',
    description:
      'Wir schreiben Inhalte, die Google liebt und Nutzer lesen wollen – von Blogbeiträgen bis zu Landingpages.',
  },
  {
    title: '📊 Monitoring & Reporting',
    description:
      'Echtzeit-Analysen, monatliche Reports, Handlungsempfehlungen: Du weißt jederzeit, was wir tun – und was es bringt.',
  },
];

export default function SeoFeatures() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-black">
          Unsere SEO-Leistungen im Überblick
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-blue-300 border border-blue-900 p-6 rounded-xl text-left shadow hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-900">{feature.title}</h3>
              <p className="text-black leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}