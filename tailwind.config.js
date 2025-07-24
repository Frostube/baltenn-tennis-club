/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-green': '#D7FF32',
        'neon-green-readable': '#32CD32', // LimeGreen - for text on white backgrounds
        'tennis-green': '#9ACD32',
        'court-clay': '#CC7722'
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
} 