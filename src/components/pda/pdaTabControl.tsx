import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { ifNotProp, ifProp, theme } from 'styled-tools';
import { useTranslation } from 'react-i18next';
import { darken } from 'polished';

import { PDATab } from '../../game/pda';

import pdaBorderTopCenter from '../../assets/ui/pda/Border1-TopCenter.png';
import pdaBorderTopRight from '../../assets/ui/pda/Border2-TopRight.png';
import pdaBorderBotLeft from '../../assets/ui/pda/Border3-BotLeft.png';
import pdaBorderBotRight from '../../assets/ui/pda/Border4-BotRight.png';

import CloseIcon from '../../assets/ui/pda/PDA-RetourAuJeu.svg?component';
import HomeIcon from '../../assets/ui/pda/PDA-LePDA.svg?component';
import DocumentsIcon from '../../assets/ui/pda/PDA-Documents.svg?component';
import MapIcon from '../../assets/ui/pda/PDA-PlanDeLaVille.svg?component';
import ContactIcon from '../../assets/ui/pda/PDA-Contacts.svg?component';
import EvidenceIcon from '../../assets/ui/pda/PDA-Preuves.svg?component';

const PDAContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 4rem;
`;

const PDABackgroundGrid = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 50px min-content 33px auto min-content 42px 50px;
  grid-template-rows: 50px 127px 1fr 330px 50px 42px;
`;

const PDANavigation = styled.div`
  background: ${theme('colors.darkGreen')};
  grid-row: 1;
  grid-column: 1 / span 2;
  border-bottom: 0.5rem solid ${theme('colors.secondary')};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  color: ${theme('colors.secondary')};
  z-index: 3;
`;

interface PDANavigationLinkProps {
  selected?: boolean;
  disabled?: boolean;
}

const PDANavigationLink = styled.a<PDANavigationLinkProps>`
  margin-right: 0.5rem;
  margin-left: 0.5rem;
  font-style: italic;
  ${ifNotProp('disabled', 'cursor: pointer;', '')}
  position: relative;
  white-space: nowrap;
  text-transform: uppercase;

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;
  }

  & svg {
    margin-right: 0.4rem;
    margin-top: 0.2rem;
    height: 1.2rem;
    fill: ${theme('colors.secondary')};
  }

  ${ifNotProp(
    'disabled',
    props => `
    &:hover, &:active {
      color: ${theme('colors.yellow')(props)};
      
      & svg {
        fill: ${theme('colors.yellow')(props)};
      }
    }
  `,
    props => `
    color: ${theme('colors.gray')(props)};
    
    & svg {
      fill: ${theme('colors.gray')(props)};
    }
  `
  )}

  ${ifProp(
    'selected',
    props => `
    color: ${theme('colors.yellow')(props)};
    
    & svg {
      fill: ${theme('colors.yellow')(props)};
    }
    
    &:after {
      content: " ";
      display: block;
      width: 0; 
      height: 0; 
      border-left: 0.7rem solid transparent;
      border-right: 0.7rem solid transparent;
      border-bottom: 1rem solid ${theme('colors.yellow')(props)};
      position: absolute;
      bottom: -1.5rem;
      left: calc(50% - 0.5rem);
    }
  `,
    ''
  )}
`;

const PDATopLeftSide = styled.div`
  grid-row: 1;
  grid-column: 3;
  z-index: 3;
`;

const PDATopBorder = styled.div`
  grid-row: 1;
  grid-column: 4;
  border-top: 0.5rem solid ${theme('colors.secondary')};
  z-index: 3;
`;

const PDAReturnButton = styled.div`
  grid-row: 1;
  grid-column: 5 / span 2;
  padding-left: 1.7rem;
  position: relative;
  border-top: 0.5rem solid ${theme('colors.secondary')};
  z-index: 3;
`;

const PDAReturnSide = styled.div`
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

const PDAReturnInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0.5rem 0.5rem 1rem;
  background-color: ${theme('colors.secondary')};
  cursor: pointer;
  white-space: nowrap;

  & svg {
    margin-right: 0.4rem;
    margin-top: 0.2rem;
    height: 1.2rem;
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

const PDATopRightSide = styled.div`
  grid-row: 1 / span 2;
  grid-column: 7;
  z-index: 3;
`;

const PDALeftBorder = styled.div`
  grid-row: 2 / span 3;
  grid-column: 1;
  border-left: 0.5rem solid ${theme('colors.secondary')};
  z-index: 3;
