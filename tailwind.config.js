/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'radial-orange-yellow': 'radial-gradient(circle, #FFA500, #FFFF00, #FFA500)',
      }
    }
  },
  plugins: [],
}