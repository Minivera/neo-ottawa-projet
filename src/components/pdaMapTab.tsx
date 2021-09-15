/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/react';

import { PDA } from '../game/pda';

export interface PDAMapTabProps {
  pdaState: PDA;
}

export const PDAMapTab: React.FunctionComponent<PDAMapTabProps> = () => (
  <div
    css={css`
      height: calc(100% - 5rem);
      width: calc(100% - 8rem);
      margin: 4rem 4rem 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
    `}
  >
    TODO
  </div>
);
