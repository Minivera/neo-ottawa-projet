import { FunctionComponent } from 'react';

import { Character } from '../../game/character';
import { loadingHelper } from '../../helpers/asyncImagesLoading';

const expressionImages = import.meta.glob<FunctionComponent>(
  '../../components/__generated__/characters/38 - Premier Ministre/*.tsx'
);

export const PremierMinistre: Character = {
  id: 'PREMIER_MINISTRE',
  name: 'premier_ministre',
  images: {},
  imagePaths: {},
  theme: 'other',
};

export const load: () => Promise<void[]> = loadingHelper(
  PremierMinistre,
  expressionImages,
  (key, value) => (PremierMinistre.images[key] = value)
);

export default PremierMinistre;
