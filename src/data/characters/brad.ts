import { FunctionComponent } from 'react';

import { Character } from '../../game/character';
import { loadingHelper } from '../../helpers/asyncImagesLoading';

const expressionImages = import.meta.glob<FunctionComponent>(
  '../../components/__generated__/characters/26 - Brad/*.tsx'
);

export const Brad: Character = {
  id: 'BRAD',
  name: 'brad',
  images: {},
  imagePaths: {},
  theme: 'resistance',
};

export const load: () => Promise<void[]> = loadingHelper(
  Brad,
  expressionImages,
  (key, value) => (Brad.images[key] = value)
);

export default Brad;
