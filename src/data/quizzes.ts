import { QuizInfo } from '../game/pda';

type quizzesKeys = 'QUIZ_1';

export const quizzesInfo: Record<quizzesKeys, QuizInfo> = {
  'QUIZ_1': {
    quizId: 'QUIZ_1',
    name: 'QUIZ_1_NAME',
  },
} as const;
