import React, { ImgHTMLAttributes } from 'react';

import image from '/src/assets/__generated__/characters/15 - Receptioniste/surprise.png';

export const CharacterImage: React.FunctionComponent<
  ImgHTMLAttributes<HTMLImageElement>
> = props => <img {...props} src={image} alt="surprise" />;

export default CharacterImage;
        