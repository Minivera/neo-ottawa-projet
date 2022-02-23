import { FunctionComponent } from 'react';

import { Character } from '../../game/character';
import { loadingHelper } from '../../helpers/asyncImagesLoading';

const expressionImages = import.meta.glob<FunctionComponent>(
  '../../components/__generated__/characters/18 - Carl White/with cigarette/*.tsx'
);

export const CarlWhite: Character = {
  id: 'CARL_WHITE',
  name: 'carl_white',
  images: {},
  imagePaths: {},
  theme: 'other',
};

export const load: () => Promise<void[]> = loadingHelper(
  CarlWhite,
  expressionImages,
  (key, value) => (CarlWhite.images[key] = value)
);

export default CarlWhite;
