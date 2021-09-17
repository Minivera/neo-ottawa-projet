import styled from '@emotion/styled';

export interface GameContainerProps {
  fullscreen?: boolean;
}

export const GameContainer = styled.div<GameContainerProps>`
  position: relative;
  grid-row: 2;
  grid-column: 2;
  max-width: min(1920px, 90vw);
  max-height: min(1024px, 95vh);
  height: 100%;
  width: 100%;
`;
