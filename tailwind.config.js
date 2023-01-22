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
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        appear: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        heart: {
          "0%": { transform: "scale(0.5)" },
          "10%": { transform: "scale(0.7)" },
          "30%": { transform: "scale(0.9)" },
          "50%": { transform: "scale(1.1)" },
          "80%": { transform: "scale(1.2)" },
          "100%": { transform: "scale(1.0)" },
        },
      },
      animation: {
        heart: "heart 0.2s ease-in-out",
        appear: "appear 0.5s ease-in-out",
        wiggle: "wiggle 1s ease-in-out infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
