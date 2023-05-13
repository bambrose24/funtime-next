import {
  extendTheme,
  ThemeConfig,
  ThemeOverride,
  ThemingProps,
} from "@chakra-ui/react";

const themeConfig: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

export const themeVars = {
  layerStyles: {
    "funtime-card": {
      bg: 'white',
      borderRadius: '4px',
      px: '12px', // TODO do we want these here?
      py: '12px',
    }
  },
  colors: {
    primary: "#2B6CB0",
    error: "#C53030",
    pickCorrect: "rgba(51, 170, 51, .5)",
    pickWrong: "rgba(252, 0, 0, .6)",
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
} satisfies ThemeOverride;

const theme = extendTheme({
  config: themeConfig,
  ...themeVars,
});

export default theme;
