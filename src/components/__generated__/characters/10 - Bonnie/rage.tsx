import React, { ImgHTMLAttributes } from 'react';

import image from '/src/assets/__generated__/characters/10 - Bonnie/rage.png';

export const CharacterImage: React.FunctionComponent<
  ImgHTMLAttributes<HTMLImageElement>
> = props => <img {...props} src={image} alt="rage" />;

export default CharacterImage;
        