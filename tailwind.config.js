/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./pages/**/*.{js,jsx,ts,tsx}", "./icons/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    container: {
      center: true,
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
        "2xl": "1240px",
      },
    },
    extend: {},
  },
  plugins: [],
}
