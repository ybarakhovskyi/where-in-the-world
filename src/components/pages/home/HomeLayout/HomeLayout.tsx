'use client';

// Vendors
import { FC, PropsWithChildren } from 'react';

// Components
import { SearchField } from '@/components/pages/home/SearchField';
import { RegionFilter } from '@/components/pages/home/RegionFilter/RegionFilter';

// Styles
import { StyledHomeHeader, StyledHomeLayout } from './styled';

export const HomeLayout: FC<PropsWithChildren> = ({ children }) => (
  <StyledHomeLayout>
    <StyledHomeHeader>
      <SearchField />

      <RegionFilter />
    </StyledHomeHeader>

    {children}
  </StyledHomeLayout>
);
