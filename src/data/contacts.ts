import {
  AgentLucas,
  AgentMoore,
  Bonnie,
  Brighton,
  ChefMillerCigar,
  ChristopherYoung,
  Enqueteur,
  Gabriel,
  LeighKane,
  Teacher,
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
  [Bonnie.id]: {
    type: 'resistance',
    characterId: Bonnie.id,
    name: Bonnie.name,
    description: 'contact_bonnie_randle',
  },
  [ChristopherYoung.id]: {
    type: 'resistance',
    characterId: ChristopherYoung.id,
    name: ChristopherYoung.name,
    description: 'contact_resistance',
  },
} as const;
