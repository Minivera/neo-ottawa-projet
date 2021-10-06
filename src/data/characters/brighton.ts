import { FunctionComponent } from 'react';

import { Character } from '../../game/character';
import { loadingHelper } from '../../helpers/asyncImagesLoading';

const expressionImages = import.meta.glob<FunctionComponent>(
  '../../components/__generated__/characters/08 - Brighton/*.tsx'
);

export const Brighton: Character = {
  id: 'BRIGHTON',
  name: 'brighton',
  images: {},
};

export const load: () => Promise<void[]> = loadingHelper(
  Brighton,
  expressionImages,
  (key, value) => (Brighton.images[key] = value)
);

