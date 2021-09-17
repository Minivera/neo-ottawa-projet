import { Scene } from '../../../game/scene';
import { ChefMillerCigar, FredGallant } from '../../characters';

export const scene6: Scene = {
  id: '1_6',
  characters: [ChefMillerCigar, FredGallant],
  events: [
    {
      type: 'narration',
      id: '0',
      lineId: '1_1_6_0_narration',
    },
    {
      type: 'multiple_choice',
      id: '1',
      lineId: '1_1_6_1_dialog',
      choices: [
        {
          lineId: '1_2-A',
          action: {
            type: 'switch_scene',
            sceneId: '1_6',
            eventId: '3_2-A',
          },
        },
        {
          lineId: '1_2-B',
          action: {
            type: 'switch_scene',
            sceneId: '1_6',
            eventId: '5_2-B',
          },
        },
        {
          lineId: '1_2-C',
          action: {
            type: 'switch_scene',
            sceneId: '1_6',
            eventId: '6_2-C',
          },
        },
      ],
      expression: 'neutral',
      character: ChefMillerCigar,
    },
    {
      type: 'dialog',
      id: '3_2-A',
      lineId: '1_1_6_3_2-A_dialog',
      character: FredGallant,
      expression: 'neutral',
    },
    {
      type: 'dialog',
      id: '4_2-A',
      lineId: '1_1_6_4_2-A_dialog',
      character: ChefMillerCigar,
      expression: 'neutral',
      action: {
        type: 'switch_scene',
        sceneId: '1_6',
        eventId: '7',
      },
    },
    {
      type: 'dialog',
      id: '5_2-B',
      lineId: '1_1_6_5_2-B_dialog',
      character: ChefMillerCigar,
      expression: 'neutral',
      action: {
        type: 'switch_scene',
        sceneId: '1_6',
        eventId: '7',
      },
    },
    {
      type: 'narration',
      id: '6_2-C',
      lineId: '1_1_6_6_2-C_narration',
      action: {
        type: 'switch_scene',
        sceneId: '1_6',
        eventId: '7',
      },
    },
    {
      type: 'dialog',
      id: '7',
      lineId: '1_1_6_7_dialog',
      expression: 'neutral',
      character: ChefMillerCigar,
      action: {
        type: 'switch_scene',
        sceneId: '1_7',
      },
    },
  ],
};
