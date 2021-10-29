/** @jsx jsx */
import { jsx } from '@emotion/react';
import styled from '@emotion/styled';
import { ButtonHTMLAttributes, FunctionComponent, ReactElement } from 'react';
import { theme } from 'styled-tools';

export const BigButtonInner = styled.button`
  position: relative;
  line-height: 0.5;
  margin: 0.5rem 3.5rem;
  color: ${theme('colors.text')};
  font-family: VCR-OSD-MONO;
  text-transform: none;
  -webkit-appearance: button;
  background-color: transparent;
  border: none;
  cursor: pointer;
  text-align: center;
  min-width: 31rem;
  min-height: 7rem;

  & > svg {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0px;
    left: 0px;
    z-index: 1;
    fill: ${theme('colors.black')};

    & > path {
      stroke: ${theme('colors.secondary')};
      stroke-width: 7;
    }
  }

  & span {
    position: absolute;
    font-size: 2rem;
    display: flex;
    align-items: center;
    z-index: 2;
    inset: 0;
    margin-left: 2.5rem;

    & svg {
      fill: ${theme('colors.secondary')};
      height: 2.5rem;
      margin-right: 0.5rem;
    }
  }

  &:hover,
  &:active {
    color: ${theme('colors.white')};

    & > svg {
      fill: ${theme('colors.secondary')};
    }

    & span > svg {
        fill: ${theme('colors.white')};
      }
    }
  }
`;

export interface BigButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactElement;
}

export const BigButton: FunctionComponent<BigButtonProps> = ({
  icon,
  children,
  ...props
}) => (
  <BigButtonInner {...props}>
    <svg viewBox="0 0 100 100" preserveAspectRatio="none">
      <path
        d="M10,7 L90,7 99,50 90,93 10,93 1,50z"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
    <span>
      {icon}
      {children}
    </span>
  </BigButtonInner>
);
