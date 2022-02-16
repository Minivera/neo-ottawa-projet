/** @jsx jsx */
import React, { KeyboardEventHandler } from 'react';
import { jsx, css, useTheme } from '@emotion/react';
import { useTranslation } from 'react-i18next';
import { lighten, transparentize } from 'polished';
import { Portal } from 'react-portal';
import { useMediaQuery } from 'react-responsive';

import { Choice, Quiz } from '../../game/event';
import { PDFReader } from '../pdfReader';
import { Settings } from '../../hooks/useSettings';
import { AnimatedText } from '../animatedText';
import { HexagonButton } from '../hexagonButton';
import { SceneContainer } from '../sceneContainer';
import { DialogBox } from '../dialogBox';
import { NextButton } from '../nextButton';
import { Expander } from '../expander';
import { PDATitle } from './pdaTitle';
import { PDFDownloadButton } from '../pdfDownload';

import QuizIcon from '../../assets/ui/pda/PDA-Quiz.svg?component';

export interface PDAQuizTabProps {
  quiz: Quiz;
  settings: Settings;
  onContinue: () => void;
  onTextLoadingStart: () => void;
  onTextLoadingEnd: () => void;
  onChoiceSelected: (choice: Choice) => void;
  skipAnimation?: boolean;
  playClickSound: () => void;
}

export const PDAQuizTab: React.FunctionComponent<PDAQuizTabProps> = ({
  quiz,
  settings,
  onContinue,
  onTextLoadingStart,
  onTextLoadingEnd,
  onChoiceSelected,
  skipAnimation,
  playClickSound,
}) => {
  const [t] = useTranslation();
  const theme = useTheme();
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const handleClickContinue = () => onContinue();
  const handleKeyContinue: KeyboardEventHandler<HTMLDivElement> = event => {
    if (['Right', 'ArrowRight', 'Enter', 'Spacebar', ' '].includes(event.key)) {
      onContinue();
    }
  };

  const currentQuestion = quiz.questions[quiz.currentIndex - 1];
  if (!currentQuestion) {
    return (
      <div>
        <PDATitle>
          <QuizIcon />
          {quiz.name} - {quiz.currentIndex} / {quiz.questionCount}
        </PDATitle>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            margin-right: 1rem;
            font-size: 1.5rem;
          `}
        >
          Something wrong happened
        </div>
      </div>
    );
  }

  return (
    <div
      css={css`
        display: flex;
        justify-content: space-around;
        padding: 0 8rem;

        @media only screen and (max-width: 1600px) {
          flex-direction: column;
          align-items: center;
        }

        @media only screen and (max-width: 480px) {
          padding: 0 1rem;
        }
      `}
    >
      <div>
        <PDATitle>
          <QuizIcon />
          {t(quiz.name)} - {quiz.currentIndex} / {quiz.questionCount}
        </PDATitle>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            margin-right: 1rem;
            font-size: 1.5rem;
          `}
        >
          {currentQuestion.document && (
            <Expander
              title={t('pda_document_description')}
              css={css`
                height: 80px;
                z-index: 4;
              `}
            >
              {t(currentQuestion.document.description)}
            </Expander>
          )}
          {isTabletOrMobile &&
            currentQuestion.document &&
            currentQuestion.document.path && (
              <div
                css={css`
                  padding-bottom: 1.8rem;
                `}
              >
                <p
                  css={theme => css`
                    color: ${theme.colors.white};
                    padding-bottom: 0.8rem;
                  `}
                >
                  {t('pdf_download_mobile')}
                </p>
                <div
                  css={theme => css`
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    background-color: ${theme.colors.secondary};
                    color: ${theme.colors.darkGray};
                    padding: 1.5rem 1rem;
                    font-size: 1.6rem;
                  `}
                >
                  <PDFDownloadButton
                    pdfPath={currentQuestion.document.path}
                    playClickSound={playClickSound}
                  />
                </div>
              </div>
            )}
          <p
            css={theme => css`
              color: ${theme.colors.white};
              padding-bottom: 0.8rem;
            `}
          >
            {currentQuestion.question}
          </p>
          <div
            css={css`
              display: flex;
              flex-direction: column;
              margin-top: 1rem;
            `}
          >
            {currentQuestion.choices.map(choice => {
              let text = choice.content.replace('CACHER--', '');
              let active = false;
              if (choice.content.includes('ACTIF--')) {
                text = choice.content.replace('ACTIF--', '');
                active = true;
              }
              let visited = false;
              if (choice.content.includes('VISITE--')) {
                text = choice.content.replace('VISITE--', '');
                visited = true;
              }

              return (
                <div
                  key={choice.id}
                  css={theme => css`
                    & button {
                      width: 100%;
                      margin: 0;
                      color: ${theme.colors.lightGray};
                    }
                  `}
                >
                  <HexagonButton
                    onClick={() => onChoiceSelected(choice)}
                    color={lighten(0.4, theme.colors.text)}
                    backgroundColor={theme.colors.black}
                    borderColor={theme.colors.secondary}
                    hoverColor={theme.colors.white}
                    hoverBackgroundColor={theme.colors.secondary}
                    active={active}
                    visited={visited}
                  >
                    {text}
                  </HexagonButton>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {!isTabletOrMobile &&
        currentQuestion.document &&
        currentQuestion.document.path && (
          <div
            css={css`
              margin-left: 1rem;

              @media only screen and (max-width: 1600px) {
                margin-left: 0;
                margin-top: 2rem;
              }
            `}
          >
            <PDFReader
              pdfPath={currentQuestion.document.path}
              playClickSound={playClickSound}
            />
          </div>
        )}
      {currentQuestion.feedback && (
        <Portal>
          <div
            css={theme => css`
              position: fixed;
              inset: 0;
              z-index: 7;
              background-color: ${transparentize(0.4, theme.colors.darkGray)};

              & div {
                width: 100%;
                height: 100%;
              }
            `}
          >
            <SceneContainer
              onClick={handleClickContinue}
              onKeyDown={handleKeyContinue}
              tabIndex={-1}
            >
              <DialogBox center>
                <p>
                  <AnimatedText
                    text={currentQuestion.feedback}
                    onTextLoadingStart={onTextLoadingStart}
                    onTextLoadingEnd={onTextLoadingEnd}
                    skipAnimation={
                      !settings.textAnimationsEnabled || skipAnimation
                    }
                    animationSpeed={settings.textAnimationSpeed}
                  />
                </p>
                {(!settings.textAnimationsEnabled || skipAnimation) && (
                  <NextButton />
                )}
              </DialogBox>
            </SceneContainer>
          </div>
        </Portal>
      )}
    </div>
  );
};
