import React, { ImgHTMLAttributes } from 'react';

import image from '../../../../assets/__generated__/characters/17 - Olivia Paul/amusement.png';

export const CharacterImage: React.FunctionComponent<
  ImgHTMLAttributes<HTMLImageElement>
> = props => <img {...props} src={image} alt="amusement" />;

export default CharacterImage;
        