import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

import THEME from './config';

const GlobalStyle = createGlobalStyle`
  ${normalize()}

  a {
    color: ${THEME.colors.primaryFontColor};

    :hover {
      text-decoration: underline;
    }
  }

  * {
    padding: 0;
    border: none;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
    outline: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  html {
    height: 100%;
  }

  html > body {
    position: relative;
    min-height: 100%;
    font-weight: ${THEME.typography.baseFontWeight};
    font-size: ${THEME.typography.baseFontSize};
    color: ${THEME.colors.primaryFontColor};
    line-height: ${THEME.typography.baseLineHeight};
    font-family: ${THEME.typography.baseFontFamily};
  }

  > svg {
    height: 100%;
    width: auto;
  }
`;

export default GlobalStyle;
