import { Dispatch, ReducerState, useReducer, useEffect } from 'react';
import { InkList, Story } from 'inkjs/engine/Story';
import { InkListItem } from 'inkjs/engine/InkList';

import { SceneState } from './scene';
import { PDA, PDATab } from './pda';
import { usePreloader } from '../hooks/useLoading';
import { Game } from './game';
import { extractCharacterTags, extractPlacementTags } from './tags';
import { Characters } from '../data/characters';
import { backgrounds } from '../data/assets/backgrounds';
import { musics } from '../data/assets/musics';
import { soundEffects } from '../data/assets/soundEffects';
import { CharacterAnimation } from './event';

// Hardcoded images to preload
import pdaBorderTopCenter from '../assets/ui/pda/Border1-TopCenter.png';
import pdaBorderTopRight from '../assets/ui/pda/Border2-TopRight.png';
import pdaBorderBotLeft from '../assets/ui/pda/Border3-BotLeft.png';
import pdaBorderBotRight from '../assets/ui/pda/Border4-BotRight.png';
import cityMapImage from '../assets/ui/pda/Ottawa_map.png?w=1920&h=1024';

export enum GameState {
  Loading = 'loading',
  Loaded = 'loaded',
  Started = 'started',
  Ended = 'ended',
}

export interface Game {
  story: Story;
  state: GameState;
  currentScene?: SceneState;
  pda: PDA;
}

interface GameVariables {
  /* eslint-disable camelcase */
  shown_characters: InkList;
  current_background: string;
  current_music: string;
  known_evidence: InkList;
  known_contacts: InkList;
  pda_activated: boolean;
  /* eslint-enable camelcase */
}

export type GameAction =
  | { type: 'start' }
  | { type: 'end' }
  | { type: 'continue'; choiceId?: number }
  | {
      type: 'animate_character';
      characterId: keyof typeof Characters;
      animation: CharacterAnimation;
    }
  | { type: 'open_pda' }
  | { type: 'close_pda' }
  | { type: 'change_pda_tab'; tab: PDATab };
type GameReducer = (state: Game, action: GameAction) => Game;

const isPDAActivated = (story: Story) =>
  (story.variablesState as unknown as GameVariables).pda_activated;

const generateCurrentScene = (
  text: string | null,
  previousState: SceneState | null,
  story: Story,
  pdaState: PDA
): SceneState => {
  const tags = story.currentTags;

  const characterTag = extractCharacterTags(tags);
  const placementTag = extractPlacementTags(tags);

  const variables = story.variablesState as unknown as GameVariables;

  const currentScene: SceneState = {
    text: text || previousState?.text || '',
    notes: undefined,
    centered: placementTag.centered,
    choices: [],
    shownCharacters: [],
    characterExpressions: previousState
      ? previousState.characterExpressions
      : {},
    characterAnimation: previousState ? previousState.characterAnimation : {},
  };

  // Try extracting the name of the person talking using `Name: dialog`
  const extract = currentScene.text.split(':');
  if (extract.length > 1) {
    currentScene.text = extract.slice(1).join(':').trim();
    currentScene.dialogName = extract[0].trim();
  }

  // Shown characters are the characters from the variable - any character set as hidden
  variables.shown_characters.forEach((_, itemJson) => {
    const item = JSON.parse(itemJson) as InkListItem;
    const id = item.itemName;
    if (!id) {
      return;
    }

    const found = Characters[id];
    if (!found) {
      return;
    }

    if (
      (id === characterTag.character?.id && !characterTag.invisible) ||
      id !== characterTag.character?.id
    ) {
      currentScene.shownCharacters.push(found);

      if (!currentScene.characterExpressions[found.id]) {
        currentScene.characterExpressions[found.id] = 'neutral';
      }
    }
  });

  if (characterTag.character) {
    currentScene.currentCharacter = characterTag.character;

    if (characterTag.expression) {
      currentScene.characterExpressions[characterTag.character.id] =
        characterTag.expression;
    }
  }

  if (variables.current_music) {
    currentScene.bgm =
      variables.current_music === 'none'
        ? undefined
        : musics[variables.current_music];
  }

  if (variables.current_background) {
    currentScene.background =
      variables.current_background === 'none'
        ? undefined
        : backgrounds[variables.current_background];
  }

  if (story.currentChoices.length) {
    currentScene.choices = [];

    story.currentChoices.forEach(choice => {
      currentScene.choices?.push({
        id: choice.index,
        content: choice.text,
      });
    });
  }

  // Loop in all contacts, document, and evidence to check if any was recently added
  variables.known_contacts.forEach((_, value) => {
    const item = JSON.parse(value) as InkListItem;
    const contact = item.itemName;

    if (contact && !pdaState.contacts.find(el => el.characterId === contact)) {
      currentScene.notes = {
        lineId: 'contact_added',
        variables: { name: Characters[contact]?.name },
      };
    }
  });

  variables.known_evidence.forEach((_, value) => {
    const item = JSON.parse(value) as InkListItem;
    const evidence = item.itemName;

    if (evidence && !pdaState.evidence.find(el => el.evidenceId === evidence)) {
      currentScene.notes = {
        lineId: 'evidence_added',
        variables: { name: evidence },
      };
    }
  });

  return currentScene;
};

