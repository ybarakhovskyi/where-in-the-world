import { FC, useCallback, useContext } from 'react';
import { ThemeTypeContext } from '@/global/themes';
import { ThemeVariant } from '@/global/themes/types';
import { Button } from '@/common/components/Button';
import { ButtonSize, ButtonVariant } from '@/common/components/Button/types';

export const ThemeSwitchButton: FC = () => {
  const { theme, setTheme } = useContext(ThemeTypeContext);

  const handleOnClick = useCallback(() => {
    let newThemeType =
      theme === ThemeVariant.LIGHT ? ThemeVariant.DARK : ThemeVariant.LIGHT;

    setTheme(newThemeType);
  }, [setTheme, theme]);

  return (
    <Button
      label="Dark Theme"
      variant={ButtonVariant.SECONDARY}
      size={ButtonSize.SMALL}
      onClick={handleOnClick}
    />
  );
};
