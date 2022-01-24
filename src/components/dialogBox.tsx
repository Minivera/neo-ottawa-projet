/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { FunctionComponent } from 'react';
import { lighten, transparentize } from 'polished';

export interface DialogBoxProps {
  characterTheme?: string;
  center?: boolean;
}

export const DialogBox: FunctionComponent<DialogBoxProps> = ({
  characterTheme,
  children,
}) => (
  <div
    css={theme => css`
      position: relative;
      grid-row: 2;
      grid-column: 1;
      padding: 2rem 12rem;
      background-color: ${transparentize(0.2, theme.colors.darkGray)};
      color: ${lighten(0.2, theme.colors.text)};
      border-color: ${characterTheme || theme.colors.lightGray};
      border-width: 10px;
      border-top-style: solid;
      border-bottom-style: solid;
      z-index: 2;
      font-size: 2rem;
      min-height: 15rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      & p {
        margin-top: 0;
        margin-bottom: 1.5rem;
      }

      & div + p {
        margin-top: 2rem;
      }

      @media only screen and (max-width: 1024px) {
        padding: 2rem 2rem;
      }

      @media only screen and (max-width: 436px) {
        padding: 2rem 2rem;
      }
    `}
  >
    {children}
  </div>
);

export const DialogTitle: FunctionComponent<DialogBoxProps> = ({
  characterTheme,
  children,
}) => (
  <div
    css={theme => css`
      position: absolute;
      text-align: center;
      color: ${theme.colors.white};
      top: -3.05rem;
      padding: 1rem 3.5rem;

      & h1 {
        font-family: Permanent Marker;
        margin: 0;
        font-size: 2.5rem;
      }

      & svg {
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        z-index: -1;
        fill: ${theme.colors.darkGray};
      }

      polygon {
        stroke: ${characterTheme || theme.colors.black};
        stroke-width: 5;
        fill: ${theme.colors.darkGray};
      }
    `}
  >
    <svg viewBox="0 0 300 300" preserveAspectRatio="none">
      <polygon
        fillRule="nonzero"
        points="300,150 275,280 25,280 0,150 25,20 275,20"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
    {children}
  </div>
);
