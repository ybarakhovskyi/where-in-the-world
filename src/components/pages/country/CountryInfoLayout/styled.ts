import styled from 'styled-components';

export const StyledCountryInfoLayout = styled.section`
  align-items: start;
  display: grid;
  grid-gap: ${({ theme }) => theme.spacing.x12};
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: auto 1fr;
  grid-template-areas: 'header header' 'flag info';
`;

export const StyledCountryInfoHeader = styled.div`
  grid-area: header;
`;
