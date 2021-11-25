/* @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/react';
import { transparentize } from 'polished';
import { Portal } from 'react-portal';

import { GameLogModal } from './gameLogModal';
import { SceneState } from '../../game/scene';
import { GameLogText } from './gameLogText';
import { GameLogChoice } from './gameLogChoice';
import { AnimatedOpen } from '../animatedOpen';

export interface GameLogProps {
  opened?: boolean;
  closeGameLog: () => void;
  gameLog: SceneState[];
}

export const GameLog: React.FunctionComponent<GameLogProps> = ({
  opened,
  closeGameLog,
  gameLog,
}) => {
  return (
    <Portal>
      <AnimatedOpen
        open={opened}
        css={theme => css`
          position: fixed;
          top: 0;
          left: 0;
          z-index: 3;
          width: 100%;
          height: 100%;
          background: ${transparentize('0.3', theme.colors.darkGreen)};
          font-size: 20px;
          font-family: VCR-OSD-MONO;
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        <GameLogModal onReturnClick={() => closeGameLog()}>
          <div>
            {gameLog.map((el, index) => {
              if (el.choices?.length) {
                return <GameLogChoice key={index} scene={el} />;
              }

              return <GameLogText key={index} scene={el} />;
            })}
          </div>
        </GameLogModal>
      </AnimatedOpen>
    </Portal>
  );
};
