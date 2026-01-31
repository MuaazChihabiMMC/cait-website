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
    <section className="bg-primary py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Unsere Leistungen in der Webentwicklung
          </h2>
          <p className="text-lg text-[#fcd066] max-w-3xl mx-auto">
            Moderne Webentwicklung mit Fokus auf Performance, Usability und Conversion
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {webFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-primary-light border border-gold-300/20 p-6 rounded-xl text-left shadow-lg hover:shadow-gold-300/10 hover:border-gold-300/40 hover:translate-y-[-4px] transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-3 text-white">
                {feature.title.split(' ')[0]} <span className="text-gold-300">{feature.title.split(' ').slice(1).join(' ')}</span>
              </h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
