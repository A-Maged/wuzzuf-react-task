import { css } from '@emotion/core';
import { TTheme } from './themes';

export default function globalStyles(theme: TTheme) {
  return css`
    html {
      height: 100%;
    }

    body {
      height: 100%;
      color: ${theme.colors.text};
      background: ${theme.colors.backgroundLight};
    }

    #root {
      height: 100%;
    }

    a {
      text-decoration: underline;
      color: #40a9ff;

      &:hover {
        color: inherit;
      }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: inherit;
    }
  `;
}
