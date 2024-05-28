import styled from 'styled-components';

export const StyledBorderCountriesWrapper = styled.div`
  display: flex;
  white-space: nowrap;
  align-items: baseline;
  gap: ${({ theme }) => theme.spacing.x4};
`;

export const StyledBorderCountriesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  list-style: none;
  margin: 0 0 ${({ theme }) => theme.spacing.x8};
  padding: 0;
`;

export const StyledBorderCountriesListItem = styled.li`
  margin: ${({ theme }) => theme.spacing.x2};
`;
