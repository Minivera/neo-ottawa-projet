import React from 'react';

import { Character } from './character';
import { SceneContainer } from '../components/sceneContainer';
import { PortraitsContainer } from '../components/portraitsContainer';
import { CharacterPortrait } from '../components/characterPortrait';
import { PortraitImage } from '../components/portraitImage';
import { DialogBox } from '../components/dialogBox';
import { AnimatedText } from '../components/animatedText';
import { AnimationContainer } from '../components/animationContainer';

export enum CharacterAnimation {
  MOVE_UP = 'move-up',
  FADE_IN = 'fade-in',
}

export interface Dialog {
  type: 'dialog';
  id: string;
  character: Character;
  expression: string;
  animation?: CharacterAnimation;
  lineId: string;
}

export interface Narration {
  type: 'narration';
  id: string;
  shouldHideAll?: boolean;
  lineId: string;
}

export type Event = Dialog | Narration;

export interface Scene {
  id: string;
  background: string;
  events: Event[];
  characters: Character[];
}

export interface SceneState {
  index: string;
  currentEvent: Event;
  currentEventIndex: number;
  loadedCharacters: Character[];
  characterExpressions: Record<string, string>;
}

export const getSceneEvent = (
  scene: Scene,
  eventId: string
): Event | undefined => scene.events.find(event => event.id === eventId);

export const getFirstSceneEvent = (scene: Scene): Event | undefined => {
  if (scene.events.length < 1) {
    return undefined;
  }

  return scene.events[0];
};

export const getNextSceneEvent = (
  scene: Scene,
  oldEventId: string
): Event | undefined => {
  const index = scene.events.findIndex(event => event.id === oldEventId);
  if (index === -1) {
    return undefined;
  }

  if (index + 1 > scene.events.length) {
    return undefined;
  }

  return scene.events[index + 1];
};

export interface SceneProps {
  scene: Scene;
  state: SceneState;
}

export const Scene: React.FunctionComponent<SceneProps> = ({
  scene,
  state,
}) => {
  const portraits = (
    <PortraitsContainer count={Math.max(state.loadedCharacters.length, 2)}>
      {state.loadedCharacters.map(character =>
        state.currentEvent.type === 'dialog' &&
        character.id === state.currentEvent.character.id ? (
          <CharacterPortrait key={character.id}>
            <AnimationContainer animation={state.currentEvent.animation}>
              <PortraitImage
                src={character.images[state.characterExpressions[character.id]]}
                alt={`${character.name} ${state.currentEvent.expression}`}
              />
            </AnimationContainer>
          </CharacterPortrait>
        ) : (
          <CharacterPortrait key={character.id}>
            <PortraitImage
              src={character.images[state.characterExpressions[character.id]]}
              alt={`${character.name} ${
                state.characterExpressions[character.id]
              }`}
            />
          </CharacterPortrait>
        )
      )}
    </PortraitsContainer>
  );

  return (
    <SceneContainer background={scene.background}>
      {portraits}
      <DialogBox>
        {state.currentEvent.type === 'dialog' && (
          <h1>{state.currentEvent.character.name}</h1>
        )}
        <p>
          <AnimatedText
            text={state.currentEvent.lineId}
            key={state.currentEvent.lineId}
          />
        </p>
      </DialogBox>
    </SceneContainer>
  );
};
