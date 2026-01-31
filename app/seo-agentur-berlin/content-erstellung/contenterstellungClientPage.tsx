// app/seo/content-erstellung/ContentErstellungClient.tsx
'use client';

import { motion } from 'framer-motion';
import { FaPenNib } from 'react-icons/fa';
import Link from 'next/link';

export default function ContentErstellungClient() {
  return (
    <main className="max-w-4xl mx-auto px-4 pt-32 md:pt-40 pb-16 text-white">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-6 flex items-center gap-3"
      >
        <FaPenNib className="text-gold-300" /> SEO Content Erstellung für Top Rankings & Sichtbarkeit
      </motion.h1>

      <p className="text-base text-gray-300 mt-2">
        Die <strong>CAIT SEO Agentur Berlin</strong> unterstützt dich mit professioneller <strong>Content-Erstellung und SEO Texten</strong>, die Google lieben wird, datengestützt, zielgerichtet und wirkungsvoll.
      </p>

      <motion.p 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.2 }}
        className="text-lg mb-6 text-gray-300"
      >
        Wir schreiben Inhalte, die Google liebt und Nutzer lesen wollen, von informativen Blogartikeln über Service-Seiten bis hin zu überzeugenden Landingpages.
      </motion.p>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-10"
      >
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-2">🔍 Keyword-optimierte Inhalte</h2>
          <p className="text-gray-300">
            Jede Textproduktion beginnt bei uns mit einer fundierten Keyword-Recherche. Wir identifizieren relevante Haupt- und Nebenkeywords, analysieren Suchintentionen und integrieren diese strategisch im Content.
          </p>
          <p className="text-gray-300">
            Unsere Texte sind keine „Keyword-Wüsten“, sondern sinnvoll strukturierte, gut lesbare Inhalte, die auf Ranking und Nutzererlebnis gleichermaßen optimiert sind.
          </p>
        </motion.div>

        <motion.div 
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-2">✍️ Conversion-orientiertes Copywriting</h2>
          <p className="text-gray-300">
            Gute Inhalte verkaufen, und zwar ohne aufdringlich zu wirken. Unsere Texte leiten Leser mit gezielten Call-to-Actions, klaren Botschaften und emotionalem Storytelling durch die Seite.
          </p>
          <p className="text-gray-300">
            Dabei achten wir besonders auf Leserführung, Scannability und psychologische Trigger, immer abgestimmt auf dein Angebot.
          </p>
        </motion.div>

        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-2">📈 SEO-Texte für jede Plattform</h2>
          <p className="text-gray-300">
            Egal ob Homepage, Produktseite, Kategorie, Blog, Ratgeber oder Glossar: Wir liefern dir maßgeschneiderten Content, der in Suchmaschinen rankt, und bei deinen Kunden ankommt.
          </p>
          <ul className="list-disc pl-6 mt-2 text-gray-300 space-y-1">
            <li>Landingpages für Google Ads oder Social Media Funnels</li>
            <li>Service-Seiten mit lokalem Fokus</li>
            <li>FAQ- und Helpdesk-Inhalte</li>
            <li>SEO-Texte für Online-Shops (z.B. Kategorien, Produktbeschreibungen)</li>
            <li>Branchenlösungen für Ärzte, Anwälte, E-Commerce u.v.m.</li>
          </ul>
        </motion.div>

        <motion.div 
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-2">🔬 Redaktionelle Qualität & E-E-A-T</h2>
          <p className="text-gray-300">
            Wir schreiben nicht nur für Google, sondern auch für deine Zielgruppe. Deshalb legen wir großen Wert auf fachliche Tiefe, echte Mehrwerte und eine ansprechende Sprache.
          </p>
          <p className="text-gray-300">
            Unsere Redaktion arbeitet nach dem E-E-A-T-Prinzip: Expertise, Experience, Authoritativeness und Trustworthiness. Das ist besonders für YMYL-Themen (z.B. Medizin, Finanzen, Recht) entscheidend.
          </p>
        </motion.div>

        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-2">🧠 Was uns von KI-generierten Texten unterscheidet</h2>
          <p className="text-gray-300">
            KI kann helfen, aber nicht ersetzen. Unsere Inhalte sind menschlich, redaktionell überarbeitet und mit echten Insights angereichert. Wir schreiben individuell, statt generisch.
          </p>
          <p className="text-gray-300">
            Jedes Projekt bekommt ein Redaktionsbriefing. Deine Werte, deine Sprache, deine Zielgruppe, all das fließt in jeden Text mit ein.
          </p>
        </motion.div>

        <motion.div 
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-2">📊 So läuft die Content-Erstellung bei CAIT ab</h2>
          <ol className="list-decimal pl-6 text-gray-300 space-y-1">
            <li>Briefing und Zieldefinition (Zielgruppe, Fokus, Seitenziel)</li>
            <li>Keyword-Recherche und Suchintention-Analyse</li>
            <li>Content-Strukturierung und Inhaltsplanung</li>
            <li>Texterstellung durch erfahrene SEO-Redakteure</li>
            <li>Optimierung (SEO, Stil, Lesbarkeit, CTAs)</li>
            <li>Redaktionsfreigabe und Einpflege in dein CMS (z.B. WordPress)</li>
          </ol>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <Link 
            href="/kontakt" 
            className="inline-flex items-center gap-2 bg-gold-300 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition"
          >
            Jetzt Content-Angebot anfordern
          </Link>
        </motion.div>
      </motion.section>
    </main>
  );
}

