import { FunctionComponent } from 'react';

import { Character } from '../../game/character';
import { loadingHelper } from '../../helpers/asyncImagesLoading';

const expressionImages = import.meta.glob<FunctionComponent>(
  '../../components/__generated__/characters/31 - Styliste/*.tsx'
);

export const Styliste: Character = {
  id: 'STYLISTE',
  name: 'styliste',
  images: {},
  imagePaths: {},
  theme: 'other',
};

export const load: () => Promise<void[]> = loadingHelper(
  Styliste,
  expressionImages,
  (key, value) => (Styliste.images[key] = value)
);

export default Styliste;
