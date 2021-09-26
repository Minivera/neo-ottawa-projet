import { GameContent } from '../../game/game';
import { Character } from '../../game/character';
import { CharacterAnimation } from '../../game/event';

import gabrielNeutral from '../../assets/characters/02 - Gabriel/neutral.svg?w=350';
import gabrielJoy from '../../assets/characters/02 - Gabriel/joy.svg?w=350';
import background from '../../assets/backgrounds/parlement.jpg?w=1920&h=1024';
import audioblockMenace from '../../assets/music/audioblocks-menace.mp3';
import bigExhale from '../../assets/sound/big-exhale.mp3';

const testCharacter: Character = {
  id: '1',
  name: 'test_name_1',
  images: {
    neutral: gabrielNeutral,
    joy: gabrielJoy,
  },
};

const testCharacter2: Character = {
  id: '2',
  name: 'test_name_2',
  images: {
    neutral: gabrielNeutral,
    joy: gabrielJoy,
  },
};

export const gameContent: GameContent = {
  characters: [testCharacter, testCharacter2],
  acts: [
    {
      id: '1',
      scenes: [
        {
          id: '1',
          characters: [],
          events: [
            {
              type: 'transition',
              id: 't1',
              fullscreen: true,
              hideEverything: true,
              soundEffect: bigExhale,
              actions: [
                {
                  type: 'switch_scene',
                  sceneId: '1_2',
                },
              ],
            },
          ],
        },
        {
          id: '2',
          background: background,
          bgm: audioblockMenace,
          characters: [testCharacter, testCharacter2],
          events: [
            {
              type: 'narration',
              id: 'nf1',
              lineId: 'test_fullscreen_narration_1',
              fullscreen: true,
            },
            {
              type: 'narration',
              id: 'n1',
              lineId: 'test_narration_1',
            },
            {
              type: 'dialog',
              id: 'd1',
              expression: 'joy',
              character: testCharacter,
              animation: CharacterAnimation.MOVE_UP,
              lineId: 'test_1',
            },
            {
              type: 'dialog',
              id: 'd2',
              expression: 'neutral',
              character: testCharacter2,
              animation: CharacterAnimation.FADE_IN,
              lineId: 'test_2',
            },
            {
              type: 'dialog',
              id: 'd3',
              expression: 'neutral',
              character: testCharacter,
              lineId: 'test_3',
            },
            {
              type: 'narration',
              id: 'nca1',
              lineId: 'test_narration_clear_all',
              shouldHideAll: true,
            },
            {
              type: 'multiple_choice',
              id: 'mc1',
              character: testCharacter,
              expression: 'joy',
              lineId: 'test_multiple_choice_1',
              choices: [
                {
                  id: '1',
                  lineId: 'test_multiple_choice_1_option_1',
                  action: {
                    type: 'switch_scene',
                    sceneId: '1_3',
                  },
                },
                {
                  id: '2',
                  lineId: 'test_multiple_choice_1_option_2',
                  action: {
                    type: 'switch_scene',
                    sceneId: '1_4',
                  },
                },
                {
                  id: '3',
                  lineId: 'test_multiple_choice_1_option_3',
                  action: {
                    type: 'switch_scene',
                    sceneId: '1_5',
                  },
                },
              ],
            },
          ],
        },
        {
          id: '3',
          characters: [],
          events: [
            {
              type: 'narration',
              id: 'n2',
              lineId: 'test_narration_2',
            },
          ],
        },
        {
          id: '4',
          characters: [],
          events: [
            {
              type: 'narration',
              id: 'n3',
              lineId: 'test_narration_3',
            },
          ],
        },
        {
          id: '5',
          characters: [],
          events: [
            {
              type: 'narration',
              id: 'n4',
              lineId: 'test_narration_4',
            },
          ],
        },
      ],
    },
  ],
};
