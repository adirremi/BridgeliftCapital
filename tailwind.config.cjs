/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Outfit',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
      },
      fontSize: {
        display: [
          'clamp(2.4rem, 1.4rem + 3.2vw, 4rem)',
          { lineHeight: '1.05', letterSpacing: '-0.02em' },
        ],
        eyebrow: ['0.75rem', { lineHeight: '1', letterSpacing: '0.18em' }],
      },
      colors: {
        brand: {
          50: '#eef9ff',
          100: '#daf1ff',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
        },
        mint: {
          50: '#ecfdf5',
          100: '#d1fae5',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
        },
      },
      boxShadow: {
        soft: '0 1px 0 rgba(15, 23, 42, 0.04), 0 8px 24px -10px rgba(15, 23, 42, 0.12)',
        glow: '0 30px 60px -20px rgba(16, 185, 129, 0.35), 0 18px 40px -20px rgba(14, 165, 233, 0.35)',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
      },
      backgroundImage: {
        'mesh-light':
          'radial-gradient(60% 50% at 80% 0%, rgba(16,185,129,0.18), transparent 60%), radial-gradient(50% 60% at 0% 30%, rgba(14,165,233,0.18), transparent 60%), radial-gradient(70% 60% at 50% 100%, rgba(125,211,252,0.18), transparent 60%)',
        'dot-grid':
          'radial-gradient(rgba(15, 23, 42, 0.06) 1px, transparent 1px)',
      },
      backgroundSize: {
        'dot-grid': '20px 20px',
      },
    },
  },
  plugins: [],
};
