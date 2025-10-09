/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'base-light': '#FFF',
        'base-dark': '#FFF',
        'primary': '#2D2D2D',
        'secondary': '#575757',
        'accent-1': '#D37C6E',
        'accent-2': '#73A9A7',
        'accent-3': '#A4B494',
        'accent-hover': '#B35548',
        'neutral-light': '#FFF',
      },
    },
  },
  plugins: [],
}