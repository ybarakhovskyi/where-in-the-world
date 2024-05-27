import { basic } from '@/core/themes/default/colors';

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
  backgroundColor: basic.white,
  color: basic.black,
};

export const selectDropdown: SelectDropdownTheme = {
  ...defaultSelectDropdown,
  backgroundColor: basic.white,
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
