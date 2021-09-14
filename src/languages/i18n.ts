import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  fr: {
    translation: {
      'test_fullscreen_narration_1': `Ceci est une <s>narration</s> pleine écran traduite en temps réel. Tous les exemple suivants sont aussi traduis. La narration pleine écran s'affiche toujours au centre.`,
      'test_narration_1': `Ceci est une <s>narration</s> simple et pas pleine écran, elle s'affichera toujours en bas de l'écran.`,
      'test_1': `Ceci est un test d'un <s>dialogue</s> qui charge un seul personnage avec une expression joy à l'écan. Cet exemple utilise un animation "move_up" pour introduire le personnage.`,
      'test_2': `Ceci est un test d'un <s>dialogue</s> qui charge un second personnage avec une expression neutral à l'écan. Cet exemple utilise un animation "fade_in" pour introduire le personnage. à noter comment l'écran s'est adapté à plusieurs personnages.`,
      'test_3': `Ceci est un test d'un <s>dialogue</s> qui change l'expression d'un personnage. Noter comment les expressions restent les même sauf si spécifiquement configurés pour changer.`,
      'test_narration_2': `Ceci un test de <s>narration</s> avec des personnages à l'écran sans changer ces personnages.`,
      'test_narration_clear_all': `Ceci un test de <s>narration</s> qui supprime tous les personnages à l'écran.`,
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
