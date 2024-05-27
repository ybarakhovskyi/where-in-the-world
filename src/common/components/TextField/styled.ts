import styled, { css } from 'styled-components';

export const StyledTextFieldWrapper = styled.div`
  ${({ theme }) => {
    const { textField } = theme.components;

    return css`
      display: flex;
      align-items: center;
      gap: ${({ theme }) => theme.spacing.x2};
      background-color: ${textField.backgroundColor};
      border-radius: ${textField.borderRadius};
      box-shadow: ${textField.elevation};
      color: ${textField.color};
      font-size: 1em;
      line-height: 1;
      padding: ${textField.offset.M};
      width: 100%;
      max-width: 480px;
    `;
  }}
`;

export const StyledTextField = styled.input.attrs({
  type: 'search',
})`
  background-color: transparent;
  border: none;
  color: inherit;
  font-size: inherit;
  line-height: inherit;
  flex: 1;
  padding: ${({ theme }) => theme.spacing.x2};
`;
