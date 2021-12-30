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
};
