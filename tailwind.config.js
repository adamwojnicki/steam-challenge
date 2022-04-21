module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#17202D",
        darkGray: "#1B2837",
        darkBlue: "#214B6B",
        darkBlue2: "#1A3A53",
      },
      container: {
        center: true,
        padding: "2rem",
      },
      fontFamily: {
        'sans': ['Noto Sans', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
