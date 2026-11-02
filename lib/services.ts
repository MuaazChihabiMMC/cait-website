import type { FaqEntry } from '@/components/site/Faq';

export type Service = {
  href: string;
  label: string;
  short: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  phase: 'Gefunden werden' | 'Überzeugen' | 'Entlasten';
  schemaType: string;
  audiences: { title: string; text: string }[];
  problems: { problem: string; answer: string }[];
  deliverables: { title: string; items: string[] }[];
  process: { title: string; text: string }[];
  costFactors: { title: string; text: string }[];
  faqs: FaqEntry[];
  deepDive?: { title: string; links: { href: string; label: string }[] };
  related: string[];
  ctaTitle: string;
};

export const SERVICES: Service[] = [
  /* ------------------------------------------------------------ SEO */
  {
    href: '/seo-agentur-berlin',
    label: 'Suchmaschinenoptimierung',
    short: 'Technische SEO, Onpage-Optimierung, Inhalte und lokale Sichtbarkeit – damit Interessenten Sie finden, wenn sie suchen.',
    metaTitle: 'SEO-Agentur Berlin: Suchmaschinenoptimierung mit Plan',
    metaDescription:
      'Suchmaschinenoptimierung von CAIT aus Berlin: technische SEO, Onpage-Optimierung, Content und lokale Sichtbarkeit. Ablauf, Kostenfaktoren und Antworten auf häufige Fragen.',
    h1: 'Suchmaschinenoptimierung, die aus Suchanfragen Anfragen macht',
    intro:
      'Wer nach Ihrer Leistung sucht, hat einen konkreten Bedarf. Wir sorgen dafür, dass Ihre Website technisch sauber ist, die richtigen Fragen beantwortet und in Berlin wie überregional für die passenden Suchbegriffe auffindbar wird.',
    phase: 'Gefunden werden',
    schemaType: 'Suchmaschinenoptimierung',
    audiences: [
      {
        title: 'Lokale Dienstleister und Geschäfte',
        text: 'Praxen, Handwerksbetriebe, Gutachter, Gastronomie und Handel, die in ihrem Bezirk oder in ganz Berlin gefunden werden möchten.',
      },
      {
        title: 'Unternehmen mit erklärungsbedürftigen Leistungen',
        text: 'Wer Beratung, B2B-Leistungen oder Spezialprodukte anbietet, gewinnt über gute Inhalte Vertrauen, bevor das erste Gespräch stattfindet.',
      },
      {
        title: 'Onlineshops',
        text: 'Kategorie- und Produktseiten, Filter und interne Verlinkung entscheiden darüber, ob Ihr Sortiment überhaupt sichtbar wird.',
      },
      {
        title: 'Websites nach einem Relaunch',
        text: 'Wenn nach einem Umzug oder neuen Design Besucher fehlen, finden wir die Ursachen – von fehlenden Weiterleitungen bis zu verlorenen Inhalten.',
      },
    ],
    problems: [
      {
        problem: 'Die Website ist kaum bei Google zu finden.',
        answer:
          'Wir prüfen Indexierung, Seitenstruktur und Suchintention und ordnen jede wichtige Leistung einer eigenen, passenden Seite zu.',
      },
      {
        problem: 'Es kommen Besucher, aber keine Anfragen.',
        answer:
          'Oft ranken Seiten für Begriffe ohne Kaufabsicht. Wir richten Inhalte auf Suchanfragen aus, hinter denen ein echter Bedarf steht, und verbessern die Wege zur Kontaktaufnahme.',
      },
      {
        problem: 'Im Google-Unternehmensprofil tauchen andere Betriebe vor Ihnen auf.',
        answer:
          'Wir optimieren Ihr Profil, sorgen für einheitliche Unternehmensangaben im Netz und verknüpfen das Profil sinnvoll mit Ihrer Website.',
      },
      {
        problem: 'Niemand weiß, was die bisherigen SEO-Maßnahmen gebracht haben.',
        answer:
          'Wir richten eine nachvollziehbare Messung mit der Google Search Console und Ihrer Webanalyse ein und berichten in verständlicher Sprache.',
      },
    ],
    deliverables: [
      {
        title: 'Technische SEO',
        items: [
          'Crawling, Indexierung, Canonicals und Weiterleitungen',
          'Ladezeit und Core Web Vitals',
          'Strukturierte Daten auf Basis echter Angaben',
          'Sitemap, robots.txt und Fehlerbehebung',
        ],
      },
      {
        title: 'Onpage und Inhalte',
        items: [
          'Keyword- und Themenrecherche nach Suchintention',
          'Seitentitel, Beschreibungen und Überschriftenstruktur',
          'Neue Leistungsseiten und Ratgeberinhalte',
          'Interne Verlinkung zwischen verwandten Themen',
        ],
      },
      {
        title: 'Lokale Sichtbarkeit',
        items: [
          'Optimierung des Google-Unternehmensprofils',
          'Einheitliche Name-, Adress- und Telefonangaben',
          'Lokale Verzeichnisse und Branchenportale',
          'Umgang mit Bewertungen',
        ],
      },
    ],
    process: [
      { title: 'Analyse', text: 'Wir prüfen Technik, Inhalte, Wettbewerb und die Suchbegriffe, über die Ihre Kunden tatsächlich suchen.' },
      { title: 'Prioritäten', text: 'Sie erhalten eine Liste der Maßnahmen, sortiert nach Wirkung und Aufwand – keine hundertseitige Mappe.' },
      { title: 'Umsetzung', text: 'Wir setzen technische Korrekturen und Inhalte selbst um oder arbeiten mit Ihrem Team oder Dienstleister zusammen.' },
      { title: 'Messen und nachsteuern', text: 'Rankings, Klicks und Anfragen werden regelmäßig ausgewertet; daraus ergeben sich die nächsten Schritte.' },
    ],
    costFactors: [
      { title: 'Größe und Zustand der Website', text: 'Eine Website mit zehn Seiten braucht weniger Analyse als ein Shop mit tausenden Produkten oder eine Seite mit technischen Altlasten.' },
      { title: 'Wettbewerb', text: 'In stark umkämpften Branchen und Städten sind mehr Inhalte und ein längerer Atem nötig als in Nischen.' },
      { title: 'Inhaltsbedarf', text: 'Ob bestehende Texte überarbeitet oder neue Seiten und Ratgeber erstellt werden, beeinflusst den Aufwand am stärksten.' },
      { title: 'Umsetzung', text: 'Ob wir technische Änderungen direkt umsetzen oder Ihr Entwickler, verändert Abstimmung und Zeitbedarf.' },
      { title: 'Einmalig oder laufend', text: 'Ein Audit mit Maßnahmenplan ist einmalig; dauerhafte Betreuung wird meist monatlich vereinbart.' },
    ],
    faqs: [
      {
        q: 'Wie schnell wirkt Suchmaschinenoptimierung?',
        a: 'Technische Korrekturen können innerhalb weniger Wochen sichtbar werden. Bei neuen Inhalten und umkämpften Suchbegriffen sollten Sie eher mit mehreren Monaten rechnen. Eine seriöse Agentur kann keine bestimmte Platzierung garantieren – wir zeigen Ihnen aber transparent, was sich verändert.',
      },
      {
        q: 'Brauche ich SEO, wenn ich bereits Google Ads schalte?',
        a: 'Anzeigen bringen sofort Besucher, solange Budget fließt. SEO baut Sichtbarkeit auf, die ohne Klickkosten bleibt. Viele Unternehmen kombinieren beides: Ads für schnelle Ergebnisse und zum Testen von Suchbegriffen, SEO für den langfristigen Aufbau.',
      },
      {
        q: 'Arbeiten Sie auch mit WordPress, Shopify oder anderen Systemen?',
        a: 'Ja. Wir optimieren Websites unabhängig vom System. Wo das System technische Grenzen hat, zeigen wir Alternativen auf.',
      },
      {
        q: 'Was benötigen Sie von uns für den Start?',
        a: 'Zugang zur Google Search Console und zur Webanalyse, falls vorhanden, sowie Zugriff auf die Website oder einen Ansprechpartner dafür. Fehlt die Search Console, richten wir sie gemeinsam ein.',
      },
      {
        q: 'Gibt es eine Mindestlaufzeit?',
        a: 'Das hängt vom vereinbarten Umfang ab und wird vor Beginn transparent festgelegt. Ein einmaliges Audit ist ohne laufende Betreuung möglich.',
      },
    ],
    deepDive: {
      title: 'SEO-Themen im Detail',
      links: [
        { href: '/seo-agentur-berlin/technisches-seo', label: 'Technische SEO' },
        { href: '/seo-agentur-berlin/onpage-seo', label: 'Onpage-Optimierung' },
        { href: '/seo-agentur-berlin/offpage-seo', label: 'Offpage-SEO und Linkaufbau' },
        { href: '/seo-agentur-berlin/lokale-seo', label: 'Lokale SEO' },
        { href: '/seo-agentur-berlin/content-erstellung', label: 'Content-Erstellung' },
        { href: '/seo-agentur-berlin/keyword-recherche', label: 'Keyword-Recherche' },
        { href: '/seo-agentur-berlin/ecommerce-seo', label: 'E-Commerce-SEO' },
        { href: '/seo-agentur-berlin/monitoring-reporting', label: 'Monitoring und Reporting' },
        { href: '/seo-agentur-berlin/beratung', label: 'SEO-Beratung' },
      ],
    },
    related: ['/google-ads-agentur-berlin', '/webentwicklung'],
    ctaTitle: 'Sollen wir uns Ihre Sichtbarkeit gemeinsam ansehen?',
  },

  /* ------------------------------------------------------------ Webentwicklung */
  {
    href: '/webentwicklung',
    label: 'Webdesign & Webentwicklung',
    short: 'Unternehmenswebsites, Landingpages und Onlineshops – schnell, verständlich, auf Anfragen ausgelegt.',
    metaTitle: 'Webdesign & Webentwicklung in Berlin – Websites und Shops',
    metaDescription:
      'CAIT gestaltet und entwickelt Unternehmenswebsites, Landingpages und Onlineshops: individuelles Design, schnelle Technik, saubere SEO-Basis. Ablauf, Kostenfaktoren und FAQ.',
    h1: 'Websites, die Ihr Angebot verständlich machen und Anfragen erleichtern',
    intro:
      'Ihre Website ist oft der erste Eindruck – und für viele Interessenten der entscheidende. Wir gestalten und entwickeln Websites, Landingpages und Onlineshops, die schnell laden, auf jedem Gerät funktionieren und Besucher ohne Umwege zur Kontaktaufnahme führen.',
    phase: 'Überzeugen',
    schemaType: 'Webdesign und Webentwicklung',
    audiences: [
      { title: 'Unternehmen mit veralteter Website', text: 'Wenn Design, Technik oder Inhalte nicht mehr zu Ihrem Unternehmen passen und Sie Änderungen nicht selbst vornehmen können.' },
      { title: 'Gründerinnen und Gründer', text: 'Für einen professionellen Auftritt von Anfang an – mit einer Struktur, die mit dem Unternehmen wachsen kann.' },
      { title: 'Kampagnen und Produkteinführungen', text: 'Landingpages, die genau ein Ziel verfolgen und zu Ihren Anzeigen passen.' },
      { title: 'Händler', text: 'Onlineshops mit nachvollziehbarer Produktstruktur, sicheren Zahlungswegen und Anbindung an bestehende Systeme.' },
    ],
    problems: [
      { problem: 'Die Website lädt langsam und wirkt auf dem Smartphone unübersichtlich.', answer: 'Wir entwickeln mobil zuerst, optimieren Bilder, Schriften und Skripte und vermeiden unnötige Erweiterungen.' },
      { problem: 'Besucher verstehen nicht schnell genug, was Sie anbieten.', answer: 'Wir strukturieren Inhalte nach den Fragen Ihrer Kunden und schreiben auf Wunsch die Texte gleich mit.' },
      { problem: 'Jede Änderung braucht einen Entwickler.', answer: 'Je nach Anforderung setzen wir auf ein System, in dem Ihr Team Texte, Bilder und Seiten selbst pflegen kann.' },
      { problem: 'Nach dem letzten Relaunch sind Rankings eingebrochen.', answer: 'Wir planen Weiterleitungen, Metadaten und Inhalte von Beginn an mit, damit vorhandene Sichtbarkeit erhalten bleibt.' },
    ],
    deliverables: [
      { title: 'Konzept und Design', items: ['Seitenstruktur nach Zielgruppen und Suchintention', 'Individuelles Design statt Vorlage', 'Texte und Bildauswahl auf Wunsch', 'Prototyp zur Abstimmung vor der Entwicklung'] },
      { title: 'Entwicklung', items: ['Next.js, React oder WordPress – je nach Anforderung', 'Onlineshops mit Shopify oder WooCommerce', 'Barrierearme, schnelle Umsetzung', 'Formulare, Buchungen und Schnittstellen'] },
      { title: 'Start und Betrieb', items: ['SEO-Grundlagen und Weiterleitungen', 'Einrichtung von Webanalyse mit Einwilligung', 'Hosting-Beratung und Livegang', 'Wartung, Updates und Weiterentwicklung'] },
    ],
    process: [
      { title: 'Erstgespräch und Ziele', text: 'Wir klären, wen die Website erreichen soll, was Besucher dort tun sollen und welche Inhalte schon vorhanden sind.' },
      { title: 'Struktur und Design', text: 'Sie sehen früh, wie die Seiten aufgebaut sind und aussehen, und geben Rückmeldung, bevor programmiert wird.' },
      { title: 'Entwicklung und Inhalte', text: 'Wir setzen die Website um, befüllen sie mit Inhalten und testen sie auf verschiedenen Geräten.' },
      { title: 'Livegang', text: 'Weiterleitungen, Analyse und Suchmaschineneinstellungen werden geprüft, dann geht die Website online.' },
      { title: 'Weiterentwicklung', text: 'Nach dem Start werten wir aus, wie Besucher die Seite nutzen, und verbessern gezielt.' },
    ],
    costFactors: [
      { title: 'Umfang', text: 'Anzahl der Seiten und Vorlagen, Sprachen und individuelle Funktionen bestimmen den Aufwand wesentlich.' },
      { title: 'Design', text: 'Ein individuelles Designsystem erfordert mehr Konzeptarbeit als die Anpassung eines bestehenden Erscheinungsbilds.' },
      { title: 'Inhalte', text: 'Ob Texte, Fotos und Grafiken vorhanden sind oder erstellt werden müssen, wirkt sich spürbar aus.' },
      { title: 'Funktionen und Schnittstellen', text: 'Shop, Buchungssystem, Mitgliederbereich oder Anbindung an Warenwirtschaft und CRM erweitern den Umfang.' },
      { title: 'Pflege nach dem Start', text: 'Wartung, Sicherheitsupdates und Weiterentwicklung können als laufende Betreuung vereinbart werden.' },
    ],
    faqs: [
      { q: 'Wie lange dauert eine neue Website?', a: 'Eine kompakte Unternehmenswebsite ist oft in einigen Wochen umsetzbar, größere Projekte und Shops brauchen entsprechend länger. Entscheidend ist meist, wie schnell Inhalte und Rückmeldungen vorliegen. Den Zeitplan legen wir zu Beginn gemeinsam fest.' },
      { q: 'Kann ich die Website später selbst bearbeiten?', a: 'Ja, wenn Sie das möchten. Wir wählen dann ein System, in dem Ihr Team Inhalte selbst pflegen kann, und zeigen Ihnen die wichtigsten Abläufe.' },
      { q: 'Übernehmen Sie auch Texte und Fotos?', a: 'Texte schreiben wir auf Wunsch selbst, abgestimmt auf Ihre Kunden und auf Suchmaschinen. Für Fotos beraten wir Sie und binden passende Bilder ein.' },
      { q: 'Was passiert mit meiner bisherigen Website und ihren Rankings?', a: 'Wir erfassen vor dem Relaunch alle wichtigen Adressen und leiten sie auf die neuen Seiten weiter, damit Besucher und vorhandene Sichtbarkeit nicht verloren gehen.' },
      { q: 'Kümmern Sie sich um Hosting und Domain?', a: 'Wir beraten zu passenden Anbietern, richten Hosting und Domain auf Wunsch ein und übernehmen den Livegang.' },
    ],
    deepDive: {
      title: 'Weiterlesen im Blog',
      links: [
        { href: '/blog/webdesign/responsives-webdesign', label: 'Responsives Webdesign' },
        { href: '/blog/webdesign/performance-optimierung', label: 'Performance-Optimierung' },
        { href: '/blog/webdesign/web-accessibility', label: 'Barrierefreiheit im Web' },
        { href: '/blog/webdesign/wordpress-entwicklung', label: 'WordPress-Entwicklung' },
      ],
    },
    related: ['/seo-agentur-berlin', '/softwareentwicklung'],
    ctaTitle: 'Planen Sie eine neue Website oder einen Relaunch?',
  },

  /* ------------------------------------------------------------ Google Ads */
  {
    href: '/google-ads-agentur-berlin',
    label: 'Google Ads',
    short: 'Suchmaschinenwerbung, die Ihr Budget auf Suchanfragen mit echtem Bedarf lenkt – mit sauberer Messung.',
    metaTitle: 'Google Ads Agentur Berlin – Suchmaschinenwerbung mit Messung',
    metaDescription:
      'Google Ads von CAIT aus Berlin: Kampagnenaufbau, Keyword-Strategie, Anzeigentexte, Conversion-Tracking und laufende Optimierung. Ablauf, Kostenfaktoren und FAQ.',
    h1: 'Google Ads, bei denen Sie wissen, was Ihr Budget bewirkt',
    intro:
      'Mit Google Ads erscheinen Sie genau dann, wenn jemand nach Ihrer Leistung sucht. Wir bauen Kampagnen so auf, dass Streuverluste klein bleiben, messen, welche Klicks zu Anfragen oder Verkäufen führen, und optimieren auf dieser Grundlage.',
    phase: 'Gefunden werden',
    schemaType: 'Suchmaschinenwerbung (SEA)',
    audiences: [
      { title: 'Unternehmen, die schnell Anfragen brauchen', text: 'Ob neues Angebot, Saisongeschäft oder freie Kapazitäten: Anzeigen wirken ab dem ersten Tag.' },
      { title: 'Lokale Betriebe', text: 'Anzeigen nur im relevanten Umkreis und zu Ihren Öffnungszeiten, auf Wunsch mit Anrufoption.' },
      { title: 'Onlineshops', text: 'Shopping- und Performance-Max-Kampagnen auf Basis gepflegter Produktdaten.' },
      { title: 'Bestehende Konten ohne klare Ergebnisse', text: 'Wir prüfen Ihr Konto und zeigen, wo Budget ohne Wirkung verloren geht.' },
    ],
    problems: [
      { problem: 'Das Budget ist schnell aufgebraucht, Anfragen bleiben aus.', answer: 'Wir prüfen Suchbegriffe, Ausschlüsse und Gebotsstrategie und lenken das Budget auf Anfragen mit Kaufabsicht.' },
      { problem: 'Niemand weiß, welche Anzeigen Kunden bringen.', answer: 'Wir richten Conversion-Tracking für Formulare, Anrufe und Käufe ein – datenschutzkonform und mit Einwilligung.' },
      { problem: 'Die Anzeigen führen auf die Startseite.', answer: 'Wir verknüpfen jede Anzeigengruppe mit einer passenden Zielseite oder bauen bei Bedarf eine eigene Landingpage.' },
      { problem: 'Das Konto ist über Jahre unübersichtlich gewachsen.', answer: 'Wir strukturieren Kampagnen nach Leistungen, Regionen und Zielen neu, damit Auswertung und Steuerung wieder möglich sind.' },
    ],
    deliverables: [
      { title: 'Aufbau', items: ['Keyword-Recherche nach Suchintention', 'Kampagnenstruktur und Gebotsstrategie', 'Anzeigentexte und Anzeigenerweiterungen', 'Standort-, Zeit- und Geräteeinstellungen'] },
      { title: 'Messung', items: ['Conversion-Tracking für Formulare, Anrufe und Käufe', 'Einbindung in Google Tag Manager und Analytics', 'Einwilligungsmodus gemäß Cookie-Banner', 'Verständliche Auswertungen'] },
      { title: 'Laufende Betreuung', items: ['Suchbegriffe prüfen und ausschließen', 'Anzeigen und Gebote testen', 'Zielseiten verbessern', 'Regelmäßige Abstimmung zu Budget und Zielen'] },
    ],
    process: [
      { title: 'Zielklärung', text: 'Welche Leistungen sollen beworben werden, in welcher Region, und was ist eine Anfrage für Sie wert?' },
      { title: 'Konto-Prüfung oder Neuaufbau', text: 'Bestehende Konten analysieren wir, neue richten wir von Grund auf sauber ein.' },
      { title: 'Tracking und Start', text: 'Bevor Budget fließt, steht die Messung. Dann gehen die Kampagnen live.' },
      { title: 'Optimierung', text: 'In den ersten Wochen steuern wir eng nach, danach in festen Abständen mit Bericht.' },
    ],
    costFactors: [
      { title: 'Werbebudget', text: 'Das Budget, das an Google fließt, ist von der Agenturleistung getrennt und richtet sich nach Branche, Region und Zielen.' },
      { title: 'Anzahl der Kampagnen', text: 'Mehrere Leistungen, Regionen oder Kampagnentypen erhöhen den Betreuungsaufwand.' },
      { title: 'Tracking-Ausgangslage', text: 'Ist eine saubere Messung bereits vorhanden, entfällt ein Teil der Einrichtung.' },
      { title: 'Landingpages', text: 'Fehlen passende Zielseiten, kommen Konzeption und Umsetzung hinzu.' },
    ],
    faqs: [
      { q: 'Wie viel Budget brauche ich für Google Ads?', a: 'Das hängt von Klickpreisen in Ihrer Branche, der Region und Ihren Zielen ab. Wir schätzen vor dem Start ab, welches Budget für aussagekräftige Ergebnisse nötig ist, und Sie entscheiden, wie viel Sie investieren.' },
      { q: 'Wem gehört das Google-Ads-Konto?', a: 'Das Konto läuft auf Ihr Unternehmen. Wir arbeiten mit Zugriffsrechten, sodass Sie jederzeit vollen Einblick haben und das Konto bei Ihnen bleibt.' },
      { q: 'Wann sehe ich erste Ergebnisse?', a: 'Klicks und erste Anfragen sind oft schon in den ersten Tagen sichtbar. Für belastbare Aussagen über Kosten pro Anfrage braucht es meist einige Wochen an Daten.' },
      { q: 'Ist CAIT Google Partner?', a: 'Ja, CAIT ist als Google Partner gelistet. Das Partnerprofil können Sie über das Abzeichen im Fußbereich dieser Website direkt bei Google aufrufen.' },
      { q: 'Kann ich Google Ads mit SEO kombinieren?', a: 'Das ist oft sinnvoll. Die Daten aus Anzeigen zeigen schnell, welche Suchbegriffe Anfragen bringen – dieses Wissen fließt in die langfristige Suchmaschinenoptimierung ein.' },
    ],
    deepDive: {
      title: 'Weiterlesen im Blog',
      links: [
        { href: '/blog/google-ads/google-ads-einsteiger-guide', label: 'Google Ads für Einsteiger' },
        { href: '/blog/google-ads/conversion-optimierung-ads', label: 'Conversion-Optimierung' },
        { href: '/blog/google-ads/google-ads-budget-strategien', label: 'Budget-Strategien' },
      ],
    },
    related: ['/seo-agentur-berlin', '/webentwicklung'],
    ctaTitle: 'Möchten Sie Ihr Google-Ads-Konto prüfen lassen?',
  },

  /* ------------------------------------------------------------ Social Media */
  {
    href: '/social-media',
    label: 'Social Media',
    short: 'Strategie, Inhalte und bezahlte Kampagnen auf Instagram, TikTok, Facebook und LinkedIn.',
    metaTitle: 'Social-Media-Agentur Berlin – Strategie, Content und Ads',
    metaDescription:
      'Social-Media-Marketing von CAIT aus Berlin: Strategie, Content-Planung und -Produktion, Community-Betreuung und bezahlte Kampagnen. Ablauf, Kostenfaktoren und FAQ.',
    h1: 'Social Media mit klarer Strategie statt zufälliger Beiträge',
    intro:
      'Regelmäßig zu posten reicht nicht. Wir legen fest, welche Kanäle für Ihre Zielgruppe zählen, planen Inhalte, die zu Ihrem Unternehmen passen, und setzen bezahlte Kampagnen dort ein, wo sie Reichweite in Anfragen oder Bewerbungen verwandeln.',
    phase: 'Überzeugen',
    schemaType: 'Social-Media-Marketing',
    audiences: [
      { title: 'Gastronomie, Handel und Events', text: 'Wo Atmosphäre, Angebote und Termine zählen, sind Instagram und TikTok oft der direkteste Weg zu Gästen.' },
      { title: 'Dienstleister und B2B', text: 'LinkedIn und Facebook für Vertrauen, Fachwissen und Sichtbarkeit bei Entscheidern.' },
      { title: 'Unternehmen, die Personal suchen', text: 'Employer-Branding-Inhalte und Recruiting-Kampagnen erreichen auch Menschen, die nicht aktiv suchen.' },
      { title: 'Teams ohne Zeit für Content', text: 'Wir übernehmen Planung und Produktion ganz oder unterstützen Ihr Team mit Strategie und Vorlagen.' },
    ],
    problems: [
      { problem: 'Es wird unregelmäßig gepostet und niemand hat den Überblick.', answer: 'Wir erstellen einen Redaktionsplan mit Themen, Formaten und Verantwortlichkeiten.' },
      { problem: 'Beiträge bekommen kaum Reaktionen.', answer: 'Wir analysieren, welche Inhalte Ihre Zielgruppe tatsächlich sehen will, und testen neue Formate wie Reels und Kurzvideos.' },
      { problem: 'Reichweite bringt keine Kunden.', answer: 'Mit bezahlten Kampagnen, klaren Handlungsaufforderungen und sauberer Messung verbinden wir Reichweite mit Anfragen.' },
      { problem: 'Kommentare und Nachrichten bleiben liegen.', answer: 'Wir vereinbaren Abläufe für die Community-Betreuung oder übernehmen sie in Abstimmung mit Ihnen.' },
    ],
    deliverables: [
      { title: 'Strategie', items: ['Zielgruppen- und Kanalauswahl', 'Positionierung und Tonalität', 'Redaktionsplan und Themenpfeiler', 'Ziele und Kennzahlen'] },
      { title: 'Inhalte', items: ['Konzepte für Reels, Kurzvideos und Karussells', 'Texte, Grafiken und Bildbearbeitung', 'Planung und Veröffentlichung', 'Community-Betreuung nach Absprache'] },
      { title: 'Bezahlte Kampagnen', items: ['Meta Ads für Instagram und Facebook', 'TikTok- und LinkedIn-Kampagnen', 'Zielgruppen und Retargeting', 'Auswertung und Optimierung'] },
    ],
    process: [
      { title: 'Bestandsaufnahme', text: 'Wir sehen uns Ihre Kanäle, Mitbewerber und vorhandene Inhalte an.' },
      { title: 'Strategie', text: 'Kanäle, Themen, Formate und Ziele werden festgelegt und mit Ihnen abgestimmt.' },
      { title: 'Produktion und Planung', text: 'Inhalte entstehen im Voraus und werden nach Plan veröffentlicht.' },
      { title: 'Kampagnen und Auswertung', text: 'Bezahlte Reichweite ergänzt die organischen Inhalte; regelmäßig werten wir aus und passen an.' },
    ],
    costFactors: [
      { title: 'Anzahl der Kanäle', text: 'Jeder Kanal hat eigene Formate und Gepflogenheiten – mehr Kanäle bedeuten mehr Aufwand.' },
      { title: 'Veröffentlichungsfrequenz', text: 'Wie viele Beiträge und Videos pro Monat entstehen, ist einer der wichtigsten Faktoren.' },
      { title: 'Produktion', text: 'Ob Material von Ihnen kommt oder Foto- und Videoaufnahmen nötig sind, verändert den Umfang.' },
      { title: 'Werbebudget', text: 'Das Mediabudget für Anzeigen fließt direkt an die Plattformen und ist von der Betreuung getrennt.' },
      { title: 'Community-Betreuung', text: 'Das Beantworten von Kommentaren und Nachrichten kann je nach Umfang dazu vereinbart werden.' },
    ],
    faqs: [
      { q: 'Welche Plattform passt zu meinem Unternehmen?', a: 'Das hängt davon ab, wo Ihre Zielgruppe Zeit verbringt und was Sie erreichen möchten. Für lokale Gastronomie ist Instagram oft wichtiger als LinkedIn, für B2B-Dienstleister umgekehrt. Wir empfehlen lieber wenige Kanäle, die gut bespielt werden.' },
      { q: 'Muss ich selbst vor die Kamera?', a: 'Nein. Persönliche Inhalte wirken oft gut, es gibt aber viele Formate ohne Gesicht. Wir finden einen Weg, der zu Ihnen passt.' },
      { q: 'Wer erstellt die Inhalte?', a: 'Je nach Vereinbarung wir, Ihr Team oder beide gemeinsam. Sie geben die Inhalte vor der Veröffentlichung frei.' },
      { q: 'Wie messen Sie den Erfolg?', a: 'Neben Reichweite und Interaktionen messen wir, was für Ihr Geschäft zählt – etwa Anfragen, Reservierungen, Bewerbungen oder Verkäufe aus Kampagnen.' },
    ],
    deepDive: {
      title: 'Weiterlesen im Blog',
      links: [
        { href: '/blog/social-media/content-strategien', label: 'Content-Strategien' },
        { href: '/blog/social-media/instagram-reels', label: 'Instagram Reels' },
        { href: '/blog/social-media/tiktok-wachstum', label: 'Wachstum auf TikTok' },
      ],
    },
    related: ['/google-ads-agentur-berlin', '/webentwicklung'],
    ctaTitle: 'Sollen wir Ihre Social-Media-Kanäle gemeinsam ansehen?',
  },

  /* ------------------------------------------------------------ Software */
  {
    href: '/softwareentwicklung',
    label: 'Softwareentwicklung',
    short: 'Individuelle Webanwendungen, Kundenportale und Schnittstellen, wo Standardsoftware an Grenzen stößt.',
    metaTitle: 'Individuelle Softwareentwicklung in Berlin – Webanwendungen und Schnittstellen',
    metaDescription:
      'CAIT entwickelt individuelle Webanwendungen, interne Tools, Kundenportale und Schnittstellen zwischen bestehenden Systemen. Für wen, Ablauf, Kostenfaktoren und FAQ.',
    h1: 'Individuelle Software für Abläufe, die Standardlösungen nicht abbilden',
    intro:
      'Wenn Excel-Listen, Insellösungen und doppelte Dateneingaben den Alltag bestimmen, lohnt sich ein genauer Blick. Wir entwickeln Webanwendungen und Schnittstellen, die genau zu Ihren Prozessen passen – im Browser, ohne Installation und erweiterbar.',
    phase: 'Entlasten',
    schemaType: 'Softwareentwicklung',
    audiences: [
      { title: 'Betriebe mit vielen manuellen Abläufen', text: 'Angebote, Aufträge, Termine oder Dokumente, die heute per Hand zwischen Programmen übertragen werden.' },
      { title: 'Unternehmen mit eigenen Kundenprozessen', text: 'Kundenportale, Auftragsstatus oder Upload-Bereiche, über die Kunden selbst Informationen abrufen und einreichen.' },
      { title: 'Teams mit vielen Einzelsystemen', text: 'Shop, Warenwirtschaft, Buchhaltung und CRM, die bislang nicht miteinander sprechen.' },
      { title: 'Gründer mit Produktidee', text: 'Ein erster, schlanker Prototyp, um eine Idee mit echten Nutzern zu testen, bevor viel investiert wird.' },
    ],
    problems: [
      { problem: 'Daten werden mehrfach in verschiedene Programme eingetragen.', answer: 'Wir verbinden Ihre Systeme über Schnittstellen, sodass Daten einmal erfasst und automatisch weitergegeben werden.' },
      { problem: 'Wichtige Abläufe hängen an Tabellen und E-Mails.', answer: 'Wir bilden den Prozess in einer Webanwendung ab – mit Rollen, Status und nachvollziehbarer Historie.' },
      { problem: 'Kunden fragen immer wieder dieselben Informationen an.', answer: 'Ein Kundenportal stellt Dokumente, Status und Formulare rund um die Uhr bereit.' },
      { problem: 'Bestehende Software ist nicht mehr wartbar.', answer: 'Wir prüfen den Bestand und planen eine schrittweise Ablösung, ohne den laufenden Betrieb zu gefährden.' },
    ],
    deliverables: [
      { title: 'Konzeption', items: ['Aufnahme der Abläufe mit den Menschen, die sie nutzen', 'Priorisierung der Funktionen', 'Klickbarer Prototyp zur Abstimmung', 'Technische Architektur und Datenmodell'] },
      { title: 'Entwicklung', items: ['Webanwendungen mit React und Next.js', 'Datenbanken und Programmierschnittstellen (APIs)', 'Anbindung von Shop, CRM, Buchhaltung und anderen Diensten', 'Benutzerrollen und Zugriffsrechte'] },
      { title: 'Betrieb', items: ['Tests und schrittweise Einführung', 'Hosting in der EU nach Absprache', 'Dokumentation und Einweisung', 'Wartung und Weiterentwicklung'] },
    ],
    process: [
      { title: 'Verstehen', text: 'Wir sprechen mit den Beteiligten und dokumentieren, wie die Abläufe heute funktionieren und wo es hakt.' },
      { title: 'Eingrenzen', text: 'Wir definieren eine erste Version, die den größten Nutzen bringt, statt alles auf einmal zu bauen.' },
      { title: 'Entwickeln in Etappen', text: 'Sie sehen regelmäßig Zwischenstände und können früh Rückmeldung geben.' },
      { title: 'Einführen', text: 'Wir testen mit echten Daten, schulen Ihr Team und begleiten den Start.' },
      { title: 'Weiterentwickeln', text: 'Auf Basis der Nutzung erweitern wir die Anwendung Schritt für Schritt.' },
    ],
    costFactors: [
      { title: 'Funktionsumfang', text: 'Die Zahl der Abläufe, Rollen und Sonderfälle bestimmt den Entwicklungsaufwand am stärksten.' },
      { title: 'Schnittstellen', text: 'Gut dokumentierte Schnittstellen sind schneller angebunden als ältere Systeme ohne offene API.' },
      { title: 'Daten', text: 'Übernahme und Bereinigung vorhandener Daten kann einen eigenen Arbeitsschritt erfordern.' },
      { title: 'Anforderungen an Sicherheit und Verfügbarkeit', text: 'Sensible Daten, Protokollierung oder hohe Verfügbarkeit erhöhen Aufwand für Architektur und Betrieb.' },
      { title: 'Betrieb und Weiterentwicklung', text: 'Hosting, Wartung und neue Funktionen werden nach dem Start meist laufend vereinbart.' },
    ],
    faqs: [
      { q: 'Lohnt sich individuelle Software für ein kleines Unternehmen?', a: 'Nicht immer. Oft genügt eine gut eingerichtete Standardsoftware. Wir prüfen zuerst, ob es eine passende Lösung gibt, und empfehlen eine Eigenentwicklung nur, wenn sie spürbar Zeit spart oder etwas ermöglicht, das sonst nicht geht.' },
      { q: 'Wem gehört der Quellcode?', a: 'Die Nutzungs- und Eigentumsrechte am Code regeln wir vor Projektbeginn schriftlich. In der Regel erhalten Sie die Rechte an der für Sie entwickelten Software.' },
      { q: 'Wo werden die Daten gespeichert?', a: 'Das legen wir gemeinsam fest. Auf Wunsch betreiben wir Anwendungen bei Anbietern mit Rechenzentren in der EU.' },
      { q: 'Wie lange dauert die Entwicklung?', a: 'Eine erste nutzbare Version entsteht oft innerhalb weniger Wochen bis Monate, je nach Umfang. Durch die Entwicklung in Etappen können Sie früh mit Teilen der Anwendung arbeiten.' },
      { q: 'Können Sie bestehende Software übernehmen?', a: 'Das prüfen wir im Einzelfall. Nach einer Sichtung des Codes und der Dokumentation sagen wir Ihnen ehrlich, ob Weiterentwicklung oder Neuaufbau sinnvoller ist.' },
    ],
    related: ['/ki-loesungen', '/webentwicklung'],
    ctaTitle: 'Welcher Ablauf kostet Ihr Team heute die meiste Zeit?',
  },

  /* ------------------------------------------------------------ KI */
  {
    href: '/ki-loesungen',
    label: 'KI-Lösungen',
    short: 'Chatbots, KI-Assistenten und Prozessautomatisierung – dort eingesetzt, wo sie verlässlich Arbeit abnehmen.',
    metaTitle: 'KI-Lösungen für Unternehmen – Chatbots und Automatisierung',
    metaDescription:
      'CAIT entwickelt KI-Chatbots, interne Assistenten und automatisierte Abläufe für Unternehmen – mit Blick auf Datenschutz, Verlässlichkeit und echten Nutzen. Ablauf, Kostenfaktoren und FAQ.',
    h1: 'Künstliche Intelligenz, die im Alltag Arbeit abnimmt',
    intro:
      'KI kann Anfragen beantworten, Dokumente auswerten und wiederkehrende Aufgaben erledigen – wenn sie mit den richtigen Daten und klaren Grenzen eingesetzt wird. Wir finden die Stellen in Ihrem Unternehmen, an denen sich das lohnt, und setzen Lösungen um, die Sie kontrollieren können.',
    phase: 'Entlasten',
    schemaType: 'KI-Entwicklung und Prozessautomatisierung',
    audiences: [
      { title: 'Unternehmen mit vielen ähnlichen Anfragen', text: 'Ein Chatbot auf Basis Ihrer eigenen Inhalte beantwortet Standardfragen rund um die Uhr und übergibt komplexe Fälle an Ihr Team.' },
      { title: 'Teams mit viel Dokumentenarbeit', text: 'Angebote, Formulare, Berichte oder E-Mails, die gelesen, sortiert und zusammengefasst werden müssen.' },
      { title: 'Betriebe mit wiederkehrenden Routineaufgaben', text: 'Abläufe zwischen E-Mail, Kalender, CRM und Tabellen, die sich automatisieren lassen – mit oder ohne KI.' },
      { title: 'Unternehmen, die KI ausprobieren wollen', text: 'Ein klar abgegrenzter Pilot zeigt mit überschaubarem Aufwand, ob sich ein Einsatz lohnt.' },
    ],
    problems: [
      { problem: 'Das Team beantwortet täglich dieselben Fragen.', answer: 'Ein Chatbot greift auf Ihre geprüften Inhalte zurück, nennt seine Quellen und leitet an Menschen weiter, wenn er unsicher ist.' },
      { problem: 'Informationen stecken in Dokumenten, die niemand schnell durchsucht.', answer: 'Ein interner Assistent macht Handbücher, Verträge oder Wissenssammlungen per Frage durchsuchbar.' },
      { problem: 'Eingehende E-Mails und Formulare werden per Hand sortiert.', answer: 'Eine Automatisierung erkennt Anliegen, extrahiert Daten und legt Vorgänge im richtigen System an.' },
      { problem: 'Unklar, ob KI-Ergebnisse verlässlich sind.', answer: 'Wir testen mit echten Beispielen, definieren Grenzen und bauen Kontrollschritte ein, wo Fehler teuer wären.' },
    ],
    deliverables: [
      { title: 'Beratung', items: ['Erfassung möglicher Einsatzfelder', 'Bewertung nach Nutzen, Risiko und Aufwand', 'Auswahl passender Modelle und Anbieter', 'Prüfung von Datenschutzfragen'] },
      { title: 'Umsetzung', items: ['Website-Chatbots auf Basis Ihrer Inhalte', 'Interne Wissensassistenten', 'Automatisierte Abläufe zwischen Ihren Programmen', 'Anbindung an Website, CRM und Postfach'] },
      { title: 'Qualität und Betrieb', items: ['Tests mit realen Beispielanfragen', 'Übergabe an Menschen bei Unsicherheit', 'Protokollierung und Auswertung', 'Pflege der Wissensbasis'] },
    ],
    process: [
      { title: 'Einsatzfelder finden', text: 'Wir sehen uns Ihre Abläufe an und wählen einen Anwendungsfall mit klarem Nutzen.' },
      { title: 'Pilot', text: 'Ein abgegrenzter Prototyp zeigt mit echten Daten, wie gut die Lösung funktioniert.' },
      { title: 'Bewerten', text: 'Gemeinsam prüfen wir Ergebnisse, Grenzen und Aufwand und entscheiden über den Ausbau.' },
      { title: 'Einführen und betreuen', text: 'Wir binden die Lösung in Ihre Systeme ein, schulen Ihr Team und überwachen die Qualität.' },
    ],
    costFactors: [
      { title: 'Anwendungsfall', text: 'Ein Chatbot für häufige Fragen ist schneller umgesetzt als eine Automatisierung über mehrere Systeme mit Sonderfällen.' },
      { title: 'Datengrundlage', text: 'Liegen die Inhalte aktuell und strukturiert vor, sinkt der Aufwand. Verstreute oder veraltete Daten müssen zuerst aufbereitet werden.' },
      { title: 'Integrationen', text: 'Jede Anbindung an Website, CRM, Postfach oder Fachsoftware erweitert den Umfang.' },
      { title: 'Laufende Nutzungskosten', text: 'KI-Modelle werden meist nach Nutzung abgerechnet; die Höhe hängt vom Volumen der Anfragen ab.' },
      { title: 'Anforderungen an Datenschutz', text: 'Je sensibler die Daten, desto mehr Sorgfalt erfordern Anbieterauswahl, Hosting und Zugriffskonzepte.' },
    ],
    faqs: [
      { q: 'Erfindet ein KI-Chatbot nicht einfach Antworten?', a: 'Das Risiko besteht, wenn ein Modell frei antwortet. Wir begrenzen den Chatbot auf Ihre geprüften Inhalte, lassen ihn Quellen nennen und an Ihr Team übergeben, wenn keine verlässliche Antwort vorliegt. Vor dem Start testen wir mit typischen Anfragen.' },
      { q: 'Ist der Einsatz von KI datenschutzkonform möglich?', a: 'Ja, mit der richtigen Auswahl von Anbietern, Verträgen zur Auftragsverarbeitung und einem bewussten Umgang mit personenbezogenen Daten. Welche Lösung für Sie passt, klären wir im Einzelfall; eine Rechtsberatung ersetzt das nicht.' },
      { q: 'Brauchen wir dafür eigene Server?', a: 'In den meisten Fällen nicht. Viele Lösungen nutzen Modelle über Schnittstellen etablierter Anbieter. Wo es nötig ist, besprechen wir Alternativen mit Betrieb in der EU.' },
      { q: 'Ersetzt KI Mitarbeitende?', a: 'Unser Ziel ist, Routinearbeit zu reduzieren, damit Ihr Team mehr Zeit für Kunden und anspruchsvolle Aufgaben hat. Entscheidungen mit Tragweite bleiben bei Menschen.' },
      { q: 'Wie fangen wir am besten an?', a: 'Mit einem kurzen Gespräch über Ihre Abläufe. Daraus entsteht meist ein kleiner, klar abgegrenzter Pilot, an dem sich der Nutzen messen lässt.' },
    ],
    related: ['/softwareentwicklung', '/webentwicklung'],
    ctaTitle: 'Wo könnte KI Ihrem Team die meiste Arbeit abnehmen?',
  },
];

export const getService = (href: string) => {
  const s = SERVICES.find((x) => x.href === href);
  if (!s) throw new Error(`Unbekannte Leistung: ${href}`);
  return s;
};

export const PHASES: { name: Service['phase']; text: string }[] = [
  { name: 'Gefunden werden', text: 'Menschen suchen nach dem, was Sie anbieten. Wir sorgen dafür, dass sie bei Ihnen ankommen.' },
  { name: 'Überzeugen', text: 'Website und Social Media erklären Ihr Angebot und machen den nächsten Schritt leicht.' },
  { name: 'Entlasten', text: 'Software und KI übernehmen wiederkehrende Arbeit, damit Ihr Team Zeit für Kunden hat.' },
];
