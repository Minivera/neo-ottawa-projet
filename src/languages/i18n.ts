import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { interfaceTerms as frInterfaceTerms } from '../data/languages/fr/interface';
import { charactersNames as frCharacterNames } from '../data/languages/fr/names';
import { generatedTranslations } from '../../__generated__/translations';

const resources = {
  fr: {
    translation: {
      ...frInterfaceTerms,
      ...frCharacterNames,
      ...generatedTranslations.fr,

      // Game content
      'test_fullscreen_narration_1': `Ceci est une <s>narration</s> pleine écran traduite en temps réel. Tous les exemple suivants sont aussi traduis. La narration pleine écran s'affiche toujours au centre.`,
      'test_narration_1': `Ceci est une <s>narration</s> simple et pas pleine écran, elle s'affichera toujours en bas de l'écran.`,
      'test_1': `Ceci est un test d'un <s>dialogue</s> qui charge un seul personnage avec une expression joy à l'écan. Cet exemple utilise un animation "move_up" pour introduire le personnage.`,
      'test_2': `Ceci est un test d'un <s>dialogue</s> qui charge un second personnage avec une expression neutral à l'écan. Cet exemple utilise un animation "fade_in" pour introduire le personnage. à noter comment l'écran s'est adapté à plusieurs personnages.`,
      'test_3': `Ceci est un test d'un <s>dialogue</s> qui change l'expression d'un personnage. Noter comment les expressions restent les même sauf si spécifiquement configurés pour changer.`,
      'test_narration_2': `Ceci un test de <s>narration</s> avec des personnages à l'écran sans changer ces personnages, maintenant utilisé pour le choix 1`,
      'test_narration_clear_all': `Ceci un test de <s>narration</s> qui supprime tous les personnages à l'écran.`,
      'test_multiple_choice_1': `Ceci un test de <s>choix multiple</s> avec un personnage.`,
      'test_multiple_choice_1_option_1': `Voici un premier choix de taille normale`,
      'test_multiple_choice_1_option_2': `Voici un second choix de taille normale avec suffisament de texte que le button devrait naturellement reformater le texte avec un saut de ligne.`,
      'test_multiple_choice_1_option_3': `Voici un troisième choix avec un peu de <s>formattage</s>.`,
      'test_narration_3': `Ceci un test de <s>narration</s> qui sera affiché si vous avez choisi le choix 2`,
      'test_narration_4': `Ceci un test de <s>narration</s> qui sera affiché si vous avez choisi le choix 3`,


      // Game content - PDA
      'test_document_1': 'Ceci est un document qui pourrait être disponible dans le jeu',
      'test_document_2': 'Ceci est un second document qui pourrait être disponible dans le jeu',
      'test_contact_description_1': `Ceci est une description d'un contact qui pourrait être disponible dans le jeu`,
      'test_contact_description_2': `Ceci est une description d'un second contact qui pourrait être disponible dans le jeu`,
      'test_evidence_name_1': 'Téléphone',
      'test_evidence_name_2': 'Ordinateur',
      'test_evidence_name_3': 'Quiz',
      'test_evidence_name_4': 'Disquette',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'fr',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
