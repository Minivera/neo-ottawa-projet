/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/react';

export interface PDFReaderProps {
  pdfPath: string;
  playClickSound: () => void;
}

export const PDFReader: React.FunctionComponent<PDFReaderProps> = ({
  pdfPath,
}) => (
  <div
    css={css`
      display: flex;
      height: 100%;
    `}
  >
    <embed
      src={pdfPath}
      type="application/pdf"
      css={theme => css`
        flex: 1;
        overflow-y: scroll;
        overflow-x: hidden;
        margin-right: 0.5rem;
        height: 100%;

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
    />
  </div>
);
