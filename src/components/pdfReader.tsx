/** @jsx jsx */
import React, { useState } from 'react';
import { jsx, css, Theme } from '@emotion/react';
import { pdfjs, Document, Page } from 'react-pdf';
import { useTranslation } from 'react-i18next';
import { darken } from 'polished';

import { IconButton } from './iconButton';

import NextIcon from '../assets/ui/icons/FlecheNEXT.svg?component';
import PreviousIcon from '../assets/ui/icons/FlechePREVIOUS.svg?component';
import DownloadIcon from '../assets/ui/icons/Document.svg?component';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export interface PDFReaderProps {
  pdfPath: string;
  playClickSound: () => void;
}

export const PDFReader: React.FunctionComponent<PDFReaderProps> = ({
  pdfPath,
  playClickSound,
}) => {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [t] = useTranslation();

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  const previousPage = () => {
    playClickSound();
    setPageNumber(prevPageNumber => Math.max(1, prevPageNumber - 1));
  };

  const nextPage = () => {
    playClickSound();
    setPageNumber(prevPageNumber => Math.min(numPages, prevPageNumber + 1));
  };

  const buttonStyles = (theme: Theme, disabled: boolean) =>
    css(`
    color: ${disabled ? theme.colors.text : theme.colors.darkGray};
    transition: all 150ms ease;
  
    ${
      !disabled
        ? `
    &:hover {
      color: ${darken(0.3, theme.colors.darkGray)};
  
      & svg {
        fill: ${darken(0.3, theme.colors.darkGray)};
      }
    }
  `
        : ''
    }

    & svg {
      fill: ${disabled ? theme.colors.text : theme.colors.darkGray};
      transition: inherit;
    }
  `);

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        width: 780px;
      `}
    >
      <div
        css={theme => css`
          display: flex;
          justify-content: space-around;
          align-items: center;
          background-color: ${theme.colors.secondary};
          color: ${theme.colors.darkGray};
          margin-right: 0.5rem;
          padding: 0.5rem 0;
        `}
      >
        <IconButton
          disabled={pageNumber <= 1}
          onClick={previousPage}
          css={theme => buttonStyles(theme, pageNumber <= 1)}
        >
          <PreviousIcon />
        </IconButton>
        <div>{t('pdf_page', { pageNumber, numPages })}</div>
        <IconButton
          disabled={pageNumber >= numPages}
          onClick={nextPage}
          css={theme => buttonStyles(theme, pageNumber >= numPages)}
        >
          <NextIcon />
        </IconButton>
      </div>
      <Document
        file={pdfPath}
        onLoadSuccess={onDocumentLoadSuccess}
        renderMode="canvas"
        css={theme => css`
          flex: 1;
          overflow-y: scroll;
          overflow-x: hidden;
          margin-right: 0.5rem;
          max-height: calc(100vh - 17.5rem);

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
        <Page pageNumber={pageNumber} scale={1.3} />
      </Document>
      <div
        css={theme => css`
          display: flex;
          justify-content: space-around;
          align-items: center;
          background-color: ${theme.colors.secondary};
          color: ${theme.colors.darkGray};
          margin-right: 0.5rem;
          padding: 0.5rem 0;
        `}
      >
        <IconButton
          target="_blank"
          rel="noreferrer"
          href={pdfPath}
          css={theme => buttonStyles(theme, false)}
        >
          <DownloadIcon />
          {t('pdf_download')}
        </IconButton>
      </div>
    </div>
  );
};
