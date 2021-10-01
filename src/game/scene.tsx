/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { KeyboardEventHandler, ReactElement } from 'react';

import { Character } from './character';
import { Choice } from './event';
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
import { AudioPlayer } from '../components/audioPlayer';
import {
  MultipleChoiceElement,
  MultipleChoiceElementLeftArrow,
  MultipleChoiceElementRightArrow,
  MultipleChoices,
} from '../components/multipleChoices';

export interface SceneState {
  dialogName?: string;
  text: string;
  centered?: boolean;
  background?: { type: 'video' | 'image'; asset: string };
  animation?: string;
  bgm?: string;
  choices?: Choice[];
  notes?: string;
  currentCharacter?: Character;
  shownCharacters: Character[];
  characterExpressions: Record<string, string>;
}

export interface SceneProps {
  state: SceneState;
  onContinue: () => void;
  onTextLoadingStart: () => void;
  onTextLoadingEnd: () => void;
  onChoiceSelected: (choice: Choice) => void;
  skipAnimation?: boolean;
}

export const Scene: React.FunctionComponent<SceneProps> = ({
  state,
  onContinue,
  onTextLoadingStart,
  onTextLoadingEnd,
  onChoiceSelected,
  skipAnimation,
}) => {
  const handleClickContinue = () => onContinue();
  const handleKeyContinue: KeyboardEventHandler<HTMLDivElement> = event => {
    if (['Right', 'ArrowRight', 'Enter', 'Spacebar', ' '].includes(event.key)) {
      onContinue();
    }
  };

  // TODO: Bring back transitions
  let portraits: ReactElement | null = null;
  if (
    !state.centered
  ) {
    // Only show characters that have the loaded expression, never show empty images
    const characterPortraits = state.shownCharacters.filter(
      character => character.images[state.characterExpressions[character.id]]
    );

    portraits = (
      <PortraitsContainer count={characterPortraits.length}>
        {characterPortraits.map(character => {
          if (character.id === state.currentCharacter?.id) {
            return state.animation ? (
              <CharacterPortrait key={character.id} active>
                <AnimationContainer animation={state.animation}>
                  <PortraitImage
                    src={
                      character.images[state.characterExpressions[character.id]]
                    }
                    alt={`${character.name} ${state.characterExpressions[character.id]}`}
                  />
                </AnimationContainer>
              </CharacterPortrait>
            ) : (
              <CharacterPortrait key={character.id} active>
                <PortraitImage
                  src={
                    character.images[state.characterExpressions[character.id]]
                  }
                  alt={`${character.name} ${state.characterExpressions[character.id]}`}
                />
              </CharacterPortrait>
            );
          }

          return (
            <CharacterPortrait key={character.id}>
              <PortraitImage
                src={character.images[state.characterExpressions[character.id]]}
                alt={`${character.name} ${
                  state.characterExpressions[character.id]
                }`}
              />
            </CharacterPortrait>
          );
        })}
      </PortraitsContainer>
    );
  }

  return (
    <SceneContainer
      background={state.background?.type === 'image' ? state.background.asset : undefined}
      centerRow={!portraits}
      onClick={handleClickContinue}
      onKeyDown={handleKeyContinue}
      tabIndex={-1}
    >
      {portraits}
      {state.choices && state.choices.length ? (
        <DialogBox center={!portraits}>
          {state.dialogName && (
            <DialogTitle>
              <DialogTitleLeftArrow />
              <h1>{state.dialogName}</h1>
              <DialogTitleRightArrow />
            </DialogTitle>
          )}
          <p>
            <AnimatedText
              text={state.text}
              key={state.text}
              skipAnimation={skipAnimation}
              onTextLoadingStart={onTextLoadingStart}
              onTextLoadingEnd={onTextLoadingEnd}
            />
          </p>
          {skipAnimation && (
            <MultipleChoices>
              {state.choices.map(choice => (
                <MultipleChoiceElement
                  key={choice.content}
                  onClick={() => onChoiceSelected(choice)}
                >
                  <MultipleChoiceElementLeftArrow />
                  <span>{choice.content}</span>
                  <MultipleChoiceElementRightArrow />
                </MultipleChoiceElement>
              ))}
            </MultipleChoices>
          )}
        </DialogBox>
      ) : (
        <DialogBox center={!portraits}>
          {state.dialogName && (
            <DialogTitle>
              <DialogTitleLeftArrow />
              <h1>{state.dialogName}</h1>
              <DialogTitleRightArrow />
            </DialogTitle>
          )}
          <p>
            <AnimatedText
              text={state.text}
              key={Math.random()}
              skipAnimation={skipAnimation}
              onTextLoadingStart={onTextLoadingStart}
              onTextLoadingEnd={onTextLoadingEnd}
            />
          </p>
          {skipAnimation && <NextButton />}
        </DialogBox>
      )}
      {state.bgm && <AudioPlayer src={state.bgm} autoPlay loop />}
    </SceneContainer>
  );
};
