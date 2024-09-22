/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {

    },
    colors: {
      primary: "#EEF5FF",
      secondary: "#a9c0d6",
      third: "#bbbbbb",
      ...colors,

    },
  },
  plugins: [],
}