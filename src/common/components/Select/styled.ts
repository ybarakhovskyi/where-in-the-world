import Color from 'color';
import styled, { css } from 'styled-components';

export const StyledSelectWrapper = styled.div`
  align-items: stretch;
  display: flex;
  flex-flow: column;
  position: relative;
  width: 100%;
`;

export const StyledSelectTrigger = styled.button`
  ${({ theme }) => {
    const { selectTrigger } = theme.components.select;

    return css`
      align-items: center;
      background-color: ${selectTrigger.backgroundColor};
      border-radius: ${selectTrigger.borderRadius};
      border: ${selectTrigger.border};
      box-shadow: ${selectTrigger.elevation.M};
      color: ${selectTrigger.color};
      cursor: pointer;
      display: flex;
      gap: ${theme.spacing.x4};
      justify-content: space-between;
      padding: ${selectTrigger.offset.M};
      width: 100%;
      transition: 0.3s ease-in-out;
      line-height: 1;

      &:hover {
        background-color: ${({ theme }) =>
          Color(selectTrigger.backgroundColor).darken(0.1).toString()};
      }
    `;
  }}
`;

export const StyledSelectDropdown = styled.ul`
  ${({ theme }) => {
    const { selectDropdown } = theme.components.select;

    return css`
      background-color: ${selectDropdown.backgroundColor};
      border-radius: ${selectDropdown.borderRadius};
      box-shadow: ${selectDropdown.elevation.M};
      list-style: none;
      margin: ${theme.spacing.x1} 0 0 0;
      padding: ${selectDropdown.offset.M};
      position: absolute;
      top: 100%;
      width: 100%;
    `;
  }}
`;

export const StyledSelectDropdownItem = styled.button`
  ${({ theme }) => {
    const { selectDropdownItem } = theme.components.select;

    return css`
      background-color: ${selectDropdownItem.backgroundColor};
      border: none;
      color: inherit;
      cursor: pointer;
      display: block;
      padding: ${selectDropdownItem.offset.M};
      transition: 0.3s ease-in-out;
      width: 100%;
      text-align: left;

      &:hover {
        background-color: ${({ theme }) =>
          Color(selectDropdownItem.backgroundColor).darken(0.1).toString()};
      }
    `;
  }}
`;
