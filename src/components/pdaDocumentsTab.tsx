/** @jsx jsx */
import React from 'react';
import { Trans } from 'react-i18next';
import { jsx, css } from '@emotion/react';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { darken } from 'polished';

import { PDA } from '../game/pda';

export interface PDADocumentsTabProps {
  pdaState: PDA;
}

export const PDADocumentsTab: React.FunctionComponent<PDADocumentsTabProps> = ({
  pdaState,
}) => (
  <div
    css={css`
      height: calc(100% - 5rem);
      width: calc(100% - 8rem);
      margin: 4rem 4rem 1rem;
      padding: 4rem 10rem 0;
    `}
  >
    <ul
      css={theme => css`
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        overflow-y: auto;

        &::-webkit-scrollbar {
          width: 0.5rem;
        }

        &::-webkit-scrollbar-track {
          background: ${theme.colors.lightGray};
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          background-clip: padding-box;
        }

        &::-webkit-scrollbar-thumb {
          background-color: ${theme.colors.yellow};
        }
      `}
    >
      {pdaState.documents.map(document => (
        <li
          key={document.name}
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
          <IoDocumentTextOutline
            css={theme =>
              css`
                color: ${theme.colors.yellow};
                margin-right: 1rem;
                font-size: 2.5rem;
              `
            }
          />
          <Trans i18nKey={document.name} />
        </li>
      ))}
    </ul>
  </div>
);
