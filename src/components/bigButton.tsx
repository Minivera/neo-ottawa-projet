/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { ButtonHTMLAttributes, FunctionComponent, ReactElement } from 'react';

export interface BigButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactElement;
}

export const BigButton: FunctionComponent<BigButtonProps> = ({
  icon,
  children,
  ...props
}) => (
  <button
    css={theme => css`
      position: relative;
      flex: 1;
      margin: 0.5rem 3.5rem;
      color: ${theme.colors.text};
      font-family: VCR-OSD-MONO;
      text-transform: none;
      -webkit-appearance: button;
      background-color: transparent;
      border: none;
      cursor: pointer;
      text-align: left;
      transition: all 150ms ease;

      @media only screen and (max-width: 436px) {
        margin: 0.5rem 0.5rem;
      }
    
      & div {
        position: relative;
        font-size: 1.8rem;
        display: flex;
        align-items: center;
        z-index: 2;
        margin: 0 2.5rem;
        transition: inherit;

        @media only screen and (max-width: 436px) {
          margin: 0 1.5rem;
        }
    
        & svg {
          fill: ${theme.colors.secondary};
          height: 1.4rem;
          margin-right: 0.5rem;
          transition: inherit;
        }
      }
    
      &:hover,
      &:active {
        color: ${theme.colors.white};
    
        & > svg {
          fill: ${theme.colors.secondary};
        }
    
        & div > svg {
            fill: ${theme.colors.white};
          }
        }
      }
    `}
    {...props}
  >
    <div>
      {icon}
      {children}
    </div>
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      css={theme => css`
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0px;
        left: 0px;
        z-index: 1;
        fill: ${theme.colors.black};
        transition: inherit;
      `}
    >
      <path
        d="M5,7 L95,7 99,50 95,93 5,93 1,50z"
        vectorEffect="non-scaling-stroke"
        css={theme => css`
          stroke: ${theme.colors.secondary};
          stroke-width: 7;
          transition: inherit;

          @media only screen and (max-width: 436px) {
            stroke-width: 5;
          }

          @media only screen and (max-width: 320px) {
            stroke-width: 4;
          }
        `}
      />
    </svg>
  </button>
);
