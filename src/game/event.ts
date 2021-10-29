import { Document } from './pda';

export enum CharacterAnimation {
  MOVE_UP = 'move_up',
  FADE_IN = 'fade_in',
}

export interface Choice {
  id: number;
  content: string;
}

export interface Quiz {
  question: string;
  choices: Choice[];
  feedback?: string;
  document?: Document;
}
