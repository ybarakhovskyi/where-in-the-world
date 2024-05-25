import { ReactNode } from 'react';

export enum ButtonSize {
  LARGE = 'large',
  SMALL = 'small',
}

export enum ButtonVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

export type ButtonProps = {
  size?: ButtonSize;
  variant?: ButtonVariant;
  icon?: ReactNode;
  label: string;
};
