/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: { colors: { ink: '#0b0c0b', paper: '#f2f0e9', muted: '#989a91', acid: '#c8f169' }, fontFamily: { sans: ['Manrope', 'sans-serif'], mono: ['DM Mono', 'monospace'] } } },
  plugins: [],
}
