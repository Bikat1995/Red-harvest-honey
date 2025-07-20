/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        karla: ['Karla', 'sans-serif'],
        quicksand: ["Quicksand", 'sans-serif']
      },
    },
  },
  plugins: [],
}
