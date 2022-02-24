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
        const getCharacterImagePage = /\.\.\/\.\.\/components\/__generated__\/characters([^.]*)/;

        const expressionName = key
          .replace(getFilenameRegex, '$2')
          .replace(cleanDotRegex, '');

        const convertedExpressions = knownExpressions as {[s: string]: string[]};

        if (
          expressionName !== 'neutral' &&
          convertedExpressions[character.id] &&
          !convertedExpressions[character.id].includes(expressionName)
        ) {
          // Ignore any expression not in the known expression
          return;
        }

        if (expressionName !== 'neutral' && !convertedExpressions[character.id]) {
          // Ignore any character that are not known to have any expression
          return;
        }

        const pathMatch = key.match(getCharacterImagePage);
        if (pathMatch) {
            const relativeFilePath = pathMatch[1];
            character.imagePaths[expressionName] = relativeFilePath;
        }

        const importFunc = images[key];
        const module = await importFunc();

        updateFunc(expressionName, module.default);
      })
    );
