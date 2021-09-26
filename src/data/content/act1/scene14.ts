import { Scene } from '../../../game/scene';
import { Bonnie, FredGallant } from '../../characters';

export const scene14: Scene = {
  id: '1_14',
  characters: [Bonnie, FredGallant],
  events: [
    {
      type: 'narration',
      id: '0',
      lineId: '1_1_14_0_narration',
    },
    {
      type: 'dialog',
      id: '1',
      lineId: '1_1_14_1_dialog',
      expression: 'neutral',
      character: Bonnie,
    },
    {
      type: 'dialog',
      id: '2',
      lineId: '1_1_14_2_dialog',
      expression: 'neutral',
      character: FredGallant,
    },
    {
      type: 'dialog',
      id: '3',
      lineId: '1_1_14_3_dialog',
      expression: 'neutral',
      character: Bonnie,
    },
    {
      type: 'dialog',
      id: '4',
      lineId: '1_1_14_4_dialog',
      expression: 'neutral',
      character: FredGallant,
    },
    {
      type: 'dialog',
      id: '5',
      lineId: '1_1_14_5_dialog',
      expression: 'neutral',
      character: Bonnie,
    },
    {
      type: 'narration',
      id: '6',
      lineId: '1_1_14_6_narration',
    },
    {
      type: 'dialog',
      id: '7',
      lineId: '1_1_14_7_dialog',
      expression: 'neutral',
      character: Bonnie,
    },
    {
      type: 'dialog',
      id: '8',
      lineId: '1_1_14_8_dialog',
      expression: 'neutral',
      character: FredGallant,
    },
    {
      type: 'dialog',
      id: '9',
      lineId: '1_1_14_9_dialog',
      expression: 'neutral',
      character: Bonnie,
    },
    {
      type: 'dialog',
      id: '10',
      lineId: '1_1_14_10_dialog',
      expression: 'neutral',
      character: FredGallant,
    },
    {
      type: 'dialog',
      id: '11',
      lineId: '1_1_14_11_dialog',
      expression: 'neutral',
      character: Bonnie,
    },
    {
      type: 'narration',
      id: '12',
      lineId: '1_1_14_12_narration',
    },
    {
      type: 'dialog',
      id: '13',
      lineId: '1_1_14_13_dialog',
      expression: 'neutral',
      character: FredGallant,
    },
    {
      type: 'dialog',
      id: '14',
      lineId: '1_1_14_14_dialog',
      expression: 'neutral',
      character: Bonnie,
    },
    {
      type: 'dialog',
      id: '15',
      lineId: '1_1_14_15_dialog',
      expression: 'neutral',
      character: FredGallant,
    },
    {
      type: 'dialog',
      id: '16',
      lineId: '1_1_14_16_dialog',
      expression: 'neutral',
      character: Bonnie,
    },
    {
      type: 'dialog',
      id: '17',
      lineId: '1_1_14_17_dialog',
      expression: 'neutral',
      character: FredGallant,
    },
    {
      type: 'dialog',
      id: '18',
      lineId: '1_1_14_18_dialog',
      expression: 'neutral',
      character: Bonnie,
    },
    {
      type: 'dialog',
      id: '19',
      lineId: '1_1_14_19_dialog',
      expression: 'neutral',
      character: FredGallant,
    },
    {
      type: 'multiple_choice',
      id: '20',
      lineId: '1_1_14_20_dialog',
      choices: [
        {
          id: '7-A',
          lineId: '20_7-A',
          action: {
            type: 'switch_scene',
            sceneId: '1_14',
            eventId: '22_7-A',
          },
        },
        {
          id: '7-B',
          lineId: '20_7-B',
          action: {
            type: 'switch_scene',
            sceneId: '1_14',
            eventId: '29_7-B',
          },
        },
        {
          id: '7-C',
          lineId: '20_7-C',
          action: {
            type: 'switch_scene',
            sceneId: '1_14',
            eventId: '38_7-C',
          },
        },
      ],
      expression: 'neutral',
      character: Bonnie,
    },
    {
      type: 'dialog',
      id: '22_7-A',
      lineId: '1_1_14_22_7-A_dialog',
      character: FredGallant,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_14',
          eventId: '23_7-A',
        },
      ],
    },
    {
      type: 'dialog',
      id: '23_7-A',
      lineId: '1_1_14_23_7-A_dialog',
      character: Bonnie,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_14',
          eventId: '24_7-A',
        },
      ],
    },
    {
      type: 'dialog',
      id: '24_7-A',
      lineId: '1_1_14_24_7-A_dialog',
      character: FredGallant,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_14',
          eventId: '25_7-A',
        },
      ],
    },
    {
      type: 'dialog',
      id: '25_7-A',
      lineId: '1_1_14_25_7-A_dialog',
      character: Bonnie,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_14',
          eventId: '26_7-A',
        },
      ],
    },
    {
      type: 'dialog',
      id: '26_7-A',
      lineId: '1_1_14_26_7-A_dialog',
      character: FredGallant,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_14',
          eventId: '27_7-A',
        },
      ],
    },
    {
      type: 'dialog',
      id: '27_7-A',
      lineId: '1_1_14_27_7-A_dialog',
      character: Bonnie,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_14',
          eventId: '28_7-A',
        },
      ],
    },
    {
      type: 'dialog',
      id: '28_7-A',
      lineId: '1_1_14_28_7-A_dialog',
      character: FredGallant,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_14',
          eventId: '4',
        },
      ],
    },
    {
      type: 'dialog',
      id: '29_7-B',
      lineId: '1_1_14_29_7-B_dialog',
      character: FredGallant,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_14',
          eventId: '30_7-B',
        },
      ],
    },
    {
      type: 'dialog',
      id: '30_7-B',
      lineId: '1_1_14_30_7-B_dialog',
      character: Bonnie,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_14',
          eventId: '31_7-B',
        },
      ],
    },
    {
      type: 'dialog',
      id: '31_7-B',
      lineId: '1_1_14_31_7-B_dialog',
      character: FredGallant,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_14',
          eventId: '32_7-B',
        },
      ],
    },
    {
      type: 'dialog',
      id: '32_7-B',
      lineId: '1_1_14_32_7-B_dialog',
      character: Bonnie,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_14',
          eventId: '33_7-B',
        },
      ],
    },
    {
      type: 'dialog',
      id: '33_7-B',
      lineId: '1_1_14_33_7-B_dialog',
      character: FredGallant,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_14',
          eventId: '34_7-B',
        },
      ],
    },
    {
      type: 'dialog',
      id: '34_7-B',
      lineId: '1_1_14_34_7-B_dialog',
      character: Bonnie,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_14',
          eventId: '35_7-B',
        },
      ],
    },
    {
      type: 'dialog',
      id: '35_7-B',
      lineId: '1_1_14_35_7-B_dialog',
      character: FredGallant,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_14',
          eventId: '36_7-B',
        },
      ],
    },
    {
      type: 'dialog',
      id: '36_7-B',
      lineId: '1_1_14_36_7-B_dialog',
      character: Bonnie,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_14',
          eventId: '37_7-B',
        },
      ],
    },
    {
      type: 'dialog',
      id: '37_7-B',
      lineId: '1_1_14_37_7-B_dialog',
      character: FredGallant,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_14',
          eventId: '41',
        },
      ],
    },
    {
      type: 'dialog',
      id: '38_7-C',
      lineId: '1_1_14_38_7-C_dialog',
      character: FredGallant,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_14',
          eventId: '39_7-C',
        },
      ],
    },
    {
      type: 'dialog',
      id: '39_7-C',
      lineId: '1_1_14_39_7-C_dialog',
      character: Bonnie,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_14',
          eventId: '40_7-C',
        },
      ],
    },
    {
      type: 'dialog',
      id: '40_7-C',
      lineId: '1_1_14_40_7-C_dialog',
      character: FredGallant,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_14',
          eventId: '41',
        },
      ],
    },
    {
      type: 'narration',
      id: '41',
      lineId: '1_1_14_41_narration',
    },
    {
      type: 'dialog',
      id: '42',
      lineId: '1_1_14_42_dialog',
      expression: 'neutral',
      character: Bonnie,
    },
    {
      type: 'dialog',
      id: '43',
      lineId: '1_1_14_43_dialog',
      expression: 'neutral',
      character: FredGallant,
    },
    {
      type: 'dialog',
      id: '44',
      lineId: '1_1_14_44_dialog',
      expression: 'neutral',
      character: Bonnie,
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_15',
        },
      ],
    },
  ],
};
