module.exports = {
  purge: ["./src/pages/**/*.tsx", "./src/components/**/*.tsx"],
  theme: {
    fontFamily: {
      body: ["Roboto", "sans-serif"],
    },
    extend: {
      margin: {
        img: "0 4px 4px",
      },
      width: {
        "img-1/2": "calc(50% - 16px)",
      },
    },
  },
  variants: {
    borderWidth: ["responsive", "hover", "focus"],
    borderStyle: ["responsive", "hover", "focus"],
    borderColor: ["responsive", "hover", "focus", "active", "group-hover"],
  },
};
