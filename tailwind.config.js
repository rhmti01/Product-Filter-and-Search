/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", " ./src/js/theme.js "],
  theme: {
    extend: {
      colors: {
        bakcground: '#fff',
        textF: '#1A191F',
        textS: '#D9D9D9',
      },
      fontFamily: {
        open: ["Open Sans "]
      },
      screens: {
        'dd':'290px',
        'xx':'372px',
        'ss': '501px', 
        'ww':'1250px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}