/** @type {import('tailwindcss').Config} */
module.exports = {
  // A linha abaixo diz: "Olhe todos os arquivos HTML e JS nesta pasta e subpastas"
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'brand-red': '#a42f22',
      },
      fontFamily: {
        'sans': ['Open Sans', 'sans-serif'],
        'serif': ['Roboto Slab', 'serif'],
      },
    },
  },
  plugins: [],
}
