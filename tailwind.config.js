/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "white":"#fff",
      "bt-hover-red":"#C11119",
      "bt-primary-red":"#E50914"
    },
  },
  plugins: [],
}