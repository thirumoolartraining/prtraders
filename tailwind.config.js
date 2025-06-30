/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        spiritual: {
          sandalwood: '#F4E7D6',
          'sandy-light': '#F9F1E8',
          maroon: '#8B2635',
          'maroon-light': '#A64D5A',
          rose: '#E8B4B8',
          'rose-light': '#F2D1D4',
          gold: '#DAA520',
          'gold-light': '#E6B73A',
          pure: '#FFFFFF',
          warm: '#FFF8F0'
        }
      },
      fontFamily: {
        'serif-spiritual': ['Playfair Display', 'serif'],
        'sans-spiritual': ['Inter', 'sans-serif'],
        'heading': ['Cormorant Garamond', 'serif']
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem'
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out',
        'fade-in': 'fadeIn 1.2s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'gentle-bounce': 'gentleBounce 0.6s ease-out'
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(218, 165, 32, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(218, 165, 32, 0.4)' }
        },
        gentleBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' }
        }
      }
    },
  },
  plugins: [],
};