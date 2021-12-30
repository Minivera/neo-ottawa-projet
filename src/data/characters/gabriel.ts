import { FunctionComponent } from 'react';

import { Character } from '../../game/character';
import { loadingHelper } from '../../helpers/asyncImagesLoading';

const expressionImages = import.meta.glob<FunctionComponent>(
  '../../components/__generated__/characters/02 - Gabriel/*.tsx'
);

export const Gabriel: Character = {
  id: 'GABRIEL_SAND',
  name: 'gabriel_sand',
  images: {},
};

export const load: () => Promise<void[]> = loadingHelper(
  Gabriel,
  expressionImages,
  (key, value) => (Gabriel.images[key] = value)
);
