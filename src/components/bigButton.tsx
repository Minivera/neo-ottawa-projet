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
  overflow: visible;
  text-transform: none;
  -webkit-appearance: button;
  background-color: transparent;
  border: none;
  cursor: pointer;
  text-align: center;
  min-width: 28rem;

  & span {
    font-size: 2rem;
    border-width: 0.2em;
    border-top-style: solid;
    border-bottom-style: solid;
    border-color: ${theme('colors.secondary')};
    background-color: ${theme('colors.black')};
    padding: 1.6rem 2rem;
    display: flex;
    align-items: center;

    & svg {
      fill: ${theme('colors.secondary')};
      height: 2.5rem;
      margin-right: 0.5rem;
    }
  }

  &:hover,
  &:active {
    & span {
      background-color: ${theme('colors.secondary')};
      color: ${theme('colors.white')};

      & svg {
        fill: ${theme('colors.white')};
      }
    }

    & div .inner, & div .outer {
      border-right-color: ${theme('colors.secondary')};
      border-left-color: ${theme('colors.secondary')};
    }
  }
`;

const LeftSide = styled.div`
  position: absolute;
  left: -11.5%;
  width: 13%;
  height: 0;
  padding-top: 12%;
  padding-bottom: 12%;
  overflow: hidden;

  .outer {
    display: block;
    content: ' ';
    position: absolute;
    left: 9%;
    top: 48%;
    width: 0;
    height: 0;
    margin-top: -500px;
    border-top: 500px solid transparent;
    border-bottom: 500px solid transparent;
    border-right: 500px solid ${theme('colors.secondary')};
  }
  
  .inner {
    display: block;
    content: ' ';
    position: absolute;
    left: 22%;
    top: 48%;
    width: 0;
    height: 0;
    margin-top: -500px;
    border-top: 500px solid transparent;
    border-bottom: 500px solid transparent;
    border-right: 500px solid ${theme('colors.black')};
  }
`;

const RightSide = styled.div`
  position: absolute;
  right: -11.5%;
  top: 0;
  width: 13%;
  height: 0;
  padding-top: 12%;
  padding-bottom: 12%;
  padding-left: 12%;
  overflow: hidden;

  .outer {
    display: block;
    content: ' ';
    position: absolute;
    right: 9%;
    top: 49%;
    width: 0;
    height: 0;
    margin-top: -500px;
    border-top: 500px solid transparent;
    border-bottom: 500px solid transparent;
    border-left: 500px solid ${theme('colors.secondary')};
  }

  .inner {
    display: block;
    content: ' ';
    position: absolute;
    right: 22%;
    top: 49%;
    width: 0;
    height: 0;
    margin-top: -500px;
    margin-left: -500px;
    border-top: 500px solid transparent;
    border-bottom: 500px solid transparent;
    border-left: 500px solid ${theme('colors.black')};
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
    <LeftSide>
      <div className="outer" />
      <div className="inner" />
    </LeftSide>
    <span>
      {icon}
      {children}
    </span>
    <RightSide>
      <div className="outer" />
      <div className="inner" />
    </RightSide>
  </BigButtonInner>
);
