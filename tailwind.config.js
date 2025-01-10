/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Add this to ensure Tailwind scans all relevant files
  ],
  theme: {
    extend: {
      screens: {
        // lg: '1024px'
      },
    },
  },
  plugins: [],
}

