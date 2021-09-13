import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { switchProp } from 'styled-tools';

import { CharacterAnimation } from '../game/scene';

export interface AnimationContainerProps {
  animation?: CharacterAnimation;
}

export const AnimationContainer = styled.div<AnimationContainerProps>`
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

  position: relative;
  ${switchProp(
    'animation',
    {
      'move-up': css`
      bottom: 100%;
      animation: move-up 0.75s forwards;
    `,
      'fade-in': css`
      opacity: 0;
      animation: fade-in 0.75s forwards;
    `,
    },
    ''
  )}
`;
