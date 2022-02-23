import React, { ImgHTMLAttributes } from 'react';

import image from '/src/assets/__generated__/characters/09 - Teacher/satisfaction.png';

export const CharacterImage: React.FunctionComponent<
  ImgHTMLAttributes<HTMLImageElement>
> = props => <img {...props} src={image} alt="satisfaction" />;

export default CharacterImage;
        