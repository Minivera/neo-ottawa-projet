import React from 'react';
import styled from '@emotion/styled';
import { IoSettingsSharp } from 'react-icons/io5';
import { useTranslation } from 'react-i18next';
import { theme } from 'styled-tools';
import { darken, transparentize } from 'polished';

export interface GameMenuProps {
  onPDAClick: () => void;
  onSettingsClick: () => void;
}

const GameMenuContainer = styled.div`
  position: absolute;
  top: 5rem;
  right: 0;
  background-color: transparent;
  padding-left: 1.7rem;
  filter: drop-shadow(0 0.4rem 0.4rem ${theme('colors.gray')});
`;

const GameMenuSide = styled.div`
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

const GameMenuInnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0.5rem;
  background-color: ${theme('colors.secondary')};

  & a:first-child {
    padding-right: 1rem;
    border-right: 2px solid ${props => transparentize(0.4, theme('colors.lightGray')(props) as unknown as string)};
  }

  & a:last-child {
    margin-left: 0.5rem;
  }
`;

const GameMenuLink = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
  text-transform: uppercase;
  font-family: Arial, Helvetica, sans-serif;
  padding: 0.4rem 0.4rem;
  
  & svg {
    margin-right: 0.4rem;
    margin-top: -0.2rem;
  }
  
  &:hover, &:active {
    color: ${props => darken(0.2, theme('colors.yellow')(props) as unknown as string)};
  }
`;

export const GameMenu: React.FunctionComponent<GameMenuProps> = ({ onPDAClick, onSettingsClick }) => {
  const [t] = useTranslation();

  return (
    <GameMenuContainer>
      <GameMenuSide />
      <GameMenuInnerContainer>
        <GameMenuLink onClick={onPDAClick}>
          <span>{t('pda')}</span>
        </GameMenuLink>
        <GameMenuLink onClick={onSettingsClick}>
          <IoSettingsSharp />
          <span>{t('settings')}</span>
        </GameMenuLink>
      </GameMenuInnerContainer>
    </GameMenuContainer>
  );
};
