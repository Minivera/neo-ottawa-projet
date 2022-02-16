import { FunctionComponent } from 'react';

import { Character } from '../../game/character';
import { loadingHelper } from '../../helpers/asyncImagesLoading';

const expressionImages = import.meta.glob<FunctionComponent>(
  '../../components/__generated__/characters/23 - Johnathan/*.tsx'
);

export const Jonathan: Character = {
  id: 'JONATHAN',
  name: 'jonathan',
  images: {},
  theme: 'resistance',
};

export const load: () => Promise<void[]> = loadingHelper(
    Jonathan,
  expressionImages,
  (key, value) => (Jonathan.images[key] = value)
);

