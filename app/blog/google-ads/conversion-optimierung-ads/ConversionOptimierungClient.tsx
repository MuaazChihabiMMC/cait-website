// app/google-ads/conversion-optimierung/ConversionOptimierungClient.tsx
'use client';

import Image from 'next/image';
import { notFound } from 'next/navigation';

const googleAdsPosts = {
  'conversion-optimierung-ads': {
    title: 'Conversion-Optimierung in Google Ads',
    metaDescription: 'Erfahren Sie, wie Sie mit Landingpages, A/B-Tests und Anzeigenerweiterungen mehr aus Ihrem Budget holen.',
    content: `
      <h2 class="text-2xl font-semibold text-gray-900 mt-8 mb-4">Warum Conversion-Optimierung entscheidend ist</h2>
      <p class="text-gray-700 mb-6">Die besten Google Ads bringen nichts, wenn Ihre Landingpage Besucher nicht in Kunden verwandelt. Conversion-Optimierung ist der Schlüssel, um Ihr Werbebudget effizient einzusetzen.</p>

      <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-6 rounded-r">
        <p class="font-medium text-blue-800">Statistik:</p>
        <p class="text-blue-700">Eine Verbesserung der Conversion Rate von 2% auf 4% halbiert effektiv Ihre Kosten pro Conversion.</p>
      </div>

      <h3 class="text-xl font-semibold text-gray-900 mt-8 mb-4">1. Landingpage-Optimierung für höhere Conversions</h3>
      <p class="text-gray-700 mb-4">Ihre Landingpage ist das wichtigste Element für Conversion-Optimierung:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2 text-gray-700">
        <li>Relevanz: Muss perfekt zur Anzeige und Suchintention passen</li>
        <li>Ladegeschwindigkeit: Jede Sekunde Ladezeit kostet Conversions</li>
        <li>Klarer Call-to-Action: Sichtbar, ansprechend und wiederholt</li>
        <li>Vertrauenssignale: Bewertungen, Zertifikate, Trustbadges</li>
        <li>Mobile Optimierung: Über 60% der Klicks kommen von Mobilgeräten</li>
      </ul>

      <div class="grid md:grid-cols-2 gap-6 my-8">
        <div class="bg-white p-6 rounded-lg shadow border border-gray-200">
          <h4 class="font-semibold text-blue-600 mb-3">Must-haves für Conversion-Landingpages</h4>
          <ul class="space-y-2 text-gray-700">
            <li>Überschrift die zum Suchbegriff passt</li>
            <li>Benefit-orientierter Haupttext</li>
            <li>Hochwertige Bilder/Video</li>
            <li>Kontaktformular mit minimalen Feldern</li>
            <li>Social Proof (Testimonials, Logos)</li>
          </ul>
        </div>
        <div class="bg-white p-6 rounded-lg shadow border border-gray-200">
          <h4 class="font-semibold text-blue-600 mb-3">Conversion-Killer vermeiden</h4>
          <ul class="space-y-2 text-gray-700">
            <li>Ablenkende Navigation</li>
            <li>Zu viele Optionen/Abzweigungen</li>
            <li>Unklare Preise/Kosten</li>
            <li>Lange, komplizierte Formulare</li>
            <li>Fehlende Mobile-Optimierung</li>
          </ul>
        </div>
      </div>

      <h3 class="text-xl font-semibold text-gray-900 mt-8 mb-4">2. A/B-Testing für systematische Verbesserungen</h3>
      <p class="text-gray-700 mb-4">Testen Sie systematisch verschiedene Elemente:</p>
      
      <div class="bg-orange-50 border-l-4 border-orange-500 p-4 my-6 rounded-r">
        <p class="font-medium text-orange-800">Tipp:</p>
        <p class="text-orange-700">Testen Sie immer nur ein Element gleichzeitig, um klare Ergebnisse zu erhalten.</p>
      </div>

      <div class="overflow-x-auto">
        <table class="min-w-full bg-white rounded-lg overflow-hidden mb-6">
          <thead class="bg-gray-100">
            <tr>
              <th class="py-3 px-4 text-left font-medium text-gray-700">Element</th>
              <th class="py-3 px-4 text-left font-medium text-gray-700">Was testen?</th>
              <th class="py-3 px-4 text-left font-medium text-gray-700">Potenzielle Wirkung</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr>
              <td class="py-3 px-4 text-gray-700">Überschrift</td>
              <td class="py-3 px-4 text-gray-700">Formulierungen, Länge, Keywords</td>
              <td class="py-3 px-4 text-gray-700">+20-50% mehr Conversions</td>
            </tr>
            <!-- Additional table rows remain unchanged -->
          </tbody>
        </table>
      </div>
      <!-- Rest of the content follows the same pattern -->
    `,
    author: {
      name: 'Muaaz Chihabi',
      role: 'Google Ads Spezialist',
      image: '/author-muaaz.webp',
      bio: 'Muaaz Chihabi betreut seit über 7 Jahren erfolgreiche Google Ads Kampagnen für Unternehmen verschiedener Größen.'
    },
    date: '15. September 2024',
    readTime: '9 min',
    tags: ['Conversions', 'Landingpages', 'Google Ads', 'Optimierung']
  },
};

export default function ConversionOptimierungClient() {
  const post = googleAdsPosts['conversion-optimierung-ads'];
  if (!post) return notFound();

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-4">
            SEA Optimierung
          </span>
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">{post.title}</h1>
          <div className="flex items-center justify-center space-x-4 text-blue-100">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime} Lesezeit</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg -mt-10 mb-16 relative z-10 p-8">
        {/* Featured Image and content rendering remains the same */}
      </article>
    </div>
  );
}