/** @jsx jsx */
import { css, jsx, Theme } from '@emotion/react';
import { FunctionComponent } from 'react';
import { Transition } from 'react-transition-group';
import { Interpolation } from '@emotion/serialize';

export interface AnimatedOpenProps {
  open?: boolean;
  duration?: number;
  css?: Interpolation<Theme>
}

export const AnimatedOpen: FunctionComponent<AnimatedOpenProps> = ({
  open,
  duration = 300,
  children,
  ...rest
}) => (
  <Transition in={open} timeout={duration}>
    {state => (
      <div
        css={css`
          transition: opacity ${duration}ms ease-in-out;
          opacity: ${state === 'entered' || state === 'entering' ? 1 : 0};
          ${state === 'entered' || state === 'entering' || state === 'exiting' ? 'z-index: 7 !important;' : ''}
          ${state === 'exited' ? 'z-index: -3 !important;' : ''}
        `}
        {...rest}
      >
        {children}
      </div>
    )}
  </Transition>
);
