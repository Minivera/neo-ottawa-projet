/* @jsx jsx */
import React from 'react';
import { jsx, css, useTheme } from '@emotion/react';

import { SceneState } from '../../game/scene';
import { HexagonButton } from '../hexagonButton';

export interface GameLogChoiceProps {
  scene: SceneState;
}

export const GameLogChoice: React.FunctionComponent<GameLogChoiceProps> = ({
  scene,
}) => {
  const theme = useTheme();

  return (
    <div>
      {scene.dialogName && (
        <h3
          css={theme => css`
            font-family: Permanent Marker;
            margin: 0;
            font-size: 2.2rem;
            color: ${theme.colors.yellow};
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
      <div>
        {scene.choices?.map(choice => (
          <div
            key={choice.id}
            css={css`
              & button {
                width: 100%;
                margin: 0;
                pointer-events: none;
              }
            `}
          >
            <HexagonButton
              color={theme.colors.text}
              backgroundColor={theme.colors.black}
              borderColor={theme.colors.secondary}
              hoverColor={theme.colors.white}
              hoverBackgroundColor={theme.colors.secondary}
              active={choice.id === scene.chosenChoice?.id}
            >
              {choice.content}
            </HexagonButton>
          </div>
        ))}
      </div>
    </div>
  );
};
