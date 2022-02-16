import { useContext } from "react";
import { ThemeContext } from "@storybook/theming";
import themeObject from "./adhd-myway-theme";
import media from "use-media";
import globalStyles from "./global-styles";
import { DefaultThemeObject } from "common/theme/adhd-myway-theme.intrerface";

const useTheme = () => useContext(ThemeContext);

const getTheme = (): any => {
  const { screens, ...themeValues }: DefaultThemeObject = themeObject;
  const breakpointSizes = Object.keys(screens).reduce((accum, key: string) => {
    const value = media({ maxWidth: screens[key] });
    return {
      ...accum,
      [key]: value,
    };
  }, {});

  return {
    ...themeValues,
    screens: breakpointSizes,
  };
};

export { getTheme, useTheme, globalStyles };
