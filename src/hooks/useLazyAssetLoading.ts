import { useEffect, useState } from 'react';

import { Character } from '../game/character';
import { loadImage } from '../helpers/loadImage';
import { useLoadCharacterImage } from './useCharacterImageLoading';

const characterModules = import.meta.glob<
  Character,
  { load: () => Promise<void> }
>('../data/characters/*.ts');
const characterImages = import.meta.glob<string>(
  '../assets/__generated__/characters/**/*.png'
);

export const useLazyAssetLoading = (): [boolean, number, number] => {
  const [loadingCount, setLoadingCount] = useState<number>(0);
  const [loadedCount, setLoadedCount] = useState<number>(0);
  const [started, setStarted] = useState(false);
  const loadCharacterImage = useLoadCharacterImage();

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
                await loadImage(imagePath, element => {
                  setLoadedCount(count => count + 1);
                  loadCharacterImage(imagePath, element);
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
