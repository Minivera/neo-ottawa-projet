import React, { ImgHTMLAttributes } from 'react';

import image from '/src/assets/__generated__/characters/13 - Ronny/shock.png';

export const CharacterImage: React.FunctionComponent<
  ImgHTMLAttributes<HTMLImageElement>
> = props => <img {...props} src={image} alt="shock" />;

export default CharacterImage;
        