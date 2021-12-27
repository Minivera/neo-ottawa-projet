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
}) => (
  <div
    data-type="animation-container"
    css={
      animate
        ? css`
            position: relative;
            animation: ${animation};
            animation-duration: ${duration}s;
            animation-fill-mode: both;
          `
        : css`
            position: relative;
          `
    }
    {...rest}
  />
);
