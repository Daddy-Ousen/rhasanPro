/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        console: {
          950: '#06090e',
          900: '#0b0f17',
          850: '#0f1622',
          800: '#141d2e',
          700: '#1e2b42',
          600: '#2b3d5c',
        },
        obs: {
          green: '#10b981',
          cyan: '#06b6d4',
          amber: '#f59e0b',
          blue: '#3b82f6',
        },
        swiss: {
          bg: '#fafafa',
          surface: '#ffffff',
          subtle: '#f4f4f5',
          border: '#e4e4e7',
          text: '#09090b',
          muted: '#71717a',
          accent: '#18181b',
        }
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
        ],
        mono: [
          '"JetBrains Mono"',
          '"Geist Mono"',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace',
        ],
        display: [
          '"Plus Jakarta Sans"',
          'Inter',
          'sans-serif',
        ],
      },
      boxShadow: {
        'glow-emerald': '0 0 20px -5px rgba(16, 185, 129, 0.25)',
        'glow-cyan': '0 0 20px -5px rgba(6, 182, 212, 0.25)',
        'subtle-card': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05)',
        'elevated-light': '0 10px 30px -10px rgba(0, 0, 0, 0.07)',
      },
    },
  },
  plugins: [],
};
