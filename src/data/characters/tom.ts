import { FunctionComponent } from 'react';

import { Character } from '../../game/character';
import { loadingHelper } from '../../helpers/asyncImagesLoading';

const expressionImages = import.meta.glob<FunctionComponent>(
  '../../components/__generated__/characters/14 - Tom/*.tsx'
);

export const Tom: Character = {
  id: 'TOM',
  name: 'tom',
  images: {},
  theme: 'resistance',
};

export const load: () => Promise<void[]> = loadingHelper(
  Tom,
  expressionImages,
  (key, value) => (Tom.images[key] = value)
);
