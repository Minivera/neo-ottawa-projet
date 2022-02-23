import React, { ImgHTMLAttributes } from 'react';

import image from '/src/assets/__generated__/characters/15 - Receptioniste/neutral.png';

export const CharacterImage: React.FunctionComponent<
  ImgHTMLAttributes<HTMLImageElement>
> = props => <img {...props} src={image} alt="neutral" />;

export default CharacterImage;
        