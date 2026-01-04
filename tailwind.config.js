/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          'navy-header': '#1e293b', // header background
          navy: '#1e293b', // main heading text (Text Primary)
          blue: '#2563eb', // Blue Primary (per request)
          'blue-soft': '#93c5fd', // Blue Soft
          teal: '#0d9488',
          light: '#60a5fa',
        },
        accent: {
          DEFAULT: '#0d9488', // Teal Main for status/highlight
          hover: '#0f766e',
          light: '#ccfbf1',
        },
        'orange-muted': '#fb923c',
        success: '#22c55e',
        error: '#f87171',
        warning: '#eab308',
        primary: '#2563eb',
        primaryDark: '#1d4ed8',
        secondary: '#64748b',
        dark: '#0f172a',
        surface: '#f8fafc',
        body: '#64748b',
        textMuted: '#94a3b8',
        border: '#e2e8f0',
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(15, 23, 42, 0.05), 0 2px 4px -1px rgba(15, 23, 42, 0.03)',
        'card': '0 10px 15px -3px rgba(15, 23, 42, 0.08), 0 4px 6px -2px rgba(15, 23, 42, 0.04)',
        'glow': '0 0 20px rgba(37, 99, 235, 0.12)',
        'glow-teal': '0 0 20px rgba(13, 148, 136, 0.12)',
      },
      animation: {
        'blob': 'blob 7s infinite',
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.3s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    }
  },
  plugins: [],
}