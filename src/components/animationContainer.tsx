/* @jsx jsx */
import { jsx, css } from '@emotion/react';

import { CharacterAnimation } from '../game/event';
import { FunctionComponent } from 'react';

export interface AnimationContainerProps {
  animate?: boolean;
  duration: number;
  animation?: CharacterAnimation;
}

export const AnimationContainer: FunctionComponent<AnimationContainerProps> = ({
  animate,
  duration,
  animation,
  ...rest
}) => {
  let animationCSS = '';
  switch (animation) {
    case 'move_up':
      animationCSS = `
        bottom: 100%;
        animation: move-up ${duration}s forwards;
      `;
      break;
    case 'move_down':
      animationCSS = `
        bottom: 0;
        animation: move-down ${duration}s forwards;
      `;
      break;
    case 'fade_in':
      animationCSS = `
        bottom: 0;
        opacity: 0;
        animation: fade-in ${duration}s forwards;
      `;
      break;
    case 'fade_out':
      animationCSS = `
        bottom: 0;
        opacity: 1;
        animation: fade-out ${duration}s forwards;
      `;
      break;
  }

  return (
    <div
      data-type="animation-container"
      css={css`
        @keyframes move-up {
          0% {
            bottom: -100%;
            opacity: 0.5;
          }
          90% {
            bottom: 1.5rem;
            opacity: 1;
          }
          100% {
            bottom: 0;
            opacity: 1;
          }
        }

        @keyframes fade-in {
          0% {
            opacity: 0;
          }
          60% {
            opacity: 0.8;
          }
          100% {
            opacity: 1;
          }
        }
        
        @keyframes move-down {
          0% {
            bottom: 0;
            opacity: 1;
          }
          10% {
            bottom: 1.5rem;
            opacity: 1;
          }
          100% {
            bottom: -100%;
            opacity: 0.5;
          }
        }

        @keyframes fade-out {
          0% {
            opacity: 1;
          }
          40% {
            opacity: 0.8;
          }
          100% {
            opacity: 0;
          }
        }

        position: relative;
        ${animate ? animationCSS : ''}
      `}
      {...rest}
    />
  );
};
