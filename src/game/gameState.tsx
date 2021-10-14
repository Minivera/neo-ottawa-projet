import { Dispatch, ReducerState, useReducer, useEffect } from 'react';
import { InkList, Story } from 'inkjs/engine/Story';
import { InkListItem } from 'inkjs/engine/InkList';
import { toast } from 'react-hot-toast';

import { SceneState } from './scene';
import { PDA, PDATab } from './pda';
import { usePreloader } from '../hooks/useLoading';
import { Game } from './game';
import { extractCharacterTags, extractPlacementTags } from './tags';
// TODO: Add lazy loading to make this more seamless
import { Characters } from '../data/characters';
import { backgrounds } from '../data/assets/backgrounds';
import { musics } from '../data/assets/musics';
import { soundEffects } from '../data/assets/soundEffects';
import { contacts } from '../data/contacts';
import { piecesOfEvidence } from '../data/evidence';
import { CharacterAnimation } from './event';
import { Settings } from '../hooks/useSettings';

// Hardcoded images to preload
import pdaBorderTopCenter from '../assets/ui/pda/Border1-TopCenter.png';
import pdaBorderTopRight from '../assets/ui/pda/Border2-TopRight.png';
import pdaBorderBotLeft from '../assets/ui/pda/Border3-BotLeft.png';
import pdaBorderBotRight from '../assets/ui/pda/Border4-BotRight.png';
import cityMapImage from '../assets/ui/pda/Ottawa_map.png?w=1920&h=1024';

const localstorageSaveKey = 'game-save';

export enum GameState {
  // eslint-disable-next-line no-unused-vars
  Loading = 'loading',
  // eslint-disable-next-line no-unused-vars
  Ready = 'ready',
  // eslint-disable-next-line no-unused-vars
  Loaded = 'loaded',
  // eslint-disable-next-line no-unused-vars
  Started = 'started',
  // eslint-disable-next-line no-unused-vars
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
  last_added_evidence: InkList | boolean;
  known_contacts: InkList;
  last_added_contact: InkList | boolean;
  pda_activated: boolean;
  /* eslint-enable camelcase */
}

export type GameAction =
  | { type: 'start' }
  | { type: 'end' }
  | { type: 'continue'; choiceId?: number }
  | { type: 'save_game' }
  | {
      type: 'animate_character';
      characterId: keyof typeof Characters;
      animation: CharacterAnimation;
    }
  | {
      type: 'play_sound';
      soundId: keyof typeof soundEffects;
    }
  | { type: 'open_pda' }
  | { type: 'close_pda' }
  | { type: 'change_pda_tab'; tab: PDATab };
type GameReducer = (state: Game, action: GameAction) => Game;

const isPDAActivated = (story: Story) =>
  (story.variablesState as unknown as GameVariables).pda_activated;

const generatePDAState = (previousState: PDA, story: Story): PDA => {
  const variables = story.variablesState as unknown as GameVariables;

  const state = {
    ...previousState,
    enabled: isPDAActivated(story),
  };

  // Check the recently added contact variable for the most recently added contact
  if (
    variables.last_added_contact &&
    typeof variables.last_added_contact !== 'boolean'
  ) {
    const item = JSON.parse(
      variables.last_added_contact.entries().next().value[0]
    ) as InkListItem;
    const contactName = item.itemName as keyof typeof contacts;

    const contact = contacts[contactName];

    if (
      contact &&
      !previousState.contacts.find(el => el.characterId === contactName)
    ) {
      state.contacts.push(contact);
    }
  }

  // In case we still have more contacts than already saved in the state. It probably
  // means we're loading something or the state got messy. Refresh.
  if (variables.known_contacts.Count !== state.contacts.length) {
    variables.known_contacts.orderedItems.forEach(entry => {
      const item = entry.Key;
      const contactName = item.itemName as keyof typeof contacts;

      const contact = contacts[contactName];

      if (
        contact &&
        !previousState.contacts.find(el => el.characterId === contactName)
      ) {
        state.contacts.push(contact);
      }
    });
  }

  // Do the same for the evidence
  if (
    variables.last_added_evidence &&
    typeof variables.last_added_evidence !== 'boolean'
  ) {
    const item = JSON.parse(
      variables.last_added_evidence.entries().next().value[0]
    ) as InkListItem;
    const evidenceName = item.itemName as keyof typeof piecesOfEvidence;

    const evidence = piecesOfEvidence[evidenceName];

    if (
      evidence &&
      !previousState.evidence.find(el => el.evidenceId === evidenceName)
    ) {
      state.evidence.push(evidence);
    }
  }

  // In case we still have more evidence than already saved in the state. It probably
  // means we're loading something or the state got messy. Refresh.
  if (variables.known_evidence.Count !== state.contacts.length) {
    variables.known_evidence.orderedItems.forEach(entry => {
      const item = entry.Key;
      const evidenceName = item.itemName as keyof typeof piecesOfEvidence;

      const evidence = piecesOfEvidence[evidenceName];

      if (
        evidence &&
        !previousState.evidence.find(el => el.evidenceId === evidenceName)
      ) {
        state.evidence.push(evidence);
      }
    });
  }

  return state;
};

