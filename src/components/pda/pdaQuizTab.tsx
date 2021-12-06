/** @jsx jsx */
import React, { KeyboardEventHandler } from 'react';
import { jsx, css, useTheme } from '@emotion/react';
import { useTranslation } from 'react-i18next';
import { lighten, transparentize } from 'polished';
import { Portal } from 'react-portal';

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

import pdaVideo from '../../assets/videos/videoblocks-hud-futuristic.mp4';
import QuizIcon from '../../assets/ui/pda/PDA-Quiz.svg?component';

export interface PDAQuizTabProps {
  quiz: Quiz;
  settings: Settings;
  onContinue: () => void;
  onTextLoadingStart: () => void;
  onTextLoadingEnd: () => void;
  onChoiceSelected: (choice: Choice) => void;
  skipAnimation?: boolean;
}

export const PDAQuizTab: React.FunctionComponent<PDAQuizTabProps> = ({
  quiz,
  settings,
  onContinue,
  onTextLoadingStart,
  onTextLoadingEnd,
  onChoiceSelected,
  skipAnimation,
}) => {
  const [t] = useTranslation();
  const theme = useTheme();

  const handleClickContinue = () => onContinue();
  const handleKeyContinue: KeyboardEventHandler<HTMLDivElement> = event => {
    if (['Right', 'ArrowRight', 'Enter', 'Spacebar', ' '].includes(event.key)) {
      onContinue();
    }
  };

  return (
    <React.Fragment>
      <div
        css={css`
          position: absolute;
          inset: 0;
          opacity: 0.3;
          z-index: -2;
          overflow: hidden;
        `}
      >
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
      <div
        css={css`
          display: flex;
          justify-content: space-around;
          padding: 0 8rem;
          
          @media only screen and (max-width: 1600px) {
            flex-direction: column;
            align-items: center;
          }
        `}
      >
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
            {quiz.document && (
              <Expander
                title={t('pda_document_description')}
                css={css`
                  height: 80px;
                  z-index: 4;
                `}
              >
                {t(quiz.document.description)}
              </Expander>
            )}
            <p
              css={theme => css`
                color: ${theme.colors.white};
                padding-bottom: 0.8rem;
              `}
            >
              {quiz.question}
            </p>
            <div
              css={css`
                display: flex;
                flex-direction: column;
                margin-top: 1rem;
              `}
            >
              {quiz.choices.map(choice => {
                let text = choice.content;
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
        {quiz.document && quiz.document.path && (
          <div
            css={css`
              margin-left: 1rem;
            `}
          >
            <PDFReader pdfPath={quiz.document.path} />
          </div>
        )}
        {quiz.feedback && (
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
                      text={quiz.feedback}
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
    </React.Fragment>
  );
};
