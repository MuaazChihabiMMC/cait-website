import Image from 'next/image';
import { notFound } from 'next/navigation';

const seoPosts = {
  'linkbuilding-strategien': {
    title: 'Backlink-Strategien die wirklich funktionieren',
    metaDescription: 'Natürliches Linkbuilding ohne Risiko - bewährte Methoden für hochwertige Backlinks die Ihre Rankings verbessern',
    alternates: {
      canonical: 'https://www.caitsocialmedia.com/blog/seo/linkbuilding-strategien',
    },
    content: `
     <h2 class="text-2xl font-bold text-white mt-8 mb-4">Warum hochwertige Backlinks entscheidend sind</h2>
<p class="text-ink-soft mb-6">Backlinks bleiben einer der wichtigsten Ranking-Faktoren bei Google. Doch nicht alle Links sind gleich wertvoll. Wir zeigen Ihnen strategische Ansätze, die nachhaltig und ohne Risiko hochwertige Backlinks generieren - ganz ohne Black-Hat-SEO oder Spam-Taktiken.</p>

<div class="bg-night-700/50 border-l-4 border-gold-300/40 p-4 my-6 rounded-r">
  <p class="font-semibold text-gold-200 mb-1">Statistik:</p>
  <p class="text-ink-soft">Websites mit hochwertigen Backlinks ranken 3x häufiger in den Top-3 Suchergebnissen.</p>
</div>

<h3 class="text-xl font-bold text-white mt-8 mb-4">1. Content-Marketing als Linkmagnet</h3>
<p class="text-ink-soft mb-4">Die beste Linkbuilding-Strategie beginnt mit herausragendem Content:</p>
<ul class="list-disc pl-6 mb-6 space-y-2 text-ink-soft">
  <li><span class="font-medium text-white">Ultimative Guides:</span> Umfassende Ressourcen (>3.000 Wörter) werden 3x häufiger verlinkt</li>
  <li><span class="font-medium text-white">Originalstudien:</span> Eigene Daten und Forschungsergebnisse</li>
  <li><span class="font-medium text-white">Visuelle Inhalte:</span> Infografiken erhalten 2x mehr Backlinks</li>
  <li><span class="font-medium text-white">Interaktive Tools:</span> Kostenlose Rechner oder Check-Listen</li>
</ul>

<div class="grid md:grid-cols-2 gap-6 my-8">
  <div class="bg-night-700/30 p-6 rounded-lg border border-night-600/50">
    <h4 class="font-bold text-gold-300 mb-3">Top Content-Typen für Links</h4>
    <ul class="space-y-2 text-ink-soft">
      <li>• "Skyscraper"-Content</li>
      <li>• Experten-Roundups</li>
      <li>• Case Studies</li>
      <li>• Aktuelle Forschung</li>
    </ul>
  </div>
  <div class="bg-night-700/30 p-6 rounded-lg border border-night-600/50">
    <h4 class="font-bold text-gold-300 mb-3">Link-KPI-Monitoring</h4>
    <ul class="space-y-2 text-ink-soft">
      <li>• Domain Authority (DA)</li>
      <li>• Spam Score</li>
      <li>• Traffic des Linkgebers</li>
      <li>• Anchor-Text-Diversität</li>
    </ul>
  </div>
</div>

<h3 class="text-xl font-bold text-white mt-8 mb-4">2. Gastbeiträge mit Mehrwert</h3>
<p class="text-ink-soft mb-4">Qualitativ hochwertige Gastartikel auf relevanten Seiten:</p>

<div class="bg-night-600/50 border-l-4 border-gold-300/40 p-4 my-6 rounded-r">
  <p class="font-semibold text-gold-200 mb-1">Best Practice:</p>
  <p class="text-ink-soft">Bieten Sie echten Mehrwert statt generischer Artikel. 80% Ihrer Gastbeiträge sollten auf den Leser der Zielseite zugeschnitten sein, nur 20% Eigenwerbung.</p>
</div>

<ul class="list-disc pl-6 mb-6 space-y-2 text-ink-soft">
  <li><span class="font-medium text-white">Relevante Blogs finden:</span> Mit Tools wie Ahrefs oder BuzzSumo</li>
  <li><span class="font-medium text-white">Persönliche Ansprache:</span> Keine Standard-Pitches</li>
  <li><span class="font-medium text-white">Reciprocal Links:</span> In Maßen und natürlich</li>
  <li><span class="font-medium text-white">Autor-Box:</span> Mit Link zu Ihrer Seite</li>
</ul>

<h3 class="text-xl font-bold text-white mt-8 mb-4">3. Broken Link Building</h3>
<p class="text-ink-soft mb-4">Finden und reparieren Sie tote Links in Ihrer Nische:</p>

<div class="bg-night-700/50 border-l-4 border-gold-300/40 p-4 my-6 rounded-r">
  <p class="font-semibold text-gold-200 mb-1">Profi-Tipp:</p>
  <p class="text-ink-soft">Nutzen Sie den Chrome Extension "Check My Links" um schnell defekte Links auf relevanten Seiten zu finden.</p>
</div>

<ol class="list-decimal pl-6 mb-6 space-y-2 text-ink-soft">
  <li>Finden Sie relevante Ressourcen-Seiten in Ihrer Branche</li>
  <li>Identifizieren Sie tote Links mit Tools</li>
  <li>Erstellen Sie besseren/beständigeren Content</li>
  <li>Kontaktieren Sie den Webmaster mit einer freundlichen Nachricht</li>
</ol>

<h3 class="text-xl font-bold text-white mt-8 mb-4">4. HARO - Help a Reporter Out</h3>
<p class="text-ink-soft mb-4">Werden Sie als Experte zitiert:</p>

<div class="grid md:grid-cols-3 gap-4 my-6">
  <div class="bg-night-700/30 p-4 rounded-lg border border-night-600/50 text-center">
    <div class="text-gold-300 mb-2 text-2xl">📰</div>
    <h4 class="font-bold text-gold-300 mb-2">Medienanfragen</h4>
    <p class="text-ink-soft text-sm">Täglich neue Anfragen</p>
  </div>
  <div class="bg-night-700/30 p-4 rounded-lg border border-night-600/50 text-center">
    <div class="text-gold-300 mb-2 text-2xl">🔍</div>
    <h4 class="font-bold text-gold-300 mb-2">Expertenstatus</h4>
    <p class="text-ink-soft text-sm">Steigert Ihre Autorität</p>
  </div>
  <div class="bg-night-700/30 p-4 rounded-lg border border-night-600/50 text-center">
    <div class="text-gold-300 mb-2 text-2xl">🔗</div>
    <h4 class="font-bold text-gold-300 mb-2">Wertvolle Links</h4>
    <p class="text-ink-soft text-sm">Von vertrauenswürdigen Domains</p>
  </div>
</div>

<h3 class="text-xl font-bold text-white mt-8 mb-4">5. Lokales Linkbuilding</h3>
<p class="text-ink-soft mb-4">Für Unternehmen mit regionalem Fokus:</p>
<ul class="list-disc pl-6 mb-6 space-y-2 text-ink-soft">
  <li><span class="font-medium text-white">Lokale Verzeichnisse:</span> Einträge in regionalen Branchenbüchern</li>
  <li><span class="font-medium text-white">Sponsoring:</span> Unterstützung lokaler Veranstaltungen</li>
  <li><span class="font-medium text-white">Pressearbeit:</span> Meldungen an Lokalzeitungen</li>
  <li><span class="font-medium text-white">Google My Business:</span> Optimiertes Profil mit Backlink</li>
</ul>
    `,
    author: {
      name: 'Muaaz Chihabi',
      role: 'SEO & Linkbuilding Spezialist',
      image: '/author-muaaz.webp',
      bio: 'Muaaz Chihabi hat über 5 Jahre Erfahrung im Aufbau hochwertiger Backlink-Profile für Unternehmen verschiedener Branchen. Als Inhaber von CAIT Social Media entwickelt er maßgeschneiderte Linkbuilding-Strategien, die langfristige Ranking-Verbesserungen bewirken - ganz ohne Risiko durch unseriöse Praktiken.'
    },
    date: '22. Juni 2024',
    readTime: '14 min',
    tags: ['Linkbuilding', 'Backlinks', 'SEO', 'Content Marketing']
  },
};

