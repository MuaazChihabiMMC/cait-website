// components/MainServicesOverview.tsx

const services = [
    {
      title: '🔍 SEO-Optimierung',
      desc: 'Mehr Sichtbarkeit bei Google durch technische, inhaltliche und strategische Maßnahmen. Lokal & international.',
      link: '/seo',
    },
    {
      title: '💻 Webentwicklung & Design',
      desc: 'Maßgeschneiderte Websites mit Fokus auf Ladezeit, Design, Usability und SEO-Fundament.',
      link: '/webentwicklung',
    },
    {
      title: '📢 Google Ads',
      desc: 'Performance-orientierte Kampagnen auf Google, von der Recherche bis zur laufenden Optimierung.',
      link: '/google-ads-agentur-berlin',
    },
    {
      title: '📱 Social Media Marketing',
      desc: 'Content, Strategie und Community-Management für Instagram, TikTok, LinkedIn und mehr.',
      link: '/social-media',
    },
  ];
  
  export default function MainServicesOverview() {
    return (
      <section className="bg-blue-50 py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-blue-900">
            Unsere Leistungen im Überblick
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {services.map((service, index) => (
              <a
                key={index}
                href={service.link}
                className="block bg-white border border-blue-900 rounded-xl p-6 shadow hover:shadow-md hover:-translate-y-1 transition"
              >
                <h3 className="text-xl font-semibold mb-2 text-blue-900">{service.title}</h3>
                <p className="text-black text-sm leading-relaxed">{service.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    );
  }