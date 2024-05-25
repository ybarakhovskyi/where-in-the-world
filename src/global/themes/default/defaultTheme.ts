import { spacing } from '@/global/themes/default/spacing';
import { colors } from '@/global/themes/default/colors';
import { elevation } from '@/global/themes/default/elevation';
import { typography } from '@/global/themes/default/typography';
import { limits } from '@/global/themes/default/limits';
import { borderRadius } from '@/global/themes/default/borderRadius';
import { components } from '@/global/themes/default/components';

export const theme = {
  limits,
  spacing,
  colors,
  elevation,
  typography,
  borderRadius,
  components,
};

export type Theme = typeof theme;
