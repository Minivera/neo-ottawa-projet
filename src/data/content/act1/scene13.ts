import { Scene } from '../../../game/scene';
import { FredGallant, JeuneFemme } from '../../characters';

export const scene13: Scene = {
  id: '1_13',
  characters: [FredGallant, JeuneFemme],
  events: [
    {
      type: 'multiple_choice',
      id: '0',
      lineId: '1_1_13_0_narration',
      choices: [
        {
          id: '6-A',
          lineId: '0_6-A',
          action: {
            type: 'switch_scene',
            sceneId: '1_13',
            eventId: '2_6-A',
          },
        },
        {
          id: '6-B',
          lineId: '0_6-B',
          action: {
            type: 'switch_scene',
            sceneId: '1_13',
            eventId: '5_6-B',
          },
        },
        {
          id: '6-C',
          lineId: '0_6-C',
          action: {
            type: 'switch_scene',
            sceneId: '1_13',
            eventId: '6_6-C',
          },
        },
      ],
    },
    {
      type: 'dialog',
      id: '2_6-A',
      lineId: '1_1_13_2_6-A_dialog',
      character: FredGallant,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_13',
          eventId: '3_6-A',
        },
      ],
    },
    {
      type: 'dialog',
      id: '3_6-A',
      lineId: '1_1_13_3_6-A_dialog',
      character: JeuneFemme,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_13',
          eventId: '4_6-A',
        },
      ],
    },
    {
      type: 'narration',
      id: '4_6-A',
      lineId: '1_1_13_4_6-A_narration',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_13',
          eventId: '7_6-A-2 et 6-B-2',
        },
      ],
    },
    {
      type: 'narration',
      id: '5_6-B',
      lineId: '1_1_13_5_6-B_narration',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_13',
          eventId: '7_6-A-2 et 6-B-2',
        },
      ],
    },
    {
      type: 'narration',
      id: '6_6-C',
      lineId: '1_1_13_6_6-C_narration',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_13',
          eventId: '8_6-C-2',
        },
      ],
    },
    {
      type: 'dialog',
      id: '7_6-A-2 et 6-B-2',
      lineId: '1_1_13_7_6-A-2 et 6-B-2_dialog',
      character: JeuneFemme,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_14',
        },
      ],
    },
    {
      type: 'dialog',
      id: '8_6-C-2',
      lineId: '1_1_13_8_6-C-2_dialog',
      character: JeuneFemme,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_14',
        },
      ],
    },
  ],
};
