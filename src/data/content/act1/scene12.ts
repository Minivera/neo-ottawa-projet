import { Scene } from '../../../game/scene';
import { FredGallant, Homme } from '../../characters';

export const scene12: Scene = {
  id: '1_12',
  characters: [Homme, FredGallant],
  events: [
    {
      type: 'multiple_choice',
      id: '0',
      lineId: '1_1_12_0_narration',
      choices: [
        {
          lineId: '0_5-A',
          action: {
            type: 'switch_scene',
            sceneId: '1_12',
            eventId: '2_5-A',
          },
        },
        {
          lineId: '0_5-B',
          action: {
            type: 'switch_scene',
            sceneId: '1_12',
            eventId: '11_5-B',
          },
        },
        {
          lineId: '0_5-C',
          action: {
            type: 'switch_scene',
            sceneId: '1_12',
            eventId: '13_5-C',
          },
        },
      ],
    },
    {
      type: 'narration',
      id: '2_5-A',
      lineId: '1_1_12_2_5-A_narration',
      action: {
        type: 'switch_scene',
        sceneId: '1_12',
        eventId: '3_5-A',
      },
    },
    {
      type: 'narration',
      id: '3_5-A',
      lineId: '1_1_12_3_5-A_narration',
      action: {
        type: 'switch_scene',
        sceneId: '1_12',
        eventId: '4_5-A',
      },
    },
    {
      type: 'narration',
      id: '4_5-A',
      lineId: '1_1_12_4_5-A_narration',
      action: {
        type: 'switch_scene',
        sceneId: '1_12',
        eventId: '5_5-A',
      },
    },
    {
      type: 'dialog',
      id: '5_5-A',
      lineId: '1_1_12_5_5-A_dialog',
      character: Homme,
      expression: 'neutral',
      action: {
        type: 'switch_scene',
        sceneId: '1_12',
        eventId: '6_5-A',
      },
    },
    {
      type: 'dialog',
      id: '6_5-A',
      lineId: '1_1_12_6_5-A_dialog',
      character: FredGallant,
      expression: 'neutral',
      action: {
        type: 'switch_scene',
        sceneId: '1_12',
        eventId: '7_5-A',
      },
    },
    {
      type: 'dialog',
      id: '7_5-A',
      lineId: '1_1_12_7_5-A_dialog',
      character: Homme,
      expression: 'neutral',
      action: {
        type: 'switch_scene',
        sceneId: '1_12',
        eventId: '8_5-A',
      },
    },
    {
      type: 'narration',
      id: '8_5-A',
      lineId: '1_1_12_8_5-A_narration',
      action: {
        type: 'switch_scene',
        sceneId: '1_12',
        eventId: '9_5-A',
      },
    },
    {
      type: 'dialog',
      id: '9_5-A',
      lineId: '1_1_12_9_5-A_dialog',
      character: Homme,
      expression: 'neutral',
      action: {
        type: 'switch_scene',
        sceneId: '1_12',
        eventId: '10_5-A',
      },
    },
    {
      type: 'narration',
      id: '10_5-A',
      lineId: '1_1_12_10_5-A_narration',
      action: {
        type: 'switch_scene',
        sceneId: '1_12',
        eventId: '15',
      },
    },
    {
      type: 'narration',
      id: '11_5-B',
      lineId: '1_1_12_11_5-B_narration',
      action: {
        type: 'switch_scene',
        sceneId: '1_12',
        eventId: '12_5-B',
      },
    },
    {
      type: 'narration',
      id: '12_5-B',
      lineId: '1_1_12_12_5-B_narration',
      action: {
        type: 'switch_scene',
        sceneId: '1_12',
        eventId: '15',
      },
    },
    {
      type: 'narration',
      id: '13_5-C',
      lineId: '1_1_12_13_5-C_narration',
      action: {
        type: 'switch_scene',
        sceneId: '1_12',
        eventId: '14_5-C',
      },
    },
    {
      type: 'narration',
      id: '14_5-C',
      lineId: '1_1_12_14_5-C_narration',
      action: {
        type: 'switch_scene',
        sceneId: '1_12',
        eventId: '15',
      },
    },
    {
      type: 'narration',
      id: '15',
      lineId: '1_1_12_15_narration',
    },
    {
      type: 'narration',
      id: '16',
      lineId: '1_1_12_16_narration',
    },
    {
      type: 'narration',
      id: '17',
      lineId: '1_1_12_17_narration',
    },
    {
      type: 'narration',
      id: '18',
      lineId: '1_1_12_18_narration',
      action: {
        type: 'switch_scene',
        sceneId: '1_13',
      },
    },
  ],
};
