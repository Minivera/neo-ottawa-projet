import { useEffect, useState } from 'react';

import { Character } from '../game/character';
import { loadImage } from '../helpers/loadImage';

const characterModules = import.meta.glob<
  Character,
  { load: () => Promise<void> }
>('../data/characters/*.ts');

export const useLazyAssetLoading = (): [boolean, number, number] => {
  const [loadingCount, setLoadingCount] = useState<number>(0);
  const [loadedCount, setLoadedCount] = useState<number>(0);
  const [started, setStarted] = useState(false);

  const modulePromises = Object.values(characterModules);

  useEffect(() => {
    if (started) {
      return;
    }

    setStarted(true);

    modulePromises.forEach(module => {
      module()
        .then(mod => {
          mod.load ? mod.load() : new Promise(resolve => resolve(null));
          return mod.default;
        })
        .then(async character => {
          setLoadedCount(count => count + 1);
          if (!character) {
            return;
          }

          setLoadingCount(
            count => count + Object.keys(character.imagePaths).length
          );

          // Load all the character images in addition to the normal images
          await Promise.all(
            Object.values(character.imagePaths).map(path => {
              const imagePath = new URL(path, import.meta.url);
              return loadImage(imagePath.href, () => {
                setLoadedCount(count => count + 1);
              });
            })
          );
        });
    });
  }, []);

  return [
    modulePromises.length + loadingCount !== loadedCount,
    loadedCount,
    modulePromises.length + loadingCount,
  ];
};
