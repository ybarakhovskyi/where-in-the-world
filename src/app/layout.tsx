import { PropsWithChildren } from 'react';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from '@/lib/StyledComponentsRegistry';
import GlobalStyles from '@/global/GlobalStyles';
import { ThemeProvider } from '@/global/themes/ThemeProvider';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <GlobalStyles />

          <ThemeProvider>
            {children}
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
