
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        deepTeal: '#004246',
        teal: '#046668',
        sage: '#8faa83',
        lightLime: '#d2e5a8',
        cream: '#f4f3d5',
        goldenOlive: '#c3bd82',
      },
      fontFamily: {
        serif: ['Lora', 'serif'],
        sans: ['"Source Sans 3"', 'sans-serif'],
      },
      backgroundImage: {
        'wood-pattern': "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0 C 20 10 40 10 60 0 M0 20 C 20 30 40 30 60 20 M0 40 C 20 50 40 50 60 40' stroke='%23c3bd82' fill='none' opacity='0.2'/%3E%3C/svg%3E\")",
      }
    },
  },
  plugins: [],
}
