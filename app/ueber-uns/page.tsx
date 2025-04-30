export const metadata = {
    title: 'Über uns | CAITSocialMedia',
    description:
      'Lerne das Team von CAITSocialMedia kennen – deine Experten für SEO, Webentwicklung, Google Ads und Social Media. Persönlich. Digital. Erfolgreich.',
  };
  
  export default function AboutPage() {
    return (
      <section className="px-6 py-20 max-w-4xl mx-auto text-black">
        <h1 className="text-3xl font-bold mb-8 text-blue-900">Über uns</h1>
  
        <p className="mb-6">
          <strong>CAITSocialMedia</strong> ist eine moderne Agentur für digitales Marketing mit Sitz in Berlin. 
          Unser Fokus liegt auf maßgeschneiderter <strong>Suchmaschinenoptimierung (SEO)</strong>, 
          <strong>leistungsstarken Webseiten</strong>, effektiven <strong>Google Ads-Kampagnen</strong> 
          und kreativen <strong>Social-Media-Strategien</strong>. Wir helfen dir, digital sichtbar zu werden – und messbar zu wachsen.
        </p>
  
        <h2 className="text-2xl font-semibold mt-10 mb-4">Unsere Mission</h2>
        <p className="mb-6">
          Wir glauben an transparente Strategien, datenbasierte Entscheidungen und ehrliche Kommunikation. 
          Unser Ziel: deinem Unternehmen mit durchdachtem Online-Marketing langfristig mehr Reichweite, 
          mehr Kunden und mehr Umsatz zu verschaffen – egal ob lokal, national oder international.
        </p>
  
        <h2 className="text-2xl font-semibold mt-10 mb-4">Wofür wir stehen</h2>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li><strong>Ergebnisorientiert:</strong> Wir arbeiten nicht für Klicks, sondern für echte Resultate.</li>
          <li><strong>Individuell:</strong> Keine Standardpakete – jedes Projekt ist einzigartig.</li>
          <li><strong>Persönlich:</strong> Direkter Kontakt, keine Hotline, keine Blackbox.</li>
          <li><strong>Modern:</strong> Wir nutzen neueste Tools, Trends und Technologien.</li>
        </ul>
  
        <h2 className="text-2xl font-semibold mt-10 mb-4">Unser Team</h2>
        <p className="mb-6">
          Hinter CAITSocialMedia steht ein kleines, engagiertes Team mit Erfahrung in 
          Webentwicklung, SEO, Ads und Content Creation. Wir sind flexibel, neugierig 
          und lieben es, mit unseren Kunden gemeinsam Erfolge zu feiern.
        </p>
  
        <h2 className="text-2xl font-semibold mt-10 mb-4">Bereit uns kennenzulernen?</h2>
        <p>
          Du willst mehr Sichtbarkeit, mehr Traffic und mehr digitale Power für dein Unternehmen?
          <br />
          <a href="/kontakt" className="text-blue-800 underline">
            Dann melde dich jetzt bei uns!
          </a>
        </p>
      </section>
    );
  }