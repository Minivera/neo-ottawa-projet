import React, { ImgHTMLAttributes } from 'react';

import image from '../../../../assets/__generated__/characters/27 - Andrea/disgust.png';

export const CharacterImage: React.FunctionComponent<
  ImgHTMLAttributes<HTMLImageElement>
> = props => <img {...props} src={image} alt="disgust" />;

export default CharacterImage;
        