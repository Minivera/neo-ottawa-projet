import { Document } from './pda';

export enum CharacterAnimation {
  /* eslint-disable no-unused-vars */
  MOVE_UP = 'move_up',
  FADE_IN = 'fade_in',
  MOVE_DOWN = 'move_down',
  FADE_OUT = 'fade_out',
  /* eslint-enable no-unused-vars */
}

export interface Choice {
  id: number;
  content: string;
  isGoodChoice?: boolean;
}

export interface QuizQuestion {
  perfectAnswer: boolean;
  question: string;
  choices: Choice[];
  feedback?: string;
  document?: Document;
}

export interface Quiz {
  name: string;
  questionCount: number;
  currentIndex: number;
  questions: QuizQuestion[];
}
