import { css } from '@emotion/core';

export const container = css`
  /* color: hotpink; */
  display: flex;
  justify-content: center;
  height: 50px;

  & > *{
    margin: auto 15px
  }

  svg {
    font-size: 19px;
  }
`;

