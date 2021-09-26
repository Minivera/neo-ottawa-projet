import { Scene } from '../../../game/scene';
import {
  ChefMillerCigar,
  FredGallant,
  HommeAuTelephone,
} from '../../characters';

export const scene15: Scene = {
  id: '1_15',
  characters: [ChefMillerCigar, FredGallant, HommeAuTelephone],
  events: [
    {
      type: 'narration',
      id: '0',
      lineId: '1_1_15_0_narration',
    },
    {
      type: 'narration',
      id: '1',
      fullscreen: true,
      shouldHideAll: true,
      lineId: '1_1_15_1_narration',
    },
    {
      type: 'dialog',
      id: '2',
      lineId: '1_1_15_2_dialog',
      expression: 'neutral',
      character: ChefMillerCigar,
    },
    {
      type: 'dialog',
      id: '3',
      lineId: '1_1_15_3_dialog',
      expression: 'neutral',
      character: FredGallant,
    },
    {
      type: 'multiple_choice',
      id: '4',
      lineId: '1_1_15_4_dialog',
      choices: [
        {
          id: 'A-1',
          lineId: '4_A-1',
          action: {
            type: 'switch_scene',
            sceneId: '1_15',
            eventId: '6_A-1',
          },
        },
        {
          id: 'B-1',
          lineId: '4_B-1',
          action: {
            type: 'switch_scene',
            sceneId: '1_15',
            eventId: '26_B-1',
          },
        },
      ],
      expression: 'neutral',
      character: ChefMillerCigar,
    },
    {
      type: 'dialog',
      id: '6_A-1',
      lineId: '1_1_15_6_A-1_dialog',
      character: FredGallant,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_15',
          eventId: '7_A-1',
        },
      ],
    },
    {
      type: 'dialog',
      id: '7_A-1',
      lineId: '1_1_15_7_A-1_dialog',
      character: ChefMillerCigar,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_15',
          eventId: '8_A-1',
        },
      ],
    },
    {
      type: 'dialog',
      id: '8_A-1',
      lineId: '1_1_15_8_A-1_dialog',
      character: FredGallant,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_15',
          eventId: '9_A-1',
        },
      ],
    },
    {
      type: 'dialog',
      id: '9_A-1',
      lineId: '1_1_15_9_A-1_dialog',
      character: ChefMillerCigar,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_15',
          eventId: '10_A-1',
        },
      ],
    },
    {
      type: 'dialog',
      id: '10_A-1',
      lineId: '1_1_15_10_A-1_dialog',
      character: FredGallant,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_15',
          eventId: '11_A-1',
        },
      ],
    },
    {
      type: 'dialog',
      id: '11_A-1',
      lineId: '1_1_15_11_A-1_dialog',
      character: ChefMillerCigar,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_15',
          eventId: '12_A-1',
        },
      ],
    },
    {
      type: 'dialog',
      id: '12_A-1',
      lineId: '1_1_15_12_A-1_dialog',
      character: FredGallant,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_15',
          eventId: '13_A-1',
        },
      ],
    },
    {
      type: 'dialog',
      id: '13_A-1',
      lineId: '1_1_15_13_A-1_dialog',
      character: ChefMillerCigar,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_15',
          eventId: '14_A-1',
        },
      ],
    },
    {
      type: 'narration',
      id: '14_A-1',
      lineId: '1_1_15_14_A-1_narration',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_15',
          eventId: '15_A-1',
        },
      ],
    },
    {
      type: 'narration',
      id: '15_A-1',
      lineId: '1_1_15_15_A-1_narration',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_15',
          eventId: '16_A-1',
        },
      ],
    },
    {
      type: 'dialog',
      id: '16_A-1',
      lineId: '1_1_15_16_A-1_dialog',
      character: HommeAuTelephone,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_15',
          eventId: '17_A-1',
        },
      ],
    },
    {
      type: 'dialog',
      id: '17_A-1',
      lineId: '1_1_15_17_A-1_dialog',
      character: FredGallant,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_15',
          eventId: '18_A-1',
        },
      ],
    },
    {
      type: 'dialog',
      id: '18_A-1',
      lineId: '1_1_15_18_A-1_dialog',
      character: HommeAuTelephone,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_15',
          eventId: '19_A-1',
        },
      ],
    },
    {
      type: 'dialog',
      id: '19_A-1',
      lineId: '1_1_15_19_A-1_dialog',
      character: FredGallant,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_15',
          eventId: '20_A-1',
        },
      ],
    },
    {
      type: 'dialog',
      id: '20_A-1',
      lineId: '1_1_15_20_A-1_dialog',
      character: HommeAuTelephone,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_15',
          eventId: '21_A-1',
        },
      ],
    },
    {
      type: 'dialog',
      id: '21_A-1',
      lineId: '1_1_15_21_A-1_dialog',
      character: FredGallant,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_15',
          eventId: '22_A-1',
        },
      ],
    },
    {
      type: 'dialog',
      id: '22_A-1',
      lineId: '1_1_15_22_A-1_dialog',
      character: HommeAuTelephone,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_15',
          eventId: '23_A-1',
        },
      ],
    },
    {
      type: 'dialog',
      id: '23_A-1',
      lineId: '1_1_15_23_A-1_dialog',
      character: FredGallant,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_15',
          eventId: '24_A-1',
        },
      ],
    },
    {
      type: 'dialog',
      id: '24_A-1',
      lineId: '1_1_15_24_A-1_dialog',
      character: HommeAuTelephone,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_15',
          eventId: '25_A-1',
        },
      ],
    },
    {
      type: 'dialog',
      id: '25_A-1',
      lineId: '1_1_15_25_A-1_dialog',
      character: FredGallant,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_16',
        },
      ],
    },
    {
      type: 'dialog',
      id: '26_B-1',
      lineId: '1_1_15_26_B-1_dialog',
      character: FredGallant,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_15',
          eventId: '27_B-1',
        },
      ],
    },
    {
      type: 'dialog',
      id: '27_B-1',
      lineId: '1_1_15_27_B-1_dialog',
      character: ChefMillerCigar,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_15',
          eventId: '28_B-1',
        },
      ],
    },
    {
      type: 'dialog',
      id: '28_B-1',
      lineId: '1_1_15_28_B-1_dialog',
      character: FredGallant,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_15',
          eventId: '29_B-1',
        },
      ],
    },
    {
      type: 'dialog',
      id: '29_B-1',
      lineId: '1_1_15_29_B-1_dialog',
      character: ChefMillerCigar,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_15',
          eventId: '30_B-1',
        },
      ],
    },
    {
      type: 'dialog',
      id: '30_B-1',
      lineId: '1_1_15_30_B-1_dialog',
      character: FredGallant,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_15',
          eventId: '31_B-1',
        },
      ],
    },
    {
      type: 'dialog',
      id: '31_B-1',
      lineId: '1_1_15_31_B-1_dialog',
      character: ChefMillerCigar,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_15',
          eventId: '32_B-1',
        },
      ],
    },
    {
      type: 'dialog',
      id: '32_B-1',
      lineId: '1_1_15_32_B-1_dialog',
      character: FredGallant,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_15',
          eventId: '33_B-1',
        },
      ],
    },
    {
      type: 'dialog',
      id: '33_B-1',
      lineId: '1_1_15_33_B-1_dialog',
      character: ChefMillerCigar,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_15',
          eventId: '34_B-1',
        },
      ],
    },
    {
      type: 'dialog',
      id: '34_B-1',
      lineId: '1_1_15_34_B-1_dialog',
      character: FredGallant,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_15',
          eventId: '35_B-1',
        },
      ],
    },
    {
      type: 'dialog',
      id: '35_B-1',
      lineId: '1_1_15_35_B-1_dialog',
      character: ChefMillerCigar,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_15',
          eventId: '36_B-1',
        },
      ],
    },
    {
      type: 'dialog',
      id: '36_B-1',
      lineId: '1_1_15_36_B-1_dialog',
      character: HommeAuTelephone,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_15',
          eventId: '37_B-1',
        },
      ],
    },
    {
      type: 'dialog',
      id: '37_B-1',
      lineId: '1_1_15_37_B-1_dialog',
      character: FredGallant,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_15',
          eventId: '38_B-1',
        },
      ],
    },
    {
      type: 'dialog',
      id: '38_B-1',
      lineId: '1_1_15_38_B-1_dialog',
      character: HommeAuTelephone,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_15',
          eventId: '39_B-1',
        },
      ],
    },
    {
      type: 'dialog',
      id: '39_B-1',
      lineId: '1_1_15_39_B-1_dialog',
      character: FredGallant,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_15',
          eventId: '40_B-1',
        },
      ],
    },
    {
      type: 'dialog',
      id: '40_B-1',
      lineId: '1_1_15_40_B-1_dialog',
      character: HommeAuTelephone,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_15',
          eventId: '41_B-1',
        },
      ],
    },
    {
      type: 'dialog',
      id: '41_B-1',
      lineId: '1_1_15_41_B-1_dialog',
      character: FredGallant,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_15',
          eventId: '42_B-1',
        },
      ],
    },
    {
      type: 'dialog',
      id: '42_B-1',
      lineId: '1_1_15_42_B-1_dialog',
      character: HommeAuTelephone,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_15',
          eventId: '43_B-1',
        },
      ],
    },
    {
      type: 'dialog',
      id: '43_B-1',
      lineId: '1_1_15_43_B-1_dialog',
      character: FredGallant,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_15',
          eventId: '44_B-1',
        },
      ],
    },
    {
      type: 'dialog',
      id: '44_B-1',
      lineId: '1_1_15_44_B-1_dialog',
      character: HommeAuTelephone,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_15',
          eventId: '45_B-1',
        },
      ],
    },
    {
      type: 'dialog',
      id: '45_B-1',
      lineId: '1_1_15_45_B-1_dialog',
      character: FredGallant,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_16',
        },
      ],
    },
  ],
};