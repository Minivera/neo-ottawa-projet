import { FunctionComponent } from 'react';

import { Character } from '../../game/character';
import { loadingHelper } from '../../helpers/asyncImagesLoading';

const expressionImages = import.meta.glob<FunctionComponent>(
  '../../components/__generated__/characters/09 - Teacher/*.tsx'
);

export const Teacher: Character = {
  id: 'TEACHER_V1',
  name: 'teacher',
  images: {},
  theme: 'resistance',
};

export const load: () => Promise<void[]> = loadingHelper(
  Teacher,
  expressionImages,
  (key, value) => (Teacher.images[key] = value)
);
