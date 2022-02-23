import React, { ImgHTMLAttributes } from 'react';

import image from '/src/assets/__generated__/characters/14 - Tom/disgust.png';

export const CharacterImage: React.FunctionComponent<
  ImgHTMLAttributes<HTMLImageElement>
> = props => <img {...props} src={image} alt="disgust" />;

export default CharacterImage;
        