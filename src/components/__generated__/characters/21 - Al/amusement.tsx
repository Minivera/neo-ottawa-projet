import React, { ImgHTMLAttributes } from 'react';

import image from '/src/assets/__generated__/characters/21 - Al/amusement.png';

export const CharacterImage: React.FunctionComponent<
  ImgHTMLAttributes<HTMLImageElement>
> = props => <img {...props} src={image} alt="amusement" />;

export default CharacterImage;
        