`;

const PDARightBorder = styled.div`
  grid-row: 3 / span 2;
  grid-column: 7;
  border-right: 0.5rem solid ${theme('colors.secondary')};
  margin-top: -0.5rem;
  z-index: 3;
`;

const PDABottomLeftSide = styled.div`
  grid-row: 4 / span 2;
  grid-column: 1;
  z-index: 3;
`;

const PDABottomLeftCorner = styled.div`
  grid-row: 6;
  grid-column: 1;
  border-left: 0.5rem solid ${theme('colors.secondary')};
  border-bottom: 0.5rem solid ${theme('colors.secondary')};
  margin-top: -0.5rem;
  z-index: 3;
`;

const PDABottomRightCorner = styled.div`
  grid-row: 5 / span 2;
  grid-column: 6 / span 2;
  z-index: 3;
`;

const PDABottomBorder = styled.div`
  grid-row: 6;
  grid-column: 2 / span 4;
  border-bottom: 0.5rem solid ${theme('colors.secondary')};
  z-index: 3;
`;

const PDAContent = styled.div`
  grid-row: 1 / span 6;
  grid-column: 1 / span 7;
  z-index: 2;
  color: ${theme('colors.secondary')};
  font-size: 1rem;
  max-width: 100%;
  max-height: 100%;
  display: flex;
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;

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

export interface PDATabControlProps {
  onTabClick: (tab: PDATab) => void;
  onReturnClick: () => void;
  selectedTab: PDATab;
  quizMode?: boolean;
}

export const PDATabControl: FunctionComponent<PDATabControlProps> = ({
  onTabClick,
  onReturnClick,
  selectedTab,
  quizMode,
  children,
}) => {
  const [t] = useTranslation();

  const clickTab = (tab: PDATab) => () => {
    if (!quizMode) {
      onTabClick(tab);
    }
  };

  const handleReturnClick = () => {
    if (!quizMode) {
      onReturnClick();
    }
  };

  return (
    <PDAContainer>
      <PDABackgroundGrid>
        <PDANavigation>
          <PDANavigationLink
            onClick={clickTab(PDATab.HOME)}
            selected={selectedTab === PDATab.HOME}
            disabled={quizMode}
          >
            <HomeIcon />
            {t('pda_home')}
          </PDANavigationLink>
          <PDANavigationLink
            onClick={clickTab(PDATab.DOCUMENTS)}
            selected={quizMode || selectedTab === PDATab.DOCUMENTS}
            disabled={quizMode}
          >
            <DocumentsIcon />
            {t('pda_documents')}
          </PDANavigationLink>
          <PDANavigationLink
            onClick={clickTab(PDATab.MAP)}
            selected={selectedTab === PDATab.MAP}
            disabled={quizMode}
          >
            <MapIcon />
            {t('pda_map')}
          </PDANavigationLink>
          <PDANavigationLink
            onClick={clickTab(PDATab.CONTACTS)}
            selected={selectedTab === PDATab.CONTACTS}
            disabled={quizMode}
          >
            <ContactIcon />
            {t('pda_contacts')}
          </PDANavigationLink>
          <PDANavigationLink
            onClick={clickTab(PDATab.EVIDENCE)}
            selected={selectedTab === PDATab.EVIDENCE}
            disabled={quizMode}
          >
            <EvidenceIcon />
            {t('pda_evidence')}
          </PDANavigationLink>
        </PDANavigation>
        <PDATopLeftSide>
          <img src={pdaBorderTopCenter} alt="side slant" />
        </PDATopLeftSide>
        <PDATopBorder />
        <PDAReturnButton onClick={handleReturnClick}>
          <PDAReturnSide />
          <PDAReturnInner>
            {!quizMode && (
              <React.Fragment>
                <CloseIcon />
                <a>{t('pda_return')}</a>
              </React.Fragment>
            )}
          </PDAReturnInner>
        </PDAReturnButton>
        <PDATopRightSide>
          <img src={pdaBorderTopRight} alt="side right lines" />
        </PDATopRightSide>
        <PDALeftBorder />
        <PDARightBorder />
        <PDABottomLeftSide>
          <img src={pdaBorderBotLeft} alt="side left lines" />
        </PDABottomLeftSide>
        <PDABottomLeftCorner />
        <PDABottomRightCorner>
          <img src={pdaBorderBotRight} alt="side bottom triangle" />
        </PDABottomRightCorner>
        <PDABottomBorder />
        <PDAContent>{children}</PDAContent>
      </PDABackgroundGrid>
    </PDAContainer>
  );
};
