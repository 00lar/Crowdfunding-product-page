/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "Primary1": "hsl(176, 50%, 47%)",
        "Primary2": "hsl(176, 72%, 28%)",
        "Neutral1": "hsl(0, 0%, 0%)",
        "Neutral2": "hsl(0, 0%, 48%)"
      }
    },
  },
  plugins: [],
}

