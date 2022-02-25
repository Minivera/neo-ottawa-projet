import React, { ImgHTMLAttributes } from 'react';

import image from '../../../../assets/__generated__/characters/22 - Administrateur/dejection.png';

export const CharacterImage: React.FunctionComponent<
  ImgHTMLAttributes<HTMLImageElement>
> = props => <img {...props} src={image} alt="dejection" />;

export default CharacterImage;
        