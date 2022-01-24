import { FunctionComponent } from 'react';

import { Character } from '../../game/character';
import { loadingHelper } from '../../helpers/asyncImagesLoading';

const expressionImages = import.meta.glob<FunctionComponent>(
  '../../components/__generated__/characters/18 - Carl White/no cigarette/*.tsx'
);

export const CarlWhiteNoCigarette: Character = {
  id: 'CARL_WHITE_NO_CIGARETTE',
  name: 'carl_white',
  images: {},
  theme: 'other',
};

export const load: () => Promise<void[]> = loadingHelper(
  CarlWhiteNoCigarette,
  expressionImages,
  (key, value) => (CarlWhiteNoCigarette.images[key] = value)
);
