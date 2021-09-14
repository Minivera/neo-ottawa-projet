import React, { ReactElement } from 'react';
import ReactAudioPlayer from 'react-audio-player';

import { Character } from './character';
import { Event } from './event';
import { SceneContainer } from '../components/sceneContainer';
import { PortraitsContainer } from '../components/portraitsContainer';
import { CharacterPortrait } from '../components/characterPortrait';
import { PortraitImage } from '../components/portraitImage';
import {
  DialogBox,
  DialogTitle,
  DialogTitleLeftArrow,
  DialogTitleRightArrow,
} from '../components/dialogBox';
import { AnimatedText } from '../components/animatedText';
import { AnimationContainer } from '../components/animationContainer';
import { NextButton } from '../components/nextButton';
import { useTranslation } from 'react-i18next';

export interface Scene {
  id: string;
  background?: string;
  bgm?: string;
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
  onTextLoadingStart: () => void;
  onTextLoadingEnd: () => void;
  skipAnimation?: boolean;
}

export const Scene: React.FunctionComponent<SceneProps> = ({
  scene,
  state,
  onTextLoadingStart,
  onTextLoadingEnd,
  skipAnimation,
}) => {
  const [t] = useTranslation();

  if (
    state.currentEvent.type === 'transition' &&
    state.currentEvent.hideEverything
  ) {
    return (
      <SceneContainer background={scene.background}>
        {scene.bgm && <ReactAudioPlayer src={scene.bgm} autoPlay loop />}
        {state.currentEvent.soundEffect && (
          <ReactAudioPlayer src={state.currentEvent.soundEffect} autoPlay />
        )}
      </SceneContainer>
    );
  }

  let portraits: ReactElement | null = null;
  if (
    state.currentEvent.type !== 'narration' ||
    (state.currentEvent.type === 'narration' && !state.currentEvent.fullscreen)
  ) {
    portraits = (
      <PortraitsContainer count={state.loadedCharacters.length}>
        {state.loadedCharacters.map(character =>
          state.currentEvent.type === 'dialog' &&
          character.id === state.currentEvent.character.id ? (
            <CharacterPortrait key={character.id}>
              <AnimationContainer animation={state.currentEvent.animation}>
                <PortraitImage
                  src={
                    character.images[state.characterExpressions[character.id]]
                  }
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
  }

  return (
    <SceneContainer background={scene.background} centerRow={!portraits}>
      {portraits}
      <DialogBox center={!portraits}>
        {state.currentEvent.type === 'dialog' && (
          <DialogTitle>
            <DialogTitleLeftArrow />
            <h1>{state.currentEvent.character.name}</h1>
            <DialogTitleRightArrow />
          </DialogTitle>
        )}
        {state.currentEvent.type !== 'transition' && (
          <p>
            <AnimatedText
              text={t(state.currentEvent.lineId)}
              key={state.currentEvent.lineId}
              skipAnimation={skipAnimation}
              onTextLoadingStart={onTextLoadingStart}
              onTextLoadingEnd={onTextLoadingEnd}
            />
          </p>
        )}
        {skipAnimation && <NextButton />}
      </DialogBox>
      {scene.bgm && <ReactAudioPlayer src={scene.bgm} autoPlay loop />}
      {state.currentEvent.soundEffect && (
        <ReactAudioPlayer src={state.currentEvent.soundEffect} autoPlay />
      )}
    </SceneContainer>
  );
};
