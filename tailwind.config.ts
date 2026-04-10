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
        navy: { DEFAULT: '#1A2E5A', light: '#243B6F' },
        teal: { DEFAULT: '#007B8E', bright: '#00A3B8', light: '#E0F5F8' },
        coral: { DEFAULT: '#E8553E', light: '#FFF0ED' },
        gold: { DEFAULT: '#F5A623', light: '#FFF8EC' },
        sage: { DEFAULT: '#4A9177', light: '#EBF5F0' },
        cream: '#FAFAF7',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        lg: '16px',
        xl: '24px',
      },
    },
  },
  plugins: [],
}

export default config
