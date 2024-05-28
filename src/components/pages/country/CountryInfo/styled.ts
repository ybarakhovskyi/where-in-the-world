import styled from 'styled-components';

export const StyledCountryDetailsWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.x12} 0;
`;

export const StyledCountryName = styled.h1`
  font-size: 2em;
  font-weight: 700;
  margin: 0 0 ${({ theme }) => theme.spacing.x12};
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
  }
`;

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
