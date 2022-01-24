import { FunctionComponent } from 'react';

import { Character } from '../../game/character';
import { loadingHelper } from '../../helpers/asyncImagesLoading';

const expressionImages = import.meta.glob<FunctionComponent>(
  '../../components/__generated__/characters/04 - Agent Lucas/*.tsx'
);

export const AgentLucas: Character = {
  id: 'AGENT_LUCAS',
  name: 'agent_lucas',
  images: {},
  theme: 'police',
};

export const load: () => Promise<void[]> = loadingHelper(
  AgentLucas,
  expressionImages,
  (key, value) => (AgentLucas.images[key] = value)
);
