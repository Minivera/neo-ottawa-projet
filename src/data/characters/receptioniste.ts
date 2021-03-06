import { FunctionComponent } from 'react';

import { Character } from '../../game/character';
import { loadingHelper } from '../../helpers/asyncImagesLoading';

const expressionImages = import.meta.glob<FunctionComponent>(
  '../../components/__generated__/characters/15 - Receptioniste/*.tsx'
);

export const Receptioniste: Character = {
  id: 'RECEPTIONISTE',
  name: 'receptioniste',
  images: {},
  imagePaths: {},
  theme: 'other',
};

export const load: () => Promise<void[]> = loadingHelper(
  Receptioniste,
  expressionImages,
  (key, value) => (Receptioniste.images[key] = value)
);

export default Receptioniste;
