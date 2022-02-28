module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'white-1': '#fff',
        'red-1': '#e54750',
        'orange-1': '#f3723b',
        'blue-1': '#40A9FF'

      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
