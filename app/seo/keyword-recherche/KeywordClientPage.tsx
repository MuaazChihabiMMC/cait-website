'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function KeywordClientPage() {
  return (
    <main className="px-6 py-12 max-w-4xl mx-auto text-gray-800">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }} 
        className="text-4xl font-bold mb-6 text-center"
      >
        Keyword-Recherche & Suchintention
      </motion.h1>

      <section className="mb-10 space-y-6 text-lg leading-8">
        <p>
          Die Keyword-Recherche ist die Grundlage jeder erfolgreichen SEO-Strategie. Sie zeigt dir nicht nur,
          welche Begriffe potenzielle Kunden in Suchmaschinen eingeben, sondern gibt auch Aufschluss über ihre
          Absicht – also was sie wirklich wollen. Nur wer seine Zielgruppe und ihre Suchintention versteht, kann
          Inhalte erstellen, die nicht nur gefunden, sondern auch geklickt werden – und am Ende konvertieren.
        </p>

        <h2 className="text-2xl font-semibold mt-8">Warum Keyword-Recherche so wichtig ist</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Du erreichst gezielt Nutzer mit echtem Interesse an deinem Angebot.</li>
          <li>Du verbesserst die Sichtbarkeit deiner Website in den organischen Suchergebnissen.</li>
          <li>Du vermeidest Streuverluste und sparst Werbebudget.</li>
          <li>Du kannst Inhalte exakt auf die Bedürfnisse deiner Zielgruppe zuschneiden.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8">Was bedeutet Suchintention?</h2>
        <p>
          Die Suchintention beschreibt die Absicht hinter einer Suchanfrage. Sucht jemand nach
          „beste Zahnbürste elektrisch“, möchte er vermutlich Produktvergleiche und Empfehlungen
          lesen (informational). Bei „Zahnbürste kaufen“ geht es klar um eine Transaktion.
        </p>

        <h3 className="text-xl font-semibold mt-6">Unterscheidung der Suchintentionen:</h3>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Informationell:</strong> Der Nutzer sucht Informationen („Wie funktioniert SEO?“).</li>
          <li><strong>Navigational:</strong> Der Nutzer sucht eine bestimmte Seite („LinkedIn Login“).</li>
          <li><strong>Transaktional:</strong> Der Nutzer will etwas kaufen oder abschließen („SEO Agentur Berlin“).</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8">Unser Vorgehen bei der Keyword-Recherche</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Definition von Zielen und Zielgruppe</li>
          <li>Analyse des Wettbewerbs und bestehender Inhalte</li>
          <li>Keyword-Tools wie Google Keyword Planner, ahrefs, Ubersuggest & Co.</li>
          <li>Clustering der Keywords nach Relevanz & Intention</li>
          <li>Erstellung einer Content-Strategie auf Basis der Suchbegriffe</li>
        </ol>

        <h2 className="text-2xl font-semibold mt-8">Was du durch professionelle Keyword-Analyse gewinnst</h2>
        <p>
          Mit unserer Hilfe findest du genau die Keywords, die nicht nur Traffic bringen, sondern auch
          Nutzer mit echter Kaufabsicht. Du erreichst deine Kunden exakt in dem Moment, in dem sie
          nach deinem Angebot suchen – und zwar ohne Streuverluste.
        </p>
      </section>

      <div className="mt-12 text-center">
        <p className="text-xl font-medium mb-4">Bereit, deinen SEO-Erfolg mit der richtigen Keyword-Strategie zu starten?</p>
        <a
          href="/kontakt"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition"
        >
          Jetzt unverbindlich beraten lassen
        </a>
      </div>
    </main>
  );
}