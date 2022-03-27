import { FunctionComponent } from 'react';

import { Character } from '../../game/character';
import { loadingHelper } from '../../helpers/asyncImagesLoading';

const expressionImages = import.meta.glob<FunctionComponent>(
  '../../components/__generated__/characters/37 - Clear View/*.tsx'
);

export const ClearView: Character = {
  id: 'CLEAR_VIEW',
  name: 'clear_view',
  images: {},
  imagePaths: {},
  theme: 'resistance',
};

export const load: () => Promise<void[]> = loadingHelper(
  ClearView,
  expressionImages,
  (key, value) => (ClearView.images[key] = value)
);

export default ClearView;
