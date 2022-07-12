import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  style: {
    global: {
      "*": {
        overflowX: "hidden",
        fontFamily: "Titillium Web",
        padding: 0,
        margin: 0,
        boxSizing: "border-box",
        "-webkit-font-smoothing": "antialiased",
      },
    },
  },
  colors: {
    font: "#333333",
    white: "#FFFFFF",

    dark_gray: "#828282",
    light_gray: "#F2F2F2",
    red: "#E2350D",

    fire: "#EE7F33",
    normal: "#A9A778",
    water: "#6890F0",
    grass: "#78C84F",
    ice: "#98D8D7",
    poison: "#A040A1",
    ground: "#E0C069",
    flying: "#A790EF",
    bug: "#A8B821",
    rock: "#B6A037",
    ghost: "#705797",
    dragon: "#724EF9",
    dark: "#6F5848",
    steel: "#B8B8D0",
    fairy: "#F4C8E2",
    psychic: "#E95587",
    electric: "#F8CF32",
    fighting: "#C03228",

    redScheme: {
      100: "#E2350D",
      200: "#E2350D",
      300: "#E2350D",
      400: "#E2350D",
      500: "#E2350D",
      600: "#E2350D",
      700: "#E2350D",
      800: "#E2350D",
      900: "#E2350D",
    },
  },
});
