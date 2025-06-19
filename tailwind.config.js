/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'camphor-white': '#f7fdfa',
        'forest-green': '#0f5132',
        'mint-tint': '#e6f4ea',
        'charcoal': '#222222',
        'pale-sage': '#cde9d4',
        'shade-forest': '#0c462b',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          lg: '2rem',
        },
      },
      fontSize: {
        'clamp-xs': 'clamp(0.75rem, 1vw + 0.5rem, 0.875rem)',
        'clamp-sm': 'clamp(0.875rem, 1.5vw + 0.5rem, 1rem)',
        'clamp-base': 'clamp(1rem, 2vw + 0.5rem, 1.125rem)',
        'clamp-lg': 'clamp(1.125rem, 2.5vw + 0.75rem, 1.25rem)',
        'clamp-xl': 'clamp(1.25rem, 3vw + 1rem, 1.5rem)',
        'clamp-2xl': 'clamp(1.5rem, 4vw + 1rem, 2rem)',
        'clamp-3xl': 'clamp(1.875rem, 5vw + 1rem, 2.5rem)',
        'clamp-4xl': 'clamp(2.25rem, 6vw + 1rem, 3rem)',
        'clamp-5xl': 'clamp(3rem, 8vw + 1rem, 4rem)',
        'clamp-6xl': 'clamp(3.75rem, 10vw + 1rem, 5rem)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '3/2': '3 / 2',
        '2/3': '2 / 3',
        '9/16': '9 / 16',
      },
    },
  },
  plugins: [],
};