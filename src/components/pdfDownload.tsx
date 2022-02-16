/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/react';
import { useTranslation } from 'react-i18next';
import { darken } from 'polished';

import { IconButton } from './iconButton';

import DownloadIcon from '../assets/ui/icons/Document.svg?component';

export interface PDFDownloadButtonProps {
  pdfPath: string;
  playClickSound: () => void;
}

export const PDFDownloadButton: React.FunctionComponent<PDFDownloadButtonProps> =
  ({ pdfPath, playClickSound }) => {
    const [t] = useTranslation();

    return (
      <IconButton
        target="_blank"
        rel="noreferrer"
        onClick={() => playClickSound()}
        href={pdfPath}
        css={theme => css`
          color: ${theme.colors.darkGray};
          transition: all 150ms ease;

          &:hover {
            color: ${darken(0.3, theme.colors.darkGray)};

            & svg {
              fill: ${darken(0.3, theme.colors.darkGray)};
            }
          }

          & svg {
            fill: ${theme.colors.darkGray};
            transition: inherit;
          }
        `}
      >
        <DownloadIcon />
        {t('pdf_download')}
      </IconButton>
    );
  };
