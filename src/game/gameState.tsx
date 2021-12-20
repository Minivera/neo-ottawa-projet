import { useEffect, useMemo, useState } from 'react';
import { InkList, Story } from 'inkjs/engine/Story';
import { InkListItem } from 'inkjs/engine/InkList';

import { SceneState } from './scene';
import { PDA, PDATab } from './pda';
import { usePreloader } from '../hooks/useLoading';
import { Game } from './game';
import {
  extractCharacterTags,
  extractPlacementTags,
  extractQuizTags,
} from './tags';
// TODO: Add lazy loading to make this more seamless
import { Characters } from '../data/characters';
import { backgrounds } from '../data/assets/backgrounds';
import { musics } from '../data/assets/musics';
import { soundEffects } from '../data/assets/soundEffects';
import { contacts } from '../data/contacts';
import { piecesOfEvidence } from '../data/evidence';
import { CharacterAnimation, Quiz, QuizQuestion } from './event';
import { Settings } from '../hooks/useSettings';
import { documents } from '../data/documents';
import {
  addSceneToGameLog,
  saveQuizHistory,
  updateSceneFromGameLog,
} from './gameLog';
import { loadSaveSlots, saveSaveSlot, SaveSlot } from './saving';

// Hardcoded images to preload
import pdaBorderTopCenter from '../assets/ui/pda/Border1-TopCenter.png';
import pdaBorderTopRight from '../assets/ui/pda/Border2-TopRight.png';
import pdaBorderBotLeft from '../assets/ui/pda/Border3-BotLeft.png';
import pdaBorderBotRight from '../assets/ui/pda/Border4-BotRight.png';
import cityMapImage from '../assets/ui/pda/Ottawa_map.png?w=1920&h=1024';

export enum GameState {
  // eslint-disable-next-line no-unused-vars
  Loaded = 'loaded',
  // eslint-disable-next-line no-unused-vars
  Ready = 'ready',
  // eslint-disable-next-line no-unused-vars
  Started = 'started',
  // eslint-disable-next-line no-unused-vars
  Ended = 'ended',
}

