import { FunctionComponent } from 'react';

import { Character } from '../../game/character';
import { loadingHelper } from '../../helpers/asyncImagesLoading';

const expressionImages = import.meta.glob<FunctionComponent>(
  '../../components/__generated__/characters/36 - Mr Ghost/*.tsx'
);

export const MRGhost: Character = {
  id: 'MR_GHOST',
  name: 'mr_ghost',
  images: {},
  imagePaths: {},
  theme: 'other',
};

export const load: () => Promise<void[]> = loadingHelper(
  MRGhost,
  expressionImages,
  (key, value) => (MRGhost.images[key] = value)
);

export default MRGhost;
