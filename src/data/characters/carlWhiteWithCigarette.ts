import { FunctionComponent } from 'react';

import { Character } from '../../game/character';
import { loadingHelper } from '../../helpers/asyncImagesLoading';

const expressionImages = import.meta.glob<FunctionComponent>(
  '../../components/__generated__/characters/18 - Carl White/with cigarette/*.tsx'
);

export const CarlWhiteWithCigarette: Character = {
  id: 'CARL_WHITE_WITH_CIGARETTE',
  name: 'carl_white',
  images: {},
  imagePaths: {},
  theme: 'other',
};

export const load: () => Promise<void[]> = loadingHelper(
  CarlWhiteWithCigarette,
  expressionImages,
  (key, value) => (CarlWhiteWithCigarette.images[key] = value)
);

export default CarlWhiteWithCigarette;
