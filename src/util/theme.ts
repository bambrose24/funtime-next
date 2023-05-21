import {
  extendTheme,
  ThemeConfig,
  ThemeOverride,
  ThemingProps,
  withDefaultColorScheme,
} from '@chakra-ui/react';

const themeConfig: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

export const themeVars = {
  layerStyles: {
    'funtime-card': {
      bg: 'white',
      borderRadius: '4px',
      px: '12px', // TODO do we want these here?
      py: '12px',
    },
  },
  colors: {
    primary: '#38A169',
    'primary.hover': '#276749',
    error: '#C53030',
  },
  components: {
    Button: {
      variants: {
        'funtime-primary': {
          bg: 'primary',
          color: 'white',
        },
        'funtime-error': {
          bg: 'error',
          color: 'white',
          _hover: {
            _disabled: {
              bg: 'error',
              opacity: 0.3,
            },
          },
        },
      },
      defaultProps: {
        variant: 'primary',
      },
    },
    Input: {
      defaultProps: {
        focusBorderColor: 'green.500',
      },
    },
  },
};
// } satisfies ThemeOverride;

const theme = extendTheme(
  {
    config: themeConfig,
    ...themeVars,
  },
  withDefaultColorScheme({
    colorScheme: 'green',
    components: ['Input', 'Form', 'Radio', 'Button', 'Tabs'],
  })
);

export default theme;
