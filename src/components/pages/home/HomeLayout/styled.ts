import styled from 'styled-components';
import { mediaQueries } from '@/core/themes/default/breakpoints';

export const StyledHomeLayout = styled.section`
  align-items: start;
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

  ${mediaQueries.tabletPortrait} {
    align-items: stretch;
    flex-direction: column;
  }
`;
