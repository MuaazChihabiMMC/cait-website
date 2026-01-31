// app/seo/onpage-seo/OnPageSeoClient.tsx
'use client';

import { motion } from 'framer-motion';
import { FaArrowRight, FaCheckCircle, FaCode, FaLink, FaMobileAlt, FaRocket, FaSitemap, FaChartLine, FaTools } from 'react-icons/fa';
import Link from 'next/link';

export default function OnPageSeoClient() {
  return (
    <main className="px-4 py-12 md:px-6 max-w-7xl mx-auto bg-primary text-white space-y-24">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center py-20 bg-mesh-dark rounded-3xl px-6 relative overflow-hidden"
      >
        <div className="max-w-4xl mx-auto relative">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold-300">OnPage-SEO</span> für maximale Sichtbarkeit
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Struktur, Inhalt und Technik perfekt abgestimmt. So optimieren wir Ihre Website von innen heraus.
          </motion.p>
          <p className="text-base text-gray-300 mt-4">
            Als erfahrene <strong>OnPage SEO Agentur</strong> übernehmen wir die <strong>technische & inhaltliche Optimierung</strong> deiner Website, für bessere Rankings, Nutzerfreundlichkeit und Conversion-Raten. Unsere Arbeit basiert auf langjähriger Erfahrung, datengetriebenen Tools und branchenspezifischem Know-how, egal ob E-Commerce, Gesundheitsbranche oder lokale Anbieter.
          </p>
          <motion.a
            href="/kontakt"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gold-300 text-primary px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-gold-300/20 transition-all items-center gap-2 mt-6"
          >
            Jetzt SEO-Beratung starten <FaArrowRight />
          </motion.a>
        </div>
      </motion.section>

      {/* Content Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-16"
      >
        <div className="max-w-3xl mx-auto space-y-8">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h2 className="text-3xl font-bold flex items-center gap-2">
              <FaRocket className="text-gold-300" /> Technische Optimierung
            </h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Optimierung von Ladezeiten durch Lazy Loading und Komprimierung</li>
              <li>Mobile-First Design für alle Endgeräte <FaMobileAlt className="inline ml-1 text-gold-300" /></li>
              <li>Core Web Vitals als Rankingfaktor berücksichtigen</li>
              <li>HTTPS-Verschlüsselung und strukturierter Code</li>
              <li>Serverantwortzeiten analysieren und reduzieren</li>
              <li>Ressourcenmanagement (JS/CSS-Dateien effizient bündeln und laden)</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h2 className="text-3xl font-bold flex items-center gap-2">
              <FaCode className="text-gold-300" /> HTML & Struktur
            </h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Saubere Überschriftenstruktur (H1 bis H6)</li>
              <li>Sprechende URLs mit Keywords</li>
              <li>Strukturierte Daten (Schema.org) für Rich Snippets</li>
              <li>Interne Verlinkung und klare Informationsarchitektur <FaSitemap className="inline ml-1 text-gold-300" /></li>
              <li>Barrierefreiheit (Accessibility-Standards wie ARIA beachten)</li>
              <li>Canonical Tags und Meta Robots korrekt einsetzen</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h2 className="text-3xl font-bold flex items-center gap-2">
              <FaLink className="text-gold-300" /> Content & Relevanz
            </h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Einzigartige, zielgerichtete Inhalte mit Fokus auf Suchintention</li>
              <li>Einbindung von Bildern, Videos & interaktiven Elementen</li>
              <li>Keyword-Dichte, WDF*IDF-Analyse & semantische Optimierung</li>
              <li>Regelmäßige Content-Pflege und Aktualisierung</li>
              <li>Berücksichtigung von E-E-A-T-Kriterien für Autorität und Vertrauen</li>
              <li>Content-Erstellung auf Basis echter Nutzerfragen (People Also Ask, AnswerThePublic)</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-primary-light rounded-xl p-6 border border-gold-300/20"
          >
            <p className="text-white text-lg">
              <FaCheckCircle className="inline mr-2 text-gold-300" />
              <strong>Praxisbeispiel:</strong> Ein Online-Shop erhöhte seine Verweildauer um 48 % und die Conversion-Rate um 21 %, allein durch technische & inhaltliche OnPage-Optimierung. Besonders die Verbesserung der mobilen Ladezeit und gezielter Content zu „Lieferzeit & Rückgabe“ führte zu mehr Vertrauen bei potenziellen Käufern.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 0, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h2 className="text-3xl font-bold flex items-center gap-2">
              <FaTools className="text-gold-300" /> Unsere Tools & Erfahrung
            </h2>
            <p className="text-gray-300">
              Für die OnPage-Analyse setzen wir auf erprobte Tools wie <strong>SEMrush</strong>, <strong>Screaming Frog</strong>, <strong>PageSpeed Insights</strong> und <strong>Google Search Console</strong>. In Kombination mit unserer Erfahrung aus über 100 Projekten entsteht eine datenbasierte Strategie mit echter Wirkung.
            </p>
          </motion.div>

          <motion.div
  initial={{ y: 20, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
  className="space-y-4"
>
  <h2 className="text-3xl font-bold flex items-center gap-2">
    <FaChartLine className="text-gold-300" /> SEO-Audit & Fehleranalyse
  </h2>
  <p className="text-gray-300">
    Jede Optimierung beginnt mit einem fundierten SEO-Audit. Wir identifizieren Crawling-Fehler, doppelte Inhalte, fehlende Meta-Tags, langsame Seiten und Barrierefreiheitsprobleme. Mit Tools wie Screaming Frog, Sitebulb oder der Google Search Console erstellen wir detaillierte Reports und Maßnahmenpläne.
  </p>
</motion.div>

<motion.div
  initial={{ y: 20, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
  className="space-y-4"
>
  <h2 className="text-3xl font-bold flex items-center gap-2">
    <FaCheckCircle className="text-gold-300" /> E-E-A-T: Vertrauen aufbauen
  </h2>
  <p className="text-gray-300">
    Google bewertet nicht nur Technik, sondern auch <strong>Erfahrung (Experience)</strong>, <strong>Fachwissen (Expertise)</strong>, <strong>Autorität (Authoritativeness)</strong> und <strong>Vertrauenswürdigkeit (Trust)</strong>. Deshalb integrieren wir Autorenboxen mit Qualifikationen, Kundenstimmen, Sicherheitszertifikate, Quellenangaben und aktualisierte Inhalte. Besonders bei sensiblen Themen (z. B. Gesundheit, Recht, Finanzen) ist E-E-A-T entscheidend.
  </p>
</motion.div>

<motion.div
  initial={{ y: 20, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
  className="space-y-4"
>
  <h2 className="text-3xl font-bold flex items-center gap-2">
    <FaCheckCircle className="text-gold-300" /> Fallstudie: Zahnarzt Berlin
  </h2>
  <p className="text-gray-300">
    Ein Zahnarzt aus Berlin konnte durch gezielte OnPage-Optimierung (Ladezeitverbesserung, mobile Struktur, Patienten-Content) seine Google-Top-10-Rankings um 38% steigern. Besonders effektiv war eine neue Unterseite zum Thema „Angstpatienten“, kombiniert mit einem FAQ-Bereich, Google-Bewertungen und strukturierten Daten für Öffnungszeiten.
  </p>
</motion.div>

<motion.div
  initial={{ y: 20, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
  className="space-y-4"
>
  <h2 className="text-3xl font-bold flex items-center gap-2">
    <FaRocket className="text-gold-300" /> Content-Strategie aus SEO-Daten ableiten
  </h2>
  <p className="text-gray-300">
    OnPage-SEO liefert mehr als technische Hinweise: Aus Keyword-Clustern, Nutzerfragen und Seitenanalysen leiten wir direkt neue Inhalte ab, z.B. Blogbeiträge, FAQ-Bereiche, Glossare oder Leistungsunterseiten. So wird deine Website nicht nur technisch, sondern auch redaktionell besser.
  </p>
</motion.div>

<motion.div
  initial={{ y: 20, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
  className="space-y-4"
>
  <h2 className="text-3xl font-bold flex items-center gap-2">
    <FaCode className="text-gold-300" /> Häufige Fehler & wie wir sie beheben
  </h2>
  <ul className="list-disc list-inside text-gray-300 space-y-2">
    <li>Fehlende H1-Tags oder doppelte H1s</li>
    <li>Seiten ohne Meta-Description oder mit Duplicate-Titles</li>
    <li>Verwaiste Seiten ohne interne Verlinkung</li>
    <li>Langsame Serverantwortzeiten oder unkomprimierte Assets</li>
    <li>Barrierefreiheit nicht beachtet (z. B. fehlende Alt-Texte)</li>
  </ul>
</motion.div>

<motion.div
  initial={{ y: 20, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
  className="space-y-4"
>
  <h2 className="text-3xl font-bold flex items-center gap-2">
    <FaSitemap className="text-gold-300" /> UX & SEO: Nutzerführung als Rankingfaktor
  </h2>
  <p className="text-gray-300">
    Eine klare Navigationsstruktur, aussagekräftige CTAs, und gut strukturierte Texte helfen nicht nur deinen Besuchern, sie signalisieren Google, dass deine Seite relevant, zugänglich und vertrauenswürdig ist. Gutes UX ist heute gutes SEO.
  </p>
</motion.div>

<motion.div
  initial={{ y: 20, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
  className="space-y-4"
>
  <h2 className="text-3xl font-bold flex items-center gap-2">
    <FaChartLine className="text-gold-300" /> Monitoring & regelmäßige Updates
  </h2>
  <p className="text-gray-300">
    SEO ist kein Einmalprojekt. Wir kontrollieren regelmäßig Rankings, PageSpeed-Werte, Crawling-Fehler und neue Wettbewerberbewegungen. So bleibt deine Website dauerhaft sichtbar, performant und relevant.
  </p>
</motion.div>

        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-gold-300 text-white rounded-3xl p-12 text-center"
      >
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-4">OnPage-SEO bringt Struktur & Erfolg</h3>
          <p className="text-xl mb-8">
            Lassen Sie uns gemeinsam Ihre Website fit für Suchmaschinen und Nutzer machen. Nachhaltig. Effizient. Wirkungsvoll.
          </p>
          <Link 
            href="/kontakt" 
            className="inline-block bg-primary text-gold-300 px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-gold-300/20 transition items-center gap-2"
          >
            Jetzt optimieren <FaArrowRight />
          </Link>
        </div>
      </motion.section>
    </main>
  );
}

