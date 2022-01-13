/** @jsx jsx */
import React, { useState } from 'react';
import { jsx, css, useTheme, Theme } from '@emotion/react';
import { useTranslation } from 'react-i18next';
import { darken, lighten, rgba, transparentize } from 'polished';
import { FaStar } from 'react-icons/all';

import { Quiz } from '../../game/event';
import { PDFReader } from '../pdfReader';
import { HexagonButton } from '../hexagonButton';
import { Expander } from '../expander';
import { PDATitle } from './pdaTitle';
import { IconButton } from '../iconButton';

import QuizIcon from '../../assets/ui/icons/QuizCompleted.svg?component';
import ReturnArrow from '../../assets/ui/icons/Minimiser-maximiser.svg?component';
import NextIcon from '../../assets/ui/icons/FlecheNEXT.svg?component';
import PreviousIcon from '../../assets/ui/icons/FlechePREVIOUS.svg?component';

export interface PDAQuizViewProps {
  quiz: Quiz;
  onPrevClick: () => void;
}

export const PDAQuizView: React.FunctionComponent<PDAQuizViewProps> = ({
  quiz,
  onPrevClick,
}) => {
  const [t] = useTranslation();
  const theme = useTheme();
  const [selectedQuestion, setSelectedQuestion] = useState<number>(0);

  const previousQuestion = () => {
    setSelectedQuestion(selectedQuestion => Math.max(0, selectedQuestion - 1));
  };

  const nextQuestion = () => {
    setSelectedQuestion(selectedQuestion =>
      Math.min(quiz.questionCount - 1, selectedQuestion + 1)
    );
  };

  const buttonStyles = (theme: Theme, disabled: boolean) =>
    css(`
    color: ${
      disabled ? transparentize(0.5, theme.colors.yellow) : theme.colors.yellow
    };
  
    ${
      !disabled
        ? `
    &:hover {
      color: ${darken(0.3, theme.colors.yellow)};
  
      & svg {
        fill: ${darken(0.3, theme.colors.yellow)};
      }
    }
  `
        : ''
    }

  & svg {
    fill: ${
      disabled ? transparentize(0.5, theme.colors.yellow) : theme.colors.yellow
    };
  }
  `);

  const currentQuestion = quiz.questions[selectedQuestion];

  return (
    <div
      css={css`
        display: flex;
        justify-content: space-around;
        padding: 0 8rem;
        position: relative;

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
        <button
          onClick={onPrevClick}
          css={theme => css`
            position: absolute;
            left: -2rem;
            font-size: 1.2rem;
            cursor: pointer;
            margin: 0;
            padding: 0;
            border: none;
            background: none;
            color: inherit;
            outline: inherit;

            svg {
              margin-right: 0.5rem;
              transform: rotate(180deg);
              fill: ${theme.colors.secondary};
              height: 1rem;
              width: 1rem;
            }

            &:hover {
              color: ${darken(0.2, theme.colors.secondary)};

              svg {
                fill: ${darken(0.2, theme.colors.secondary)};
              }
            }
          `}
        >
          <ReturnArrow />
          {t('pda_prev_tab')}
        </button>
        <div>
          <PDATitle>
            <QuizIcon />
            <IconButton
              disabled={selectedQuestion <= 0}
              onClick={previousQuestion}
              css={theme => buttonStyles(theme, selectedQuestion <= 0)}
            >
              <PreviousIcon />
            </IconButton>
            {currentQuestion.perfectAnswer && (
              <FaStar
                css={theme => css`
                  fill: ${theme.colors.yellow}
                  margin-right: 0.5rem;
                  
                  box-shadow: 0 0 0 0 ${theme.colors.yellow};
                  animation: pulse 2s infinite;
                  
                  @keyframes pulse-purple {
                    0% {
                      transform: scale(0.95);
                      box-shadow: 0 0 0 0 ${rgba(theme.colors.yellow, 0.7)};
                    }
                    
                    70% {
                      transform: scale(1);
                      box-shadow: 0 0 0 10px ${rgba(theme.colors.yellow, 0)};
                    }
                    
                    100% {
                      transform: scale(0.95);
                      box-shadow: 0 0 0 0 ${rgba(theme.colors.yellow, 0)};
                    }
                  }
                `}
              />
            )}
            {t(quiz.name)} - {selectedQuestion + 1} / {quiz.questionCount}
            <IconButton
              disabled={selectedQuestion >= quiz.questionCount - 1}
              onClick={nextQuestion}
              css={theme =>
                buttonStyles(theme, selectedQuestion >= quiz.questionCount - 1)
              }
            >
              <NextIcon />
            </IconButton>
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
                margin-bottom: 1.8rem;
              `}
            >
              {currentQuestion.choices
                .filter(choice => !choice.content.includes('CACHER--'))
                .map(choice => {
                  const text = choice.content.replace('ACTIF--', '');
                  const active = choice.isGoodChoice;

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
                        disabled
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
            {currentQuestion.feedback && (
              <Expander title={t('pda_document_feedback')}>
                {currentQuestion.feedback}
              </Expander>
            )}
          </div>
        </div>
      </div>
      {currentQuestion.document && currentQuestion.document.path && (
        <div
          css={css`
            margin-left: 1rem;
          `}
        >
          <PDFReader pdfPath={currentQuestion.document.path} />
        </div>
      )}
    </div>
  );
};
