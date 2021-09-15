import styled from '@emotion/styled';

export interface GameContainerProps {
  fullscreen?: boolean;
}

export const GameContainer = styled.div<GameContainerProps>`
  position: relative;
  grid-row: 2;
  grid-column: 2;
  max-width: 1920px;
  max-height: 1024px;
  height: 100%;
  width: 100%;
`;
