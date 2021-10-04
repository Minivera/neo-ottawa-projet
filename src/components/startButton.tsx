/** @jsx jsx */
import { jsx } from '@emotion/react';
import styled from '@emotion/styled';
import { ButtonHTMLAttributes, FunctionComponent } from 'react';
import { theme } from 'styled-tools';

import { MenuContainer } from './menuContainer';

import StartIcon from '../assets/ui/pda/PowerResist.svg?component';

export const BigButton = styled.button`
  position: relative;
  line-height: 0.5;
  margin: 0.5rem 3.5rem;
  color: ${theme('colors.white')};
  overflow: visible;
  text-transform: none;
  -webkit-appearance: button;
  background-color: transparent;
  border: none;
  cursor: pointer;
  text-align: center;
  font-size: 100%;

  & span {
    font-size: 5rem;
    border-width: 0.5rem;
    border-top-style: solid;
    border-bottom-style: solid;
    border-color: ${theme('colors.primary')};
    background-color: ${theme('colors.secondary')};
    display: block;
    padding: 2.6rem 3.5rem;
    
    & svg {
      fill: ${theme('colors.primary')};
      transform: scale(1.5);
    }
  }
  
  &:hover, &:active {
    & span {
      background-color: ${theme('colors.primary')};

      & svg {
        fill: ${theme('colors.secondary')};
      }
    }

    & div[data-direction="left"]:before {
      border-right-color: ${theme('colors.primary')};
    }

    & div[data-direction="right"]:before {
      border-left-color: ${theme('colors.primary')};
    }
  }
`;

const LeftSide = styled.div`
  position: absolute;
  left: -2.6rem;
  width: 0;
  height: 0;
  border-top: 4.75rem solid transparent;
  border-bottom: 4.70rem solid transparent;
  border-right: 3rem solid ${theme('colors.primary')};

  &:before {
    display: block;
    content: ' ';
    position: relative;
    left: 0.4rem;
    top: -4.3rem;
    width: 0;
    height: 0;
    border-top: 4.25rem solid transparent;
    border-bottom: 4.20rem solid transparent;
    border-right: 2.6rem solid ${theme('colors.secondary')};
  }
`;

const RightSide = styled.div`
  position: absolute;
  right: -2.65rem;
  bottom: 0;
  width: 0;
  height: 0;
  border-top: 4.75rem solid transparent;
  border-bottom: 4.70rem solid transparent;
  border-left: 3rem solid ${theme('colors.primary')};

  &:before {
    display: block;
    content: ' ';
    position: relative;
    right: 3rem;
    top: -4.3rem;
    width: 0;
    height: 0;
    border-top: 4.25rem solid transparent;
    border-bottom: 4.20rem solid transparent;
    border-left: 2.6rem solid ${theme('colors.secondary')};
  }
`;

export const StartButton: FunctionComponent<ButtonHTMLAttributes<HTMLButtonElement>> = props  => (
  <MenuContainer>
    <BigButton {...props}>
      <LeftSide data-direction="left" />
      <span>
        <StartIcon />
      </span>
      <RightSide data-direction="right" />
    </BigButton>
  </MenuContainer>
);
