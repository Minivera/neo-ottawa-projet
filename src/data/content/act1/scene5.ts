import { Scene } from '../../../game/scene';
import { ChefMillerCigar, FredGallant } from '../../characters';

export const scene5: Scene = {
  id: '1_5',
  characters: [ChefMillerCigar, FredGallant],
  events: [
    {
      type: 'dialog',
      id: '0',
      lineId: '1_1_5_0_dialog',
      expression: 'neutral',
      character: ChefMillerCigar,
    },
    {
      type: 'dialog',
      id: '1',
      lineId: '1_1_5_1_dialog',
      expression: 'neutral',
      character: FredGallant,
    },
    {
      type: 'dialog',
      id: '2',
      lineId: '1_1_5_2_dialog',
      expression: 'neutral',
      character: ChefMillerCigar,
    },
    {
      type: 'dialog',
      id: '3',
      lineId: '1_1_5_3_dialog',
      expression: 'neutral',
      character: FredGallant,
    },
    {
      type: 'dialog',
      id: '4',
      lineId: '1_1_5_4_dialog',
      expression: 'neutral',
      character: ChefMillerCigar,
    },
    {
      type: 'dialog',
      id: '5',
      lineId: '1_1_5_5_dialog',
      expression: 'neutral',
      character: FredGallant,
      action: {
        type: 'switch_scene',
        sceneId: '1_6',
      },
    },
  ],
};
