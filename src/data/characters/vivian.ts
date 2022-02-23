import { FunctionComponent } from 'react';

import { Character } from '../../game/character';
import { loadingHelper } from '../../helpers/asyncImagesLoading';

const expressionImages = import.meta.glob<FunctionComponent>(
  '../../components/__generated__/characters/12 - Vivian/*.tsx'
);

export const Vivian: Character = {
  id: 'VIVIAN',
  name: 'vivian',
  images: {},
  imagePaths: {},
  theme: 'resistance',
};

export const load: () => Promise<void[]> = loadingHelper(
  Vivian,
  expressionImages,
  (key, value) => (Vivian.images[key] = value)
);

export default Vivian;
