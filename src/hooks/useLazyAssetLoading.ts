import { useEffect, useState } from 'react';

const characterModules = import.meta.glob<never, { load: () => Promise<void> }>(
  '../data/characters/*.ts'
);

export const useLazyAssetLoading = (): [boolean, number, number] => {
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
        .then(mod =>
          mod.load ? mod.load() : new Promise(resolve => resolve())
        )
        .then(() => {
          setLoadedCount(count => count + 1);
        });
    });
  }, []);

  return [
    modulePromises.length !== loadedCount,
    loadedCount,
    modulePromises.length,
  ];
};
