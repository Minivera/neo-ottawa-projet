import { FunctionComponent } from 'react';

import { Character } from '../../game/character';
import { loadingHelper } from '../../helpers/asyncImagesLoading';

const expressionImages = import.meta.glob<FunctionComponent>(
  '../../components/__generated__/characters/21 - Al/*.tsx'
);

export const Al: Character = {
  id: 'AL',
  name: 'al',
  images: {},
};

export const load: () => Promise<void[]> = loadingHelper(
  Al,
  expressionImages,
  (key, value) => (Al.images[key] = value)
);
