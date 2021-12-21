/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/react';
import { useTranslation } from 'react-i18next';
import { darken } from 'polished';

import { Document } from '../../game/pda';
import { PDFReader } from '../pdfReader';
import { Expander } from '../expander';
import { PDATitle } from './pdaTitle';

import DocumentIcon from '../../assets/ui/pda/Document.svg?component';
import ReturnArrow from '../../assets/ui/pda/Minimiser-maximiser.svg?component';

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
        <div
          onClick={onPrevClick}
          css={theme => css`
            position: absolute;
            left: -2rem;
            font-size: 1.2rem;
            cursor: pointer;

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
        </div>
        <div>
          <PDATitle>
            <DocumentIcon />
            {t(document.name)}
          </PDATitle>
          <div
            css={css`
              display: flex;
              flex-direction: column;
              margin-right: 1rem;
              font-size: 1.5rem;
            `}
          >
            <Expander
              title={t('pda_document_description')}
              css={css`
                height: 80px;
                z-index: 4;
              `}
            >
              {t(document.description)}
            </Expander>
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
