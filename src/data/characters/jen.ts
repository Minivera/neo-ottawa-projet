import { FunctionComponent } from 'react';

import { Character } from '../../game/character';
import { loadingHelper } from '../../helpers/asyncImagesLoading';

const expressionImages = import.meta.glob<FunctionComponent>(
  '../../components/__generated__/characters/28 - Jen/*.tsx'
);

export const Jen: Character = {
  id: 'JEN',
  name: 'jen',
  images: {},
  imagePaths: {},
  theme: 'resistance',
};

export const load: () => Promise<void[]> = loadingHelper(
  Jen,
  expressionImages,
  (key, value) => (Jen.images[key] = value)
);

export default Jen;
