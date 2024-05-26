import { ButtonHTMLAttributes, FC } from 'react';
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
  icon,
  variant = ButtonVariant.PRIMARY,
  label,
  ...props
}) => (
  <StyledButton size={size} variant={variant} {...props}>
    {icon}

    {label}
  </StyledButton>
);
