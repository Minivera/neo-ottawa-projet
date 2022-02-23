import { FunctionComponent } from 'react';

import { Character } from '../../game/character';
import { loadingHelper } from '../../helpers/asyncImagesLoading';

const expressionImages = import.meta.glob<FunctionComponent>(
  '../../components/__generated__/characters/39 - Intervenant hospitalier/*.tsx'
);

export const Intervenant: Character = {
  id: 'INTERVENANT',
  name: 'intervenant',
  images: {},
  imagePaths: {},
  theme: 'other',
};

export const load: () => Promise<void[]> = loadingHelper(
  Intervenant,
  expressionImages,
  (key, value) => (Intervenant.images[key] = value)
);

export default Intervenant;
