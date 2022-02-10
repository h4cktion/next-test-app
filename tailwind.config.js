module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "header-blue": "#004369",
        "bgBlue": "#0079BF",
     },
     keyframes: {
      "fade-in-down": {
        "0%": {
          opacity: "0",
          transform: "translateY(100px)",
        },
        "100%": {
          opacity: "1",
          transform: "translateY(0)",
        },
      },
      "fade-in-out": {
        "0%": {
          opacity: "1",
          transform: "translateY(0)",
        },
        "100%": {
          opacity: "0",
          transform: "translateY(-100px)",
        },
      },
    },
    animation: {
      "fade-in-down": "fade-in-down 0.5s ease-out",
      "fade-in-out": "fade-in-out 0.5s forwards",
    },
    },
  },
  plugins: [],
};
