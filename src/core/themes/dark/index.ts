// Vendors
import { DefaultTheme } from 'styled-components';

// Modules
import { theme } from '../default';
import {
  basic,
  Colors,
  typography,
  TypographyColors,
} from '@/core/themes/default/colors';
import { components } from '@/core/themes/dark/components';

const typographyColors: TypographyColors = {
  ...typography,
  heading: basic.white,
};

const colors: Colors = {
  ...theme.colors,
  typography: typographyColors,
};

export const DarkTheme: DefaultTheme = {
  ...theme,
  colors,
  components,
};
