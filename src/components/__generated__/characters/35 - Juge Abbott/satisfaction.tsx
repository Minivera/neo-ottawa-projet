import React, { ImgHTMLAttributes } from 'react';

import image from '../../../../assets/__generated__/characters/35 - Juge Abbott/satisfaction.png';

export const CharacterImage: React.FunctionComponent<
  ImgHTMLAttributes<HTMLImageElement>
> = props => <img {...props} src={image} alt="satisfaction" />;

export default CharacterImage;
        