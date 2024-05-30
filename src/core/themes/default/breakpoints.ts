export enum Breakpoint {
  MobilePortrait = 480,
  MobileLandscape = 768,
  TabletPortrait = 768,
  TabletLandscape = 1024,
  SmallDesktop = 1280,
  Desktop = 1440,
}

export const mediaQueries = {
  mobilePortrait: `@media (max-width: ${Breakpoint.MobilePortrait}px)`,
  mobileLandscape: `@media (max-width: ${Breakpoint.MobileLandscape}px)`,
  tabletPortrait: `@media (max-width: ${Breakpoint.TabletPortrait}px)`,
  tabletLandscape: `@media (max-width: ${Breakpoint.TabletLandscape}px)`,
  smallDesktop: `@media (max-width: ${Breakpoint.SmallDesktop}px)`,
  desktop: `@media (max-width: ${Breakpoint.Desktop}px)`,
};

export type MediaQuery = keyof typeof mediaQueries;
