import { css } from '@emotion/core';

export const container = css`
  /* color: hotpink; */
  display: flex;
  justify-content: center;
  height: 50px;

  & > *{
    margin: auto 20px
  }
`;

