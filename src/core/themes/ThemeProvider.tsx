'use client';

import { createContext, FC, PropsWithChildren, useMemo, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import themes from './';
import { ThemeVariant } from './types';

type ThemeContext = {
  theme: ThemeVariant;
  setTheme: (theme: ThemeVariant) => void;
};

export const ThemeTypeContext = createContext<ThemeContext>({
  theme: ThemeVariant.DARK,
  setTheme: (theme: ThemeVariant) => undefined,
});

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeVariant>(ThemeVariant.DARK);
  const themeContextValue = useMemo(
    (): ThemeContext => ({
      theme,
      setTheme,
    }),
    [theme],
  );

  return (
    <ThemeTypeContext.Provider value={themeContextValue}>
      <StyledThemeProvider theme={themes[theme]}>
        {children}
      </StyledThemeProvider>
    </ThemeTypeContext.Provider>
  );
};
