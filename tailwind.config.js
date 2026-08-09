/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        void: '#05050A',
        surface: '#0B0B14',
        panel: 'rgba(255,255,255,0.04)',
        violet: {
          400: '#A78BFA',
          500: '#8B5CF6',
          600: '#7C3AED',
        },
        azure: {
          400: '#60A5FA',
          500: '#3B82F6',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        sans: ['var(--font-sans)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 80px -20px rgba(139,92,246,0.55)',
        'glow-blue': '0 0 80px -20px rgba(59,130,246,0.5)',
      },
      backgroundImage: {
        'grid-fade': 'radial-gradient(ellipse at center, rgba(139,92,246,0.12) 0%, transparent 65%)',
      },
    },
  },
  plugins: [],
};
