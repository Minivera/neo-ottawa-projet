/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import { Portal } from 'react-portal';
import { Story } from 'inkjs/engine/Story';
import { useMediaQuery } from 'react-responsive';

import { PDATabControl } from '../components/pda/pdaTabControl';
import { PDAHomeTab } from '../components/pda/pdaHomeTab';
import { PDADocumentsTab } from '../components/pda/pdaDocumentsTab';
import { PDAContactsTab } from '../components/pda/pdaContactsTab';
import { PDAQuizzesTab } from '../components/pda/pdaQuizzesTab';
import { Choice, Quiz } from './event';
import { PDAQuizTab } from '../components/pda/pdaQuizTab';
import { Settings } from '../hooks/useSettings';
import { AnimatedOpen } from '../components/animatedOpen';
import { getQuizHistory } from './gameLog';
import { PDADocumentView } from '../components/pda/pdaDocumentView';
import { PDAQuizView } from '../components/pda/pdaQuizView';
import { PDAStaticTransition } from '../components/pda/pdaStaticTransition';
import { PDAMobileTabControl } from '../components/pda/pdaMobileTabControl';

/* eslint-disable no-unused-vars */
export enum PDATab {
  HOME = 'home',
  QUIZZES = 'quizzes',
  CONTACTS = 'contacts',
  DOCUMENTS = 'documents',
}
/* eslint-enable no-unused-vars */

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

export interface QuizInfo {
  quizId: string;
  name: string;
}

export interface PDA {
  enabled?: boolean;
  documents: Document[];
  contacts: Contact[];
  quizzes: QuizInfo[];
}

interface PDAVariables {
  /* eslint-disable camelcase */
  premiere_visite_pda: boolean;
  premiere_visite_quizzes: boolean;
  premiere_visite_contacts: boolean;
  premiere_visite_documents: boolean;
  /* eslint-enable camelcase */
}

export interface PDAComponentProps {
  opened?: boolean;
  selectedTab?: PDATab;
  story: Story;
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
  playSoundEffect: (
    effect: 'pdaOpen' | 'pdaClose' | 'pdaTabChange' | 'click'
  ) => void;
}

const PDAContainer: FunctionComponent<{ opened?: boolean }> = ({
  children,
  opened,
}) => (
  <Portal>
    <div
      css={theme => css`
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        height: 100vh;
        background: ${theme.colors.darkGreen};
        font-size: 1rem;
        font-family: VCR-OSD-MONO;
        display: flex;
        flex-direction: column;
        z-index: ${opened ? '7' : '-1'};
        transition: ${opened
          ? 'unset'
          : 'z-index 0.1s 0.75s, visibility 0.1s 0.75s'};

        pointer-events: ${opened ? 'all' : 'none'};
        visibility: ${opened ? 'unset' : 'hidden'};

        animation-name: ${opened ? 'zoomIn' : 'zoomOut'};
        animation-duration: 0.25s;
        animation-delay: ${opened ? '0s' : '0.50s'};
        animation-fill-mode: both;
      `}
    >
      <AnimatedOpen
        css={css`
          height: 100%;
        `}
        open={opened}
        overrideStateCSS={state => `
          & .noise, & .noise-wrapper, & .children-wrapper {
            ${state === 'entering' ? 'animation: unset;' : ''}
          }
          
          & .children-wrapper {
            opacity: 0;
          }
        `}
      >
        {children}
      </AnimatedOpen>
    </div>
  </Portal>
);

