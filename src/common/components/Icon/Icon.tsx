// Vendors
import { FC } from 'react';

// Types
import { IconProps } from '@/common/components/Icon/types';
import { StyledIconWrapper } from '@/common/components/Icon/styled';

export const Icon: FC<IconProps> = ({
  icon: IconComponent,
  horizontalOffset,
  verticalOffset,
  ...props
}) => (
  <StyledIconWrapper>
    <IconComponent size={16} {...props} />
  </StyledIconWrapper>
);
