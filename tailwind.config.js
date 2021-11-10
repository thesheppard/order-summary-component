module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          vpale: 'hsl(225, 100%, 98%)',
          pale: 'hsl(225, 100%, 94%)',
          DEFAULT: 'hsl(245, 75%, 52%)',
          desat: 'hsl(224, 23%, 55%)',
          dark: 'hsl(223, 47%, 23%)'
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
