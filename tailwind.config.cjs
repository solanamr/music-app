/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: true,
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      mlg: "1130px",
      xl: "1440px",
      "2xl": "1660px",
    },
    colors: {
      white: "#fff",
      blue: "#0FA0EE",
      lightGrey: "#9FA2B4",
      purple: "#1b195b",
      black: "#000",
      red: "#d80027",
      yellow: "#ffda44",

    },
    fontFamily: {
      sans: ["Monserrat", "sans-serif !important"],
    },
    extend: {},
  },
  plugins: [],
}

