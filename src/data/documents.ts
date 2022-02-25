import { Document } from '../game/pda';

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
  | 'STEAMWORKS'
  | 'GAMING_DISORDER'
  | 'MODELES_ECONOMIQUES'
  | 'LOOT_BOXES'
  | 'DECLARATIONS_INDUSTRIES'
  | 'GAME_PATENTS'
  | 'REGLEMENTATION_LOOT_BOXES'
  | 'POLICY_RESPONSES'
  | 'MARCHE_JV_2020'
  | 'IMPACT_JV_ENVIRONNEMENT'
  | 'PLAYING_FOR_PLANET'
  | 'DEFINITION_JEU_VIDEO'
  | 'LOI_DROIT_AUTEUR'
  | 'STATUT_LEGAL_JEUX_VIDEO'
  | 'SEGGIE_ROOFDOG'
  | 'DEFINITION_MOD'
  | 'LICENCE_JEU_VIDEO'
  | 'MOD_COUNTER_STRIKE'
  | 'MOD_DOTA'
  | 'AVANTAGES_INCONVENIENTS_MOD'
  | 'RAPPORT_CHRISTOPHER'
  | 'SPORT_ELECTRONIQUE'
  | 'BESTIAIRE'
  | 'PHOTO_JONATHAN_CHRISTIAN'
  | 'JOURNAL_CONCEPTION_CHRISTIAN'
  | 'CONCEPTS_ARTISTIQUES_CHRISTIAN'
  | 'PRATIQUE_SPORT_ELECTRONIQUE'
  | 'CONTRAT_ESPORT';

