import { Document } from '../game/pda';

import jeuxInterditsList from '../assets/documents/jeux-interdits-wikipedia.pdf';
import aboutERSB from '../assets/documents/about-ersb.pdf';
import listeAnciensEmployes from '../assets/documents/liste-anciens-employes.pdf';
import gamestopRespectRatings from '../assets/documents/gamestop-respect-ratings.pdf';
import loi2005Classement from '../assets/documents/loi-2005-classement.pdf';
import esrbFlaws from '../assets/documents/esrb-flaws.pdf';
import esrbRatingProcess from '../assets/documents/esrb-rating-process.pdf';
import steamworks from '../assets/documents/steamworks.pdf';

export type documentsNames =
  | 'LOI_GAME_OVER'
  | 'JEUX_INTERDITS_WIKIPEDIA'
  | 'ABOUT_ESRB'
  | 'LISTE_ANCIENS_EMPLOYES'
  | 'POCHETTES_JEUX'
  | 'GAME_STOP_RESPECT_RATINGS'
  | 'LOI_2005_CLASSEMENT'
  | 'ESRB_FLAWS'
  | 'RATING_PROCESS'
  | 'STEAMWORKS';

export const documents: Record<documentsNames, Document> = {
  LOI_GAME_OVER: {
    documentId: 'LOI_GAME_OVER',
    name: 'document-name-loi-game-over',
    description: 'document-description-loi-game-over',
    path: jeuxInterditsList,
  },
  JEUX_INTERDITS_WIKIPEDIA: {
    documentId: 'JEUX_INTERDITS_WIKIPEDIA',
    name: 'document-name-jeux-interdits-wikipedia',
    description: 'document-description-jeux-interdits-wikipedia',
    path: jeuxInterditsList,
  },
  ABOUT_ESRB: {
    documentId: 'ABOUT_ESRB',
    name: 'document-name-about-ersb',
    description: 'document-description-about-ersb',
    path: aboutERSB,
  },
  LISTE_ANCIENS_EMPLOYES: {
    documentId: 'LISTE_ANCIENS_EMPLOYES',
    name: 'document-name-liste-anciens-employes',
    description: 'document-description-liste-anciens-employes',
    path: listeAnciensEmployes,
  },
  POCHETTES_JEUX: {
    documentId: 'POCHETTES_JEUX',
    name: 'document-name-pochettes-jeux',
    description: 'document-description-pochettes-jeux',
    path: listeAnciensEmployes,
  },
  GAME_STOP_RESPECT_RATINGS: {
    documentId: 'GAME_STOP_RESPECT_RATINGS',
    name: 'document-name-gamestop-respect-ratings',
    description: 'document-description-gamestop-respect-ratings',
    path: gamestopRespectRatings,
  },
  LOI_2005_CLASSEMENT: {
    documentId: 'LOI_2005_CLASSEMENT',
    name: 'document-name-loi-2005-classement',
    description: 'document-description-loi-2005-classement',
    path: loi2005Classement,
  },
  ESRB_FLAWS: {
    documentId: 'ESRB_FLAWS',
    name: 'document-name-esrb-flaws',
    description: 'document-description-esrb-flaws',
    path: esrbFlaws,
  },
  RATING_PROCESS: {
    documentId: 'RATING_PROCESS',
    name: 'document-name-rating-process',
    description: 'document-description-rating-process',
    path: esrbRatingProcess,
  },
  STEAMWORKS: {
    documentId: 'STEAMWORKS',
    name: 'document-name-steamworks',
    description: 'document-description-steamworks',
    path: steamworks,
  },
};
