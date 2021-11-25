/* @jsx jsx */
import { jsx, css } from '@emotion/react';
import { FunctionComponent } from 'react';

import { MobilePhone } from './mobilePhone';

export interface CharacterPortraitProps {
  active?: boolean;
  inPhone?: boolean;
}

// TODO: Redo the phone in pure CSS
export const CharacterPortrait: FunctionComponent<CharacterPortraitProps> = ({
  children,
  inPhone,
  active,
}) => (
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
      <MobilePhone
        css={css`
          align-self: flex-end;
          margin-bottom: 10rem;
        
          & svg {
            width: 200% !important;
            margin-left: -50%;
          }
        `}
      >
        {children}
      </MobilePhone>
    ) : (
      children
    )}
  </div>
);
