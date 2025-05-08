/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'squada': ['"Squada One"', 'cursive'],
        'manrope': ['Manrope', 'sans-serif'],
      },
      colors: {
        'background': '#0E0B16',
        'white': '#E1E1E6',
      },
    },
  },
  plugins: [],
} 