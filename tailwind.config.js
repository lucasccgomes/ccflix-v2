/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "img/efect":"linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%)",
      }

    },
    colors: {
      "black":"#000",
      "black/40":"rgb(0 0 0 / 40%)",
      "white":"#fff",
      "bt/hover/red":"#C11119",
      "bt/primary/red":"#E50914"
    },
  },
  plugins: [],
}