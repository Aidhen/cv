/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)', // Il colore dinamico
        darkbg: '#111111',
        darktext: '#e5e7eb'
      },
      fontFamily: {
        pixel: ['"VT323"', 'monospace'],
      },
      boxShadow: {
        'pixel': '6px 6px 0px 0px var(--color-primary)',
        'pixel-hover': '2px 2px 0px 0px var(--color-primary)',
      }
    },
  },
  plugins: [],
}