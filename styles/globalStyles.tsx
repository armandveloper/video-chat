import { createGlobalStyle } from 'styled-components';
import { tooltipStyle } from './tooltip';

const GlobalStyles = createGlobalStyle`
  :root {
    --color-bg: #202124;
    --color-bg-2: #3c4043;
    --color-bg-3: #636363;
    --color-text: #fff;
    --color-primary: #4285f4;
    --color-error: #ea4335;
    --sidebar-width: 36rem;
    --sidebar-top-height: 6.4rem;
    --bottom-bar-height: 8rem;
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
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  ${tooltipStyle};
`;

export default GlobalStyles;
