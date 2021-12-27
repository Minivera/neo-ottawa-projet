/** @jsx jsx */
import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { jsx, css } from '@emotion/react';
import { darken } from 'polished';

import { PDA, QuizInfo } from '../../game/pda';
import { PDATitle } from './pdaTitle';

import QuizzesIcon from '../../assets/ui/pda/PDA-Quiz.svg?component';
import CompletedQuizIcon from '../../assets/ui/icons/QuizCompleted.svg?component';
import pdaVideo from '../../assets/videos/videoblocks-hud-futuristic.mp4';

export interface PDAQuizzesTabProps {
  pdaState: PDA;
  onQuizClick: (quiz: QuizInfo) => void;
}

export const PDAQuizzesTab: React.FunctionComponent<PDAQuizzesTabProps> = ({
  pdaState,
  onQuizClick,
}) => {
  const [t] = useTranslation();

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
        padding: 0 10rem;
      `}
      >
        <div
          css={css`
          display: flex;
          flex-direction: column;
        `}
        >
          <PDATitle>
            <QuizzesIcon />
            <Trans i18nKey="pda_documents" />
          </PDATitle>
          {pdaState.quizzes.length > 0 ? (
            <ul
              css={css`
              margin: 0;
              padding: 0;
              overflow-y: auto;
            `}
            >
              {pdaState.quizzes.map(quiz => (
                <li
                  key={quiz.name}
                  onClick={() => onQuizClick(quiz)}
                  css={theme => css`
                  border-bottom: 0.1rem solid ${theme.colors.lightGray};
                  padding: 1rem 0;
                  font-size: 1.8rem;
                  font-style: italic;
                  display: flex;
                  list-style: none;
                  align-items: center;
                  cursor: pointer;

                  &:hover {
                    background-color: ${theme.colors.secondary};
                    color: ${darken(0.2, theme.colors.yellow)};
                  }

                  &:last-of-type {
                    border-bottom: none;
                  }
                `}
                >
                  <div
                    css={theme =>
                      css`
                      display: flex;
                      align-items: center;
                      font-size: 1.5rem;

                      & svg {
                        fill: ${theme.colors.yellow};
                        margin-right: 1rem;
                        height: 1.6rem;
                        width: 1.6rem;
                      }
                    `
                    }
                  >
                    <CompletedQuizIcon />
                    {t(quiz.name)}
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div>
              <Trans i18nKey="pda_none" />
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};
