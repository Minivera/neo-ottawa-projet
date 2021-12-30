/** @jsx jsx */
import React from 'react';
import { Trans } from 'react-i18next';
import { jsx, css } from '@emotion/react';
import { darken } from 'polished';

import { PDA, Document } from '../../game/pda';
import { PDATitle } from './pdaTitle';

import DocumentsIcon from '../../assets/ui/pda/PDA-Documents.svg?component';
import DocumentIcon from '../../assets/ui/icons/Document.svg?component';

export interface PDADocumentsTabProps {
  pdaState: PDA;
  onDocumentClick: (document: Document) => void;
}

export const PDADocumentsTab: React.FunctionComponent<PDADocumentsTabProps> = ({
  pdaState,
  onDocumentClick,
}) => (
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
        <DocumentsIcon />
        <Trans i18nKey="pda_evidence" />
      </PDATitle>
      {pdaState.documents.length > 0 ? (
        <ul
          css={css`
            margin: 0;
            padding: 0;
            overflow-y: auto;
          `}
        >
          {pdaState.documents.map(document => (
            <li
              key={document.name}
              css={theme => css`
                border-bottom: 0.1rem solid ${theme.colors.lightGray};
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
                onClick={() => onDocumentClick(document)}
                onKeyPress={e => {
                  if (e.code === 'Enter') {
                    onDocumentClick(document);
                  }
                }}
                tabIndex={0}
                css={theme =>
                  css`
                    padding: 1rem 0;
                    display: flex;
                    align-items: center;
                    font-size: 1.5rem;

                    & svg {
                      fill: ${theme.colors.yellow};
                      margin-right: 1rem;
                      height: 1.6rem;
                    }
                  `
                }
              >
                <DocumentIcon />
                <Trans i18nKey={document.name} />
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
