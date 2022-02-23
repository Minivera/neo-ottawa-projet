import { FunctionComponent } from 'react';

import { Character } from '../../game/character';
import { loadingHelper } from '../../helpers/asyncImagesLoading';

const expressionImages = import.meta.glob<FunctionComponent>(
  '../../components/__generated__/characters/09 - Teacher/*.tsx'
);

export const TeacherV1: Character = {
  id: 'TEACHER_V1',
  name: 'teacher',
  images: {},
  imagePaths: {},
  theme: 'resistance',
};

export const load: () => Promise<void[]> = loadingHelper(
  TeacherV1,
  expressionImages,
  (key, value) => (TeacherV1.images[key] = value)
);

export default TeacherV1;
