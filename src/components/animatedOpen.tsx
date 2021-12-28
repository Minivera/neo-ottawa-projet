/** @jsx jsx */
import { css, jsx, Theme } from '@emotion/react';
import { FunctionComponent } from 'react';
import { Transition, TransitionStatus } from 'react-transition-group';
import { Interpolation } from '@emotion/serialize';

export interface AnimatedOpenProps {
  open?: boolean;
  duration?: number;
  css?: Interpolation<Theme>;
  overrideStateCSS?: (status: TransitionStatus) => string;
}

export const AnimatedOpen: FunctionComponent<AnimatedOpenProps> = ({
  open,
  duration = 0.75,
  children,
  overrideStateCSS,
  ...rest
}) => (
  <Transition in={open} timeout={duration * 1000}>
    {state => (
      <div
        css={css`
          @keyframes unfoldIn {
            0% {
              transform: scaleY(0.005) scaleX(0);
            }
            50% {
              transform: scaleY(0.005) scaleX(1);
            }
            100% {
              transform: scaleY(1) scaleX(1);
            }
          }

          @keyframes unfoldOut {
            0% {
              transform: scaleY(1) scaleX(1);
            }
            50% {
              transform: scaleY(0.005) scaleX(1);
            }
            100% {
              transform: scaleY(0.005) scaleX(0);
            }
          }

          transform: scaleY(0.01) scaleX(0);
          animation: ${state === 'entering' || state === 'entered'
              ? 'unfoldIn'
              : 'unfoldOut'}
            ${duration}s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
          ${overrideStateCSS ? overrideStateCSS(state) : ''}
        `}
        {...rest}
      >
        {children}
      </div>
    )}
  </Transition>
);
