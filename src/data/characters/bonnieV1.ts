import { FunctionComponent } from 'react';

import { Character } from '../../game/character';
import { loadingHelper } from '../../helpers/asyncImagesLoading';

const expressionImages = import.meta.glob<FunctionComponent>(
  '../../components/__generated__/characters/10 - Bonnie/*.tsx'
);

export const BonnieV1: Character = {
  id: 'BONNIE_RANDLE_V1',
  name: 'bonnie_randle',
  images: {},
};

export const load: () => Promise<void[]> = loadingHelper(
  BonnieV1,
  expressionImages,
  (key, value) => (BonnieV1.images[key] = value)
);
