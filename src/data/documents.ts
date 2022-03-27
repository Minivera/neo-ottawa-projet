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
  | 'CONTRAT_ESPORT'
  | 'REGLES_TOURNOIS_LOL'
  | 'REGLES_TOURNOIS_LOL_ABREGEES'
  | 'ELIGIBILITE_JOUEURS_LEC'
  | 'PROFIL_JOUEURS'
  | 'FINANCE_EQUIPE'
  | 'LISTE_COMMANDITAIRES'
  | 'REGLES_COMMANDITAIRES'
  | 'REGLES_TENUES'
  | 'STATISTIQUES_JEN'
  | 'CODE_CONDUITE'
  | 'REGLES_COMMUNICATION_PUBLIQUE'
  | 'REGLES_PARIS'
  | 'MARCHE_STREAMING'
  | 'REGLES_UTILISATION_TWITCH'
  | 'POLITIQUES_COMPAGNIES_JV'
  | 'FICHE_DESCRIPTIVE_OPULENCE'
  | 'FICHE_DESCRIPTIVE_UPPERSTREAMER'
  | 'LIGNE_CONDUITE_TWITCH'
  | 'SANCTIONS_TWITCH'
  | 'SYNDICALISATION_STREAMERS'
  | 'TOXICITE_JEUX_VIDEO'
  | 'TOXICITE_LOL'
  | 'TRIBUNAL_JEUX_VIDEO'
  | 'PENALITE_JEUX_VIDEO';

