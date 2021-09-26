import { Character } from './character';
import { Contact, Evidence } from './pda';

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

export interface SaveValueAction extends Action {
  type: 'save_value';
  key: string;
  value: string;
}

export interface IncrementValueAction extends Action {
  type: 'increment_value';
  key: string;
  value: number;
}

export interface SetPDAState extends Action {
  type: 'set_pda_state';
  state: boolean;
}

export interface AddDocument extends Action {
  type: 'add_document';
  document: Document;
}

export interface AddContact extends Action {
  type: 'add_contact';
  contact: Contact;
}

export interface AddEvidence extends Action {
  type: 'add_evidence';
  evidence: Evidence;
}

export type ActionType = SwitchSceneAction | SaveValueAction | IncrementValueAction | SetPDAState | AddDocument | AddContact | AddEvidence;

export interface GenericEvent {
  type: string;
  id: string;
  soundEffect?: string;
  fullscreen?: boolean;
  actions?: ActionType[];
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
  id: string;
  lineId: string;
  action: SwitchSceneAction;
}

export interface MultipleChoice extends GenericEvent {
  type: 'multiple_choice';
  character?: Character;
  expression?: string;
  lineId: string;
  choices: Choice[];
}

export type Event = Dialog | Narration | Transition | MultipleChoice;
