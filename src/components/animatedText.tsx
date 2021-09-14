/** @jsx jsx */
import { Fragment, FunctionComponent } from 'react';
import { jsx, css, Global } from '@emotion/react';

export interface AnimatedTextProps {
  text: string;
}

const specialChars = {
  strongStart: 'Ƶ',
  strongEnd: 'ƶ',
};

export const AnimatedText: FunctionComponent<AnimatedTextProps> = ({
  text,
}) => {
  // TODO: Make this interpreter smarter
  text = text.replaceAll('<s>', specialChars.strongStart);
  text = text.replaceAll('</s>', specialChars.strongEnd);

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
          opacity: 0;
          animation: move-text 0.75s forwards;
          animation-delay: ${0.05 * index}s;
          ${isStrong ? 'font-weight: bold; color: white;' : ''}
        `}
      >
        {char}
      </span>
    );
    index++;
  }

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
