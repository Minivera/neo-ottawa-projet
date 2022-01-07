/** @jsx jsx */
import { ReactElement, Fragment, FunctionComponent, useEffect } from 'react';
import { jsx, css, Global } from '@emotion/react';

export interface AnimatedTextProps {
  text: string;
  onTextLoadingStart: () => void;
  onTextLoadingEnd: () => void;
  skipAnimation?: boolean;
  animationSpeed: number;
}

const specialChars = {
  strongStart: 'Ƶ',
  strongEnd: 'ƶ',
  italicStart: 'Ʒ',
  italicEnd: 'Ƹ',
  lineBreak: 'ƴ',
};

export const AnimatedText: FunctionComponent<AnimatedTextProps> = ({
  text,
  onTextLoadingStart,
  onTextLoadingEnd,
  skipAnimation,
  animationSpeed,
}) => {
  // TODO: Make this interpreter smarter
  text = text.replaceAll('<b>', specialChars.strongStart);
  text = text.replaceAll('</b>', specialChars.strongEnd);
  text = text.replaceAll('<i>', specialChars.italicStart);
  text = text.replaceAll('</i>', specialChars.italicEnd);
  text = text.replaceAll('<br/>', specialChars.lineBreak);

  const parts = text.split('');
  const letters: ReactElement[] = [];
  let isStrong = false;
  let isItalic = false;
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
    if (char === specialChars.italicStart) {
      isItalic = true;
      continue;
    } else if (char === specialChars.italicEnd) {
      isItalic = false;
      continue;
    }
    if (char === specialChars.lineBreak) {
      letters.push(<br key={`${index}_1`} />, <br key={`${index}_2`} />);
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
                animation: move-text ${animationSpeed}s forwards;
                animation-delay: ${0.05 * index}s;
              `}
          ${isStrong ? 'font-weight: bold; color: white;' : ''}
          ${isItalic ? 'font-style: italic;' : ''}
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
      // add a slight delay so the user has the time to understand the animation is done
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
              left: 0.5rem;
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
