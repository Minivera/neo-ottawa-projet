import styled from '@emotion/styled';
import { prop } from 'styled-tools';

export interface SceneContainerProps {
  background: string;
}

export const SceneContainer = styled.div<SceneContainerProps>`
  background-image: url(${prop('background')});
  background-size: cover;
  background-position: right;
  height: 100%;
  display: grid;
  grid-template-rows: auto max-content;
  padding: 3rem 0;
  overflow: hidden;
`;
