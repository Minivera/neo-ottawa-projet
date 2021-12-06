import styled from '@emotion/styled';
import { lighten, transparentize } from 'polished';
import { theme } from 'styled-tools';

export interface DialogBoxProps {
  center?: boolean;
}

export const DialogBox = styled.div<DialogBoxProps>`
  position: relative;
  grid-row: 2;
  grid-column: 1;
  padding: 2rem 12rem;
  background-color: ${props =>
    transparentize(0.2, theme('colors.darkGray')(props) as unknown as string)};
  color: ${props => lighten(0.2, theme('colors.text')(props) as unknown as string)};
  border-color: ${theme('colors.primary')};
  border-width: 0.4rem;
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
`;

export const DialogTitle = styled.div`
  color: ${theme('colors.white')};
  position: absolute;
  top: -2.85rem;
  background-color: ${theme('colors.darkGray')};
  border-color: ${theme('colors.primary')};
  border-width: 0.4rem;
  border-top-style: solid;
  border-bottom-style: solid;
  padding: 0.5rem 1rem;

  & h1 {
    font-family: Permanent Marker;
    margin: 0;
    font-size: 2.5rem;
  }
`;

export const DialogTitleLeftArrow = styled.div`
  position: absolute;
  left: -2.75rem;
  top: -0.5rem;
  width: 0;
  height: 0;
  border-top: 2.80rem solid transparent;
  border-bottom: 2.75rem solid transparent;
  border-right: 2.75rem solid ${theme('colors.primary')};
  
  &:before {
    display: block;
    content: " ";
    position: relative;
    left: 0.45rem;
    top: -2.30rem;
    width: 0;
    height: 0;
    border-top: 2.30rem solid transparent;
    border-bottom: 2.30rem solid transparent;
    border-right: 2.30rem solid ${theme('colors.black')};
  }
`;

export const DialogTitleRightArrow = styled.div`
  position: absolute;
  right: -2.75rem;
  top: -0.5rem;
  width: 0;
  height: 0;
  border-top: 2.80rem solid transparent;
  border-bottom: 2.75rem solid transparent;
  border-left: 2.75rem solid ${theme('colors.primary')};

  &:after {
    display: block;
    content: " ";
    position: relative;
    right: 2.75rem;
    top: -2.30rem;
    width: 0;
    height: 0;
    border-top: 2.30rem solid transparent;
    border-bottom: 2.30rem solid transparent;
    border-left: 2.30rem solid ${theme('colors.black')};
  }
`;
