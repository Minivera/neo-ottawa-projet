import { useEffect, useMemo, useState } from 'react';
import { InkList, Story } from 'inkjs/engine/Story';
import { InkListItem } from 'inkjs/engine/InkList';
import { Path } from 'inkjs/engine/Path';
import { Howl } from 'howler';

import { SceneState } from './scene';
import { PDA } from './pda';
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
import { soundEffects } from '../data/assets/soundEffects';
import { contacts } from '../data/contacts';
import { quizzesInfo } from '../data/quizzes';
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
import pdaBorderTopCenter from '../assets/ui/modals/Border1-TopCenter.png';
import pdaBorderTopRight from '../assets/ui/modals/Border2-TopRight.png';
import pdaBorderBotLeft from '../assets/ui/modals/Border3-BotLeft.png';
import pdaBorderBotRight from '../assets/ui/modals/Border4-BotRight.png';
import pdaBorderTopLeft from '../assets/ui/modals/Border5-TopLeft.png';
import pdaOpen from '../assets/sound/futuristic-login.mp3';

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
  known_contacts: InkList;
  last_added_contact: InkList | boolean;
  known_documents: InkList;
  last_added_document: InkList | boolean;
  pda_activated: boolean;
  current_quiz: string | boolean;
  completed_quizzes: InkList;
  quiz_question_count: number;
  current_document: string | boolean;
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
    };

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

  // In case we still have more or less contacts than already saved in the state. It probably
  // means we're loading something, we have to remove contacts, or the state got messy. Refresh.
  if (variables.known_contacts.Count !== state.contacts.length) {
    state.contacts = [];

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

  // Do the same for the quizzes
  if (variables.current_quiz && variables.current_quiz.toString() !== 'none') {
    const quizInfo =
      quizzesInfo[variables.current_quiz as keyof typeof quizzesInfo];

    if (
      quizInfo &&
      !previousState.quizzes.find(el => el.quizId === quizInfo.quizId)
    ) {
      state.quizzes.push(quizInfo);
    }
  }

  // In case we still have more quizzes than already saved in the state. It probably
  // means we're loading something or the state got messy. Refresh.
  if (variables.completed_quizzes.Count !== state.quizzes.length) {
    variables.completed_quizzes.orderedItems.forEach(entry => {
      const item = entry.Key;
      const quizInfo = quizzesInfo[item.itemName as keyof typeof quizzesInfo];

      if (
        quizInfo &&
        !previousState.quizzes.find(el => el.quizId === quizInfo.quizId)
      ) {
        state.quizzes.push(quizInfo);
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
  if (
    variables.current_quiz &&
    variables.current_quiz.toString() !== 'none' &&
    previousState
  ) {
    return previousState;
  }

  const tags = story.state.currentTags;

  const characterTag = extractCharacterTags(tags);
  const placementTag = extractPlacementTags(tags);

  const currentScene: SceneState = {
    text: text || previousState?.text || '',
    centered: placementTag.centered,
    isPhone: placementTag.phone,
    isTransition: placementTag.transition,
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
      variables.current_music.toString() === 'none'
        ? undefined
        : variables.current_music;
  }

  if (variables.current_background) {
    currentScene.background =
      variables.current_background.toString() === 'none'
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
  if (!variables.current_quiz || variables.current_quiz.toString() === 'none') {
    return undefined;
  }

  const quiz: Quiz = {
    name:
      previousState?.name ||
      quizzesInfo[variables.current_quiz as keyof typeof quizzesInfo].name,
    questionCount:
      previousState?.questionCount || variables.quiz_question_count,
    currentIndex: previousState?.currentIndex || 0,
    questions: previousState?.questions || [],
  };

  let currentQuestion: QuizQuestion = {
    perfectAnswer: true,
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
    currentQuestion.perfectAnswer = !tags.mauvaiseRetroaction;
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
    variables.current_document.toString() !== 'none'
  ) {
    currentQuestion.document =
      documents[variables.current_document as keyof typeof documents];
  }

  return quiz;
};

export const useGame = (
  settings: Settings,
  storyContent: string,
  openPDA: () => void
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
      enabled: false,
      documents: [],
      contacts: [],
      quizzes: [],
    },
    saveSlots: [],
  });
  const location = useMemo<Location>(() => window.location, []);
  useEffect(() => {
      const knot = new URLSearchParams(location.search).get('noeud');
      if (knot && story.ContentAtPath(new Path(knot))) {
        story.ChoosePathString(knot);
      }
  }, [location?.search]);

  const images: string[] = [
    pdaBorderTopCenter,
    pdaBorderTopRight,
    pdaBorderBotLeft,
    pdaBorderBotRight,
    pdaBorderTopLeft,
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
        default:
          return state;
      }
    });
  };

  useEffect(() => {
    try {
      story.BindExternalFunction(
        'animate_character',
        (
          characterId: keyof typeof Characters,
          animation: CharacterAnimation
        ) => {
          dispatch({ type: 'animate_character', animation, characterId });
        },
        false
      );

      story.BindExternalFunction(
        'play_sound',
        (soundId: keyof typeof soundEffects) => {
          dispatch({ type: 'play_sound', soundId });
        },
        false
      );

      story.BindExternalFunction(
        'show_pda',
        () => {
          if (settings.soundEffectsEnabled) {
            new Howl({
              src: [pdaOpen],
              volume: settings.soundEffectsVolume / 100,
            }).play();
          }
          openPDA();
        },
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
