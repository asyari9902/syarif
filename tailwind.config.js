/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'back' : '#F6F1EE',
        'primary' : '#ED7D31',
        'secondary' : '#4F4A45',
        'list' : '#6C5F5B'
      }
    },
  },
  plugins: [],
}

