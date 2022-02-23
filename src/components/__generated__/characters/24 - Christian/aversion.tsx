import React, { ImgHTMLAttributes } from 'react';

import image from '/src/assets/__generated__/characters/24 - Christian/aversion.png';

export const CharacterImage: React.FunctionComponent<
  ImgHTMLAttributes<HTMLImageElement>
> = props => <img {...props} src={image} alt="aversion" />;

export default CharacterImage;
        