const generateCurrentScene = (
  text: string | null,
  previousState: SceneState | null,
  story: Story
): SceneState => {
  const tags = story.state.currentTags;

  const characterTag = extractCharacterTags(tags);
  const placementTag = extractPlacementTags(tags);

  const variables = story.variablesState as unknown as GameVariables;

  const currentScene: SceneState = {
    text: text || previousState?.text || '',
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

  // Check the recently added contact variable for the most recently added contact
  if (
    variables.last_added_contact &&
    typeof variables.last_added_contact !== 'boolean'
  ) {
    const item = JSON.parse(
      variables.last_added_contact.entries().next().value[0]
    ) as InkListItem;
    const contact = item.itemName as keyof typeof contacts;

    currentScene.notes = {
      lineId: 'contact_added',
      variables: { name: Characters[contact]?.name },
    };

    variables.last_added_contact = false;
  }

  // Do the same for the evidence
  if (
    variables.last_added_evidence &&
    typeof variables.last_added_evidence !== 'boolean'
  ) {
    const item = JSON.parse(
      variables.last_added_evidence.entries().next().value[0]
    ) as InkListItem;
    const evidence = item.itemName as keyof typeof piecesOfEvidence;

    currentScene.notes = {
      lineId: 'evidence_added',
      variables: { name: evidence },
    };

    variables.last_added_evidence = false;
  }

  return currentScene;
};

const gameReducerFactory =
  (settings: Settings): GameReducer =>
  (state: Game, action: GameAction): Game => {
    switch (action.type) {
      case 'start': {
        // Ready means we haven't started the game, we need to boot it up and
        // get ready to show content.
        if (state.state === GameState.Ready) {
          // Run the story for the first time if we've only loaded the content
          const result = state.story.Continue();

          return {
            ...state,
            state: GameState.Started,
            currentScene: generateCurrentScene(result, null, state.story),
          };
        }

        // If not ready, then we have a save already going. Set the game to started.
        return {
          ...state,
          state: GameState.Started,
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
          throw new Error(
            'An error occurred, game was not started or has ended'
          );
        }

        if (typeof action.choiceId !== 'undefined') {
          state.story.ChooseChoiceIndex(action.choiceId);

          // Skip the interface showing chosen choice (TODO: Readd if we ever make use of that feature).
          state.story.Continue();
        }

        const result = state.story.Continue();

        return {
          ...state,
          pda: generatePDAState(state.pda, state.story),
          currentScene: {
            // Show a message if the PDA has recently been activated. We can clear in the next continue.
            notes:
              isPDAActivated(state.story) !== state.pda.enabled
                ? { lineId: 'pda_enabled', variables: {} }
                : undefined,
            ...generateCurrentScene(result, state.currentScene, state.story),
          },
        };
      }
      case 'save_game': {
        localStorage.setItem(localstorageSaveKey, state.story.state.toJson());

        // TODO: Make this translatable
        toast.success('Partie sauvegardée avec succès', {
          position: 'bottom-center',
        });

        return {
          ...state,
        };
      }
      case 'animate_character': {
        if (!state.currentScene) {
          throw new Error(
            'An error occurred, game was not started or has ended'
          );
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
      case 'play_sound': {
        const sound = soundEffects[action.soundId];

        if (sound && settings.soundEffectsEnabled) {
          sound.volume(settings.soundEffectsVolume / 100);
          sound.play();
        }

        return {
          ...state,
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
        return state;
    }
  };

export const useGame = (
  settings: Settings,
  storyContent: string,
  save?: string
): [boolean, number, ReducerState<GameReducer>, Dispatch<GameAction>] => {
  const game: Game = {
    // JSON has invalid char at index 0 for some reason
    story: new Story(storyContent.slice(1)),
    state: GameState.Loading,
    pda: {
      open: false,
      enabled: false,
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
    ...Object.keys(backgrounds)
      .map(key => backgrounds[key].asset)
      .flat(),
  ];

  const [state, dispatch] = useReducer<GameReducer>(
    gameReducerFactory(settings),
    game
  );

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
          dispatch({ type: 'play_sound', soundId });
        },
        false
      );
    } catch {
      // Ignore exceptions here as hot-reloading can cause this effect to rerun
    }
  }, []);

  useEffect(() => {
    // FIXME: This is a ugly state mutation, cleanup
    if (save) {
      game.story.state.LoadJson(save);
      game.state = GameState.Loaded;
    } else {
      // Check if we have a local storage save TODO: Remove
      const localSave = localStorage.getItem(localstorageSaveKey);
      if (localSave) {
        game.story.state.LoadJson(localSave);
        game.state = GameState.Loaded;
      } else {
        game.state = GameState.Ready;
      }
    }

    if (game.state === GameState.Loaded && game.story.canContinue) {
      const result = game.story.state.currentText;

      game.pda = generatePDAState(game.pda, game.story);
      game.currentScene = generateCurrentScene(result, null, game.story);
    }
  }, [save]);

  return [...usePreloader(images), state, dispatch];
};
