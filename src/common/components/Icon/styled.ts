import styled, { DefaultTheme } from 'styled-components';
import { IconProps } from '@/common/components/Icon/types';
import { Spacing } from '@/core/themes/default/spacing';

const getIconOffset = (
  theme: DefaultTheme,
  horizontalOffset?: Spacing,
  verticalOffset?: Spacing,
) => {
  const { spacing } = theme;
  const horizontalSpacing = horizontalOffset
    ? spacing[horizontalOffset]
    : spacing.x1;
  const verticalSpacing = verticalOffset ? spacing[verticalOffset] : spacing.x1;

  return `${verticalSpacing} ${horizontalSpacing}`;
};

export const StyledIconWrapper = styled.div<Omit<IconProps, 'icon'>>`
  line-height: 1;
  font-size: 1px;
  padding: ${({ theme, horizontalOffset, verticalOffset }) =>
    getIconOffset(theme, horizontalOffset, verticalOffset)};
`;
