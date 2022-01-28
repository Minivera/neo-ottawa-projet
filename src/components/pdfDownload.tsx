/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/react';
import { useTranslation } from 'react-i18next';
import { darken } from 'polished';

import DownloadIcon from '../assets/ui/icons/Document.svg?component';

import { IconButton } from './iconButton';

export interface PDFDownloadButtonProps {
  pdfPath: string;
}

export const PDFDownloadButton: React.FunctionComponent<PDFDownloadButtonProps> =
  ({ pdfPath }) => {
    const [t] = useTranslation();

    return (
      <IconButton
        target="_blank"
        rel="noreferrer"
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
