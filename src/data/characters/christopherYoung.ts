import { FunctionComponent } from 'react';

import { Character } from '../../game/character';
import { loadingHelper } from '../../helpers/asyncImagesLoading';

const expressionImages = import.meta.glob<FunctionComponent>(
  '../../components/__generated__/characters/11 - Christopher Young/*.tsx'
);

export const ChristopherYoung: Character = {
  id: 'CHRISTOPHER_YOUNG',
  name: 'christopher_young',
  images: {},
};

export const load: () => Promise<void[]> = loadingHelper(
  ChristopherYoung,
  expressionImages,
  (key, value) => (ChristopherYoung.images[key] = value)
);
