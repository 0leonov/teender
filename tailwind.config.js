const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.js',
  ],
  theme: {
    extend: {},
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
    colors: {
      white: '#ffffff',
      custom: {
        900: '#18122B',
        800: '#172439',
        700: '#172439',
        600: '#172439',
        500: '#172439',
        400: '#172439',
        300: '#172439',
        200: '#172439'
      },

      background: '#F8F7FC',

      neutral: {
        100: '#6D6D8A',
        400: '#9292A9',
        500: '#F1F1F4', // subtitle
        800: '#262630', // title
      },
      purple: {
        100: '#F3EFFE',
        600: '#4D11F3',
        700: '#3409AC',
      },
      red: {
        50: '#FFF7F7',
        500: '#E00C0C',
      },
    },
  },
  plugins: [],
}
