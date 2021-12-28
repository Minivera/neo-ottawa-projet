import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { theme } from 'styled-tools';
import { useTranslation } from 'react-i18next';
import { darken } from 'polished';

import pdaBorderTopCenter from '../../assets/ui/modals/Border5-TopLeft.png';

import CloseIcon from '../../assets/ui/pda/PDA-RetourAuJeu.svg?component';
import GameLogIcon from '../../assets/ui/icons/Historique.svg?component';

const GameLogContainer = styled.div`
  max-height: calc(100% - 3.5rem);
  max-width: 85vw;
  margin: 1.75rem auto;
  display: flex;
  position: relative;
  width: auto;
  pointer-events: none;
`;

const GameLogBackgroundGrid = styled.div`
  max-height: calc(100vh - 3.5rem);
  overflow: hidden;
  display: grid;
  grid-template-columns: min-content 42px auto 16rem;
  grid-template-rows: 50px auto;
`;

const GameLogTitle = styled.div`
  grid-row: 1;
  grid-column: 1;
  border-bottom: 0.4em solid ${theme('colors.secondary')};
  display: flex;
  align-items: center;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-right: 0.5rem;
  color: ${theme('colors.yellow')};
  z-index: 3;
  text-transform: uppercase;
  pointer-events: none;
  font-size: 1.2rem;

  & svg {
    margin-left: -0.5rem;
    margin-top: 0.2rem;
    height: 1.2rem;
    fill: ${theme('colors.yellow')};
  }
`;

const GameLogTopLeftSide = styled.div`
  grid-row: 1;
  grid-column: 2;
  z-index: 3;
  pointer-events: none;
`;

const GameLogTopBorder = styled.div`
  grid-row: 1;
  grid-column: 3;
  border-top: 0.4em solid ${theme('colors.secondary')};
  background: ${theme('colors.darkGreen')};
  z-index: 3;
  pointer-events: none;
`;

const GameLogReturnButton = styled.div`
  grid-row: 1;
  grid-column: 4;
  padding-left: 1.7rem;
  position: relative;
  border-top: 0.4em solid ${theme('colors.secondary')};
  background: ${theme('colors.darkGreen')};
  z-index: 3;
  pointer-events: auto;
`;

const GameLogReturnSide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 1.7rem;
  background: linear-gradient(
    to right top,
    transparent 48%,
    ${theme('colors.secondary')} 49%,
    ${theme('colors.secondary')} 51%,
    ${theme('colors.secondary')} 52%
  );
`;

const GameLogReturnInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0.5rem 0.5rem 1rem;
  background-color: ${theme('colors.secondary')};
  cursor: pointer;

  & svg {
    height: 2rem;
  }

  &:hover,
  &:active {
    & svg {
      fill: ${props =>
        darken(0.2, theme('colors.yellow')(props) as unknown as string)};
    }
  }
`;

const GameLogContent = styled.div`
  grid-row: 2;
  grid-column: 1 / span 4;
  z-index: 2;
  background: ${theme('colors.darkGreen')};
  color: ${theme('colors.secondary')};
  border-left: 0.4em solid ${theme('colors.secondary')};
  border-right: 0.4em solid ${theme('colors.secondary')};
  border-bottom: 0.4em solid ${theme('colors.secondary')};
  display: flex;
  overflow: hidden;
`;

const GameLogContentInner = styled.div`
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

  &::-webkit-scrollbar {
    width: 0.5rem;
    margin-right: 5rem;
    position: relative;
  }

  &::-webkit-scrollbar-track {
    background: ${theme('colors.lightGray')};
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    background-clip: padding-box;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${theme('colors.yellow')};
  }
`;

export interface GameLogModalProps {
  onReturnClick: () => void;
}

export const GameLogModal: FunctionComponent<GameLogModalProps> = ({
  onReturnClick,
  children,
}) => {
  const [t] = useTranslation();

  return (
    <GameLogContainer>
      <GameLogBackgroundGrid>
        <GameLogTitle>
          <GameLogIcon />
          {t('game_log')}
        </GameLogTitle>
        <GameLogTopLeftSide>
          <img src={pdaBorderTopCenter} alt="side slant" />
        </GameLogTopLeftSide>
        <GameLogTopBorder />
        <GameLogReturnButton>
          <GameLogReturnSide />
          <GameLogReturnInner onClick={onReturnClick}>
            <CloseIcon />
            <a>{t('pda_return')}</a>
          </GameLogReturnInner>
        </GameLogReturnButton>
        <GameLogContent>
          <GameLogContentInner>{children}</GameLogContentInner>
        </GameLogContent>
      </GameLogBackgroundGrid>
    </GameLogContainer>
  );
};
