import { spacing } from '@/core/themes/default/spacing';
import { colors } from '@/core/themes/default/colors';
import { elevation } from '@/core/themes/default/elevation';
import { typography } from '@/core/themes/default/typography';
import { limits } from '@/core/themes/default/limits';
import { borderRadius } from '@/core/themes/default/borderRadius';
import { components } from '@/core/themes/default/components';

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
