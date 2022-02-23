import { FunctionComponent } from 'react';

import { Character } from '../../game/character';
import { loadingHelper } from '../../helpers/asyncImagesLoading';

const expressionImages = import.meta.glob<FunctionComponent>(
  '../../components/__generated__/characters/03 - Chef Miller/With Cigar/*.tsx'
);

export const ChefMillerCigar: Character = {
  id: 'CHEF_MILLER',
  name: 'chef_miller',
  images: {},
  imagePaths: {},
  theme: 'police',
};

export const load: () => Promise<void[]> = loadingHelper(
  ChefMillerCigar,
  expressionImages,
  (key, value) => (ChefMillerCigar.images[key] = value)
);

export default ChefMillerCigar;
