import { Scene } from '../../../game/scene';
import { LeighKane, Teacher } from '../../characters';

export const scene11: Scene = {
  id: '1_11',
  characters: [Teacher, LeighKane],
  events: [
    {
      type: 'narration',
      id: '0',
      lineId: '1_1_11_0_narration',
    },
    {
      type: 'narration',
      id: '1',
      lineId: '1_1_11_1_narration',
    },
    {
      type: 'dialog',
      id: '2',
      lineId: '1_1_11_2_dialog',
      expression: 'neutral',
      character: Teacher,
    },
    {
      type: 'narration',
      id: '3',
      lineId: '1_1_11_3_narration',
    },
    {
      type: 'dialog',
      id: '4',
      lineId: '1_1_11_4_dialog',
      expression: 'neutral',
      character: LeighKane,
    },
    {
      type: 'narration',
      id: '5',
      lineId: '1_1_11_5_narration',
    },
    {
      type: 'dialog',
      id: '6',
      lineId: '1_1_11_6_dialog',
      expression: 'neutral',
      character: Teacher,
    },
    {
      type: 'narration',
      id: '7',
      lineId: '1_1_11_7_narration',
    },
    {
      type: 'dialog',
      id: '8',
      lineId: '1_1_11_8_dialog',
      expression: 'neutral',
      character: LeighKane,
    },
    {
      type: 'narration',
      id: '9',
      lineId: '1_1_11_9_narration',
    },
    {
      type: 'dialog',
      id: '10',
      lineId: '1_1_11_10_dialog',
      expression: 'neutral',
      character: Teacher,
    },
    {
      type: 'narration',
      id: '11',
      lineId: '1_1_11_11_narration',
    },
    {
      type: 'dialog',
      id: '12',
      lineId: '1_1_11_12_dialog',
      expression: 'neutral',
      character: LeighKane,
    },
    {
      type: 'narration',
      id: '13',
      lineId: '1_1_11_13_narration',
    },
    {
      type: 'dialog',
      id: '14',
      lineId: '1_1_11_14_dialog',
      expression: 'neutral',
      character: Teacher,
    },
    {
      type: 'dialog',
      id: '15',
      lineId: '1_1_11_15_dialog',
      expression: 'neutral',
      character: LeighKane,
    },
    {
      type: 'dialog',
      id: '16',
      lineId: '1_1_11_16_dialog',
      expression: 'neutral',
      character: Teacher,
    },
    {
      type: 'dialog',
      id: '17',
      lineId: '1_1_11_17_dialog',
      expression: 'neutral',
      character: LeighKane,
    },
    {
      type: 'narration',
      id: '18',
      lineId: '1_1_11_18_narration',
    },
    {
      type: 'narration',
      id: '19',
      lineId: '1_1_11_19_narration',
    },
    {
      type: 'dialog',
      id: '20',
      lineId: '1_1_11_20_dialog',
      expression: 'neutral',
      character: Teacher,
    },
    {
      type: 'dialog',
      id: '21',
      lineId: '1_1_11_21_dialog',
      expression: 'neutral',
      character: LeighKane,
      action: {
        type: 'switch_scene',
        sceneId: '1_12',
      },
    },
  ],
};
