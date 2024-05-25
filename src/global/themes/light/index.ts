import { DefaultTheme } from 'styled-components';
import { theme } from '@/global/themes/default';
import {
  basic,
  Colors,
  typography,
  TypographyColors,
} from '@/global/themes/default/colors';
import { button } from '@/global/themes/light/components/button';

const typographyColors: TypographyColors = {
  ...typography,
  heading: basic.black,
  common: basic.black,
};

const components = {
  button,
};

const colors: Colors = {
  ...theme.colors,
  typography: typographyColors,
  background: {
    main: basic.white,
    secondary: basic.white,
  },
};

export const LightTheme: DefaultTheme = {
  ...theme,
  colors,
  components,
};