export const PDAComponent: FunctionComponent<PDAComponentProps> = ({
  opened,
  selectedTab,
  story,
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
  playSoundEffect,
}) => {
  const variables = story.variablesState as unknown as PDAVariables;

  const focusRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (opened && focusRef.current) {
      focusRef.current.focus();
    }
  }, [opened]);

  const [selectedQuiz, setSelectedQuiz] = useState<Quiz | null>(null);
  const [selectedDocument, setSelectedDocument] = useState<Document | null>(
    null
  );
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const handleFirstTabVisit = () => {
    switch (selectedTab) {
      case PDATab.HOME:
        variables.premiere_visite_pda = true;
        break;
      case PDATab.QUIZZES:
        variables.premiere_visite_quizzes = true;
        break;
      case PDATab.CONTACTS:
        variables.premiere_visite_contacts = true;
        break;
      case PDATab.DOCUMENTS:
        variables.premiere_visite_documents = true;
        break;
    }
  };

  const handlePDAClose = () => {
    handleFirstTabVisit();
    playSoundEffect('click');
    onPDAClosed();
  };

  const handleTabClick = (tab: PDATab) => {
    setSelectedDocument(null);
    setSelectedQuiz(null);
    handleFirstTabVisit();

    playSoundEffect('click');
    requestAnimationFrame(() => playSoundEffect('pdaTabChange'));
    onPDATabChanged(tab);
  };

  const onQuizClick = (quiz: QuizInfo) => {
    const quizState = getQuizHistory(story, quiz.name);

    if (quizState) {
      playSoundEffect('click');
      requestAnimationFrame(() => playSoundEffect('pdaTabChange'));
      setSelectedQuiz(quizState);
    }
  };

  const onDocumentClick = (document: Document) => {
    playSoundEffect('click');
    requestAnimationFrame(() => playSoundEffect('pdaTabChange'));
    setSelectedDocument(document);
  };

  let PDAModal = PDATabControl;
  if (isTabletOrMobile) {
    PDAModal = PDAMobileTabControl;
  }

  let tab: React.ReactElement | null = null;
  switch (selectedTab) {
    case PDATab.HOME:
      tab = (
        <PDAHomeTab key="home" firstVisit={!variables.premiere_visite_pda} />
      );
      break;
    case PDATab.QUIZZES:
      tab = (
        <PDAQuizzesTab
          pdaState={pdaState}
          onQuizClick={onQuizClick}
          key="quiz"
          firstVisit={!variables.premiere_visite_quizzes}
        />
      );
      break;
    case PDATab.CONTACTS:
      tab = (
        <PDAContactsTab
          pdaState={pdaState}
          key="contacts"
          firstVisit={!variables.premiere_visite_contacts}
        />
      );
      break;
    case PDATab.DOCUMENTS:
      tab = (
        <PDADocumentsTab
          key="documents"
          pdaState={pdaState}
          onDocumentClick={onDocumentClick}
          firstVisit={!variables.premiere_visite_documents}
        />
      );
      break;
  }

  if (quiz) {
    return (
      <PDAContainer opened>
        <PDAModal
          onTabClick={handleTabClick}
          selectedTab={PDATab.QUIZZES}
          onReturnClick={handlePDAClose}
          quizMode={!!quiz}
          ref={focusRef}
        >
          <PDAStaticTransition key="quiz">
            <PDAQuizTab
              quiz={quiz}
              settings={settings}
              onContinue={onContinue}
              onTextLoadingStart={onTextLoadingStart}
              onTextLoadingEnd={onTextLoadingEnd}
              onChoiceSelected={onChoiceSelected}
              skipAnimation={skipAnimation}
              playClickSound={() => playSoundEffect('click')}
            />
          </PDAStaticTransition>
        </PDAModal>
      </PDAContainer>
    );
  }

  if (selectedDocument) {
    return (
      <PDAContainer opened={opened}>
        <PDAModal
          onTabClick={handleTabClick}
          selectedTab={PDATab.DOCUMENTS}
          onReturnClick={handlePDAClose}
          quizMode={!!quiz}
          ref={focusRef}
        >
          <PDAStaticTransition key="document">
            <PDADocumentView
              onPrevClick={() => {
                handleTabClick(PDATab.DOCUMENTS);
              }}
              document={selectedDocument}
              playClickSound={() => playSoundEffect('click')}
            />
          </PDAStaticTransition>
        </PDAModal>
      </PDAContainer>
    );
  }

  if (selectedQuiz) {
    return (
      <PDAContainer opened={opened}>
        <PDAModal
          onTabClick={handleTabClick}
          selectedTab={PDATab.QUIZZES}
          onReturnClick={handlePDAClose}
          quizMode={!!quiz}
          ref={focusRef}
        >
          <PDAStaticTransition key="quiz_view">
            <PDAQuizView
              onPrevClick={() => {
                handleTabClick(PDATab.QUIZZES);
              }}
              quiz={selectedQuiz}
              playClickSound={() => playSoundEffect('click')}
            />
          </PDAStaticTransition>
        </PDAModal>
      </PDAContainer>
    );
  }

  return (
    <PDAContainer opened={opened}>
      <PDAModal
        onTabClick={handleTabClick}
        selectedTab={selectedTab || PDATab.HOME}
        onReturnClick={handlePDAClose}
        quizMode={!!quiz}
        ref={focusRef}
      >
        <PDAStaticTransition key={opened ? tab?.key : 'hidden'}>
          {tab}
        </PDAStaticTransition>
      </PDAModal>
    </PDAContainer>
  );
};
