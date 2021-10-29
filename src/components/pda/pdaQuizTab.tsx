/** @jsx jsx */
import React, { KeyboardEventHandler } from 'react';
import { jsx, css, useTheme } from '@emotion/react';
import { useTranslation } from 'react-i18next';

import { Choice, Quiz } from '../../game/event';
import { PDFReader } from '../pdfReader';
import { Settings } from '../../hooks/useSettings';
import { AnimatedText } from '../animatedText';
import { lighten, transparentize } from 'polished';
import { HexagonButton } from '../hexagonButton';
import { SceneContainer } from '../sceneContainer';
import { DialogBox } from '../dialogBox';
import { NextButton } from '../nextButton';

import pdaVideo from '../../assets/videos/videoblocks-hud-futuristic.mp4';

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
      <video
        /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
        // @ts-ignore
        src={pdaVideo}
        css={css`
          position: absolute;
          inset: 0;
          opacity: 0.3;
          z-index: -2;
          width: 100%;
        `}
      />
      <div
        css={css`
          display: flex;
          justify-content: space-around;
          height: calc(100% - 6rem);
          width: calc(100% - 4rem);
          margin: 4rem 2rem 2rem;
          padding: 0 5rem;
        `}
      >
        {quiz.document && quiz.document.path && (
          <div
            css={css`
              margin-right: 1rem;
            `}
          >
            <PDFReader pdfPath={quiz.document.path} />
          </div>
        )}
        <div
          css={css`
            display: flex;
            flex-direction: column;
            margin-left: 1rem;
          `}
        >
          <h3
            css={theme => css`
              color: ${theme.colors.yellow};
              border-bottom: ${theme.colors.lightGray} solid 0.1rem;
              padding-bottom: 0.8rem;
              text-transform: uppercase;
            `}
          >
            {quiz.question}
          </h3>
          <div
            css={css`
              display: flex;
              flex-wrap: wrap;
              align-items: flex-start;

              & div:nth-child(odd) {
                justify-content: flex-end;
              }

              & div:nth-child(even) {
                justify-content: flex-start;
              }

              ${quiz.choices.length % 2 === 1
                ? `
              & div:last-child {
                justify-content: center;
                width: 100%;
              }
            `
                : ''}
            `}
          >
            {quiz.choices.map(choice => {
              let text = choice.content;
              let active = false;
              if (choice.content.includes('ACTIF--')) {
                text = choice.content.replace('ACTIF--', '');
                active = true;
              }

              return (
                <div
                  key={choice.id}
                  css={css`
                    width: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    & button {
                      margin: 0.5rem 1.5rem;
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
                  >
                    {text}
                  </HexagonButton>
                </div>
              );
            })}
          </div>
          {quiz.document && (
            <div
              css={css`
                flex: 1;
                display: flex;
                align-items: center;
              `}
            >
              <div
                css={theme => css`
                  background-color: ${transparentize(
                    0.2,
                    theme.colors.darkGray
                  )};
                  color: ${theme.colors.text};
                  border: solid 0.4rem ${theme.colors.primary};
                  font-size: 1.2rem;
                  padding: 0.4rem;
                `}
              >
                <h4>
                  {t('pda_document_description', {
                    name: t(quiz.document.name),
                  })}
                </h4>
                <p>{t(quiz.document.description)}</p>
              </div>
            </div>
          )}
        </div>
        {quiz.feedback && (
          <div
            css={theme => css`
              position: absolute;
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
        )}
      </div>
    </React.Fragment>
  );
};
