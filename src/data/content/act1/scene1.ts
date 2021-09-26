import { Scene } from '../../../game/scene';
import { FredGallant } from '../../characters';

export const scene1: Scene = {
  id: '1_1',
  characters: [FredGallant],
  events: [
    {
      type: 'dialog',
      id: '0',
      lineId: '1_1_1_0_dialog',
      expression: 'neutral',
      character: FredGallant,
    },
    {
      type: 'narration',
      id: '1',
      lineId: '1_1_1_1_narration',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_2',
        },
      ],
    },
  ],
};
