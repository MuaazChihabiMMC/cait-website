/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        green: {
          50: '#30AF5B',
          90: '#292C27',
        },
        gray: {
          10: '#EEEEEE',
          20: '#A2A2A2',
          30: '#7B7B7B',
          50: '#585858',
          90: '#141414',
        },
        orange: {
          50: '#FF814C',
        },
        blue: {
          70: '#021639',
        },
        yellow: {
          50: '#FEC601',
        },
        gold: {
          50: '#f5ecd4',
          100: '#ebdba9',
          200: '#e8c96b',
          300: '#d4af37', /* Classic Gold - Primary */
          400: '#b8973a',
          500: '#9a7d2e',
          600: '#7c6325',
        },
        primary: {
          DEFAULT: '#0a0f1a',
          light: '#151b2e',
          dark: '#050810',
        },
      },
      backgroundImage: {
        'bg-img-1': "url('/img-1.png')",
        'bg-img-2': "url('/img-2.png')",
        'feature-bg': "url('/feature-bg.png')",
        pattern: "url('/pattern.png')",
        'pattern-2': "url('/pattern-bg.png')",
        'metallic-gold': "linear-gradient(135deg, #d4af37 0%, #b8973a 50%, #e8c96b 100%)",
        'mesh-dark': "radial-gradient(ellipse at 50% 0%, #151b2e 0%, #0a0f1a 60%, #050810 100%)",
      },
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        '5xl': '40px',
      },
    },
  },
  plugins: [],
};