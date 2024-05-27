import { background, basic } from '@/core/themes/default/colors';

import {
  selectTrigger as defaultSelectTrigger,
  selectDropdown as defaultSelectDropdown,
  selectDropdownItem as defaultSelectDropdownItem,
  SelectTriggerTheme,
  SelectDropdownTheme,
  SelectDropdownItemTheme,
  SelectTheme,
} from '@/core/themes/default/components/select';

export const selectTrigger: SelectTriggerTheme = {
  ...defaultSelectTrigger,
  backgroundColor: background.secondary,
  color: basic.white,
};

export const selectDropdown: SelectDropdownTheme = {
  ...defaultSelectDropdown,
  backgroundColor: background.secondary,
};

export const selectDropdownItem: SelectDropdownItemTheme = {
  ...defaultSelectDropdownItem,
  backgroundColor: selectDropdown.backgroundColor,
};

export const select: SelectTheme = {
  selectTrigger,
  selectDropdown,
  selectDropdownItem,
};
