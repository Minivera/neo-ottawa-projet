/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/react';
import { Trans } from 'react-i18next';

import { PDATitle } from './pdaTitle';

import HomeIcon from '../assets/ui/pda/PDA-LePDA.svg?component';
import pdaVideo from '../assets/videos/videoblocks-hud-futuristic.mp4';

export const PDAHomeTab: React.FunctionComponent = () => (
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
      `}
    />
    <div
      css={css`
        display: flex;
        height: calc(100% - 8rem);
        width: calc(100% - 8rem);
        margin: 4rem;
        padding: 0 10rem;
      `}
    >
      <div
        css={theme => css`
          color: ${theme.colors.yellow};

          & p {
            margin-top: 0;
            margin-bottom: 2rem;
          }
        `}
      >
        <PDATitle>
          <HomeIcon />
          <Trans i18nKey="pda_home" />
        </PDATitle>
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
  </React.Fragment>
);
