import styled from 'styled-components';

export const StyledRegionFilterWrapper = styled.div`
  display: grid;
  align-items: center;
  grid-gap: ${({ theme }) => theme.spacing.x4};
  flex: 1;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 200px;
  grid-template-areas: 'clear-button select';
`;

export const StyledClearButtonWrapper = styled.div`
  grid-area: clear-button;
  justify-self: end;
`;

export const StyledSelectWrapper = styled.div`
  display: flex;
  grid-area: select;
`;
