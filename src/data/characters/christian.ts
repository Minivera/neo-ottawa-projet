import { FunctionComponent } from 'react';

import { Character } from '../../game/character';
import { loadingHelper } from '../../helpers/asyncImagesLoading';

const expressionImages = import.meta.glob<FunctionComponent>(
  '../../components/__generated__/characters/24 - Christian/*.tsx'
);

export const Christian: Character = {
  id: 'CHRISTIAN',
  name: 'christian',
  images: {},
  imagePaths: {},
  theme: 'resistance',
};

export const load: () => Promise<void[]> = loadingHelper(
  Christian,
  expressionImages,
  (key, value) => (Christian.images[key] = value)
);

export default Christian;
