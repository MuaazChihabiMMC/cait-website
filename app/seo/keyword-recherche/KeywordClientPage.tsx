'use client';

import { Search, Target, TrendingUp, BookText } from 'lucide-react';
import { motion } from 'framer-motion';

const cards = [
  {
    title: 'Was ist Keyword-Recherche?',
    icon: <Search className="w-6 h-6 text-blue-600" />,
    text: `Die Keyword-Recherche ist der Grundpfeiler jeder erfolgreichen SEO-Strategie. Sie hilft dir zu verstehen, welche Begriffe deine Zielgruppe bei Google sucht – und welche Inhalte du dafür bereitstellen solltest.`,
  },
  {
    title: 'Suchintention verstehen',
    icon: <Target className="w-6 h-6 text-blue-600" />,
    text: `Ein gutes Ranking bringt dir nichts, wenn dein Inhalt nicht zur Suchabsicht passt. Wir analysieren, ob ein Nutzer informieren, kaufen oder vergleichen möchte – und stimmen den Content genau darauf ab.`,
  },
  {
    title: 'Wettbewerbsanalyse',
    icon: <TrendingUp className="w-6 h-6 text-blue-600" />,
    text: `Wir untersuchen, wie stark der Wettbewerb auf relevante Keywords ist und finden Chancen, bei denen du dich mit Qualität durchsetzen kannst – selbst gegen große Marken.`,
  },
  {
    title: 'Keyword-Clustering & Content-Mapping',
    icon: <BookText className="w-6 h-6 text-blue-600" />,
    text: `Wir gruppieren verwandte Begriffe und entwickeln daraus strukturierte Seitenarchitekturen, die sowohl Google als auch Nutzer lieben.`,
  },
];

export default function KeywordClientPage() {
  return (
    <main className="px-6 py-12 max-w-6xl mx-auto text-gray-800">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-10 text-center"
      >
        Keyword-Recherche & Suchintention
      </motion.h1>

      <div className="grid gap-8 md:grid-cols-2">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              {card.icon}
              <h2 className="text-lg font-semibold text-gray-900">{card.title}</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">{card.text}</p>
          </motion.div>
        ))}
      </div>
    </main>
  );
}