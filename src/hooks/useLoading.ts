import { useEffect, useState } from 'react';
import { useLazyAssetLoading } from './useLazyAssetLoading';

// Keep this in memory to prevent the window from dumping the images we preloaded
const imageReferences: Record<string, HTMLImageElement> = {};

const maxConcurrentLoading = 10;

export const usePreloader = (imagePaths: string[]): [boolean, number] => {
  const [loadedIndicators, setLoadedIndicators] = useState<Record<string, boolean>>({});
  const [started, setStarted] = useState(false);
  const [assetLoading, assetsLoaded, assetsToLoad] = useLazyAssetLoading();

  useEffect(() => {
    if (started) {
      return;
    }

    setStarted(true);

    imagePaths.forEach(path => {
      loadedIndicators[path] = false;
    });
    setLoadedIndicators(loadedIndicators);

    (async () => {
      const groupedImage: string[][] = [];
      while (imagePaths.length) {
        groupedImage.push(imagePaths.splice(0, maxConcurrentLoading));
      }

      // Load in batches equal to our max batch size. All elements of a batch must resolve
      // before we start another one.
      await groupedImage.reduce(async (previousBatch, currentBatch) => {
        await previousBatch;

        const currentBatchPromises = currentBatch.map(async path => {
          const image = new Image();
          image.src = path;
          imageReferences[path] = image;
          image.setAttribute('style', 'display: none; height: 0px; width: 0px;');
          document.querySelector('body')?.appendChild(image);

          const finalize = (resolve: () => void) => {
            if (image.complete/* && image.naturalHeight !== 0 */) {
              setLoadedIndicators(loadedIndicators => ({
                ...loadedIndicators,
                [path]: true,
              }));
              resolve();
              return;
            }

            setTimeout(() => finalize(resolve), 100);
          };

          return new Promise<void>(resolve => finalize(resolve));
        });

        await Promise.all(currentBatchPromises);
      }, Promise.resolve());
    })();
  }, [imagePaths]);

  const values = Object.values(loadedIndicators);
  const countLoaded = values.reduce((acc, val) => acc + (val ? 1 : 0), 0);
  const percentLoaded = ((countLoaded + assetsLoaded) * 100) / (values.length + assetsToLoad);

  return [values.some(indicator => !indicator) || assetLoading, percentLoaded];
};
