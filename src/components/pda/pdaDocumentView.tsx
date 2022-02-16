/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/react';
import { useTranslation } from 'react-i18next';
import { darken, transparentize } from 'polished';
import { useMediaQuery } from 'react-responsive';

import { Document } from '../../game/pda';
import { PDFReader } from '../pdfReader';
import { PDATitle } from './pdaTitle';
import { PDFDownloadButton } from '../pdfDownload';

import DocumentIcon from '../../assets/ui/icons/Document.svg?component';
import ReturnArrow from '../../assets/ui/icons/Minimiser-maximiser.svg?component';

export interface PDADocumentViewProps {
  document: Document;
  onPrevClick: () => void;
  playClickSound: () => void;
}

export const PDADocumentView: React.FunctionComponent<PDADocumentViewProps> = ({
  document,
  onPrevClick,
  playClickSound,
}) => {
  const [t] = useTranslation();
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' });

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

            &:active {
              color: ${theme.colors.secondary};

              svg {
                fill: ${theme.colors.secondary};
              }
            }

            @media only screen and (max-width: 768px) {
              left: 10rem;
              top: -3rem;
              font-size: 1.8rem;
            }

            @media only screen and (max-width: 428px) {
              position: unset;
              font-size: 1.8rem;
              margin-top: 1rem;
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
              border: solid 10px ${theme.colors.purple};
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
                border-top: 2px solid ${theme.colors.lightGray};
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

      {isTabletOrMobile && document.path && (
        <div
          css={css`
            padding-top: 1.8rem;
          `}
        >
          <div
            css={theme => css`
              display: flex;
              justify-content: space-around;
              align-items: center;
              background-color: ${theme.colors.secondary};
              color: ${theme.colors.darkGray};
              padding: 1.5rem 1rem;
              font-size: 1.6rem;
            `}
          >
            <PDFDownloadButton
              pdfPath={document.path}
              playClickSound={playClickSound}
            />
          </div>
        </div>
      )}
      {!isTabletOrMobile && document.path && (
        <div
          css={css`
            margin-left: 1rem;
          `}
        >
          <PDFReader pdfPath={document.path} playClickSound={playClickSound} />
        </div>
      )}
    </div>
  );
};
