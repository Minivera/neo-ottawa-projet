import { Document } from '../game/pda';

import jeuxInterditsList from '../assets/documents/jeux-interdits-wikipedia.pdf';

export type documentsNames = 'JEUX_INTERDITS_WIKIPEDIA';

export const documents: Record<documentsNames, Document> = {
  'JEUX_INTERDITS_WIKIPEDIA': {
    documentId: 'JEUX_INTERDITS_WIKIPEDIA',
    name: 'document-name-jeux-interdits-wikipedia',
    description: 'document-description-jeux-interdits-wikipedia',
    path: jeuxInterditsList,
  },
};
