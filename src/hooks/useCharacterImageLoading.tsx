import React, {
  createContext,
  FunctionComponent,
  useState,
  useContext,
} from 'react';
import { loadImage } from '../helpers/loadImage';

export interface CharacterImagesContextType {
  imagesToLoad: number;
  imagesLoaded: number;
  loadImage: (image: string) => void;
}

const CharacterImagesContext = createContext<CharacterImagesContextType>({
  imagesLoaded: 0,
  imagesToLoad: 0,
  loadImage: () => {},
});

export const CharacterImageLoadingProvider: FunctionComponent = ({
  children,
}) => {
  const [toLoad, setToLoad] = useState<number>(0);
  const [loaded, setLoaded] = useState<number>(0);

  const handleLoadImage = (image: string) => {
    setToLoad(toLoad => toLoad + 1);
    loadImage(image, () => {
      setLoaded(loaded => loaded + 1);
    });
  };

  return (
    <CharacterImagesContext.Provider
      value={{
        imagesLoaded: loaded,
        imagesToLoad: toLoad,
        loadImage: handleLoadImage,
      }}
    >
      {children}
    </CharacterImagesContext.Provider>
  );
};

export const useCharacterImagesLoading = (): [boolean, number, number] => {
  const values = useContext(CharacterImagesContext);

  return [
    values.imagesToLoad === values.imagesLoaded,
    values.imagesLoaded,
    values.imagesToLoad,
  ];
};

export const useLoadCharacterImage = (): ((image: string) => void) => {
  const values = useContext(CharacterImagesContext);

  return values.loadImage;
};
