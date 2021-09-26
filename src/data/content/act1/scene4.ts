import { Scene } from '../../../game/scene';
import { ChefMillerCigar } from '../../characters';

export const scene4: Scene = {
  id: '1_4',
  characters: [ChefMillerCigar],
  preloadedCharacters: [ChefMillerCigar],
  events: [
    {
      type: 'narration',
      id: '0',
      lineId: '1_1_4_0_narration',
    },
    {
      type: 'narration',
      id: '1',
      lineId: '1_1_4_1_narration',
    },
    {
      type: 'multiple_choice',
      id: '2',
      lineId: '1_1_4_2_narration',
      choices: [
        {
          id: '1-A',
          lineId: '2_1-A',
          action: {
            type: 'switch_scene',
            sceneId: '1_4',
            eventId: '4_1-A',
          },
        },
        {
          id: '1-B',
          lineId: '2_1-B',
          action: {
            type: 'switch_scene',
            sceneId: '1_4',
            eventId: '5_1-B',
          },
        },
        {
          id: '1-C',
          lineId: '2_1-C',
          action: {
            type: 'switch_scene',
            sceneId: '1_4',
            eventId: '6_1-C',
          },
        },
      ],
    },
    {
      type: 'dialog',
      id: '4_1-A',
      lineId: '1_1_4_4_1-A_dialog',
      character: ChefMillerCigar,
      expression: 'neutral',
    },
    {
      type: 'dialog',
      id: '5_1-B',
      lineId: '1_1_4_5_1-B_dialog',
      character: ChefMillerCigar,
      expression: 'neutral',
    },
    {
      type: 'dialog',
      id: '6_1-C',
      lineId: '1_1_4_6_1-C_dialog',
      character: ChefMillerCigar,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_5',
        },
      ],
    },
  ],
};
