import { FunctionComponent } from 'react';

import { Character } from '../../game/character';
import { loadingHelper } from '../../helpers/asyncImagesLoading';

const expressionImages = import.meta.glob<FunctionComponent>(
  '../../components/__generated__/characters/25 - Trevor/*.tsx'
);

export const Trevor: Character = {
  id: 'TREVOR',
  name: 'trevor',
  images: {},
  imagePaths: {},
  theme: 'resistance',
};

export const load: () => Promise<void[]> = loadingHelper(
  Trevor,
  expressionImages,
  (key, value) => (Trevor.images[key] = value)
);

export default Trevor;
