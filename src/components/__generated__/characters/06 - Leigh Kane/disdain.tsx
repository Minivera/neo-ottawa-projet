import React, { ImgHTMLAttributes } from 'react';

import image from '/src/assets/__generated__/characters/06 - Leigh Kane/disdain.png';

export const CharacterImage: React.FunctionComponent<
  ImgHTMLAttributes<HTMLImageElement>
> = props => <img {...props} src={image} alt="disdain" />;

export default CharacterImage;
        