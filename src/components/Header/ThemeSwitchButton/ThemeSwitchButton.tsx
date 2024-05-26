// Vendors
import { FC } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa6';

// Components
import { Button } from '@/common/components/Button';

// Types
import { ButtonSize, ButtonVariant } from '@/common/components/Button/types';
import { Icon } from '@/common/components/Icon';
import { useTheme } from '@/core/themes/useTheme';
import { ThemeVariant } from '@/core/themes/types';

const themeIcons = {
  [ThemeVariant.LIGHT]: FaSun,
  [ThemeVariant.DARK]: FaMoon,
};

export const ThemeSwitchButton: FC = () => {
  const { oppositeTheme, toggleTheme } = useTheme();

  const buttonLabel = `${oppositeTheme.slice(0, 1).toUpperCase()}${oppositeTheme.slice(1)} Theme`;

  return (
    <Button
      label={buttonLabel}
      variant={ButtonVariant.SECONDARY}
      size={ButtonSize.SMALL}
      icon={<Icon icon={themeIcons[oppositeTheme]} size={16} />}
      onClick={toggleTheme}
    />
  );
};
