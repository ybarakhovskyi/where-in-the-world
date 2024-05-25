import { spacing } from '@/global/themes/default/spacing';
import { colors } from '@/global/themes/default/colors';
import { elevation } from '@/global/themes/default/elevation';
import { typography } from '@/global/themes/default/typography';
import { limits } from '@/global/themes/default/limits';

export const theme = {
  limits,
  spacing,
  colors,
  elevation,
  typography,
};

export type Theme = typeof theme;
