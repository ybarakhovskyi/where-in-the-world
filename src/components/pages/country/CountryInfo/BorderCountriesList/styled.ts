import styled from 'styled-components';
import { mediaQueries } from '@/core/themes/default/breakpoints';

export const StyledBorderCountriesWrapper = styled.div`
  display: flex;
  white-space: nowrap;
  align-items: baseline;
  gap: ${({ theme }) => theme.spacing.x4};

  ${mediaQueries.mobilePortrait} {
    flex-flow: column nowrap;
  }
`;

export const StyledBorderCountriesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  list-style: none;
  margin: 0 0 ${({ theme }) => theme.spacing.x8};
  padding: 0;
  gap: ${({ theme }) => theme.spacing.x4};
`;

export const StyledBorderCountriesListItem = styled.li`
  ${mediaQueries.mobilePortrait} {
    margin: 0;
  }
`;
