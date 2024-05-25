'use client';

import styled from 'styled-components';

export const StyledLayout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr;
  justify-content: stretch;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background.main};
`;

export const StyledLayoutContent = styled.main`
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.x12};

  & > * {
    width: 100%;
    max-width: ${({ theme }) => theme.limits.container.maxWidth};
  }
`;
