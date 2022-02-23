import React, { ImgHTMLAttributes } from 'react';

import image from '/src/assets/__generated__/characters/28 - Jen/melancholy.png';

export const CharacterImage: React.FunctionComponent<
  ImgHTMLAttributes<HTMLImageElement>
> = props => <img {...props} src={image} alt="melancholy" />;

export default CharacterImage;
        