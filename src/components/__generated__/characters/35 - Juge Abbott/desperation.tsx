import React, { ImgHTMLAttributes } from 'react';

import image from '../../../../assets/__generated__/characters/35 - Juge Abbott/desperation.png';

export const CharacterImage: React.FunctionComponent<
  ImgHTMLAttributes<HTMLImageElement>
> = props => <img {...props} src={image} alt="desperation" />;

export default CharacterImage;
        