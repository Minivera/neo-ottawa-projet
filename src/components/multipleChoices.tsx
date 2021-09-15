import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { theme } from 'styled-tools';
import { lighten } from 'polished';

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
  overflow: hidden;
  text-transform: none;
  -webkit-appearance: button;
  color: ${theme('colors.text')};
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0 1.3rem;

  &:hover,
  &:active {
    & span {
      color: ${props => lighten(0.4, theme('colors.text')(props) as unknown as string)};
      background-color: ${theme('colors.secondary')};
    }

    & div[data-arrow-direction="left"] {
      background: ${theme('colors.secondary')};
      clip-path: polygon(0 -0.4rem, 50% 50%, 0 calc(100% + 0.4rem));
      transform: rotate(180deg);
    }

    & div[data-arrow-direction="right"] {
      background: ${theme('colors.secondary')};
      clip-path: polygon(0 -0.4rem, 50% 50%, 0 calc(100% + 0.4rem));
    }
  }

  & span {
    border-width: 0.2rem;
    border-top-style: solid;
    border-bottom-style: solid;
    border-color: ${theme('colors.secondary')};
    display: block;
    padding: 1rem 1rem;
  }
`;

const LeftArrow = styled.div`
  position: absolute;
  left: -1.45rem;
  top: -0.2rem;
  width: 3rem;
  height: calc(100% + 0.4rem);
  background: linear-gradient(
      to left top,
      transparent 48%,
      ${theme('colors.secondary')} 49%,
      ${theme('colors.secondary')} 51%,
      transparent 52%
    ),
    linear-gradient(
      to left bottom,
      transparent 48%,
      ${theme('colors.secondary')} 49%,
      ${theme('colors.secondary')} 51%,
      transparent 52%
    );
`;

export const MultipleChoiceElementLeftArrow: FunctionComponent = props => (
  <LeftArrow data-arrow-direction="left" {...props} />
);

const RightArrow = styled.div`
  position: absolute;
  right: -1.45rem;
  top: -0.2rem;
  width: 3rem;
  height: calc(100% + 0.4rem);
  background: linear-gradient(
      to right top,
      transparent 48%,
      ${theme('colors.secondary')} 49%,
      ${theme('colors.secondary')} 51%,
      transparent 52%
    ),
    linear-gradient(
      to right bottom,
      transparent 48%,
      ${theme('colors.secondary')} 49%,
      ${theme('colors.secondary')} 51%,
      transparent 52%
    );
`;

export const MultipleChoiceElementRightArrow: FunctionComponent = props => (
  <RightArrow data-arrow-direction="right" {...props} />
);
