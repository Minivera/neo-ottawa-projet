import React, { useState } from 'react';

import { Scene, SceneState } from './scene';
import { Choice } from './event';
import { useGame, GameState, getCurrentScene } from './gameState';
import { GameContainer } from '../components/gameContainer';
import { GameMenu } from '../components/gameMenu';
import { PDA, PDAComponent } from './pda';

export interface Act {
  id: string;
  scenes: Scene[];
}

export interface GameContent {
  acts: Act[];
}

export interface GameSave {
  currentScene: SceneState;
  pda: PDA;
}

export interface GameProps {
  gameContent: GameContent;
  saveState?: GameSave;
}

export const Game: React.FunctionComponent<GameProps> = ({
  gameContent,
  saveState,
}) => {
  const [loading, gameState, dispatch] = useGame(gameContent, saveState);
  const [textLoading, setTextLoading] = useState<boolean | null>(null);

  if (loading) {
    return <GameContainer>loading content...</GameContainer>;
  }

  switch (gameState.state) {
    case GameState.Loading:
      return <GameContainer>loading...</GameContainer>;
    case GameState.Loaded:
      return (
        <GameContainer>
          <button onClick={() => dispatch({ type: 'start' })}>Start</button>
        </GameContainer>
      );
    case GameState.Started: {
      const currentScene = getCurrentScene(gameState);
      if (!currentScene || !gameState.currentScene) {
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

        if (
          gameState &&
          gameState.currentScene &&
          gameState.currentScene.currentEvent.type === 'multiple_choice'
        ) {
          return;
        }

        // Clear the loading indicator so we know to animate the next event.
        setTextLoading(null);

        if (
          gameState &&
          gameState.currentScene &&
          gameState.currentScene.currentEvent.action
        ) {
          const action = gameState.currentScene.currentEvent.action;

          switch (action.type) {
            case 'switch_scene': {
              dispatch({
                type: 'continue',
                sceneId: action.sceneId,
                eventId: action.eventId,
              });
              return;
            }
          }
        }

        dispatch({ type: 'continue' });
      };

      const onChoiceSelected = (choice: Choice) => {
        const action = choice.action;

        dispatch({
          type: 'continue',
          sceneId: action.sceneId,
          eventId: action.eventId,
        });
      };

      return (
        <GameContainer
          fullscreen={gameState.currentScene.currentEvent.fullscreen}
        >
          <GameMenu
            onPDAClick={() => dispatch({ type: 'open_pda' })}
            onSettingsClick={() => {}}
          />
          <Scene
            scene={currentScene}
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
      );
    }
  }

  return <GameContainer>Unknown state</GameContainer>;
};
