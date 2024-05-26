import { basic } from '@/core/themes/default/colors';
import { textField as defaultTextField, TextFieldTheme } from '@/core/themes/default/components/textField';

export const textField: TextFieldTheme = {
  ...defaultTextField,
  color: basic.white,
  backgroundColor: basic.outerSpace,
};
