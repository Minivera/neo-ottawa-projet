import { Document } from '../game/pda';

import loiGameOver from '../assets/documents/loi-game-over.pdf';
import jeuxInterditsList from '../assets/documents/jeux-interdits-wikipedia.pdf';
import aboutERSB from '../assets/documents/about-esrb.pdf';
import listeAnciensEmployes from '../assets/documents/liste-anciens-employes.pdf';
import gamestopRespectRatings from '../assets/documents/gamestop-respect-ratings.pdf';
import loi2005Classement from '../assets/documents/loi-2005-classement.pdf';
import esrbFlaws from '../assets/documents/esrb-flaws.pdf';
import esrbRatingProcess from '../assets/documents/esrb-rating-process.pdf';
import steamworks from '../assets/documents/steamworks.pdf';
import gamingDisorder from '../assets/documents/gaming_discorder.pdf';
import modeleEconomiques from '../assets/documents/modeles_economiques.pdf';
import lootBoxes from '../assets/documents/loot_boxes.pdf';
import declarationsIndustries from '../assets/documents/declarations_industries.pdf';
import gamePatents from '../assets/documents/game_patents.pdf';
import reglementationLootBoxes from '../assets/documents/reglementation_loot_boxes.pdf';
import policyResponses from '../assets/documents/policy_responses.pdf';
import marcheJV2020 from '../assets/documents/marche_jv_2020.pdf';
import impactJVEnvironment from '../assets/documents/impact_jv_environment.pdf';
import playingForPlanet from '../assets/documents/playing_for_planet.pdf';
import definitionJeuVideo from '../assets/documents/definition-jeu-video.pdf';
import loiDroitAuteur from '../assets/documents/loi-droit-auteur.pdf';
import statutLegalJeuxVideo from '../assets/documents/statut-legal-jeux-video.pdf';
import seggieRoofdog from '../assets/documents/seggie-roofdog.pdf';
import definitionMod from '../assets/documents/description-mod.pdf';
import licenceJeuVideo from '../assets/documents/licence-jeu-video.pdf';
import modCounterStrike from '../assets/documents/mod-counter-strike.pdf';
import modDota from '../assets/documents/mode-dota.pdf';
import avantageInconvenientsMod from '../assets/documents/avantages-inconvenients-mod.pdf';
import rapportChristopher from '../assets/documents/rapport-christopher.pdf';
import bestiaire from '../assets/documents/bestiaire.pdf';
import conceptsArtistiquesChristian from '../assets/documents/concepts-artistiques-christian.pdf';
import journalConceptionChristian from '../assets/documents/journal-conception-christian.pdf';
import photoJonathanChristian from '../assets/documents/photo-jonathan-christian.pdf';
import contratEsport from '../assets/documents/contrat-esport.pdf';

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
    path: loiGameOver,
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
  GAMING_DISORDER: {
    documentId: 'GAMING_DISORDER',
    name: 'document-name-gaming-disorder',
    description: 'document-description-gaming-disorder',
    path: gamingDisorder,
  },
  MODELES_ECONOMIQUES: {
    documentId: 'MODELES_ECONOMIQUES',
    name: 'document-name-modeles-economiques',
    description: 'document-description-modeles-economiques',
    path: modeleEconomiques,
  },
  LOOT_BOXES: {
    documentId: 'LOOT_BOXES',
    name: 'document-name-loot-boxes',
    description: 'document-description-loot-boxes',
    path: lootBoxes,
  },
  DECLARATIONS_INDUSTRIES: {
    documentId: 'DECLARATIONS_INDUSTRIES',
    name: 'document-name-declarations-industries',
    description: 'document-description-declarations-industries',
    path: declarationsIndustries,
  },
  GAME_PATENTS: {
    documentId: 'GAME_PATENTS',
    name: 'document-name-game-patents',
    description: 'document-description-game-patents',
    path: gamePatents,
  },
  REGLEMENTATION_LOOT_BOXES: {
    documentId: 'REGLEMENTATION_LOOT_BOXES',
    name: 'document-name-reglementation-loot-boxes',
    description: 'document-reglementation-loot-boxes',
    path: reglementationLootBoxes,
  },
  POLICY_RESPONSES: {
    documentId: 'POLICY_RESPONSES',
    name: 'document-name-policy-responses',
    description: 'document-description-policy-responses',
    path: policyResponses,
  },
  MARCHE_JV_2020: {
    documentId: 'MARCHE_JV_2020',
    name: 'document-name-marche-jv',
    description: 'document-description-marche-jv',
    path: marcheJV2020,
  },
  IMPACT_JV_ENVIRONNEMENT: {
    documentId: 'IMPACT_JV_ENVIRONNEMENT',
    name: 'document-name-impact-jv-environment',
    description: 'document-description-impact-jv-environment',
    path: impactJVEnvironment,
  },
  PLAYING_FOR_PLANET: {
    documentId: 'PLAYING_FOR_PLANET',
    name: 'document-name-playing-planet',
    description: 'document-description-playing-planet',
    path: playingForPlanet,
  },
  DEFINITION_JEU_VIDEO: {
    documentId: 'DEFINITION_JEU_VIDEO',
    name: 'document-name-definition-jeu-video',
    description: 'document-description-definition-jeu-video',
    path: definitionJeuVideo,
  },
  LOI_DROIT_AUTEUR: {
    documentId: 'LOI_DROIT_AUTEUR',
    name: 'document-name-loi-droit-auteur',
    description: 'document-description-loi-droit-auteur',
    path: loiDroitAuteur,
  },
  STATUT_LEGAL_JEUX_VIDEO: {
    documentId: 'STATUT_LEGAL_JEUX_VIDEO',
    name: 'document-name-statut-legal-jeu-video',
    description: 'document-description-statut-legal-jeu-video',
    path: statutLegalJeuxVideo,
  },
  SEGGIE_ROOFDOG: {
    documentId: 'SEGGIE_ROOFDOG',
    name: 'document-name-seggie-roofdog',
    description: 'document-description-seggie-roofdog',
    path: seggieRoofdog,
  },
  DEFINITION_MOD: {
    documentId: 'DEFINITION_MOD',
    name: 'document-name-definition-mod',
    description: 'document-description-definition-mod',
    path: definitionMod,
  },
  LICENCE_JEU_VIDEO: {
    documentId: 'LICENCE_JEU_VIDEO',
    name: 'document-name-licence-jeu-video',
    description: 'document-description-licence-jeu-video',
    path: licenceJeuVideo,
  },
  MOD_COUNTER_STRIKE: {
    documentId: 'MOD_COUNTER_STRIKE',
    name: 'document-name-mod-counter-strike',
    description: 'document-description-mod-counter-strike',
    path: modCounterStrike,
  },
  MOD_DOTA: {
    documentId: 'MOD_DOTA',
    name: 'document-name-mod-dota',
    description: 'document-description-mod-dota',
    path: modDota,
  },
  AVANTAGES_INCONVENIENTS_MOD: {
    documentId: 'AVANTAGES_INCONVENIENTS_MOD',
    name: 'document-name-avantages-inconvenients-mod',
    description: 'document-description-avantages-inconvenients-mod',
    path: avantageInconvenientsMod,
  },
  RAPPORT_CHRISTOPHER: {
    documentId: 'RAPPORT_CHRISTOPHER',
    name: 'document-name-rapport-christopher',
    description: 'document-description-rapport-christopher',
    path: rapportChristopher,
  },
  // TODO: Missing
  SPORT_ELECTRONIQUE: {
    documentId: 'SPORT_ELECTRONIQUE',
    name: 'document-name-sport-electronique',
    description: 'document-description-sport-electronique',
    path: avantageInconvenientsMod,
  },
  BESTIAIRE: {
    documentId: 'BESTIAIRE',
    name: 'document-name-bestiaire',
    description: 'document-description-bestiaire',
    path: bestiaire,
  },
  PHOTO_JONATHAN_CHRISTIAN: {
    documentId: 'PHOTO_JONATHAN_CHRISTIAN',
    name: 'document-name-photo-jonathan-christopher',
    description: 'document-description-photo-jonathan-christopher',
    path: photoJonathanChristian,
  },
  JOURNAL_CONCEPTION_CHRISTIAN: {
    documentId: 'JOURNAL_CONCEPTION_CHRISTIAN',
    name: 'document-name-journal-christopher',
    description: 'document-description-journal-christopher',
    path: journalConceptionChristian,
  },
  CONCEPTS_ARTISTIQUES_CHRISTIAN: {
    documentId: 'CONCEPTS_ARTISTIQUES_CHRISTIAN',
    name: 'document-name-concepts-christopher',
    description: 'document-description-concepts-christopher',
    path: conceptsArtistiquesChristian,
  },
  // TODO: Missing
  PRATIQUE_SPORT_ELECTRONIQUE: {
    documentId: 'PRATIQUE_SPORT_ELECTRONIQUE',
    name: 'document-name-pratique-sport-electronique',
    description: 'document-description-pratique-sport-electronique',
    path: avantageInconvenientsMod,
  },
  CONTRAT_ESPORT: {
    documentId: 'CONTRAT_ESPORT',
    name: 'document-name-contrat-esport',
    description: 'document-description-contrat-esport',
    path: contratEsport,
  },
};
