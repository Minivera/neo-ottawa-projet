/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { FunctionComponent } from 'react';

export const MenuContainer: FunctionComponent = ({ children }) => (
  <div
    css={css`
      height: 100%;
      width: 100%;
      display: grid;
      grid-template-rows: repeat(2, 50%);
      overflow: hidden;
    `}
  >
    <div
      css={css`
        grid-row: 1;
        grid-column: 1;
        font-family: Permanent Marker;
        text-align: center;
        font-size: 17px;
        display: grid;
        grid-template-rows: 20% 35% 35% 10%;
        grid-template-columns: auto;

        @media only screen and (max-width: 436px) {
          font-size: 12px;
        }
      `}
    >
      <h1
        css={theme => css`
          grid-row: 2 / span 2;
          grid-column: 1;
          margin: 0;
          font-size: 10em;
          color: ${theme.colors.secondary};
          font-style: italic;
          text-shadow: 5px 5px 12px ${theme.colors.darkGray};

          animation-name: bounceInDown;
          animation-duration: 1.5s;

          @media only screen and (max-width: 436px) {
            font-size: 10em;
          }

          @media only screen and (max-width: 320px) {
            font-size: 8em;
          }
        `}
      >
        Reset
      </h1>
      <h2
        css={theme => css`
          grid-row: 3 / span 2;
          grid-column: 1;
          margin: 0;
          font-size: 6em;
          color: ${theme.colors.primary};
          font-style: italic;
          text-shadow: 5px 5px 12px ${theme.colors.darkGray};

          animation-name: bounceInDown;
          animation-duration: 1.5s;
          animation-delay: 0.75s;
          animation-fill-mode: both;

          @media only screen and (max-width: 436px) {
            font-size: 7em;
          }

          @media only screen and (max-width: 320px) {
            font-size: 5em;
          }
        `}
      >
        2047
      </h2>
    </div>
    <div
      css={css`
        grid-row: 2;
        grid-column: 1;
        display: flex;
        justify-content: center;
        margin: 1rem 0;
        padding-bottom: 4rem;
        width: 100%;

        animation-name: fadeInUp;
        animation-duration: 0.5s;
        animation-delay: 2.25s;
        animation-fill-mode: both;

        @media only screen and (max-height: 800px) {
          padding-bottom: 0;
        }

        @media only screen and (max-width: 436px) {
          padding-bottom: 5rem;
        }
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: center;
        `}
      >
        {children}
      </div>
    </div>
  </div>
);
