/** @type {import('tailwindcss').Config} */
// Einzige Tailwind-Konfiguration des Projekts (die frühere tailwind.config.ts
// wurde von Tailwind nie geladen, weil .js Vorrang hat – ihre Tokens sind hier zusammengeführt).
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Markenfarben CAIT – Nachtblau und Gold, für Kontrast verfeinert
        night: {
          DEFAULT: '#0c1527',
          900: '#070d1a',
          800: '#0c1527',
          700: '#131f38',
          600: '#1b2a4a',
          500: '#2a3b60',
        },
        gold: {
          50: '#f7f0dc',
          100: '#efe1b6',
          200: '#e6cc80',
          300: '#d4af37',
          400: '#b8973a',
          500: '#9a7d2e',
          600: '#7c6325',
        },
        kalk: {
          DEFAULT: '#eceef2',
          100: '#f5f6f9',
          200: '#eceef2',
          300: '#dde1e9',
        },
        ink: {
          DEFAULT: '#edf0f5',
          muted: '#b6bfd0',
          soft: '#dbe1ec',
        },
        slate: {
          ink: '#0c1527',
          muted: '#3f4a5e',
        },
        // Ältere Seiten verwenden diese Tokens noch
        primary: {
          DEFAULT: '#0c1527',
          light: '#131f38',
          dark: '#070d1a',
        },
      },
      backgroundImage: {
        'mesh-dark': 'radial-gradient(ellipse at 50% 0%, #131f38 0%, #0c1527 60%, #070d1a 100%)',
        'metallic-gold': 'linear-gradient(135deg, #d4af37 0%, #b8973a 50%, #e6cc80 100%)',
      },
      screens: {
        xs: '400px',
        '3xl': '1680px',
      },
      maxWidth: {
        site: '1320px',
        prose: '68ch',
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};
