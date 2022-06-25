/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}","./public/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      'screens':{
        'xs': '0px',
      }
    },
  },
  plugins: [],
}
