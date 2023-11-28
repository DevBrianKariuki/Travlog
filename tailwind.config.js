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
        black: '#1e1e1e',
        blue: '#5D50C6'
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        circular: ["Circular Std", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}