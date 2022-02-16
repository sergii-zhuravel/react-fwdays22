import themeObject from "./adhd-myway-theme";

export type DefaultThemeObject = Omit<typeof themeObject, "screens"> & {
  screens: {
    [key: string]: number;
  };
};

export interface IColor {
  [colorType: string]: string;
}

export interface IColors {
  brand: IColor;
  feedback: IColor;
  ui: IColor;
}
