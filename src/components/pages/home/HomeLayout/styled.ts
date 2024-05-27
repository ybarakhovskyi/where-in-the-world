import styled from 'styled-components';

export const StyledHomeLayout = styled.section`
  display: grid;
  grid-gap: ${({ theme }) => theme.spacing.x12};
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
`;

export const StyledHomeHeader = styled.header`
  align-items: center;
  display: flex;
  gap: ${({ theme }) => theme.spacing.x4};
  justify-content: space-between;
`;
