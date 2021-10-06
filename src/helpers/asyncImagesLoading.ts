import { FunctionComponent } from 'react';

import { Character } from '../game/character';
import { knownExpressions } from '../data/__generated__/knownExpression';

export const loadingHelper =
  (
    character: Character,
    images: Record<string, () => Promise<{ default: FunctionComponent }>>,
    updateFunc: (key: string, value: FunctionComponent) => void
  ): (() => Promise<void[]>) =>
  async (): Promise<void[]> =>
    Promise.all(
      Object.keys(images).map(async key => {
        const getFilenameRegex = /(.+)\/(.+)$/;
        const cleanDotRegex = /\..+$/;

        const expressionName = key
          .replace(getFilenameRegex, '$2')
          .replace(cleanDotRegex, '');

        if (
          expressionName !== 'neutral' &&
          knownExpressions[character.id] &&
          !knownExpressions[character.id].includes(expressionName)
        ) {
          // Ignore any expression not in the known expression
          return;
        }

        if (expressionName !== 'neutral' && !knownExpressions[character.id]) {
          // Ignore any character that are not known to have any expression
          return;
        }

        const importFunc = images[key];
        const module = await importFunc();

        updateFunc(expressionName, module.default);
      })
    );
