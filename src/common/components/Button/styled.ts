import styled, { DefaultTheme } from 'styled-components';
import Color from 'color';
import {
  ButtonProps,
  ButtonSize,
  ButtonVariant,
} from '@/common/components/Button/types';

const getButtonSize = (theme: DefaultTheme, size?: ButtonSize) => {
  const { button } = theme.components;

  switch (size) {
    case ButtonSize.LARGE:
      return button.offset.L;
    case ButtonSize.SMALL:
      return button.offset.S;
    default:
      return button.offset.L;
  }
};

const getButtonElevation = (theme: DefaultTheme, variant?: ButtonVariant) => {
  const { button } = theme.components;

  switch (variant) {
    case ButtonVariant.PRIMARY:
      return button.elevation.S;
    case ButtonVariant.SECONDARY:
      return 'none';
    default:
      return button.elevation.L;
  }
};

export const StyledButton = styled.button<Omit<ButtonProps, 'label'>>`
  border: ${({ theme, size }) => theme.components.button.border};
  color: ${({ theme }) => theme.components.button.color};
  border-radius: ${({ theme }) => theme.components.button.borderRadius};
  background-color: ${({ theme }) => theme.components.button.backgroundColor};
  box-shadow: ${({ theme, variant }) => getButtonElevation(theme, variant)};
  padding: ${({ theme, size }) => getButtonSize(theme, size)};
  line-height: 1;
  transition: 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) =>
      Color(theme.components.button.backgroundColor).darken(0.1).toString()};
  }
`;
