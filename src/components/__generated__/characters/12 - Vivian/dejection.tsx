import React, { ImgHTMLAttributes } from 'react';

import image from '/src/assets/__generated__/characters/12 - Vivian/dejection.png';

export const CharacterImage: React.FunctionComponent<
  ImgHTMLAttributes<HTMLImageElement>
> = props => <img {...props} src={image} alt="dejection" />;

export default CharacterImage;
        