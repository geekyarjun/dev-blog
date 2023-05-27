import { config } from "./lib/server/config";
import { FONTS_SANS, FONTS_SERIF } from "./consts";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: ["./pages/**/*.js", "./components/**/*.js", "./layouts/**/*.js"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        day: {
          DEFAULT: config.lightBackground || "#ffffff",
        },
        night: {
          DEFAULT: config.darkBackground || "#111827",
        },
        lightBlack: "#333333",
        lightGray: "#666666",
      },
      fontFamily: {
        sans: FONTS_SANS,
        serif: FONTS_SERIF,
        noEmoji: [
          '"IBM Plex Sans"',
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
      },
      keyframes: {
        gitDpShow: {
          "0%": { borderWidth: "37px" },
          "100%": { borderWidth: "3px" },
        },
      },
      animation: {
        gitDpShow: "gitDpShow .3s linear forwards",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
