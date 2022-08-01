import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const themeConfig: ThemeConfig = {
  initialColorMode: "light",
};
const theme = extendTheme({
  config: themeConfig,
  layerStyles: {
    light: {
      color: "white",
    },
    dark: {
      color: "white",
    },
  },
});

export default theme;
