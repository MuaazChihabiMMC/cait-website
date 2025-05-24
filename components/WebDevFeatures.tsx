// components/WebDevFeatures.tsx

const webFeatures = [
    {
      title: '⚙️ Maßgeschneiderte Entwicklung',
      description:
        'Keine Templates von der Stange, wir programmieren individuelle, performance-optimierte Websites exakt nach deinem Bedarf.',
    },
    {
      title: '📱 Responsive & mobiloptimiert',
      description:
        'Deine Seite funktioniert auf allen Geräten, vom Smartphone bis zum Ultra-HD-Display, mit optimaler Usability.',
    },
    {
      title: '🎨 UI/UX-Design inklusive',
      description:
        'Visuelle Gestaltung mit Nutzerfokus: modern, klar, intuitiv, damit Besucher zu Kunden werden.',
    },
    {
      title: '🚀 Schnelle Ladezeiten & SEO-Basis',
      description:
        'Wir setzen auf sauberen Code, moderne Frameworks und Core-Web-Vitals, Google liebt Geschwindigkeit.',
    },
    {
      title: '🧩 CMS-Integration (WordPress, Webflow, Headless)',
      description:
        'Flexible Content-Pflege dank moderner CMS-Lösungen, wir richten alles für dich ein.',
    },
    {
      title: '🔒 DSGVO & Sicherheit inklusive',
      description:
        'Wir achten auf rechtliche Vorgaben, Cookie-Management und technische Sicherheit (SSL, Firewall, Backup etc.).',
    },
  ];
  
  export default function WebDevFeatures() {
    return (
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-black">
            Unsere Leistungen in der Webentwicklung
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {webFeatures.map((feature, index) => (
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