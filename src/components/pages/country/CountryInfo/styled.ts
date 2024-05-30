import styled from 'styled-components';
import { mediaQueries } from '@/core/themes/default/breakpoints';

export const StyledCountryDetailsWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.x12} 0;

  ${mediaQueries.mobilePortrait} {
    padding: 0;
  }
`;

export const StyledCountryName = styled.h1`
  font-size: 2em;
  font-weight: 700;
  margin: 0 0 ${({ theme }) => theme.spacing.x12};

  ${mediaQueries.mobilePortrait} {
    margin: 0 0 ${({ theme }) => theme.spacing.x8};
  }
`;

export const StyledCountryDetails = styled.ul`
  list-style: none;
  margin: 0 0 ${({ theme }) => theme.spacing.x12};
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.x4};

  & > li {
    flex-basis: calc(50% - ${({ theme }) => theme.spacing.x2});

    ${mediaQueries.mobilePortrait} {
      flex-basis: 100%;
    }
  }
`;
