import React, { ImgHTMLAttributes } from 'react';

import image from '/src/assets/__generated__/characters/10 - Bonnie/default.png';

export const CharacterImage: React.FunctionComponent<
  ImgHTMLAttributes<HTMLImageElement>
> = props => <img {...props} src={image} alt="default" />;

export default CharacterImage;
        