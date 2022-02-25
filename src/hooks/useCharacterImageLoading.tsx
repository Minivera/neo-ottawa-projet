import React, {
  createContext,
  FunctionComponent,
  useState,
  useContext,
  ReactElement,
} from 'react';

export interface CharacterImagesContextType {
  images: Record<string, HTMLImageElement>;
  loadImage: (image: string, element: HTMLImageElement) => void;
}

const CharacterImagesContext = createContext<CharacterImagesContextType>({
  images: {},
  loadImage: () => {},
});

export const CharacterImageProvider: FunctionComponent = ({ children }) => {
  const [imageRefs, setImageRef] = useState<Record<string, HTMLImageElement>>(
    {}
  );

  const handleLoadImage = (image: string, element: HTMLImageElement) => {
    setImageRef(imageRefs => ({
      ...imageRefs,
      [image]: element,
    }));
  };

  return (
    <CharacterImagesContext.Provider
      value={{
        images: imageRefs,
        loadImage: handleLoadImage,
      }}
    >
      {children}
    </CharacterImagesContext.Provider>
  );
};

export const useCharacterImage = (imagePath: string): ReactElement | null => {
  const values = useContext(CharacterImagesContext);

  const imageElement = values.images[imagePath];
  if (!imageElement) {
    return null;
  }

  return <img src={imageElement.src} alt={imageElement.alt} />;
};

export const useLoadCharacterImage = (): ((
  image: string,
  imageElement: HTMLImageElement
) => void) => {
  const values = useContext(CharacterImagesContext);

  return values.loadImage;
};
