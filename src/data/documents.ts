import { Document } from '../game/pda';

import jeuxInterditsList from '../assets/documents/jeux-interdits-wikipedia.pdf';

export type documentsNames = 'LOI_GAME_OVER' | 'JEUX_INTERDITS_WIKIPEDIA';

export const documents: Record<documentsNames, Document> = {
  'LOI_GAME_OVER': {
    documentId: 'LOI_GAME_OVER',
    name: 'document-name-loi-game-over',
    description: 'document-description-loi-game-over',
    path: jeuxInterditsList,
  },
  'JEUX_INTERDITS_WIKIPEDIA': {
    documentId: 'JEUX_INTERDITS_WIKIPEDIA',
    name: 'document-name-jeux-interdits-wikipedia',
    description: 'document-description-jeux-interdits-wikipedia',
    path: jeuxInterditsList,
  },
};
