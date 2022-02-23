import { FunctionComponent } from 'react';

import { Character } from '../../game/character';
import { loadingHelper } from '../../helpers/asyncImagesLoading';

const expressionImages = import.meta.glob<FunctionComponent>(
  '../../components/__generated__/characters/07 - Enqueteur du criminel/*.tsx'
);

export const Enqueteur: Character = {
  id: 'ENQUETEUR_BEAULIEU',
  name: 'enqueteur',
  images: {},
  imagePaths: {},
  theme: 'police',
};

export const load: () => Promise<void[]> = loadingHelper(
  Enqueteur,
  expressionImages,
  (key, value) => (Enqueteur.images[key] = value)
);

export default Enqueteur;
