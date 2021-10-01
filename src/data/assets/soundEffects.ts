import { Howl } from 'howler';

import bigExhale from '../../assets/sound/big-exhale.mp3';

export const soundEffects: Record<string, Howl> = {
  big_exhale: new Howl({
    src: [bigExhale]
  }),
};
