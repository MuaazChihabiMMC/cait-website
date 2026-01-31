'use client';

import { motion } from 'framer-motion';
import {
  FaLink,
  FaArrowRight,
  FaCheckCircle,
  FaBullhorn,
  FaSearch,
  FaGlobeEurope,
  FaShieldAlt,
  FaStar,
  FaChartLine,
  FaCogs,
  FaGlobe,
  FaUserTie,
  FaLightbulb,
  FaBook,
  FaQuestionCircle
} from 'react-icons/fa';
import Link from 'next/link';

export default function OffPageSeoClient() {
  return (
    <main className="px-4 py-12 md:px-6 max-w-6xl mx-auto bg-primary text-white space-y-24">

      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center pt-32 md:pt-40"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-700">
          🌐 OffPage-SEO & Backlinkaufbau mit System
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          Sichtbarkeit, Vertrauen, Autorität, gezielte Backlinks bringen dich an die Spitze der Google-Suchergebnisse. Wir zeigen, wie echter Linkaufbau heute funktioniert.
        </p>
        <p className="text-base text-gray-300 mt-4 max-w-2xl mx-auto">
          Als erfahrene SEO-Agentur in Berlin unterstützen wir Unternehmen mit nachhaltigen OffPage-Strategien, datengetriebenen Tools und journalistischem Netzwerk für starke Backlinks.
        </p>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/kontakt"
          className="inline-flex items-center gap-2 mt-8 bg-gold-300 text-white px-6 py-3 rounded-full font-semibold shadow hover:shadow-lg transition"
        >
          Jetzt OffPage-Beratung starten <FaArrowRight />
        </motion.a>
      </motion.section>

      {/* GRUNDLAGEN */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-12"
      >
        <div className="space-y-6 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <FaChartLine className="text-gold-300" /> Was ist OffPage-SEO?
          </h2>
          <p className="text-gray-300 text-lg">
            OffPage-SEO umfasst alle Maßnahmen außerhalb deiner eigenen Website, die dein Ranking bei Google positiv beeinflussen, allem voran durch sogenannte Backlinks. Sie gelten als digitale Empfehlungen und senden starke Vertrauenssignale an Suchmaschinen.
          </p>
          <p className="text-gray-300 text-lg">
            Dabei geht es nicht nur um Masse, sondern um Qualität, Kontext und Glaubwürdigkeit. Mit einer professionellen Linkbuilding-Strategie kannst du langfristig Sichtbarkeit, Autorität und Relevanz aufbauen.
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <FaCogs className="text-gold-300" /> Wie Google Vertrauen bewertet
          </h2>
          <p className="text-gray-300 text-lg">
            Google nutzt hunderte Rankingfaktoren, aber Backlinks zählen seit jeher zu den stärksten. Doch nicht jeder Link wirkt gleich. Wichtig ist:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4 text-gray-300">
            <li><strong>Themenrelevanz:</strong> Die verlinkende Seite muss thematisch passen</li>
            <li><strong>Domain-Autorität:</strong> Je stärker die Domain, desto größer die Wirkung</li>
            <li><strong>Natürlichkeit:</strong> Ein gesundes Verhältnis aus Follow/NoFollow, Brand/KW-Anker etc.</li>
            <li><strong>Vertrauenswürdigkeit:</strong> Keine Spam- oder Linkfarmen</li>
          </ul>
        </div>
      </motion.section>

      {/* LEISTUNGEN */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-12"
      >
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <FaCogs className="text-gold-300" /> Unsere Leistungen im OffPage-SEO
          </h2>
          <ul className="list-disc list-inside space-y-3 pl-4 text-gray-300 text-lg">
            <li><strong>Backlinkanalyse & Audit:</strong> Wir überprüfen dein Linkprofil auf toxische Links, Broken Links und Stärken.</li>
            <li><strong>Strategischer Linkaufbau:</strong> Gezielte Outreach-Kampagnen, Gastartikel, Interviews und Erwähnungen in Fachmedien.</li>
            <li><strong>Digital PR:</strong> Unser Netzwerk aus Journalisten und Fachportalen sorgt für echte Sichtbarkeit.</li>
            <li><strong>Lokale Verzeichnisse:</strong> Branchenbücher, regionale Listings und Google-Business-Verknüpfungen.</li>
            <li><strong>Content Seeding:</strong> Veröffentlichung hochwertiger Inhalte auf Plattformen mit hoher Sichtbarkeit.</li>
            <li><strong>Brand Mentions:</strong> Auch Erwähnungen ohne Link sind wertvoll für Google.</li>
            <li><strong>Link Entwertung:</strong> Wir nutzen das Google Disavow Tool bei toxischen Links.</li>
            <li><strong>Reputationsaufbau:</strong> Pressearbeit, Reviews & Erwähnungen zur Stärkung deiner Markenautorität.</li>
            <li><strong>Monitoring & Reporting:</strong> Monatliche Reports zu Linkentwicklung, Rankings & Trust-Werten.</li>
            <li><strong>Wettbewerbsanalyse:</strong> Welche Linkquellen nutzt deine Konkurrenz, und wie holen wir auf?</li>
            <li><strong>Strategieentwicklung:</strong> Individuelle Roadmap abgestimmt auf deine Ziele & Branche.</li>
            <li><strong>Internationale Linkkampagnen:</strong> Aufbau von Backlinks in Fremdsprachen & länderspezifischen Märkten.</li>
          </ul>
        </div>
      </motion.section>

      {/* E-E-A-T umgesetzt */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-12"
      >
        <div className="space-y-6 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <FaShieldAlt className="text-gold-300" /> E-E-A-T im Linkaufbau praktisch umgesetzt
          </h2>
          <p className="text-gray-300 text-lg">
            Google verlangt von Websites zunehmend <strong>Experience, Expertise, Authority und Trust</strong>. Beim OffPage-SEO heißt das:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4 text-gray-300">
            <li><strong>Experience:</strong> Authentische Erfahrungsberichte & Erwähnungen in User-Communities</li>
            <li><strong>Expertise:</strong> Gastartikel und Zitate in Fachportalen mit Namensnennung & Autorenprofil</li>
            <li><strong>Authority:</strong> Erwähnungen auf bekannten Domains (z. B. Handelsblatt, Chip.de, t3n.de)</li>
            <li><strong>Trust:</strong> Natürliche Linkprofile, SSL-Verschlüsselung, keine PBNs (Private Blog Networks)</li>
          </ul>
        </div>
      </motion.section>

      {/* Tools & Methoden */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-12"
      >
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <FaSearch className="text-gold-300" /> Unsere Tools & Methoden
          </h2>
          <p className="text-gray-300 text-lg">
            Ein starker Linkaufbau basiert auf Daten. Wir analysieren dein Backlinkprofil, Konkurrenzstrategien und thematische Möglichkeiten mit:
          </p>
          <ul className="list-disc list-inside space-y-3 pl-4 text-gray-300">
            <li><strong>Ahrefs:</strong> Wettbewerbsanalyse, Linkwachstum, Ankertextverteilung</li>
            <li><strong>SEMrush:</strong> Backlink Reports, Toxizitätsanalyse & historische Linkdaten</li>
            <li><strong>Majestic:</strong> Trust Flow & Citation Flow zur Bewertung der Linkqualität</li>
            <li><strong>Buzzstream:</strong> Outreach-Tool zum Aufbau echter Kontakte</li>
            <li><strong>Google Disavow:</strong> Zur gezielten Entwertung schlechter Backlinks</li>
          </ul>
        </div>
      </motion.section>

      {/* Branchenlösungen */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-12"
      >
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <FaUserTie className="text-gold-300" /> Branchenlösungen für gezielten Linkaufbau
          </h2>
          <p className="text-gray-300 text-lg">
            Unterschiedliche Branchen brauchen unterschiedliche Linkstrategien. Unsere Erfahrung reicht von Nischen bis E-Commerce:
          </p>
          <ul className="list-disc list-inside space-y-3 pl-4 text-gray-300">
            <li><strong>E-Commerce:</strong> Produkttests, Preisvergleiche, Gutscheine, Blogkooperationen</li>
            <li><strong>Ärzte & Praxen:</strong> Branchenverzeichnisse, Gesundheitsportale, lokale Presse</li>
            <li><strong>Software & Tech:</strong> Entwicklerplattformen, Fachartikel, API-Verzeichnisse</li>
            <li><strong>Agenturen & Coaches:</strong> Interviews, Podcasts, LinkedIn Artikel</li>
          </ul>
        </div>
      </motion.section>

      {/* Fallstudie 1 */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-12"
      >
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <FaStar className="text-gold-300" /> Case Study: Berliner Juwelier
          </h2>
          <p className="text-gray-300 text-lg">
            Ein lokaler Juwelier im Preußenpark konnte seine Sichtbarkeit mit gezielten Citations, Erwähnungen auf Branchenblogs und Google-Business-Optimierung innerhalb von 4 Monaten um <strong>+210 %</strong> steigern. Ziel-Keywords wie „Goldankauf Berlin“ erreichten die Top-3.
          </p>
        </div>
      </motion.section>

      {/* Fallstudie 2 */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-12"
      >
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <FaStar className="text-gold-300" /> Case Study: B2B-SaaS Anbieter
          </h2>
          <p className="text-gray-300 text-lg">
            Für einen SaaS-Anbieter führten wir eine internationale Linkkampagne in DACH, UK und den USA durch. Über <strong>120 relevante Backlinks</strong> aus Tech-Magazinen, Startup-Verzeichnissen und Content Hubs führten zu einem Sichtbarkeitszuwachs von <strong>+387 %</strong> in 6 Monaten.
          </p>
        </div>
      </motion.section>
      {/* Best Practices */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-12"
      >
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <FaLightbulb className="text-gold-300" /> Best Practices & Fehler beim Linkaufbau
          </h2>
          <p className="text-gray-300 text-lg">
            Linkaufbau ist sensibel, viele Methoden funktionieren, andere gefährden deine Sichtbarkeit. Unsere Empfehlungen:
          </p>
          <ul className="list-disc list-inside space-y-3 pl-4 text-gray-300">
            <li><strong>Do:</strong> Setze auf Qualität, thematische Nähe und Diversität</li>
            <li><strong>Do:</strong> Verlinke gezielt Unterseiten mit Fokus-Keywords</li>
            <li><strong>Don't:</strong> Vermeide Linktauschnetzwerke oder gekaufte Links ohne Kontext</li>
            <li><strong>Don't:</strong> Finger weg von billigen Linkpaketen auf Fiverr & Co.</li>
            <li><strong>Do:</strong> Nutze Branding-Links und kombiniere mit PR-Maßnahmen</li>
            <li><strong>Do:</strong> Halte dein Linkprofil regelmäßig sauber (Disavow)</li>
          </ul>
        </div>
      </motion.section>

      {/* Glossar */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-12"
      >
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <FaBook className="text-gold-300" /> Glossar: Linkaufbau von A-Z
          </h2>
          <ul className="list-disc list-inside space-y-2 pl-4 text-gray-300">
            <li><strong>Backlink:</strong> Ein eingehender Link von einer externen Website</li>
            <li><strong>Disavow:</strong> Google-Tool zum Entwerten schädlicher Links</li>
            <li><strong>Anchor Text:</strong> Sichtbarer Linktext, wichtig für Keyword-Signale</li>
            <li><strong>DoFollow:</strong> Standard-Linktyp, der Linkjuice überträgt</li>
            <li><strong>NoFollow:</strong> Linktyp, der keinen SEO-Wert weitergibt (z. B. bei Anzeigen)</li>
            <li><strong>Domain Authority (DA):</strong> Kennzahl zur Stärke einer Domain (Moz)</li>
            <li><strong>Linkjuice:</strong> Übertragene SEO-Wirkung eines Links</li>
            <li><strong>Outreach:</strong> Aktive Ansprache potenzieller Linkgeber (z. B. Blogger, Journalisten)</li>
          </ul>
        </div>
      </motion.section>

      {/* FAQ */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-12"
      >
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <FaQuestionCircle className="text-gold-300" /> Häufige Fragen zu OffPage-SEO
          </h2>
          <div className="space-y-4 text-gray-300">
            <p><strong>Wie viele Backlinks braucht man?</strong><br />Nicht die Anzahl, sondern die Qualität zählt. 10 starke Links sind besser als 100 schwache.</p>
            <p><strong>Wie lange dauert der Aufbau?</strong><br />Je nach Branche und Ziel zwischen 2-6 Monate, erste Rankings oft nach 4-8 Wochen.</p>
            <p><strong>Sind gekaufte Links erlaubt?</strong><br />Laut Google nein. Wir arbeiten transparent, journalistisch und ohne Risiko-Methoden.</p>
            <p><strong>Wie erkenne ich schlechte Links?</strong><br />Spam-Domains, irrelevante Inhalte, reines Linknetzwerk, wir prüfen das regelmäßig für dich.</p>
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-gold-300 text-white rounded-3xl p-12 text-center"
      >
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-4">Jetzt Autorität & Sichtbarkeit aufbauen</h3>
          <p className="text-xl mb-8">
            Starte mit datenbasiertem Linkaufbau, individuell auf dein Unternehmen zugeschnitten. Unsere Strategien bringen nachhaltige SEO-Erfolge, transparent und wirkungsvoll.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex bg-primary text-gold-300 px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-gold-300/20 transition items-center gap-2"
          >
            Kostenloses Erstgespräch vereinbaren <FaArrowRight />
          </Link>
        </div>
      </motion.section>

      {/* Footer-Backlink */}
      <section className="text-center pt-12">
        <p className="text-gray-300">
          Zurück zur <Link href="/seo-agentur-berlin" className="underline text-gold-300">SEO Übersicht</Link>
        </p>
      </section>
    </main>
  );
}

