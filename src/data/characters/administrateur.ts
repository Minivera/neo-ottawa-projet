import { FunctionComponent } from 'react';

import { Character } from '../../game/character';
import { loadingHelper } from '../../helpers/asyncImagesLoading';

const expressionImages = import.meta.glob<FunctionComponent>(
  '../../components/__generated__/characters/22 - Administrateur/*.tsx'
);

export const Administrateur: Character = {
  id: 'ADMINISTRATEUR',
  name: 'administrateur',
  images: {},
};

export const load: () => Promise<void[]> = loadingHelper(
  Administrateur,
  expressionImages,
  (key, value) => (Administrateur.images[key] = value)
);
