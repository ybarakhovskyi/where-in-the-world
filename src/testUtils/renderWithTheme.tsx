import { FC, PropsWithChildren, ReactElement } from 'react';
import { render, RenderResult } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme as defaultTheme } from '@/core/themes/default';

const ThemeProviderWrapper: FC<PropsWithChildren> = ({ children }) => (
  <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
);

export function renderWithTheme(ui: ReactElement): RenderResult {
  return render(ui, { wrapper: ThemeProviderWrapper });
}
