import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import { theme, ifProp } from 'styled-tools';
import { darken, transparentize } from 'polished';

import SettingsIcon from '../assets/ui/icons/Parametres.svg?component';
import PDAIcon from '../assets/ui/pda/PDA-LePDA.svg?component';
import SaveIcon from '../assets/ui/icons/Sauvegarder.svg?component';
import GameLogIcon from '../assets/ui/icons/Historique.svg?component';
import MinimizeIcon from '../assets/ui/icons/Minimiser-maximiser.svg?component';

const GameMenuContainer = styled.div<{ open?: boolean }>`
  position: absolute;
  top: 5rem;
  background-color: transparent;
  filter: drop-shadow(0 0.4rem 0.4rem ${theme('colors.gray')});
  z-index: 5;
  transition: right ease-in-out 500ms;
  width: 11rem;

  ${ifProp('open', 'right: 0;', 'right: -8.3rem;')}
`;

const GameMenuInnerContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: ${theme('colors.secondary')};
`;

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
`;

export interface GameMenuProps {
  onPDAClick: () => void;
  onSettingsClick: () => void;
  onGameLogClick: () => void;
  onSaveClick: () => void;
  showPDA?: boolean;
}

export const GameMenu: React.FunctionComponent<GameMenuProps> = ({
  onPDAClick,
  onSettingsClick,
  onGameLogClick,
  onSaveClick,
  showPDA,
}) => {
  const [t] = useTranslation();
  const [open, setOpen] = useState<boolean>(true);

  return (
    <GameMenuContainer open={open}>
      <GameMenuInnerContainer>
        {showPDA && (
          <GameMenuLink onClick={onPDAClick}>
            <PDAIcon />
            <span>{t('pda')}</span>
          </GameMenuLink>
        )}
        <GameMenuLink onClick={onSettingsClick}>
          <SettingsIcon />
          <span>{t('settings')}</span>
        </GameMenuLink>
        <GameMenuLink onClick={onGameLogClick}>
          <GameLogIcon />
          <span>{t('game_log')}</span>
        </GameMenuLink>
        <GameMenuLink onClick={onSaveClick}>
          <SaveIcon />
          <span>{t('menu_save')}</span>
        </GameMenuLink>
        <MinimizeLink onClick={() => setOpen(!open)} open={open}>
          <MinimizeIcon />
          <span>{t('menu_minimize')}</span>
        </MinimizeLink>
      </GameMenuInnerContainer>
    </GameMenuContainer>
  );
};
