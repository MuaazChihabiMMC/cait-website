import Image from 'next/image';
import { notFound } from 'next/navigation';

const seoPosts = {
  'content-marketing': {
    title: 'Content Marketing 2024: So ranken deine Inhalte',
    metaDescription: 'Content-SEO mit Strategie: Keywords, Cluster & semantische Optimierung für Top-Rankings einfach erklärt.',
    content: `
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Warum Content der entscheidende Ranking-Faktor ist</h2>
      <p class="text-gray-700 mb-6">Content Marketing hat sich zum wichtigsten Instrument der Suchmaschinenoptimierung entwickelt. Hochwertige Inhalte, die Nutzerintentionen treffen, generieren nicht nur organischen Traffic, sondern auch wertvolle Backlinks und Social Signals - alles Faktoren, die Google bei der Bewertung Ihrer Domain berücksichtigt.</p>

      <div class="bg-purple-50 border-l-4 border-purple-500 p-4 my-6 rounded-r">
        <strong class="block font-semibold text-purple-800">Statistik:</strong>
        <p class="text-purple-700 mt-1">Websites mit regelmäßig aktualisiertem Blog-Content erhalten 434% mehr indexierte Seiten.</p>
      </div>

      <h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">1. Strategische Keyword-Recherche</h3>
      <p class="text-gray-700 mb-4">Die Basis für erfolgreichen SEO-Content:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2 text-gray-700">
        <li><strong>Buyer Intent Analyse:</strong> Informational, Commercial, Transactional oder Navigational?</li>
        <li><strong>Long-Tail-Keywords:</strong> Weniger Wettbewerb, höhere Conversion-Raten</li>
        <li><strong>Semantische Wortfelder:</strong> Verwandte Begriffe und Synonyme identifizieren</li>
        <li><strong>Konkurrenzanalyse:</strong> Lücken im Content der Top-10-Rankingseiten finden</li>
      </ul>

      <div class="grid md:grid-cols-2 gap-6 my-8">
        <div class="bg-white p-6 rounded-lg shadow border border-gray-200">
          <h4 class="font-bold text-purple-600 mb-3">Top Tools für Content-Strategen</h4>
          <ul class="space-y-2 text-gray-700">
            <li>• Ahrefs Content Explorer</li>
            <li>• SEMrush Topic Research</li>
            <li>• AnswerThePublic</li>
            <li>• Google People Also Ask</li>
          </ul>
        </div>
        <div class="bg-white p-6 rounded-lg shadow border border-gray-200">
          <h4 class="font-bold text-purple-600 mb-3">Content-KPIs für SEO</h4>
          <ul class="space-y-2 text-gray-700">
            <li>• Organische Klickrate (CTR)</li>
            <li>• Durchschnittliche Verweildauer</li>
            <li>• Backlink-Akquise-Rate</li>
            <li>• Keyword-Rankings</li>
          </ul>
        </div>
      </div>

      <h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">2. Content-Cluster Modell</h3>
      <p class="text-gray-700 mb-4">So strukturieren Sie Themen für maximale SEO-Wirkung:</p>
      
      <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-6 rounded-r">
        <strong class="block font-semibold text-blue-800">Beispiel Cluster:</strong>
        <p class="text-blue-700 mt-1">Pillar Page: "Content Marketing" → Subtopics: "Blog-Strategien", "SEO-Texte", "Video-Marketing", "E-A-T-Prinzip"</p>
      </div>

      <ul class="list-disc pl-6 mb-6 space-y-2 text-gray-700">
        <li><strong>Pillar Content:</strong> Umfassender Leitfaden zum Kernthema (2.000-5.000 Wörter)</li>
        <li><strong>Cluster Content:</strong> Detaillierte Artikel zu Subthemen (800-1.500 Wörter)</li>
        <li><strong>Content-Hub:</strong> Logische Verlinkungsstruktur zwischen allen Artikeln</li>
        <li><strong>Content-Refresh:</strong> Regelmäßige Aktualisierungen (alle 6-12 Monate)</li>
      </ul>

      <h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">3. Semantische Optimierung</h3>
      <p class="text-gray-700 mb-4">Google versteht Kontext - so optimieren Sie dafür:</p>

      <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6 rounded-r">
        <strong class="block font-semibold text-yellow-800">Best Practice:</strong>
        <p class="text-yellow-700 mt-1">Verwenden Sie natürlich eingebaute semantische Wortfelder und themenrelevante Entities für besseres Context Understanding.</p>
      </div>

      <ul class="list-disc pl-6 mb-6 space-y-2 text-gray-700">
        <li>LSI-Keywords (Latent Semantic Indexing) integrieren</li>
        <li>Natürliche Sprachmuster statt Keyword-Stuffing</li>
        <li>Entities und Themenrelevanz durch Schema.org Markup</li>
        <li>TF-IDF Analyse für inhaltliche Vollständigkeit</li>
      </ul>

      <h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">4. Content-Formate mit SEO-Power</h3>
      <p class="text-gray-700 mb-4">Diversifizieren Sie für maximale Reichweite:</p>
      
      <div class="grid md:grid-cols-3 gap-4 my-6">
        <div class="bg-white p-4 rounded-lg shadow border border-gray-200 text-center">
          <div class="text-purple-500 mb-2 text-2xl">📝</div>
          <h4 class="font-bold text-purple-600 mb-2">Längere Guides</h4>
          <p class="text-gray-700 text-sm">Ranken 3x besser als kurze Posts</p>
        </div>
        <div class="bg-white p-4 rounded-lg shadow border border-gray-200 text-center">
          <div class="text-purple-500 mb-2 text-2xl">📊</div>
          <h4 class="font-bold text-purple-600 mb-2">Datenstudien</h4>
          <p class="text-gray-700 text-sm">Hohe Backlink-Wahrscheinlichkeit</p>
        </div>
        <div class="bg-white p-4 rounded-lg shadow border border-gray-200 text-center">
          <div class="text-purple-500 mb-2 text-2xl">🎥</div>
          <h4 class="font-bold text-purple-600 mb-2">Video-Tutorials</h4>
          <p class="text-gray-700 text-sm">53% höhere Engagement-Rate</p>
        </div>
      </div>

      <h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">5. E-A-T Prinzip umsetzen</h3>
      <p class="text-gray-700 mb-4">Expertise, Authoritativeness, Trustworthiness:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2 text-gray-700">
        <li><strong>Autoren-Boxen:</strong> Mit Qualifikationen und Erfahrung</li>
        <li><strong>Quellenangaben:</strong> Studien und Experten-Zitate</li>
        <li><strong>Transparenz:</strong> Über den Autor/Unternehmen</li>
        <li><strong>Aktualität:</strong> Regelmäßige Content-Updates</li>
      </ul>
    `,
    author: {
      name: 'Muaaz Chihabi',
      role: 'Content Marketing Experte',
      image: '/author-muaaz.webp',
      bio: 'Muaaz Chihabi ist zertifizierter Content Marketing Spezialist mit Fokus auf SEO-optimierte Inhaltsstrategien. Als Inhaber von CAIT Social Media entwickelt er datengetriebene Content-Konzepte, die sowohl Suchmaschinen als auch Nutzer überzeugen. Seine Expertise umfasst technische SEO, Conversion-Optimierung und ganzheitliches Digital Marketing.'
    },
    date: '15. Juni 2024',
    readTime: '12 min',
    tags: ['Content Marketing', 'SEO', 'Keyword-Recherche', 'E-A-T']
  },
};

