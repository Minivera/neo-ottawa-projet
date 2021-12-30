/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/react';
import { useTranslation } from 'react-i18next';
import { darken, transparentize } from 'polished';

import { Document } from '../../game/pda';
import { PDFReader } from '../pdfReader';
import { PDATitle } from './pdaTitle';

import DocumentIcon from '../../assets/ui/icons/Document.svg?component';
import ReturnArrow from '../../assets/ui/icons/Minimiser-maximiser.svg?component';

export interface PDADocumentViewProps {
  document: Document;
  onPrevClick: () => void;
}

export const PDADocumentView: React.FunctionComponent<PDADocumentViewProps> = ({
  document,
  onPrevClick,
}) => {
  const [t] = useTranslation();

  return (
    <div
      css={css`
        display: flex;
        justify-content: space-around;
        padding: 0 8rem;
        position: relative;
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
            <DocumentIcon />
            {t(document.name)}
          </PDATitle>
          <div
            css={theme => css`
              display: flex;
              flex-direction: column;
              margin-right: 1rem;
              padding: 1.2rem;
              border: solid 0.4rem ${theme.colors.purple};
              background-color: ${transparentize(0.05, theme.colors.darkGray)};
              overflow: hidden;
              transition: max-height ease-in-out 500ms;
            `}
          >
            <h3
              css={theme => css`
                font-size: 1.4rem;
                margin: 0;
                text-transform: uppercase;
                color: ${theme.colors.yellow};
              `}
            >
              {t('pda_document_description')}
            </h3>
            <p
              css={theme => css`
                border-top: 1px solid ${theme.colors.lightGray};
                padding-top: 1.2rem;
                font-size: 1.2rem;
                color: ${theme.colors.lightGray};
              `}
            >
              {t(document.description)}
            </p>
          </div>
        </div>
      </div>
      {document.path && (
        <div
          css={css`
            margin-left: 1rem;
          `}
        >
          <PDFReader pdfPath={document.path} />
        </div>
      )}
    </div>
  );
};
