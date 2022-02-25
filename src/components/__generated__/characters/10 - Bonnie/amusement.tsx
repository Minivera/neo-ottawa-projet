import React, { ImgHTMLAttributes } from 'react';

import image from '../../../../assets/__generated__/characters/10 - Bonnie/amusement.png';

export const CharacterImage: React.FunctionComponent<
  ImgHTMLAttributes<HTMLImageElement>
> = props => <img {...props} src={image} alt="amusement" />;

export default CharacterImage;
        