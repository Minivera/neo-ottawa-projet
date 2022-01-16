import { Howl } from 'howler';

import bigExhale from '../../assets/sound/big-exhale.mp3';

export const soundEffects: Record<string, Howl> = {
  respiration: new Howl({
    src: [bigExhale]
  }),
  opening_door: new Howl({
    src: [bigExhale]
  }),
  sonnerie_telephone: new Howl({
    src: [bigExhale]
  }),
  cris: new Howl({
    src: [bigExhale]
  }),
  aboiements: new Howl({
    src: [bigExhale]
  }),
  composer_numero: new Howl({
    src: [bigExhale]
  }),
  claquement_porte: new Howl({
    src: [bigExhale]
  }),
  cogner_porte: new Howl({
    src: [bigExhale]
  }),
  dossier_depose_bureau: new Howl({
    src: [bigExhale]
  }),
  reveille_brusque: new Howl({
    src: [bigExhale]
  }),
  raccrocher_telephone: new Howl({
    src: [bigExhale]
  }),
  son_erreur: new Howl({
    src: [bigExhale]
  }),
  son_demarrage_ordinateur: new Howl({
    src: [bigExhale]
  }),
  sonnette_futuriste: new Howl({
    src: [bigExhale]
  }),
  ouverture_trappe: new Howl({
    src: [bigExhale]
  }),
  clic_souris: new Howl({
    src: [bigExhale]
  }),
};
