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
        max-height: 50%;
        font-size: 17px;

        @media only screen and (max-height: 800px) {
          max-height: 45%;
        }

        @media only screen and (max-width: 436px) {
          font-size: 12px;
          max-height: 35%;
        }
      `}
    >
      <h1
        css={theme => css`
          margin: 0;
          font-size: 14em;
          color: ${theme.colors.secondary};
          font-style: italic;
          text-shadow: 5px 5px 12px ${theme.colors.darkGray};
          position: relative;

          animation-name: bounceInDown;
          animation-duration: 1.5s;

          @media only screen and (max-height: 800px) {
            top: -0.3em;
          }

          @media only screen and (max-width: 436px) {
            top: 0;
            font-size: 10em;
          }

          @media only screen and (max-width: 320px) {
            top: 0;
            font-size: 8em;
          }
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
          text-shadow: 5px 5px 12px ${theme.colors.darkGray};
          position: relative;
          top: -1em;

          animation-name: bounceInDown;
          animation-duration: 1.5s;
          animation-delay: 0.75s;
          animation-fill-mode: both;

          @media only screen and (max-height: 800px) {
            top: -1.5em;
          }

          @media only screen and (max-width: 436px) {
            top: -1em;
            font-size: 7em;
          }

          @media only screen and (max-width: 320px) {
            top: -1em;
            font-size: 5em;
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
        max-height: 50%;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        margin: 1rem 0;
        padding-bottom: 4rem;
        
        animation-name: fadeInUp;
        animation-duration: 0.5s;
        animation-delay: 2.25s;
        animation-fill-mode: both;

        @media only screen and (max-height: 800px) {
          max-height: 55%;
          padding-bottom: 0;
        }

        @media only screen and (max-width: 436px) {
          max-height: 65%;
          padding-bottom: 5rem;
        }
      `}
    >
      {children}
    </div>
  </div>
);
