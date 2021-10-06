import { FunctionComponent } from 'react';

import { Character } from '../../game/character';
import { loadingHelper } from '../../helpers/asyncImagesLoading';

const expressionImages = import.meta.glob<FunctionComponent>(
  '../../components/__generated__/characters/03 - Chef Miller/No Cigar/*.tsx'
);

export const ChefMillerNoCigar: Character = {
  id: 'CHEF_MILLER_NO_CIGAR',
  name: 'chef_miller',
  images: {},
};

export const load: () => Promise<void[]> = loadingHelper(
  ChefMillerNoCigar,
  expressionImages,
  (key, value) => (ChefMillerNoCigar.images[key] = value)
);


