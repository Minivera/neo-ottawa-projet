import { useEffect, useState } from 'react';

import { Character } from '../game/character';
import { loadImage } from '../helpers/loadImage';

const characterModules = import.meta.glob<
  Character,
  { load: () => Promise<void> }
>('../data/characters/*.ts');
const characterImages = import.meta.glob<string>(
  '../assets/__generated__/characters/**/*.png'
);

export const getLazyAssetsLinks = async (): Promise<string> => {
  const modulePromises = Object.values(characterModules);

  return (
    await Promise.all(
      modulePromises.map<Promise<string>>(async (promise): Promise<string> => {
        const character = await promise().then(mod => {
          mod.load ? mod.load() : new Promise(resolve => resolve(null));
          return mod.default;
        });

        if (!character) {
          return '';
        }

        return (
          await Promise.all(
            Object.values(character.imagePaths).map(async path => {
              const imageModule = Object.entries(characterImages).find(
                ([key]) => key.toLowerCase().includes(path.toLowerCase())
              );

              if (imageModule) {
                const imagePath = (await imageModule[1]()).default;
                return `<link rel="preload" as="image" data-loading href="${imagePath}">`;
              }

              return '';
            })
          )
        ).join('\n');
      })
    )
  ).join('\n');
};

export const useLazyAssetLoading = (): [boolean, number, number] => {
  // Purposefully ignoring the rules of hooks here
  if (import.meta.env.SSR) {
    return [true, 0, 1];
  }

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
            Object.values(character.imagePaths).map(async path => {
              const imageModule = Object.entries(characterImages).find(
                ([key]) => key.toLowerCase().includes(path.toLowerCase())
              );

              if (imageModule) {
                const imagePath = (await imageModule[1]()).default;
                await loadImage(imagePath, () => {
                  setLoadedCount(count => count + 1);
                });
              }
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
