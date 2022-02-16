import { FunctionComponent } from 'react';

import { Character } from '../../game/character';
import { loadingHelper } from '../../helpers/asyncImagesLoading';

const expressionImages = import.meta.glob<FunctionComponent>(
  '../../components/__generated__/characters/19 - Mere de Leigh Kane/*.tsx'
);

export const MereLeighKane: Character = {
  id: 'MERE_DE_LEIGH_KANE',
  name: 'mere_leigh_kane',
  images: {},
  theme: 'other',
};

export const load: () => Promise<void[]> = loadingHelper(
  MereLeighKane,
  expressionImages,
  (key, value) => (MereLeighKane.images[key] = value)
);
