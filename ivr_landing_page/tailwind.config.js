/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,jsx}',"./index.html"], // Files where Tailwind classes are used
    theme: {
      extend: {
        colors: {
          primary: '#1D4ED8', // custom blue
          secondary: '#F59E0B', // custom orange
        },
        fontFamily: {
          // poppins: ['Poppins', 'sans-serif'],
          lexend: ['"Lexend Deca"', 'sans-serif'],
        },
      },
    },
    plugins: [],
  };

