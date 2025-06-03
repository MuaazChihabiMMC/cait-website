// components/GoogleAdsBenefits.tsx
const benefits = [
  'Individuelle Kampagnenstrategie Ihrer SEA Agentur',
  'Transparente Monats-Reports mit echten KPIs',
  'Zertifizierte Google Ads Spezialisten in Berlin',
  'Ihre Ads Agentur mit direktem Ansprechpartner',
  'Berliner Agentur für schnelle Umsetzung',
  'Verknüpfung mit Google Analytics & Tag Manager',
  'Flexibles Budgetmanagement mit maximalem ROI',
  'Erfahrung als Google Ads Agentur in 200+ Projekten',
];

export default function GoogleAdsBenefits() {
  return (
    <section className="bg-[#0c1832] py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
          Warum CAIT als Google Ads Agentur Berlin?
        </h2>
        <p className="text-lg text-gray-300 mb-10">
          Als erfahrene SEA Agentur liefern wir nicht nur Anzeigen, sondern echte Performance. 
          Unsere Ads Agentur in Berlin optimiert strategisch für mehr Leads & Umsatz.
        </p>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {benefits.map((benefit, index) => (
            <li
              key={index}
              className="flex gap-3 items-start bg-blue-500/10 border border-blue-400/30 p-4 rounded-xl shadow-lg hover:shadow-blue-500/20 transition hover:translate-y-[-2px]"
            >
              <span className="text-blue-400 text-xl">✓</span>
              <p className="text-white leading-relaxed">{benefit}</p>
            </li>
          ))}
        </ul>
      </div>

      <section className="max-w-5xl mx-auto px-6 py-20 text-gray-200 leading-relaxed text-lg space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-6">
          Google Ads Agentur Berlin, gezielte Werbung, messbare Ergebnisse
        </h2>

        <p>
          Als erfahrene <strong className="text-white">Google Ads Agentur</strong> mit Sitz in Berlin wissen wir, worauf es ankommt, wenn du mit gezielter Suchmaschinenwerbung (SEA) neue Kunden gewinnen möchtest. Ob lokale Dienstleistung, E-Commerce oder B2B, wir entwickeln maßgeschneiderte Strategien, um dein Werbebudget effizient und zielführend einzusetzen.
        </p>

        <p>
          Im Gegensatz zur klassischen Werbung ermöglichen dir Google Ads eine direkte Sichtbarkeit bei konkretem Suchinteresse. Nutzer suchen bereits nach dem, was du anbietest, und genau hier setzt deine <strong className="text-white">Google Ads Agentur Berlin</strong> an. Mit intelligentem Kampagnenaufbau, präzisem Targeting und kontinuierlicher Optimierung erreichen wir genau deine Zielgruppe.
        </p>

        <h3 className="text-2xl font-semibold text-blue-300 mt-10">Warum Google Ads? Deine Vorteile auf einen Blick</h3>
        <ul className="list-disc ml-6 space-y-2 marker:text-blue-300">
          <li>Sofortige Sichtbarkeit bei Google-Suchanfragen</li>
          <li>Kontrollierbares Budget & messbare Ergebnisse</li>
          <li>Zielgruppenansprache auf Keyword-, Standort- & Gerätebasis</li>
          <li>Schneller ROI dank Conversion-Optimierung</li>
          <li>Remarketing-Möglichkeiten & Zielgruppensegmentierung</li>
        </ul>

        <h3 className="text-2xl font-semibold text-blue-300 mt-10">Unsere Leistungen als SEA Agentur in Berlin</h3>
        <p>
          Bei CAIT profitierst du von einem ganzheitlichen Google Ads Service, von der Analyse bis zur Skalierung:
        </p>
        <ul className="list-disc ml-6 space-y-2 marker:text-blue-300">
          <li><strong className="text-white">Keyword-Recherche:</strong> Wir identifizieren relevante Suchbegriffe mit hoher Kaufabsicht.</li>
          <li><strong className="text-white">Kampagnenstruktur:</strong> Performance-orientierter Aufbau von Such-, Display-, Shopping- und Remarketing-Kampagnen.</li>
          <li><strong className="text-white">Anzeigentexte:</strong> Wir schreiben überzeugende Ads mit klaren USPs & Call-to-Actions.</li>
          <li><strong className="text-white">Conversion-Tracking:</strong> Einrichtung von Tracking via Google Tag Manager, Analytics & mehr.</li>
          <li><strong className="text-white">Kontinuierliche Optimierung:</strong> Wir passen Gebote, Anzeigen & Zielgruppen laufend an.</li>
        </ul>

        <h3 className="text-2xl font-semibold text-blue-300 mt-10">Warum eine spezialisierte Google Ads Agentur Berlin wählen?</h3>
        <p>
          Der Wettbewerb in Google ist hart, besonders in Großstädten wie Berlin. Deshalb reicht es nicht, einfach Anzeigen zu schalten. Du brauchst eine Agentur, die den lokalen Markt versteht, datengetrieben arbeitet und langfristig denkt.
        </p>
        <p>
          Als <strong className="text-white">Google Ads Agentur Berlin</strong> sind wir direkt vor Ort, kennen die regionale Zielgruppe und bringen Erfahrung aus über 200 Kampagnen mit. Von Berliner Start-ups bis zu etablierten Mittelständlern, wir sorgen für mehr Sichtbarkeit und Umsatz.
        </p>

        <h3 className="text-2xl font-semibold text-blue-300 mt-10">Zielgruppenanalyse & Buyer Personas</h3>
        <p>
          Je besser wir deine Zielgruppe verstehen, desto präziser funktionieren deine Google Ads. Deshalb starten wir jede Zusammenarbeit mit einer fundierten Zielgruppenanalyse. Wer sind deine Kunden? Wo wohnen sie? Welche Sprache sprechen sie? Welche Probleme wollen sie lösen?
        </p>
        <p>
          Diese Informationen fließen direkt in die Kampagnenstruktur, ob durch geografisches Targeting, demografische Anpassung oder psychografische Ausrichtung. Das Ergebnis: weniger Streuverluste, mehr Conversion.
        </p>

        <h3 className="text-2xl font-semibold text-blue-300 mt-10">Bessere Ergebnisse durch kontinuierliche Optimierung</h3>
        <p>
          Google Ads ist kein „Einmal einrichten und vergessen"-System. Wer dauerhaft erfolgreich werben will, muss kontinuierlich analysieren, testen und verbessern. Als deine <strong className="text-white">SEA Agentur</strong> überwachen wir alle wichtigen KPIs:
        </p>
        <ul className="list-disc ml-6 space-y-2 marker:text-blue-300">
          <li>Klickrate (CTR)</li>
          <li>Qualitätsfaktor</li>
          <li>Cost-per-Click (CPC)</li>
          <li>Cost-per-Acquisition (CPA)</li>
          <li>Conversion-Rate</li>
          <li>Return on Ad Spend (ROAS)</li>
        </ul>
        <p>
          Mit datengetriebenen A/B-Tests optimieren wir Anzeigen, Landingpages, Zielgruppen & mehr. Dadurch sinken deine Kosten pro Lead, während dein Umsatz steigt.
        </p>

        <h3 className="text-2xl font-semibold text-blue-300 mt-10">Für wen ist Google Ads besonders geeignet?</h3>
        <p>
          Unsere <strong className="text-white">Google Ads Agentur Berlin</strong> betreut Unternehmen aus den unterschiedlichsten Branchen, darunter:
        </p>
        <ul className="list-disc ml-6 space-y-2 marker:text-blue-300">
          <li>Lokale Dienstleister (z. B. Handwerker, Ärzte, Coaches)</li>
          <li>Online-Shops & E-Commerce</li>
          <li>B2B-Unternehmen mit komplexen Angeboten</li>
          <li>Start-ups mit skalierbaren Geschäftsmodellen</li>
          <li>Eventveranstalter & lokale Anbieter</li>
        </ul>

        <h3 className="text-2xl font-semibold text-blue-300 mt-10">Transparenz & Reporting</h3>
        <p>
          Als professionelle Google Ads Agentur ist uns Transparenz besonders wichtig. Du erhältst monatlich ein verständliches Reporting mit allen Kennzahlen, Erfolgen und Handlungsempfehlungen. In regelmäßigen Meetings besprechen wir die nächsten Optimierungsschritte.
        </p>

        <h3 className="text-2xl font-semibold text-blue-300 mt-10">Deine Vorteile mit CAIT als Google Ads Agentur</h3>
        <ul className="list-disc ml-6 space-y-2 marker:text-blue-300">
          <li>✓ Persönlicher Ansprechpartner in Berlin</li>
          <li>✓ 100 % auf Google Ads & Performance fokussiert</li>
          <li>✓ DSGVO-konforme Einrichtung aller Tracking-Tools</li>
          <li>✓ Flexible Laufzeiten & transparente Preisstruktur</li>
          <li>✓ Erfahrung in über 200 Projekten</li>
        </ul>

        <p>
          Starte jetzt durch mit einer professionellen <strong className="text-white">Google Ads Agentur Berlin</strong>. Vereinbare ein kostenloses Beratungsgespräch und finde heraus, welches Potenzial in deinem Unternehmen steckt.
        </p>

        <div className="mt-8 text-center">
          <a href="/kontakt" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg transition hover:translate-y-[-2px]">
            Jetzt unverbindlich beraten lassen
          </a>
        </div>
      </section>
    </section>
  );
}