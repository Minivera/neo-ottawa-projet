import React, { ImgHTMLAttributes } from 'react';

import image from '../../../../assets/__generated__/characters/32 - Medecin/dejection.png';

export const CharacterImage: React.FunctionComponent<
  ImgHTMLAttributes<HTMLImageElement>
> = props => <img {...props} src={image} alt="dejection" />;

export default CharacterImage;
        