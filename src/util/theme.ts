import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const themeConfig: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};
const theme = extendTheme({
  config: themeConfig,
  colors: {
    primary: "#2B6CB0",
    error: "#C53030",
  },
  components: {
    Button: {
      variants: {
        "funtime-primary": {
          bg: "primary",
          color: "white",
        },
        "funtime-error": {
          bg: "error",
          color: "white",
          _hover: {
            _disabled: {
              bg: "error",
              opacity: 0.3,
            },
          },
        },
      },
      defaultProps: {
        variant: "primary",
      },
    },
  },
});

export default theme;
