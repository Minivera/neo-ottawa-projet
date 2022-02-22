/** @jsx jsx */
import React, { useState, FunctionComponent } from 'react';
import { jsx, css } from '@emotion/react';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import { theme, ifProp } from 'styled-tools';
import { darken, transparentize } from 'polished';
import { useMediaQuery } from 'react-responsive';

import SettingsIcon from '../assets/ui/icons/Parametres.svg?component';
import PDAIcon from '../assets/ui/pda/PDA-LePDA.svg?component';
import SaveIcon from '../assets/ui/icons/Sauvegarder.svg?component';
import GameLogIcon from '../assets/ui/icons/Historique.svg?component';
import MinimizeIcon from '../assets/ui/icons/Minimiser-maximiser.svg?component';

const GameMenuLink = styled.a`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  font-weight: bold;
  font-size: 0.8rem;
  text-transform: uppercase;
  font-family: Arial, Helvetica, sans-serif;
  padding: 0.8rem 0.8rem;
  border-bottom: 2px solid
    ${props =>
      transparentize(
        0.4,
        theme('colors.lightGray')(props) as unknown as string
      )};
  color: ${theme('colors.darkGreen')};
  transition: all 150ms ease;

  & svg {
    fill: ${theme('colors.darkGreen')};
    width: 1.3rem;
    height: 1.3rem;
    margin-right: 0.6rem;
    transition: inherit;
  }

  &:hover,
  &:active {
    color: ${props =>
      darken(0.2, theme('colors.yellow')(props) as unknown as string)};

    & svg {
      fill: ${props =>
        darken(0.2, theme('colors.yellow')(props) as unknown as string)};
    }
  }

  @media only screen and (max-width: 768px) {
    & span {
      font-size: 1.2rem;
    }

    & svg {
      width: 1.8rem;
      height: 1.8rem;
    }
  }
`;

const MinimizeLink = styled.a<{ open?: boolean }>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  font-weight: bold;
  font-size: 0.8rem;
  text-transform: uppercase;
  font-family: Arial, Helvetica, sans-serif;
  padding: 0.5rem 0.8rem;
  background-color: ${theme('colors.darkGreen')};
  color: ${theme('colors.secondary')};
  transition: all 150ms ease;

  & svg {
    fill: ${theme('colors.secondary')};
    width: 1.3rem;
    height: 1.3rem;
    margin-right: 0.6rem;

    transition: fill 150ms ease, transform ease-in-out 500ms;
    ${ifProp('open', '', 'transform: rotate(180deg);')}
  }

  &:hover,
  &:active {
    color: ${props =>
      darken(0.2, theme('colors.yellow')(props) as unknown as string)};

    & svg {
      fill: ${props =>
        darken(0.2, theme('colors.yellow')(props) as unknown as string)};
    }
  }

  @media only screen and (max-width: 768px) {
    & span {
      font-size: 1.2rem;
    }

    & svg {
      width: 1.8rem;
      height: 1.8rem;
    }
  }
`;

export interface GameMenuProps {
  onPDAClick: () => void;
  onSettingsClick: () => void;
  onGameLogClick: () => void;
  onSaveClick: () => void;
  showPDA?: boolean;
  locationName?: string;
  playClickSound: () => void;
  onButtonHover: () => void;
}

export const GameMenu: FunctionComponent<GameMenuProps> = ({
  onPDAClick,
  onSettingsClick,
  onGameLogClick,
  onSaveClick,
  showPDA,
  locationName,
  playClickSound,
}) => {
  const [t] = useTranslation();
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const [open, setOpen] = useState<boolean>(!isTabletOrMobile);

  const locationNameTranslated = locationName ? t(locationName): undefined;

  return (
    <React.Fragment>
      {locationNameTranslated && locationNameTranslated !== locationName ? (
        <div
          css={theme => css`
            position: absolute;
            z-index: 5;
            top: 0;
            left: 0;
            background-color: ${theme.colors.secondary};
            filter: drop-shadow(0 0.4rem 0.4rem ${theme.colors.gray});
          `}
        >
          <div
            css={theme => css`
              position: relative;
              display: flex;
              justify-content: center;
              flex-direction: column;
              font-size: 1.4rem;
              font-weight: bold;
              color: ${theme.colors.darkGray};
              padding: 0.6rem 1.2rem;
              font-family: Arial, Helvetica, sans-serif;
              margin-left: 2rem;

              &:after {
                right: -3rem;
                position: absolute;
                content: ' ';
                width: 0;
                height: 0;
                border-top: 3rem solid ${theme.colors.secondary};
                border-right: 3rem solid transparent;
              }
            `}
          >
            {locationNameTranslated}
          </div>
        </div>
      ) : null}
      <div
        css={theme => css`
          position: absolute;
          top: 5rem;
          background-color: transparent;
          filter: drop-shadow(0 0.4rem 0.4rem ${theme.colors.gray});
          z-index: 5;
          transition: right ease-in-out 500ms;
          width: 11rem;

          ${open ? 'right: 0' : 'right: -8.3rem'};

          @media only screen and (max-width: 768px) {
            width: 13rem;
            ${open ? 'right: 0;' : 'right: -10.1rem;'}
          }
        `}
      >
        <nav
          css={theme => css`
            display: flex;
            justify-content: center;
            flex-direction: column;
            background-color: ${theme.colors.secondary};
          `}
        >
          {showPDA && (
            <GameMenuLink
              role="link"
              onClick={onPDAClick}
              onKeyPress={e => {
                if (e.code === 'Enter') {
                  onPDAClick();
                }
              }}
              tabIndex={0}
            >
              <PDAIcon />
              <span>{t('pda')}</span>
            </GameMenuLink>
          )}
          <GameMenuLink
            role="link"
            onClick={onSettingsClick}
            onKeyPress={e => {
              if (e.code === 'Enter') {
                onSettingsClick();
              }
            }}
            tabIndex={0}
          >
            <SettingsIcon />
            <span>{t('settings')}</span>
          </GameMenuLink>
          <GameMenuLink
            role="link"
            onClick={onGameLogClick}
            onKeyPress={e => {
              if (e.code === 'Enter') {
                onGameLogClick();
              }
            }}
            tabIndex={0}
          >
            <GameLogIcon />
            <span>{t('game_log')}</span>
          </GameMenuLink>
          <GameMenuLink
            role="link"
            onClick={onSaveClick}
            onKeyPress={e => {
              if (e.code === 'Enter') {
                onSaveClick();
              }
            }}
            tabIndex={0}
          >
            <SaveIcon />
            <span>{t('menu_save')}</span>
          </GameMenuLink>
          <MinimizeLink
            role="link"
            onClick={() => {
              playClickSound();
              setOpen(!open);
            }}
            onKeyPress={e => {
              playClickSound();
              if (e.code === 'Enter') {
                setOpen(!open);
              }
            }}
            tabIndex={0}
            open={open}
          >
            <MinimizeIcon />
            <span>{t('menu_minimize')}</span>
          </MinimizeLink>
        </nav>
      </div>
    </React.Fragment>
  );
};
