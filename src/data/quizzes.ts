import { QuizInfo } from '../game/pda';

type quizzesKeys =
  | 'QUIZ_1'
  | 'QUIZ_2'
  | 'QUIZ_3'
  | 'QUIZ_4'
  | 'QUIZ_5'
  | 'QUIZ_6'
  | 'QUIZ_2_1'
  | 'QUIZ_2_2'
  | 'QUIZ_2_3'
  | 'QUIZ_2_4'
  | 'QUIZ_2_5'
  | 'QUIZ_2_6'
  | 'QUIZ_2_7'
  | 'QUIZ_3_1'
  | 'QUIZ_3_2'
  | 'QUIZ_3_3'
  | 'QUIZ_4_1'
  | 'QUIZ_4_2'
  | 'QUIZ_5_1'
  | 'QUIZ_5_2'
  | 'QUIZ_6_1'
  | 'QUIZ_6_2'
  | 'QUIZ_6_3';

export const quizzesInfo: Record<quizzesKeys, QuizInfo> = {
  QUIZ_1: {
    quizId: 'QUIZ_1',
    name: 'QUIZ_1_NAME',
  },
  QUIZ_2: {
    quizId: 'QUIZ_2',
    name: 'QUIZ_2_NAME',
  },
  QUIZ_3: {
    quizId: 'QUIZ_3',
    name: 'QUIZ_3_NAME',
  },
  QUIZ_4: {
    quizId: 'QUIZ_4',
    name: 'QUIZ_4_NAME',
  },
  QUIZ_5: {
    quizId: 'QUIZ_5',
    name: 'QUIZ_5_NAME',
  },
  QUIZ_6: {
    quizId: 'QUIZ_6',
    name: 'QUIZ_6_NAME',
  },
  QUIZ_2_1: {
    quizId: 'QUIZ_2_1',
    name: 'QUIZ_2_1_NAME',
  },
  QUIZ_2_2: {
    quizId: 'QUIZ_2_2',
    name: 'QUIZ_2_2_NAME',
  },
  QUIZ_2_3: {
    quizId: 'QUIZ_2_3',
    name: 'QUIZ_2_3_NAME',
  },
  QUIZ_2_4: {
    quizId: 'QUIZ_2_4',
    name: 'QUIZ_2_4_NAME',
  },
  QUIZ_2_5: {
    quizId: 'QUIZ_2_5',
    name: 'QUIZ_2_5_NAME',
  },
  QUIZ_2_6: {
    quizId: 'QUIZ_2_6',
    name: 'QUIZ_2_6_NAME',
  },
  QUIZ_2_7: {
    quizId: 'QUIZ_2_7',
    name: 'QUIZ_2_7_NAME',
  },
  QUIZ_3_1: {
    quizId: 'QUIZ_3_1',
    name: 'QUIZ_3_1_NAME',
  },
  QUIZ_3_2: {
    quizId: 'QUIZ_3_2',
    name: 'QUIZ_3_2_NAME',
  },
  QUIZ_3_3: {
    quizId: 'QUIZ_3_3',
    name: 'QUIZ_3_3_NAME',
  },
  QUIZ_4_1: {
    quizId: 'QUIZ_4_1',
    name: 'QUIZ_4_1_NAME',
  },
  QUIZ_4_2: {
    quizId: 'QUIZ_4_2',
    name: 'QUIZ_4_2_NAME',
  },
  QUIZ_5_1: {
    quizId: 'QUIZ_5_1',
    name: 'QUIZ_5_1_NAME',
  },
  QUIZ_5_2: {
    quizId: 'QUIZ_5_2',
    name: 'QUIZ_5_2_NAME',
  },
  QUIZ_6_1: {
    quizId: 'QUIZ_6_1',
    name: 'QUIZ_6_1_NAME',
  },
  QUIZ_6_2: {
    quizId: 'QUIZ_6_2',
    name: 'QUIZ_6_2_NAME',
  },
  QUIZ_6_3: {
    quizId: 'QUIZ_6_3',
    name: 'QUIZ_6_3_NAME',
  },
} as const;
