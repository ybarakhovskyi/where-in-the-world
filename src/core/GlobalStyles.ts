'use client';

import { createGlobalStyle, css } from 'styled-components';

const globalStyles = css`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    color: ${({ theme }) => theme.colors.typography.common};
    margin: 0;
    padding: 0;
    max-height: 100vh;
    font-size: 14px;
    font-weight: 100;
  }

  img {
    width: 100%;
    height: auto;
  }
`;

const GlobalStyles = createGlobalStyle`
  ${globalStyles}
`;

export default GlobalStyles;
