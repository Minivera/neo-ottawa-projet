import { FunctionComponent } from 'react';

import { Character } from '../../game/character';
import { loadingHelper } from '../../helpers/asyncImagesLoading';

const expressionImages = import.meta.glob<FunctionComponent>(
  '../../components/__generated__/characters/10 - Bonnie/*.tsx'
);

export const Bonnie: Character = {
  id: 'BONNIE_RANDLE',
  name: 'bonnie_randle',
  images: {},
};

export const load: () => Promise<void[]> = loadingHelper(
  Bonnie,
  expressionImages,
  (key, value) => (Bonnie.images[key] = value)
);
