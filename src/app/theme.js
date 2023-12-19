import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  // colors: {
  //   brand: {
  //     50: "#635985",
  //     100: "#443C68",
  //     200: "#393053",
  //     300: "#18122B",
  //   },
  // },
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
});

export default theme;
