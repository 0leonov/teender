const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.js',
  ],
  theme: {
    extend: {},

    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      'xs': '0.25rem',
      'md': '0.375rem',
      DEFAULT: '0.5rem',
      'full': '9999px',
    },

    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },

    colors: {
      custom: colors.gray,

      white: colors.white,

      transparent: colors.transparent,

      background: '#F8F7FC',

      neutral: {
        50: '#f8f8f9',
        100: '#F1F1F4',
        200: '#E5E5EA',
        400: '#9292A9',
        500: '#6D6D8A',
        700: '#373745',
        800: '#262630',
      },

      purple: {
        100: '#F3EFFE',
        300: '#c7b4fb',
        600: '#4D11F3',
        700: '#3409AC',
        800: '#26077e',
      },

      red: {
        50: '#FFF7F7',
        100: '#feecec',
        500: '#E00C0C',
      },

      blue: {
        500: '#1666F3',
      }
    },
  },
  plugins: [],
}
