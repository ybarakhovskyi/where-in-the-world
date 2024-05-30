import styled from 'styled-components';
import Link from 'next/link';

export const StyledCountryList = styled.ul`
  display: grid;
  grid-template-rows: min-content;
  grid-template-columns: repeat(auto-fit, minmax(225px, max-content));
  gap: ${({ theme }) => theme.spacing.x12};
  justify-content: start;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
`;

export const StyledCountryListItem = styled.li`
  display: flex;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.x2};
  width: 100%;
  min-width: 225px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.elevation.L};
`;

export const StyledCountryLink = styled(Link)`
  display: grid;
  grid-template-rows: 1fr auto;
  grid-template-columns: 1fr;
  grid-template-areas: 'flag' 'info';
  color: ${({ theme }) => theme.colors.typography.common};
  text-decoration: none;
  width: 100%;
`;

export const StyledCountryFlagWrapper = styled.div`
    display: flex;
    align-items: center;
    grid-area: flag;
    max-height: 150px;
    overflow: hidden;
`;

export const StyledCountryInfo = styled.div`
  padding: ${({ theme }) => theme.spacing.x6};
  grid-area: info;

  & h3 {
    margin: 0 0 ${({ theme }) => theme.spacing.x4};
  }
`;

export const StyledCountryDescription = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 13px;

  & > li {
    margin-bottom: ${({ theme }) => theme.spacing.x2};
  }
`;
