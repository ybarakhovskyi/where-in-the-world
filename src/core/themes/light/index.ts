import { DefaultTheme } from 'styled-components';
import { theme } from '@/core/themes/default';
import {
  basic,
  Colors,
  typography,
  TypographyColors,
} from '@/core/themes/default/colors';
import { components } from '@/core/themes/light/components';

const typographyColors: TypographyColors = {
  ...typography,
  heading: basic.black,
  common: basic.black,
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