const gameReducerFactory: GameReducer = (
  state: Game,
  action: GameAction
): Game => {
  switch (action.type) {
    case 'start': {
      // Run the story for the first time
      const result = state.story.Continue();

      return {
        ...state,
        state: GameState.Started,
        currentScene: generateCurrentScene(
          result,
          null,
          state.story,
          state.pda
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

      if (typeof action.choiceId !== 'undefined') {
        state.story.ChooseChoiceIndex(action.choiceId);

        // Skip the interface showing chosen choice (TODO: Readd if we ever make use of that feature).
        state.story.Continue();
      }

      const result = state.story.Continue();

      return {
        ...state,
        pda: {
          ...state.pda,
          enabled: isPDAActivated(state.story),
        },
        currentScene: {
          // Show a message if the PDA has recently been activated. We can clear in the next continue.
          notes:
            isPDAActivated(state.story) !== state.pda.enabled
              ? { lineId: 'pda_enabled', variables: {} }
              : undefined,
          ...generateCurrentScene(
            result,
            state.currentScene,
            state.story,
            state.pda
          ),
        },
      };
    }
    case 'animate_character': {
      if (!state.currentScene) {
        throw new Error('An error occurred, game was not started or has ended');
      }

      return {
        ...state,
        currentScene: {
          ...state.currentScene,
          currentCharacter: Characters[action.characterId],
          characterAnimation: {
            ...state.currentScene.characterAnimation,
            [action.characterId]: action.animation,
          },
        },
      };
    }
    case 'open_pda': {
      return {
        ...state,
        pda: {
          ...state.pda,
          open: true,
        },
      };
    }
    case 'close_pda': {
      return {
        ...state,
        pda: {
          ...state.pda,
          open: false,
        },
      };
    }
    case 'change_pda_tab': {
      return {
        ...state,
        pda: {
          ...state.pda,
          tab: action.tab,
        },
      };
    }
    default:
      throw new Error('An error occurred, wrong game action');
  }
};

export const useGame = (
  storyContent: string,
  save?: string
): [boolean, number, ReducerState<GameReducer>, Dispatch<GameAction>] => {
  const game: Game = {
    // JSON has invalid char at index 0 for some reason
    story: new Story(storyContent.slice(1)),
    state: GameState.Loading,
    pda: {
      open: false,
      tab: PDATab.HOME,
      documents: [],
      contacts: [],
      evidence: [],
    },
  };
  const images: string[] = [
    pdaBorderTopCenter,
    pdaBorderTopRight,
    pdaBorderBotLeft,
    pdaBorderBotRight,
    cityMapImage,
    ...Object.keys(Characters)
      .map(key =>
        Object.keys(Characters[key].images).map(
          imageKey => Characters[key].images[imageKey]
        )
      )
      .flat(),
    ...Object.keys(backgrounds)
      .map(key => backgrounds[key].asset)
      .flat(),
  ];

  if (save) {
    game.story.state.LoadJson(save);
    game.state = GameState.Started;
  } else {
    game.state = GameState.Loaded;
  }

  const [state, dispatch] = useReducer(gameReducerFactory, game);

  useEffect(() => {
    try {
      state.story.BindExternalFunction(
        'animate_character',
        (
          characterId: keyof typeof Characters,
          animation: CharacterAnimation
        ) => {
          dispatch({ type: 'animate_character', animation, characterId });
        },
        false
      );

      state.story.BindExternalFunction(
        'play_sound',
        (soundId: keyof typeof soundEffects) => {
          const sound = soundEffects[soundId];
          if (sound) {
            sound.play();
          }
        },
        false
      );
    } catch {
      // Ignore exceptions here as hot-reloading can cause this effect to rerun
    }
  }, []);

  return [...usePreloader(images), state, dispatch];
};
