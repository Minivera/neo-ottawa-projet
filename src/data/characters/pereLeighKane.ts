import { FunctionComponent } from 'react';

import { Character } from '../../game/character';
import { loadingHelper } from '../../helpers/asyncImagesLoading';

const expressionImages = import.meta.glob<FunctionComponent>(
  '../../components/__generated__/characters/20 - Pere de Leigh Kane/*.tsx'
);

export const PereLeighKane: Character = {
  id: 'PERE_DE_LEIGH_KANE',
  name: 'pere_leigh_kane',
  images: {},
  theme: 'other',
};

export const load: () => Promise<void[]> = loadingHelper(
  PereLeighKane,
  expressionImages,
  (key, value) => (PereLeighKane.images[key] = value)
);

