import Image from 'next/image';
import { notFound } from 'next/navigation';

const seoPosts = {
  'content-marketing': {
    title: 'Content Marketing: So ranken Inhalte',
    metaTitle: 'Content Marketing Guide: So ranken Ihre Inhalte | CAIT',
    metaDescription: 'Content-SEO mit Strategie: für Top Rankings einfach erklärt.',
    alternates: {
      canonical: 'https://www.caitsocialmedia.com/blog/seo/content-marketing',
    },
    content: `
     <h2 class="text-2xl font-bold text-white mt-8 mb-4">Warum Content der entscheidende Ranking-Faktor ist</h2>
<p class="text-ink-soft mb-6">Content Marketing hat sich zum wichtigsten Instrument der Suchmaschinenoptimierung entwickelt. Hochwertige Inhalte, die Nutzerintentionen treffen, generieren nicht nur organischen Traffic, sondern auch wertvolle Backlinks und Social Signals - alles Faktoren, die Google bei der Bewertung Ihrer Domain berücksichtigt.</p>

<div class="bg-night-700/50 border-l-4 border-gold-300/40 p-4 my-6 rounded-r">
  <p class="font-semibold text-gold-200 mb-1">Statistik:</p>
  <p class="text-ink-soft">Websites mit regelmäßig aktualisiertem Blog-Content erhalten 434% mehr indexierte Seiten.</p>
</div>

<h3 class="text-xl font-bold text-white mt-8 mb-4">1. Strategische Keyword-Recherche</h3>
<p class="text-ink-soft mb-4">Die Basis für erfolgreichen SEO-Content:</p>
<ul class="list-disc pl-6 mb-6 space-y-2 text-ink-soft">
  <li><span class="font-medium text-white">Buyer Intent Analyse:</span> Informational, Commercial, Transactional oder Navigational?</li>
  <li><span class="font-medium text-white">Long-Tail-Keywords:</span> Weniger Wettbewerb, höhere Conversion-Raten</li>
  <li><span class="font-medium text-white">Semantische Wortfelder:</span> Verwandte Begriffe und Synonyme identifizieren</li>
  <li><span class="font-medium text-white">Konkurrenzanalyse:</span> Lücken im Content der Top-10-Rankingseiten finden</li>
</ul>

<div class="grid md:grid-cols-2 gap-6 my-8">
  <div class="bg-night-700/30 p-6 rounded-lg border border-night-600/50">
    <h4 class="font-bold text-gold-300 mb-3">Top Tools für Content-Strategen</h4>
    <ul class="space-y-2 text-ink-soft">
      <li>• Ahrefs Content Explorer</li>
      <li>• SEMrush Topic Research</li>
      <li>• AnswerThePublic</li>
      <li>• Google People Also Ask</li>
    </ul>
  </div>
  <div class="bg-night-700/30 p-6 rounded-lg border border-night-600/50">
    <h4 class="font-bold text-gold-300 mb-3">Content-KPIs für SEO</h4>
    <ul class="space-y-2 text-ink-soft">
      <li>• Organische Klickrate (CTR)</li>
      <li>• Durchschnittliche Verweildauer</li>
      <li>• Backlink-Akquise-Rate</li>
      <li>• Keyword-Rankings</li>
    </ul>
  </div>
</div>

<h3 class="text-xl font-bold text-white mt-8 mb-4">2. Content-Cluster Modell</h3>
<p class="text-ink-soft mb-4">So strukturieren Sie Themen für maximale SEO-Wirkung:</p>

<div class="bg-night-600/50 border-l-4 border-gold-300/40 p-4 my-6 rounded-r">
  <p class="font-semibold text-gold-200 mb-1">Beispiel Cluster:</p>
  <p class="text-ink-soft">Pillar Page: "Content Marketing" → Subtopics: "Blog-Strategien", "SEO-Texte", "Video-Marketing", "E-A-T-Prinzip"</p>
</div>

<ul class="list-disc pl-6 mb-6 space-y-2 text-ink-soft">
  <li><span class="font-medium text-white">Pillar Content:</span> Umfassender Leitfaden zum Kernthema (2.000-5.000 Wörter)</li>
  <li><span class="font-medium text-white">Cluster Content:</span> Detaillierte Artikel zu Subthemen (800-1.500 Wörter)</li>
  <li><span class="font-medium text-white">Content-Hub:</span> Logische Verlinkungsstruktur zwischen allen Artikeln</li>
  <li><span class="font-medium text-white">Content-Refresh:</span> Regelmäßige Aktualisierungen (alle 6-12 Monate)</li>
</ul>

<h3 class="text-xl font-bold text-white mt-8 mb-4">3. Semantische Optimierung</h3>
<p class="text-ink-soft mb-4">Google versteht Kontext - so optimieren Sie dafür:</p>

<div class="bg-night-700/50 border-l-4 border-gold-300/40 p-4 my-6 rounded-r">
  <p class="font-semibold text-gold-200 mb-1">Best Practice:</p>
  <p class="text-ink-soft">Verwenden Sie natürlich eingebaute semantische Wortfelder und themenrelevante Entities für besseres Context Understanding.</p>
</div>

<ul class="list-disc pl-6 mb-6 space-y-2 text-ink-soft">
  <li>LSI-Keywords (Latent Semantic Indexing) integrieren</li>
  <li>Natürliche Sprachmuster statt Keyword-Stuffing</li>
  <li>Entities und Themenrelevanz durch Schema.org Markup</li>
  <li>TF-IDF Analyse für inhaltliche Vollständigkeit</li>
</ul>

<h3 class="text-xl font-bold text-white mt-8 mb-4">4. Content-Formate mit SEO-Power</h3>
<p class="text-ink-soft mb-4">Diversifizieren Sie für maximale Reichweite:</p>

<div class="grid md:grid-cols-3 gap-4 my-6">
  <div class="bg-night-700/30 p-4 rounded-lg border border-night-600/50 text-center">
    <div class="text-gold-300 mb-2 text-2xl">📝</div>
    <h4 class="font-bold text-gold-300 mb-2">Längere Guides</h4>
    <p class="text-ink-soft text-sm">Ranken 3x besser als kurze Posts</p>
  </div>
  <div class="bg-night-700/30 p-4 rounded-lg border border-night-600/50 text-center">
    <div class="text-gold-300 mb-2 text-2xl">📊</div>
    <h4 class="font-bold text-gold-300 mb-2">Datenstudien</h4>
    <p class="text-ink-soft text-sm">Hohe Backlink-Wahrscheinlichkeit</p>
  </div>
  <div class="bg-night-700/30 p-4 rounded-lg border border-night-600/50 text-center">
    <div class="text-gold-300 mb-2 text-2xl">🎥</div>
    <h4 class="font-bold text-gold-300 mb-2">Video-Tutorials</h4>
    <p class="text-ink-soft text-sm">53% höhere Engagement-Rate</p>
  </div>
</div>

<h3 class="text-xl font-bold text-white mt-8 mb-4">5. E-A-T Prinzip umsetzen</h3>
<p class="text-ink-soft mb-4">Expertise, Authoritativeness, Trustworthiness:</p>
<ul class="list-disc pl-6 mb-6 space-y-2 text-ink-soft">
  <li><span class="font-medium text-white">Autoren-Boxen:</span> Mit Qualifikationen und Erfahrung</li>
  <li><span class="font-medium text-white">Quellenangaben:</span> Studien und Experten-Zitate</li>
  <li><span class="font-medium text-white">Transparenz:</span> Über den Autor/Unternehmen</li>
  <li><span class="font-medium text-white">Aktualität:</span> Regelmäßige Content-Updates</li>
</ul>

<h3 class="text-xl font-bold text-white mt-8 mb-4">6. Der Content-Audit</h3>
<p class="text-ink-soft mb-4">Bevor neuer Content erstellt wird, lohnt sich oft ein Blick auf das Bestehende:</p>
<ul class="list-disc pl-6 mb-6 space-y-2 text-ink-soft">
  <li>Welche Seiten haben Traffic, aber keine Conversions?</li>
  <li>Wo ist der Content "thin" (zu kurz/oberflächlich)?</li>
  <li>Gibt es Keyword-Kannibalisierung (mehrere Seiten ranken zum gleichen Begriff)?</li>
</ul>
<p class="text-ink-soft">
  Durch gezieltes <strong>Content Recycling</strong> können bestehende URLs oft mit wenig Aufwand signifikant verbessert werden. Aktualisierungen signalisieren Google "Frische" (Freshness Update).
</p>

<h3 class="text-xl font-bold text-white mt-8 mb-4">7. Erfolgsmessung (ROI)</h3>
<p class="text-ink-soft mb-4">Content Marketing ist eine Investition. So messen Sie den Ertrag:</p>
<div class="grid md:grid-cols-2 gap-6 my-6">
    <div class="bg-night-700/30 p-4 rounded-lg">
        <h4 class="font-bold text-gold-300">Soft KPIs</h4>
        <p class="text-sm text-ink-soft">Markenbekanntheit, Traffic, Social Shares, Verweildauer.</p>
    </div>
    <div class="bg-night-700/30 p-4 rounded-lg">
        <h4 class="font-bold text-gold-300">Hard KPIs</h4>
        <p class="text-sm text-ink-soft">Leads, Verkäufe, Cost-per-Acquisition (CPA), Customer Lifetime Value (CLV).</p>
    </div>
</div>
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
    <div className="bg-[#0c1527]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-night-700 to-night text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm">
            Content Strategie
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
        <h2 className="text-2xl font-bold text-white mb-8">Weitere Content-Marketing Artikel</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <a href="/seo-agentur-berlin" className="block p-6 bg-night-700/30 rounded-lg hover:bg-night-700/50 transition border border-night-600/50 hover:border-gold-300/40 group">
            <h3 className="font-bold text-white mb-2 group-hover:text-gold-300">SEO Agentur Berlin</h3>
            <p className="text-ink-soft text-sm">Professionelle Suchmaschinenoptimierung für Ihr Business.</p>
          </a>
          <a href="/blog/seo" className="block p-6 bg-night-700/30 rounded-lg hover:bg-night-700/50 transition border border-night-600/50 hover:border-gold-300/40 group">
            <h3 className="font-bold text-white mb-2 group-hover:text-gold-300">SEO Blog</h3>
            <p className="text-ink-soft text-sm">Weitere Guides zu OnPage, OffPage und Technical SEO.</p>
          </a>
        </div>
      </section>
    </div>
  );
}

export async function generateMetadata() {
  const post = seoPosts['content-marketing'];
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: post.alternates,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: post.alternates.canonical,
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
      title: post.metaTitle,
      description: post.metaDescription,
      images: ['/content-marketing-hero.webp'],
    },
  };
}