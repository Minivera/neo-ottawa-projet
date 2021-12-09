/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { ButtonHTMLAttributes, FunctionComponent } from 'react';
import { darken } from 'polished';

export interface ButtonColorProps {
  color?: string;
  backgroundColor?: string;
  borderColor?: string;
  hoverColor?: string;
  hoverBackgroundColor?: string;
  active?: boolean;
  visited?: boolean;
}

export const HexagonButton: FunctionComponent<
  ButtonColorProps & ButtonHTMLAttributes<HTMLButtonElement>
> = ({
  active,
  visited,
  disabled,
  color,
  backgroundColor,
  borderColor,
  hoverColor,
  hoverBackgroundColor,
  children,
  ...props
}) => (
  <button
    {...props}
    css={theme => css`
      position: relative;
      font-size: 100%;
      line-height: 1.15;
      font-family: inherit;
      margin: 0.5rem 3.5rem;
      padding: 1.5rem 10rem;
      text-align: center;
      color: ${color || theme.colors.text};
      text-transform: none;
      -webkit-appearance: button;
      background-color: transparent;
      border: none;
      cursor: ${disabled ? 'not-allowed' : 'pointer'};
      pointer-events: ${disabled ? 'none' : 'auto'};

      & svg {
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        z-index: -1;
        fill: ${backgroundColor || 'transparent'};
      }

      ${active
        ? `
        color: ${hoverColor || theme.colors.white}!important;
  
        & svg {
          fill: ${hoverBackgroundColor || 'transparent'}!important;
        }
      `
        : `
        &:hover,
        &:active {
          color: ${hoverColor || theme.colors.white}!important;
      
          & svg {
            fill: ${hoverBackgroundColor || 'transparent'}!important;
          }
        }
      `}

      path {
        stroke: ${borderColor || theme.colors.text};
        stroke-width: 2;
      }

      ${visited
        ? `
      color: ${darken(0.4, color || theme.colors.text)}!important;
  
      & svg {
        fill: ${darken(0.4, backgroundColor || 'transparent')}!important;
      }
  
      path {
        stroke: ${darken(0.4, borderColor || theme.colors.text)}!important;
      }
    `
        : ''}
    `}
    disabled={disabled}
  >
    <svg viewBox="0 0 100 100" preserveAspectRatio="none">
      <path
        d="M3,7 L97,7 99,50 97,93 3,93 1,50z"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
    <span>{children}</span>
  </button>
);
