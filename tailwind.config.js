/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
            colors: {
        light: {
          bg: '#F5F7FA',
          text: '#1A1A1A',
          primary: '#7F00FF',
          secondary: '#00FFFF',
          accent: '#8A2BE2',
          card: 'rgba(255, 255, 255, 0.8)',
          border: 'rgba(127, 0, 255, 0.2)',
        },
        dark: {
          bg: '#0D0D0D',
          text: '#F5F5F5',
          primary: '#8A2BE2',
          secondary: '#00BFFF',
          accent: '#7F00FF',
          card: 'rgba(255, 255, 255, 0.05)',
          border: 'rgba(138, 43, 226, 0.3)',
        }
      },
            fontFamily: {
        cinematic: ['Inter', 'SF Pro Display', '-apple-system', 'system-ui', 'sans-serif'],
        elite: ['Inter', 'SF Pro Display', 'Helvetica Neue', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
        'scale-in': 'scaleIn 0.5s ease-out',
        'shimmer': 'shimmer 2s ease-in-out infinite',
        'gradient-shift': 'gradientShift 3s ease-in-out infinite',
      },
            keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%': { textShadow: '0 0 10px currentColor' },
          '100%': { textShadow: '0 0 20px currentColor' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      boxShadow: {
        'elite': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'neuro': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.05), 0 1px 0 0 rgba(255, 255, 255, 0.05)',
        'neuro-dark': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.1), 0 1px 0 0 rgba(0, 0, 0, 0.1)',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
