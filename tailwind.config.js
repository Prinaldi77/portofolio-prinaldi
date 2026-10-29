/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        display: ['"Space Grotesk"', 'sans-serif'],
      },
      colors: {
        obsidian: '#050505',
        charcoal: '#0F0F11',
        graphite: '#17171A',
        surface: '#FFFFFF',
        main: '#0A0A0A',
        border: '#E4E4E7',
        muted: '#6B6B6B',
        accent: {
          DEFAULT: '#D97706',
          light: '#F59E0B',
        },
        primary: {
          DEFAULT: '#610000',
          hover: '#4E0000',
        },
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
        card: '24px',
        pill: '9999px',
        input: '12px',
      },
      boxShadow: {
        hard: '4px 4px 0px 0px #000000',
        'hard-sm': '2px 2px 0px 0px #000000',
        'hard-lg': '6px 6px 0px 0px #000000',
        'hard-white': '4px 4px 0px 0px #ffffff',
        'hard-sm-white': '2px 2px 0px 0px #ffffff',
        'hard-dark': '4px 4px 0px 0px #262626',
        soft: '2px 4px 20px -5px rgba(0, 0, 0, 0.1)',
        curtain: '0 -16px 40px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
}
