/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: "jit",
    content: [
      './pages/**/*.{js,jsx,ts,tsx}',
      './components/**/*.{js,jsx,ts,tsx}',
    ],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {},
  },

  plugins: [],
};
