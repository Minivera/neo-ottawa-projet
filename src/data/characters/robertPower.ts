import { FunctionComponent } from 'react';

import { Character } from '../../game/character';
import { loadingHelper } from '../../helpers/asyncImagesLoading';

const expressionImages = import.meta.glob<FunctionComponent>(
  '../../components/__generated__/characters/16 - Robert Power/*.tsx'
);

export const RobertPower: Character = {
  id: 'ROBERT_POWER',
  name: 'robert_power',
  images: {},
};

export const load: () => Promise<void[]> = loadingHelper(
  RobertPower,
  expressionImages,
  (key, value) => (RobertPower.images[key] = value)
);
