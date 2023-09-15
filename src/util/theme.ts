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
const activeLabelStyles = {
  transform: 'scale(0.85) translateY(-24px)',
};

export const themeVars = {
  layerStyles: {
    'funtime-z1': {
      bg: 'white',
      borderRadius: '4px',
      px: '20px', // TODO do we want these here?
      py: '12px',
    },
    'funtime-z2': {
      bg: 'white',
      border: '1px solid',
      borderColor: 'gray.200',
      borderRadius: '4px',
      px: '20px',
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
        focusBorderColor: 'primary',
      },
    },
    Select: {
      defaultProps: {
        focusBorderColor: 'primary',
      },
    },
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                ...activeLabelStyles,
              },
            },
            'input:not(:placeholder-shown) + label, .chakra-select__wrapper + label': {
              ...activeLabelStyles,
            },
            label: {
              top: 1,
              left: 0,
              zIndex: 2,
              position: 'absolute',
              backgroundColor: 'white',
              pointerEvents: 'none',
              mx: 3,
              px: 1,
              my: 2,
              transformOrigin: 'left top',
              fontWeight: 400,
              color: 'gray.400',
              fontFamily: 'body',
              fontSize: 14,
            },
          },
        },
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
