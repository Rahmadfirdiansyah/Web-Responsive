/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppin: ["Poppins"],
      },
      colors: {
        'tua1': "#003C43",
        'tua2': "#135D66",
        'tua3': "#77B0AA",
        'tua4': "#E3FEF7",
      },
    },
  },
  plugins: [require("daisyui")],
};
