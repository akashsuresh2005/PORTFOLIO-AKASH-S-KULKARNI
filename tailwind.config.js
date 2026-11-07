/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#070913',
          surface: '#0B0F1E',
          card: '#0F1629',
          cardHover: '#151F38',
          cardBorder: 'rgba(56, 189, 248, 0.2)',
          borderGlow: 'rgba(34, 211, 238, 0.4)',
          blue: '#38BDF8',
          violet: '#8B5CF6',
          cyan: '#22D3EE',
          emerald: '#10B981',
          rose: '#F43F5E',
          amber: '#F59E0B',
          fuchsia: '#D946EF',
          text: '#F8FAFC',
          muted: '#94A3B8',
          subtle: '#64748B',
        },
        neon: {
          cyan: '#00F5FF',
          blue: '#38BDF8',
          indigo: '#6366F1',
          purple: '#A855F7',
          fuchsia: '#F43F5E',
          emerald: '#10B981',
          amber: '#F59E0B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Cascadia Code', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'glow-blue': '0 0 30px -5px rgba(56, 189, 248, 0.5)',
        'glow-violet': '0 0 30px -5px rgba(139, 92, 246, 0.5)',
        'glow-cyan': '0 0 30px -5px rgba(34, 211, 238, 0.5)',
        'glow-emerald': '0 0 30px -5px rgba(16, 185, 129, 0.5)',
        'glow-amber': '0 0 30px -5px rgba(245, 158, 11, 0.5)',
        'glow-card': '0 10px 35px -10px rgba(7, 9, 19, 0.9), 0 0 1px 1px rgba(56, 189, 248, 0.15)',
        'inner-glow': 'inset 0 1px 2px 0 rgba(255, 255, 255, 0.12)',
      },
      animation: {
        'pulse-slow': 'pulse 3.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 5s ease-in-out infinite',
        'float-reverse': 'floatReverse 6s ease-in-out infinite',
        'glow-line': 'glowLine 3s linear infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
        'gradient-x': 'gradientX 8s ease infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(10px)' },
        },
        glowLine: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
