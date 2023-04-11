/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {},

    borderRadius: {
      none: '0',
      sm: '0.125rem',
      xs: '0.25rem',
      md: '0.375rem',
      DEFAULT: '0.5rem',
      full: '9999px',
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],

  daisyui: {
    themes: ['light'],
  },
}
