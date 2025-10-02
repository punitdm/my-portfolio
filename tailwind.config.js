// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // scan your components
  ],
    theme: {
    extend: {
        fontFamily: {
        sans: ["var(--font-geist)", "sans-serif"],
        },
        colors: {
        darkPurple: "#190F24",
        mainPurple: "#472464",
        secondaryPurple: "#A173CC",
        },
    },
    },
  plugins: [],
};
