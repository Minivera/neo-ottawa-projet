import { Character } from './character';

export enum CharacterAnimation {
  MOVE_UP = 'move-up',
  FADE_IN = 'fade-in',
}

export interface Action {
  type: string;
}

export interface SwitchSceneAction extends Action {
  type: 'switch_scene';
  sceneId: string;
  eventId?: string;
}

export type ActionType = SwitchSceneAction;

export interface GenericEvent {
  type: string;
  id: string;
  soundEffect?: string;
  fullscreen?: boolean;
  action?: ActionType;
}

export interface Dialog extends GenericEvent {
  type: 'dialog';
  character: Character;
  expression: string;
  animation?: CharacterAnimation;
  lineId: string;
}

export interface Narration extends GenericEvent {
  type: 'narration';
  shouldHideAll?: boolean;
  lineId: string;
  soundEffect?: string;
}

export interface Transition extends GenericEvent {
  type: 'transition';
  hideEverything?: boolean;
}

export interface Choice {
  lineId: string;
  action: ActionType;
}

export interface MultipleChoice extends GenericEvent {
  type: 'multiple_choice';
  character?: Character;
  expression?: string;
  lineId: string;
  choices: Choice[];
}

export type Event = Dialog | Narration | Transition | MultipleChoice;
