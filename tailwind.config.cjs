/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./index.css",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors:{
        'blueColor':'#2a68ff',
        'grayIsh':'#DDDDDE',
        'cardShadow':'#f7f8f9',
        'textColor':'#252b36',
        'greenColor':'#7B7D7B',
        'white':'#FFFFFF',
        'voilet':'#B483F9 '
      }
    },
  },
  plugins: [],
}
