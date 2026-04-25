/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ink': {
          950: '#050505',
          900: '#0A0A0A',
          800: '#111111',
          700: '#1A1A1A',
          600: '#242424',
        },
        'gold': {
          50:  '#FFFBEA',
          100: '#FFF3C4',
          300: '#FADB5F',
          400: '#F7C948',
          500: '#F5C518',
          600: '#E3B008',
          700: '#CB9A06',
          900: '#8D6708',
        },
        'mist': {
          50:  '#FAFAFA',
          100: '#F4F4F5',
          300: '#D4D4D8',
          400: '#A1A1AA',
          500: '#71717A',
          700: '#3F3F46',
        },
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        display: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        body:    ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        arabic:  ['"IBM Plex Sans Arabic"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'tightest-display': '-0.035em',
        'tight-display':    '-0.025em',
        'tight-card':       '-0.015em',
      },
      fontSize: {
        '7xl': ['4.5rem', { lineHeight: '1.05' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '0.95' }],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      boxShadow: {
        'gold-glow': '0 0 40px 0 rgba(245, 197, 24, 0.15)',
        'gold-glow-lg': '0 0 80px 0 rgba(245, 197, 24, 0.2)',
        'card': '0 4px 32px rgba(0,0,0,0.5)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-gold': 'pulse-gold 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-gold': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(245, 197, 24, 0.2)' },
          '50%': { boxShadow: '0 0 40px rgba(245, 197, 24, 0.4)' },
        },
      },
      transitionTimingFunction: {
        'expo-out': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
