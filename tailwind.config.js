/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      //  'primary': '#ffbe98',
      //  'primary-dark': '#a52a2a',
      },
      backgroundImage: {
        'hero-pattern': "url('./img/bg.jpg')",
      },
      fontFamily: {
        'sacramento': ["Sacramento","cursive"],
        'pacifico': ["Pacifico","cursive"],
        'Abril' : ["Abril Fatface","serif"],
        'Montserrat': ["Montserrat","sans-serif"],
        'Cormorant':["Cormorant Garamond","serif"]
      },
    },
  },


  plugins: [],
}

