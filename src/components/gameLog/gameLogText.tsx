/* @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/react';

import { SceneState } from '../../game/scene';

export interface GameLogTextProps {
  scene: SceneState;
}

export const GameLogText: React.FunctionComponent<GameLogTextProps> = ({
  scene,
}) => (
  <div>
    {scene.dialogName && (
      <h3
        css={theme => css`
          font-family: Permanent Marker;
          margin: 0;
          font-size: 2.2rem;
          color: ${theme.colors.white};
        `}
      >
        {scene.dialogName}
      </h3>
    )}
    <p
      css={theme => css`
        font-size: 1.5rem;
        color: ${theme.colors.text};
        margin-top: 0.5rem;

        ${scene.dialogName ? '' : 'font-style: italic;'}
        
        & b {
          color: ${theme.colors.white};
        }
      `}
      dangerouslySetInnerHTML={{ __html: scene.text }}
    />
  </div>
);
