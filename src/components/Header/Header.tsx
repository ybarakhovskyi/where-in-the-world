'use client';

import { FC } from 'react';
import {
  StyledHeader,
  StyledHeaderWrapper,
  StyledLogo,
} from '@/components/Header/styled';

export const Header: FC = () => (
  <StyledHeaderWrapper>
    <StyledHeader>
      <StyledLogo>Where in the world?</StyledLogo>
    </StyledHeader>
  </StyledHeaderWrapper>
);