export default function LinkbuildingPage() {
  const post = seoPosts['linkbuilding-strategien'];
  if (!post) return notFound();

  return (
    <div className="bg-[#0c1527]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-night-700 to-night text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm">
            SEO Strategien
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center justify-center space-x-4 text-ink-soft">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime} Lesezeit</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto bg-night-700/30 shadow-lg rounded-lg -mt-10 mb-16 relative z-10 p-8 border border-night-600/50">
        {/* Featured Image */}
        <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-12 border border-night-600/50">
          <Image
            src="/link-building.svg"
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Article Content */}
        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-12">
          {post.tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-night-600/50 text-gold-200 text-sm rounded-full backdrop-blur-sm">
              #{tag}
            </span>
          ))}
        </div>

        {/* Author Bio */}
        <div className="mt-16 p-6 md:p-8 bg-night-700/30 rounded-xl border border-night-600/50">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-24 h-24 md:w-60 md:h-32 relative rounded-full overflow-hidden border-4 border-night-600/50 shadow-lg">
              <Image
                src={post.author.image}
                alt={`Portrait von ${post.author.name}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 96px, 128px"
                priority
              />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-white">{post.author.name}</h3>
              <p className="text-gold-300 font-medium mb-2 md:mb-3">{post.author.role}</p>
              <p className="text-ink-soft text-sm md:text-base">{post.author.bio}</p>
              <div className="flex justify-center md:justify-start space-x-4 mt-4">
                <a href="https://www.linkedin.com/in/muaaz-chihabi/" className="text-gold-300 hover:text-gold-200 transition-colors" aria-label="LinkedIn Profil">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="max-w-4xl mx-auto px-6 mb-20">
        <h2 className="text-2xl font-bold text-white mb-8">Weitere SEO-Artikel</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Hier würden verwandte Artikel eingefügt werden */}
        </div>
      </section>
    </div>
  );
}

export async function generateMetadata() {
  const post = seoPosts['linkbuilding-strategien'];
  return {
    title: { absolute: `${post.title} | CAITSocialMedia` },
    description: post.metaDescription,
    alternates: post.alternates,
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url: post.alternates.canonical,
      images: [
        {
          url: '/link-building.svg',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.metaDescription,
      images: ['/link-building.svg'],
    },
  };
}