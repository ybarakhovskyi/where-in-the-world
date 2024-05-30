import styled from 'styled-components';
import { Button } from '@/common/components/Button';
import { mediaQueries } from '@/core/themes/default/breakpoints';

export const StyledRegionFilterWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.x4};
  flex: 1;
  justify-content: flex-end;

  ${mediaQueries.tabletLandscape} {
    flex-flow: row-reverse;
  }
`;

export const StyledClearButton = styled(Button)`
  padding: ${({ theme }) => theme.spacing.x2};
  border-radius: ${({ theme }) => theme.borderRadius.x2};
`;

export const StyledSelectWrapper = styled.div`
  display: flex;
  flex-basis: 200px;
`;