export const documents: Record<documentsNames, Document> = {
  LOI_GAME_OVER: {
    documentId: 'LOI_GAME_OVER',
    name: 'document-name-loi-game-over',
    description: 'document-description-loi-game-over',
    path: `${import.meta.env.BASE_URL}documents/loi-game-over.pdf`,
  },
  JEUX_INTERDITS_WIKIPEDIA: {
    documentId: 'JEUX_INTERDITS_WIKIPEDIA',
    name: 'document-name-jeux-interdits-wikipedia',
    description: 'document-description-jeux-interdits-wikipedia',
    path: `${import.meta.env.BASE_URL}documents/jeux-interdits-wikipedia.pdf`,
  },
  ABOUT_ESRB: {
    documentId: 'ABOUT_ESRB',
    name: 'document-name-about-ersb',
    description: 'document-description-about-ersb',
    path: `${import.meta.env.BASE_URL}documents/about-esrb.pdf`,
  },
  LISTE_ANCIENS_EMPLOYES: {
    documentId: 'LISTE_ANCIENS_EMPLOYES',
    name: 'document-name-liste-anciens-employes',
    description: 'document-description-liste-anciens-employes',
    path: `${import.meta.env.BASE_URL}documents/liste-anciens-employes.pdf`,
  },
  POCHETTES_JEUX: {
    documentId: 'POCHETTES_JEUX',
    name: 'document-name-pochettes-jeux',
    description: 'document-description-pochettes-jeux',
    path: `${import.meta.env.BASE_URL}documents/pochette-jeux.pdf`,
  },
  GAME_STOP_RESPECT_RATINGS: {
    documentId: 'GAME_STOP_RESPECT_RATINGS',
    name: 'document-name-gamestop-respect-ratings',
    description: 'document-description-gamestop-respect-ratings',
    path: `${import.meta.env.BASE_URL}documents/gamestop-respect-ratings.pdf`,
  },
  LOI_2005_CLASSEMENT: {
    documentId: 'LOI_2005_CLASSEMENT',
    name: 'document-name-loi-2005-classement',
    description: 'document-description-loi-2005-classement',
    path: `${import.meta.env.BASE_URL}documents/loi-2005-classement.pdf`,
  },
  ESRB_FLAWS: {
    documentId: 'ESRB_FLAWS',
    name: 'document-name-esrb-flaws',
    description: 'document-description-esrb-flaws',
    path: `${import.meta.env.BASE_URL}documents/esrb-flaws.pdf`,
  },
  RATING_PROCESS: {
    documentId: 'RATING_PROCESS',
    name: 'document-name-rating-process',
    description: 'document-description-rating-process',
    path: `${import.meta.env.BASE_URL}documents/esrb-rating-process.pdf`,
  },
  STEAMWORKS: {
    documentId: 'STEAMWORKS',
    name: 'document-name-steamworks',
    description: 'document-description-steamworks',
    path: `${import.meta.env.BASE_URL}documents/steamworks.pdf`,
  },
  GAMING_DISORDER: {
    documentId: 'GAMING_DISORDER',
    name: 'document-name-gaming-disorder',
    description: 'document-description-gaming-disorder',
    path: `${import.meta.env.BASE_URL}documents/gaming_discorder.pdf`,
  },
  MODELES_ECONOMIQUES: {
    documentId: 'MODELES_ECONOMIQUES',
    name: 'document-name-modeles-economiques',
    description: 'document-description-modeles-economiques',
    path: `${import.meta.env.BASE_URL}documents/modeles_economiques.pdf`,
  },
  LOOT_BOXES: {
    documentId: 'LOOT_BOXES',
    name: 'document-name-loot-boxes',
    description: 'document-description-loot-boxes',
    path: `${import.meta.env.BASE_URL}documents/loot_boxes.pdf`,
  },
  DECLARATIONS_INDUSTRIES: {
    documentId: 'DECLARATIONS_INDUSTRIES',
    name: 'document-name-declarations-industries',
    description: 'document-description-declarations-industries',
    path: `${import.meta.env.BASE_URL}documents/declarations_industries.pdf`,
  },
  GAME_PATENTS: {
    documentId: 'GAME_PATENTS',
    name: 'document-name-game-patents',
    description: 'document-description-game-patents',
    path: `${import.meta.env.BASE_URL}documents/game_patents.pdf`,
  },
  REGLEMENTATION_LOOT_BOXES: {
    documentId: 'REGLEMENTATION_LOOT_BOXES',
    name: 'document-name-reglementation-loot-boxes',
    description: 'document-reglementation-loot-boxes',
    path: `${import.meta.env.BASE_URL}documents/reglementation_loot_boxes.pdf`,
  },
  POLICY_RESPONSES: {
    documentId: 'POLICY_RESPONSES',
    name: 'document-name-policy-responses',
    description: 'document-description-policy-responses',
    path: `${import.meta.env.BASE_URL}documents/policy_responses.pdf`,
  },
  MARCHE_JV_2020: {
    documentId: 'MARCHE_JV_2020',
    name: 'document-name-marche-jv',
    description: 'document-description-marche-jv',
    path: `${import.meta.env.BASE_URL}documents/marche_jv_2020.pdf`,
  },
  IMPACT_JV_ENVIRONNEMENT: {
    documentId: 'IMPACT_JV_ENVIRONNEMENT',
    name: 'document-name-impact-jv-environment',
    description: 'document-description-impact-jv-environment',
    path: `${import.meta.env.BASE_URL}documents/impact_jv_environment.pdf`,
  },
  PLAYING_FOR_PLANET: {
    documentId: 'PLAYING_FOR_PLANET',
    name: 'document-name-playing-planet',
    description: 'document-description-playing-planet',
    path: `${import.meta.env.BASE_URL}documents/playing_for_planet.pdf`,
  },
  DEFINITION_JEU_VIDEO: {
    documentId: 'DEFINITION_JEU_VIDEO',
    name: 'document-name-definition-jeu-video',
    description: 'document-description-definition-jeu-video',
    path: `${import.meta.env.BASE_URL}documents/definition-jeu-video.pdf`,
  },
  LOI_DROIT_AUTEUR: {
    documentId: 'LOI_DROIT_AUTEUR',
    name: 'document-name-loi-droit-auteur',
    description: 'document-description-loi-droit-auteur',
    path: `${import.meta.env.BASE_URL}documents/loi-droit-auteur.pdf`,
  },
  STATUT_LEGAL_JEUX_VIDEO: {
    documentId: 'STATUT_LEGAL_JEUX_VIDEO',
    name: 'document-name-statut-legal-jeu-video',
    description: 'document-description-statut-legal-jeu-video',
    path: `${import.meta.env.BASE_URL}documents/statut-legal-jeux-video.pdf`,
  },
  SEGGIE_ROOFDOG: {
    documentId: 'SEGGIE_ROOFDOG',
    name: 'document-name-seggie-roofdog',
    description: 'document-description-seggie-roofdog',
    path: `${import.meta.env.BASE_URL}documents/seggie-roofdog.pdf`,
  },
  DEFINITION_MOD: {
    documentId: 'DEFINITION_MOD',
    name: 'document-name-definition-mod',
    description: 'document-description-definition-mod',
    path: `${import.meta.env.BASE_URL}documents/description-mod.pdf`,
  },
  LICENCE_JEU_VIDEO: {
    documentId: 'LICENCE_JEU_VIDEO',
    name: 'document-name-licence-jeu-video',
    description: 'document-description-licence-jeu-video',
    path: `${import.meta.env.BASE_URL}documents/licence-jeu-video.pdf`,
  },
  MOD_COUNTER_STRIKE: {
    documentId: 'MOD_COUNTER_STRIKE',
    name: 'document-name-mod-counter-strike',
    description: 'document-description-mod-counter-strike',
    path: `${import.meta.env.BASE_URL}documents/mod-counter-strike.pdf`,
  },
  MOD_DOTA: {
    documentId: 'MOD_DOTA',
    name: 'document-name-mod-dota',
    description: 'document-description-mod-dota',
    path: `${import.meta.env.BASE_URL}documents/mode-dota.pdf`,
  },
  AVANTAGES_INCONVENIENTS_MOD: {
    documentId: 'AVANTAGES_INCONVENIENTS_MOD',
    name: 'document-name-avantages-inconvenients-mod',
    description: 'document-description-avantages-inconvenients-mod',
    path: `${
      import.meta.env.BASE_URL
    }documents/avantages-inconvenients-mod.pdf`,
  },
  RAPPORT_CHRISTOPHER: {
    documentId: 'RAPPORT_CHRISTOPHER',
    name: 'document-name-rapport-christopher',
    description: 'document-description-rapport-christopher',
    path: `${import.meta.env.BASE_URL}documents/rapport-christopher.pdf`,
  },
  SPORT_ELECTRONIQUE: {
    documentId: 'SPORT_ELECTRONIQUE',
    name: 'document-name-sport-electronique',
    description: 'document-description-sport-electronique',
    path: `${import.meta.env.BASE_URL}documents/sport-electronique.pdf`,
  },
  BESTIAIRE: {
    documentId: 'BESTIAIRE',
    name: 'document-name-bestiaire',
    description: 'document-description-bestiaire',
    path: `${import.meta.env.BASE_URL}documents/bestiaire.pdf`,
  },
  PHOTO_JONATHAN_CHRISTIAN: {
    documentId: 'PHOTO_JONATHAN_CHRISTIAN',
    name: 'document-name-photo-jonathan-christopher',
    description: 'document-description-photo-jonathan-christopher',
    path: `${import.meta.env.BASE_URL}documents/photo-jonathan-christian.pdf`,
  },
  JOURNAL_CONCEPTION_CHRISTIAN: {
    documentId: 'JOURNAL_CONCEPTION_CHRISTIAN',
    name: 'document-name-journal-christopher',
    description: 'document-description-journal-christopher',
    path: `${
      import.meta.env.BASE_URL
    }documents/journal-conception-christian.pdf`,
  },
  CONCEPTS_ARTISTIQUES_CHRISTIAN: {
    documentId: 'CONCEPTS_ARTISTIQUES_CHRISTIAN',
    name: 'document-name-concepts-christopher',
    description: 'document-description-concepts-christopher',
    path: `${
      import.meta.env.BASE_URL
    }documents/concepts-artistiques-christian.pdf`,
  },
  PRATIQUE_SPORT_ELECTRONIQUE: {
    documentId: 'PRATIQUE_SPORT_ELECTRONIQUE',
    name: 'document-name-pratique-sport-electronique',
    description: 'document-description-pratique-sport-electronique',
    path: `${
      import.meta.env.BASE_URL
    }documents/pratique-sport-electronique.pdf`,
  },
  CONTRAT_ESPORT: {
    documentId: 'CONTRAT_ESPORT',
    name: 'document-name-contrat-esport',
    description: 'document-description-contrat-esport',
    path: `${import.meta.env.BASE_URL}documents/contrat-esport.pdf`,
  },
  REGLES_TOURNOIS_LOL: {
    documentId: 'REGLES_TOURNOIS_LOL',
    name: 'document-name-regles-tournois-lol',
    description: 'document-description-regles-tournois-lol',
    path: `${import.meta.env.BASE_URL}documents/regles-tournois-lol.pdf`,
  },
  REGLES_TOURNOIS_LOL_ABREGEES: {
    documentId: 'REGLES_TOURNOIS_LOL_ABREGEES',
    name: 'document-name-regles-tournois-lol-abreges',
    description: 'document-description-regles-tournois-lol-abreges',
    path: `${
      import.meta.env.BASE_URL
    }documents/regles-tournois-lol-abreges.pdf`,
  },
  ELIGIBILITE_JOUEURS_LEC: {
    documentId: 'ELIGIBILITE_JOUEURS_LEC',
    name: 'document-name-eligibilite-joueurs-lec',
    description: 'document-description-eligibilite-joueurs-lec.pdf',
    path: `${import.meta.env.BASE_URL}documents/eligibilite-joueurs-lec.pdf`,
  },
  PROFIL_JOUEURS: {
    documentId: 'PROFIL_JOUEURS',
    name: 'document-name-profil-joueurs',
    description: 'document-description-profil-joueurs',
    path: `${import.meta.env.BASE_URL}documents/profil-joueurs.pdf`,
  },
  FINANCE_EQUIPE: {
    documentId: 'FINANCE_EQUIPE',
    name: 'document-name-contrat-esport',
    description: 'document-description-contrat-esport',
    path: `${import.meta.env.BASE_URL}documents/contrat-esport.pdf`,
  },
  LISTE_COMMANDITAIRES: {
    documentId: 'LISTE_COMMANDITAIRES',
    name: 'document-name-finance-equipe',
    description: 'document-description-finance-equipe',
    path: `${import.meta.env.BASE_URL}documents/finance-equipe.pdf`,
  },
  REGLES_COMMANDITAIRES: {
    documentId: 'REGLES_COMMANDITAIRES',
    name: 'document-name-regles-commanditaires',
    description: 'document-description-regles-commanditaires',
    path: `${import.meta.env.BASE_URL}documents/regles-commanditaires.pdf`,
  },
  REGLES_TENUES: {
    documentId: 'REGLES_TENUES',
    name: 'document-name-regles-tenues',
    description: 'document-description-regles-tenues',
    path: `${import.meta.env.BASE_URL}documents/regles-tenues.pdf`,
  },
  STATISTIQUES_JEN: {
    documentId: 'STATISTIQUES_JEN',
    name: 'document-name-statistique-jen',
    description: 'document-description-statistique-jen',
    path: `${import.meta.env.BASE_URL}documents/statistique-jen.pdf`,
  },
  CODE_CONDUITE: {
    documentId: 'CODE_CONDUITE',
    name: 'document-name-code-conduite',
    description: 'document-description-code-conduite',
    path: `${import.meta.env.BASE_URL}documents/code-conduite.pdf`,
  },
  REGLES_COMMUNICATION_PUBLIQUE: {
    documentId: 'REGLES_COMMUNICATION_PUBLIQUE',
    name: 'document-name-regles-communication-publique',
    description: 'document-description-regles-communication-publique',
    path: `${
      import.meta.env.BASE_URL
    }documents/regles-communication-publique.pdf`,
  },
  REGLES_PARIS: {
    documentId: 'REGLES_PARIS',
    name: 'document-name-regles-paris',
    description: 'document-description-regles-paris',
    path: `${
      import.meta.env.BASE_URL
    }documents/regles-communication-publique.pdf`,
  },
  MARCHE_STREAMING: {
    documentId: 'MARCHE_STREAMING',
    name: 'document-name-marche-streaming',
    description: 'document-description-marche-streaming',
    path: `${import.meta.env.BASE_URL}documents/marche-streaming.pdf`,
  },
  REGLES_UTILISATION_TWITCH: {
    documentId: 'REGLES_UTILISATION_TWITCH',
    name: 'document-name-regle-utilisation-twitch',
    description: 'document-description-regle-utilisation-twitch',
    path: `${import.meta.env.BASE_URL}documents/regle-utilisation-twitch.pdf`,
  },
  POLITIQUES_COMPAGNIES_JV: {
    documentId: 'POLITIQUES_COMPAGNIES_JV',
    name: 'document-name-politiques-compagnies-jv',
    description: 'document-description-politiques-compagnies-jv',
    path: `${import.meta.env.BASE_URL}documents/politiques-compagnies-jv.pdf`,
  },
  // TODO: Document manquant
  FICHE_DESCRIPTIVE_OPULENCE: {
    documentId: 'FICHE_DESCRIPTIVE_OPULENCE',
    name: 'document-name-fiche-descriptive-opulence',
    description: 'document-description-fiche-descriptive-opulence',
    path: `${import.meta.env.BASE_URL}documents/fiche-descriptive-opulence.pdf`,
  },
  // TODO: Document manquant
  FICHE_DESCRIPTIVE_UPPERSTREAMER: {
    documentId: 'FICHE_DESCRIPTIVE_UPPERSTREAMER',
    name: 'document-name-fiche-descriptive-upperstreamer',
    description: 'document-description-fiche-descriptive-upperstreamer',
    path: `${import.meta.env.BASE_URL}documents/fiche-descriptive-upperstreamer.pdf`,
  },
  LIGNE_CONDUITE_TWITCH: {
    documentId: 'LIGNE_CONDUITE_TWITCH',
    name: 'document-name-ligne-conduite-twitch',
    description: 'document-description-ligne-conduite-twitch',
    path: `${import.meta.env.BASE_URL}documents/ligne-conduite-twitch.pdf`,
  },
  SANCTIONS_TWITCH: {
    documentId: 'SANCTIONS_TWITCH',
    name: 'document-name-sanctions-twitch',
    description: 'document-description-sanctions-twitch',
    path: `${import.meta.env.BASE_URL}documents/sanctions-twitch.pdf`,
  },
  SYNDICALISATION_STREAMERS: {
    documentId: 'SYNDICALISATION_STREAMERS',
    name: 'document-name-syndicalisation-streamers',
    description: 'document-description-syndicalisation-streamers',
    path: `${import.meta.env.BASE_URL}documents/syndicalisation-streamers.pdf`,
  },
  // TODO: Document manquant
  TOXICITE_JEUX_VIDEO: {
    documentId: 'TOXICITE_JEUX_VIDEO',
    name: 'document-name-toxicite-jv',
    description: 'document-description-toxicite-jv',
    path: `${import.meta.env.BASE_URL}documents/toxicite-jv.pdf`,
  },
  // TODO: Document manquant
  TOXICITE_LOL: {
    documentId: 'TOXICITE_LOL',
    name: 'document-name-toxicite-lol',
    description: 'document-description-toxicite-lol',
    path: `${import.meta.env.BASE_URL}documents/toxicite-lol.pdf`,
  },
  TRIBUNAL_JEUX_VIDEO: {
    documentId: 'TRIBUNAL_JEUX_VIDEO',
    name: 'document-name-tribunal-jv',
    description: 'document-description-tribunal-jv',
    path: `${import.meta.env.BASE_URL}documents/tribunal-jv.pdf`,
  },
  PENALITE_JEUX_VIDEO: {
    documentId: 'PENALITE_JEUX_VIDEO',
    name: 'document-name-penalite-jv',
    description: 'document-description-penalite-jv',
    path: `${import.meta.env.BASE_URL}documents/penalite-jv.pdf`,
  },
};
