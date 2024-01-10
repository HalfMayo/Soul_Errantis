/** @type {import('tailwindcss').Config} */
/*eslint-env node*/
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      'white': '#ffffff',
      'outline': '#79747E',
      'main': '#0d1e32',
      'accent': '#DEB074',
      'disabled': '#D0C9D4'
    },
    extend: {},
  },
  plugins: [],
}