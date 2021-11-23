import { Dispatch, ReducerState, useReducer, useEffect, useMemo } from 'react';
import { InkList, Story } from 'inkjs/engine/Story';
import { InkListItem } from 'inkjs/engine/InkList';
import { toast } from 'react-hot-toast';

import { SceneState } from './scene';
import { PDA, PDATab } from './pda';
import { usePreloader } from '../hooks/useLoading';
import { Game } from './game';
import { extractCharacterTags, extractPlacementTags, extractQuizTags } from './tags';
// TODO: Add lazy loading to make this more seamless
import { Characters } from '../data/characters';
import { backgrounds } from '../data/assets/backgrounds';
import { musics } from '../data/assets/musics';
import { soundEffects } from '../data/assets/soundEffects';
import { contacts } from '../data/contacts';
import { piecesOfEvidence } from '../data/evidence';
import { CharacterAnimation, Quiz } from './event';
import { Settings } from '../hooks/useSettings';
import { documents } from '../data/documents';

// Hardcoded images to preload
import pdaBorderTopCenter from '../assets/ui/pda/Border1-TopCenter.png';
import pdaBorderTopRight from '../assets/ui/pda/Border2-TopRight.png';
import pdaBorderBotLeft from '../assets/ui/pda/Border3-BotLeft.png';
import pdaBorderBotRight from '../assets/ui/pda/Border4-BotRight.png';
import cityMapImage from '../assets/ui/pda/Ottawa_map.png?w=1920&h=1024';
import { addSceneToGameLog, updateSceneFromGameLog } from './gameLog';

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
  currentQuiz?: Quiz;
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
  known_documents: InkList;
  last_added_document: InkList | boolean;
  pda_activated: boolean;
  quiz_started: boolean;
  quiz_name: string;
  quiz_question_count: number;
  current_document: InkList | boolean;
  history: string;
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
  if (variables.known_evidence.Count !== state.evidence.length) {
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

  // Do the same for the documents
  if (
    variables.last_added_document &&
    typeof variables.last_added_document !== 'boolean'
  ) {
    const item = JSON.parse(
      variables.last_added_document.entries().next().value[0]
    ) as InkListItem;
    const documentName = item.itemName as keyof typeof documents;

    const document = documents[documentName];

    if (
      document &&
      !previousState.documents.find(el => el.documentId === documentName)
    ) {
      state.documents.push(document);
    }
  }

  // In case we still have more documents than already saved in the state. It probably
  // means we're loading something or the state got messy. Refresh.
  if (variables.known_documents.Count !== state.documents.length) {
    variables.known_documents.orderedItems.forEach(entry => {
      const item = entry.Key;
      const documentName = item.itemName as keyof typeof documents;

      const document = documents[documentName];

      if (
        document &&
        !previousState.documents.find(el => el.documentId === documentName)
      ) {
        state.documents.push(document);
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
  const variables = story.variablesState as unknown as GameVariables;
  if (variables.quiz_started && previousState) {
    return previousState;
  }

  const tags = story.state.currentTags;

  const characterTag = extractCharacterTags(tags);
  const placementTag = extractPlacementTags(tags);

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

  // Do the same for the documents
  if (
    variables.last_added_document &&
    typeof variables.last_added_document !== 'boolean'
  ) {
    const item = JSON.parse(
      variables.last_added_document.entries().next().value[0]
    ) as InkListItem;
    const document = item.itemName as keyof typeof documents;

    currentScene.notes = {
      lineId: 'document_added',
      variables: { name: documents[document]?.name },
    };

    variables.last_added_document = false;
  }

  return currentScene;
};

const generateQuizStep = (
  text: string | null,
  previousState: Quiz | undefined,
  story: Story
): undefined | Quiz => {
  const variables = story.variablesState as unknown as GameVariables;
  if (!variables.quiz_started) {
    return undefined;
  }

  const quiz: Quiz = {
    name: previousState?.name || variables.quiz_name,
    questionCount: previousState?.questionCount || variables.quiz_question_count,
    currentIndex: previousState?.currentIndex || 0,
    question: previousState?.question || '',
    feedback: previousState?.feedback || '',
    choices: [],
  };

  const tags = extractQuizTags(story.currentTags);

  if (text && tags.question && tags.index) {
    quiz.question = text;
    quiz.currentIndex = tags.index;
    quiz.feedback = '';
  } else {
    quiz.feedback = text || '';
  }

  if (story.currentChoices.length) {
    quiz.choices = [];

    story.currentChoices.forEach(choice => {
      quiz.choices?.push({
        id: choice.index,
        content: choice.text,
      });
    });
  }

  // Set which document should be shown on screen during this part of the quiz
  if (
    variables.current_document &&
    typeof variables.current_document !== 'boolean'
  ) {
    const item = JSON.parse(
      variables.current_document.entries().next().value[0]
    ) as InkListItem;
    const document = item.itemName as keyof typeof documents;

    quiz.document = documents[document];
  }

  return quiz;
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

  // FIXME: We have side effects in this reducer, that should not be the case. Convert
  // to some pure hook or something like that.
  const gameReducerMemo = useMemo<GameReducer>(() => (state: Game, action: GameAction): Game => {
    switch (action.type) {
      case 'start': {
        // Ready means we haven't started the game, we need to boot it up and
        // get ready to show content.
        if (state.state === GameState.Ready) {
          // Run the story for the first time if we've only loaded the content
          const result = state.story.Continue();

          const currentScene = generateCurrentScene(result, null, state.story);

          // Also add it to start filling the game log
          addSceneToGameLog(state.story, currentScene);

          return {
            ...state,
            state: GameState.Started,
            currentScene,
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

          // If we make a choice, also set that choice as chosen in the log
          updateSceneFromGameLog(state.story, state.currentScene, {
            ...state.currentScene,
            chosenChoice: state.currentScene.choices?.find(choice => choice.id === action.choiceId),
          });

          // Skip the interface showing chosen choice (TODO: Readd if we ever make use of that feature).
          state.story.Continue();
        }

        if (!state.story.canContinue) {
          return state;
        }

        const result = state.story.Continue();

        const currentScene: SceneState = {
          // Show a message if the PDA has recently been activated. We can clear in the next continue.
          notes:
            isPDAActivated(state.story) !== state.pda.enabled
              ? { lineId: 'pda_enabled', variables: {} }
              : undefined,
          ...generateCurrentScene(result, state.currentScene, state.story),
        };
        const currentQuiz = generateQuizStep(result, state.currentQuiz, state.story);

        if (!currentQuiz) {
          // Add the scene as is to the game log only if not processing a quiz.
          addSceneToGameLog(state.story, currentScene);
        }

        return {
          ...state,
          pda: generatePDAState(state.pda, state.story),
          currentScene,
          currentQuiz,
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
  }, [settings]);
  const [state, dispatch] = useReducer<GameReducer>(
    gameReducerMemo,
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
