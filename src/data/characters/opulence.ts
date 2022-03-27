import { FunctionComponent } from 'react';

import { Character } from '../../game/character';
import { loadingHelper } from '../../helpers/asyncImagesLoading';

const expressionImages = import.meta.glob<FunctionComponent>(
  '../../components/__generated__/characters/30 - Opulence/*.tsx'
);

export const Opulence: Character = {
  id: 'OPULENCE',
  name: 'opulence',
  images: {},
  imagePaths: {},
  theme: 'resistance',
};

export const load: () => Promise<void[]> = loadingHelper(
  Opulence,
  expressionImages,
  (key, value) => (Opulence.images[key] = value)
);

export default Opulence;
