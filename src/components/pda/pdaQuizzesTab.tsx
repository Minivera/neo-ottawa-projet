/** @jsx jsx */
import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { jsx, css } from '@emotion/react';
import { darken } from 'polished';

import { PDA, QuizInfo } from '../../game/pda';
import { PDATitle } from './pdaTitle';

import QuizzesIcon from '../../assets/ui/pda/PDA-Quiz.svg?component';
import CompletedQuizIcon from '../../assets/ui/icons/QuizCompleted.svg?component';

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
                css={theme => css`
                  border-bottom: 2px solid ${theme.colors.lightGray};

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
                  role="link"
                  onClick={() => onQuizClick(quiz)}
                  onKeyPress={e => {
                    if (e.code === 'Enter') {
                      onQuizClick(quiz);
                    }
                  }}
                  tabIndex={0}
                  css={theme =>
                    css`
                      display: flex;
                      align-items: center;
                      font-size: 1.5rem;
                      padding: 1rem 0;

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
  );
};
