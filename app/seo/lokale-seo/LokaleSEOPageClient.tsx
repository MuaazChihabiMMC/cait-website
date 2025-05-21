// app/seo/lokale-seo/LokaleSEOPageClient.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

export default function LokaleSEOPageClient() {
  return (
    <main className="px-4 py-12 md:px-6 max-w-6xl mx-auto bg-white text-blue-900 space-y-16">
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center py-20 bg-gradient-to-b from-blue-50 to-white rounded-3xl px-6"
      >
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            📍 Lokale SEO für mehr Sichtbarkeit in deiner Region
          </h1>
         <p className="text-xl md:text-2xl text-blue-800">
  Ideal für lokale Dienstleister: Wir optimieren deinen Google-Eintrag, erstellen regionalen Content und fügen lokale Backlinks hinzu.
</p>
<p className="text-base text-blue-800 mt-4">
  Unsere <strong>lokale SEO Agentur in Berlin</strong>, die <strong>CAIT SEO Experten</strong> , bringt dein Unternehmen dorthin, wo Kunden dich wirklich finden: ganz oben bei Google in deiner Stadt.
</p>
        </div>
      </motion.section>

{/* SEO-Fließtext mit lokalem Fokus */}
<section className="max-w-3xl mx-auto text-blue-900 text-lg leading-relaxed px-4 md:px-0">
  <h2 className="text-2xl font-bold mb-4 text-blue-800">Warum lokale SEO heute entscheidend ist</h2>
  <p className="mb-4">
    Wenn potenzielle Kunden nach <strong>„Friseur in Berlin-Mitte“</strong> oder <strong>„Zahnarzt Charlottenburg“</strong> suchen, entscheiden oft nur wenige Positionen in den Google-Ergebnissen über einen neuen Kundenkontakt.
    Mit einer gezielten <strong>lokalen SEO-Strategie</strong> sorgen wir dafür, dass dein Unternehmen in der Kartenansicht („Local Pack“) und bei organischen Treffern sichtbar wird.
  </p>
  <p className="mb-4">
    Als erfahrene <strong>Local SEO Agentur aus Berlin</strong> arbeiten wir mit kleinen und mittleren Unternehmen, Praxen, Kanzleien und lokalen Dienstleistern zusammen. Unsere Maßnahmen zielen darauf ab, deine <strong>Google-Unternehmensprofile zu optimieren</strong>, 
    <strong>lokalen Content</strong> aufzubauen und deine Seite in <strong>regionalen Verzeichnissen</strong> sichtbar zu machen.
  </p>
  <p>
    Besonders für Standorte mit viel Konkurrenz – z. B. in Großstädten – kann gezielte lokale Optimierung den entscheidenden Unterschied machen. 
    Wir kombinieren <strong>technisches SEO</strong>, <strong>Content-Marketing</strong> und <strong>Backlink-Strategien</strong> für nachhaltige Sichtbarkeit.
  </p>
</section>

      <section className="space-y-12">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <FaMapMarkerAlt className="text-blue-600" />
            Google Unternehmensprofil (ehem. Google My Business)
          </h2>
          <ul className="list-disc list-inside space-y-2 text-blue-800">
            <li>Optimierung aller Einträge (Öffnungszeiten, Kategorie, Beschreibung, Bilder etc.)</li>
            <li>Einbindung von Keywords und lokalen Informationen</li>
            <li>Aktives Bewertungsmanagement und Reaktion auf Kundenfeedback</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">📄 Lokaler Content</h2>
          <ul className="list-disc list-inside space-y-2 text-blue-800">
            <li>Erstellung standortbezogener Inhalte für Städte, Regionen oder Stadtteile</li>
            <li>Integration lokaler Keywords in Seitenstruktur und Blogartikel</li>
            <li>Verknüpfung mit lokalen Events, Medien oder Partnern</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">🔗 Lokale Backlinks & Verzeichnisse</h2>
          <ul className="list-disc list-inside space-y-2 text-blue-800">
            <li>Eintrag in relevante lokale Branchenverzeichnisse</li>
            <li>Aufbau lokaler Partnerschaften und Presse-Erwähnungen</li>
            <li>Analyse und Optimierung der bestehenden lokalen Verlinkungen</li>
          </ul>
        </div>

        <div className="text-center pt-6">
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-bold shadow hover:bg-blue-700 transition"
          >
            Jetzt lokale SEO-Beratung anfordern <FaArrowRight />
          </Link>
          <p className="text-sm text-blue-700 mt-2">
            Bereits <strong>70%</strong> unserer Kunden steigern durch Local SEO ihre Ladenbesuche und Anfragen.
          </p>
        </div>
      </section>
    </main>
  );
}