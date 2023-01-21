/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#c3b9a8",
        secondary: "#e0d5c1",
        neutral: "#EBECF0",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
