import { FunctionComponent } from 'react';

import { Character } from '../../game/character';
import { loadingHelper } from '../../helpers/asyncImagesLoading';

const expressionImages = import.meta.glob<FunctionComponent>(
  '../../components/__generated__/characters/13 - Ronny/*.tsx'
);

export const Ronny: Character = {
  id: 'RONNY',
  name: 'ronny',
  images: {},
  imagePaths: {},
  theme: 'resistance',
};

export const load: () => Promise<void[]> = loadingHelper(
  Ronny,
  expressionImages,
  (key, value) => (Ronny.images[key] = value)
);

export default Ronny;
