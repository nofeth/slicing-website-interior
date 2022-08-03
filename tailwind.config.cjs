/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{css,js,jsx,ts}"],
  theme: {
    container: {
      center : true,
    },
    extend: {
      fontFamily: {
        "RobotoSlab" : "Roboto Slab",
      },
    },
  },
  plugins: [],
}
