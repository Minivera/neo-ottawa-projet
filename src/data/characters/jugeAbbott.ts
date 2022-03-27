import { FunctionComponent } from 'react';

import { Character } from '../../game/character';
import { loadingHelper } from '../../helpers/asyncImagesLoading';

const expressionImages = import.meta.glob<FunctionComponent>(
  '../../components/__generated__/characters/35 - Juge Abbott/*.tsx'
);

export const JugeAbbott: Character = {
  id: 'JUGE_ABBOTT',
  name: 'juge_abbott',
  images: {},
  imagePaths: {},
  theme: 'other',
};

export const load: () => Promise<void[]> = loadingHelper(
  JugeAbbott,
  expressionImages,
  (key, value) => (JugeAbbott.images[key] = value)
);

export default JugeAbbott;
