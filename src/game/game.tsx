import React, { useState } from 'react';

import { Scene } from './scene';
import { Choice } from './event';
import { GameState, useGame } from './gameState';
import { GameContainer } from '../components/gameContainer';
import { GameMenu } from '../components/gameMenu';
import { PDAComponent } from './pda';
import { GameLoader } from '../components/gameLoader';
import { StartButton } from '../components/startButton';
import { GameBackground } from '../components/gameBackground';

import bgVideo from '../assets/videos/videoblocks-synthwave-noise-net-retro.mp4';

export interface GameProps {
  storyContent: string;
  saveState?: string;
}

export const Game: React.FunctionComponent<GameProps> = ({
  storyContent,
  saveState,
}) => {
  const [loading, percentLoaded, gameState, dispatch] = useGame(
    storyContent,
    saveState
  );
  const [textLoading, setTextLoading] = useState<boolean | null>(null);

  if (loading) {
    return (
      <>
        <GameBackground
          /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
          // @ts-ignore
          src={bgVideo}
          autoPlay={true}
          muted
          loop
        />
        <GameContainer>
          <GameLoader percent={percentLoaded} />
        </GameContainer>
      </>
    );
  }

  switch (gameState.state) {
    case GameState.Loading:
      return (
        <>
          <GameBackground
            /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
            // @ts-ignore
            src={bgVideo}
            autoPlay={true}
            muted
            loop
          />
          <GameContainer>
            <GameLoader />
          </GameContainer>
        </>
      );
    case GameState.Loaded:
      return (
        <>
          <GameBackground
            /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
            // @ts-ignore
            src={bgVideo}
            autoPlay={true}
            muted
            loop
          />
          <GameContainer>
            <StartButton onClick={() => dispatch({ type: 'start' })} />
          </GameContainer>
        </>
      );
    case GameState.Started: {
      if (!gameState.currentScene) {
        return <GameContainer>Could not load scene</GameContainer>;
      }

      const onTextLoadingStart = () => {
        setTextLoading(true);
      };

      const onTextLoadingEnd = () => {
        setTextLoading(false);
      };

      const onContinue = () => {
        if (textLoading) {
          setTextLoading(false);
          return;
        }

        if (!gameState.story.canContinue) {
          return;
        }

        // Clear the loading indicator so we know to animate the next event.
        setTextLoading(null);

        dispatch({ type: 'continue' });
      };

      const onChoiceSelected = (choice: Choice) => {
        dispatch({ type: 'continue', choiceId: choice.id });
      };

      return (
        <>
          {gameState.currentScene &&
            gameState.currentScene.background?.type === 'video' && (
              <GameBackground
                /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
                // @ts-ignore
                src={gameState.currentScene.background.asset}
                autoPlay={true}
                muted
                loop
              />
            )}
          <GameContainer>
            <GameMenu
              showPDA={gameState.pda.enabled}
              onPDAClick={() => dispatch({ type: 'open_pda' })}
              onSettingsClick={() => {}}
            />
            <Scene
              state={gameState.currentScene}
              skipAnimation={textLoading !== null && !textLoading}
              onContinue={onContinue}
              onTextLoadingStart={onTextLoadingStart}
              onTextLoadingEnd={onTextLoadingEnd}
              onChoiceSelected={onChoiceSelected}
            />
            <PDAComponent
              pdaState={gameState.pda}
              onPDAClosed={() => dispatch({ type: 'close_pda' })}
              onPDATabChanged={tab => dispatch({ type: 'change_pda_tab', tab })}
            />
          </GameContainer>
        </>
      );
    }
  }

  return <GameContainer>Unknown state</GameContainer>;
};
