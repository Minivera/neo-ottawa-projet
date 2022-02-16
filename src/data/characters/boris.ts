import { FunctionComponent } from 'react';

import { Character } from '../../game/character';
import { loadingHelper } from '../../helpers/asyncImagesLoading';

const expressionImages = import.meta.glob<FunctionComponent>(
  '../../components/__generated__/characters/33 - Boris/*.tsx'
);

export const Boris: Character = {
  id: 'BORIS',
  name: 'boris',
  images: {},
  theme: 'resistance',
};

export const load: () => Promise<void[]> = loadingHelper(
  Boris,
  expressionImages,
  (key, value) => (Boris.images[key] = value)
);

