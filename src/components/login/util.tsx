import {useTheme} from '@chakra-ui/react';
import theme, {themeVars} from '@src/util/theme';
import {ThemeSupa} from '@supabase/auth-ui-react';
import {ThemeVariables} from '@supabase/auth-ui-react/dist/esm/common/theming';
import _ from 'lodash';

export function useAuthTheme(): typeof ThemeSupa {
  const defaultThemeExtension: ThemeVariables = {
    colors: {
      brand: themeVars.colors.primary,
      inputBackground: 'white',
      brandAccent: themeVars.colors.primary,
    },
    fontSizes: {
      baseBodySize: '16px',
      baseButtonSize: '16px',
      baseInputSize: '16px',
      baseLabelSize: '16px',
    },
    radii: {
      inputBorderRadius: '8px',
    },
  };

  return _.merge({}, ThemeSupa, {default: defaultThemeExtension});
}
