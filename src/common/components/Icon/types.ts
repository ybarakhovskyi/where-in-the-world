import { IconBaseProps, IconType } from 'react-icons';
import { Spacing } from '@/core/themes/default/spacing';

export interface IconProps extends IconBaseProps {
  icon: IconType;
  horizontalOffset?: Spacing;
  verticalOffset?: Spacing;
}
