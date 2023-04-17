/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],

  daisyui: {
    themes: [
      {
        pastel: {
          ...require('daisyui/src/colors/themes')['[data-theme=pastel]'],
          '--rounded-box': '1rem',
          '--rounded-btn': '0.5rem',
        },
      },
    ],
  },
}
