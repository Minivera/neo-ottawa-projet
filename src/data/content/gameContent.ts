import { GameContent } from '../../game/game';
import {
  AgentLucas,
  AgentMoore,
  Bonnie,
  Brighton,
  ChefMillerCigar,
  ChristopherYoung,
  Enqueteur,
  FredGallant,
  Gabriel,
  Homme,
  HommeAuTelephone,
  JeuneFemme,
  LeighKane,
  Teacher,
} from '../characters';

import { act1 } from './act1';

export const gameContent: GameContent = {
  acts: [act1],
  characters: [
    FredGallant,
    Gabriel,
    ChefMillerCigar,
    AgentLucas,
    AgentMoore,
    Enqueteur,
    Brighton,
    Teacher,
    LeighKane,
    Homme,
    JeuneFemme,
    JeuneFemme,
    Bonnie,
    HommeAuTelephone,
    ChristopherYoung,
  ],
};
