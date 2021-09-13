/** @jsx jsx */
import { Fragment, FunctionComponent } from 'react';
import { jsx, css, Global } from '@emotion/react';

export interface AnimatedTextProps {
  text: string;
}

export const AnimatedText: FunctionComponent<AnimatedTextProps> = ({ text }) => (
  <Fragment>
    <Global
      styles={css`
        @keyframes move-text {
          0% { left: 0.5em; opacity: 1 }
          100% { left: 0; opacity: 1; }
        }
      `}
    />
    {text.split('').map((char, index) => (
      <span
        aria-hidden="true"
        key={index}
        css={css`
          position: relative;
          opacity: 0;
          animation: move-text 0.75s forwards;
          animation-delay: ${0.05 * index}s;
        `}
      >
      {char}
    </span>
    ))}
  </Fragment>
);

