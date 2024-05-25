import styled from 'styled-components';

export const StyledHeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  box-shadow: ${({ theme }) => theme.elevation.L};
  padding: ${({ theme }) => `${theme.spacing.x4} ${theme.spacing.x10}`};
`;

export const StyledHeader = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  max-width: ${({ theme }) => theme.limits.container.maxWidth};
  width: 100%;
`;

export const StyledLogo = styled.h1`
  font-weight: 600;
  ${({ theme }) => theme.typography.headings.h1}
`;
