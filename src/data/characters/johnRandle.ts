import { FunctionComponent } from 'react';

import { Character } from '../../game/character';
import { loadingHelper } from '../../helpers/asyncImagesLoading';

const expressionImages = import.meta.glob<FunctionComponent>(
  '../../components/__generated__/characters/34 - John Randle/*.tsx'
);

export const JohnRandle: Character = {
  id: 'JOHN_RANDLE',
  name: 'john_randle',
  images: {},
  imagePaths: {},
  theme: 'resistance',
};

export const load: () => Promise<void[]> = loadingHelper(
  JohnRandle,
  expressionImages,
  (key, value) => (JohnRandle.images[key] = value)
);

export default JohnRandle;
