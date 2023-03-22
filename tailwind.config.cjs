/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: "#1C1939",
        grey: "#F7F7F7",
        clay: "#2C2948",
        lightpurple: "#7165E3"
      },   
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
      }
    },
  },
  plugins: [],
};