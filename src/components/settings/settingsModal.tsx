import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { theme } from 'styled-tools';
import { useTranslation } from 'react-i18next';
import { darken } from 'polished';

import pdaBorderTopCenter from '../../assets/ui/modals/Border5-TopLeft.png';
import pdaBorderBotRight from '../../assets/ui/modals/Border1-TopCenter.png';

import CloseIcon from '../../assets/ui/pda/PDA-RetourAuJeu.svg?component';
import SettingsIcon from '../../assets/ui/icons/Parametres.svg?component';

const SettingsContainer = styled.div`
  padding: 2rem;
  min-width: 25rem;
`;

const SettingsBackgroundGrid = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: min-content 42px auto 2.5rem 30px;
  grid-template-rows: 50px auto 30px;
`;

const SettingsTitle = styled.div`
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

const SettingsTopLeftSide = styled.div`
  grid-row: 1;
  grid-column: 2;
  z-index: 3;
  pointer-events: none;
`;

const SettingsTopBorder = styled.div`
  grid-row: 1;
  grid-column: 3;
  border-top: 0.4em solid ${theme('colors.secondary')};
  background: ${theme('colors.darkGreen')};
  z-index: 3;
  pointer-events: none;
`;

const SettingsReturnButton = styled.div`
  grid-row: 1;
  grid-column: 4 / span 2;
  padding-left: 1.7rem;
  position: relative;
  border-top: 0.4em solid ${theme('colors.secondary')};
  background: ${theme('colors.darkGreen')};
  z-index: 3;
`;

const SettingsReturnSide = styled.div`
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

const SettingsReturnInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0.5rem 0.5rem 1rem;
  background-color: ${theme('colors.secondary')};
  cursor: pointer;
  transition: all 150ms ease;

  & svg {
    height: 2rem;
    transition: inherit;
  }

  &:hover,
  &:active {
    & svg {
      fill: ${props =>
        darken(0.2, theme('colors.yellow')(props) as unknown as string)};
    }
  }
`;

const SettingsLeftBorder = styled.div`
  grid-row: 2 / span 2;
  grid-column: 1;
  border-left: 0.4em solid ${theme('colors.secondary')};
  z-index: 3;
  pointer-events: none;
`;

const SettingsRightBorder = styled.div`
  grid-row: 2;
  grid-column: 5;
  border-right: 0.4em solid ${theme('colors.secondary')};
  z-index: 3;
  pointer-events: none;
  background: ${theme('colors.darkGreen')};
`;

const SettingsBottomRightCorner = styled.div`
  grid-row: 3;
  grid-column: 5;
  z-index: 3;
  pointer-events: none;
  
  & img {
    height: 100%;
    width: 100%;
  }
`;

const SettingsBottomBorder = styled.div`
  grid-row: 3;
  grid-column: 1 / span 4;
  border-bottom: 0.4em solid ${theme('colors.secondary')};
  border-left: 0.4em solid ${theme('colors.secondary')};
  z-index: 3;
  pointer-events: none;
  background: ${theme('colors.darkGreen')};
`;

const SettingsContent = styled.div`
  grid-row: 2;
  grid-column: 1 / span 4;
  z-index: 2;
  background: ${theme('colors.darkGreen')};
  color: ${theme('colors.secondary')};
  font-size: 1rem;
  display: flex;
  position: relative;
  overflow: hidden;
`;

export interface SettingsModalProps {
  onReturnClick: () => void;
}

export const SettingsModals: FunctionComponent<SettingsModalProps> = ({
  onReturnClick,
  children,
}) => {
  const [t] = useTranslation();

  return (
    <SettingsContainer>
      <SettingsBackgroundGrid>
        <SettingsTitle>
          <SettingsIcon />
          {t('settings')}
        </SettingsTitle>
        <SettingsTopLeftSide>
          <img src={pdaBorderTopCenter} alt="side slant" />
        </SettingsTopLeftSide>
        <SettingsTopBorder />
        <SettingsReturnButton>
          <SettingsReturnSide />
          <SettingsReturnInner>
            <CloseIcon onClick={onReturnClick} />
          </SettingsReturnInner>
        </SettingsReturnButton>
        <SettingsLeftBorder />
        <SettingsRightBorder />
        <SettingsBottomRightCorner>
          <img src={pdaBorderBotRight} alt="side bottom triangle" />
        </SettingsBottomRightCorner>
        <SettingsBottomBorder />
        <SettingsContent>{children}</SettingsContent>
      </SettingsBackgroundGrid>
    </SettingsContainer>
  );
};
