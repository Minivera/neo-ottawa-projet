import { FunctionComponent } from 'react';

import { Character } from '../../game/character';
import { loadingHelper } from '../../helpers/asyncImagesLoading';

const expressionImages = import.meta.glob<FunctionComponent>(
  '../../components/__generated__/characters/32 - Medecin/*.tsx'
);

export const Medecin: Character = {
  id: 'MEDECIN',
  name: 'medecin',
  images: {},
  imagePaths: {},
  theme: 'other',
};

export const load: () => Promise<void[]> = loadingHelper(
  Medecin,
  expressionImages,
  (key, value) => (Medecin.images[key] = value)
);

export default Medecin;
