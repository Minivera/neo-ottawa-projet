/* @jsx jsx */
import React, { useEffect, useRef } from 'react';
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
  playClickSound: () => void;
  onButtonHover: () => void;
}

export const GameLog: React.FunctionComponent<GameLogProps> = ({
  opened,
  closeGameLog,
  gameLog,
  playClickSound,
  onButtonHover,
}) => {
  const focusRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (opened && focusRef.current) {
      focusRef.current.focus();
    }
  }, [opened]);

  return (
    <Portal>
      <div
        css={theme => css`
          position: fixed;
          top: 0;
          left: 0;
          z-index: ${opened ? '7' : '-1'};
          transition: ${opened
            ? 'unset'
            : 'z-index 0.1s 0.75s, visibility 0.1s 0.75s'};
          width: 100%;
          height: 100%;
          background: ${transparentize('0.3', theme.colors.darkGreen)};
          font-size: 20px;
          font-family: VCR-OSD-MONO;
          display: flex;
          justify-content: center;
          align-items: center;

          pointer-events: ${opened ? 'all' : 'none'};
          visibility: ${opened ? 'unset' : 'hidden'};

          animation-name: ${opened ? 'zoomIn' : 'zoomOut'};
          animation-duration: 0.25s;
          animation-delay: ${opened ? '0s' : '0.50s'};
          animation-fill-mode: both;
        `}
      >
        <AnimatedOpen
          open={opened}
          css={css`
            height: 100%;
          `}
        >
          <GameLogModal
            onReturnClick={() => {
              playClickSound();
              closeGameLog();
            }}
            onButtonHover={onButtonHover}
          >
            <div ref={focusRef}>
              {gameLog.map((el, index) => {
                if (el.choices?.length) {
                  return <GameLogChoice key={index} scene={el} />;
                }

                return <GameLogText key={index} scene={el} />;
              })}
            </div>
          </GameLogModal>
        </AnimatedOpen>
      </div>
    </Portal>
  );
};
