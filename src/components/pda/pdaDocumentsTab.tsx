/** @jsx jsx */
import React from 'react';
import { Trans } from 'react-i18next';
import { jsx, css } from '@emotion/react';
import { darken } from 'polished';

import { PDA } from '../../game/pda';
import { PDATitle } from './pdaTitle';

import DocumentsIcon from '../../assets/ui/pda/PDA-Documents.svg?component';
import DocumentIcon from '../../assets/ui/pda/Document.svg?component';
import pdaVideo from '../../assets/videos/videoblocks-hud-futuristic.mp4';

export interface PDADocumentsTabProps {
  pdaState: PDA;
}

export const PDADocumentsTab: React.FunctionComponent<PDADocumentsTabProps> = ({
  pdaState,
}) => (
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
        height: calc(100% - 5rem);
        width: calc(100% - 8rem);
        margin: 4rem 4rem 1rem;
        padding: 0 10rem;
      `}
    >
      <div
        css={css`
          height: 100%;
          width: 100%;
          display: flex;
          flex-direction: column;
        `}
      >
        <PDATitle>
          <DocumentsIcon />
          <Trans i18nKey="pda_documents" />
        </PDATitle>
        {pdaState.documents.length > 0 ? (
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
  </React.Fragment>
);
