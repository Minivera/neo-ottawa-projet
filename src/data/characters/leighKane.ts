import { FunctionComponent } from 'react';

import { Character } from '../../game/character';
import { loadingHelper } from '../../helpers/asyncImagesLoading';

const expressionImages = import.meta.glob<FunctionComponent>(
  '../../components/__generated__/characters/06 - Leigh Kane/*.tsx'
);

export const LeighKane: Character = {
  id: 'LEIGH_KANE',
  name: 'leigh_kane',
  images: {},
  theme: 'other',
};

export const load: () => Promise<void[]> = loadingHelper(
  LeighKane,
  expressionImages,
  (key, value) => (LeighKane.images[key] = value)
);

