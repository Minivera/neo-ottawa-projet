/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/react';
import { Trans } from 'react-i18next';

import { PDA } from '../../game/pda';
import { PDATitle } from './pdaTitle';

import MapIcon from '../../assets/ui/pda/PDA-PlanDeLaVille.svg?component';
import CityMap from '../../assets/ui/pda/Ottawa_map.png?w=1920&h=1024';

export interface PDAMapTabProps {
  pdaState: PDA;
}

export const PDAMapTab: React.FunctionComponent<PDAMapTabProps> = () => (
  <div
    css={css`
      height: 100%;
      width: 100%;
      position: relative;
      
      &:after {
        z-index: -1;
        content: "";
        position: absolute;
        inset: -4rem;
        opacity: 0.4;
        background-image: url(${CityMap});
        background-size: contain;
      }
    `}
  >
    <div
      css={css`
        height: calc(100% - 5rem);
        width: calc(100% - 8rem);
        margin: 4rem 4rem 1rem;
        padding: 0 10rem;
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;
        `}
      >
        <PDATitle>
          <MapIcon />
          <Trans i18nKey="pda_map" />
        </PDATitle>
      </div>
    </div>
  </div>
);
