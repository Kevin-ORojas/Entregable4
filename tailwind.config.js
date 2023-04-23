/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "purple-p": "#555A88",
        "red-p": "#D85D5D"
      }
    },
  },
  plugins: [],
}