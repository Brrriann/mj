/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1B4332',      // 진녹색
        'primary-dark': '#0F2D1F',
        'primary-light': '#2D6A4F',
        accent: '#C9A84C',       // 골드
        'accent-light': '#D4B86A',
        'accent-dark': '#A67C32',
        bgalt: '#F8F8F6',        // 연회색 배경
        textprimary: '#1A1A1A',
        textsecondary: '#6B7280',
      },
      fontFamily: {
        serif: ['var(--font-noto-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-noto-sans)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
