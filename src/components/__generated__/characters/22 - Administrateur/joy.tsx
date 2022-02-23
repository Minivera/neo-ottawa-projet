import React, { ImgHTMLAttributes } from 'react';

import image from '/src/assets/__generated__/characters/22 - Administrateur/joy.png';

export const CharacterImage: React.FunctionComponent<
  ImgHTMLAttributes<HTMLImageElement>
> = props => <img {...props} src={image} alt="joy" />;

export default CharacterImage;
        