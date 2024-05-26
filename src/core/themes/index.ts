import { LightTheme } from './light';
import { DarkTheme } from './dark';
import { ThemeVariant } from '@/core/themes/types';

const themes = {
  [ThemeVariant.DARK]: DarkTheme,
  [ThemeVariant.LIGHT]: LightTheme,
};

export { ThemeTypeContext } from './ThemeProvider';

export default themes;
