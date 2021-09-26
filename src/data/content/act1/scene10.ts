import { Scene } from '../../../game/scene';
import { Brighton, Enqueteur, FredGallant } from '../../characters';

export const scene10: Scene = {
  id: '1_10',
  characters: [FredGallant, Enqueteur, Brighton],
  events: [
    {
      type: 'multiple_choice',
      id: '0',
      lineId: '1_1_10_0_narration',
      choices: [
        {
          id: '4-A',
          lineId: '0_4-A',
          action: {
            type: 'switch_scene',
            sceneId: '1_10',
            eventId: '2_4-A',
          },
        },
        {
          id: '4-B',
          lineId: '0_4-B',
          action: {
            type: 'switch_scene',
            sceneId: '1_10',
            eventId: '14_4-B',
          },
        },
        {
          id: '4-C',
          lineId: '0_4-C',
          action: {
            type: 'switch_scene',
            sceneId: '1_10',
            eventId: '20_4-C',
          },
        },
      ],
    },
    {
      type: 'dialog',
      id: '2_4-A',
      lineId: '1_1_10_2_4-A_dialog',
      character: FredGallant,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_10',
          eventId: '3_4-A',
        },
      ],
    },
    {
      type: 'dialog',
      id: '3_4-A',
      lineId: '1_1_10_3_4-A_dialog',
      character: Enqueteur,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_10',
          eventId: '4_4-A',
        },
      ],
    },
    {
      type: 'dialog',
      id: '4_4-A',
      lineId: '1_1_10_4_4-A_dialog',
      character: FredGallant,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_10',
          eventId: '5_4-A',
        },
      ],
    },
    {
      type: 'dialog',
      id: '5_4-A',
      lineId: '1_1_10_5_4-A_dialog',
      character: Enqueteur,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_10',
          eventId: '6_4-A',
        },
      ],
    },
    {
      type: 'dialog',
      id: '6_4-A',
      lineId: '1_1_10_6_4-A_dialog',
      character: FredGallant,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_10',
          eventId: '7_4-A',
        },
      ],
    },
    {
      type: 'dialog',
      id: '7_4-A',
      lineId: '1_1_10_7_4-A_dialog',
      character: Enqueteur,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_10',
          eventId: '8_4-A',
        },
      ],
    },
    {
      type: 'narration',
      id: '8_4-A',
      lineId: '1_1_10_8_4-A_narration',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_10',
          eventId: '9_4-A',
        },
      ],
    },
    {
      type: 'dialog',
      id: '9_4-A',
      lineId: '1_1_10_9_4-A_dialog',
      character: Enqueteur,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_10',
          eventId: '10_4-A',
        },
      ],
    },
    {
      type: 'dialog',
      id: '10_4-A',
      lineId: '1_1_10_10_4-A_dialog',
      character: Brighton,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_10',
          eventId: '11_4-A',
        },
      ],
    },
    {
      type: 'dialog',
      id: '11_4-A',
      lineId: '1_1_10_11_4-A_dialog',
      character: Enqueteur,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_10',
          eventId: '12_4-A',
        },
      ],
    },
    {
      type: 'narration',
      id: '12_4-A',
      lineId: '1_1_10_12_4-A_narration',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_10',
          eventId: '13_4-A',
        },
      ],
    },
    {
      type: 'dialog',
      id: '13_4-A',
      lineId: '1_1_10_13_4-A_dialog',
      character: Enqueteur,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_10',
          eventId: '29',
        },
      ],
    },
    {
      type: 'dialog',
      id: '14_4-B',
      lineId: '1_1_10_14_4-B_dialog',
      character: Enqueteur,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_10',
          eventId: '15_4-B',
        },
      ],
    },
    {
      type: 'dialog',
      id: '15_4-B',
      lineId: '1_1_10_15_4-B_dialog',
      character: FredGallant,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_10',
          eventId: '16_4-B',
        },
      ],
    },
    {
      type: 'dialog',
      id: '16_4-B',
      lineId: '1_1_10_16_4-B_dialog',
      character: Enqueteur,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_10',
          eventId: '17_4-B',
        },
      ],
    },
    {
      type: 'dialog',
      id: '17_4-B',
      lineId: '1_1_10_17_4-B_dialog',
      character: Enqueteur,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_10',
          eventId: '18_4-B',
        },
      ],
    },
    {
      type: 'dialog',
      id: '18_4-B',
      lineId: '1_1_10_18_4-B_dialog',
      character: FredGallant,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_10',
          eventId: '19_4-B',
        },
      ],
    },
    {
      type: 'dialog',
      id: '19_4-B',
      lineId: '1_1_10_19_4-B_dialog',
      character: Enqueteur,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_10',
          eventId: '29',
        },
      ],
    },
    {
      type: 'dialog',
      id: '20_4-C',
      lineId: '1_1_10_20_4-C_dialog',
      character: Enqueteur,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_10',
          eventId: '21_4-C',
        },
      ],
    },
    {
      type: 'dialog',
      id: '21_4-C',
      lineId: '1_1_10_21_4-C_dialog',
      character: FredGallant,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_10',
          eventId: '22_4-C',
        },
      ],
    },
    {
      type: 'dialog',
      id: '22_4-C',
      lineId: '1_1_10_22_4-C_dialog',
      character: Enqueteur,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_10',
          eventId: '23_4-C',
        },
      ],
    },
    {
      type: 'dialog',
      id: '23_4-C',
      lineId: '1_1_10_23_4-C_dialog',
      character: FredGallant,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_10',
          eventId: '24_4-C',
        },
      ],
    },
    {
      type: 'dialog',
      id: '24_4-C',
      lineId: '1_1_10_24_4-C_dialog',
      character: Enqueteur,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_10',
          eventId: '25_4-C',
        },
      ],
    },
    {
      type: 'dialog',
      id: '25_4-C',
      lineId: '1_1_10_25_4-C_dialog',
      character: Brighton,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_10',
          eventId: '26_4-C',
        },
      ],
    },
    {
      type: 'dialog',
      id: '26_4-C',
      lineId: '1_1_10_26_4-C_dialog',
      character: Enqueteur,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_10',
          eventId: '27_4-C',
        },
      ],
    },
    {
      type: 'narration',
      id: '27_4-C',
      lineId: '1_1_10_27_4-C_narration',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_10',
          eventId: '28_4-C',
        },
      ],
    },
    {
      type: 'dialog',
      id: '28_4-C',
      lineId: '1_1_10_28_4-C_dialog',
      character: Enqueteur,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_10',
          eventId: '29',
        },
      ],
    },
    {
      type: 'narration',
      id: '29',
      lineId: '1_1_10_29_narration',
    },
    {
      type: 'dialog',
      id: '30',
      lineId: '1_1_10_30_dialog',
      expression: 'neutral',
      character: Enqueteur,
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_11',
        },
      ],
    },
  ],
};