import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Existing tokens — preserved untouched
        navy: { DEFAULT: '#1A2E5A', light: '#243B6F' },
        teal: { DEFAULT: '#00A3B8', dark: '#007B8E', light: '#E0F5F8' },
        coral: { DEFAULT: '#E8553E', light: '#FFF0ED' },
        gold: { DEFAULT: '#F5A623', light: '#FFF8EC' },
        sage: { DEFAULT: '#4A9177', light: '#EBF5F0' },
        cream: '#FAFAF7',

        // New article template tokens (Figma-driven)
        paper: {
          1: '#F6EFE6', // hero / sidebar bg
          2: '#FAF0E5', // alt section bg (Quality of care)
          3: '#FFFAF5', // related-resources card bg
          4: '#FFFBF4', // FAQ card bg
          5: '#EFDFD2', // border / divider
        },
        'mars-blue': '#1871E2',
        'link-teal': '#047390',
        'link-blue': '#93BEF4',
        'accent-pink': '#FFC1E3',
        'accent-mint': '#B4EDBB',
        'accent-lavender': '#C2BCFF',
        ink: '#2D2F30',
        taupe: '#8A8079',
      },
      fontFamily: {
        // Existing
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        // New article system
        display: ['Anybody', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        lg: '16px',
        xl: '24px',
        '4xl': '40px',
        '5xl': '48px',
      },
    },
  },
  plugins: [],
}

export default config
