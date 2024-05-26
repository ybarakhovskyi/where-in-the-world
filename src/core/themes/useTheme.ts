import { useCallback, useContext } from 'react';
import { ThemeTypeContext } from '@/core/themes/ThemeProvider';
import { ThemeVariant } from '@/core/themes/types';

export const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeTypeContext);
  const oppositeTheme =
    theme === ThemeVariant.LIGHT ? ThemeVariant.DARK : ThemeVariant.LIGHT;
  const toggleTheme = useCallback(() => {
    setTheme(oppositeTheme);
  }, [oppositeTheme, setTheme]);

  return {
    theme,
    oppositeTheme,
    toggleTheme,
  };
};
