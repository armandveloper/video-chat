import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --color-bg: #202124;
    --color-bg-2: #3c4043;
    --color-text: #fff;
    --color-error: #ea4335;
  }
  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  body {
    background-color: var(--color-bg);
    color: var(--color-text);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.6rem;
    margin: 0;
  }
`;

export default GlobalStyles;
