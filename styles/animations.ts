import { keyframes } from 'styled-components';

export const showSidebarAnimation = keyframes`
  from {
    transform: translate3d(100%, 0, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
`;

export const hideSidebarAnimation = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(100%, 0, 0);
  }
`;

export const slideInDownSnackbar = keyframes`
  from {
    transform: translate3d(0, calc(var(--bottom-bar-height) + 100%), 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
`;

export const slideOutDownSnackbar = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(0, calc(var(--bottom-bar-height) + 100%), 0);
  }
`;
