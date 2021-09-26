import { Scene } from '../../../game/scene';
import { FredGallant, Gabriel } from '../../characters';

export const scene2: Scene = {
  id: '1_2',
  characters: [Gabriel, FredGallant],
  events: [
    {
      type: 'dialog',
      id: '0',
      lineId: '1_1_2_0_dialog',
      expression: 'neutral',
      character: Gabriel,
    },
    {
      type: 'dialog',
      id: '1',
      lineId: '1_1_2_1_dialog',
      expression: 'neutral',
      character: FredGallant,
    },
    {
      type: 'dialog',
      id: '2',
      lineId: '1_1_2_2_dialog',
      expression: 'neutral',
      character: Gabriel,
    },
    {
      type: 'dialog',
      id: '3',
      lineId: '1_1_2_3_dialog',
      expression: 'neutral',
      character: Gabriel,
    },
    {
      type: 'dialog',
      id: '4',
      lineId: '1_1_2_4_dialog',
      expression: 'neutral',
      character: FredGallant,
    },
    {
      type: 'dialog',
      id: '5',
      lineId: '1_1_2_5_dialog',
      expression: 'neutral',
      character: Gabriel,
    },
    {
      type: 'narration',
      id: '6',
      lineId: '1_1_2_6_narration',
    },
    {
      type: 'narration',
      id: '7',
      lineId: '1_1_2_7_narration',
    },
    {
      type: 'narration',
      id: '8',
      lineId: '1_1_2_8_narration',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_3',
        },
      ],
    },
  ],
};
