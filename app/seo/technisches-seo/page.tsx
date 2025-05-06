'use client';

import React from 'react';
import { FaTools, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'CAIT SEO Agentur | SEO Agentur Berlin ',
  description: 'Deine SEO Agentur für technisches SEO .',
 
}
export default function TechnischesSEOPage() {
  return (
    <main className="px-4 py-12 md:px-6 max-w-4xl mx-auto bg-white text-blue-900">
      <section className="bg-blue-50 rounded-3xl p-8 md:p-12 shadow-lg">
        <div className="flex items-center mb-6">
          <div className="bg-blue-100 p-3 rounded-full mr-4">
            <FaTools className="text-blue-600 text-2xl" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">🔧 Technisches SEO</h1>
        </div>

        <p className="text-lg text-blue-800 mb-6">
          Core Web Vitals, Mobile Optimierung, Fehleranalyse, Indexierung und Crawling: Wir sorgen für einen
          einwandfreien technischen Unterbau, damit deine Website nicht nur gut aussieht, sondern auch technisch
          von Google geliebt wird.
        </p>

        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-bold mb-2">✅ Core Web Vitals</h2>
            <p className="text-blue-800">
              Ladegeschwindigkeit, Interaktivität und visuelle Stabilität – wir optimieren gezielt die Google-Metriken,
              die für dein Ranking entscheidend sind.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-2">📱 Mobile First</h2>
            <p className="text-blue-800">
              Über 60% der Nutzer kommen über Mobilgeräte. Unsere Optimierung stellt sicher, dass deine Website
              auf jedem Screen performt.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-2">🛠️ Fehleranalyse & Struktur</h2>
            <p className="text-blue-800">
              Wir identifizieren 404-Fehler, Weiterleitungsschleifen, doppelte Inhalte und andere technische Probleme,
              die dein Ranking gefährden.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-2">🔍 Indexierung & Crawling</h2>
            <p className="text-blue-800">
              Wir helfen Google, deine Inhalte effizient zu crawlen und richtig zu indexieren – durch robots.txt,
              Sitemaps, Canonicals und mehr.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition"
          >
            Jetzt technische Analyse starten <FaArrowRight />
          </Link>
        </div>
      </section>
    </main>
  );
}
