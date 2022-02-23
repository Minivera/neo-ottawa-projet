import { FunctionComponent } from 'react';

import { Character } from '../../game/character';
import { loadingHelper } from '../../helpers/asyncImagesLoading';

const expressionImages = import.meta.glob<FunctionComponent>(
  '../../components/__generated__/characters/09 - Teacher/*.tsx'
);

export const TeacherV2: Character = {
  id: 'TEACHER_V2',
  name: 'teacher',
  images: {},
  imagePaths: {},
  theme: 'resistance',
};

export const load: () => Promise<void[]> = loadingHelper(
  TeacherV2,
  expressionImages,
  (key, value) => (TeacherV2.images[key] = value)
);

export default TeacherV2;
