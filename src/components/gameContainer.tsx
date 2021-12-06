import styled from '@emotion/styled';
import { prop } from 'styled-tools';

export interface GameContainerProps {
  animationSpeed?: number;
}

export const GameContainer = styled.div<GameContainerProps>`
  position: relative;
  grid-row: 1 / span 3;
  grid-column: 1 / span 3;
  height: 100%;
  width: 100%;
  overflow-x: hidden;

  .fade-enter {
    opacity: 0;
  }

  .fade-exit {
    opacity: 1;
  }

  .fade-enter-active {
    opacity: 1;
  }

  .fade-exit-active {
    opacity: 0;
  }

  .fade-enter-active,
  .fade-exit-active {
    transition: opacity 500ms;
    
    div[data-type="animation-container"] {
      animation-delay: ${prop('animationSpeed', 0)}s;
    }
  }
`;
