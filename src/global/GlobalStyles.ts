'use client';

import { createGlobalStyle, css } from 'styled-components';

const globalStyles = css`
    * {
        box-sizing: border-box;
    }

    html, body {
        margin: 0;
        padding: 0;
        max-height: 100vh;
    }
`;

const GlobalStyles = createGlobalStyle`
  ${globalStyles}
`;

export default GlobalStyles;
