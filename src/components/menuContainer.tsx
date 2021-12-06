/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { FunctionComponent } from 'react';

export const MenuContainer: FunctionComponent = ({ children }) => (
  <div
    css={css`
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;
    `}
  >
    <div
      css={css`
        font-family: Permanent Marker;
        text-align: center;
      `}
    >
      <h1
        css={theme => css`
          margin-top: 4rem;
          font-size: 14rem;
          color: ${theme.colors.secondary};
          font-style: italic;
          text-shadow: 0.5rem 0.5rem 1.5rem ${theme.colors.darkGray};
        `}
      >
        Reset
      </h1>
      <h2
        css={theme => css`
          margin-bottom: 4rem;
          font-size: 10rem;
          color: ${theme.colors.primary};
          margin-top: -19rem;
          font-style: italic;
          text-shadow: 0.5rem 0.5rem 1.5rem ${theme.colors.darkGray};
        `}
      >
        2047
      </h2>
    </div>
    {children}
  </div>
);
