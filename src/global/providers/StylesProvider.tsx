'use client';

// Vendors
import { FC, PropsWithChildren } from 'react';

// Components
import StyledComponentsRegistry from '@/lib/StyledComponentsRegistry';
import { ThemeProvider } from '@/global/themes/ThemeProvider';
import GlobalStyles from '@/global/GlobalStyles';

export const StylesProvider: FC<PropsWithChildren> = ({ children }) => (
  <StyledComponentsRegistry>
    <ThemeProvider>
      <GlobalStyles />

      {children}
    </ThemeProvider>
  </StyledComponentsRegistry>
);
