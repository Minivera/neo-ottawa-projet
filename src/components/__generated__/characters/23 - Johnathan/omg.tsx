import React, { ImgHTMLAttributes } from 'react';

import image from '../../../../assets/__generated__/characters/23 - Johnathan/omg.png';

export const CharacterImage: React.FunctionComponent<
  ImgHTMLAttributes<HTMLImageElement>
> = props => <img {...props} src={image} alt="omg" />;

export default CharacterImage;
        