import { Scene } from '../../../game/scene';
import { FredGallant } from '../../characters';

export const scene9: Scene = {
  id: '1_9',
  characters: [FredGallant],
  events: [
    {
      type: 'dialog',
      id: '0',
      lineId: '1_1_9_0_dialog',
      expression: 'neutral',
      character: FredGallant,
    },
    {
      type: 'narration',
      id: '1',
      lineId: '1_1_9_1_narration',
    },
    {
      type: 'narration',
      id: '2',
      fullscreen: true,
      shouldHideAll: true,
      lineId: '1_1_9_2_narration',
    },
    {
      type: 'narration',
      id: '3',
      lineId: '1_1_9_3_narration',
    },
    {
      type: 'dialog',
      id: '4',
      lineId: '1_1_9_4_dialog',
      expression: 'neutral',
      character: FredGallant,
    },
    {
      type: 'narration',
      id: '5',
      lineId: '1_1_9_5_narration',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_10',
        },
      ],
    },
  ],
};
