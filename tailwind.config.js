/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        pink:'#F85E9F',
        yellow:'#FACD49',
        black: '#1e1e1e'
      }
    },
  },
  plugins: [],
}