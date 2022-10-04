/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./index.html", "./Js/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        heebo: ["Heebo", defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
