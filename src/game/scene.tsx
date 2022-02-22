/** @jsx jsx */
import { css, jsx, useTheme } from '@emotion/react';
import React, {
  KeyboardEventHandler,
  ReactElement,
  RefObject,
  useEffect,
} from 'react';
import { useTranslation } from 'react-i18next';

import { Character, CharacterState, CharacterThemes } from './character';
import { CharacterAnimation, Choice } from './event';
import { SceneContainer } from '../components/sceneContainer';
import { PortraitsContainer } from '../components/portraitsContainer';
import { CharacterPortrait } from '../components/characterPortrait';
import { PortraitImage } from '../components/portraitImage';
import { DialogBox, DialogTitle } from '../components/dialogBox';
import { AnimatedText } from '../components/animatedText';
import { AnimationContainer } from '../components/animationContainer';
import { NextButton } from '../components/nextButton';
import {
  MultipleChoiceElement,
  MultipleChoices,
} from '../components/multipleChoices';
import { Settings } from '../hooks/useSettings';
import { GameBackground } from '../components/gameBackground';
import { Characters } from '../data/characters';
import { musics } from '../data/assets/musics';

export interface SceneState {
  dialogName?: string;
  text: string;
  centered?: boolean;
  isTransition?: boolean;
  background?: { type: 'video' | 'image'; asset: string };
  location?: string;
  bgm?: string;
  choices?: Choice[];
  chosenChoice?: Choice;
  notes?: { lineId: string; variables: Record<string, unknown> };
  currentCharacter?: Character;
  shownCharacters: Character[];
  characterExpressions: Record<string, string>;
  characterStates: Record<string, CharacterState>;
  characterAnimation: Record<string, CharacterAnimation>;
}

export interface SceneProps {
  settings: Settings;
  state: SceneState;
  onContinue: () => void;
  onTextLoadingStart: () => void;
  onTextLoadingEnd: () => void;
  onChoiceSelected: (choice: Choice) => void;
  sceneRef: RefObject<HTMLDivElement>;
  skipAnimation?: boolean;
}

export const Scene: React.FunctionComponent<SceneProps> = ({
  settings,
  state,
  onContinue,
  onTextLoadingStart,
  onTextLoadingEnd,
  onChoiceSelected,
  sceneRef,
  skipAnimation,
}) => {
  const [t] = useTranslation();
  const theme = useTheme();

  useEffect(() => {
    if (sceneRef && sceneRef.current) {
      sceneRef.current.focus();
    }
  }, [state]);
  useEffect(() => {
    Object.values(musics).forEach(music => {
      music.pause();
    });

    if (!state.bgm) {
      return;
    }

    const music = musics[state.bgm];
    if (music && settings.musicEnabled) {
      music.volume(settings.musicVolume / 100);
      music.play();
    }
  }, [state.bgm]);
  useEffect(() => {
    window.onbeforeunload = () => true;
    return () => {
      window.onbeforeunload = () => {};
    };
  }, []);

  const handleClickContinue = () => onContinue();
  const handleKeyContinue: KeyboardEventHandler<HTMLDivElement> = event => {
    if (['Right', 'ArrowRight', 'Enter', 'Spacebar', ' '].includes(event.key)) {
      onContinue();
    }
  };

  const activeCharacterTheme =
    state.currentCharacter && Characters[state.currentCharacter.id]?.theme;
  const themeToCharacterColor: Record<CharacterThemes, string> = {
    player: theme.colors.yellow,
    police: theme.colors.secondary,
    resistance: theme.colors.primary,
    other: theme.colors.white,
    narrateur: theme.colors.lightGray,
  };
  const characterTheme =
    activeCharacterTheme && themeToCharacterColor[activeCharacterTheme];

  let portraits: ReactElement | null = null;
  if (!state.centered && !state.isTransition) {
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
              inPhone={state.characterStates[character.id] === 'phone'}
            >
              <AnimationContainer
                animate={settings.textAnimationsEnabled}
                duration={settings.textAnimationSpeed}
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
        state.background?.type === 'image' && !state.isTransition
          ? state.background.asset
          : undefined
      }
      centerRow={!portraits}
      onClick={handleClickContinue}
      onKeyDown={handleKeyContinue}
      tabIndex={-1}
      ref={sceneRef}
    >
      {portraits}
      {state.choices && state.choices.length ? (
        <DialogBox center={!portraits} characterTheme={characterTheme}>
          {state.dialogName && (
            <DialogTitle characterTheme={characterTheme}>
              <h1>{state.dialogName}</h1>
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
                  <span dangerouslySetInnerHTML={{ __html: choice.content }} />
                </MultipleChoiceElement>
              ))}
            </MultipleChoices>
          )}
        </DialogBox>
      ) : (
        <DialogBox center={!portraits} transition={state.isTransition} characterTheme={characterTheme}>
          {state.dialogName && !state.isTransition && (
            <DialogTitle characterTheme={characterTheme}>
              <h1>{state.dialogName}</h1>
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
      {state.background?.type === 'video' && (
        <GameBackground
          /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
          // @ts-ignore
          src={state.background.asset}
          autoPlay={true}
          muted
          loop
        />
      )}
    </SceneContainer>
  );
};
