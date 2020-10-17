import { css } from '@emotion/core';
import { TTheme } from 'src/styles/themes';

export const container = (theme: TTheme) => css`
  display: flex;
  justify-content: center;
  height: 50px;
  background: ${theme.colors.background};
  box-shadow: ${theme.colors.shadow};

  & > * {
    margin: auto 15px;
  }
`;

export const icon = css`
  display: flex;
  font-size: 19px;
`;
