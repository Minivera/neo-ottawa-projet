/** @jsx jsx */
import { Fragment, FunctionComponent, useEffect } from 'react';
import { jsx, css, Global } from '@emotion/react';

export interface AnimatedTextProps {
  text: string;
  onTextLoadingStart: () => void;
  onTextLoadingEnd: () => void;
  skipAnimation?: boolean;
}

const specialChars = {
  strongStart: 'Ƶ',
  strongEnd: 'ƶ',
};

export const AnimatedText: FunctionComponent<AnimatedTextProps> = ({
  text,
  onTextLoadingStart,
  onTextLoadingEnd,
  skipAnimation,
}) => {
  // TODO: Make this interpreter smarter
  text = text.replaceAll('<b>', specialChars.strongStart);
  text = text.replaceAll('</b>', specialChars.strongEnd);

  const parts = text.split('');
  const letters: React.ReactElement[] = [];
  let isStrong = false;
  let index = 0;
  for (const charIndex in parts) {
    const char = parts[charIndex];

    if (char === specialChars.strongStart) {
      isStrong = true;
      continue;
    } else if (char === specialChars.strongEnd) {
      isStrong = false;
      continue;
    }

    letters.push(
      <span
        aria-hidden="true"
        key={index}
        css={css`
          position: relative;
          ${skipAnimation
            ? ''
            : css`
                opacity: 0;
                animation: move-text 0.75s forwards;
                animation-delay: ${0.05 * index}s;
              `}
          ${isStrong ? 'font-weight: bold; color: white;' : ''}
        `}
      >
        {char}
      </span>
    );
    index++;
  }

  useEffect(() => {
    if (skipAnimation) {
      return;
    }

    onTextLoadingStart();

    const timeout = setTimeout(() => {
      onTextLoadingEnd();
      // add a 200 ms delay so the user has the time to understand the animation is done
    }, 0.05 * index * 1000 + 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [onTextLoadingEnd, text]);

  return (
    <Fragment>
      <Global
        styles={css`
          @keyframes move-text {
            0% {
              left: 0.5em;
              opacity: 1;
            }
            100% {
              left: 0;
              opacity: 1;
            }
          }
        `}
      />
      {letters}
    </Fragment>
  );
};
