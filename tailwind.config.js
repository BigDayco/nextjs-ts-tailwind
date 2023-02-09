/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        custom: '0 0 15px rgb(255 255 255)',
      }
    },
  },
  plugins: [],
}
