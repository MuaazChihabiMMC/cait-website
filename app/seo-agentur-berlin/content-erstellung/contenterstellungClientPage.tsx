// app/seo/content-erstellung/ContentErstellungClient.tsx
'use client';

import { motion } from 'framer-motion';
import { FaPenNib } from 'react-icons/fa';
import Link from 'next/link';

export default function ContentErstellungClient() {
  return (
    <div className="max-w-4xl mx-auto px-4 pt-32 md:pt-40 pb-16 text-white">
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
          <h2 className="text-2xl font-semibold mb-2">🔍 Keyword-optimierte Inhalte: Mehr als nur Suchbegriffe</h2>
          <p className="text-gray-300">
            Jede Textproduktion beginnt bei uns mit einer fundierten Keyword-Recherche. Wir identifizieren nicht nur relevante Hauptkeywords, sondern analysieren auch Long-Tail-Keywords, Synonyme und semantische Begrifflichkeiten (LSI-Keywords).
          </p>
          <p className="text-gray-300 mt-2">
            Entscheidend ist dabei die Suchintention (Search Intent): Sucht der Nutzer nach Informationen ("Was ist SEO?"), will er etwas kaufen ("SEO Agentur Berlin") oder sucht er eine bestimmte Website? Wir richten jeden Text exakt auf diese Intention aus. Das Ergebnis sind Inhalte, die nicht nach "SEO-Spam" klingen, sondern dem Nutzer genau das liefern, was er sucht – und Google mit Relevanz überzeugen.
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
            Traffic allein bringt keinen Umsatz. Deshalb verbinden wir SEO mit Verkaufspsychologie (Copywriting). Wir wissen, wie wir Leser führen müssen, damit sie nicht nur lesen, sondern handeln.
          </p>
          <p className="text-gray-300 mt-2">
            Wir arbeiten mit bewährten Formeln wie AIDA (Attention, Interest, Desire, Action) oder PAS (Problem, Agitation, Solution), um den Nutzer emotional abzuholen. Klare Call-to-Actions (CTAs) an den richtigen Stellen, vertrauensbildende Elemente (Social Proof) und eine liebevolle Formatierung sorgen dafür, dass aus Besuchern zahlende Kunden werden.
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
            Google bewertet Inhalte zunehmend nach den E-E-A-T-Kriterien: Experience (Erfahrung), Expertise (Fachwissen), Authoritativeness (Autorität) und Trustworthiness (Vertrauenswürdigkeit).
          </p>
          <p className="text-gray-300 mt-2">
            Besonders in sensiblen Branchen wie Gesundheit, Finanzen oder Recht (YMYL - Your Money Your Life) muss der Content absolut wasserdicht sein. Wir recherchieren Fakten penibel, verlinken auf seriöse Quellen und strukturieren Inhalte so, dass sie Expertenstatus ausstrahlen. Das schafft Vertrauen bei Nutzern und signalisiert Google, dass Ihre Seite eine verlässliche Informationsquelle ist.
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
          <div className="space-y-4 mt-4">
            <div className="bg-[#131f38] p-4 rounded-lg border border-night-600">
              <strong className="block text-gold-300 mb-1">1. Briefing & Strategie</strong>
              Wir analysieren deine Zielgruppe, deine Marke und deine Ziele. Welches Problem lösen wir für den Kunden?
            </div>
            <div className="bg-[#131f38] p-4 rounded-lg border border-night-600">
              <strong className="block text-gold-300 mb-1">2. Keyword- & Themenrecherche</strong>
              Wir finden die Suchbegriffe mit dem größten Potenzial und dem geringsten Wettbewerb (Low Hanging Fruits).
            </div>
            <div className="bg-[#131f38] p-4 rounded-lg border border-night-600">
              <strong className="block text-gold-300 mb-1">3. Erstellung & Optimierung</strong>
              Unsere Fachredakteure schreiben den Text, inkl. Meta-Tags, Überschriftenstruktur (H1-H6) und interner Verlinkung.
            </div>
            <div className="bg-[#131f38] p-4 rounded-lg border border-night-600">
              <strong className="block text-gold-300 mb-1">4. Feedback & Feinschliff</strong>
              Du erhältst den Text zur Ansicht. Änderungswünsche arbeiten wir schnell und präzise ein.
            </div>
            <div className="bg-[#131f38] p-4 rounded-lg border border-night-600">
              <strong className="block text-gold-300 mb-1">5. Veröffentlichung</strong>
              Auf Wunsch pflegen wir den Content direkt in dein CMS (WordPress, TYPO3, Shopify) ein.
            </div>
          </div>
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
            className="inline-flex items-center gap-2 bg-gold-300 text-night px-6 py-3 rounded-lg font-semibold shadow hover:bg-night-600 transition"
          >
            Jetzt Content-Angebot anfordern
          </Link>
        </motion.div>
      </motion.section>
    </div>
  );
}

