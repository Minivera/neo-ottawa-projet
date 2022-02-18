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
  TeacherV1,
  TeacherV2,
  Narrateur,
  JohnRandle,
  Vivian,
  Ronny,
  Tom,
  OliviaPaul,
  CarlWhite,
  MereLeighKane,
  PereLeighKane,
  Rod,
  Al,
  Boris,
  Christian,
  Jonathan,
  Jen,
  Trevor,
  Andrea,
  Brad,
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
  [TeacherV1.id]: {
    type: 'resistance',
    characterId: TeacherV1.id,
    name: TeacherV1.name,
    description: 'contact_teacher_v1',
  },
  [TeacherV2.id]: {
    type: 'resistance',
    characterId: TeacherV2.id,
    name: TeacherV2.name,
    description: 'contact_teacher_v2',
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
  [JohnRandle.id]: {
    type: 'resistance',
    characterId: JohnRandle.id,
    name: JohnRandle.name,
    description: 'contact_john_randle',
  },
  [Vivian.id]: {
    type: 'resistance',
    characterId: Vivian.id,
    name: Vivian.name,
    description: 'contact_vivian',
  },
  [Ronny.id]: {
    type: 'resistance',
    characterId: Ronny.id,
    name: Ronny.name,
    description: 'contact_ronny',
  },
  [Tom.id]: {
    type: 'resistance',
    characterId: Tom.id,
    name: Tom.name,
    description: 'contact_tom',
  },
  [OliviaPaul.id]: {
    type: 'resistance',
    characterId: OliviaPaul.id,
    name: OliviaPaul.name,
    description: 'contact_olivia_paul',
  },
  [CarlWhite.id]: {
    type: 'resistance',
    characterId: CarlWhite.id,
    name: CarlWhite.name,
    description: 'contact_carl_white',
  },
  [MereLeighKane.id]: {
    type: 'police',
    characterId: MereLeighKane.id,
    name: MereLeighKane.name,
    description: 'contact_mere_leigh_kane',
  },
  [PereLeighKane.id]: {
    type: 'police',
    characterId: PereLeighKane.id,
    name: PereLeighKane.name,
    description: 'contact_pere_leigh_kane',
  },
  [Rod.id]: {
    type: 'resistance',
    characterId: Rod.id,
    name: Rod.name,
    description: 'contact_rod',
  },
  [Al.id]: {
    type: 'police',
    characterId: Al.id,
    name: Al.name,
    description: 'contact_al',
  },
  [Boris.id]: {
    type: 'police',
    characterId: Boris.id,
    name: Boris.name,
    description: 'contact_boris',
  },
  [Christian.id]: {
    type: 'resistance',
    characterId: Christian.id,
    name: Christian.name,
    description: 'contact_christian',
  },
  [Jonathan.id]: {
    type: 'police',
    characterId: Jonathan.id,
    name: Jonathan.name,
    description: 'contact_jonathan',
  },
  [Jen.id]: {
    type: 'resistance',
    characterId: Jen.id,
    name: Jen.name,
    description: 'contact_jen',
  },
  [Trevor.id]: {
    type: 'resistance',
    characterId: Trevor.id,
    name: Trevor.name,
    description: 'contact_trevor',
  },
  [Andrea.id]: {
    type: 'resistance',
    characterId: Andrea.id,
    name: Andrea.name,
    description: 'contact_andrea',
  },
  [Brad.id]: {
    type: 'resistance',
    characterId: Brad.id,
    name: Brad.name,
    description: 'contact_brad',
  },
} as const;
