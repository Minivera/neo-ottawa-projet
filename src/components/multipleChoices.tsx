import styled from '@emotion/styled';
import { theme } from 'styled-tools';

export const MultipleChoices = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
`;

export const MultipleChoiceElement = styled.button`
  position: relative;
  font-size: 100%;
  line-height: 1.15;
  margin: 0.5rem 3.5rem;
  font-family: inherit;
  overflow: visible;
  text-transform: none;
  -webkit-appearance: button;
  color: ${theme('colors.text')};
  border-color: ${theme('colors.secondary')};
  background-color: ${theme('colors.black')};
  cursor: pointer;
  border-width: 0.2rem;
  border-top-style: solid;
  border-bottom-style: solid;
  border-left: none;
  border-right: none;
  display: flex;
  justify-content: space-between;
  padding: 0;

  &:hover,
  &:active {
    background-color: ${theme('colors.secondary')};
    
    & div:after, & div:before {
      border-left-color: ${theme('colors.secondary')};
      border-right-color: ${theme('colors.secondary')};
    }
  }

  & span {
    display: block;
    padding: 1rem 1rem;
  }
`;

export const MultipleChoiceElementLeftArrow = styled.div`
  position: absolute;
  left: -2.25rem;
  top: -0.25rem;
  width: 0;
  height: 0;
  border-top: 2.40rem solid transparent;
  border-bottom: 2.35rem solid transparent;
  border-right: 2.35rem solid ${theme('colors.secondary')};
  
  &:before {
    display: block;
    content: " ";
    position: relative;
    left: 0.25rem;
    top: -2.2rem;
    width: 0;
    height: 0;
    border-top: 2.20rem solid transparent;
    border-bottom: 2.15rem solid transparent;
    border-right: 2.10rem solid ${theme('colors.black')};
  }
`;

export const MultipleChoiceElementRightArrow = styled.div`
  position: absolute;
  right: -2.25rem;
  top: -0.25rem;
  width: 0;
  height: 0;
  border-top: 2.40rem solid transparent;
  border-bottom: 2.35rem solid transparent;
  border-left: 2.35rem solid ${theme('colors.secondary')};

  &:before {
    display: block;
    content: " ";
    position: relative;
    right: 2.35rem;
    top: -2.2rem;
    width: 0;
    height: 0;
    border-top: 2.20rem solid transparent;
    border-bottom: 2.15rem solid transparent;
    border-left: 2.10rem solid ${theme('colors.black')};
  }
`;
