/** @jsx jsx */
import { css, jsx, Theme } from '@emotion/react';
import { FunctionComponent } from 'react';
import { Portal } from 'react-portal';

import { PDATabControl } from '../components/pda/pdaTabControl';
import { PDAHomeTab } from '../components/pda/pdaHomeTab';
import { PDADocumentsTab } from '../components/pda/pdaDocumentsTab';
import { PDAMapTab } from '../components/pda/pdaMapTab';
import { PDAContactsTab } from '../components/pda/pdaContactsTab';
import { PDAEvidenceTab } from '../components/pda/pdaEvidenceTab';
import { Choice, Quiz } from './event';
import { PDAQuizTab } from '../components/pda/pdaQuizTab';
import { Settings } from '../hooks/useSettings';
import { AnimatedOpen } from '../components/animatedOpen';

export enum PDATab {
  HOME = 'home',
  DOCUMENTS = 'documents',
  MAP = 'map',
  CONTACTS = 'contacts',
  EVIDENCE = 'evidence',
}

export interface Document {
  documentId: string;
  name: string;
  description: string;
  path?: string;
}

export interface Contact {
  characterId: string;
  name: string;
  description: string;
  type: 'police' | 'resistance';
}

export interface Evidence {
  evidenceId: string;
  name: string;
  type: 'phone' | 'computer' | 'result' | 'disk';
}

export interface PDA {
  enabled?: boolean;
  open?: boolean;
  tab?: PDATab;
  documents: Document[];
  contacts: Contact[];
  evidence: Evidence[];
}

export interface PDAComponentProps {
  pdaState: PDA;
  settings: Settings;
  onPDAClosed: () => void;
  onPDATabChanged: (tab: PDATab) => void;
  quiz?: Quiz;
  onContinue: () => void;
  onTextLoadingStart: () => void;
  onTextLoadingEnd: () => void;
  onChoiceSelected: (choice: Choice) => void;
  skipAnimation?: boolean;
}

export const PDAComponent: FunctionComponent<PDAComponentProps> = ({
  pdaState,
  settings,
  onPDAClosed,
  onPDATabChanged,
  quiz,
  onContinue,
  onTextLoadingStart,
  onTextLoadingEnd,
  onChoiceSelected,
  skipAnimation,
}) => {
  let Tab: React.FunctionComponent<{ pdaState: PDA }> | null = null;
  switch (pdaState.tab) {
    case PDATab.HOME:
      Tab = PDAHomeTab;
      break;
    case PDATab.DOCUMENTS:
      Tab = PDADocumentsTab;
      break;
    case PDATab.MAP:
      Tab = PDAMapTab;
      break;
    case PDATab.CONTACTS:
      Tab = PDAContactsTab;
      break;
    case PDATab.EVIDENCE:
      Tab = PDAEvidenceTab;
      break;
  }

  const containerCSS = (theme: Theme) => css(`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${theme.colors.darkGreen};
    font-size: 1rem;
    font-family: VCR-OSD-MONO;
    display: flex;
    flex-direction: column;
    
    ${pdaState.open ? '' : 'z-index: -10;'}
  `);

  if (quiz) {
    return (
      <Portal>
        <AnimatedOpen css={containerCSS} open>
          <PDATabControl
            onTabClick={onPDATabChanged}
            selectedTab={PDATab.DOCUMENTS}
            onReturnClick={onPDAClosed}
            quizMode={!!quiz}
          >
            <PDAQuizTab
              quiz={quiz}
              settings={settings}
              onContinue={onContinue}
              onTextLoadingStart={onTextLoadingStart}
              onTextLoadingEnd={onTextLoadingEnd}
              onChoiceSelected={onChoiceSelected}
              skipAnimation={skipAnimation}
            />
          </PDATabControl>
        </AnimatedOpen>
      </Portal>
    );
  }

  return (
    <Portal>
      <AnimatedOpen css={containerCSS} open={pdaState.open}>
        <PDATabControl
          onTabClick={onPDATabChanged}
          selectedTab={pdaState.tab || PDATab.HOME}
          onReturnClick={onPDAClosed}
          quizMode={!!quiz}
        >
          {Tab && <Tab pdaState={pdaState} />}
        </PDATabControl>
      </AnimatedOpen>
    </Portal>
  );
};
