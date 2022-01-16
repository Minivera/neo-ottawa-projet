import { QuizInfo } from '../game/pda';

type quizzesKeys =
  | 'QUIZ_1'
  | 'QUIZ_2'
  | 'QUIZ_3'
  | 'QUIZ_4'
  | 'QUIZ_5'
  | 'QUIZ_6';

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
} as const;
