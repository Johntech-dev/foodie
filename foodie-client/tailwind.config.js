/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
       colors: {
        "green" : "#39DB4A",
        "red" : "#FF6868",
        "secondary" : "#555",
        "primaryBG" : "#FCFCFC",
       }
    },
  },
  plugins: [require("daisyui")],
}

