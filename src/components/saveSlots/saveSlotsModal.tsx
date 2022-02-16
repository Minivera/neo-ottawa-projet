/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { forwardRef, PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { darken } from 'polished';

import pdaBorderTopCenter from '../../assets/ui/modals/Border5-TopLeft.png';

import CloseIcon from '../../assets/ui/pda/PDA-RetourAuJeu.svg?component';
import SaveSlotsIcon from '../../assets/ui/icons/Historique.svg?component';

export interface SaveSlotsModalProps {
  onReturnClick: () => void;
  onButtonHover: () => void;
}

export const SaveSlotsModal = forwardRef<
  HTMLDivElement,
  PropsWithChildren<SaveSlotsModalProps>
>(({ onReturnClick, onButtonHover, children }, ref) => {
  const [t] = useTranslation();

  return (
    <div
      css={css`
        display: flex;
        position: relative;
        width: auto;
        pointer-events: none;
        max-height: calc(100% - 3.5rem);
        max-width: 85vw;
        margin: 1.75rem auto;

        @media only screen and (max-width: 800px) {
          margin: 1rem;
          max-height: calc(100% - 2rem);
          max-width: 100%;
        }

        @media only screen and (max-width: 436px) {
          margin: 0;
          max-height: 100%;
        }
      `}
    >
      <div
        css={css`
          overflow: hidden;
          display: grid;
          grid-template-columns: auto 42px auto 16rem;
          grid-template-rows: 50px auto;
        `}
      >
        <h2
          css={theme => css`
            grid-row: 1;
            grid-column: 1;
            border-bottom: 10px solid ${theme.colors.secondary};
            display: flex;
            align-items: center;
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
            padding-right: 0.5rem;
            color: ${theme.colors.yellow};
            z-index: 3;
            text-transform: uppercase;
            pointer-events: none;
            font-size: 1.2rem;
            margin: 0;

            @media only screen and (max-width: 320px) {
              padding-left: 0.5rem;
            }

            & svg {
              margin-left: -0.5rem;
              margin-top: 0.2rem;
              height: 1.2rem;
              fill: ${theme.colors.yellow};

              @media only screen and (max-width: 436px) {
                margin-left: 0.5rem;
                margin-right: 0.5rem;
                width: 1.2rem;
              }

              @media only screen and (max-width: 320px) {
                display: none;
              }
            }
          `}
        >
          <SaveSlotsIcon />
          {t('Sauvegardes')}
        </h2>
        <div
          css={css`
            grid-row: 1;
            grid-column: 2;
            z-index: 3;
            pointer-events: none;
          `}
        >
          <img src={pdaBorderTopCenter} alt="side slant" />
        </div>
        <div
          css={theme => css`
            grid-row: 1;
            grid-column: 3;
            border-top: 10px solid ${theme.colors.secondary};
            background: ${theme.colors.darkGreen};
            z-index: 3;
            pointer-events: none;
          `}
        />
        <div
          css={theme => css`
            grid-row: 1;
            grid-column: 4;
            padding-left: 1.7rem;
            position: relative;
            border-top: 10px solid ${theme.colors.secondary};
            background: ${theme.colors.darkGreen};
            z-index: 3;
            pointer-events: auto;
          `}
        >
          <div
            css={theme => css`
              position: absolute;
              top: 0;
              left: 0;
              height: 100%;
              width: 1.7rem;
              background: linear-gradient(
                to right top,
                transparent 48%,
                ${theme.colors.secondary} 49%,
                ${theme.colors.secondary} 51%,
                ${theme.colors.secondary} 52%
              );
            `}
          />
          <div
            role="button"
            onClick={onReturnClick}
            onKeyPress={e => {
              if (e.code === 'Enter') {
                onReturnClick();
              }
            }}
            onMouseOver={onButtonHover}
            onFocus={onButtonHover}
            tabIndex={0}
            css={theme => css`
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100%;
              padding: 0.5rem 0.5rem 1rem;
              background-color: ${theme.colors.secondary};
              cursor: pointer;
              transition: all 150ms ease;

              & svg {
                height: 2rem;
                transition: inherit;
              }

              &:hover,
              &:active {
                & svg {
                  fill: ${darken(0.2, theme.colors.yellow)};
                }
              }
            `}
          >
            <CloseIcon />
            <span>{t('pda_return')}</span>
          </div>
        </div>
        <div
          css={theme => css`
            grid-row: 2;
            grid-column: 1 / span 4;
            z-index: 2;
            background: ${theme.colors.darkGreen};
            color: ${theme.colors.secondary};
            border-left: 10px solid ${theme.colors.secondary};
            border-right: 10px solid ${theme.colors.secondary};
            border-bottom: 10px solid ${theme.colors.secondary};
            display: flex;
            overflow: hidden;
          `}
        >
          <div
            ref={ref}
            css={theme => css`
              font-size: 1rem;
              display: flex;
              position: relative;
              overflow-x: hidden;
              overflow-y: auto;
              padding: 3rem;
              flex: 1 1 auto;
              flex-direction: column;
              width: 100%;
              pointer-events: auto;

              @media only screen and (max-width: 436px) {
                padding: 1rem;
              }

              &::-webkit-scrollbar {
                width: 0.5rem;
                margin-right: 5rem;
                position: relative;
              }

              &::-webkit-scrollbar-track {
                background: ${theme.colors.lightGray};
                border-left: 5px solid transparent;
                border-right: 5px solid transparent;
                background-clip: padding-box;
              }

              &::-webkit-scrollbar-thumb {
                background-color: ${theme.colors.yellow};
              }
            `}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
});
