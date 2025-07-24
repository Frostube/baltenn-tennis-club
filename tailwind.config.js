/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-green': '#B8E632', // More iPhone-friendly, less harsh
        'neon-green-bright': '#D7FF32', // Original for specific use cases
        'tennis-green': '#8FBC8F', // Softer tennis green
        'court-clay': '#CC7722'
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
} 