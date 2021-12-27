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
      line-height: 0.5;
      margin: 0.5em 3.5em;
      color: ${theme.colors.text};
      font-family: VCR-OSD-MONO;
      text-transform: none;
      -webkit-appearance: button;
      background-color: transparent;
      border: none;
      cursor: pointer;
      text-align: center;
    
      & > svg {
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0px;
        left: 0px;
        z-index: 1;
        fill: ${theme.colors.black};
    
        & > path {
          stroke: ${theme.colors.secondary};
          stroke-width: 7;
        }
      }
    
      & div {
        position: relative;
        font-size: 2.5em;
        display: flex;
        align-items: center;
        z-index: 2;
        margin: 0 2.5em;
    
        & svg {
          fill: ${theme.colors.secondary};
          height: 2.5em;
          margin-right: 0.5em;
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
    <svg viewBox="0 0 100 100" preserveAspectRatio="none">
      <path
        d="M10,7 L90,7 99,50 90,93 10,93 1,50z"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  </button>
);
