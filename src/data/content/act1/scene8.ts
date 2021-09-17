import { Scene } from '../../../game/scene';
import { ChefMillerCigar } from '../../characters';

export const scene8: Scene = {
  id: '1_8',
  characters: [ChefMillerCigar],
  events: [
    {
      type: 'dialog',
      id: '0',
      lineId: '1_1_8_0_dialog',
      expression: 'neutral',
      character: ChefMillerCigar,
      action: {
        type: 'switch_scene',
        sceneId: '1_9',
      },
    },
  ],
};
