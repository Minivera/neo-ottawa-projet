/** @jsx jsx */
import { jsx } from '@emotion/react';
import styled from '@emotion/styled';
import { ButtonHTMLAttributes, FunctionComponent } from 'react';
import { ifProp, prop } from 'styled-tools';

export interface ButtonColorProps {
  color?: string;
  backgroundColor?: string;
  borderColor?: string;
  hoverColor?: string;
  hoverBackgroundColor?: string;
  active?: boolean;
}

export const ButtonInner = styled.button<ButtonColorProps>`
  position: relative;
  font-size: 100%;
  line-height: 1.15;
  font-family: inherit;
  margin: 0.5rem 3.5rem;
  padding: 1.5rem 10rem;
  text-align: center;
  color: ${prop('color', 'colors.text')};
  text-transform: none;
  -webkit-appearance: button;
  background-color: transparent;
  border: none;
  cursor: pointer;

  & svg {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    fill: ${prop('backgroundColor', 'transparent')};
  }

  ${props => ifProp(
    'active',
    `
    color: ${prop('hoverColor', 'white')(props)};

    & svg {
      fill: ${prop('hoverBackgroundColor', 'transparent')(props)};
    }
  `,
    `
  &:hover,
  &:active {
    color: ${prop('hoverColor', 'white')(props)};

    & svg {
      fill: ${prop('hoverBackgroundColor', 'transparent')(props)};
    }
  }
  `
  )}

  path {
    stroke: ${prop('borderColor', 'colors.text')};
    stroke-width: 2;
  }
`;

export const HexagonButton: FunctionComponent<
  ButtonColorProps & ButtonHTMLAttributes<HTMLButtonElement>
> = ({
  color,
  backgroundColor,
  borderColor,
  hoverColor,
  hoverBackgroundColor,
  children,
  ...props
}) => (
  <ButtonInner
    {...props}
    color={color}
    backgroundColor={backgroundColor}
    borderColor={borderColor}
    hoverColor={hoverColor}
    hoverBackgroundColor={hoverBackgroundColor}
  >
    <svg viewBox="0 0 100 100" preserveAspectRatio="none">
      <path
        d="M3,7 L97,7 99,50 97,93 3,93 1,50z"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
    <span>{children}</span>
  </ButtonInner>
);
