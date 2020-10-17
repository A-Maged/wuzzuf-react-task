import { css } from '@emotion/core';

export default function globalStyles(theme: any) {
  return css`
    html {
      height: 100%;
    }

    body {
      height: 100%;
      color: ${theme.colors.text};
      background: ${theme.colors.background};
    }

    #root {
      height: 100%;
    }

    a,
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
