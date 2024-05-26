import { basic } from '@/core/themes/default/colors';
import { borderRadius } from '@/core/themes/default/borderRadius';
import { spacing } from '@/core/themes/default/spacing';
import { elevation } from '@/core/themes/default/elevation';

export const button = {
  color: basic.white,
  backgroundColor: basic.outerSpace,
  borderRadius: borderRadius.x1,
  border: 'none',
  offset: {
    L: `${spacing.x4} ${spacing.x12}`,
    S: `${spacing.x1} ${spacing.x4}`,
    XS: `${spacing.x1} ${spacing.x2}`,
  },
  elevation: {
    L: elevation.L,
    S: elevation.M,
    XS: elevation.M,
  },
};
