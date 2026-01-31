// app/seo/lokale-seo/LokaleSEOPageClient.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

export default function LokaleSEOPageClient() {
  return (
    <main className="px-4 py-12 md:px-6 max-w-6xl mx-auto bg-primary text-white space-y-16">
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center py-20 bg-mesh-dark rounded-3xl px-6"
      >
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            📍 Lokale SEO für mehr Sichtbarkeit in deiner Region
          </h1>
          <p className="text-xl md:text-2xl text-gray-300">
            Ideal für lokale Dienstleister: Wir optimieren deinen Google-Eintrag, erstellen regionalen Content und fügen lokale Backlinks hinzu.
          </p>
          <p className="text-base text-gray-300 mt-4">
            Unsere <strong>lokale SEO Agentur in Berlin</strong>, die <strong>CAIT SEO Experten</strong> , bringt dein Unternehmen dorthin, wo Kunden dich wirklich finden: ganz oben bei Google in deiner Stadt.
          </p>
        </div>
      </motion.section>

      {/* SEO-Fließtext mit lokalem Fokus */}
      <section className="max-w-3xl mx-auto text-white text-lg leading-relaxed px-4 md:px-0">
        <h2 className="text-2xl font-bold mb-4 text-gray-300">Warum lokale SEO heute entscheidend ist</h2>
        <p className="mb-4">
          Wenn potenzielle Kunden nach „Friseur in Berlin-Mitte“ oder „Zahnarzt Charlottenburg“ suchen, entscheiden oft nur wenige Positionen in den Google-Ergebnissen über einen neuen Kundenkontakt.
          Mit einer gezielten <span className="font-semibold text-white">lokalen SEO-Strategie</span> sorgen wir dafür, dass dein Unternehmen in der Kartenansicht („Local Pack“) und bei organischen Treffern sichtbar wird.
        </p>
        <p className="mb-4">
          Als erfahrene <span className="font-semibold text-white">Local SEO Agentur aus Berlin</span> arbeiten wir mit kleinen und mittleren Unternehmen, Praxen, Kanzleien und lokalen Dienstleistern zusammen. Unsere Maßnahmen zielen darauf ab, deine Google-Unternehmensprofile zu optimieren,
          lokalen Content aufzubauen und deine Seite in regionalen Verzeichnissen sichtbar zu machen.
        </p>
        <p>
          Besonders für Standorte mit viel Konkurrenz, z.B. in Großstädten, kann gezielte lokale Optimierung den entscheidenden Unterschied machen.
          Wir kombinieren technisches SEO, Content-Marketing und Backlink-Strategien für nachhaltige Sichtbarkeit.
        </p>
      </section>

      <section className="space-y-16">
        {/* Google Unternehmensprofil Detailed */}
        <div className="bg-[#1a2a4a] p-8 rounded-2xl border border-blue-800">
          <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3 mb-6 text-white">
            <FaMapMarkerAlt className="text-gold-300 text-4xl" />
            Das Fundament: Dein Google Unternehmensprofil
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Dein Google Unternehmensprofil (ehemals Google My Business) ist oft der allererste Kontaktpunkt zwischen dir und einem neuen Kunden. In der lokalen Suche und auf Google Maps entscheidet dieses Profil darüber, ob du kontaktiert wirst oder dein Wettbewerber.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Ein bloßer Eintrag reicht heute nicht mehr aus. Um in den "Local Pack" (die Top 3 Ergebnisse auf der Karte) zu kommen, muss dein Profil signalisieren: "Ich bin relevant, aktiv und vertrauenswürdig".
              </p>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-gold-300 font-bold">✓</span>
                <span>Vollständige NAP-Daten (Name, Address, Phone)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold-300 font-bold">✓</span>
                <span>Optimierte Kategorie-Auswahl & Attribute</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold-300 font-bold">✓</span>
                <span>Strategische Einbindung von Keywords in Beschreibungen</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold-300 font-bold">✓</span>
                <span>Regelmäßige Google Updates & Angebote posten</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold-300 font-bold">✓</span>
                <span>Geo-tagging von Bildern deines Standorts</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Local Content Strategy */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">📄 Lokaler Content, der rankt</h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Google liebt lokale Relevanz. Es reicht nicht, nur "Berlin" in den Footer zu schreiben. Wir erstellen für dich Landingpages, die spezifisch auf die Suchbedürfnisse deiner Nachbarschaft eingehen.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Ob "Anwalt Arbeitsrecht Kreuzberg" oder "Yoga Studio Prenzlauer Berg" – wir schaffen Inhalte, die genau diese hyper-lokalen Suchanfragen abfangen.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Erstellung von Stadtteil-Landingpages</li>
              <li>Lokale Blogartikel mit Bezug zu Berliner Events/Themen</li>
              <li>Strukturierte Daten (LocalBusiness Schema) für bessere Lesbarkeit durch Google</li>
            </ul>
          </div>
          <div className="bg-primary-light0/10 p-8 rounded-2xl border border-blue-800/50">
            <h3 className="text-xl font-bold text-gold-300 mb-4 bg-clip-text">Wusstest du schon?</h3>
            <p className="text-gray-200 italic mb-4">
              "46% aller Google-Suchen haben eine lokale Absicht."
            </p>
            <p className="text-gray-200 italic">
              "76% der Nutzer, die mobil nach etwas in der Nähe suchen, besuchen das Geschäft noch am selben Tag."
            </p>
          </div>
        </div>

        {/* Citations & Trust */}
        <div className="bg-[#1a2a4a] p-8 rounded-2xl border border-blue-800">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">🔗 Lokale Autorität aufbauen</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ul className="space-y-4 text-gray-300 order-2 md:order-1">
              <li className="bg-primary-light0/20 p-4 rounded-lg border border-blue-900">
                <strong className="text-white block mb-1">Konsistente Citations</strong>
                Deine Firmendaten müssen überall im Netz identisch sein. Wir bereinigen Einträge in Branchenbüchern wie Das Örtliche, Gelbe Seiten, Yelp etc.
              </li>
              <li className="bg-primary-light0/20 p-4 rounded-lg border border-blue-900">
                <strong className="text-white block mb-1">Regionales Linkbuilding</strong>
                Wir besorgen Links von anderen Berliner Websites, Partnern, Vereinen oder lokalen Zeitungen. Das stärkt den lokalen Bezug deiner Domain massiv.
              </li>
            </ul>
            <div className="order-1 md:order-2">
              <p className="text-gray-300 mb-4 leading-relaxed">
                Vertrauen ist die Währung im lokalen SEO. Google muss sicher sein, dass dein Unternehmen real existiert und an dem angegebenen Ort tätig ist. Citations (Nennungen deiner Adresse) und Backlinks von anderen lokalen Akteuren sind dafür der stärkste Beweis.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Vorsicht vor automatisierten Tools: Einträge müssen manuell geprüft werden, um Duplikate zu vermeiden, die deinem Ranking schaden könnten.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto pt-10 border-t border-blue-900">
        <h2 className="text-3xl font-bold text-center text-white mb-10">Häufige Fragen zu Local SEO</h2>

        <div className="space-y-6">
          <div className="bg-[#1a2a4a] p-6 rounded-xl border border-blue-800/50">
            <h3 className="text-xl font-bold text-white mb-2">Wie lange dauert es, bis Local SEO wirkt?</h3>
            <p className="text-gray-300">
              Erste Verbesserungen im Google Unternehmensprofil sieht man oft schon nach 2-4 Wochen. Bis man sich in den Top 3 des Local Packs etabliert hat, vergehen in kompetitiven Branchen in Berlin meist 3 bis 6 Monate kontinuierlicher Arbeit.
            </p>
          </div>

          <div className="bg-[#1a2a4a] p-6 rounded-xl border border-blue-800/50">
            <h3 className="text-xl font-bold text-white mb-2">Brauche ich Local SEO, wenn ich keinen Kundenverkehr im Büro habe?</h3>
            <p className="text-gray-300">
              Absolut. Auch als Dienstleister, Handwerker oder Berater, der zum Kunden fährt (Service Area Business), ist lokale Sichtbarkeit entscheidend. Du wirst dann für dein Einzugsgebiet gerankt, ohne dass deine Privatadresse öffentlich sichtbar sein muss.
            </p>
          </div>

          <div className="bg-[#1a2a4a] p-6 rounded-xl border border-blue-800/50">
            <h3 className="text-xl font-bold text-white mb-2">Wie wichtig sind Google Bewertungen?</h3>
            <p className="text-gray-300">
              Extrem wichtig. Sie sind ein direkter Rankingfaktor. Aber nicht nur die Anzahl zählt, sondern auch die Aktualität, der Text (Keywords in Bewertungen!) und deine Antworten darauf. Wir helfen dir, Strategien zu entwickeln, um mehr echte Bewertungen zu erhalten.
            </p>
          </div>

          <div className="bg-[#1a2a4a] p-6 rounded-xl border border-blue-800/50">
            <h3 className="text-xl font-bold text-white mb-2">Was ist der Unterschied zwischen normalem SEO und Local SEO?</h3>
            <p className="text-gray-300">
              Normales SEO zielt auf die organischen Suchergebnisse (die Liste mit Links). Local SEO zielt primär auf das Kartenpaket (Google Maps) und lokale Suchanfragen ("in der Nähe"). Die Rankingfaktoren unterscheiden sich: Bei Local SEO spielen geografische Nähe, Prominenz des Unternehmensprofils und Zitate eine größere Rolle.
            </p>
          </div>
        </div>
      </section>

      <div className="text-center pt-6">
        <Link
          href="/kontakt"
          className="inline-flex items-center gap-2 bg-gold-300 text-white px-6 py-3 rounded-full font-bold shadow hover:bg-blue-700 transition"
        >
          Jetzt lokale SEO-Beratung anfordern <FaArrowRight />
        </Link>
        <p className="text-sm text-blue-700 mt-2">
          Bereits <strong>70%</strong> unserer Kunden steigern durch Local SEO ihre Ladenbesuche und Anfragen.
        </p>
      </div>
    </main>
  );
}
