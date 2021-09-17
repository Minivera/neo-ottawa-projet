import { useEffect, useState } from 'react';

// Keep this in memory to prevent the window from dumping the images we preloaded
const imageReferences: Record<string, HTMLImageElement> = {};

export const usePreloader = (imagePaths: string[]): boolean => {
  const [loading, setLoading] = useState(true);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (started) {
      return;
    }

    console.log('Game loading started');
    setStarted(true);

    (async () => {
      await Promise.all(
        imagePaths.map(async path => {
          const image = new Image();
          image.src = path;
          imageReferences[path] = image;
          image.setAttribute('style', 'display: none; height: 1px; width: 1px;');
          document.querySelector('body')?.appendChild(image);

          console.log(`Loading ${path} started`);
          const finalize = (resolve: () => void) => {
            if (image.complete/* && image.naturalHeight !== 0 */) {
              console.log(`Loading ${path} completed`);
              resolve();
              return;
            }

            setTimeout(() => finalize(resolve), 100);
          };

          return new Promise<void>(resolve => finalize(resolve));
        })
      );

      console.log('Game loading complete');
      setLoading(false);
    })();
  }, [imagePaths]);

  return loading;
};
