'use client';

// Vendors
import { FC, PropsWithChildren } from 'react';

// Components
import StyledComponentsRegistry from '@/lib/StyledComponentsRegistry';
import { ThemeProvider } from '@/core/themes/ThemeProvider';
import GlobalStyles from '@/core/GlobalStyles';

export const StylesProvider: FC<PropsWithChildren> = ({ children }) => (
  <StyledComponentsRegistry>
    <ThemeProvider>
      <GlobalStyles />

      {children}
    </ThemeProvider>
  </StyledComponentsRegistry>
);
