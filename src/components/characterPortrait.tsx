/* @jsx jsx */
import { jsx, css } from '@emotion/react';
import { FunctionComponent, useRef } from 'react';

import PortraitPhone from '../assets/ui/phone.svg?component';
import PortraitPhoneWithBg from '../assets/ui/phone-with-background.svg?component';

export interface CharacterPortraitProps {
  active?: boolean;
  inPhone?: boolean;
}

// TODO: Redo the phone in pure CSS
export const CharacterPortrait: FunctionComponent<CharacterPortraitProps> = ({
  children,
  inPhone,
  active,
}) => {
  const phoneRef = useRef<HTMLDivElement>(null);

  let positionFromTop = '0';
  let positionFromLeft = '0';
  let height = 'auto';
  let width = 'auto';

  if (phoneRef.current) {
    const svg = phoneRef.current.querySelector('svg');
    const g = phoneRef.current.querySelector('svg > g');

    if (svg && g) {
      height = g.getClientRects()[0].height.toFixed(2) + 'px';
      width = g.getClientRects()[0].width.toFixed(2) + 'px';

      positionFromTop =
        (g.getClientRects()[0].y - svg.getClientRects()[0].y).toFixed(2) + 'px';
      positionFromLeft =
        (g.getClientRects()[0].x - svg.getClientRects()[0].x).toFixed(2) + 'px';
    }
  }

  return (
    <div
      css={theme => css`
        position: relative;
        padding: 0 1.5rem;
        max-height: 100%;
        display: flex;
        justify-content: center;
        transition: transform 200ms ease-in-out;
        transform-origin: center;
        filter: drop-shadow(0 0 0.2rem ${theme.colors.yellow});

        ${active
          ? ''
          : `
            transform: scale(0.95);
            filter: grayscale(40%);
          `}
      `}
    >
      {inPhone ? (
        <div
          ref={phoneRef}
          css={css`
            display: grid;
            height: 100%;
            width: auto;
            position: relative;
            margin-bottom: -13rem;

            & > div {
              position: absolute;
              width: auto;
              overflow: hidden;
              z-index: 1;
              height: ${height};
              border-radius: 70px;
              top: ${positionFromTop};

              & div {
                padding-left: ${positionFromLeft};
                padding-top: 5rem;
              }

              & svg {
                width: ${width};
              }
            }
          `}
        >
          <PortraitPhoneWithBg
            css={theme => css`
              height: 100%;
              grid-row: 1;
              grid-column: 1;

              & rect {
                fill: ${theme.colors.darkGray};
              }
            `}
          />
          {children}
          <PortraitPhone
            css={css`
              height: 100%;
              grid-row: 1;
              grid-column: 1;
              z-index: 2;
            `}
          />
        </div>
      ) : (
        children
      )}
    </div>
  );
};
