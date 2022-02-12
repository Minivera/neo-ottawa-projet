/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/react';
import { Trans } from 'react-i18next';

import { PDATitle } from './pdaTitle';

import HomeIcon from '../../assets/ui/pda/PDA-LePDA.svg?component';

export interface PDAHomeTabProps {
  firstVisit?: boolean;
}

export const PDAHomeTab: React.FunctionComponent<PDAHomeTabProps> = ({
  firstVisit,
}) => (
  <div
    css={css`
      display: flex;
      width: calc(100% - 8rem);
      margin: 1rem;
      padding: 0 10rem;

      @media only screen and (max-width: 480px) {
        width: 100%;
        padding: 0 1rem;
      }
    `}
  >
    <div
      css={theme => css`
        color: ${theme.colors.yellow};

        & p {
          margin-top: 0;
          margin-bottom: 2rem;
          font-size: 1.5rem;
        }
      `}
    >
      <PDATitle>
        <HomeIcon />
        <Trans i18nKey="pda_home" />
      </PDATitle>
      {firstVisit ? (
        <Trans
          i18nKey="pda_home_first_visit"
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
      ) : (
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
      )}
    </div>
  </div>
);
