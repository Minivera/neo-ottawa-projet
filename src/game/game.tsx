import React, { useReducer, ReducerState, Dispatch } from 'react';

import {
  getSceneEvent,
  getFirstSceneEvent,
  getNextSceneEvent,
  Scene,
  SceneState,
} from './scene';
import { Event } from './event';
import { GameContainer } from '../components/gameContainer';
import { usePreloader } from '../hooks/useLoading';

export enum GameState {
  Loading = 'loading',
  Loaded = 'loaded',
  Started = 'started',
  Ended = 'ended',
}

export interface Act {
  id: string;
  scenes: Scene[];
}

export interface GameContent {
  acts: Act[];
}

export interface Game {
  scenes: Record<string, Scene>;
  currentScene?: SceneState;
  state: GameState;
}

export interface GameSave {
  currentScene: SceneState;
}

export type GameAction =
  | { type: 'start' }
  | { type: 'end' }
  | { type: 'continue'; sceneId?: string; eventId?: string };
type GameReducer = (state: Game, action: GameAction) => Game;

const getCurrentScene = (game: Game): Scene | null => {
  if (game.currentScene && game.scenes[game.currentScene.index]) {
    return game.scenes[game.currentScene.index];
  }

  return null;
};

const getScene = (game: Game, sceneId: string): Scene | null => {
  if (game.currentScene && game.scenes[sceneId]) {
    return game.scenes[sceneId];
  }

  return null;
};

const generateCurrentSceneState = (
  activeScene: Scene,
  currentScene: SceneState,
  event: Event
): SceneState => {
  // Loaded characters are the characters that had an even this scene
  // Merge the currently loaded characters with the newly evented character
  // Empty if the narration mandates cleaning the character
  const loadedCharacters =
    event.type === 'narration' && event.shouldHideAll
      ? []
      : activeScene.characters.filter(
          character =>
            (event.type === 'dialog' && character.id === event.character.id) ||
            currentScene?.loadedCharacters.includes(character)
        );

  return {
    index: activeScene.id,
    currentEvent: event,
    currentEventIndex: activeScene.events.findIndex(
      element => element.id === event.id
    ),
    loadedCharacters,
    // Create an object of character expressions based on the previous expressions
    // and the current event's character
    characterExpressions: activeScene.characters.reduce((acc, character) => {
      if (event.type === 'dialog' && character.id === event.character.id) {
        return {
          ...acc,
          [character.id]: event.expression,
        };
      }

      if (loadedCharacters.includes(character) && currentScene) {
        return {
          ...acc,
          [character.id]: currentScene.characterExpressions[character.id],
        };
      }

      return acc;
    }, {}),
  };
};

const gameReducer: GameReducer = (state: Game, action: GameAction): Game => {
  switch (action.type) {
    case 'start': {
      // Get the first scene of the game and show its first event
      const firstScene = getCurrentScene(state);
      if (!firstScene || !state.currentScene) {
        throw new Error('An error occurred, game was incorrectly loaded');
      }

      const event = getFirstSceneEvent(firstScene);
      if (!event) {
        throw new Error(
          'An error occurred, action would result in invalid game state'
        );
      }

      return {
        ...state,
        state: GameState.Started,
        currentScene: generateCurrentSceneState(
          firstScene,
          state.currentScene,
          event
        ),
      };
    }
    case 'end': {
      return {
        ...state,
        state: GameState.Ended,
      };
    }
    case 'continue': {
      if (!state.currentScene) {
        throw new Error('An error occurred, game was not started or has ended');
      }

      // If we're not changing scenes
      if (!action.sceneId) {
        const currentScene = getCurrentScene(state);
        if (!currentScene) {
          throw new Error('An error occurred, game reached an invalid state');
        }

        // If we're changing events
        if (action.eventId) {
          const event = getSceneEvent(currentScene, action.eventId);
          if (!event) {
            throw new Error(
              'An error occurred, action would result in invalid game state'
            );
          }

          return {
            ...state,
            // Generate for the old scene and new event in that scene
            currentScene: generateCurrentSceneState(
              currentScene,
              state.currentScene,
              event
            ),
          };
        }

        const event = getNextSceneEvent(
          currentScene,
          state.currentScene.currentEvent.id
        );
        if (!event) {
          throw new Error(
            'An error occurred, action would result in invalid game state'
          );
        }

        return {
          ...state,
          // Instead, generate for the next event in the old scene
          currentScene: generateCurrentSceneState(
            currentScene,
            state.currentScene,
            event
          ),
        };
      }

      // If changing scene, get the new scene from the state
      const newScene = getScene(state, action.sceneId);
      if (!newScene) {
        throw new Error(
          'An error occurred, action would result in invalid game state'
        );
      }

      // If we're also changing events
      if (action.eventId) {
        const event = getSceneEvent(newScene, action.eventId);
        if (!event) {
          throw new Error(
            'An error occurred, action would result in invalid game state'
          );
        }

        return {
          ...state,
          // Generate for the new evetn in the new scene
          currentScene: generateCurrentSceneState(
            newScene,
            state.currentScene,
            event
          ),
        };
      }

      const event = getFirstSceneEvent(newScene);
      if (!event) {
        throw new Error('An error occurred, game reached an invalid state');
      }

      return {
        ...state,
        // Instead, generate for the next event in the new scene
        currentScene: generateCurrentSceneState(
          newScene,
          state.currentScene,
          event
        ),
      };
    }
    default:
      throw new Error('An error occurred, wrong game action');
  }
};

const useGame = (
  content: GameContent,
  save?: GameSave
): [boolean, ReducerState<GameReducer>, Dispatch<GameAction>] => {
  const game: Game = {
    scenes: {},
    state: GameState.Loading,
  };
  const images: string[] = [];

  let firstScene: SceneState | undefined;

  content.acts.forEach(act => {
    act.scenes.forEach(scene => {
      const sceneId = `${act.id}_${scene.id}`;

      if (!firstScene) {
        firstScene = {
          index: sceneId,
          currentEvent: scene.events[0],
          currentEventIndex: 0,
          characterExpressions: {},
          loadedCharacters: [],
        };
      }

      if (scene.background && !images.includes(scene.background)) {
        images.push(scene.background);
      }

      scene.characters.forEach(character => {
        Object.values(character.images).forEach(image => {
          if (!images.includes(image)) {
            images.push(image);
          }
        });
      });

      game.scenes[sceneId] = {
        ...scene,
        id: sceneId,
      };
    });
  });

  if (save) {
    game.currentScene = save.currentScene;

    // Check if the scene exists
    if (!Object.hasOwnProperty.call(game.scenes, game.currentScene.index)) {
      throw new Error("Corrupted save, scene doesn't exists");
    }

    game.state = GameState.Started;
  } else {
    game.currentScene = firstScene;
    game.state = GameState.Loaded;
  }

  return [usePreloader(images), ...useReducer(gameReducer, game)];
};

export interface GameProps {
  gameContent: GameContent;
  saveState?: GameSave;
}

export const Game: React.FunctionComponent<GameProps> = ({
  gameContent,
  saveState,
}) => {
  const [loading, gameState, dispatch] = useGame(gameContent, saveState);

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

      const onContinue = () => {
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

      return (
        <GameContainer
          onClick={onContinue}
          fullscreen={gameState.currentScene.currentEvent.fullscreen}
        >
          <Scene scene={currentScene} state={gameState.currentScene} />
        </GameContainer>
      );
    }
  }

  return <GameContainer>Unknown state</GameContainer>;
};
