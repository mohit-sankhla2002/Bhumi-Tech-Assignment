/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{jsx, js}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#3187ED",
        lightBlue: "#00C6D7",
        lightGray: "#F8F8F8",
      },
      padding: {
        section: "100px",
      },
      boxShadow: {
        bs1: "0px 11px 27px 0px #00C6D759"
      }
    },
  },
  plugins: [],
};

