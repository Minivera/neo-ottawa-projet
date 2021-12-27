/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { FunctionComponent } from 'react';

export const MenuContainer: FunctionComponent = ({ children }) => (
  <div
    css={css`
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
      overflow: hidden;
    `}
  >
    <div
      css={css`
        font-family: Permanent Marker;
        text-align: center;
        flex: 1;
        max-height: 45%;

        @media only screen and (max-height: 800px) {
          font-size: 80%;
        }
      `}
    >
      <h1
        css={theme => css`
          margin: 0;
          font-size: 14em;
          color: ${theme.colors.secondary};
          font-style: italic;
          text-shadow: 0.5rem 0.5rem 1.5rem ${theme.colors.darkGray};
          position: relative;
          top: -15%;

          animation-name: bounceInDown;
          animation-duration: 1.5s;
        `}
      >
        Reset
      </h1>
      <h2
        css={theme => css`
          margin: 0;
          font-size: 10em;
          color: ${theme.colors.primary};
          font-style: italic;
          text-shadow: 0.5rem 0.5rem 1.5rem ${theme.colors.darkGray};
          position: relative;
          top: -65%;

          animation-name: bounceInDown;
          animation-duration: 1.5s;
          animation-delay: 0.75s;
          animation-fill-mode: both;

          @media only screen and (max-height: 800px) {
            top: -55%;
          }
        `}
      >
        2047
      </h2>
    </div>
    <div
      css={css`
        flex: 1;
        min-width: 0;
        max-height: 55%;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        margin: 1em 0;
        
        animation-name: fadeInUp;
        animation-duration: 0.5s;
        animation-delay: 2.25s;
        animation-fill-mode: both;
      `}
    >
      {children}
    </div>
  </div>
);
