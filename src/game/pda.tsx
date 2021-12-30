/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import { Portal } from 'react-portal';
import { Story } from 'inkjs/engine/Story';

import { PDATabControl } from '../components/pda/pdaTabControl';
import { PDAHomeTab } from '../components/pda/pdaHomeTab';
import { PDADocumentsTab } from '../components/pda/pdaDocumentsTab';
import { PDAMapTab } from '../components/pda/pdaMapTab';
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

import pdaVideo from '../assets/videos/videoblocks-hud-futuristic.mp4';

/* eslint-disable no-unused-vars */
export enum PDATab {
  HOME = 'home',
  QUIZZES = 'quizzes',
  MAP = 'map',
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
        transition: ${opened ? 'unset' : 'z-index 0.1s 0.75s, visibility 0.1s 0.75s'};

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
}) => {
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

  const handleTabClick = (tab: PDATab) => {
    setSelectedDocument(null);
    setSelectedQuiz(null);
    onPDATabChanged(tab);
  };

  const onQuizClick = (quiz: QuizInfo) => {
    const quizState = getQuizHistory(story, quiz.name);

    if (quizState) {
      setSelectedQuiz(quizState);
    }
  };

  const onDocumentClick = (document: Document) => {
    setSelectedDocument(document);
  };

  let tab: React.ReactElement | null = null;
  switch (selectedTab) {
    case PDATab.HOME:
      tab = <PDAHomeTab key="home" />;
      break;
    case PDATab.QUIZZES:
      tab = (
        <PDAQuizzesTab
          pdaState={pdaState}
          onQuizClick={onQuizClick}
          key="quiz"
        />
      );
      break;
    case PDATab.MAP:
      tab = <PDAMapTab pdaState={pdaState} key="map" />;
      break;
    case PDATab.CONTACTS:
      tab = <PDAContactsTab pdaState={pdaState} key="contacts" />;
      break;
    case PDATab.DOCUMENTS:
      tab = (
        <PDADocumentsTab
          key="documents"
          pdaState={pdaState}
          onDocumentClick={onDocumentClick}
        />
      );
      break;
  }

  if (quiz) {
    return (
      <PDAContainer opened>
        <PDATabControl
          onTabClick={handleTabClick}
          selectedTab={PDATab.QUIZZES}
          onReturnClick={onPDAClosed}
          quizMode={!!quiz}
          ref={focusRef}
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
      </PDAContainer>
    );
  }

  if (selectedDocument) {
    return (
      <PDAContainer opened>
        <PDATabControl
          onTabClick={handleTabClick}
          selectedTab={PDATab.DOCUMENTS}
          onReturnClick={onPDAClosed}
          quizMode={!!quiz}
          ref={focusRef}
        >
          <PDADocumentView
            onPrevClick={() => {
              handleTabClick(PDATab.DOCUMENTS);
            }}
            document={selectedDocument}
          />
        </PDATabControl>
      </PDAContainer>
    );
  }

  if (selectedQuiz) {
    return (
      <PDAContainer opened>
        <PDATabControl
          onTabClick={handleTabClick}
          selectedTab={PDATab.QUIZZES}
          onReturnClick={onPDAClosed}
          quizMode={!!quiz}
          ref={focusRef}
        >
          <PDAQuizView
            onPrevClick={() => {
              handleTabClick(PDATab.QUIZZES);
            }}
            quiz={selectedQuiz}
          />
        </PDATabControl>
      </PDAContainer>
    );
  }

  return (
    <PDAContainer opened={opened}>
      <PDATabControl
        onTabClick={handleTabClick}
        selectedTab={selectedTab || PDATab.HOME}
        onReturnClick={onPDAClosed}
        quizMode={!!quiz}
        ref={focusRef}
      >
        <div
          css={css`
            position: absolute;
            inset: 0;
            opacity: 0.3;
            z-index: -2;
            overflow: hidden;
          `}
        >
          {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
          <video
            /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
            // @ts-ignore
            src={pdaVideo}
            css={css`
              position: relative;
              inset: 0;
            `}
          />
        </div>
        <PDAStaticTransition key={opened ? tab?.key : 'hidden'}>
          {tab}
        </PDAStaticTransition>
      </PDATabControl>
    </PDAContainer>
  );
};
