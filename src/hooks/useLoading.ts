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

    setStarted(true);

    (async () => {
      await Promise.all(
        imagePaths.map(async path => {
          const image = new Image();
          image.src = path;
          imageReferences[path] = image;
          image.setAttribute('style', 'display: none; height: 0; width: 0;');
          document.querySelector('body')?.appendChild(image);

          const finalize = (resolve: () => void) => {
            if (image.complete && image.naturalHeight !== 0) {
              resolve();
              return;
            }

            setTimeout(() => finalize(resolve), 10);
          };

          return new Promise<void>(resolve => finalize(resolve));
        })
      );

      setLoading(false);
    })();
  }, [imagePaths]);

  return loading;
};
