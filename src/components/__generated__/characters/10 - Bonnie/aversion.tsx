import React, { ImgHTMLAttributes } from 'react';

import image from '/src/assets/__generated__/characters/10 - Bonnie/aversion.png';

export const CharacterImage: React.FunctionComponent<
  ImgHTMLAttributes<HTMLImageElement>
> = props => <img {...props} src={image} alt="aversion" />;

export default CharacterImage;
        