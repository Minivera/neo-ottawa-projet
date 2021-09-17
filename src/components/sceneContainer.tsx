import styled from '@emotion/styled';
import { ifProp, prop, theme } from 'styled-tools';

export interface SceneContainerProps {
  background?: string;
  centerRow?: boolean;
}

export const SceneContainer = styled.div<SceneContainerProps>`
  font-size: 22px;
  font-family: VCR-OSD-MONO;
  ${props =>
    props.background
      ? `
    background-image: url(${prop('background')(props)});
    background-size: cover;
    background-position: right;
  `
      : `background-color: ${theme('colors.black')(props)};`}

  height: 100%;
  display: grid;
  grid-template-rows: ${ifProp('centerRow', '1fr auto 1fr', '1fr auto')};
  padding: 3rem 0;
  overflow: hidden;
`;
