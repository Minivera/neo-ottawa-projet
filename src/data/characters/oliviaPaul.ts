import { FunctionComponent } from 'react';

import { Character } from '../../game/character';
import { loadingHelper } from '../../helpers/asyncImagesLoading';

const expressionImages = import.meta.glob<FunctionComponent>(
  '../../components/__generated__/characters/17 - Olivia Paul/*.tsx'
);

export const OliviaPaul: Character = {
  id: 'OLIVIA_PAUL',
  name: 'olivia_paul',
  images: {},
};

export const load: () => Promise<void[]> = loadingHelper(
  OliviaPaul,
  expressionImages,
  (key, value) => (OliviaPaul.images[key] = value)
);
