/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./js/**/*.{html,js}"
  ],
  theme: {
    extend: {
      fontFamily:{
        'heading': ['"Karma", sans-serif'],
        'body': ['"Poppins", sans-serif'],
      },
      colors:{
        '--clr-Keppel': '#38ada9',
        '--clr-Outer_Space': '#a25f4b',
      },

      backgroundImage: {
        // 'vimos': "linear-gradient(60deg,rgba(5, 8, 39, 0.5),rgba(5, 8, 39, 0.7)),url(./asset/projects/vimos.png)",
        'vimos': "linear-gradient(60deg,rgba(5, 8, 39, 0.5),rgba(5, 8, 39, 0.7)),url('../asset/projects/vimos.png')",
        'coffee-style': "linear-gradient(60deg,rgba(5, 8, 39, 0.5),rgba(5, 8, 39, 0.7)),url('../asset/projects/coffeeStyle.png')",
      
      },
    }
  },

  plugins: [],
}
