import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

export const StyledCountryList = styled.ul`
  align-items: baseline;
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.x12};
  justify-content: start;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
`;

export const StyledCountryListItem = styled.li`
  background-color: ${({ theme }) => theme.colors.background.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.x2};
  max-width: calc(25% - ${({ theme }) => theme.spacing.x9});
  width: 100%;
  min-width: 225px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.elevation.L};
`;

export const StyledCountryLink = styled(Link)`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr;
  color: ${({ theme }) => theme.colors.typography.common};
  text-decoration: none;
  width: 100%;
`;

export const StyledCountryFlag = styled(Image)`
  width: 100%;
  height: auto;
`;

export const StyledCountryInfo = styled.div`
  padding: ${({ theme }) => theme.spacing.x6};

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
