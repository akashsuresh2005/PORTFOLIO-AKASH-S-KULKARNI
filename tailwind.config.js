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
          bg: '#080B14',
          surface: '#0D1220',
          card: '#111827',
          cardHover: '#162033',
          cardBorder: 'rgba(148, 163, 184, 0.15)',
          borderGlow: 'rgba(56, 189, 248, 0.3)',
          blue: '#38BDF8',
          violet: '#8B5CF6',
          cyan: '#22D3EE',
          emerald: '#10B981',
          rose: '#F43F5E',
          amber: '#F59E0B',
          text: '#F8FAFC',
          muted: '#94A3B8',
          subtle: '#64748B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Cascadia Code', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'glow-blue': '0 0 25px -5px rgba(56, 189, 248, 0.4)',
        'glow-violet': '0 0 25px -5px rgba(139, 92, 246, 0.4)',
        'glow-cyan': '0 0 25px -5px rgba(34, 211, 238, 0.4)',
        'glow-card': '0 10px 30px -10px rgba(8, 11, 20, 0.8), 0 0 1px 1px rgba(148, 163, 184, 0.1)',
        'inner-glow': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.08)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-reverse': 'floatReverse 7s ease-in-out infinite',
        'glow-line': 'glowLine 3s linear infinite',
        'matrix-scan': 'matrixScan 8s linear infinite',
        'gradient-x': 'gradientX 15s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(12px)' },
        },
        glowLine: {
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

