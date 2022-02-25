import React, { ImgHTMLAttributes } from 'react';

import image from '../../../../assets/__generated__/characters/32 - Medecin/cruel.png';

export const CharacterImage: React.FunctionComponent<
  ImgHTMLAttributes<HTMLImageElement>
> = props => <img {...props} src={image} alt="cruel" />;

export default CharacterImage;
        