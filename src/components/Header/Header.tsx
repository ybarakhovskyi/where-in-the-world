'use client';

import { FC } from 'react';
import {
  StyledHeader,
  StyledHeaderWrapper,
  StyledLogo,
} from '@/components/Header/styled';
import { ThemeSwitchButton } from '@/components/Header/ThemeSwitchButton';

export const Header: FC = () => (
  <StyledHeaderWrapper>
    <StyledHeader>
      <StyledLogo href="/">Where in the world?</StyledLogo>

      <ThemeSwitchButton />
    </StyledHeader>
  </StyledHeaderWrapper>
);
