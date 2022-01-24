import { FunctionComponent } from 'react';

import { Character } from '../../game/character';
import { loadingHelper } from '../../helpers/asyncImagesLoading';

const expressionImages = import.meta.glob<FunctionComponent>(
  '../../components/__generated__/characters/10 - Bonnie/*.tsx'
);

export const BonnieV2: Character = {
  id: 'BONNIE_RANDLE_V2',
  name: 'bonnie_randle',
  images: {},
  theme: 'resistance',
};

export const load: () => Promise<void[]> = loadingHelper(
  BonnieV2,
  expressionImages,
  (key, value) => (BonnieV2.images[key] = value)
);
