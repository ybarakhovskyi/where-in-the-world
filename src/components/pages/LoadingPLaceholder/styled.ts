import styled from 'styled-components';

export const StyledLoadingPlaceholderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
`;

export const StyledLoadingTitle = styled.h1`
  text-transform: uppercase;
  margin: 0 0 ${({ theme }) => theme.spacing.x8};
`;

export const StyledLoadingDescription = styled.h4`
  font-weight: 300;
  font-style: italic;
`;
