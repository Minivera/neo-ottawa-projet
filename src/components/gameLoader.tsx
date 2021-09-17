/** @jsx jsx */
import { jsx } from '@emotion/react';
import styled from '@emotion/styled';
import { FunctionComponent } from 'react';
import { theme } from 'styled-tools';
import { MenuContainer } from './menuContainer';

export interface GameLoaderProps {
  percent?: number;
}

export const LoadingArrow = styled.div<GameLoaderProps>`
  position: relative;
  line-height: 1.15;
  margin: 0.5rem 3.5rem;
  color: ${theme('colors.white')};
  padding: 0 1.3rem;
  min-width: 60vw;
  text-align: center;
  font-size: 22px;
  font-family: VCR-OSD-MONO;

  ${props =>
    props.percent && props.percent >= 1
      ? `
    & div[data-direction="left"]:before {
      border-right-color: ${
        theme('colors.primary')(props) as unknown as string
      };
    }
  `
      : ''}

  ${props =>
    props.percent && props.percent >= 100
      ? `
    & div[data-direction="right"]:before {
      border-left-color: ${
        theme('colors.primary')(props) as unknown as string
      };
    }
  `
      : ''}

  & span {
    border-width: 0.2rem;
    border-top-style: solid;
    border-bottom-style: solid;
    border-color: ${theme('colors.primary')};
    background-color: ${theme('colors.darkGray')};
    display: block;
    padding: 1rem 1rem;

    ${props =>
      props.percent
        ? `
      background: linear-gradient(
        to right,
        ${theme('colors.primary')(props) as unknown as string} 0%,
        ${
          theme('colors.primary')(props) as unknown as string
        } ${props.percent.toFixed(0)}%,
        ${
          theme('colors.darkGray')(props) as unknown as string
        } ${props.percent.toFixed(0)}%
      );
    `
        : ''}
  }
`;

const LeftSide = styled.div`
  position: absolute;
  left: -0.65rem;
  width: 0;
  height: 0;
  border-top: 2rem solid transparent;
  border-bottom: 2rem solid transparent;
  border-right: 2rem solid ${theme('colors.primary')};

  &:before {
    display: block;
    content: ' ';
    position: relative;
    left: 0.25rem;
    top: -1.8rem;
    width: 0;
    height: 0;
    border-top: 1.8rem solid transparent;
    border-bottom: 1.8rem solid transparent;
    border-right: 1.8rem solid ${theme('colors.black')};
  }
`;

const RightSide = styled.div`
  position: absolute;
  right: -0.65rem;
  bottom: 0;
  width: 0;
  height: 0;
  border-top: 2rem solid transparent;
  border-bottom: 2rem solid transparent;
  border-left: 2rem solid ${theme('colors.primary')};

  &:before {
    display: block;
    content: ' ';
    position: relative;
    right: 2rem;
    top: -1.8rem;
    width: 0;
    height: 0;
    border-top: 1.75rem solid transparent;
    border-bottom: 1.8rem solid transparent;
    border-left: 1.8rem solid ${theme('colors.black')};
  }
`;

export const GameLoader: FunctionComponent<GameLoaderProps> = ({ percent }) => (
  <MenuContainer>
    <LoadingArrow percent={percent}>
      <LeftSide data-direction="left" />
      <span>
        {percent ? `Loading - ${percent.toFixed(0)}%` : 'Preparing...'}
      </span>
      <RightSide data-direction="right" />
    </LoadingArrow>
  </MenuContainer>
);
