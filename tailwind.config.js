module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        blue: {
          light: "#0a81ab",
          dark: "#0c4271",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
