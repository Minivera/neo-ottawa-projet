import csv from 'csv-parser';
import fs from 'fs';

import {
  ActionType,
  CharacterAnimation,
  Choice,
  GenericEvent,
  Narration,
  Transition,
} from '../src/game/event';
import { characterIdsToObjs } from '../src/data/characters/characterIds';

export interface GameContent {
  acts: Act[];
  characters: string[];
}

export interface Act {
  id: string;
  scenes: Scene[];
}

export interface Scene {
  id: string;
  background?: string;
  bgm?: string;
  events: Event[];
  characters: string[];
}

export interface Dialog extends GenericEvent {
  type: 'dialog';
  character: string;
  expression: string;
  animation?: CharacterAnimation;
  lineId: string;
}

export interface MultipleChoice extends GenericEvent {
  type: 'multiple_choice';
  character?: string;
  expression?: string;
  lineId: string;
  choices: Choice[];
}

export type Event = Dialog | Narration | Transition | MultipleChoice;

const results: CSVLine[] = [];

interface CSVLine {
  act?: string;
  scene?: string;
  location?: string;
  time?: string;
  atmosphere?: string;
  characters?: string;
  dialogs?: string;
  mainAnimation?: string;
  inventory?: string;
  PDA?: string;
  gameplay?: string;
  choice?: string;
  choicePoints?: string;
  choiceResults?: string;
  choiceResultsCharacters?: string;
  choiceResultsDialog?: string;
  choiceResultsAnimation?: string;
}

