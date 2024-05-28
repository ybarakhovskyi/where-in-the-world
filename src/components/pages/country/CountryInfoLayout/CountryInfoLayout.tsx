'use client';

// Vendors
import { FC, PropsWithChildren } from 'react';

// Components
import { BackButton } from './BackButton';

// Styles
import { StyledCountryInfoHeader, StyledCountryInfoLayout } from './styled';

export const CountryInfoLayout: FC<PropsWithChildren> = ({ children }) => (
  <StyledCountryInfoLayout>
    <StyledCountryInfoHeader>
      <BackButton />
    </StyledCountryInfoHeader>

    {children}
  </StyledCountryInfoLayout>
);
