/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React, { KeyboardEventHandler, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import { Character } from './character';
import { CharacterAnimation, Choice } from './event';
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
import { Settings } from '../hooks/useSettings';

export interface SceneState {
  dialogName?: string;
  text: string;
  centered?: boolean;
  background?: { type: 'video' | 'image'; asset: string };
  bgm?: string;
  choices?: Choice[];
  notes?: { lineId: string; variables: Record<string, unknown> };
  currentCharacter?: Character;
  shownCharacters: Character[];
  characterExpressions: Record<string, string>;
  characterAnimation: Record<string, CharacterAnimation>;
}

export interface SceneProps {
  settings: Settings;
  state: SceneState;
  onContinue: () => void;
  onTextLoadingStart: () => void;
  onTextLoadingEnd: () => void;
  onChoiceSelected: (choice: Choice) => void;
  skipAnimation?: boolean;
}

export const Scene: React.FunctionComponent<SceneProps> = ({
  settings,
  state,
  onContinue,
  onTextLoadingStart,
  onTextLoadingEnd,
  onChoiceSelected,
  skipAnimation,
}) => {
  const [t] = useTranslation();

  const handleClickContinue = () => onContinue();
  const handleKeyContinue: KeyboardEventHandler<HTMLDivElement> = event => {
    if (['Right', 'ArrowRight', 'Enter', 'Spacebar', ' '].includes(event.key)) {
      onContinue();
    }
  };

  // TODO: Bring back transitions
  let portraits: ReactElement | null = null;
  if (!state.centered) {
    // Only show characters that have the loaded expression, never show empty images
    const characterPortraits = state.shownCharacters.filter(
      character => character.images[state.characterExpressions[character.id]]
    );

    portraits = (
      <PortraitsContainer count={characterPortraits.length}>
        {characterPortraits.map(character => {
          const CharacterImage =
            character.images[state.characterExpressions[character.id]];

          return (
            <CharacterPortrait
              key={character.id}
              active={character.id === state.currentCharacter?.id}
            >
              <AnimationContainer
                animation={state.characterAnimation[character.id]}
              >
                <PortraitImage>
                  <CharacterImage />
                </PortraitImage>
              </AnimationContainer>
            </CharacterPortrait>
          );
        })}
      </PortraitsContainer>
    );
  }

  return (
    <SceneContainer
      background={
        state.background?.type === 'image' ? state.background.asset : undefined
      }
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
              skipAnimation={!settings.textAnimationsEnabled || skipAnimation}
              animationSpeed={settings.textAnimationSpeed}
              onTextLoadingStart={onTextLoadingStart}
              onTextLoadingEnd={onTextLoadingEnd}
            />
          </p>
          {(!settings.textAnimationsEnabled || skipAnimation) && (
            <MultipleChoices>
              {state.choices.map(choice => (
                <MultipleChoiceElement
                  key={choice.content}
                  onClick={() => onChoiceSelected(choice)}
                >
                  <MultipleChoiceElementLeftArrow />
                  <span dangerouslySetInnerHTML={{ __html: choice.content }}/>
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
              key={state.text}
              skipAnimation={!settings.textAnimationsEnabled || skipAnimation}
              animationSpeed={settings.textAnimationSpeed}
              onTextLoadingStart={onTextLoadingStart}
              onTextLoadingEnd={onTextLoadingEnd}
            />
          </p>
          {(!settings.textAnimationsEnabled || skipAnimation) && (
            <React.Fragment>
              <NextButton />
              {state.notes && (
                <p
                  css={theme => css`
                    color: ${theme.colors.yellow};
                    font-size: 1.5rem;
                  `}
                >
                  {t(state.notes?.lineId, {
                    ...state.notes?.variables,
                    name: t((state.notes?.variables.name as string) || ''),
                  })}
                </p>
              )}
            </React.Fragment>
          )}
        </DialogBox>
      )}
      {state.bgm && settings.musicEnabled && (
        <AudioPlayer
          src={state.bgm}
          autoPlay
          loop
          volume={settings.musicVolume / 100}
        />
      )}
    </SceneContainer>
  );
};
