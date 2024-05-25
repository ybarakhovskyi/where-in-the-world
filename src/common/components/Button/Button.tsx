import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import {
  ButtonProps,
  ButtonSize,
  ButtonVariant,
} from '@/common/components/Button/types';
import { StyledButton } from '@/common/components/Button/styled';

export const Button: FC<
  ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>
> = ({
  size = ButtonSize.LARGE,
  icon = null,
  variant = ButtonVariant.PRIMARY,
  label,
  ...initialProps
}) => (
  <StyledButton size={size} variant={variant} icon={icon} {...initialProps}>
    {label}
  </StyledButton>
);
