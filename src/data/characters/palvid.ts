import { FunctionComponent } from 'react';

import { Character } from '../../game/character';
import { loadingHelper } from '../../helpers/asyncImagesLoading';

const expressionImages = import.meta.glob<FunctionComponent>(
  '../../components/__generated__/characters/29 - Palvid_/*.tsx'
);

export const Palvid: Character = {
  id: 'PALVID',
  name: 'palvid',
  images: {},
  imagePaths: {},
  theme: 'resistance',
};

export const load: () => Promise<void[]> = loadingHelper(
  Palvid,
  expressionImages,
  (key, value) => (Palvid.images[key] = value)
);

export default Palvid;
