import { ThemeSupa, ThemeVariables } from "@supabase/auth-ui-shared";
import theme, { themeVars } from "@src/util/theme";
import _ from "lodash";

export function useAuthTheme(): typeof ThemeSupa {
  const defaultThemeExtension = {
    colors: {
      brand: themeVars.colors.primary,
      inputBackground: "white",
      brandAccent: themeVars.colors.primary,
    },
    fontSizes: {
      baseBodySize: "16px",
      baseButtonSize: "16px",
      baseInputSize: "16px",
      baseLabelSize: "16px",
    },
    radii: {
      inputBorderRadius: "8px",
    },
  } satisfies ThemeVariables;

  return _.merge({}, ThemeSupa, { default: defaultThemeExtension });
}