export default function ContentMarketingPage() {
  const post = seoPosts['content-marketing'];
  if (!post) return notFound();

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 to-purple-700 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-4">
            Content Strategie
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center justify-center space-x-4 text-purple-100">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime} Lesezeit</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg -mt-10 mb-16 relative z-10 p-8">
        {/* Featured Image */}
        <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-12">
          <Image
            src="/seo-content.svg"
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
            <span key={tag} className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">
              #{tag}
            </span>
          ))}
        </div>

           {/* Author Bio - Responsive Design */}
       <div className="mt-16 p-6 md:p-8 bg-gray-50 rounded-xl">
         <div className="flex flex-col md:flex-row items-center gap-6">
           {/* Autor Bild - Jetzt richtig proportioniert */}
           <div className="w-24 h-24 md:w-60 md:h-32 relative rounded-full overflow-hidden border-4 border-white shadow-lg">
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
              <h3 className="text-xl font-bold text-gray-900">{post.author.name}</h3>
              <p className="text-purple-600 font-medium mb-2 md:mb-3">{post.author.role}</p>
              <p className="text-gray-700 text-sm md:text-base">{post.author.bio}</p>
              <div className="flex justify-center md:justify-start space-x-4 mt-4">
                <a href="#" className="text-purple-500 hover:text-purple-700 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-purple-500 hover:text-purple-700 transition-colors">
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
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Weitere Content-Marketing Artikel</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Hier würden verwandte Artikel eingefügt werden */}
        </div>
      </section>
    </div>
  );
}

export async function generateMetadata() {
  const post = seoPosts['content-marketing'];
  return {
    title: `${post.title} | CAITSocialMedia`,
    description: post.metaDescription,
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      images: [
        {
          url: '/content-marketing-hero.webp',
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
      images: ['/content-marketing-hero.webp'],
    },
  };
}