export const documents: Record<documentsNames, Document> = {
  LOI_GAME_OVER: {
    documentId: 'LOI_GAME_OVER',
    name: 'document-name-loi-game-over',
    description: 'document-description-loi-game-over',
    path: `documents/loi-game-over.pdf`,
  },
  JEUX_INTERDITS_WIKIPEDIA: {
    documentId: 'JEUX_INTERDITS_WIKIPEDIA',
    name: 'document-name-jeux-interdits-wikipedia',
    description: 'document-description-jeux-interdits-wikipedia',
    path: `documents/jeux-interdits-wikipedia.pdf`,
  },
  ABOUT_ESRB: {
    documentId: 'ABOUT_ESRB',
    name: 'document-name-about-ersb',
    description: 'document-description-about-ersb',
    path: `documents/about-esrb.pdf`,
  },
  LISTE_ANCIENS_EMPLOYES: {
    documentId: 'LISTE_ANCIENS_EMPLOYES',
    name: 'document-name-liste-anciens-employes',
    description: 'document-description-liste-anciens-employes',
    path: `documents/liste-anciens-employes.pdf`,
  },
  // FIXME: MISSING
  POCHETTES_JEUX: {
    documentId: 'POCHETTES_JEUX',
    name: 'document-name-pochettes-jeux',
    description: 'document-description-pochettes-jeux',
    path: `documents/liste-anciens-employes.pdf`,
  },
  GAME_STOP_RESPECT_RATINGS: {
    documentId: 'GAME_STOP_RESPECT_RATINGS',
    name: 'document-name-gamestop-respect-ratings',
    description: 'document-description-gamestop-respect-ratings',
    path: `documents/gamestop-respect-ratings.pdf`,
  },
  LOI_2005_CLASSEMENT: {
    documentId: 'LOI_2005_CLASSEMENT',
    name: 'document-name-loi-2005-classement',
    description: 'document-description-loi-2005-classement',
    path: `documents/loi-2005-classement.pdf`,
  },
  ESRB_FLAWS: {
    documentId: 'ESRB_FLAWS',
    name: 'document-name-esrb-flaws',
    description: 'document-description-esrb-flaws',
    path: `documents/esrb-flaws.pdf`,
  },
  RATING_PROCESS: {
    documentId: 'RATING_PROCESS',
    name: 'document-name-rating-process',
    description: 'document-description-rating-process',
    path: `documents/esrb-rating-process.pdf`,
  },
  STEAMWORKS: {
    documentId: 'STEAMWORKS',
    name: 'document-name-steamworks',
    description: 'document-description-steamworks',
    path: `documents/steamworks.pdf`,
  },
  GAMING_DISORDER: {
    documentId: 'GAMING_DISORDER',
    name: 'document-name-gaming-disorder',
    description: 'document-description-gaming-disorder',
    path: `documents/gaming_discorder.pdf`,
  },
  MODELES_ECONOMIQUES: {
    documentId: 'MODELES_ECONOMIQUES',
    name: 'document-name-modeles-economiques',
    description: 'document-description-modeles-economiques',
    path: `documents/modeles_economiques.pdf`,
  },
  LOOT_BOXES: {
    documentId: 'LOOT_BOXES',
    name: 'document-name-loot-boxes',
    description: 'document-description-loot-boxes',
    path: `documents/loot_boxes.pdf`,
  },
  DECLARATIONS_INDUSTRIES: {
    documentId: 'DECLARATIONS_INDUSTRIES',
    name: 'document-name-declarations-industries',
    description: 'document-description-declarations-industries',
    path: `documents/declarations_industries.pdf`,
  },
  GAME_PATENTS: {
    documentId: 'GAME_PATENTS',
    name: 'document-name-game-patents',
    description: 'document-description-game-patents',
    path: `documents/game_patents.pdf`,
  },
  REGLEMENTATION_LOOT_BOXES: {
    documentId: 'REGLEMENTATION_LOOT_BOXES',
    name: 'document-name-reglementation-loot-boxes',
    description: 'document-reglementation-loot-boxes',
    path: `documents/reglementation_loot_boxes.pdf`,
  },
  POLICY_RESPONSES: {
    documentId: 'POLICY_RESPONSES',
    name: 'document-name-policy-responses',
    description: 'document-description-policy-responses',
    path: `documents/policy_responses.pdf`,
  },
  MARCHE_JV_2020: {
    documentId: 'MARCHE_JV_2020',
    name: 'document-name-marche-jv',
    description: 'document-description-marche-jv',
    path: `documents/marche_jv_2020.pdf`,
  },
  IMPACT_JV_ENVIRONNEMENT: {
    documentId: 'IMPACT_JV_ENVIRONNEMENT',
    name: 'document-name-impact-jv-environment',
    description: 'document-description-impact-jv-environment',
    path: `documents/impact_jv_environment.pdf`,
  },
  PLAYING_FOR_PLANET: {
    documentId: 'PLAYING_FOR_PLANET',
    name: 'document-name-playing-planet',
    description: 'document-description-playing-planet',
    path: `documents/playing_for_planet.pdf`,
  },
  DEFINITION_JEU_VIDEO: {
    documentId: 'DEFINITION_JEU_VIDEO',
    name: 'document-name-definition-jeu-video',
    description: 'document-description-definition-jeu-video',
    path: `documents/definition-jeu-video.pdf`,
  },
  LOI_DROIT_AUTEUR: {
    documentId: 'LOI_DROIT_AUTEUR',
    name: 'document-name-loi-droit-auteur',
    description: 'document-description-loi-droit-auteur',
    path: `documents/loi-droit-auteur.pdf`,
  },
  STATUT_LEGAL_JEUX_VIDEO: {
    documentId: 'STATUT_LEGAL_JEUX_VIDEO',
    name: 'document-name-statut-legal-jeu-video',
    description: 'document-description-statut-legal-jeu-video',
    path: `documents/statut-legal-jeux-video.pdf`,
  },
  SEGGIE_ROOFDOG: {
    documentId: 'SEGGIE_ROOFDOG',
    name: 'document-name-seggie-roofdog',
    description: 'document-description-seggie-roofdog',
    path: `documents/seggie-roofdog.pdf`,
  },
  DEFINITION_MOD: {
    documentId: 'DEFINITION_MOD',
    name: 'document-name-definition-mod',
    description: 'document-description-definition-mod',
    path: `documents/description-mod.pdf`,
  },
  LICENCE_JEU_VIDEO: {
    documentId: 'LICENCE_JEU_VIDEO',
    name: 'document-name-licence-jeu-video',
    description: 'document-description-licence-jeu-video',
    path: `documents/licence-jeu-video.pdf`,
  },
  MOD_COUNTER_STRIKE: {
    documentId: 'MOD_COUNTER_STRIKE',
    name: 'document-name-mod-counter-strike',
    description: 'document-description-mod-counter-strike',
    path: `documents/mod-counter-strike.pdf`,
  },
  MOD_DOTA: {
    documentId: 'MOD_DOTA',
    name: 'document-name-mod-dota',
    description: 'document-description-mod-dota',
    path: `documents/mode-dota.pdf`,
  },
  AVANTAGES_INCONVENIENTS_MOD: {
    documentId: 'AVANTAGES_INCONVENIENTS_MOD',
    name: 'document-name-avantages-inconvenients-mod',
    description: 'document-description-avantages-inconvenients-mod',
    path: `documents/avantages-inconvenients-mod.pdf`,
  },
  RAPPORT_CHRISTOPHER: {
    documentId: 'RAPPORT_CHRISTOPHER',
    name: 'document-name-rapport-christopher',
    description: 'document-description-rapport-christopher',
    path: `documents/rapport-christopher.pdf`,
  },
  SPORT_ELECTRONIQUE: {
    documentId: 'SPORT_ELECTRONIQUE',
    name: 'document-name-sport-electronique',
    description: 'document-description-sport-electronique',
    path: `documents/sport-electronique.pdf`,
  },
  BESTIAIRE: {
    documentId: 'BESTIAIRE',
    name: 'document-name-bestiaire',
    description: 'document-description-bestiaire',
    path: `documents/bestiaire.pdf`,
  },
  PHOTO_JONATHAN_CHRISTIAN: {
    documentId: 'PHOTO_JONATHAN_CHRISTIAN',
    name: 'document-name-photo-jonathan-christopher',
    description: 'document-description-photo-jonathan-christopher',
    path: `documents/photo-jonathan-christian.pdf`,
  },
  JOURNAL_CONCEPTION_CHRISTIAN: {
    documentId: 'JOURNAL_CONCEPTION_CHRISTIAN',
    name: 'document-name-journal-christopher',
    description: 'document-description-journal-christopher',
    path: `documents/journal-conception-christian.pdf`,
  },
  CONCEPTS_ARTISTIQUES_CHRISTIAN: {
    documentId: 'CONCEPTS_ARTISTIQUES_CHRISTIAN',
    name: 'document-name-concepts-christopher',
    description: 'document-description-concepts-christopher',
    path: `documents/concepts-artistiques-christian.pdf`,
  },
  PRATIQUE_SPORT_ELECTRONIQUE: {
    documentId: 'PRATIQUE_SPORT_ELECTRONIQUE',
    name: 'document-name-pratique-sport-electronique',
    description: 'document-description-pratique-sport-electronique',
    path: `documents/pratique-sport-electronique.pdf`,
  },
  CONTRAT_ESPORT: {
    documentId: 'CONTRAT_ESPORT',
    name: 'document-name-contrat-esport',
    description: 'document-description-contrat-esport',
    path: `documents/contrat-esport.pdf`,
  },
};
