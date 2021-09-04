module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        boxShadow: {
            default: '0px 10px 20px rgba(150, 150, 187, 0.1)',
        },
        fontSize: {
            '2rem': '2rem',
        },
    },
    minWidth: {
      '0': '0',
      '1/4': '25%',
      '1/5': '35%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
     }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
