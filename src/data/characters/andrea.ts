import { FunctionComponent } from 'react';

import { Character } from '../../game/character';
import { loadingHelper } from '../../helpers/asyncImagesLoading';

const expressionImages = import.meta.glob<FunctionComponent>(
  '../../components/__generated__/characters/27 - Andrea/*.tsx'
);

export const Andrea: Character = {
  id: 'ANDREA',
  name: 'andrea',
  images: {},
  imagePaths: {},
  theme: 'resistance',
};

export const load: () => Promise<void[]> = loadingHelper(
  Andrea,
  expressionImages,
  (key, value) => (Andrea.images[key] = value)
);

export default Andrea;
