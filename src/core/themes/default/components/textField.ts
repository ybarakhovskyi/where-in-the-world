import { basic } from '@/core/themes/default/colors';
import { borderRadius } from '@/core/themes/default/borderRadius';
import { elevation } from '@/core/themes/default/elevation';
import { spacing } from '@/core/themes/default/spacing';

export const textField = {
  color: basic.black,
  backgroundColor: basic.white,
  border: 'none',
  borderRadius: borderRadius.x2,
  elevation: elevation.M,
  offset: {
    M: `${spacing.x2} ${spacing.x8}`,
  },
};

export type TextFieldTheme = typeof textField;
