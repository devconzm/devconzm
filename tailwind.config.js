// See https://tailwindcss.com/docs/configuration for details

module.exports = {
  theme: {
    fontFamily: {
      display: ["source sans", "avenir", "gotham", "century"],
      body: ["source sans", "avenir", "gotham", "century"],
      avenir: ["avenir"],
      ubuntu: ["ubuntu"],
      century: ["century"]
    },
    prefix: "oc-",
    extend: {
      spacing: {
        "oc-10": "10px"
      },
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        "dark-blue": {
          primary: "#420042",
          100: "#96ADDD",
          200: "#5A75AB",
          300: "#445984",
          400: "#283756",
          500: "#C73656",
          600: "#283757"
        },
        orange: {
          primary: "#00CCFF",
          100: "#FFE0BC",
          200: "#F5C388",
          300: "#F9AA4F",
          400: "#F7931E"
        },
        gray: {
          primary: "#C73656",
          100: "#F0F0F0",
          200: "#D6D6D6"
        },
        "light-green": {
          primary: "#F1F2D3",
          100: "#FCFDED",
          200: "#D7D9B4"
        },
        "dark-green": "#B2B396",
        "trans-gray": "rgba(10, 34, 55, 0.5)",
        "circle-gray": "#E7ECF8",
        brown: "#440101",
        "white-smoke": "#F4F4F4"
      },
      fontSize: {
        h1: "2.25rem",
        h2: "2rem",
        h3: "1.75rem",
        h4: "1.5rem",
        h5: "1.25rem",
        h6: "1rem",
        spo: "1.75rem",
        sec: "3.75rem"
      },
      lineHeight: {
        text: "22px"
      }
    }
  },
  variants: {},
  plugins: []
};
