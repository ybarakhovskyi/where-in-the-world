import styled, { DefaultTheme } from 'styled-components';
import Color from 'color';
import {
  ButtonProps,
  ButtonSize,
  ButtonVariant,
} from '@/common/components/Button/types';

const getButtonOffsets = (theme: DefaultTheme, size?: ButtonSize) => {
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

export const StyledButton = styled.button<Omit<ButtonProps, 'label' | 'icon'>>`
  align-items: center;
  background-color: ${({ theme }) => theme.components.button.backgroundColor};
  border-radius: ${({ theme }) => theme.components.button.borderRadius};
  border: ${({ theme }) => theme.components.button.border};
  box-shadow: ${({ theme, variant }) => getButtonElevation(theme, variant)};
  color: ${({ theme }) => theme.components.button.color};
  cursor: pointer;
  display: flex;
  line-height: 1;
  padding: ${({ theme, size }) => getButtonOffsets(theme, size)};
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) =>
      Color(theme.components.button.backgroundColor).darken(0.1).toString()};
  }
`;
