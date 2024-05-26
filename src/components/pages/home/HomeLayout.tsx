'use client';

import { FC, PropsWithChildren } from 'react';
import {
  StyledHomeHeader,
  StyledHomeLayout,
} from '@/components/pages/home/styled';
import { SearchField } from '@/components/pages/home/SearchField';

export const HomeLayout: FC<PropsWithChildren> = ({ children }) => (
  <StyledHomeLayout>
    <StyledHomeHeader>
      <SearchField />

      <div>2</div>
    </StyledHomeHeader>
    {children}
  </StyledHomeLayout>
);
