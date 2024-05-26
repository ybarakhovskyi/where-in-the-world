export const basic = {
  black: '#000',
  white: '#FDFDFD',
  outerSpace: '#2B3743',
  gunmetal: '#212E37',
};

export const typography = {
  common: basic.white,
  heading: basic.white,
};

export const background = {
  main: basic.gunmetal,
  secondary: basic.outerSpace,
};

export const colors = {
  basic,
  typography,
  background,
};

export type BasicColor = (typeof basic)[BasicColorKeys];
export type BasicColorKeys = keyof typeof basic;

export type TypographyColors = typeof typography;
export type BackgroundColors = typeof background;
export type Colors = typeof colors;