export interface Game {
  state: GameState;
  currentScene?: SceneState;
  canContinue: boolean;
  currentQuiz?: Quiz;
  pda: PDA;
  saveSlots: SaveSlot[];
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
  | { type: 'save_game'; slot: SaveSlot }
  | { type: 'load_game'; slot: SaveSlot }
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
    isPhone: placementTag.phone,
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
    questionCount:
      previousState?.questionCount || variables.quiz_question_count,
    currentIndex: previousState?.currentIndex || 0,
    questions: previousState?.questions || [],
  };

  let currentQuestion: QuizQuestion = {
    question: '',
    choices: [],
  };

  const tags = extractQuizTags(story.currentTags);
  if (tags.index) {
    quiz.currentIndex = tags.index;
  }

  if (
    previousState?.currentIndex === quiz.currentIndex &&
    quiz.questions.length >= quiz.currentIndex
  ) {
    currentQuestion = quiz.questions[quiz.currentIndex - 1];
  } else {
    quiz.questions.push(currentQuestion);
  }

  if (text && tags.question) {
    currentQuestion.question = text;
    currentQuestion.feedback = '';
  } else if (tags.retroaction) {
    currentQuestion.feedback = text || '';
  }

  if (story.currentChoices.length) {
    currentQuestion.choices = [];

    story.currentChoices.forEach(choice => {
      const isGoodChoice = choice.text.startsWith('BON--');
      const content = choice.text.replace('BON--', '');

      currentQuestion.choices?.push({
        id: choice.index,
        content,
        isGoodChoice,
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
  storyContent: string
): [boolean, number, Story, Game, (action: GameAction) => void] => {
  // JSON has invalid char at index 0 for some reason
  const story = useMemo<Story>(
    () => new Story(storyContent.slice(1)),
    [storyContent]
  );
  const [state, setState] = useState<Game>({
    state: GameState.Loaded,
    canContinue: false,
    pda: {
      open: false,
      enabled: false,
      tab: PDATab.HOME,
      documents: [],
      contacts: [],
      evidence: [],
    },
    saveSlots: [],
  });
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

  const dispatch = async (action: GameAction): Promise<void> => {
    if (action.type === 'save_game') {
      await saveSaveSlot(action.slot);
      const slots = await loadSaveSlots();
      setState(state => ({
        ...state,
        saveSlots: slots,
      }));
      return;
    }

    if (action.type === 'load_game') {
      if (action.slot.save !== '{}') {
        story.state.LoadJson(action.slot.save);

        const result = story.state.currentText;

        setState(state => ({
          ...state,
          canContinue: story.canContinue,
          state: GameState.Started,
          pda: generatePDAState(state.pda, story),
          currentScene: generateCurrentScene(result, null, story),
        }));
      }
      return;
    }

    setState(state => {
      switch (action.type) {
        case 'start': {
          // Ready means we haven't started the game, we need to boot it up and
          // get ready to show content.
          if (state.state === GameState.Ready) {
            // Run the story for the first time if we've only loaded the content
            const result = story.Continue();

            const currentScene = generateCurrentScene(result, null, story);

            // Also add it to start filling the game log
            addSceneToGameLog(story, currentScene);

            return {
              ...state,
              canContinue: story.canContinue,
              state: GameState.Started,
              currentScene,
            };
          }

          // If not ready, then we have a save already going. Set the game to started.
          return {
            ...state,
            canContinue: story.canContinue,
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
            story.ChooseChoiceIndex(action.choiceId);

            // If we make a choice, also set that choice as chosen in the log
            updateSceneFromGameLog(story, state.currentScene, {
              ...state.currentScene,
              chosenChoice: state.currentScene.choices?.find(
                choice => choice.id === action.choiceId
              ),
            });

            // Skip the interface showing chosen choice (TODO: Readd if we ever make use of that feature).
            story.Continue();
          }

          if (!story.canContinue) {
            return state;
          }

          const result = story.Continue();

          const currentScene: SceneState = {
            // Show a message if the PDA has recently been activated. We can clear in the next continue.
            notes:
              isPDAActivated(story) !== state.pda.enabled
                ? { lineId: 'pda_enabled', variables: {} }
                : undefined,
            ...generateCurrentScene(result, state.currentScene, story),
          };
          const currentQuiz = generateQuizStep(
            result,
            state.currentQuiz,
            story
          );

          if (!currentQuiz) {
            // Add the scene as is to the game log only if not processing a quiz.
            addSceneToGameLog(story, currentScene);
          } else {
            // Save the quiz in the quiz save data if we have an active quiz
            saveQuizHistory(story, currentQuiz);
          }

          return {
            ...state,
            canContinue: story.canContinue,
            pda: generatePDAState(state.pda, story),
            currentScene,
            currentQuiz,
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
              ...(state.currentScene as SceneState),
              currentCharacter: Characters[action.characterId],
              characterAnimation: {
                ...state.currentScene?.characterAnimation,
                [action.characterId]: action.animation,
              },
            },
            animating: true,
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
    });
  };

  useEffect(() => {
    try {
      story.BindExternalFunction(
        'animate_character',
        (characterId: keyof typeof Characters, animation: CharacterAnimation) =>
          dispatch({ type: 'animate_character', animation, characterId }),
        false
      );

      story.BindExternalFunction(
        'play_sound',
        (soundId: keyof typeof soundEffects) =>
          dispatch({ type: 'play_sound', soundId }),
        false
      );

      story.BindExternalFunction(
        'show_pda',
        () => dispatch({ type: 'open_pda' }),
        false
      );
    } catch {
      // Ignore exceptions here as hot-reloading can cause this effect to rerun
    }
  }, [storyContent]);

  useEffect(() => {
    if (state.state === GameState.Loaded && story.canContinue) {
      const result = story.state.currentText;

      setState(state => ({
        ...state,
        state: GameState.Ready,
        pda: generatePDAState(state.pda, story),
        currentScene: generateCurrentScene(result, null, story),
      }));
    }
  }, []);

  useEffect(() => {
    loadSaveSlots().then(saveSlots => {
      setState(state => ({
        ...state,
        saveSlots,
      }));
    });
  }, []);

  return [...usePreloader(images), story, state, dispatch];
};
