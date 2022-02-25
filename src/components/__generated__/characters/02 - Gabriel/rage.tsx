import React, { ImgHTMLAttributes } from 'react';

import image from '../../../../assets/__generated__/characters/02 - Gabriel/rage.png';

export const CharacterImage: React.FunctionComponent<
  ImgHTMLAttributes<HTMLImageElement>
> = props => <img {...props} src={image} alt="rage" />;

export default CharacterImage;
        