// app/seo/content-erstellung/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'CAIT SEO Agentur Berlin | Content-Erstellung & SEO-Texte',
  description: 'Starke Inhalte für bessere Rankings: Keyword-optimierte Texte, Content-Strategie & SEO-Beratung alles aus einer Hand von CAIT Berlin.',
};

export default function ContentErstellungPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16 text-blue-900">
      <h1 className="text-4xl font-bold mb-6 flex items-center gap-3">
        <span className="text-blue-600">✍️</span> SEO-Content-Erstellung
      </h1>

      <p className="text-lg mb-6 text-blue-800">
        Wir schreiben Inhalte, die Google liebt und Nutzer lesen wollen...
      </p>

      <section className="space-y-10">
        <div>
          <h2 className="text-2xl font-semibold mb-2">🔍 Keyword-optimierte Inhalte</h2>
          <p className="text-blue-800">
            Jede Textproduktion beginnt bei uns mit einer fundierten Keyword-Recherche...
          </p>
        </div>

        {/* Weitere Inhalte ohne Animationen... */}
      </section>

      <div className="mt-12">
        <Link href="/kontakt" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
          Jetzt Content-Angebot anfordern
        </Link>
      </div>
    </main>
  );
}