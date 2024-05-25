import { basic } from '@/global/themes/default/colors';
import { borderRadius } from '@/global/themes/default/borderRadius';
import { spacing } from '@/global/themes/default/spacing';
import { elevation } from '@/global/themes/default/elevation';

export const button = {
  color: basic.black,
  backgroundColor: basic.white,
  borderRadius: borderRadius.x1,
  border: 'none',
  offset: {
    L: `${spacing.x4} ${spacing.x12}`,
    S: `${spacing.x2} ${spacing.x6}`,
    XS: `${spacing.x1} ${spacing.x4}`,
  },
  elevation: {
    L: elevation.L,
    S: elevation.M,
    XS: elevation.M,
  },
};
