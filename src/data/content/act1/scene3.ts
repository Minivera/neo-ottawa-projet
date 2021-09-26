import { Scene } from '../../../game/scene';
import { ChefMillerCigar, FredGallant } from '../../characters';

export const scene3: Scene = {
  id: '1_3',
  characters: [ChefMillerCigar, FredGallant],
  events: [
    {
      type: 'dialog',
      id: '0',
      lineId: '1_1_3_0_dialog',
      expression: 'neutral',
      character: ChefMillerCigar,
    },
    {
      type: 'dialog',
      id: '1',
      lineId: '1_1_3_1_dialog',
      expression: 'neutral',
      character: FredGallant,
    },
    {
      type: 'dialog',
      id: '2',
      lineId: '1_1_3_2_dialog',
      expression: 'neutral',
      character: ChefMillerCigar,
    },
    {
      type: 'dialog',
      id: '3',
      lineId: '1_1_3_3_dialog',
      expression: 'neutral',
      character: FredGallant,
    },
    {
      type: 'dialog',
      id: '4',
      lineId: '1_1_3_4_dialog',
      expression: 'neutral',
      character: ChefMillerCigar,
    },
    {
      type: 'dialog',
      id: '5',
      lineId: '1_1_3_5_dialog',
      expression: 'neutral',
      character: FredGallant,
    },
    {
      type: 'narration',
      id: '6',
      lineId: '1_1_3_6_narration',
    },
    {
      type: 'dialog',
      id: '7',
      lineId: '1_1_3_7_dialog',
      expression: 'neutral',
      character: ChefMillerCigar,
    },
    {
      type: 'dialog',
      id: '8',
      lineId: '1_1_3_8_dialog',
      expression: 'neutral',
      character: FredGallant,
    },
    {
      type: 'dialog',
      id: '9',
      lineId: '1_1_3_9_dialog',
      expression: 'neutral',
      character: ChefMillerCigar,
    },
    {
      type: 'dialog',
      id: '10',
      lineId: '1_1_3_10_dialog',
      expression: 'neutral',
      character: FredGallant,
    },
    {
      type: 'dialog',
      id: '11',
      lineId: '1_1_3_11_dialog',
      expression: 'neutral',
      character: ChefMillerCigar,
    },
    {
      type: 'dialog',
      id: '12',
      lineId: '1_1_3_12_dialog',
      expression: 'neutral',
      character: FredGallant,
    },
    {
      type: 'dialog',
      id: '13',
      lineId: '1_1_3_13_dialog',
      expression: 'neutral',
      character: ChefMillerCigar,
    },
    {
      type: 'dialog',
      id: '14',
      lineId: '1_1_3_14_dialog',
      expression: 'neutral',
      character: FredGallant,
    },
    {
      type: 'dialog',
      id: '15',
      lineId: '1_1_3_15_dialog',
      expression: 'neutral',
      character: ChefMillerCigar,
    },
    {
      type: 'dialog',
      id: '16',
      lineId: '1_1_3_16_dialog',
      expression: 'neutral',
      character: FredGallant,
    },
    {
      type: 'dialog',
      id: '17',
      lineId: '1_1_3_17_dialog',
      expression: 'neutral',
      character: ChefMillerCigar,
    },
    {
      type: 'dialog',
      id: '18',
      lineId: '1_1_3_18_dialog',
      expression: 'neutral',
      character: FredGallant,
    },
    {
      type: 'narration',
      id: '19',
      lineId: '1_1_3_19_narration',
    },
    {
      type: 'narration',
      id: '20',
      lineId: '1_1_3_20_narration',
    },
    {
      type: 'narration',
      id: '21',
      lineId: '1_1_3_21_narration',
    },
    {
      type: 'dialog',
      id: '22',
      lineId: '1_1_3_22_dialog',
      expression: 'neutral',
      character: FredGallant,
    },
    {
      type: 'dialog',
      id: '23',
      lineId: '1_1_3_23_dialog',
      expression: 'neutral',
      character: ChefMillerCigar,
    },
    {
      type: 'dialog',
      id: '24',
      lineId: '1_1_3_24_dialog',
      expression: 'neutral',
      character: FredGallant,
    },
    {
      type: 'dialog',
      id: '25',
      lineId: '1_1_3_25_dialog',
      expression: 'neutral',
      character: ChefMillerCigar,
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_4',
        },
      ],
    },
  ],
};