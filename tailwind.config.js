const colors = require('tailwindcss/colors')

module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#0B5184'
      },
      fontFamily: {
        'sans': ['PT Sans'],
      },
      container: {
        padding: '1rem',
        center: true,
      },
    },
  },
  variants: {},
  plugins: [],
}
