/** @jsx jsx */
import React from 'react';
import { Trans } from 'react-i18next';
import { jsx, css } from '@emotion/react';

export const PDAHomeTab: React.FunctionComponent = () => (
  <div css={css`
    display: flex;
    height: calc(100% - 8rem);
    width: calc(100% - 8rem);
    margin: 4rem;
    padding: 0 10rem;
    justify-content: center;
    align-items: center;
  `}>
    <div css={theme => css`
      white-space: pre-wrap;
      color: ${theme.colors.yellow};
      
      & p {
        margin-top: 0;
        margin-bottom: 1rem;
      }
    `}>
      <Trans
        i18nKey="pda_home_welcome"
        components={{
          strong: (
            <strong
              css={theme => css`
              color: ${theme.colors.secondary};
              font-weight: normal;
            `}
            />
          ),
        }}
      />
    </div>
  </div>
);
