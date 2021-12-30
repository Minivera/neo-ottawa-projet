import {
  AgentLucas,
  AgentMoore,
  BonnieV1,
  BonnieV2,
  Brighton,
  ChefMillerCigar,
  ChristopherYoung,
  Enqueteur,
  Gabriel,
  LeighKane,
  Teacher,
  Narrateur,
} from './characters';
import { Contact } from '../game/pda';

export const contacts: Record<string, Contact> = {
  [Gabriel.id]: {
    type: 'police',
    characterId: Gabriel.id,
    name: Gabriel.name,
    description: 'contact_gabriel_sand',
  },
  [ChefMillerCigar.id]: {
    type: 'police',
    characterId: ChefMillerCigar.id,
    name: ChefMillerCigar.name,
    description: 'contact_chef_miller',
  },
  [AgentLucas.id]: {
    type: 'police',
    characterId: AgentLucas.id,
    name: AgentLucas.name,
    description: 'contact_agent_lucas',
  },
  [AgentMoore.id]: {
    type: 'police',
    characterId: AgentMoore.id,
    name: AgentMoore.name,
    description: 'contact_agent_moore',
  },
  [LeighKane.id]: {
    type: 'resistance',
    characterId: LeighKane.id,
    name: LeighKane.name,
    description: 'contact_leigh_kane',
  },
  [Enqueteur.id]: {
    type: 'police',
    characterId: Enqueteur.id,
    name: Enqueteur.name,
    description: 'contact_enqueteur',
  },
  [Brighton.id]: {
    type: 'police',
    characterId: Brighton.id,
    name: Brighton.name,
    description: 'contact_brighton',
  },
  [Teacher.id]: {
    type: 'resistance',
    characterId: Teacher.id,
    name: Teacher.name,
    description: 'contact_teacher',
  },
  [BonnieV1.id]: {
    type: 'resistance',
    characterId: BonnieV1.id,
    name: BonnieV1.name,
    description: 'contact_bonnie_randle_v1',
  },
  [BonnieV2.id]: {
    type: 'resistance',
    characterId: BonnieV2.id,
    name: BonnieV2.name,
    description: 'contact_bonnie_randle_v2',
  },
  [ChristopherYoung.id]: {
    type: 'resistance',
    characterId: ChristopherYoung.id,
    name: ChristopherYoung.name,
    description: 'contact_christopher_young',
  },
  [Narrateur.id]: {
    type: 'resistance',
    characterId: Narrateur.id,
    name: Narrateur.name,
    description: 'contact_narrateur',
  },
} as const;
