import { FunctionComponent } from 'react';

import { Character } from '../../game/character';
import { loadingHelper } from '../../helpers/asyncImagesLoading';

const expressionImages = import.meta.glob<FunctionComponent>(
  '../../components/__generated__/characters/05 - Agent Moore/*.tsx'
);

export const AgentMoore: Character = {
  id: 'AGENT_MOORE',
  name: 'agent_moore',
  images: {},
  theme: 'police',
};

export const load: () => Promise<void[]> = loadingHelper(
  AgentMoore,
  expressionImages,
  (key, value) => (AgentMoore.images[key] = value)
);