fs.createReadStream('./data/scenario.csv')
  .pipe(
    csv({
      skipLines: 1,
      mapHeaders: ({ index }) => {
        switch (index) {
          case 0:
            return 'act';
          case 1:
            return 'scene';
          case 2:
            return 'location';
          case 3:
            return 'time';
          case 4:
            return 'atmosphere';
          case 5:
            return 'characters';
          case 6:
            return 'dialogs';
          case 7:
            return 'mainAnimation';
          case 8:
            return 'inventory';
          case 9:
            return 'PDA';
          case 10:
            return 'gameplay';
          case 11:
            return 'choice';
          case 12:
            return 'choicePoints';
          case 13:
            return 'choiceResults';
          case 14:
            return 'choiceResultsCharacters';
          case 15:
            return 'choiceResultsDialog';
          case 16:
            return 'choiceResultsAnimation';
          default:
            return null;
        }
      },
    })
  )
  .on('data', data => results.push(data))
  .on('end', () => {
    const content: GameContent = {
      acts: [],
      characters: [],
    };

    const translations: { fr: Record<string, string> } = {
      fr: {},
    };

    let currentAct: Act | undefined;
    let currentScene: Scene | undefined;
    let currentMultipleChoiceEvent: MultipleChoice | undefined;
    let currentMultipleChoiceEventEndEvents: ActionType[] = [];

    const findAct = (index: string) =>
      content.acts.find(act => act.id === index);
    const findScene = (currentAct: Act, index: string) =>
      currentAct.scenes.find(scene => scene.id === index);
    const findEvent = (currentScene: Scene, index: string) =>
      currentScene.events.find(event => event.id === index);

    results.forEach(line => {
      if (line.act) {
        currentAct = findAct(line.act.trim());

        if (!currentAct) {
          currentAct = {
            id: line.act.trim(),
            scenes: [],
          };
          content.acts.push(currentAct);
        }
      }

      if (!currentAct) {
        throw new Error(`Act ${line.act} not found or no act found`);
      }

      if (line.scene) {
        currentScene = findScene(currentAct, line.scene.trim());

        if (!currentScene) {
          currentScene = {
            id: `${currentAct?.id}_${line.scene.trim()}`,
            characters: [],
            // bgm: line.location, TODO
            // background: line.location, TODO
            events: [],
          };

          // Try to add this scene to the last event of the previous scene
          const lastScene = currentAct.scenes.at(-1);
          const lastEvent = lastScene?.events.at(-1);
          if (lastEvent && !lastEvent.action) {
            lastEvent.action = {
              type: 'switch_scene',
              sceneId: currentScene.id,
            };
          }

          currentAct.scenes.push(currentScene);

          // Move all events from the previously saved multiple choices to this scene
          currentMultipleChoiceEventEndEvents.forEach(action => {
            action.sceneId = (currentScene as Scene).id;
            delete action.eventId;
          });

          // Clear so we can start the next multiple choice anew.
          currentMultipleChoiceEventEndEvents = [];
          currentMultipleChoiceEvent = undefined;
        }
      }

      if (!currentScene) {
        throw new Error(`Scene ${line.scene} not found or no scene found`);
      }

      if (line.characters && line.characters.trim() !== 'NARRATEUR') {
        const characterString = `_replace__${line.characters.trim()}`;

        if (!content.characters.includes(characterString)) {
          content.characters.push(characterString);
        }

        if (!currentScene.characters.includes(characterString)) {
          currentScene.characters.push(characterString);
        }

        if (line.dialogs) {
          const id = `${currentScene.events.length}`;
          const lineId = `${currentAct.id}_${currentScene.id}_${id}_dialog`;

          currentScene.events.push({
            type: 'dialog',
            id,
            lineId,
            // TODO: Customizable expressions
            expression: 'neutral',
            character: characterString,
            // TODO: Add action and sound effects
          });

          translations.fr[lineId] = line.dialogs.trim();
        }
      } else if (
        line.characters &&
        line.dialogs &&
        line.characters === 'NARRATEUR'
      ) {
        const id = `${currentScene.events.length}`;
        const lineId = `${currentAct.id}_${currentScene.id}_${id}_narration`;

        currentScene.events.push({
          type: 'narration',
          id,
          fullscreen: true,
          shouldHideAll: true,
          lineId,
          // TODO: Add action and sound effects
        });

        translations.fr[lineId] = line.dialogs.trim();
      }

      if (line.mainAnimation) {
        const id = `${currentScene.events.length}`;
        const lineId = `${currentAct.id}_${currentScene.id}_${id}_narration`;

        currentScene.events.push({
          type: 'narration',
          id,
          lineId,
          // TODO: Add action and sound effects
        });

        translations.fr[lineId] = line.mainAnimation.trim();
      }

      if (line.choice) {
        if (!currentMultipleChoiceEvent) {
          const pastEvent = findEvent(
            currentScene,
            `${currentScene.events.length - 1}`
          );
          if (!pastEvent || pastEvent.type === 'transition') {
            throw new Error(
              'Tried to create a multiple choice event, but failed to access previous event'
            );
          }

          currentMultipleChoiceEvent = {
            type: 'multiple_choice',
            id: pastEvent.id,
            lineId: pastEvent.lineId,
            choices: [],
            expression: Object.hasOwnProperty.call(pastEvent, 'expression')
              ? (pastEvent as { expression: string }).expression
              : undefined,
            character: Object.hasOwnProperty.call(pastEvent, 'character')
              ? (pastEvent as { character: string }).character
              : undefined,
            // TODO: Sound effects
          };
          currentScene.events.push(currentMultipleChoiceEvent);
        }

        const [choiceId, text] = line.choice.split(':');
        const lineId = `${currentMultipleChoiceEvent.id}_${choiceId.trim()}`;

        currentMultipleChoiceEvent.choices.push({
          lineId,
          action: {
            type: 'switch_scene',
            sceneId: '',
          },
        });
        translations.fr[lineId] = text.trim();
      }

      if (line.choiceResults && currentMultipleChoiceEvent) {
        const currentChoice = currentMultipleChoiceEvent.choices.find(
          choice => {
            const choiceId = choice.lineId.split('_').slice(-1);

            return (
              line.choiceResults &&
              choiceId &&
              line.choiceResults.includes(choiceId[0])
            );
          }
        );
        if (!currentChoice) {
          throw new Error(
            `Tried to process a choice result ${line.choiceResults} that did not exist in multiple choice options`
          );
        }

        let newEvent: Event | null = null;
        // Process events that result in a dialog box
        if (line.choiceResultsCharacters && line.choiceResultsDialog) {
          const characterString = `_replace__${line.choiceResultsCharacters.trim()}`;

          if (!content.characters.includes(characterString)) {
            content.characters.push(characterString);
          }

          if (!currentScene.characters.includes(characterString)) {
            currentScene.characters.push(characterString);
          }

          const id = `${currentScene.events.length}_${line.choiceResults.trim()}`;
          const lineId = `${currentAct.id}_${currentScene.id}_${id}_dialog`;

          newEvent = {
            type: 'dialog',
            id,
            lineId,
            character: characterString,
            // TODO: Customizable expressions
            expression: 'neutral',
          };
          translations.fr[lineId] = line.choiceResultsDialog;
        } else if (line.choiceResultsAnimation) {
          // Process events that result in a narration box
          const id = `${currentScene.events.length}_${line.choiceResults}`;
          const lineId = `${currentAct.id}_${currentScene.id}_${id}_narration`;

          newEvent = {
            type: 'narration',
            id,
            lineId,
          };
          translations.fr[lineId] = line.choiceResultsAnimation;
        } else {
          console.log(line.choiceResults, line.choiceResultsCharacters, line.choiceResultsDialog, line.choiceResultsAnimation);
          throw new Error(
            'Tried to create a choice result with neither dialog nor narration'
          );
        }

        const validEvent: Event = newEvent as Event;

        currentScene.events.push(validEvent);

        if (!currentChoice.action.eventId) {
          // If this is the first event in the chain, get it and return
          currentChoice.action = {
            type: 'switch_scene',
            sceneId: currentScene.id,
            eventId: validEvent.id,
          };
          currentMultipleChoiceEventEndEvents.push(currentChoice.action);
        } else {
          // If not, we can process more events. Follow the chain, the edit the last event.
          let lastEvent: Event = validEvent;
          while (lastEvent.action && lastEvent.action.eventId) {
            // Loop in the chain of events until we find one without an action
            const search = findEvent(currentScene, lastEvent.action.eventId);
            if (!search) {
              throw new Error('Could not follow event chain');
            }

            lastEvent = search;
          }

          // Now that we have the last event, remove it from the array of end events and edit it
          currentMultipleChoiceEventEndEvents =
            currentMultipleChoiceEventEndEvents.filter(
              event => event !== lastEvent.action
            );

          lastEvent.action = {
            type: 'switch_scene',
            sceneId: currentScene.id,
            eventId: validEvent.id,
          };
          currentMultipleChoiceEventEndEvents.push(lastEvent.action);
        }
      }
    });

    // We have processed the entire game content, save it.
    if (fs.existsSync(`./__generated__/`)) {
      fs.rmSync(`./__generated__/`, { recursive: true });
    }
    fs.mkdirSync(`./__generated__/`, { recursive: true });

    let gameContentScript = `
import { GameContent } from '../src/game/game';
import {
  FredGallant,
  Gabriel,
  ChefMillerCigar,
  ChefMillerNoCigar,
  AgentLucas,
  AgentMoore,
  LeighKane,
  Enqueteur,
  Brighton,
  Teacher,
  Bonnie,
  ChristopherYoung,
  Vivian,
  Ronny,
  Tom,
  Receptioniste,
  RobertPower,
  OliviaPaul,
  CarlWhite,
  CarlWhiteNoCigarette,
  MereLeighKane,
  PereLeighKane,
  Al,
  Administrateur,
  JeuneFemme,
  Homme,
  HommeAuTelephone,
} from '../src/data/characters';
    
export const generatedContent: GameContent = ${JSON.stringify(
      content,
      null,
      2
    )};
    `;
    Object.entries(characterIdsToObjs).forEach(([name, obj]) => {
      gameContentScript = gameContentScript.replaceAll(
        `"_replace__${name}"`,
        obj
      );
    });

    // Write the gamecontent file
    let file = fs.openSync(`./__generated__/content.ts`, 'w+');
    fs.writeFileSync(file, gameContentScript);

    // Write the translations file
    file = fs.openSync(`./__generated__/translations.ts`, 'w+');
    fs.writeFileSync(
      file,
      `
export const generatedTranslations = ${JSON.stringify(translations, null, 2)};
    `
    );
  });
