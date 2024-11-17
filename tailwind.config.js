const animate = require("tailwindcss-animated");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      fontFamily: {
        Vazir: ["Vazir"],
      },
    },
  },
  plugins: [animate],
};
