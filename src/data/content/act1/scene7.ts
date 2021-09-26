import { Scene } from '../../../game/scene';
import {
  AgentLucas,
  AgentMoore,
  ChefMillerCigar,
  FredGallant,
} from '../../characters';

export const scene7: Scene = {
  id: '1_7',
  characters: [AgentLucas, FredGallant, AgentMoore, ChefMillerCigar],
  events: [
    {
      type: 'narration',
      id: '0',
      lineId: '1_1_7_0_narration',
    },
    {
      type: 'dialog',
      id: '1',
      lineId: '1_1_7_1_dialog',
      expression: 'neutral',
      character: AgentLucas,
    },
    {
      type: 'multiple_choice',
      id: '2',
      lineId: '1_1_7_2_dialog',
      choices: [
        {
          id: '3-A',
          lineId: '2_3-A',
          action: {
            type: 'switch_scene',
            sceneId: '1_7',
            eventId: '4_3-A',
          },
        },
        {
          id: '3-B',
          lineId: '2_3-B',
          action: {
            type: 'switch_scene',
            sceneId: '1_7',
            eventId: '5_3-C',
          },
        },
        {
          id: '3-C',
          lineId: '2_3-C',
          action: {
            type: 'switch_scene',
            sceneId: '1_7',
            eventId: '10_3-B',
          },
        },
      ],
      expression: 'neutral',
      character: FredGallant,
    },
    {
      type: 'dialog',
      id: '4_3-A',
      lineId: '1_1_7_4_3-A_dialog',
      character: FredGallant,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_7',
          eventId: '6_3-A',
        },
      ],
    },
    {
      type: 'dialog',
      id: '5_3-C',
      lineId: '1_1_7_5_3-C_dialog',
      character: FredGallant,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_7',
          eventId: '12_3-C',
        },
      ],
    },
    {
      type: 'dialog',
      id: '6_3-A',
      lineId: '1_1_7_6_3-A_dialog',
      character: AgentLucas,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_7',
          eventId: '7_3-A',
        },
      ],
    },
    {
      type: 'dialog',
      id: '7_3-A',
      lineId: '1_1_7_7_3-A_dialog',
      character: AgentMoore,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_7',
          eventId: '8_3-A',
        },
      ],
    },
    {
      type: 'dialog',
      id: '8_3-A',
      lineId: '1_1_7_8_3-A_dialog',
      character: AgentLucas,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_7',
          eventId: '9_3-A',
        },
      ],
    },
    {
      type: 'dialog',
      id: '9_3-A',
      lineId: '1_1_7_9_3-A_dialog',
      character: FredGallant,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_7',
          eventId: '16_3-A-2',
        },
      ],
    },
    {
      type: 'dialog',
      id: '10_3-B',
      lineId: '1_1_7_10_3-B_dialog',
      character: AgentLucas,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_7',
          eventId: '11_3-B',
        },
      ],
    },
    {
      type: 'dialog',
      id: '11_3-B',
      lineId: '1_1_7_11_3-B_dialog',
      character: AgentMoore,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_7',
          eventId: '21_3-B-2',
        },
      ],
    },
    {
      type: 'dialog',
      id: '12_3-C',
      lineId: '1_1_7_12_3-C_dialog',
      character: AgentLucas,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_7',
          eventId: '13_3-C',
        },
      ],
    },
    {
      type: 'dialog',
      id: '13_3-C',
      lineId: '1_1_7_13_3-C_dialog',
      character: AgentMoore,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_7',
          eventId: '23_3-C-2',
        },
      ],
    },
    {
      type: 'narration',
      id: '14',
      lineId: '1_1_7_14_narration',
    },
    {
      type: 'narration',
      id: '15',
      lineId: '1_1_7_15_narration',
    },
    {
      type: 'dialog',
      id: '16_3-A-2',
      lineId: '1_1_7_16_3-A-2_dialog',
      character: FredGallant,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_7',
          eventId: '17_3-A-3',
        },
      ],
    },
    {
      type: 'dialog',
      id: '17_3-A-3',
      lineId: '1_1_7_17_3-A-3_dialog',
      character: AgentLucas,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_7',
          eventId: '18_3-A-4',
        },
      ],
    },
    {
      type: 'dialog',
      id: '18_3-A-4',
      lineId: '1_1_7_18_3-A-4_dialog',
      character: AgentMoore,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_7',
          eventId: '19_3-A-5',
        },
      ],
    },
    {
      type: 'dialog',
      id: '19_3-A-5',
      lineId: '1_1_7_19_3-A-5_dialog',
      character: AgentLucas,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_7',
          eventId: '20_3-A-6',
        },
      ],
    },
    {
      type: 'dialog',
      id: '20_3-A-6',
      lineId: '1_1_7_20_3-A-6_dialog',
      character: FredGallant,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_7',
          eventId: '27_3-A-3 et 3-B-3',
        },
      ],
    },
    {
      type: 'dialog',
      id: '21_3-B-2',
      lineId: '1_1_7_21_3-B-2_dialog',
      character: AgentLucas,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_7',
          eventId: '22_3-B-3',
        },
      ],
    },
    {
      type: 'dialog',
      id: '22_3-B-3',
      lineId: '1_1_7_22_3-B-3_dialog',
      character: AgentMoore,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_7',
          eventId: '27_3-A-3 et 3-B-3',
        },
      ],
    },
    {
      type: 'dialog',
      id: '23_3-C-2',
      lineId: '1_1_7_23_3-C-2_dialog',
      character: AgentLucas,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_7',
          eventId: '24_3-C-3',
        },
      ],
    },
    {
      type: 'dialog',
      id: '24_3-C-3',
      lineId: '1_1_7_24_3-C-3_dialog',
      character: AgentMoore,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_7',
          eventId: '25_3-C-4',
        },
      ],
    },
    {
      type: 'dialog',
      id: '25_3-C-4',
      lineId: '1_1_7_25_3-C-4_dialog',
      character: AgentLucas,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_7',
          eventId: '26_3-C-5',
        },
      ],
    },
    {
      type: 'dialog',
      id: '26_3-C-5',
      lineId: '1_1_7_26_3-C-5_dialog',
      character: AgentMoore,
      expression: 'neutral',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_7',
          eventId: '28_3-C-3',
        },
      ],
    },
    {
      type: 'narration',
      id: '27_3-A-3 et 3-B-3',
      lineId: '1_1_7_27_3-A-3 et 3-B-3_narration',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_7',
          eventId: '29',
        },
      ],
    },
    {
      type: 'narration',
      id: '28_3-C-3',
      lineId: '1_1_7_28_3-C-3_narration',
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_7',
          eventId: '29',
        },
      ],
    },
    {
      type: 'narration',
      id: '29',
      lineId: '1_1_7_29_narration',
      shouldHideAll: true,
    },
    {
      type: 'dialog',
      id: '30',
      lineId: '1_1_7_30_dialog',
      expression: 'neutral',
      character: ChefMillerCigar,
      actions: [
        {
          type: 'switch_scene',
          sceneId: '1_8',
        },
      ],
    },
  ],
};
