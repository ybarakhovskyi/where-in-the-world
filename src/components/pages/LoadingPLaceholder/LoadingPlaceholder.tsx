'use client';

import { FC } from 'react';
import {
  StyledLoadingDescription,
  StyledLoadingPlaceholderWrapper,
  StyledLoadingTitle,
} from '@/components/pages/LoadingPLaceholder/styled';

export const LoadingPlaceholder: FC = () => (
  <StyledLoadingPlaceholderWrapper>
    <StyledLoadingTitle>Loading...</StyledLoadingTitle>

    <StyledLoadingDescription>
      (Usually here should be skeletons for better user experience, but I really
      do not have time to implement them)
    </StyledLoadingDescription>
  </StyledLoadingPlaceholderWrapper>
);
