import { basic, typography } from '@/core/themes/default/colors';
import { borderRadius } from '@/core/themes/default/borderRadius';
import { elevation } from '@/core/themes/default/elevation';
import { spacing } from '@/core/themes/default/spacing';

export const selectTrigger = {
  backgroundColor: basic.white,
  borderRadius: borderRadius.x2,
  border: 'none',
  elevation: {
    M: elevation.M,
  },
  color: typography.common,
  offset: {
    M: `${spacing.x3} ${spacing.x6}`,
  },
};

export const selectDropdown = {
  backgroundColor: basic.white,
  borderRadius: borderRadius.x2,
  elevation: {
    M: elevation.M,
  },
  offset: {
    M: `${spacing.x2} 0`,
  },
};

export const selectDropdownItem = {
  backgroundColor: selectDropdown.backgroundColor,
  offset: {
    M: `${spacing.x1} ${spacing.x6}`,
  },
};

export const select = {
  selectTrigger,
  selectDropdown,
  selectDropdownItem,
};

export type SelectTheme = typeof select;
export type SelectTriggerTheme = typeof selectTrigger;
export type SelectDropdownTheme = typeof selectDropdown;
export type SelectDropdownItemTheme = typeof selectDropdownItem;
